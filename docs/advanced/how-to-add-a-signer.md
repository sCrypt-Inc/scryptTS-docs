---
sidebar_position: 7
---

# How to Add a Signer


As described in [this section](../how-to-deploy-and-call-a-contract/how-to-deploy-and-call-a-contract.md#provider), a signer is an abstraction of private keys, which can be used to sign messages and transactions. A simple signer would be a single private key, while a complex signer is a wallet.

`sCrypt` provides the following signers by default:

1. `TestWallet` : a simple wallet that can hold multiple private keys, with in-memory utxo management. Should only be used for testing.
2. `PandaSigner`: a signer powered by the popular smart contract wallet [Panda](https://Panda.com/). Can be used in production.
3. `PandaSigner`: another signer powered by the popular web3 wallet [Panda](https://github.com/Panda-Wallet/panda-wallet). Can be used [in production](../tokens/tutorials/ordinal-lock.md#use-panda-wallet).

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

  abstract getNetwork(): Promise<bsv.Networks.Network>;

  /**
   * Check if the wallet has been authenticated
   * @returns {boolean} true | false
   */
  abstract isAuthenticated(): Promise<boolean>;

  /**
   * Request wallet authentication
   * @returns A promise which resolves to if the wallet has been authenticated and the authenticate error message
   */
  abstract requestAuth(): Promise<{ isAuthenticated: boolean, error: string }>;

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
  async signRawTransaction(rawTxHex: string, options: SignTransactionOptions): Promise<string> {
    ...
  }

  /**
   * Sign a transaction object.
   * @param tx The transaction object to sign.
   * @param options The options for signing, see the details of `SignTransactionOptions`.
   * @returns A promise which resolves to the signed transaction object.
   */
  async signTransaction(tx: bsv.Transaction, options?: SignTransactionOptions): Promise<bsv.Transaction>{
    ...
  }

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


### `Example: PandaSigner`

Next, we use the [Panda Wallet](https://github.com/Panda-Wallet/panda-wallet) as an example to show how to implement a `PandaSigner`.


1. Implement the `isAuthenticated` method to Check if the wallet has been authenticated:

```ts

private _initTarget() {
    if(this._target) {
        return;
    }

    if (typeof (window as any).panda !== 'undefined') {
        this._target = (window as any).panda;
    } else {
        throw new Error('panda is not installed')
    }
}

/**
 * Check if the wallet has been authenticated
 * @returns {boolean} true | false
 */
override isAuthenticated(): Promise<boolean> {
    this._initTarget();
    return this._target.isConnected();
}
```


2. Implement the `requestAuth` method to request wallet authentication:

```ts
/**
 * Request wallet authentication
 * @returns A promise which resolves to if the wallet has been authenticated and the authenticate error message
 */
override async requestAuth(): Promise<{ isAuthenticated: boolean, error: string }> {
    let isAuthenticated: boolean = false
    let error: string = ''
    try {
        await this.getConnectedTarget()
        await this.alignProviderNetwork()
        isAuthenticated = true
    } catch (e) {
        error = e.toString()
    }
    return Promise.resolve({ isAuthenticated, error })
}
```



3. In the `connect` method, you usually attempt to connect to a provider and save it:

```ts
override async connect(provider?: Provider): Promise<this> {
    // we should make sure panda is connected  before we connect a provider.
    const isAuthenticated = await this.isAuthenticated();

    if (!isAuthenticated) {
        throw new Error('panda is not connected!');
    }

    if (provider) {
        if (!provider.isConnected()) {
            await provider.connect();
        }
        this.provider = provider;
    } else {
        if (this.provider) {
            await this.provider.connect();
        } else {
            throw new Error(`No provider found`);
        }
    }

    return this;
}

```

4. Returns the address to the default private key of the wallet in `getDefaultAddress`:

```ts
/**
 * Get an object that can directly interact with the Panda wallet,
 * if there is no connection with the wallet, it will request to establish a connection.
 * @returns PandaAPI
 */
private async getConnectedTarget(): Promise<PandaAPI> {
    const isAuthenticated = await this.isAuthenticated()
    if (!isAuthenticated) {
        // trigger connecting to panda account when it's not authorized.
        try {
            
            this._initTarget();
            const res = await this._target.connect();

            if(res && res.includes("canceled")) {
                throw new Error(res);
            }

        } catch (e) {
            throw new Error(`panda requestAccount failed: ${e}`)
        }
    }
    return this._target;
}

override async getDefaultAddress(): Promise<bsv.Address> {
    const panda = await this.getConnectedTarget();
    const address = await panda.getAddresses();
    return bsv.Address.fromString(address.bsvAddress);
}
```

5. Returns the public key to the default private key of the wallet in `getDefaultPubKey`:

```ts
override async getDefaultPubKey(): Promise<bsv.PublicKey> {
    const panda = await this.getConnectedTarget();
    const pubKey = await panda.getPubKeys();
    return Promise.resolve(new bsv.PublicKey(pubKey.bsvPubKey));
}
```

6. Since Panda is a single-address wallet, we simply ignore the `getPubKey` method:

```ts
override async getPubKey(address: AddressOption): Promise<PublicKey> {
    throw new Error(`Method ${this.constructor.name}#getPubKey not implemented.`);
}
```

7. Both `signTransaction` and `signRawTransaction` sign the transaction, and are already implemented in the base class. You just need to implement the `getSignatures` function. The following code calls panda's `getSignatures` API to request a panda wallet signature.


```ts

/**
 * Get signatures with Panda api
 * @param rawTxHex a transation raw hex
 * @param sigRequests a `SignatureRequest` array for the some inputs of the transaction.
 * @returns a `SignatureResponse` array
 */
override async getSignatures(rawTxHex: string, sigRequests: SignatureRequest[]): Promise<SignatureResponse[]> {
    const panda = await this.getConnectedTarget();
    const network = await this.getNetwork()

    const sigRequests_ = sigRequests.map(sigReq => ({
        prevTxid: sigReq.prevTxId,
        outputIndex: sigReq.outputIndex,
        inputIndex: sigReq.inputIndex,
        satoshis: sigReq.satoshis,
        address: parseAddresses(sigReq.address, network).map(addr => addr.toString()),
        script: sigReq.scriptHex,
        sigHashType: sigReq.sigHashType,
        csIdx: sigReq.csIdx,
        data: sigReq.data,
    }));

    const sigResults = await panda.getSignatures({
        rawtx: rawTxHex,
        sigRequests: sigRequests_
    });

    return sigResults.map(sigResult => ({
        ...sigResult,
        publicKey: sigResult.pubKey,
    }));
}
```


8. Panda supports signing messages, if your wallet does not support it, you can throw an exception in the `signMessage` function:

```ts
override async signMessage(message: string, address?: AddressOption): Promise<string> {
    if (address) {
        throw new Error(`${this.constructor.name}#signMessge with \`address\` param is not supported!`);
    }
    const panda = await this.getConnectedTarget();
    const res = await panda.signMessage({message});
    return res.sig;
}
```

So far, we have implemented all abstract methods. The remaining non-abstract methods can reuse the default implementation, that is, delegating to the connected [provider](../how-to-deploy-and-call-a-contract/how-to-deploy-and-call-a-contract.md#provider). If you have a customized implementation, you can override them. For example, we can use the Panda api `getBalance` to obtain the balance of an address.

```ts
override getBalance(address?: AddressOption): Promise<{ confirmed: number, unconfirmed: number }> {
    if (address) {
        return this.connectedProvider.getBalance(address);
    }

    const panda = await this.getConnectedTarget();
    const balance = await panda.getBalance();
    return Promise.resolve({ confirmed: balance.satoshis, unconfirmed: 0 });
}
```

Now we have implemented `PandaSigner`. The full code is [here](https://gist.github.com/zhfnjust/4448c0c10e2352d0b7f6eeb86dbd6b0f).

## Use your signer

Just connect your signer to a smart contract instance like any other signers:

```ts
// declare your signer
const your_signer = new YourSigner(new DefaultProvider());
// connect the signer to the contract instance
await instance.connect(your_signer);
```

Here is another [user-customized signer](https://github.com/shubham78901/scryptDemo/blob/neucron/tests/utils/neucronSigner.ts).

