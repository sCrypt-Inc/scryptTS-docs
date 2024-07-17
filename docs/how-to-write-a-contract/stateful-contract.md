---
sidebar_position: 4
---

# Stateful Contracts

## Overview

In Bitcoin's UTXO model, a smart contract is one-off and **stateless** by default, since the UTXO containing the contract is destroyed after being spent. Being stateless allows it to scale, similar to [HTTP](https://stackoverflow.com/questions/5836881/stateless-protocol-and-stateful-protocol) and [REST APIs](https://www.geeksforgeeks.org/restful-statelessness/).
A smart contract can simulate state by requiring
the output of the spending transaction containing the same contract but with the updated state, enabled by [ScriptContext](scriptcontext.md).
This is similar to making HTTP seem stateful by using cookies.

### Managing state across bitcoin transactions

So far, all the contracts we’ve gone through have been stateless. But often, you may want a contract to have some concept of “memory” so that it may remember information about its previous interactions. That is, we need contracts that are **stateful**.

To achieve that, we divide a smart contract in the locking script of an output into two parts: 1. code and 2. state, as shown below.

The code part contains the business logic of a contract that encodes rules for state transition and **must not change**.
A state transition occurs when a transaction spends the output containing the old state and creates a new output containing the new state, while keeping the contract code intact.
Since the new output contains the same contract code, its spending transaction must also retain the same code, otherwise it will fail. This chain of transactions can go on and on and thus a state is maintained along the chain, recursively.
![](../../static/img/state.jpg)

## Create a Stateful Contract

We can create a stateful contract using the following command:

```sh
npx scrypt-cli project --state counter
```

Note the `state` option is turned on.

This creates a project containing a sample stateful contract named `Counter`. This basic contract maintains a single state: how many times it has been called since deployment.

Let's take a look at the contract source file `/src/contracts/counter.ts`.

### Stateful properties

As shown [before](how-to-write-a-contract.md#properties), a `@prop(true)` decorator is used to make a property part of the contract stateful, meaning it can be mutated when the contract gets called.

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
// outputs containing the latest state and an optional change output
const outputs: ByteString = this.buildStateOutput(amount) + this.buildChangeOutput()
// verify unlocking tx has the same outputs
assert(this.ctx.hashOutputs == hash256(outputs), 'hashOutputs mismatch')
```

The built-in function `this.buildStateOutput()` creates an output containing the latest state. It takes an input: the number of satoshis in the output. We keep the satoshis unchanged in the example. The built-in function `this.buildChangeOutput()` creates a P2PKH change output when necessary. It will calculate the change amount automatically, and use the signer's address by default.

If all outputs we create in the contract hashes to `hashOutputs` in [ScriptContext](scriptcontext.md), we can be sure they are the outputs of the current transaction. Therefore, the updated state is propagated.


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

  @method()
  public incrementOnChain() {
    // Increment counter.
    this.increment()

    // Ensure next output will contain this contracts code with
    // the updated count property.
    // And make sure balance in the contract does not change
    const amount: bigint = this.ctx.utxo.value
    // outputs containing the latest state and an optional change output
    const outputs: ByteString = this.buildStateOutput(amount) + this.buildChangeOutput()
    // verify unlocking tx has the same outputs
    assert(this.ctx.hashOutputs == hash256(outputs), 'hashOutputs mismatch')
  }

  @method()
  increment(): void {
    this.count++
  }
}
```

## Stateless vs Stateful Contracts

The choice between stateless and stateful smart contracts depends on the needs of your blockchain application.

If your app needs to store persistent data on chain, a stateful smart contract is appropriate. For example, with an [auction app](../tutorials/auction.md), you want to store the highest bidder so far and how much she bids, in case you need to return the fund to her when a higher bid arrives.

If your app merely validates spending conditions without retaining data, a stateless smart contract is desirable. An example is a simple transfer using signature and public key in a [P2PKH contract](../how-to-deploy-and-call-a-contract/how-to-deploy-and-call-a-contract.md#method-with-signatures).
