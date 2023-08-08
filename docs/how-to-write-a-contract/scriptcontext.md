---
sidebar_position: 2
---

# ScriptContext

In the UTXO model, the context of validating a smart contract is the UTXO containing it and the transaction spending it, including its inputs and outputs. In the following example, when the second of input of transaction `tx1` (2 inputs and 2 outputs) is spending the second output of `tx0` (3 inputs and 3 outputs), the context for the smart contract in the latter output is roughly the UTXO and `tx1` circled in red.
![](../../static/img/scriptContext.jpg)

The context only contains local information, different from account-based blockchains whose context consists of the global state of the entire blockchain (as in Ethereum). A single shared global state across all smart contracts kills scalability, since they all have to be sequentially processed due to potential race conditions.

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
  /** get the whole serialized sighash preimage */
  serialize(): SigHashPreimage,
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

| Field  | Description  |
| ------------- | ------------- |
| version | version of the transaction  |
| utxo.value | value of the output spent by this input  |
| utxo.script | locking script of the UTXO |
| utxo.outpoint.txid | txid of the transaction being spent |
| utxo.outpoint.outputIndex | index of the UTXO in the outputs |
| hashPrevouts | If the `ANYONECANPAY` [SIGHASH type](#sighash-type) is not set, it's double SHA256 of the serialization of all input outpoints. Otherwise, it's a `uint256` of `0x0000......0000`. |
| hashSequence | If none of the `ANYONECANPAY`, `SINGLE`, `NONE` [SIGHASH type](#sighash-type) is set, it's double SHA256 of the serialization of sequence of all inputs. Otherwise, it's a `uint256` of `0x0000......0000`. |
| sequence | sequence of the input  |
| hashOutputs | If the [SIGHASH type](#sighash-type) is neither `SINGLE` nor `NONE`, it's double SHA256 of the serialization of all outputs. If the [SIGHASH type](#sighash-type) is `SINGLE` and the input index is smaller than the number of outputs, it's the double SHA256 of the output with the same index as the input. Otherwise, it's a `uint256` of `0x0000......0000`. |
| locktime | locktime of the transaction |
| sigHashType| sighash type of the signature |

You can directly access the context through `this.ctx` in any public `@method`. It can be considered additional information a public method gets when called, besides its function parameters.

The example below accesses the [locktime](https://learnmeabitcoin.com/technical/locktime) of the spending transaction. The contract is a time lock, which only be called after mature time.

```ts
class TimeLock extends SmartContract {
  @prop()
  readonly matureTime: bigint // Can be timestamp or block height.

  constructor(matureTime: bigint) {
    super(...arguments)
    this.matureTime = matureTime
  }

  @method()
  public unlock() {
    assert(this.ctx.locktime >= this.matureTime, "locktime too low")
  }
}
```

:::note
Accessing `this.ctx` in **non-public** methods is not allowed.
:::

```ts
@method()
propagateState(outputs: ByteString) : boolean {
    return this.ctx.hashOutputs == hash256(outputs); // invalid
}
```

### Access inputs and outputs

The inputs and outputs of the spending transaction are not directly included in `ScriptContext`, but their hashes/digests. To access them, we can build them first and validate they hash to the expected digest, which ensures they are actually from the spending transaction.

The following example ensures both Alice and Bob get 1000 satoshis from the contract.

```ts
class DesignatedReceivers extends SmartContract {
  @prop()
  readonly alice: PubKeyHash

  @prop()
  readonly bob: PubKeyHash

  constructor(alice: PubKeyHash, bob: PubKeyHash) {
    super(...arguments)
    this.alice = alice
    this.bob = bob
  }

  @method()
  public payout() {
    const aliceOutput: ByteString = Utils.buildPublicKeyHashOutput(alice, 1000n)
    const bobOutput: ByteString = Utils.buildPublicKeyHashOutput(bob, 1000n)
    let outputs = aliceOutput + bobOutput

    // require a change output
    outputs += this.buildChangeOutput();

    // ensure outputs are actually from the spending transaction as expected
    assert(this.ctx.hashOutputs == hash256(outputs), 'hashOutputs mismatch')
  }
}
```

### Prevouts

Through the `hashPrevouts` field of `ScriptContext`, we can access the hash of Prevouts:

> If the `ANYONECANPAY` flag is not set, `hashPrevouts` is the double SHA256 of the serialization of all input outpoints;
> Otherwise, hashPrevouts is a uint256 of `0x0000......0000`.

But we can access the full prevouts via `this.prevouts`. 

- If the `ANYONECANPAY` flag is not set, the hash of `this.prevouts` is equal to `this.ctx.hashPrevouts`.
- Otherwise, `this.prevouts` will be empty.


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

| SigHash Type | Functional Meaning |
| ------------- | ------------- |
| ALL | Sign all inputs and outputs |
| NONE | Sign all inputs and no output |
| SINGLE | Sign all inputs and the output with the same index |
| ANYONECANPAY_ALL | Sign its own input and all outputs |
| ANYONECANPAY_NONE | Sign its own input and no output |
| ANYONECANPAY_SINGLE | Sign its own input and the output with the same index |

For more information, please refer to [this detailed guide](../advanced/sighash-type.md).

### Serialization

You have the option to convert `this.ctx` into a `SigHashPreimage` object through serialization. This can be achieved by invoking the `this.ctx.serialize()` method. The output object adheres to the format utilized during the signing or verification of transactions. 

![](../../static/img/sighashpreimage0.png)
[Format: Source](https://github.com/bitcoin-sv/bitcoin-sv/blob/master/doc/abc/replay-protected-sighash.md#digest-algorithm)

A noteworthy application of a serialized preimage can be found in the creation of custom SigHash flags. An example is the [SIGHASH_ANYPREVOUT](https://github.com/sCrypt-Inc/boilerplate/blob/master/src/contracts/sighashAnyprevout.ts#L34), which showcases this process.

### Debugging

See [How to Debug ScriptContext Failure](../advanced/how-to-debug-scriptcontext.md)
