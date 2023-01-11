---
sidebar_position: 7
---

# What is ScriptContext

`ScriptContext` allows the contract code to access the entire transaction data, including all inputs and outputs.
[ScriptContext](../getting-started/what-is-scriptcontext.md) allows the contract code to access the entire transaction data, including all inputs and outputs. It enables the logic of the contract to be executed correctly according to the agreement, and the state of the contract can be propagated correctly. This allows us to set any constraints on the data. This opens up endless possibilities for running various smart contracts on the BSV network.


```ts
export type ScriptContext = {
    nVersion: ByteString;
    utxo: UTXO;
    hashPrevouts: ByteString;
    hashSequence: ByteString;
    nSequence: bigint;
    hashOutputs: ByteString;
    nLocktime: bigint;
    sigHashType: SigHashType;
};
```

The meaning of each field of the `ScriptContext` structure

| ScriptContext  | Functional Meaning  |
| ------------- | ------------- | 
| nVersion | nVersion of the transaction  |
| utxo.value | value of the output spent by this input (8-byte little endian)  |
| utxo.scriptCode | scriptCode of the input (serialized as scripts inside CTxOuts) |
| utxo.outpoint.txid | prevTx id in 32-byte hash |
| utxo.outpoint.outputIndex | outputIndex in prevTx |
| hashPrevouts | `hashPrevouts` is the double SHA256 of the serialization of all input outpoints; |
| hashSequence | `hashSequence` is the double SHA256 of the serialization of nSequence of all inputs; |
| nSequence | nSequence of the input  |
| hashOutputs | `hashOutputs` is the double SHA256 of the serialization of all output amount (8-byte little endian) with scriptPubKey (serialized as scripts inside CTxOuts); |
| nLocktime| nLocktime of the transaction |
| sigHashType| sighash type of the signature |



You can directly access the relevant data of the transaction through `this.ctx` in the public functions of the contract.


```ts
export class Counter extends SmartContract {
  @prop(true)
  count: bigint;

  constructor(count: bigint) {
    super(count);
    this.count = count;
  }

  @method()
  public increment() {
    this.count++;
    assert(this.ctx.hashOutputs == hash256(this.buildStateOutput(this.ctx.utxo.value)));
  }
}
```


**Note** that accessing `this.ctx` in **non-public** functions is not allowed:

```ts
@method()
propagateState(outputs: ByteString) : boolean {
    return this.ctx.hashOutputs == hash256(outputs); //invalid
}
```


### SigHash Type 

The default [sigHash type](https://wiki.bitcoinsv.io/index.php/SIGHASH_flags) used to calculate the transation preimage is `SigHash.ALL`. You can customize the sighash type with the `@method()` decorator.

```ts
@method(SigHash.ANYONECANPAY_SINGLE)
public increment() {
  ...
}
```

There are a total of 6 sigHash types to choose from:

| SigHash Type | Functional Meaning |
| ------------- | ------------- | 
| SigHash.ALL | Sign all inputs and outputs |
| SigHash.NONE | Sign all inputs and no output |
| SigHash.SINGLE | Sign all inputs and the output with the same index |
| SigHash.ANYONECANPAY_ALL | Sign its own input and all outputs |
| SigHash.ANYONECANPAY_NONE | Sign its own input and no output |
| SigHash.ANYONECANPAY_SINGLE | Sign its own input and the output with the same index |


When you use a custom sighash type, you need to use the specified sighash type when constructing the transaction that calls the contract.



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
    .setInputScript({
      inputIndex,
      sigtype: bsv.crypto.Signature.ANYONECANPAY_SINGLE
    }, (tx: bsv.Transaction) => {
    this.unlockFrom = { tx, inputIndex };
    return this.getUnlockingScript(self => {
        self.increment();
    })
    });
}
```


### Debugging

see [How to debug ScriptContext error](../tutorials/how-to-debug-scriptcontext-error.md)
