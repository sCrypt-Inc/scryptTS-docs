---
sidebar_position: 2
---

# How to Add a Signer


As described in [this section](../how-to-test-a-contract.md#signer), a signer is an abstraction of private keys, which can be used to sign messages and transactions. A simple signer would be a single private key, while a complex signer is a wallet.

`sCrypt` provides the following signers by default:

1. `TestWallet` : a simple wallet that can hold multiple private keys, with in-memory utxo management. Should only be used for testing.
2. `SensiletSigner`: a signer powered by the popular smart contract wallet [Sensilet](https://sensilet.com/). Can be used in production.

## Implementation

### Base Class `Signer`

If you want to implement your own signer, you must inherit from the base class `Signer`.


```ts
/**
 * A `Signer` is a class which in some way directly or indirectly has access to a private key, which can sign messages and transactions to authorize the network to perform operations.
 */
export abstract class Signer {

  provider?: Provider;
  readonly _isSigner: boolean;

  constructor(provider?: Provider) {
    this._isSigner = true;
    this.provider = provider;
  }

  /**
   * Connect a provider to `this`.
   * @param provider The target provider.
   * @returns 
   */
  abstract connect(provider: Provider): Promise<this>;

  // Account

  /**
   * 
   * @returns A promise which resolves to the address to the default private key of the signer.
   */
  abstract getDefaultAddress(): Promise<bsv.Address>;

  /**
   * 
   * @returns A promise which resolves to the public key of the default private key of the signer.
   */
  abstract getDefaultPubKey(): Promise<bsv.PublicKey>;

  /**
   * 
   * @param address The request address, using the default address if omitted.
   * @returns The public key result.
   * @throws If the private key for the address does not belong this signer.
   */
  abstract getPubKey(address?: AddressOption): Promise<bsv.PublicKey>;

  // Signing

  /**
   * Sign a raw transaction hex string.
   * 
   * @param rawTxHex The raw transaction hex to sign.
   * @param options The options for signing, see the details of `SignTransactionOptions`.
   * @returns A promise which resolves to the signed transaction hex string.
   * @throws If any input of the transaction can not be signed properly.
   */
  abstract signRawTransaction(rawTxHex: string, options: SignTransactionOptions): Promise<string>;

  /**
   * Sign a transaction object.
   * @param tx The transaction object to sign.
   * @param options The options for signing, see the details of `SignTransactionOptions`.
   * @returns A promise which resolves to the signed transaction object.
   */
  abstract signTransaction(tx: bsv.Transaction, options?: SignTransactionOptions): Promise<bsv.Transaction>;

  /**
   * Sign a message string.
   * @param message The message to be signed.
   * @param address The optional address whose private key will be used to sign `message`, using the default private key if omitted.
   * @returns A promise which resolves to the signautre of the message. 
   */
  abstract signMessage(message: string, address?: AddressOption): Promise<string>;

  /**
   * Get the requested transaction signatures for the raw transaction.
   * @param rawTxHex The raw transaction hex to get signatures from.
   * @param sigRequests The signature requst informations, see details in `SignatureRequest`.
   * @returns A promise which resolves to a list of `SignatureReponse` corresponding to `sigRequests`.
   */
  abstract getSignatures(rawTxHex: string, sigRequests: SignatureRequest[]): Promise<SignatureResponse[]>;

  /**
   * Get the connected provider.
   * @returns the connected provider.
   * @throws if no provider is connected to `this`.
   */
  get connectedProvider(): Provider {
    if (!this.provider) {
      throw new Error(`the provider of singer ${this.constructor.name} is not set yet!`);
    }
    if (!this.provider.isConnected()) {
      throw new Error(`the provider of singer ${this.constructor.name} is not connected yet!`);
    }

    return this.provider;
  }

  /**
   * Sign the transaction, then broadcast the transaction
   * @param tx A transaction is signed and broadcast
   * @param options The options for signing, see the details of `SignTransactionOptions`.
   * @returns A promise which resolves to the transaction id.
   */
  async signAndsendTransaction(tx: bsv.Transaction, options?: SignTransactionOptions): Promise<TransactionResponse> {
    await tx.sealAsync();
    const signedTx = await this.signTransaction(tx, options);
    await this.connectedProvider.sendTransaction(signedTx);
    return signedTx;
  };

  /**
   * Get a list of the P2PKH UTXOs.
   * @param address The address of the returned UTXOs belongs to.
   * @param options The optional query conditions, see details in `UtxoQueryOptions`. 
   * @returns  A promise which resolves to a list of UTXO for the query options.
   */
  listUnspent(address: AddressOption, options?: UtxoQueryOptions): Promise<UTXO[]> {
    // default implemention using provider, can be overrided.
    return this.connectedProvider.listUnspent(address, options);
  }

  /**
   * Get the balance of BSVs in satoshis for an address.
   * @param address The query address.
   * @returns A promise which resolves to the address balance status.
   */
  getBalance(address?: AddressOption): Promise<{ confirmed: number, unconfirmed: number }> {
    // default implemention using provider, can be overrided.
    return this.connectedProvider.getBalance(address);
  }

  // Inspection
  /**
   * Check if an object is a `Signer`
   * @param value The target object
   * @returns Returns `true` if and only if `object` is a Provider.
   */
  static isSigner(value: any): value is Signer {
    return !!(value && value._isSigner);
  }

}
```

It is recommended that your signer implements all `abstract` methods. For non-`abstract` methods, the default implementation is usually sufficient.


### `Example: SensiletSigner`

Next, we use the [Sensilet wallet](https://sensilet.com/) as an example to show how to implement a `SensiletSigner`.


1. In the `connect` method, you usually attempt to connect to a provider and save it:

```ts
override async connect(provider: Provider): Promise<this> {
    // we should make sure sensilet is connected  before we connect a provider.
    const isSensiletConnected = await this.isSensiletConnected();

    if(!isSensiletConnected) {
      Promise.reject(new Error('Sensilet is not connected!'))
    }

    if(!provider.isConnected()) {
      // connect the provider
      await provider.connect();
    }

    this.provider = provider;
    return this;
}
```

2. Returns the address to the default private key of the wallet in `getDefaultAddress`:

```ts
/**
 * Get an object that can directly interact with the Sensilet wallet,
 * if there is no connection with the wallet, it will request to establish a connection.
 * @returns SensiletWalletAPI
 */
async getConnectedTarget(): Promise<SensiletWalletAPI> {

    const isSensiletConnected = await this.isSensiletConnected();
    if (!isSensiletConnected) {
      // trigger connecting to sensilet account when it's not connected.
      try {
        const addr = await this._target.requestAccount();
        this._address = bsv.Address.fromString(addr);
      } catch (e) {
        throw new Error('Sensilet requestAccount failed')
      }
    }
    return this.getSensilet();
}

override async getDefaultAddress(): Promise<bsv.Address> {
    // 
    const sensilet = await this.getConnectedTarget();
    const address = await sensilet.getAddress();
    return bsv.Address.fromString(address);
}
```

3. Returns the public key to the default private key of the wallet in `getDefaultPubKey`:

```ts
override async getDefaultPubKey(): Promise<PublicKey> {
    const sensilet = await this.getConnectedTarget();
    const pubKey = await sensilet.getPublicKey();
    return Promise.resolve(new bsv.PublicKey(pubKey));
}
```

4. Since Sensilet is a single-address wallet, we simply ignore the `getPubKey` method:

```ts
override async getPubKey(address: AddressOption): Promise<PublicKey> {
    throw new Error(`Method ${this.constructor.name}#getPubKey not implemented.`);
}
```

5. Both `signTransaction` and `signRawTransaction` sign the transaction, but their parameters are different. `signRawTransaction` converts the parameters and delegates the implementation of the signing to `signTransaction`.

The following are types used in these two functions:


```ts

/** 
 * `SignatureRequest` contains required informations for a signer to sign a certain input of a transaction.
 */
export interface SignatureRequest {
  /** The index of input to sign. */
  inputIndex: number;
  /** The previous output satoshis value of the input to spend. */
  satoshis: number;
  /** The address(es) of corresponding private key(s) required to sign the input. */
  address: AddressesOption;
  /** The previous output script of input, default value is a P2PKH locking script for the `address` if omitted. */
  scriptHex?: string;
  /** The sighash type, default value is `SIGHASH_ALL | SIGHASH_FORKID` if omitted. */
  sigHashType?: number;
  /** The extra information for signing. */
  data?: unknown;
}

/** 
 * `SignatureResponse` contains the signing result corresponding to a `SignatureRequest`.
 */
export interface SignatureResponse {
  /** The index of input. */
  inputIndex: number;
  /** The signature.*/
  sig: string;
  /** The public key bound with the `sig`. */
  publicKey: string;
  /** The sighash type, default value is `SIGHASH_ALL | SIGHASH_FORKID` if omitted. */
  sigHashType: number;
}

/** 
 * `SignTransactionOptions` is the options can be provided when signing a transaction.
*/
export interface SignTransactionOptions {
  /** The `SignatureRequest` for the some inputs of the transaction. */
  sigRequests?: SignatureRequest[];
  /** The address(es) whose corresponding private key(s) should be used to sign the tx. */
  address?: AddressesOption;
}
```

`signTransaction` will convert the above parameter types to the parameter types required by the [sensilet api](https://doc.sensilet.com/guide/sensilet-api.html#signtx). And call the sensilet api to complete the signature, which is implemented in `getSignatures` function.

```ts
override async signRawTransaction(rawTxHex: string, options: SignTransactionOptions): Promise<string> {
    // convert `rawTxHex` to a transation object
    const sigReqsByInputIndex: Map<number, SignatureRequest> = (options?.sigRequests || []).reduce((m, sigReq) => { m.set(sigReq.inputIndex, sigReq); return m; }, new Map());
    const tx = new bsv.Transaction(rawTxHex);
    tx.inputs.forEach((_, inputIndex) => {
      const sigReq = sigReqsByInputIndex.get(inputIndex);
      if (!sigReq) {
        throw new Error(`\`SignatureRequest\` info should be provided for the input ${inputIndex} to call #signRawTransaction`)
      }
      const script = sigReq.scriptHex ? new bsv.Script(sigReq.scriptHex) : bsv.Script.buildPublicKeyHashOut(sigReq.address.toString());
      // set ref output of the input
      tx.inputs[inputIndex].output = new bsv.Transaction.Output({
        script,
        satoshis: sigReq.satoshis
      })
    });

    const signedTx = await this.signTransaction(tx, options);
    return signedTx.toString();
}

override async signTransaction(tx: Transaction, options?: SignTransactionOptions): Promise<Transaction> {

    const network = await this.getNetwork();
    // Generate default `sigRequests` if not passed by user
    const sigRequests: SignatureRequest[] = options?.sigRequests?.length ? options.sigRequests :

      tx.inputs.map((input, inputIndex) => {
        const useAddressToSign = options && options.address ? options.address :
          input.output?.script.isPublicKeyHashOut()
            ? input.output.script.toAddress(network)
            : this._address;

        return {
          inputIndex,
          satoshis: input.output?.satoshis,
          address: useAddressToSign,
          scriptHex: input.output?.script?.toHex(),
          sigHashType: DEFAULT_SIGHASH_TYPE,
        }
      })

    const sigResponses = await this.getSignatures(tx.toString(), sigRequests);

    // Set the acquired signature as an unlocking script for the transaction
    tx.inputs.forEach((input, inputIndex) => {
      const sigResp = sigResponses.find(sigResp => sigResp.inputIndex === inputIndex);
      if (sigResp && input.output?.script.isPublicKeyHashOut()) {
        var unlockingScript = new bsv.Script("")
        .add(Buffer.from(sigResp.sig, 'hex'))
        .add(Buffer.from(sigResp.publicKey, 'hex'));
        
        input.setScript(unlockingScript)
      }
    })

    return tx;
}

/**
 * Get signatures with sensilet api
 * @param rawTxHex a transation raw hex
 * @param sigRequests a `SignatureRequest` array for the some inputs of the transaction.
 * @returns a `SignatureResponse` array
 */
async getSignatures(rawTxHex: string, sigRequests: SignatureRequest[]): Promise<SignatureResponse[]> {
    const network = await this.getNetwork()
    // convert `sigRequests` to the parameter type required by sensilet `signTx` api
    const inputInfos = sigRequests.flatMap((sigReq) => {
      const addresses = parseAddresses(sigReq.address, network);
      return addresses.map(address => {
        return {
          txHex: rawTxHex,
          inputIndex: sigReq.inputIndex,
          scriptHex: sigReq.scriptHex || bsv.Script.buildPublicKeyHashOut(address).toHex(),
          satoshis: sigReq.satoshis,
          sigtype: sigReq.sigHashType || DEFAULT_SIGHASH_TYPE,
          address: address.toString()
        }
      });
    });

    const sensilet = await this.getConnectedTarget();
    // call sensilet `signTx` api to sign transaction
    // https://doc.sensilet.com/guide/sensilet-api.html#signtx
    const sigResults = await sensilet.signTx({
      list: inputInfos
    });

    return inputInfos.map((inputInfo, idx) => {
      return {
        inputIndex: inputInfo.inputIndex,
        sig: sigResults.sigList[idx].sig,
        publicKey: sigResults.sigList[idx].publicKey,
        sigHashType: sigRequests[idx].sigHashType || DEFAULT_SIGHASH_TYPE
      }
    })
}
```

6. Sensilet supports signing messages, if your wallet does not support it, you can throw an exception in the `signMessage` function:

```ts
override async signMessage(message: string, address?: AddressOption): Promise<string> {
    if (address) {
      throw new Error(`${this.constructor.name}#signMessge with \`address\` param is not supported!`);
    }
    const sensilet = await this.getConnectedTarget();
    return sensilet.signMessage(message);
}
```

So far, we have implemented all abstract methods. The remaining non-abstract methods can reuse the default implementation, that is, delegating to the connected [provider](../how-to-test-a-contract.md#provider). If you have a customized implementation, you can override them. For example, we can use the [Sensilet api `getBsvBalance`](https://doc.sensilet.com/guide/sensilet-api.html#getbsvbalance) to obtain the balance of an address.

```ts
override getBalance(address?: AddressOption): Promise<{ confirmed: number, unconfirmed: number }> {
    if(address) {
      return this.connectedProvider.getBalance(address);
    }
    return this.getConnectedTarget().then(target => target.getBsvBalance()).then(r => r.balance)
}
```

Now we have implemented `SensiletSigner`. The full code is [here](https://gist.github.com/xhliu/73104028deaf95c8b6665bf96496fe11#file-sensiletsigner-ts-L44).

## Use your signer

Just connect your signer to a smart contract instance like any other signers:

```ts
// declare your signer
const your_signer = new YourSigner(new DefaultProvider());
// connect the signer to the contract instance
await instance.connect(your_signer);
```

