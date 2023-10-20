---
sidebar_position: 1
---

# How to Deploy & Call a Contract


## Core Concepts
After you've finished writing a contract, you can deploy and call it. But first, you should learn how a smart contract interacts with the blockchain. In this section, we will go over some fundamental concepts in detail.

![](../../static/img/call.png)
[Credit: moonbeam](https://docs.moonbeam.network/tutorials/eth-api/how-to-build-a-dapp)

### Compile the Contract

First, you need to `compile` the contract using CLI by running :
```ts
npx scrypt-cli@latest compile
```
to compile the contract to Bitcoin script,so it can be included in a transaction's output. And will create a `JSON` file of your contract in the `artifact` folder so that you can use it when deploying the contract.

call function `SmartContract.loadArtifact()` 
to load the contract before deploying the contract.
```ts
await MyContract.loadArtifact()
```

### Contract Instance
As explained in the [Overview section](../overview.md), an `sCrypt` contract is based on the Bitcoin UTXO model. A **constract instance** is an abstraction that represents a specific contract deployed on-chain, so you can use it to interact with the contract like a normal TypeScript object.

```ts
// construct a new instance of `MyContract`
let instance = new MyContract(...initArgs);
```

### Provider

A `Provider` is an abstraction of a standard Bitcoin node that provides connection to the Bitcoin network, for read and write access to the blockchain.

sCrypt already has a few built-in providers:

* `DummyProvider`: A mockup provider just for local tests. It does not connect to the Bitcoin blockchain and thus cannot send transactions.

* `DefaultProvider`:  The default provider is the safest, easiest way to begin developing on Bitcoin, and it is also robust enough for use in production. It can be used in testnet as well as mainnet.

* See full list of providers [here](../reference/classes/Provider.md#hierarchy).

You can initialize these providers like this:

```ts
let dummyProvider = new DummyProvider();

// mainnet

let provider = new DefaultProvider();

// testnet

let provider = new DefaultProvider(bsv.Networks.testnet);
```

### Signer

A `Signer` is an abstraction of private keys, which can be used to sign messages and transactions. A simple signer would be a single private key, while a complex signer is a wallet.

#### TestWallet

For testing purposes only, we have a built-in wallet called `TestWallet`. It can be created like this:

```ts
const signer = new TestWallet(privateKey, provider);
```

`privateKey` can be a single private key or an array of private keys that the wallet can use to sign transactions. The ability of the wallet to send transactions is assigned to `provider`. In other words, a `TestWallet` serves as both a signer and a provider.


### Tx Builders

To deploy or interact with contracts, we must build transactions and broadcast them to Bitcoin.
We have some built-in tx builders for the most common way to interact with contracts, so usually you don't have to implement them. If the default tx builder does not meet your specific requirements, such as having extra inputs or outputs in your tx, you can [customize it](./how-to-customize-a-contract-tx.md).


#### Contract Deployment Transaction

A Bitcoin transaction is required when deploying a contract to the blockchain. The transaction should have an output, whose script is compiled from the contract. This output is known as a contract UTXO and the contract instance comes `from` this UTXO.

An instance's `from` can be accessed.
```ts
// the tx that contains the instance
instance.from.tx
// the index of the tx output that contains the instance
instance.from.outputIndex
```

#### Contract Call Transaction

When you call a public method of a contract instance in a UTXO, a call transaction is needed. The transaction has an input that references to the UTXO and contains the script consisting of the method's arguments. We regard the contract instance goes `to` this transaction input.

An instance's `to` can be accessed.
```ts
// the tx that spends the instance
instance.to.tx
// the index of the tx input that spends the UTXO the instance is in
instance.to.inputIndex
```


This section could be summarized as the diagram below:

![](../../static/img/contract_tx.svg)


## Prepare a Signer and Provider

A signer and a provider must be connected to a contract instance before deployment and call. When we are ready to deploy the contract to the testnet/mainnet, we need a real provider like [DefaultProvider](#provider).

```ts
const network = bsv.Networks.testnet; // or bsv.Networks.mainnet
const signer = new TestWallet(privateKey, new DefaultProvider(network));
```

The `privateKey` must have enough coins. Learn how to fund it on a testnet using a [faucet](./faucet).

Then just connect it to your contract instance like this:

```ts
await instance.connect(signer);
```

:::note
`TestWallet` is just a `Signer` provided by sCrypt for testing. In a real production environment (Mainnet), you should use `SensiletSigner`, `DotwalletSigner`, `TAALSigner`. 
See [here](../how-to-integrate-a-frontend/how-to-integrate-a-frontend.md) how to use them.
:::



## Contract Deployment

To deploy a smart contract, simply call its `deploy` method:


```ts
// construct a new instance of `MyContract`
let instance = new MyContract(...initArgs);

// connect the signer to the instance
await instance.connect(signer);

// the contract UTXO’s satoshis
const initBalance = 1234;

// build and send tx for deployment
const deployTx = await instance.deploy(initBalance);
console.log(`Smart contract successfully deployed with txid ${deployTx.id}`);
```

## Contract Call

To facilitate calling a contract's public `@method`, we have injected a runtime object named `methods` in your contract class. For each public `@method` of your contract (e.g., `contract.foo`), a function with the same name and signature (including list of parameters and return type, i.e., void) is added into `methods` (e.g., `contract.methods.foo`). In addition, there is an `options` appended as the last paramter.

Assume you have a contract like this:

```ts
Class MyContract extends SmartContract {
  ...
  @method()
  public foo(arg1, arg2) {...}
}
```
You can check it like this:

```ts
let instance = new MyContract();
console.log(typeof instance.methods.foo) // output `function`
```

This function is designed to invoke the corresponding `@method` of the same name on chain, meaning calling it will spend the previous contract UTXO in a new transaction. You can call it like this:

```ts
// Note: `instance.methods.foo` should be passed in all arguments and in the same order that `instance.foo` would take.

// Additionally, it can accept an optional "options" argument to control the behavior of the function.

const { tx, atInputIndex } = await instance.methods.foo(arg1, arg2, options);
```


What actually happens during the call is the following.

1. Build an unsigned transaction by calling the tx builder, which can be a default or a customized one introduced in [this section](./how-to-customize-a-contract-tx.md), for a public `@method`.

2. Use the instance's signer to sign the transaction. Note that `instance.foo` could be invoked during this process in order to get a valid unlocking script for the input.

3. Use the instance's connected provider to send the transaction.

#### MethodCallOptions

The `options` argument is of type `MethodCallOptions`:

```ts
/**
 * A option type to call a contract public `@method` function.
 * Used to specify the behavior of signers and transaction builders.
 * For example, specifying a transaction builder to use a specific change address or specifying a signer to use a specific public key to sign.
 */
export interface MethodCallOptions<T> {
  /**
   * The private key(s) associated with these address(es) or public key(s)
   * must be used to sign the contract input,
   * and the callback function will receive the results of the signatures as an argument named `sigResponses`
   * */
  readonly pubKeyOrAddrToSign?: PublicKeysOrAddressesOption | SignaturesOption;
  /** The subsequent contract instance(s) produced in the outputs of the method calling tx in a stateful contract */
  readonly next?: StatefulNext<T>[] | StatefulNext<T>,
  /** The `lockTime` of the method calling tx */
  readonly lockTime?: number;
  /** The `sequence` of the input spending previous contract UTXO in the method calling tx */
  readonly sequence?: number;
  /** The P2PKH change output address */
  readonly changeAddress?: AddressOption;
  /** verify the input script before send transaction */
  readonly verify?: boolean;
  /** Whether to call multiple contracts at the same time in one transaction */
  readonly multiContractCall?: true;
  /** Pass the `ContractTransaction` of the previous call as an argument to the next call, only used if `multiContractCall = true`.  */
  readonly partialContractTx?: ContractTransaction;
}
```

The major differences between here and [local tests](../how-to-test-a-contract.md#run-tests) are:
1. the contract needs to be deployed first;
2. the contract instance is connected to a real provider, which broadcasts transactions to the blockchain.

### Create a smart contract instance from a transaction
To interact with a deployed smart contract (i.e., calling its public methods), we need its contract instance corresponding to its latest state on chain, stateful or not. When testing on testnet, we usually put a contract's deployment and its calling (note there could be multiple calls if the contract is stateful) in the same process for convenience, so that we don't need to manage the internal state of the instance manually, because it's always consistent with the transactions on chain.

In reality, a contract's deployment and its call, and its different calls in the case of a stateful contract, may well be in separate processes. For example, the deployment party is different from the calling party, or multiple parties call it. If so, we need to create a contract instance from an on-chain transaction that represents its latest state, before we can call its method.

Typically, we only know the [TXID](https://wiki.bitcoinsv.io/index.php/TXID) of the transaction containing the instance. We can create an instance in two steps:
1. Using TXID, we retrieve the full transaction by calling [getTransaction](../reference/classes/Provider.md#gettransaction) of the [connected provider](../reference/classes/Signer.md#connectedprovider) of the signer.
2. We can create an contract instance from a transaction's by calling [fromTx()](../how-to-write-a-contract/built-ins.md#fromtx).
```ts
// 1) fetch a transaction from txid
const tx = await signer.connectedProvider.getTransaction(txId)
// 2) create instance from transaction
const instance = Counter.fromTx(tx, atOutputIndex)

// from now on, `instance` is in sync with the on-chain transaction
// and we can use it to interact with the contract
```

A complete example can be found [here](./call-deployed).

### Method with Signatures

A contract public `@method` often needs a signature argument for authentication. Take this [Pay To PubKey Hash (P2PKH)](https://learnmeabitcoin.com/technical/p2pkh) contract for example:

```ts
export class P2PKH extends SmartContract {
    @prop()
    readonly address: Addr

    constructor(address: Addr) {
        super(..arguments)
        this.address = address
    }

    @method()
    public unlock(sig: Sig, pubkey: PubKey) {
        // make sure the `pubkey` is the one locked with its address in the constructor
        assert(pubKey2Addr(pubkey) == this.address, 'address check failed')

	   // make sure the `sig` is signed by the private key corresponding to the `pubkey`
        assert(this.checkSig(sig, pubkey), 'signature check failed')
    }
}
```

We can call the `unlock` method like this:

```ts
// call
const { tx: callTx } = await p2pkh.methods.unlock(
    // the first argument `sig` is replaced by a callback function which will return the needed signature
    (sigResps) => findSig(sigResps, publicKey),

    // the second argument is still the value of `pubkey`
    PubKey(toHex(publicKey)),

    // method call options
    {
        // A request for signer to sign with the private key corresponding to a public key
        pubKeyOrAddrToSign: publicKey
    } as MethodCallOptions<P2PKH>
);

console.log('contract called: ', callTx.id);

```

When `p2phk.method.unlock` is called, the option contains `pubKeyOrAddrToSign`, requesting a signature against `publicKey`.

The first argument is a signature, which can be obtained in a callback function. The function takes a list of signatures requested in `pubKeyOrAddrToSign` and find the one signature to the right public key/address.

In general, if your `@method` needs `Sig`-typed arguments, you could obtain them as follows:

1. Ensure that the `pubKeyOrAddrToSign` contains all public keys/addresses corresponding to these `Sig`s;

2. Replace each `Sig` argument with a callback function that filters to the right `Sig` from the full list of signature in `sigResps`.


## Example

Here is the complete sample code for the deployment and call of a P2PKH contract.

```ts
import { privateKey } from '../../utils/privateKey';

// compile contract
await P2PKH.loadArtifact()

// public key of the `privateKey`
const publicKey = privateKey.publicKey

// setup signer
const signer = new TestWallet(privateKey, new DefaultProvider());

// initialize an instance with `pkh`
let p2pkh = new P2PKH(Addr(publicKey.toAddress().toByteString()))

// connect the signer
await p2pkh.connect(signer);

// deploy the contract, with 1 satoshi locked in
const deployTx = await p2pkh.deploy(1);
console.log('contract deployed: ', deployTx.id);

// call
const { tx: callTx } = await p2pkh.methods.unlock(
    (sigResps) => findSig(sigResps, publicKey),
    PubKey(toHex(publicKey)),
    {
        pubKeyOrAddrToSign: publicKey
    } as MethodCallOptions<P2PKH>
);

console.log('contract called: ', callTx.id);

```

More examples can be found [here](https://github.com/sCrypt-Inc/boilerplate/tree/master/tests/).


### Running the code

The deployment and call code is wrapped into a simple NPM command:

```sh
npm run testnet
```

Make sure you fund your address before running this command.
After a successful run you should see something like the following:

```
P2PKH contract deployed:  f3f372aa25f159efa93db8c51a4eabbb15935358417ffbe91bfb78f4f0b1d2a3
P2PKH contract called:  dc53da3e80aadcdefdedbeb6367bb8552e381e92b226ab1dc3dc9b3325d8a8ee
```

These are the TXIDs of the transaction which deployed the smart contract and then the one which called its method. You can see the transactions using a [block explorer](https://test.whatsonchain.com/tx/f3f372aa25f159efa93db8c51a4eabbb15935358417ffbe91bfb78f4f0b1d2a3).


### Customize Transactions
Deploying and calling a contract builds transactions with a certain format, which suffices for many cases. In cases where the tx format does not work for you and you need to customize it, please refer to [this section](./how-to-customize-a-contract-tx.md).
