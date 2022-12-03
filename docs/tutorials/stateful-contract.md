---
sidebar_position: 3
---

# Tutorial 3: Stateful Contract

## Overview

In this tutorial we will introduce a concept called `stateful contract` and how to write / test a stateful contract.

## What is a Stateful Contract?

Generally speaking, there are two different kinds of Bitcoin SV smart contracts:

### Non-stateful Contract

If a contract instance was only called once on-chain after deployment, and no longer generates new UTXO(s) that contain the locking script of the contract. We can call this kind of contract non-stateful, or in another word it's a one-off contract.

There are a lot of use cases for non-stateful contracts. For example, puzzle resolving contracts.
 
### Stateful Contract

If a contract instance was called multi-times on-chain after deployment, and generates new UTXO(s) that contain the locking script of the contract. We can call this kind of contract stateful, which means it can maintain its inner states correctly on-chain after each calling.

Stateful contracts are commonly used if you want some properties of your contract to be changed by calling `@method`s, which will be verified by miners.

## Write a Stateful Contract

We’re going to write a simple stateful contract named `Counter` to implement a very easy state changing case: Increasing the count by one for every contract call.

First we declared a class like this:

```ts
export class Counter extends SmartContract { }
```

### Add `@prop(true)` on stateful property
As shown [before](../getting-started/how-to-write-a-contract.md#properties), we can use `@prop(true)` to make the property `count` stateful. 

```ts
@prop(true) count: bigint;
```

### Define an entry method 

Then we can define an entry method named `increment` for the stateful contract like this:

```ts
@method public increment(txPreimage: SigHashPreimage)
```

Here are the explanations for the input parameters:

* `txPreimage` is an instance of a  builtin class [`SigHashPreimage`](../reference/classes/SigHashPreimage), which can provide some context information about the current tx according to [BIP143](https://github.com/bitcoin-sv/bitcoin-sv/blob/master/doc/abc/replay-protected-sighash.md). 

### Update properties and validate changes

Next we need to implement the entry method, which mainly do two things:

* Update the property `count` with a statement: 

```js
this.count++;
```

* Valid this update has been correctly recorded into the `txPreimage`, or in another word, the new state of `count` has been serialized into current tx by calling:

```js
assert(this.updateState(txPreimage, SigHash.value(txPreimage)));
```

Finally we can get a complete stateful contract `Counter` as below:

```ts
export class Counter extends SmartContract {
  @prop(true)
  count: bigint;

  constructor(count: bigint) {
    super(count);
    this.count = count;
  }

  @method
  public increment(txPreimage: SigHashPreimage) {
    this.count++;
    assert(this.updateState(txPreimage, SigHash.value(txPreimage)));
  }
}
```

## Test a Stateful Contract

### Test calls locally

In order to test our stateful contract `Counter`, we can follow these steps:

#### 1. Build a tx and a genesis instance for contract deployment

First we should instantiate the `Counter` to get an instance with the initial `count` value `0`. Also it's marked as the  genesis instance.

```js
const counter = new Counter(0n).markAsGenesis();
``` 

Then we can build the deployment tx for the instance:

```js
const deployTx = new bsv.Transaction().from(dummyUTXO)
  .addOutput(new bsv.Transaction.Output({
    script: counter.lockingScript,
    satoshis: balance,
  }));
```

We use a `dummyUTXO` as the input here because we just want to run the test locally; then adding an output with script from `counter.lockingScript` and `balance` as its value. That’s all for the `deployTx`.

And we bind the `deployTx` with the genesis instance `counter`:

```ts
counter.lockTo = { tx: deployTx, outputIndex: 0 };
```

#### 2. Build a tx and an instance for contract call

As we described [before](../getting-started/how-to-deploy-and-call-a-contract#concepts), when we call an entry method of a contract instance, a new tx and a new contract instance will be built together.

We can start by building a new instance from the previous one by calling its `next` method, which will make a deep copy of all properties except the `isGenesis` flag:

```ts
const newCounter = counter.next();
```

Then we can apply the updates on this `newCounter` like:

```ts
newCounter.count++;
```

After that we build a call tx like this:

```ts
const inputIndex = 1;
const callTx = new bsv.Transaction().from(dummyUTXO)
  .addInput(createInputFromPrevTx(deployTx))
  .setOutput(0, (tx: bsv.Transaction) => {
    newCounter.lockTo = { tx, outputIndex: 0 };
    return new bsv.Transaction.Output({
      script: newCounter.lockingScript,
      satoshis: balance,
    })
  })
  .setInputScript(inputIndex, (tx: bsv.Transaction, prevOutput: bsv.Transaction.Output) => {
    counter.unlockFrom = { tx, inputIndex };
    const prevInstance_ = counter.clone();
    const preimage = getPreimage(tx, prevOutput.script, prevOutput.satoshis, inputIndex)
    return prevInstance_.getUnlockingScript(() => {
      prevInstance_.increment(preimage);
    })
  });
```

The `callTx` has a structure like this:

* Inputs
	
  * [0]: An input built from `dummyUTXO` to simulate providing tx fee;

  * [1]: An input spending the UXTO from `deployTx`. Its script is generated by calling contract’s entry method like:

  ```ts
  const prevInstance_ = counter.clone();
  const preimage = getPreimage(tx, prevOutput.script, prevOutput.satoshis, inputIndex)
  return prevInstance_.getUnlockingScript(() => {
        prevInstance_.increment(preimage);
      })
  ```

	Notice that we used a copy instance of `counter` named `prevInstance_` instead of itself here. This is because this whole callback function might be called multiple times during the tx building process, and the `increment` method will change the `count` every time. That’s unexpected. Using a cloned version will avoid this issue.

* Outputs

	* [0]: An output has `newCounter.lockingScript` as its script. It’s also the new UTXO bound with `newCounter` contract instance.

#### 3. Verify the entry method call

Finally we can the [`SmartContract.verify`](../getting-started/how-to-test-a-contract.md#use-smartcontactverify-method) method to test the entry call like this:

```ts
counter.verify(() => {
  const preimage = getPreimage(callTx, counter.lockingScript, balance, inputIndex);
  counter.increment(preimage);
})
```

Here we also use the function `getPreimage` to build the argument needed.

A complete example code looks like:

```ts
const balance = 1000;
const counter = new Counter(0n);
counter.markAsGenesis();

const deployTx = new bsv.Transaction().from(dummyUTXO)
  .addOutput(new bsv.Transaction.Output({
    script: counter.lockingScript,
    satoshis: balance,
  }));
counter.lockTo = { tx: deployTx, outputIndex: 0 };

const newCounter = counter.clone(false);
newCounter.count++;

const inputIndex = 1;
const callTx = new bsv.Transaction().from(dummyUTXO)
  .addInput(createInputFromPrevTx(deployTx))
  .setOutput(0, (tx: bsv.Transaction) => {
    newCounter.lockTo = { tx, outputIndex: 0 };
    return new bsv.Transaction.Output({
      script: newCounter.lockingScript,
      satoshis: balance,
    })
  })
  .setInputScript(inputIndex, (tx: bsv.Transaction, prevOutput: bsv.Transaction.Output) => {
    counter.unlockFrom = { tx, inputIndex };
    const prevInstance_ = counter.clone();
    const preimage = getPreimage(tx, prevOutput.script, prevOutput.satoshis, inputIndex)
    return prevInstance_.getUnlockingScript(() => {
      prevInstance_.increment(preimage);
    })
  });

counter.verify(() => {
  const preimage = getPreimage(callTx, counter.lockingScript, balance, inputIndex);
  counter.increment(preimage);
})
```

#### Test multiple calls

Also we can easily modify the above code to support testing multiple calls like this:

```ts
const balance = 1000;
const counter = new Counter(0n).markAsGenesis();

const deployTx = new bsv.Transaction().from(dummyUTXO)
  .addOutput(new bsv.Transaction.Output({
    script: counter.lockingScript,
    satoshis: balance,
  }));
counter.lockTo = { tx: deployTx, outputIndex: 0 };

let prevTx = deployTx;
let prevInstance = counter;
for (let i = 0; i < 3; i++) {
  const newCounter = prevInstance.clone(false);
  newCounter.count++;

  const inputIndex = 1;
  const callTx = new bsv.Transaction().from(dummyUTXO)
    .addInput(createInputFromPrevTx(prevTx))
    .setOutput(0, (tx: bsv.Transaction) => {
      newCounter.lockTo = { tx, outputIndex: 0 };
      return new bsv.Transaction.Output({
        script: newCounter.lockingScript,
        satoshis: balance,
      })
    })
    .setInputScript(inputIndex, (tx: bsv.Transaction, prevOutput: bsv.Transaction.Output) => {
      prevInstance.unlockFrom = { tx, inputIndex };
      const prevInstance_ = prevInstance.clone();
      const preimage = getPreimage(tx, prevOutput.script, prevOutput.satoshis, inputIndex)
      return prevInstance_.getUnlockingScript(() => {
        prevInstance_.increment(preimage);
      })
    });

  prevInstance.verify(() => {
    const preimage = getPreimage(callTx, prevInstance.lockingScript, balance, inputIndex);
    prevInstance.increment(preimage);
  })

  prevTx = callTx;
  prevInstance = newCounter;
}
```

### Test calls on testnet

If we want to put it on testnet just need to make these minor changes:

* Prepare a private key with some amount of test BSVs for testnet；

* Replace the  `dummyUTXO` with real UTXOs for the private key；

* Replace the local `SmartContract.verify` method call with signing and sending the tx to the testnet;

You can try to make these changes by yourself.

The full example is available at [here](https://github.com/sCrypt-Inc/scrypt-ts-examples)
