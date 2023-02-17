---
sidebar_position: 3
---

# Tutorial 3: How to debug ScriptContext


[ScriptContext](../getting-started/scriptcontext.md) enables the logic of the contract to be executed correctly according to the agreement, and the state of the contract can be propagated correctly.

When it runs wrong, you need to master the following methods to locate the error more efficiently.


## hashOutputs assertion failed

The `hashOutputs` field of `ScriptContext` is the double SHA256 of the serialization of all output amount (8-byte little endian) with scriptPubKey. Through it, we can agree on how the outputs of the transaction calling the contract should be constructed.

If the output of the transaction is not constructed as required by the contract, then the `hashOutputs` of `ScriptContext` field will not match the the double SHA256 of the `outputs` produced in the code when the contract runs. The following assertion will fail:

```ts
assert(this.ctx.hashOutputs == hash256(outputs), 'hashOutputs mismatch')
```

We all know that if the preimage of the hash is inconsistent, the hash value will not match. When an assertion failure occurs, we can only see two mismatched hash values, and cannot visually see the difference between the preimages of the two hash values (that is, the `outputs` in the contract and the outputs of the transaction).


A function `diffOutputs` in [DebugFunctions Interface](../getting-started/how-to-debug-a-contract.md#debugfunctions-interface) is provided to directly compare the difference between the outputs argument and all the outputs of the transaction bound by `unlockFrom`, which are serialized and hashed to produce `hashOutputs` field of `ScriptContext`. 

Just call `this.debug.diffOutputs(outputs)` in the contract:

```ts
this.debug.diffOutputs(outputs) // diff and print the comparison result
assert(this.ctx.hashOutputs == hash256(outputs), 'hashOutputs mismatch')
```

and you will see the comparison result:

![diffoutputs](../../static/img/diffoutputs.png)

Through the printed comparison results, we can intuitively see that the number of satoshis included in the output calculated in the contract is different from the number of satoshis included in the output actually added when constructing the transaction. Now, we have found the source of the error.



