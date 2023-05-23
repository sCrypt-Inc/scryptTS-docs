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

## Stateless vs Stateful Contracts

The choice between stateless and stateful smart contracts hinges on the needs of your blockchain application.

If your application involves complex operations where persistent data is required, a stateful smart contract may be more appropriate. Examples include applications that track balances or ownership, like [tokens](https://github.com/sCrypt-Inc/boilerplate/blob/master/src/contracts/erc20.ts) or [whole games](https://github.com/sCrypt-Inc/tic-tac-toe/blob/main/src/contracts/tictactoe.ts).

On the other hand, if your application merely needs to execute simple transactions without retaining data, a stateless smart contract might be a more efficient choice. An example would be a simple transfer, such as a [hash puzzle](https://github.com/sCrypt-Inc/boilerplate/blob/master/src/contracts/hashPuzzle.ts).

Let's explore an example where using a stateful contract comes useful. We will compare two ways to implement a multi-sig smart contract. One is implemented stateless, the other one is stateful.

### Stateless Multi-Sig

```ts
class MultiSigPayment extends SmartContract {
    // Public key hashes of the 3 signers.
    @prop()
    readonly pubKeyHashes: FixedArray<PubKeyHash, 3>

    constructor(pubKeyHashes: FixedArray<PubKeyHash, 3>) {
        super(...arguments)
        this.pubKeyHashes = pubKeyHashes
    }

    @method()
    public unlock(
        signatures: FixedArray<Sig, 3>,
        publicKeys: FixedArray<PubKey, 3>
    ) {
        // Check if the passed public keys belong to the specified public key hashes.
        for (let i = 0; i < 3; i++) {
            assert(
                hash160(publicKeys[i]) == this.pubKeyHashes[i],
                'public key hash mismatch'
            )
        }

        // Validate signatures.
        assert(
            this.checkMultiSig(signatures, publicKeys),
            'checkMultiSig failed'
        )
    }
}
```

The above is a stateless implementation of a multi-sig sCrypt smart contract. It must be unlocked within a single contract call (i.e. a single transaction) which needs to contain the needed signatures. 
Signers need to coordinate off-chain to construct the unlocking transaction, which includes agreeing upon the destination of the unlocked funds and signing the transaction.

### Stateful Multi-Sig

```ts
export type Owner = {
    pubKey: PubKey
    validated: boolean
}

export class StatefulMultiSig extends SmartContract {
    // Payment destination once signature threshold is reached.
    @prop()
    dest: PubKeyHash

    // Public keys of the owners along with boolean flags, that
    // indicate if their sig was already validated.
    @prop(true)
    owners: FixedArray<Owner, 3>

    constructor(
        dest: PubKeyHash,
        owners: FixedArray<Owner, 3>
    ) {
        super(...arguments)
        this.dest = dest
        this.owners = owners
    }
    
    
    @method(SigHash.ANYONECANPAY_SINGLE)
    public add(sig: Sig, pubKeyIdx: bigint) {
        let added = false

        for (let i = 0; i < 3; i++) {
            if (BigInt(i) == pubKeyIdx) {
                const owner = this.owners[i]
                const valid = this.checkSig(sig, owner.pubKey)
                if (valid && !owner.validated) {
                    // Toggle flag.
                    this.owners[i].validated = true
                    added = true
                }
            }
        }

        // Make sure at least one new valid sig was added.
        assert(added, 'No new valid signature was provided.')

        // Make sure balance in the contract does not change.
        const amount: bigint = this.ctx.utxo.value
        // Output containing the latest state.
        const output: ByteString = this.buildStateOutput(amount)
        // Verify unlocking tx has this single output.
        assert(this.ctx.hashOutputs == hash256(output), 'hashOutputs mismatch')
    }

    @method(SigHash.ANYONECANPAY_SINGLE)
    public pay() {
        // Check if all signed.
        let nValid = 0n
        for (let i = 0; i < 3; i++) {
            if (this.owners[i].validated) {
                nValid += 1n
            }
        }
        assert(
            nValid == 3,
            'Not enough valid signatures.'
        )

        // Make sure balance in the contract does not change.
        const amount: bigint = this.ctx.utxo.value
        // Pay destination address
        const output: ByteString = Utils.buildPublicKeyHashOutput(
            this.dest,
            amount
        )
        // Verify unlocking tx has this output.
        assert(this.ctx.hashOutputs == hash256(output), 'hashOutputs mismatch')
    }

}
```
We can observe, that the contract has two public methods:
- `add` — this method takes as an input a valid signature and the index of the public key it belongs to. It first checks the validity of this signature and sets a flag if valid.
- `pay` — this method checks if every signer provided his signature. If so, it ensures the next output will pay the locked funds to the address stored in the `dest` variable.

While being more complex when compared to the stateless example, it offers the critical advantage that no coordination is needed between the signers. Both the collection of signatures and the payout are managed by the smart contract code itself.
