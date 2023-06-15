---
sidebar_position: 5
---

# How to Test a Contract

Before using a smart contract in production, one should always test it carefully, especially because any bug in it may cause **real economic losses**.

There are two different kinds of tests recommended for every project using `sCrypt`:

* **Local Unit Testing**
* **Testnet Integration Testing**

Now we will take a look at the file `tests/local/demo.ts`. This file contains code for deployment of our `Demo` contract on the Bitcoin testnet and a subsequent public method call on the contract.

But before going into details, you should learn some basic models of sCrypt for signing and sending transactions.

## Compile the Contract

First, call function `SmartContract.compile()` to compile the contract before doing any testing.

```ts
await Demo.compile()
```

## Provider

A `Provider` is an abstraction of a standard Bitcoin node that provides connection to the Bitcoin network, for read and write access to the blockchain.

sCrypt already has a few built-in providers:

* `DummyProvider`: A mockup provider just for local tests. It does not connect to the Bitcoin blockchain and thus cannot send transactions.

* `DefaultProvider`:  The default provider is the safest, easiest way to begin developing on Bitcoin, and it is also robust enough for use in production. It can be used in testnet as well as mainnet.

* See full list of providers [here](./reference/classes/Provider.md#hierarchy).

You can initialize these providers like this:

```ts
let dummyProvider = new DummyProvider();

// Mainnet
let provider = new DefaultProvider();
// Or explicitly: let provider = new DefaultProvider(bsv.Networks.mainnet);

// Testnet
let provider = new DefaultProvider(bsv.Networks.testnet);
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

For local testing, we can use the `TestWallet`, with a mock provider. The `TestWallet` and `DummyProvider` combination would be ideal for local tests because it can sign the contract call transactions without actually sending them.

Such a signer may be declared as below:

```ts
let signer = new TestWallet(privateKey, new DummyProvider());
```

Don't forget to connect the signer to the contract instance as well:

```ts
await instance.connect(signer);
```

### Call a Public Method

Similar to what we described in [this section](../how-to-test-a-contract#call-a-public-method), you can call a contract's public `@method` on the blockchain as follows:

```ts
// build and send tx for calling `foo`
const { tx, atInputIndex } = await instance.methods.foo(arg1, arg2, options);
console.log(`Smart contract method successfully called with txid ${tx.id}`);
```

Remember that the tx is not actually sent anywhere in a local test because we connect to a mock provider.

### Verify the Tx input for the method call

In the previous step, the signed `tx` for the contract call and its input index are returned. You can call `verifyScript` on the returned `tx` to verify that the contract method call at the given tx input index is successful.

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

 ## Test a Stateful Contract

Stateful contact testing is very similar to what we have described above. The only different is that you have to be aware of smart contract instance changes after method calls.

As described in the [Overview](./how-to-write-a-contract/stateful-contract.md#overview), for each method call, a tx contains new contract UTXO(s) with the latest updated state, i.e., the next instance. From the perspective of the current spending tx, the public `@method` of a contract instance is called in one of its inputs, and the next contract instance is stored in one (or more) of its outputs.

Now, let's look at how to test the `incrementOnChain` method call:

```ts
// initialize the first instance, i.e., deployment
let counter = new Counter(0n);
// connect it to a signer
counter.connect(dummySigner());

// set the current instance to be the first instance
let current = counter;

// create the next instance from the current
let nextInstance = current.next();

// apply the same updates on the next instance locally
nextInstance.increment();

// call the method of current instance to apply the updates on chain
const { tx: tx_i, atInputIndex } = await current.methods.incrementOnChain(
  {
    // Since `counter.deploy` hasn't been called before, a fake UTXO of the contract should be passed in.
    fromUTXO: getDummyUTXO(balance),

    // the `next` instance and its balance should be provided here
    next: {
      instance: nextInstance,
      balance
    }
  } as MethodCallOptions<Counter>
);

// check the validity of the input script generated for the method call.
let result = tx_i.verifyScript(atInputIndex);
expect(result.success, result.error).to.eq(true);

```

In general, we call the method of a stateful contract in 3 steps:

### 1. Build the `current` instance

The `current` instance refers to the contract instance containing the latest state on the blockchain. The first instance is in the deployment transaction. In the above example, we initialize the `current` instance to be the first instance like this:

```ts
let current = counter;
```

### 2. Create a `next` instance and apply updates to it off chain

The `next` instance is the new instance in the UTXO of the method calling tx.

To create the `next` of a specific contract instance, you can simply call `next()` on it:

```ts
let nextInstance = instance.next();
```

It will make a deep copy of all properties and methods of `instance` to create a new one.

Then, you should apply all the state updates to the `next` instance. Please note that these are just local/off-chain updates and are yet to be applied to the blockchain.

```ts
nextInstance.increment();
```
This is the **SAME** method we call on chain in `incrementOnChain`, thanks to the fact that both the on-chain smart contract and off-chain code are written in TypeScript.

### 3. Call the method on the `current` instance to apply updates on chain

As described in [this section](#call-a-public-method), we can build a call transaction. The only difference here is that we pass in the `next` instance and its balance as a method call option in a stateful contract. So the method (i.e., `incrementOnChain`) have all the information to verify that all updates made to the `next` instance follow the state transition rules in it.

```ts
const { tx: tx_i, atInputIndex } = await current.methods.incrementOnChain(
  {
    // Since `counter.deploy` hasn't been called before, a fake UTXO of the contract should be passed in.
    fromUTXO: getDummyUTXO(balance),

    // the `next` instance and its balance should be provided here
    next: {
      instance: nextInstance,
      balance
    }
  } as MethodCallOptions<Counter>
);
```

Finally, we can check the validity of the method call as before.

```ts
let result = tx_i.verifyScript(atInputIndex);
expect(result.success, result.error).to.eq(true);
```

### Running the tests

As before, we can just use the following command:

```sh
npm run test
```
Full code is [here](https://github.com/sCrypt-Inc/boilerplate/blob/master/tests/local/counter.test.ts).

You may visit [here](./how-to-deploy-and-call-a-contract/how-to-deploy-and-call-a-contract.md) to see more details on contract deployment and call.
