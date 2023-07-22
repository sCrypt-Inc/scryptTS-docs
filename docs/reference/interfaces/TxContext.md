[scrypt-ts](../README.md) / TxContext

# Interface: TxContext

TxContext provides some context information of the current transaction,
needed only if signature is checked inside the contract.

## Table of contents

### Properties

- [inputIndex](TxContext.md#inputindex)
- [inputSatoshis](TxContext.md#inputsatoshis)
- [opReturn](TxContext.md#opreturn)
- [opReturnHex](TxContext.md#opreturnhex)
- [tx](TxContext.md#tx)

## Properties

### inputIndex

• **inputIndex**: `number`

input index

#### Defined in

node_modules/scryptlib/dist/contract.d.ts:13

___

### inputSatoshis

• **inputSatoshis**: `number`

input amount in satoshis

#### Defined in

node_modules/scryptlib/dist/contract.d.ts:15

___

### opReturn

• `Optional` **opReturn**: `string`

contract state in ASM format

#### Defined in

node_modules/scryptlib/dist/contract.d.ts:17

___

### opReturnHex

• `Optional` **opReturnHex**: `string`

contract state in hex format

#### Defined in

node_modules/scryptlib/dist/contract.d.ts:19

___

### tx

• **tx**: `string` \| [`Transaction`](../classes/bsv.Transaction-1.md)

current transaction represented in bsv.Transaction object or hex string

#### Defined in

node_modules/scryptlib/dist/contract.d.ts:11
