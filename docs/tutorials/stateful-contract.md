---
sidebar_position: 2
---

# Tutorial 2: Stateful Contracts

## Overview

In Bitcoin's UTXO model, a smart contract is one-off and stateless by default, since the UTXO containing it is destroyed after being spent. Being stateless allows it to scale easily, the same as in [HTTP](https://stackoverflow.com/questions/5836881/stateless-protocol-and-stateful-protocol) and [REST APIs](https://www.geeksforgeeks.org/restful-statelessness/).
A smart contract can simulate state by requiring 
the output of the spending transaction containing the same contract but with the updated state, enabled by [ScriptContext](../getting-started/what-is-scriptcontext.md).
This is similar to making HTTP seem stateful by using cookies.

We divide a smart contract in the locking script of an output into two parts: code and state as shown below. The code part contains the business logic of a contract that encodes rules for state transition and must **NOT** change. State transition occurs when a transaction spends the output containing the old state and creates a new output containing the new state, while keeping the contract code intact.
Since the new output contains the same contract code, its spending transaction must also retain the same code, otherwise it will fail. This chain of transactions can go on and on and thus a state is maintained along the chain, recursively.
![](../../static/img/state.jpg)

## Create a Stateful Contract

We can create a stateful contract using the following command:

```sh
scrypt project --state my-project
```

Note the `state` option is turned on.

This will create a project containing a sample stateful contract named `Counter`. This contract maintains a single state: how many times it has been called since deployment.

Let's take a look at the contract source file `src/contracts/counter.ts`.

### Stateful properties
As shown [before](../getting-started/how-to-write-a-contract.md#properties), a `@prop(true)` decorator is used to make a property part of the contract state, meaning it can be mutated when the contract gets called.

```ts
@prop(true)
count: bigint
```

### Update states

The `incOnChain()` method does two things:

1. Update the state, like any other property:

```js
this.count++
```

2. Validate the new state goes into the next UTXO containing the same contract, i.e., the state is maintained.

```ts
// make sure balance in the contract does not change
const amount: bigint = this.ctx.utxo.value
// output containing the latest state
const output: ByteString = this.buildStateOutput(amount)
// verify current tx has this single output
assert(this.ctx.hashOutputs == hash256(output), 'hashOutputs mismatch')
```

The built-in function `this.buildStateOutput()` creates an output containing the latest state. It takes an input: the number of satoshis in the output. We keep the satoshis unchanged in the example. If all outputs (only a single output here) we create in the contract hashes to `hashOutputs` in [ScriptContext](../getting-started/what-is-scriptcontext.md), we can be sure they are the outputs of the current transaction. Therefore, the updated state is propagated.


The complete stateful contract is as follows:

```ts
export class Counter extends SmartContract {
  // stateful
  @prop(true)
  count: bigint

  constructor(count: bigint) {
    super(...arguments)
    this.count = count
  }

  @method(SigHash.ANYONECANPAY_SINGLE)
  public incOnChain() {
    this.count++

    // make sure balance in the contract does not change
    const amount: bigint = this.ctx.utxo.value
    // output containing the latest state
    const output: ByteString = this.buildStateOutput(amount)
    // verify current tx has this single output
    assert(this.ctx.hashOutputs == hash256(output), 'hashOutputs mismatch')
  }
}
```

## Test a Stateful Contract

Stateful contact testing is very similar to how we described it in [this section](../getting-started/how-to-test-a-contract.md). The only distinction for stateful contracts is that you have to be aware of instance changes in between method calls.

As described in the [Overview](./#overview), for each method call, a tx with new contract UTXO(s) containing the latest state is recorded on the blockchain. To make things clear and easy to understand, we will refer to each of these UTXOs as containing the next instance of the preceding one.

In other words, from the perspective of tx, the public `@method` of a contract instance is called in one of its inputs, and the subsequent contract instance is stored in one of its outputs.

Now, let's look at how to test the `incOnChain` method call:

```ts
// initialize an genesis instance and connect it to a signer
let counter = new Counter(0n);
counter.connect(dummySigner());

// set the current instance to be the genesis instance
let current = counter;

// create the next instance from the current
let nextInstance = current.next();

// apply updates on the next instance locally
nextInstance.counter++;

// call the method of current instance to apply the updates on chain
const { tx: tx_i, atInputIndex } = await current.methods.incOnchain(
  {
    // Since `counter.deploy` hasn't been called before, a fake UTXO of the contract should be passed in. 
    fromUTXO: getDummyContractUTXO(balance),

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

In general, we can break the method call for a stateful contract into 3 phases:

### 1. Build the `current` instance

The `current` instance refers to the latest contract instance (UTXO) on the blockchain. If this instance happens to be one in a deployment transaction, we call it the "genesis" instance. In the above example, we set the `current` instance to be the "genesis" instance like this:

```ts
let current = counter;
```

### 2. Create a `next` instance and apply local updates on it

As mentioned before, the `next` instance is the new instance in the UTXO of the method call tx.

To create a `next` of a specific contract instance, you can use code like this:

```ts
let nextInstance = instance.next();
```

It will make a deep copy of all properties and methods of `instance` to create a new one. Sometimes, if you only want to do a shallow copy of some properties, you can pass in the property names as an optional argument like this:

```ts
let nextInstance = instance.next([‘prop1’, ‘prop2’]);
```

Then, you should apply all the state updates to the `next` instance. Please note that these are just local updates and have not been applied to the blockchain yet. For our example, it just looks like this:

```ts
nextInstance.count++;
```

### 3. Call the method of the `current` instance to apply updates on chain

Then, as described in [this section](../getting-started/how-to-test-a-contract#getatxforinvokingamethod), we can obtain a call transaction. The difference here is that we pass in the `next` instance and its balance value as a method call option. The reason for this is that it will verify that all updates made to the `next` instance adhere to the public `@method`’s logic.

```ts
const { tx: tx_i, atInputIndex } = await current.methods.incOnchain(
  {
    // Since `counter.deploy` hasn't been called before, a fake UTXO of the contract should be passed in. 
    fromUTXO: getDummyContractUTXO(balance),

    // the `next` instance and its balance should be provided here
    next: {
      instance: nextInstance,
      balance
    }
  } as MethodCallOptions<Counter>
);
```

Finally, we can check the validity of the input script generated for the method call like this:

```ts
let result = tx_i.verifyScript(atInputIndex);
expect(result.success, result.error).to.eq(true);
```

### Running the tests

Same as before, we can just use the following command:

```sh
npm run test
```
Full code is [here](https://github.com/sCrypt-Inc/scryptTS-examples/blob/master/src/contracts/counter.ts).


