[**scrypt-ts**](../README.md)

***

[scrypt-ts](../globals.md) / ScriptContext

# Interface: ScriptContext

Defined in: scrypt-ts/dist/smart-contract/contract.d.ts:42

ScriptContext contains all the information in the transaction's [preimage][https://github.com/bitcoin-sv/bitcoin-sv/blob/master/doc/abc/replay-protected-sighash.md#digest-algorithm](https://github.com/bitcoin-sv/bitcoin-sv/blob/master/doc/abc/replay-protected-sighash.md#digest-algorithm).
The preimage is automatically generated during the user's construction of the transaction,
and the user does not need to calculate it explicitly

## Properties

### hashOutputs

> **hashOutputs**: [`ByteString`](../type-aliases/ByteString.md)

Defined in: scrypt-ts/dist/smart-contract/contract.d.ts:61

double-SHA256 hash of the serialization of some/all output amount with its locking script, see [hashOutputs][https://github.com/bitcoin-sv/bitcoin-sv/blob/master/doc/abc/replay-protected-sighash.md#hashoutputs](https://github.com/bitcoin-sv/bitcoin-sv/blob/master/doc/abc/replay-protected-sighash.md#hashoutputs)

***

### hashPrevouts

> **hashPrevouts**: [`ByteString`](../type-aliases/ByteString.md)

Defined in: scrypt-ts/dist/smart-contract/contract.d.ts:55

double-SHA256 hash of the serialization of some/all input outpoints, see [hashPrevouts][https://github.com/bitcoin-sv/bitcoin-sv/blob/master/doc/abc/replay-protected-sighash.md#hashprevouts](https://github.com/bitcoin-sv/bitcoin-sv/blob/master/doc/abc/replay-protected-sighash.md#hashprevouts)

***

### hashSequence

> **hashSequence**: [`ByteString`](../type-aliases/ByteString.md)

Defined in: scrypt-ts/dist/smart-contract/contract.d.ts:57

double-SHA256 hash of the serialization of some/all input sequence values, see [hashSequence][https://github.com/bitcoin-sv/bitcoin-sv/blob/master/doc/abc/replay-protected-sighash.md#hashsequence](https://github.com/bitcoin-sv/bitcoin-sv/blob/master/doc/abc/replay-protected-sighash.md#hashsequence)

***

### locktime

> **locktime**: `bigint`

Defined in: scrypt-ts/dist/smart-contract/contract.d.ts:63

locktime of [transaction][https://wiki.bitcoinsv.io/index.php/Bitcoin\_Transactions#General\_format\_of\_a\_Bitcoin\_transaction](https://wiki.bitcoinsv.io/index.php/Bitcoin_Transactions#General_format_of_a_Bitcoin_transaction)

***

### sequence

> **sequence**: `bigint`

Defined in: scrypt-ts/dist/smart-contract/contract.d.ts:59

sequence number of [transaction input][https://wiki.bitcoinsv.io/index.php/Bitcoin\_Transactions#Format\_of\_a\_Transaction\_Input](https://wiki.bitcoinsv.io/index.php/Bitcoin_Transactions#Format_of_a_Transaction_Input)

***

### sigHashType

> **sigHashType**: [`SigHashType`](../type-aliases/SigHashType.md)

Defined in: scrypt-ts/dist/smart-contract/contract.d.ts:65

[SIGHASH flag][https://wiki.bitcoinsv.io/index.php/SIGHASH\_flags](https://wiki.bitcoinsv.io/index.php/SIGHASH_flags) used by this input

***

### utxo

> **utxo**: `object`

Defined in: scrypt-ts/dist/smart-contract/contract.d.ts:46

the specific UTXO spent by this transaction input

#### outpoint

> **outpoint**: [`Outpoint`](Outpoint.md)

outpoint referenced by this UTXO

#### script

> **script**: [`ByteString`](../type-aliases/ByteString.md)

locking script

#### value

> **value**: `bigint`

amount in satoshis

***

### version

> **version**: [`ByteString`](../type-aliases/ByteString.md)

Defined in: scrypt-ts/dist/smart-contract/contract.d.ts:44

version number of [transaction][https://wiki.bitcoinsv.io/index.php/Bitcoin\_Transactions#General\_format\_of\_a\_Bitcoin\_transaction](https://wiki.bitcoinsv.io/index.php/Bitcoin_Transactions#General_format_of_a_Bitcoin_transaction)

## Methods

### serialize()

> **serialize**(): [`SigHashPreimage`](../type-aliases/SigHashPreimage.md)

Defined in: scrypt-ts/dist/smart-contract/contract.d.ts:67

get the whole serialized sighash preimage

#### Returns

[`SigHashPreimage`](../type-aliases/SigHashPreimage.md)
