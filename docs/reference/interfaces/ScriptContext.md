[scrypt-ts](../README.md) / ScriptContext

# Interface: ScriptContext

ScriptContext contains all the information in the transaction's [preimage][https://github.com/bitcoin-sv/bitcoin-sv/blob/master/doc/abc/replay-protected-sighash.md#digest-algorithm](https://github.com/bitcoin-sv/bitcoin-sv/blob/master/doc/abc/replay-protected-sighash.md#digest-algorithm).
The preimage is automatically generated during the user's construction of the transaction,
and the user does not need to calculate it explicitly

## Table of contents

### Properties

- [hashOutputs](ScriptContext.md#hashoutputs)
- [hashPrevouts](ScriptContext.md#hashprevouts)
- [hashSequence](ScriptContext.md#hashsequence)
- [locktime](ScriptContext.md#locktime)
- [sequence](ScriptContext.md#sequence)
- [sigHashType](ScriptContext.md#sighashtype)
- [utxo](ScriptContext.md#utxo)
- [version](ScriptContext.md#version)

## Properties

### hashOutputs

• **hashOutputs**: [`ByteString`](../README.md#bytestring)

double-SHA256 hash of the serialization of some/all output amount with its locking script, see [hashOutputs][https://github.com/bitcoin-sv/bitcoin-sv/blob/master/doc/abc/replay-protected-sighash.md#hashoutputs](https://github.com/bitcoin-sv/bitcoin-sv/blob/master/doc/abc/replay-protected-sighash.md#hashoutputs)

#### Defined in

dist/smart-contract/contract.d.ts:60

___

### hashPrevouts

• **hashPrevouts**: [`ByteString`](../README.md#bytestring)

double-SHA256 hash of the serialization of some/all input outpoints, see [hashPrevouts][https://github.com/bitcoin-sv/bitcoin-sv/blob/master/doc/abc/replay-protected-sighash.md#hashprevouts](https://github.com/bitcoin-sv/bitcoin-sv/blob/master/doc/abc/replay-protected-sighash.md#hashprevouts)

#### Defined in

dist/smart-contract/contract.d.ts:54

___

### hashSequence

• **hashSequence**: [`ByteString`](../README.md#bytestring)

double-SHA256 hash of the serialization of some/all input sequence values, see [hashSequence][https://github.com/bitcoin-sv/bitcoin-sv/blob/master/doc/abc/replay-protected-sighash.md#hashsequence](https://github.com/bitcoin-sv/bitcoin-sv/blob/master/doc/abc/replay-protected-sighash.md#hashsequence)

#### Defined in

dist/smart-contract/contract.d.ts:56

___

### locktime

• **locktime**: `bigint`

locktime of [transaction][https://wiki.bitcoinsv.io/index.php/Bitcoin_Transactions#General_format_of_a_Bitcoin_transaction](https://wiki.bitcoinsv.io/index.php/Bitcoin_Transactions#General_format_of_a_Bitcoin_transaction)

#### Defined in

dist/smart-contract/contract.d.ts:62

___

### sequence

• **sequence**: `bigint`

sequence number of [transaction input][https://wiki.bitcoinsv.io/index.php/Bitcoin_Transactions#Format_of_a_Transaction_Input](https://wiki.bitcoinsv.io/index.php/Bitcoin_Transactions#Format_of_a_Transaction_Input)

#### Defined in

dist/smart-contract/contract.d.ts:58

___

### sigHashType

• **sigHashType**: [`SigHashType`](../README.md#sighashtype)

[SIGHASH flag][https://wiki.bitcoinsv.io/index.php/SIGHASH_flags](https://wiki.bitcoinsv.io/index.php/SIGHASH_flags) used by this input

#### Defined in

dist/smart-contract/contract.d.ts:64

___

### utxo

• **utxo**: `Object`

the specific UTXO spent by this transaction input

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `outpoint` | [`Outpoint`](Outpoint.md) | outpoint referenced by this UTXO |
| `script` | [`ByteString`](../README.md#bytestring) | locking script |
| `value` | `bigint` | amount in satoshis |

#### Defined in

dist/smart-contract/contract.d.ts:45

___

### version

• **version**: [`ByteString`](../README.md#bytestring)

version number of [transaction][https://wiki.bitcoinsv.io/index.php/Bitcoin_Transactions#General_format_of_a_Bitcoin_transaction](https://wiki.bitcoinsv.io/index.php/Bitcoin_Transactions#General_format_of_a_Bitcoin_transaction)

#### Defined in

dist/smart-contract/contract.d.ts:43
