[scrypt-ts](../README.md) / [bsv](bsv.md) / [crypto](bsv.crypto.md) / ECDSA

# Namespace: ECDSA

[bsv](bsv.md).[crypto](bsv.crypto.md).ECDSA

## Table of contents

### Functions

- [sign](bsv.crypto.ECDSA.md#sign)
- [verify](bsv.crypto.ECDSA.md#verify)

## Functions

### sign

▸ **sign**(`message`, `key`): [`Signature`](../classes/bsv.crypto.Signature.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `Buffer` |
| `key` | [`PrivateKey`](../classes/bsv.PrivateKey.md) |

#### Returns

[`Signature`](../classes/bsv.crypto.Signature.md)

#### Defined in

node_modules/bsv/index.d.ts:728

___

### verify

▸ **verify**(`hashbuf`, `sig`, `pubkey`, `endian?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `hashbuf` | `Buffer` |
| `sig` | [`Signature`](../classes/bsv.crypto.Signature.md) |
| `pubkey` | [`PublicKey`](../classes/bsv.PublicKey.md) |
| `endian?` | ``"little"`` |

#### Returns

`boolean`

#### Defined in

node_modules/bsv/index.d.ts:729
