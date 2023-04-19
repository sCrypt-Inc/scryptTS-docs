[scrypt-ts](../README.md) / UtxoQueryOptions

# Interface: UtxoQueryOptions

The optional conditions for querying P2PKH UTXO.

## Table of contents

### Properties

- [cursor](UtxoQueryOptions.md#cursor)
- [minSatoshis](UtxoQueryOptions.md#minsatoshis)
- [size](UtxoQueryOptions.md#size)

## Properties

### cursor

• `Optional` **cursor**: `number`

start cursor

#### Defined in

dist/bsv/abstract-provider.d.ts:16

___

### minSatoshis

• `Optional` **minSatoshis**: `number`

The lower limit of the total satoshis of the returned UTXO list.

#### Defined in

dist/bsv/abstract-provider.d.ts:14

___

### size

• `Optional` **size**: `number`

max number of returned records

#### Defined in

dist/bsv/abstract-provider.d.ts:18
