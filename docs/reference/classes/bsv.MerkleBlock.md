[scrypt-ts](../README.md) / [bsv](../modules/bsv.md) / MerkleBlock

# Class: MerkleBlock

[bsv](../modules/bsv.md).MerkleBlock

## Table of contents

### Constructors

- [constructor](bsv.MerkleBlock.md#constructor)

### Methods

- [toObject](bsv.MerkleBlock.md#toobject)

## Constructors

### constructor

• **new MerkleBlock**(`arg`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `object` \| `JSON` \| `Buffer` |

#### Defined in

node_modules/bsv/index.d.ts:1462

## Methods

### toObject

▸ **toObject**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `flags` | `number`[] |
| `hashes` | `string`[] |
| `header` | { `bits`: `number` ; `hash`: `string` ; `merkleRoot`: `string` ; `nonce`: `number` ; `prevHash`: `string` ; `time`: `number` ; `version`: `number`  } |
| `header.bits` | `number` |
| `header.hash` | `string` |
| `header.merkleRoot` | `string` |
| `header.nonce` | `number` |
| `header.prevHash` | `string` |
| `header.time` | `number` |
| `header.version` | `number` |
| `numTransactions` | `number` |

#### Defined in

node_modules/bsv/index.d.ts:1464
