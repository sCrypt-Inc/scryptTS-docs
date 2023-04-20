[scrypt-ts](../README.md) / [bsv](bsv.md) / [Transaction](bsv.Transaction.md) / Sighash

# Namespace: Sighash

[bsv](bsv.md).[Transaction](bsv.Transaction.md).Sighash

## Table of contents

### Functions

- [sighash](bsv.Transaction.Sighash.md#sighash)
- [sighashPreimage](bsv.Transaction.Sighash.md#sighashpreimage)
- [sign](bsv.Transaction.Sighash.md#sign)
- [verify](bsv.Transaction.Sighash.md#verify)

## Functions

### sighash

▸ **sighash**(`transaction`, `sighashType`, `inputNumber`, `subscript`, `satoshisBN`, `flags?`): `Buffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | [`Transaction`](../classes/bsv.Transaction-1.md) |
| `sighashType` | `number` |
| `inputNumber` | `number` |
| `subscript` | [`Script`](../classes/bsv.Script-1.md) |
| `satoshisBN` | [`BN`](../classes/bsv.crypto.BN.md) |
| `flags?` | `number` |

#### Returns

`Buffer`

#### Defined in

node_modules/bsv/index.d.ts:868

___

### sighashPreimage

▸ **sighashPreimage**(`transaction`, `sighashType`, `inputNumber`, `subscript`, `satoshisBN`, `flags?`): `Buffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | [`Transaction`](../classes/bsv.Transaction-1.md) |
| `sighashType` | `number` |
| `inputNumber` | `number` |
| `subscript` | [`Script`](../classes/bsv.Script-1.md) |
| `satoshisBN` | [`BN`](../classes/bsv.crypto.BN.md) |
| `flags?` | `number` |

#### Returns

`Buffer`

#### Defined in

node_modules/bsv/index.d.ts:860

___

### sign

▸ **sign**(`transaction`, `privateKey`, `sighashType`, `inputIndex`, `subscript`, `satoshisBN`, `flags?`): [`Signature`](../classes/bsv.crypto.Signature.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | [`Transaction`](../classes/bsv.Transaction-1.md) |
| `privateKey` | [`PrivateKey`](../classes/bsv.PrivateKey.md) |
| `sighashType` | `number` |
| `inputIndex` | `number` |
| `subscript` | [`Script`](../classes/bsv.Script-1.md) |
| `satoshisBN` | [`BN`](../classes/bsv.crypto.BN.md) |
| `flags?` | `number` |

#### Returns

[`Signature`](../classes/bsv.crypto.Signature.md)

#### Defined in

node_modules/bsv/index.d.ts:876

___

### verify

▸ **verify**(`transaction`, `signature`, `publicKey`, `inputIndex`, `subscript`, `satoshisBN`, `flags?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | [`Transaction`](../classes/bsv.Transaction-1.md) |
| `signature` | [`Signature`](../classes/bsv.Transaction.Signature.md) |
| `publicKey` | [`PublicKey`](../classes/bsv.PublicKey.md) |
| `inputIndex` | `number` |
| `subscript` | [`Script`](../classes/bsv.Script-1.md) |
| `satoshisBN` | [`BN`](../classes/bsv.crypto.BN.md) |
| `flags?` | `number` |

#### Returns

`boolean`

#### Defined in

node_modules/bsv/index.d.ts:885
