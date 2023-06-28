---
sidebar_position: 9
---

# Sighash in `@method()`

In this section, we will introduce how to specify different sighash types in `@method()` decorator to simplify the implementation of smart contracts.

:::note
The following content is only capable with those contracts that access `ScriptContext` in their public method.
:::note

#### Counter

Check the [Counter](https://github.com/sCrypt-Inc/boilerplate/blob/master/src/contracts/counter.ts) contract again in our [boilerplate](https://github.com/sCrypt-Inc/boilerplate) repository. It's quite simple and records how many times it has been called since deployment.

```ts
export class Counter extends SmartContract {
    ...
    
    @method()
    public incrementOnChain() {
        ...
        
        const amount: bigint = this.ctx.utxo.value
        const outputs: ByteString = this.buildStateOutput(amount) + this.buildChangeOutput()
        assert(this.ctx.hashOutputs == hash256(outputs), 'hashOutputs mismatch')
    }
    
    ...
}
```

In the public method, we first build the `outputs` of the spending transaction. It contains not only an output with the next contract state, but also a P2PKH change output.

```ts
const outputs: ByteString = this.buildStateOutput(amount) + this.buildChangeOutput()
```

Then validate if they hash to the `hashOutputs` of `ScriptContext`.

```ts
assert(this.ctx.hashOutputs == hash256(outputs), 'hashOutputs mismatch')
```

Noted that the `@method` [decorator](../how-to-write-a-contract/how-to-write-a-contract.md#method-decorator) takes a sighash type as a parameter, it defaults to sighash `ALL`. According to the [doc](../how-to-write-a-contract/scriptcontext.md#sighash-type),  `hashOutputs` is the double SHA256 of the serialization of **all outputs** when the sighash type is neither `SINGLE` nor `NONE`. The [default transaction builder](../how-to-deploy-and-call-a-contract/how-to-customize-a-contract-tx.md#default-1) will add a change output when necessary. That's why we need to add a change output when building outputs of the spending transaction in the public method: we need to build all the outputs that are included in `hashOutputs`. Otherwise, it will fail verification.

The following [transaction](https://test.whatsonchain.com/tx/845f22b728deb23acacbc6f58f23ffde9c3e2be976e08c57f2bdcb417e3eacc5) is a contract calling transaction of Counter, as you can see it contains two outputs just like we described above.

![](../../static/img/counter-call.png)

#### Advanced Counter

Noted that in the state transition of Counter, there's always only one UTXO that contains the latest contract state. When the contract is called, it spends the UTXO of the current state and creates a UTXO of the new state. Moreover, the contract input index of the spending transaction and the contract output index are the same.

In fact, we only care about the contract-related UTXO in the transaction inputs and outputs when calling Counter, and do not care about other inputs and outputs, such as P2PKHs. Thus, we can use sighash type `SINGLE` or `SINGLE|ANYONECANPAY` to simplify the contract.

Both of these sighash types only focus on the contract output itself, which is what we want, it matches the format of the Counter calling transaction exactly. There is more flexibility with the `ANYONECANPAY` flag, which only signs the contract input itself and excludes all the other inputs. This feature is useful in some cases, such as when someone else adds inputs for this contract calling transaction to pay the fees, it will not invalidate the signature in the contract input.

We can do some modifications for the original Counter, there are only two places:

1. Using `@method(SigHash.ANYONECANPAY_SINGLE)`  to indicate using sighash type `SINGLE|ANYONECANPAY` 
2. Build the `output` that only contains the contract's new state, without all the other outputs.

```ts
export class AdvancedCounter extends SmartContract {
    ...
    
    @method(SigHash.ANYONECANPAY_SINGLE)
    public incrementOnChain() {
        ...
        
        const amount: bigint = this.ctx.utxo.value
        const output: ByteString = this.buildStateOutput(amount)
        assert(this.ctx.hashOutputs == hash256(output), 'hashOutputs mismatch')
    }
    
    ...
}
```

You can check the [complete code](https://github.com/sCrypt-Inc/boilerplate/blob/master/src/contracts/advancedCounter.ts) in our [boilerplate](https://github.com/sCrypt-Inc/boilerplate). We choose `SINGLE|ANYONECANPAY` here, but as we described above, it's good to use `SINGLE` as well.

The following [transaction](https://test.whatsonchain.com/tx/e06d86f8d8b867c503eca799bb542b5f1d1f81aa75ad00ab4377d65764bef68c) is a contract calling transaction of AdvancedCounter, as you can see it also contains two outputs but we only build one input then check if it hashes to `hashOutputs` in the public method. The reason for this is that we use the sighash type `SINGLE|ANYONECANPAY`.

![](../../static/img/advanced-counter-call.png)

## More examples

Use different sighash types in `@method()` decorator will change the value of `ScriptContext`. This is useful in some cases.

If your contract needs to restrict all outputs of the spending transaction, then use sighash `ALL`. If your contract state will always only transform in one UTXO, then consider using sighash `SINGLE` to simplify it. If you want to enable someone else could add inputs after the transaction is sealed, such as for paying transaction fees, then apply the `ANYONECANPAY` modifier.

There are many other contracts like AdvancedCounter that use sighash types in `@method()`,  you can check more examples in our [boilerplate](https://github.com/sCrypt-Inc/boilerplate).

- [AnyoneCanSpend](https://github.com/sCrypt-Inc/boilerplate/blob/master/src/contracts/acs.ts)
- [Clone](https://github.com/sCrypt-Inc/boilerplate/blob/master/src/contracts/clone.ts)
- [ERC20](https://github.com/sCrypt-Inc/boilerplate/blob/master/src/contracts/erc20.ts)
- [ERC721](https://github.com/sCrypt-Inc/boilerplate/blob/master/src/contracts/erc721.ts)
- [OrdinalLock](https://github.com/sCrypt-Inc/boilerplate/blob/master/src/contracts/ordinalLock.ts)
