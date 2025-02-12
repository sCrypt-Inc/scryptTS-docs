[**scrypt-ts**](../README.md)

***

[scrypt-ts](../globals.md) / TxContext

# Interface: TxContext

Defined in: scryptlib/dist/contract.d.ts:9

TxContext provides some context information of the current transaction,
needed only if signature is checked inside the contract.

## Properties

### inputIndex

> **inputIndex**: `number`

Defined in: scryptlib/dist/contract.d.ts:13

input index

***

### inputSatoshis

> **inputSatoshis**: `number`

Defined in: scryptlib/dist/contract.d.ts:15

input amount in satoshis

***

### opReturn?

> `optional` **opReturn**: `string`

Defined in: scryptlib/dist/contract.d.ts:17

contract state in ASM format

***

### opReturnHex?

> `optional` **opReturnHex**: `string`

Defined in: scryptlib/dist/contract.d.ts:19

contract state in hex format

***

### tx

> **tx**: `string` \| [`Transaction`](../@scrypt-inc/bsv/classes/Transaction.md)

Defined in: scryptlib/dist/contract.d.ts:11

current transaction represented in bsv.Transaction object or hex string
