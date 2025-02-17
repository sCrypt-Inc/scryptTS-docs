---
sidebar_position: 4
---

# How to Debug ScriptContext Failure


[ScriptContext](../how-to-write-a-contract/scriptcontext.md) enables the logic of the contract to be executed correctly according to the agreement, and the state of the contract to be propagated correctly.

When it runs incorrectly, you need to master the following methods to locate the error more efficiently.


## hashOutputs assertion failed

The `shaOutputs` field of `ScriptContext` is the double SHA256 of the serialization of all output amount (8-byte little endian) with scriptPubKey. Through it, we can agree on how the outputs of the transaction calling the contract should be constructed.

If the output of the transaction is not constructed as required by the contract, then the `shaOutputs` of `ScriptContext` field will not match the the double SHA256 of the `outputs` produced in the code when the contract runs. The following assertion will fail:

```ts
assert(this.ctx.shaOutputs == sha256(outputs), 'shaOutputs mismatch')
```

We all know that if the preimage of the hash is inconsistent, the hash value will not match. When an assertion failure occurs, we can only see two mismatched hash values, and cannot visually see the difference between the preimages of the two hash values (that is, the `outputs` in the contract and the outputs of the transaction).


A function `diffOutputs` in DebugFunctions Interface is provided to directly compare the difference between the outputs argument and all the outputs of the transaction, which are serialized and hashed to produce the `shaOutputs` field of `ScriptContext`.

Just call `this.debug.diffOutputs(outputs)` in the contract:

```ts
this.debug.diffOutputs(outputs) // diff and print the comparison result
assert(this.ctx.shaOutputs == sha256(outputs), 'shaOutputs mismatch')
```

and you will see the comparison result:

![diffoutputs](../../static/img/diffoutputs.png)


If the outputs of the transaction is inconsistent with the outputs expected by the contract:

1. Outputs of the transaction is marked green.
2. Outputs expected by the contract is marked red.
3. Identical parts are marked in gray.
   
Through the printed comparison results, we can intuitively see that the number of satoshis included in the output calculated in the contract is different from the number of satoshis included in the output actually added when constructing the transaction. Now, we have found the source of the error.
