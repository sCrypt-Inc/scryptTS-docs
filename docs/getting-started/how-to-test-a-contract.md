---
sidebar_position: 4
---
 
# How to Test a Contract
 
Before using a smart contract in production, one should always test it carefully, especially because any bug in it may cause **real economic losses**.
 
There are two different kinds of tests recommended for every project using `scryptTS`:
 
* **Local Unit Testing**
* **Testnet Integration Testing**


## Setup

Before we test the contract, we need to generate a [private key](https://en.bitcoin.it/wiki/Private_key). Let's run the following command:

```sh
npm run genprivkey
```

The command will generate a private key which will be stored in the `.env` file in our project root directory. Keep this key secret as whoever has access to it can take the funds! It also outputs the [Bitcoin address](https://wiki.bitcoinsv.io/index.php/Bitcoin_address) corresponding to our private key. 

Now we will take a look at the file `tests/testnet/demo.ts`. This file contains code for deployment of our `Demo` contract on the Bitcoin testnet and a subsequent public method call on the contract.


But before going into details, you should learn some basic models of scryptTS for signing and sending transactions.

## Provider

A `Provider` is an abstraction of a standard Bitcoin node that provides connection to the Bitcoin network, for read and write access to the blockchain.

For example, when you want to broadcast transactions to the blockchain, you can send them to providers like [whatsonchain](https://whatsonchain.com/) via their APIs.

Currently, we have two built-in providers:

* `DummyProvider`: A mockup provider just for local tests. It does not connect to the Bitcoin blockchain and thus cannot send transactions.

* `DefaultProvider`:  The default provider is the safest, easiest way to begin developing on Bitcon, and it is also robust enough for use in production. It can be used in testnet as well as mainnet.

You can initialize these providers like this:

```ts
let dummyProvider = new DummyProvider();

let provider = new DefaultProvider(bsv.Networks.mainnet);
```

## Signer 

A `Signer` is an abstraction of private keys, which can be used to sign messages and transactions. A simple signer would be a single private key, while a complex signer is a wallet.

### TestWallet

For testing purposes only, we have a built-in wallet called `TestWallet`. It can be created like this:

```ts
const signer = new TestWallet(privateKey, provider);
```

`privateKey` can be a single private key or an array of private keys that the wallet can use to sign transactions. The ability of the wallet to send transactions is assigned to `provider`. In other words, a `TestWallet` serves as both a signer and a provider.

## Test a Contract Locally

Compared to other blockchains, smart contracts on Bitcoin are **pure**.

* Given the same input, its public method always returns the same boolean output: success or failure. It has no internal state.
* A public method call causes no side effects.

Smart contracts are similar to mathematical functions. Thus, we can test a contract locally without touching the Bitcoin blockchain. If it passes tests off chain, we are confident it will behave the same on chain.

### Prepare a Signer and Provider

The `TestWallet` and `DummyProvider` combination would be ideal for local tests because it can sign the contract call transactions without actually sending them. 

Such a signer may be declared as below:

```ts
let signer = new TestWallet(privateKey, new DummyProvider());
```

Then just connect it to your contract instance like this:

```ts
await instance.connect(signer);
```

### Call a Public Method
 
To facilitate calling a contracts' public `@method`, we have injected a runtime object named `methods` in your contract class. For each public `@method` of your contract (e.g., `contract.foo`), a function with the same name and signature (including list of parameters and return type, i.e., void) is added into `methods` (e.g., `contract.methods.foo`). In addition, there is an `options` appended as the last paramter.

Assume you have a contract like this:

```ts
Class MyContract extends SmartContract {
  …
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

// Additionally, it can accept an optional "opts" argument to control the behavior of the function.

const { tx, atInputIndex } = await instance.methods.foo(arg1, arg2, options);
```

The `options` argument is of type `MethodCallOptions`:

```json

interface MethodCallOptions {
  /** The previous contract UTXO to spend in the method calling tx */
  fromUTXO?: UTXO;

  /** The P2PKH change output address */
  changeAddress?: AddressOption;

  /** The private key(s) correspond to these address(es) or public key(s) must be used to sign the contract input, and the callback function will receive the resulting signatures */
  pubKeyOrAddrToSign?: PublicKeysOrAddressesOption;

  /** The `lockTime` of the method calling tx */
  lockTime?: number;
    
  /** The `sequence` of the input which to spend previous contract UTXO in the method calling tx */
  sequence?: number;

  /** The `sequence` value of the input */
  sequence?: number;

  /** The subsequent contract instance(s) produced in the outputs of the method calling tx for a stateful contract */
  next?: StatefulNextWithIdx<T> | StatefulNext<T>[];
}

```

What actually happens during the call is the following.

1. Build an unsigned transaction by calling the tx builder, which can be a default or a customized one introduced in [this section](./how-to-build-a-contract-tx#customizedcalltxbuilder), for a public `@method`.

2. Use the instance's signer to sign the transaction. Note that `instance.foo` could be invoked during this process in order to get a valid unlocking script for the input.

3. User the instance's connected provider to send the transaction.

Remember that the tx is not actually sent anywhere in a local test because we connect to a mock provider.

### Verify the Tx input for the method call

In the previous step, the signed `tx` for the contract call and its input index are returned. You can call `verifyScript` on the returned `tx` to verify that the contract method call (in the given tx input) is successful.

```ts
let result = tx.verifyScript(atInputIndex)
console.log(result.success) // Output: true or false
```

### Integrate with a testing framework
 
You can use whatever testing framework you like to write unit tests for your contract. For example, a local test using [Mocha](https://mochajs.org/) is shown below:
 
```js
describe('Test SmartContract `Demo`', () => {
  let signer;
  let demo;

  before(async () => {
    // compile contract
    await Demo.compile() 

    // create a test wallet as signer, connected to a dummy provider
    signer = new TestWallet(privateKey, new DummyProvider())

    // initialize a contract instance
    demo = new Demo(1n, 2n)

    // connect the instance to signer
    await demo.connect(signer)
  })

  it('should pass the public method unit test successfully.', async () => {
    // call `demo.methods.add` to get a signed tx 
    const { tx: callTx, atInputIndex } = await demo.methods.add(
      // pass in the right argument
      3n,
      // set method call options
      {
        // Since `demo.deploy` hasn't been called before, a fake UTXO of the contract should be passed in.
        fromUTXO: dummyUTXO  
      } as MethodCallOptions<Demo>
    )

    let result = callTx.verifyScript(atInputIndex)
    expect(result.success, result.error).to.eq(true)
  })

  it('should pass the non-public method unit test', () => {
    expect(demo.sum(3n, 4n)).to.be.eq(7n)
  })

  it('should throw error', () => {
    return expect(
	  // Using the wrong argument when calling this function just results in an error.
      demo.methods.add(4n, { fromUTXO: dummyUTXO })
    ).to.be.rejectedWith(/add check failed/)
  })

})
```
 
## Test a Contract on the Testnet
 
It is highly recommended to test your contract on the [testnet](https://test.whatsonchain.com/) after passing local tests. It ensures that a contract can be successfully deployed and invoked as expected on the blockchain.
 
Before testing, you need to:
 
* Get a private key with some test coins on the testnet. You could use our [facuet](https://scrypt.io/#faucet) to receive test coins.

You may visit [here](./how-to-deploy-and-call-a-contract.md) to see more details on contract deployment and call.


