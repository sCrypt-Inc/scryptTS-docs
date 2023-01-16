---
sidebar_position: 7
---

# What is ScriptContext

In the UTXO model, the context of validation is the UTXO being spent and the spending transaction, including its inputs and outputs. In the following example, when the second of input of transaction `tx1` is spending the second output of `tx0`, the context for the smart contract in the latter output is roughly the UTXO and `tx1` circled in red.
![](../../static/img/scriptContext.jpg)

This context is expressed in the `ScriptContext` interface.
```ts
export interface ScriptContext {
  /** version number of [transaction]{@link https://wiki.bitcoinsv.io/index.php/Bitcoin_Transactions#General_format_of_a_Bitcoin_transaction} */
  version: ByteString,
  /** the specific UTXO spent by this transaction input */
  utxo: UTXO,
  /** double-SHA256 hash of the serialization of some/all input outpoints, see [hashPrevouts]{@link https://github.com/bitcoin-sv/bitcoin-sv/blob/master/doc/abc/replay-protected-sighash.md#hashprevouts} */
  hashPrevouts: ByteString,
  /** double-SHA256 hash of the serialization of some/all input sequence values, see [hashSequence]{@link https://github.com/bitcoin-sv/bitcoin-sv/blob/master/doc/abc/replay-protected-sighash.md#hashsequence} */
  hashSequence: ByteString,
  /** sequence number of [transaction input]{@link https://wiki.bitcoinsv.io/index.php/Bitcoin_Transactions#Format_of_a_Transaction_Input} */
  sequence: bigint,
  /** double-SHA256 hash of the serialization of some/all output amount with its locking script, see [hashOutputs]{@link https://github.com/bitcoin-sv/bitcoin-sv/blob/master/doc/abc/replay-protected-sighash.md#hashoutputs} */
  hashOutputs: ByteString,
  /** locktime of [transaction]{@link https://wiki.bitcoinsv.io/index.php/Bitcoin_Transactions#General_format_of_a_Bitcoin_transaction} */
  locktime: bigint,
  /** [SIGHASH flag]{@link https://wiki.bitcoinsv.io/index.php/SIGHASH_flags} used by this input */
  sigHashType: SigHashType,
}

export interface UTXO {
  /** locking script */
  script: ByteString,
  /** amount in satoshis */
  value: bigint,
  /** outpoint referenced by this UTXO */
  outpoint: Outpoint,
}

export interface Outpoint {
  /** txid of the transaction holding the output */
  txid: ByteString,
  /** index of the specific output */
  outputIndex: bigint,
}
```

The table shows the meaning of each field of the `ScriptContext` structure.

| ScriptContext  | Functional Meaning  |
| ------------- | ------------- |
| version | version of the transaction  |
| utxo.value | value of the output spent by this input  |
| utxo.script | locking script of the UTXO |
| utxo.outpoint.txid | txid of the transaction being spent |
| utxo.outpoint.outputIndex | index of the UTXO in the outputs |
| hashPrevouts | `hashPrevouts` is the double SHA256 of the serialization of all input outpoints |
| hashSequence | `hashSequence` is the double SHA256 of the serialization of sequence of all inputs |
| sequence | sequence of the input  |
| hashOutputs | `hashOutputs` is the double SHA256 of the serialization of all outputs |
| locktime | locktime of the transaction |
| sigHashType| sighash type of the signature |



You can directly access the relevant data of the transaction through `this.ctx` in any public method.
It can be considered additional information a public method gets when called, besides its function parameters.
The example below accesses the locktime of the spending transaction.

```ts
class CheckLockTimeVerify extends SmartContract {
  @prop()
  matureTime: bigint // Can be timestamp or block height.

  constructor(matureTime: bigint) {
    super(matureTime)
    this.matureTime = matureTime
  }

  @method()
  public unlock() {
    assert(this.ctx.locktime >= this.matureTime, "locktime too low")
  }
}

```


**Note**: accessing `this.ctx` in **non-public** methods is not allowed:

```ts
@method()
propagateState(outputs: ByteString) : boolean {
    return this.ctx.hashOutputs == hash256(outputs); //invalid
}
```


### SigHash Type 

[SigHash type](https://wiki.bitcoinsv.io/index.php/SIGHASH_flags) decides which part of the spending transaction is included in `ScriptContext`.
![](../../static/img/sighashtypes.png)
It defaults to `SigHash.ALL`, including all inputs and outputs. You can customize it by setting the argument of the `@method()` decorator, e.g.,

```ts
@method(SigHash.ANYONECANPAY_SINGLE)
public increment() {
  ...
}
```

There are a total of 6 sigHash types to choose from:
![](../../static/img/sighashtypes.png)
| SigHash Type | Functional Meaning |
| ------------- | ------------- | 
| ALL | Sign all inputs and outputs |
| NONE | Sign all inputs and no output |
| SINGLE | Sign all inputs and the output with the same index |
| ANYONECANPAY_ALL | Sign its own input and all outputs |
| ANYONECANPAY_NONE | Sign its own input and no output |
| ANYONECANPAY_SINGLE | Sign its own input and the output with the same index |


When you use a customed sighash type, you need to use the same sighash type when constructing the transaction calling the contract, e.g.,



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
      sigtype: bsv.crypto.Signature.ANYONECANPAY_SINGLE   // <----- ANYONECANPAY_SINGLE has to be passed in
    }, (tx: bsv.Transaction) => {
    this.unlockFrom = { tx, inputIndex };
    return this.getUnlockingScript(self => {
        self.increment();
    })
    });
}
```


### Debugging

See [How to debug ScriptContext error](../tutorials/how-to-debug-scriptcontext-error.md)
