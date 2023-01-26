---
sidebar_position: 4
---

# Tutorial 4: Stateful Contracts

## Overview

In Bitcoin's UTXO model, a smart contract is one-off and has no state by default, since the UTXO containing it is destroyed after being spent. However, a smart contract can simulate state by requiring 
the output of the spending transaction containing the same contract but with the updated state, enabled by [ScriptContext](../getting-started/what-is-scriptcontext.md).

We divide a smart contract in the locking script of an output into two parts: code and state as shown below. The code part contains the business logic of a contract that encodes rules for state transition and must NOT change. State transition occurs when a transaction spends the output containing the old state and creates an output containing the new state, while keeping the contract code intact.
![](../../static/img/state.jpg)

## Create a Stateful Contract

We can create a stateful contract using the following command:

```sh
scrypt project --state my-project
```

Note the `state` option is turned on.

This will create a project containing a sample stateful contract named `Counter`. This contract implements maintains a single state: how many times it has been called since deployment.

Let's take a look at the contract source file `src/contracts/counter.ts`.

### Stateful properties
As shown [before](../getting-started/how-to-write-a-contract.md#properties), a `@prop(true)` decorator is used to make a property part of the contract state, meaning it can be mutated when the contract gets called.

```ts
@prop(true)
count: bigint;
```

### Update states

The `increment()` method does two things:

1. Update the state, like any othe property:

```js
this.count++;
```

1. Validate the new state goes into the next UTXO containing the same contract, i.e., the state is maintained.

```ts
// make sure balance in the contract does not change
const amount: bigint = this.ctx.utxo.value;
// output containing the latest state
const output: ByteString = this.buildStateOutput(amount);
// verify current tx has this single output
assert(this.ctx.hashOutputs == hash256(output));
```

[ScriptContext](../getting-started/what-is-scriptcontext.md) `this.ctx` allows us to access the outputs of the spending transaction.


The complete stateful contract is as follows:

```ts
export class Counter extends SmartContract {
  // stateful
  @prop(true)
  count: bigint;

  constructor(count: bigint) {
    super(...arguments);
    this.count = count;
  }

  @method()
  public increment() {
    this.count++;
    assert(this.ctx.hashOutputs == hash256(this.buildStateOutput(this.ctx.utxo.value)));
  }
}
```

## Test a Stateful Contract
Let's take a look at the local test code in `tests/local/count.test.ts`, which is broken into 3 phases.

### 1. Build a tx and a genesis instance for contract deployment

First the `Counter` gets initialized to `0`. Also it's marked as genesis (set flag `isGenesis` internally), the first in a chain of transactions as the contract state gets updated.

```js
const count = new Counter(0n).markAsGenesis();
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
  // also build the relationship between the contract and the tx
  this.lockTo = { tx, outputIndex: 0 };
  return tx;
}
```

It builds a tx from a `utxos` list passed in as inputs. It has an output with the initial contract state. Also it binds `this` instance to the `tx` with the `outputIndex` of `0`, meaning the contract is deployed in tx's 0-th output.

#### 2. Build a tx and an instance for contract call

As we described [before](../getting-started/how-to-deploy-and-call-a-contract#concepts), when we call a public method of a contract instance, a new tx and a new contract instance will be built together.

A new instance from the previous contract can be created by calling its `next` method, which will make a deep copy of all properties except for the `isGenesis` flag:

```ts
const newCounter = counter.next();
```

Property of this `newCounter` can be updated as before:

```ts
newCounter.count++;
```

Our contract also implements a method called `getCallTx`, which builds a tx to call the public method:

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

The tx has the following structure:

* Inputs
	
  * [0]: an input built from `utxos` to pay the tx fee;

  * [1]: an input spending the UXTO from `prevTx`, containing the contract. Its unlocking script is generated by calling contract’s public method like:

  ```ts
  return this.getUnlockingScript(self => {
    self.increment();
  })
  ```

* Outputs

	* [0]: An output has the  `nextInst.lockingScript` as its script. It’s also the new UTXO bound with the latest contract instance `nextInst`.

#### 3. Verify the entry method call

Finally, the [`SmartContract.verify`](../getting-started/how-to-test-a-contract.md#use-smartcontactverify-method) method is used to test the public method:

```ts
counter.verify(() => {
  counter.increment();
})
```

### Running the tests

Same as before, we can just use the following command:

```sh
npm run test
```
Full code is [here](https://github.com/sCrypt-Inc/scryptTS-examples/blob/master/src/contracts/counter.ts).
