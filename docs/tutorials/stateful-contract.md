---
sidebar_position: 4
---

# Tutorial 4: Stateful Contract

## Overview

In this tutorial we will introduce a concept called `stateful contract` and how to create a stateful contract.

## What is a Stateful Contract?

Generally speaking, there are two different kinds of Bitcoin smart contracts:

### Non-stateful Contract

If a contract instance was only called once on-chain after deployment, and no longer generates new UTXO(s) that contain the locking script of the contract. We can call this kind of contract non-stateful, or in another word it's a one-off contract.

There are a lot of use cases for non-stateful contracts. For example, puzzle resolving contracts.
 
### Stateful Contract

If a contract instance was called multiple times on-chain after deployment, and generates new UTXO(s) that contain the locking script of the contract. We can call this kind of contract stateful, which means it can maintain its inner states correctly on-chain after each calling.

Stateful contracts are commonly used if you want some properties of your contract to be changed by calling `@method`s, which will be verified by miners.

## Create a Stateful Contract

We can use the `scrypt` command to create a demo stateful contract with all the needed scaffolding. Let's run the following command:

```sh
scrypt project --state my-project
```

Note the `state` option is turned on.

This will create a project containing a demo stateful contract named `Counter`. This contract implements a very easy state changing case: Increase a counter by one for every contract call.

Let's take a look at the contract source file `src/contracts/counter.ts`.

### Add `@prop(true)` on stateful property
As shown [before](../getting-started/how-to-write-a-contract.md#properties), a `@prop(true)` decorator is used to make the property `count` stateful. 

```ts
@prop(true) count: bigint;
```

### The entry method 

The contract code defines an entry method named `increment` for the stateful contract like this:

```ts
@method public increment(amount: bigint)
```


### Update properties and validate changes

The entry method mainly does two things:

* Increment the property `count`: 

```js
this.counter++;
```

* Validates this update has been correctly recorded into the `txPreimage`, or in another word, the new state of `count` has been serialized into current tx by calling:

```js
assert(this.ctx.hashOutputs == hash256(this.buildStateOutput(this.ctx.utxo.value)));
```

## Test a Stateful Contract

### Test calls locally

Let's take a look at the local test code in `tests/local/counter.test.ts`. The code can be broken down into the phases described below.

#### 1. Build a tx and a genesis instance for contract deployment

First the `Counter` gets instantiated to get an instance with the initial `count` value `0`. Also it's marked as the genesis instance.

```js
const counter = new Counter(0n).markAsGenesis();
``` 

The `Counter` class defines the method `getDeployTx` which builds the deployment tx for the instance.

```js
getDeployTx(utxos: UTXO[], initBalance: number): bsv.Transaction {
  this.balance = initBalance;
  const tx = new bsv.Transaction().from(utxos)
    .addOutput(new bsv.Transaction.Output({
      script: this.lockingScript,
      satoshis: initBalance,
    }));
  // also build the relate with tx
  this.lockTo = { tx, outputIndex: 0 };
  return tx;
}
```

It builds a tx from a `utxos` list passed in, then adding an output with script from `counter.lockingScript` and `initBalance` as its value. Also it binds `this` instance `lockTo` the `tx` with the `outputIndex` of `0`.

#### 2. Build a tx and an instance for contract call

As we described [before](../getting-started/how-to-deploy-and-call-a-contract#concepts), when we call an entry method of a contract instance, a new tx and a new contract instance will be built together.

A new instance from the previous contract can be created by calling its `next` method, which will make a deep copy of all properties except the `isGenesis` flag:

```ts
const newCounter = counter.next();
```

The properties value on this `newCounter` can be updated like:

```ts
newCounter.count++;
```

Our contract also implements a method called `getCallTx` which builds a tx for calling the entry method:

```ts
getCallTx(utxos: UTXO[], prevTx: bsv.Transaction, nextInst: Counter): bsv.Transaction {
  const inputIndex = 1;
  return new bsv.Transaction().from(utxos)
    .addInputFromPrevTx(prevTx)
    .setOutput(0, (tx: bsv.Transaction) => {
      nextInst.lockTo = { tx, outputIndex: 0 };
      return new bsv.Transaction.Output({
        script: nextInst.lockingScript,
        satoshis: this.balance,
      })
    })
    .setInputScript(inputIndex, (tx: bsv.Transaction) => {
      this.unlockFrom = { tx, inputIndex };
      return this.getUnlockingScript(self => {
        self.increment();
      })
    });
}

```

The `callTx` has a structure like this:

* Inputs
	
  * [0]: An input built from `utxos` to provide the tx fee;

  * [1]: An input spending the UXTO from `prevTx`. Its unlocking script is generated by calling contract’s entry method like:

  ```ts
  return this.getUnlockingScript(self => {
    self.increment();
  })
  ```

* Outputs

	* [0]: An output has the  `nextInst.lockingScript` as its script. It’s also the new UTXO bound with the latest contract instance `nextInst`.

#### 3. Verify the entry method call

Finally, the [`SmartContract.verify`](../getting-started/how-to-test-a-contract.md#use-smartcontactverify-method) method is used to test the entry call like this:

```ts
counter.verify(() => {
  counter.increment();
})
```

### Running the tests

Same as with our `Demo` project we can just use the following commands:

```sh
npm run test
```

to run the local tests and

```sh
npm run testnet
```

to test the contract deployment on the Bitcoin testnet. Don't forget to generate and fund your private key before running the testnet command.
