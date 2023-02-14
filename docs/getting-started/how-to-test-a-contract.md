---
sidebar_position: 4
---
 
# How to Test a Contract
 
Before using a smart contract in production, one should always test it carefully, especially because any bug in it may cause **real economic losses**.
 
There are two different kinds of tests recommended for every project using `scryptTS`:
 
* **Local Unit Testing**
* **Testnet Integration Testing**

But before going into details, you should learn some basic models of scryptTS for signing and sending transactions.

## Provider

A `Provider` is an abstraction of non-account-based operations on a blockchain and is generally not directly involved in signing transactions or data.

For example, when you want to broadcast transactions to the BSV blockchain network, you’d like to send them to providers like [whatsonchain](https://whatsonchain.com/) via their APIs.

Currently, we have two built-in providers that you could just use:

* `DummyProvider`: A mockup provider just for local tests. Do not send or query transactions.

* `WhatsonchainProvider`: A wrapper for whatsonchain APIs, can be used in testnet as well as mainnet.

You can initiate these providers like this:

```ts
let dummyProvider = new DummyProvider();

let wocProvider = new WhatsonchainProvider(bsv.Networks.testnet);
```

## Signer 

A `Signer` is a class that in some way, directly or indirectly, has access to a private key that can sign messages and transactions to authorize the network to perform operations.

For instance, the simplest signer might be a private key, while the most complex signer is a wallet.

### TestWallet

For testing purposes only, we have a built-in wallet called "TestWallet." It can be used in tests like these:

```ts
const signer = new TestWallet(privateKey, provider);
```

The argument `privateKey` can be a single private key or an array of private keys that the wallet may use to sign transactions. The ability of the wallet to send transactions is assigned to the provider by the argument `provider`. In other words, the `TestWallet` serves as both a signer and a provider.

## Test a Contract Locally

Compared to other blockchains, smart contracts on Bitcoin are **pure**.

* Given the same input, its public method always returns the same boolean output: success or failure. It has no internal state.
* A public method call causes no side effects.

Smart contracts are similar to mathematical functions. Thus, we can test a contract locally without touching the Bitcoin blockchain. If it passes tests off chain, we are confident it will behave the same on chain.

### Prepare a Signer and Provider

The 'TestWallet' and 'DummyProvider' combination would be ideal for the local tests because it can sign the contract call transactions without actually sending them. 

Such a signer may be declared using the following code:

```ts
let signer = new TestWallet(privateKey, new DummyProvider());
```

Then just connect it to your contract instance like this:

```ts
instance.connect(signer);
```

### Get a Tx for Invoking a method
 
In order to provide a more user-friendly method of calling contracts' public `@method`, we have injected a runtime object named `methods` in your contract. 

Assume you have a contract like this:

```ts
Class MyContract extends SmartContract {
  …
  @method()
  public foo(arg1, arg2) {...}
}
```

A runtime function with the same name and expanded arguments that accepts one additional `options` parameter at the end is attached to a contract property named `methods` for each public `@method` of your contract. You can check it like this:

```ts
let instance = new MyContract();
console.log(typeof instance.methods.foo) // output `function`
```

This function is designed to execute the corresponding `@method` on blockchain, which means it will spend the previous contract UTXO in a new transaction. You can call it like this:

```ts
// Note: `instance.methods.foo` should be passed in all arguments and in the same order that `instance.foo` would take. 

// Additionally, it can accept an optional "opts" argument to control the behavior of the function.

const { tx, atInputIndex } = await instance.methods.foo(arg1, arg2, options);
```

The interface for the `options` argument looks like this:

```json
{
  /** The previous contract UTXO to spend in the method call tx */
  fromUTXO?: UTXO;

  /** The P2PKH change output address */
  changeAddress?: AddressOption;

  /** The private key(s) associated with these address(es) or public key(s) must be used to sign the contract input, and the callback function will receive the results of the signatures as an argument named `sigResponses` */
  pubKeyOrAddrToSign?: PublicKeysOrAddressesOption;

  /** The `lockTime` value of the method call tx */
  lockTime?: number;

  /** The subsequent contract instance(s) produced in the outputs of the method call tx for a stateful contract */
  next?: StatefulNextWithIdx<T> | StatefulNext<T>[];
}

```

The actual execution sequences for this function are as follows:

1. Get an unsigned transaction by calling the tx builder, which can be a default or a customized one like we introduced in [this section](./how-to-build-a-contract-tx#customizedcalltxbuilder), for the public `@method`.

2. Ask the instance's singer to sign the transaction. Note that `instance.foo` would be invoked during this process in order to get a valid unlocking script for the input.

3. Ask the instance's provider to send the transaction.

The signed `tx` for the contract call and its input index are then returned.

Remember that the tx is not actually sent anywhere in this local test because we have a fake provider connected.

### Verify the Tx input for the method call

Then you can call `verifyInput` on the returned `tx` to verify that the contract method call has been transformed into a valid input script.

```ts
let result = tx.verifyInput(atInputIndex)
console.log(result.success) // Output: true or false
```

### Integrate with a testing framework
 
You can use whatever testing framework you like to write unit tests for your contract. For example, a local test using [Mocha](https://mochajs.org/) is shown below:
 
```js
describe('Test SmartContract `Demo`', () => {
  let signer;
  let demo;

  before(async () => {
    // compile contract to get low-level asm
    await Demo.compile() 

    // create a test wallet as signer
    signer = new TestWallet(privateKey, new DummyProvider())

    // initiate instance
    demo = new Demo(1n, 2n)

    // connect the instance to signer
    demo.connect(signer)
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

    let result = callTx.verifyInputScript(atInputIndex)
    expect(result.success, result.error).to.eq(true)
  })

  it('should pass the non-public method unit test', () => {
    expect(demo.sum(3n, 4n)).to.be.eq(7n)
  })

  it('should throw error', () => {
    expect(
	    // Using the wrong argument when calling this function just results in an error.
      demo.methods.add(4n, { fromUTXO: dummyUTXO })
    ).to.be.rejectedWith(/add check failed/)
  })

})
```
 
## Test a Contract on the Testnet
 
It is highly recommended to test your contract on the [testnet](https://test.whatsonchain.com/) after passing local tests. It ensures that a contract can be successfully deployed and invoked as anticipated on the blockchain.
 
Before testing, you need to:
 
* Get a private key with some test coins on the testnet. You could use our [facuet](https://scrypt.io/#faucet) to receive test coins.

You may visit [here](./how-to-deploy-and-call-a-contract.md) to see more details on contract deployment and call.


