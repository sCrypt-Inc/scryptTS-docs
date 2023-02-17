---
sidebar_position: 2
---

# Tutorial 2: Stateful Contracts

## Overview

In Bitcoin's UTXO model, a smart contract is one-off and stateless by default, since the UTXO containing it is destroyed after being spent. Being stateless allows it to scale easily, the same as in [HTTP](https://stackoverflow.com/questions/5836881/stateless-protocol-and-stateful-protocol) and [REST APIs](https://www.geeksforgeeks.org/restful-statelessness/).
A smart contract can simulate state by requiring 
the output of the spending transaction containing the same contract but with the updated state, enabled by [ScriptContext](../getting-started/scriptcontext.md).
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

The `incrementOnChain()` method does two things:

1. Call `increment` to update the state:

```ts
@method()
increment(): void {
    this.count++
}
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

The built-in function `this.buildStateOutput()` creates an output containing the latest state. It takes an input: the number of satoshis in the output. We keep the satoshis unchanged in the example. If all outputs (only a single output here) we create in the contract hashes to `hashOutputs` in [ScriptContext](../getting-started/scriptcontext.md), we can be sure they are the outputs of the current transaction. Therefore, the updated state is propagated.


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
  public incrementOnChain() {
    this.increment()

    // make sure balance in the contract does not change
    const amount: bigint = this.ctx.utxo.value
    // output containing the latest state
    const output: ByteString = this.buildStateOutput(amount)
    // verify current tx has this single output
    assert(this.ctx.hashOutputs == hash256(output), 'hashOutputs mismatch')
  }

  @method()
  increment(): void {
      this.count++
  }
}
```

## Test a Stateful Contract

Stateful contact testing is very similar to how we described it in [this section](../getting-started/how-to-test-a-contract.md). The only different is that you have to be aware of smart contract instance changes after method calls.

As described in the [Overview](#overview), for each method call, a tx contains new contract UTXO(s) with the latest updated state, i.e., the next instance. From the perspective of the current spending tx, the public `@method` of a contract instance is called in one of its inputs, and the next contract instance is stored in one (or more) of its outputs.

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

As described in [this section](../getting-started/how-to-test-a-contract#getatxforinvokingamethod), we can build a call transaction. The only difference here is that we pass in the `next` instance and its balance as a method call option in a stateful contract. So the method (i.e., `incrementOnChain`) have all the information to verify that all updates made to the `next` instance follow the state transition rules in it.

```ts
const { tx: tx_i, atInputIndex } = await current.methods.incrementOnChain(
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
Full code is [here](https://github.com/sCrypt-Inc/scryptTS-examples/blob/master/src/contracts/counter.ts).


