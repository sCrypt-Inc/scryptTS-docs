---
sidebar_position: 8
---

# Tutorial 8: SigHash Type

## Overview

In this tutorial, we will go deep into the SigHash type and introduce how to use it in the smart contract.

As described in the [doc](../how-to-write-a-contract/scriptcontext.md#sighash-type) before, different SigHash type decides which part of the spending transaction is included in `ScriptContext`. More specifically, it will affect the value of 4 fields: `hashPrevouts`, `hashSequence`, `hashOutputs`, and `sigHashType`.

| Field        | Description                                                  |
| ------------ | ------------------------------------------------------------ |
| hashPrevouts | If the `ANYONECANPAY` [SIGHASH type](#sighash-type) is not set, it's double SHA256 of the serialization of all input outpoints. Otherwise, it's a `unit256` of `0x0000......0000`. |
| hashSequence | If none of the `ANYONECANPAY`, `SINGLE`, `NONE` [SIGHASH type](#sighash-type) is set, it's double SHA256 of the serialization of sequence of all inputs. Otherwise, it's a `unit256` of `0x0000......0000`. |
| hashOutputs  | If the [SIGHASH type](#sighash-type) is neither `SINGLE` nor `NONE`, it's double SHA256 of the serialization of all outputs. If the [SIGHASH type](#sighash-type) is `SINGLE` and the input index is smaller than the number of outputs, it's the double SHA256 of the output with the same index as the input. Otherwise, it's a `unit256` of `0x0000......0000`. |
| sigHashType  | sighash type of the signature                                |

## Counter

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

Noted that the `@method` [decorator](../how-to-write-a-contract/how-to-write-a-contract.md#method-decorator) takes a SigHash type as a parameter, it defaults to SigHash `ALL`. According to the table above,  `hashOutputs` is the double SHA256 of the serialization of **all outputs** when the SigHash type is neither `SINGLE` nor `NONE`. The [default transaction builder](../how-to-deploy-and-call-a-contract/how-to-customize-a-contract-tx.md#default-1) will add a change output when necessary. That's why we need to add a change output when building outputs of the spending transaction in the public method: we need to build all the outputs that are included in `hashOutputs`. Otherwise, it will fail verification.

The following [transaction](https://test.whatsonchain.com/tx/845f22b728deb23acacbc6f58f23ffde9c3e2be976e08c57f2bdcb417e3eacc5) is a contract calling transaction of Counter, as you can see it contains two outputs as we described above.

![](../../static/img/counter-call.png)

SigHash type `ALL` means not only signing all outputs but also all inputs of the spending transaction. This means that neither inputs nor outputs can be changed after the transaction is sealed. Otherwise, the signatures in all transaction inputs will become invalid.

![](../../static/img/sighashtypes.png)

## Advanced Counter

Noted that in the state transition of Counter, there's always only one UTXO that contains the latest contract state. When the contract is called, it spends the UTXO of the current state and creates a UTXO of the new state. Moreover, the contract input index of the spending transaction and the contract output index are the same.

In fact, we only care about the contract-related UTXO in the transaction inputs and outputs when calling Counter, and do not care about other inputs and outputs, such as P2PKHs. Thus, we can use SigHash type `SINGLE` or `SINGLE|ANYONECANPAY` to simplify the contract.

Both of these SigHash types only focus on the contract output itself, which is what we want, it matches the format of the Counter calling transaction exactly. There is more flexibility with the `ANYONECANPAY` flag, which only signs the contract input itself and excludes all the other inputs. This feature is useful in some cases, such as when someone else adds inputs for this contract calling transaction to pay the fees, it will not invalidate the signature in the contract input.

We can do some modifications for the original Counter, there are only two places:

1. Using `@method(SigHash.ANYONECANPAY_SINGLE)`  to indicate using SigHash type `SINGLE|ANYONECANPAY` 
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

You can check the [complete code](https://github.com/sCrypt-Inc/boilerplate/blob/master/src/contracts/advancedCounter.ts) in our [boilerplate](https://github.com/sCrypt-Inc/boilerplate). We choose `SINGLE|ANYONECANPAY` here, but as described above, it's good to use `SINGLE` as well.

The following [transaction](https://test.whatsonchain.com/tx/e06d86f8d8b867c503eca799bb542b5f1d1f81aa75ad00ab4377d65764bef68c) is a contract calling transaction of AdvancedCounter, as you can see it also contains two outputs but we only build one input then check if it hashes to `hashOutputs` in the public method. The reason for this is that we use the SigHash type `SINGLE|ANYONECANPAY`.

![](../../static/img/advanced-counter-call.png)

## Conclusion

The SigHash type is useful when building smart contracts. It's not very easy to understand but definitely worth learning.

If your contract needs to restrict all outputs of the spending transaction, then use SigHash `ALL`. If your contract state will always only transform in one UTXO, then consider using SigHash `SINGLE` to simplify it. If you want to enable someone else could add inputs for paying transaction fees after the transaction is sealed, then apply the `ANYONECANPAY` flag.

There are many other contracts like AdvancedCounter that use SigHash types,  you can check more examples in our [boilerplate](https://github.com/sCrypt-Inc/boilerplate).

- [AnyoneCanSpend](https://github.com/sCrypt-Inc/boilerplate/blob/master/src/contracts/acs.ts)
- [Clone](https://github.com/sCrypt-Inc/boilerplate/blob/master/src/contracts/clone.ts)
- [ERC20](https://github.com/sCrypt-Inc/boilerplate/blob/master/src/contracts/erc20.ts)
- [ERC721](https://github.com/sCrypt-Inc/boilerplate/blob/master/src/contracts/erc721.ts)
- [OrdinalLock](https://github.com/sCrypt-Inc/boilerplate/blob/master/src/contracts/ordinalLock.ts)
