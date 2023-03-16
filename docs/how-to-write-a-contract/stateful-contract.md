---
sidebar_position: 3
---

# Stateful Contracts

## Overview

In Bitcoin's UTXO model, a smart contract is one-off and stateless by default, since the UTXO containing it is destroyed after being spent. Being stateless allows it to scale easily, the same as in [HTTP](https://stackoverflow.com/questions/5836881/stateless-protocol-and-stateful-protocol) and [REST APIs](https://www.geeksforgeeks.org/restful-statelessness/).
A smart contract can simulate state by requiring 
the output of the spending transaction containing the same contract but with the updated state, enabled by [ScriptContext](scriptcontext.md).
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
As shown [before](how-to-write-a-contract.md#properties), a `@prop(true)` decorator is used to make a property part of the contract state, meaning it can be mutated when the contract gets called.

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

The built-in function `this.buildStateOutput()` creates an output containing the latest state. It takes an input: the number of satoshis in the output. We keep the satoshis unchanged in the example. If all outputs (only a single output here) we create in the contract hashes to `hashOutputs` in [ScriptContext](scriptcontext.md), we can be sure they are the outputs of the current transaction. Therefore, the updated state is propagated.


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