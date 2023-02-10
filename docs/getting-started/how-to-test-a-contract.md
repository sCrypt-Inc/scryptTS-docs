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

`DummyProvider`: A mockup provider just for local tests. Do not send or query transactions.
`WhatsonchainProvider`: A wrapper for whatsonchain APIs, can be used in testnet as well as mainnet.

You can initiate these providers like this:

```ts
let dummyProvider = new DummyProvider();
let wocProvider = new WhatsonchainProvider(bsv.Networks.testnet);
```

## Singer 

A `Signer` is a class that in some way, directly or indirectly, has access to a private key that can sign messages and transactions to authorize the network to perform operations.

For instance, the simplest signer might be a private key, while the most complex signer is a wallet.

For testing purposes only, we have a built-in wallet called "TestWallet." It can be used in tests like these:

```ts
const signer = new TestWallet(privateKey, provider);
```

 
## Test a Contract Locally

Compared to other blockchains, smart contracts on Bitcoin are **pure**.

* Given the same input, its public method always returns the same boolean output: success or failure. It has no internal state.
* A public method call causes no side effects.

Smart contracts are similar to mathematical functions. Thus, we can test a contract locally without touching the Bitcoin blockchain. If it passes tests off chain, we are confident it will behave the same on chain.

### Prepare a Local Signer

The 'TestWallet' and 'DummyProvider' combination would be ideal for the local tests because it can sign the contract call transactions without actually sending them. 

Such a signer may be declared using the following code:

```ts
let signer = new TestWallet(privateKey, new DummyProvider());
```

Then just connect it to your contract instance like this:

```ts
instance.connect(signer);
```

### Get a Tx for Invoking the Method
 
In order to provide a more user-friendly method of calling contracts' public "@method," we have injected a runtime object named "methods" in your contract. As a result, you can code as follows:


```ts
Class MyContract extends SmartContract {
  …
  @method
  public foo(arg1, arg2) {...}
}

// calling `foo` method on a contract instance.
const { tx, atInputIndex } = await instance.methods.foo(arg1, arg2, opts);
```

A runtime function with the same name and expanded arguments that accepts one additional "options" parameter at the end is attached to "instance.methods" for each public "@method" of your contract.

Actually, the three objectives of this function are as follows:

Get an unsigned transaction by calling the tx builder for the public "@method".
Ask the instance's singer to sign the transaction.
Ask the instance's provider to send the transaction.

The signed "tx" for the contract call and its input index are then returned.

### Verify the Tx Input

Then you can call `verifyInput` on the returned `tx` to verify that the contract method call has been transformed into a valid input script.

```ts
let result = tx.verifyInput(atInputIndex)
console.log(result.success) // true or false
```

### Integrate with a testing framework
 
You can use whatever testing framework you like to write unit tests for your contract. For example, a local test using [Mocha](https://mochajs.org/) is shown below:
 
```js
describe('Test SmartContract `Demo`', () => {
  let signer;
  let demo;

  before(async () => {
    await Demo.compile() 
    signer = new TestWallet(privateKey, new DummyProvider())
    demo = new Demo(1n, 2n)
    demo.connect(signer)
  })

  it('should pass the public method unit test successfully.', async () => {

    const { tx: callTx, atInputIndex } = await demo.methods.add(
      3n,
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
 
It is highly recommended to test your contract on a [testnet](https://test.whatsonchain.com/) after passing local tests. It ensures that a contract can be successfully deployed and invoked as anticipated on the blockchain.
 
Before testing, you need to:
 
* Get a private key with some test coins on the testnet. You could use our [facuet](https://scrypt.io/#faucet) to receive test coins.

You may visit [here](./how-to-deploy-and-call-a-contract.md) to see more details on contract deployment and call.

