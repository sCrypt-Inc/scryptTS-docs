---
sidebar_position: 1
---

# How to Add a Provider


In the [contract testing section](../how-to-test-a-contract.md#provider), we learned about the Provider class in sCrypt. This class serves as an abstraction of a Bitcoin node, allowing your application to communicate with the Bitcoin network.

`sCrypt` provides the following providers by default:

* `DummyProvider`: A mockup provider intended for local testing. It does not connect to the Bitcoin blockchain and thus cannot send transactions.

* `DefaultProvider`: The default provider is the safest and easiest way to begin developing on Bitcoin, and is also robust enough for use in production. It can be used in testnet as well as mainnet.

* For a full list of providers, see [here](../reference/classes/Provider.md#hierarchy).

## Implementation

### Base Class `Provider`

To implement your own provider, you must extend the base class `Provider`. Here's the definition of this class:

```ts
/**
 * A Provider is an abstraction of non-account-based operations on a blockchain and is generally not directly involved in signing transaction or data.
 */
export abstract class Provider extends EventEmitter  {

  constructor() {
    super()
    this._isProvider = true;
  }

  /**
   * check if provider is ready
   */
  abstract isConnected(): boolean;

  /**
   * Implement the connection provider, for example, verify the api key during the connection process.
   * @returns a connected provider. Throw an exception if the connection fails.
   */
  abstract connect(): Promise<this>;

  /**
   * update provider network
   * @param network  Network type to be updated
   */
  abstract updateNetwork(network: bsv.Networks.Network): Promise<boolean>;

  /**
   * @returns The network this provider is connected to.
   */
  abstract getNetwork(): Promise<bsv.Networks.Network>;

  /**
   * @returns The fee rate for sending transactions through this provider.
   */
  abstract getFeePerKb(): Promise<number>;

  /**
 * Get a best guess of the fee for a transaction.
 * @param tx A transaction object to estimate.
 * @returns The estimated fee in satoshis.
 */
  async getEstimateFee(tx: bsv.Transaction): Promise<number> {
    const copy = new bsv.Transaction(tx.uncheckedSerialize());
    // use a copy bcoz `feePerKb` resets all the signatures for inputs.
    copy.feePerKb(await this.getFeePerKb());
    return copy.getEstimateFee();
  }

  // Executions

  /**
   * Send a raw transaction hex string.
   * @param rawTxHex The raw transaction hex string to send.
   * @returns A promise which resolves to the hash of the transaction that has been sent.
   */
  abstract sendRawTransaction(rawTxHex: string): Promise<TxHash>;

  /**
   * Send a transaction object.
   * @param tx The transaction object to send.
   * @returns A promise which resolves to the hash of the transaction that has been sent. 
   * @throws If there is a problem with the `tx` object during serialization.
   */
  sendTransaction(tx: bsv.Transaction): Promise<TxHash> {
    // TODO: fix tx.serialize issue 
    return this.sendRawTransaction(tx.serialize({ disableIsFullySigned: true }));
  }

  // Queries

  /**
   * Get a transaction from the network.
   * @param txHash The hash value of the transaction.
   * @returns The query result with the transaction information.
   */
  abstract getTransaction(txHash: TxHash): Promise<TransactionResponse>

  /**
   * Get a list of the P2PKH UTXOs.
   * @param address The address of the returned UTXOs belongs to.
   * @param options The optional query conditions, see details in `UtxoQueryOptions`. 
   * @returns  A promise which resolves to a list of UTXO for the query options.
   */
  abstract listUnspent(address: AddressOption, options?: UtxoQueryOptions): Promise<UTXO[]>;

  /**
   * Get the balance of BSVs in satoshis for an address.
   * @param address The query address.
   * @returns A promise which resolves to the address balance status.
   */
  abstract getBalance(address: AddressOption): Promise<{ confirmed: number, unconfirmed: number }>;

  /**
   * Get a list of UTXO for a certain contract instance.
   * @param genesisTxHash The hash value of deployment transaction of the contract instance.
   * @param outputIndex The output index of the deployment transaction of the contract instance.
   * @returns A promise which resolves to a list of transaction UTXO.
   */
  abstract getContractUTXOs(genesisTxHash: TxHash, outputIndex: number): Promise<UTXO[]>;

  // Inspection

  readonly _isProvider: boolean;

  /**
   * Check if an object is a `Provider`
   * @param value The target object
   * @returns Returns `true` if and only if `object` is a Provider.
   */
  static isProvider(value: any): value is Provider {
    return !!(value && value._isProvider);
  }
}
```

It is recommended that your provider implements all `abstract` methods. For non-`abstract` methods, the default implementation is usually sufficient.


### `Example: WhatsonchainProvider`

Let's walk through the process of implementing our own provider. In this example we'll implement a provider for [WhatsOnChain](https://whatsonchain.com) (WoC).


1. First let's implement the `isConnected()` and `connect()` functions. Because WoC doesn't need to maintan an open connection, not does it require any authentication by default, it's simply marked as connected by default. If your chosen provider does, here's probably the place to implement the connection logic.

```ts
isConnected(): boolean {
  return true;
}

override async connect(): Promise<this> {
  this.emit(ProviderEvent.Connected, true);
  return Promise.resolve(this);
}
```

2. Next, we'll implement the network functions. Here, your providers selected network can be toggled. WoC supports both the Bitcoin mainnet along with testnet, so we don't do further checking:

```ts
override async updateNetwork(network: bsv.Networks.Network): Promise<boolean> {
  this._network = network;
  this.emit(ProviderEvent.NetworkChange, network);
  return Promise.resolve(true);
}

override async getNetwork(): Promise<bsv.Networks.Network> {
  return Promise.resolve(this._network);
}
```

If your provider is only meant for the testnet, you could do something like this:
```ts
override async updateNetwork(network: bsv.Networks.Network): Promise<boolean> {
  if (network != bsv.Networks.testnet) {
    throw new Error('Network not supported.')
  }
  this._network = network;
  this.emit(ProviderEvent.NetworkChange, network);
  return Promise.resolve(true);
}
```

3. Now let's set the transaction fee rate. In our example, we hard-code the value to be 50 satoshis per Kb:

```ts
override async getFeePerKb(): Promise<number> {
  return Promise.resolve(50);
}
```

4. Let's implement the function that will send the transaction data to our provider:

```ts
override async sendRawTransaction(rawTxHex: string): Promise<TxHash> {
  // 1 second per KB
  const size = Math.max(1, rawTxHex.length / 2 / 1024); //KB
  const timeout = Math.max(10000, 1000 * size);
  try {
    const res = await superagent.post(
      `${this.apiPrefix}/tx/raw`
    )
      .timeout({
        response: timeout,  // Wait 5 seconds for the server to start sending,
        deadline: 60000, // but allow 1 minute for the file to finish loading.
      })
      .set('Content-Type', 'application/json')
      .send({ txhex: rawTxHex })
    return res.body;
  } catch (error) {
    if (error.response && error.response.text) {
      throw new Error(`WhatsonchainProvider ERROR: ${error.response.text}`)
    }
    throw new Error(`WhatsonchainProvider ERROR: ${error.message}`)
  }
}
```

In the function we use the [`superagent`](https://www.npmjs.com/package/superagent) to send requests to WoC's HTTP endpoint. Check out their [docs](https://docs.taal.com/core-products/whatsonchain) for a description of the endpoints they provide.

5. Now we need to implement some queries. First let's implement the function to get a list of [UTXO's](https://wiki.bitcoinsv.io/index.php/UTXO) for a certain address:

```ts
override async listUnspent(
    address: AddressOption, 
    options?: UtxoQueryOptions
    ): Promise<UTXO[]> {

  const res = await superagent.get(`${this.apiPrefix}/address/${address}/unspent`);
  const utxos: UTXO[] =
    res.body.map(item => ({
      txId: item.tx_hash,
      outputIndex: item.tx_pos,
      satoshis: item.value,
      script: bsv.Script.buildPublicKeyHashOut(address).toHex(),
    }));

  if (options?.minSatoshis && utxos.reduce((s, u) => s + u.satoshis, 0) < options.minSatoshis) {
    throw new Error(`WhatsonchainProvider ERROR: not enough utxos for the request amount of ${options.minSatoshis} on address ${address.toString()}`);
  }

  return utxos;
}
```

Next, we'll make the `getBalance` function parse out the addresses balance from the UTXO's:

```ts
override async getBalance(
    address?: AddressOption
    ): Promise<{ confirmed: number, unconfirmed: number }> {

  return this.listUnspent(address, { minSatoshis: 0 }).then(utxos => {
    return {
      confirmed: utxos.reduce((acc, utxo) => {
        acc += utxo.satoshis;
        return acc;
      }, 0),
      unconfirmed: 0
    }
  })

}
```

We also implement the function to query the raw transaction using the transactions ID:
```ts
override async getTransaction(txHash: string): Promise<TransactionResponse> {
  try {
    const res = await superagent.get(`${this.apiPrefix}/tx/${txHash}/hex`);
    return new bsv.Transaction(res.text)
  } catch (e) {
    throw new Error(`WhatsonchainProvider ERROR: failed fetching raw transaction data: ${e.message}`);
  }
}
```


Lastly, if our provider doesn't support a certain query, we can simply throw an error by default:
```ts
override async getContractUTXOs(genesisTxHash: string, outputIndex?: number): Promise<UTXO[]> {
    throw new Error("Method #getContractUTXOs not implemented in WhatsonchainProvider.");
  }
```

## Using the Provider

Providers are usually used by a `Signer`:

```ts
const provider = new WhatsonchainProvider(bsv.Networks.mainnet)
const signer = new TestWallet(privateKey, provider)

await contractInstance.connect(signer);
```

Here, the signer will use our `WhatsonchainProvider` for each Bitcoin network operation it needs. The next section describes signers and how we can implement a custom one.
