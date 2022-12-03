[scrypt-ts](../README.md) / Tx

# Class: Tx

library to access current tx

## Table of contents

### Constructors

- [constructor](Tx.md#constructor)

### Properties

- [invK](Tx.md#invk)
- [privKey](Tx.md#privkey)
- [pubKey](Tx.md#pubkey)
- [r](Tx.md#r)
- [rBigEndian](Tx.md#rbigendian)

### Methods

- [checkPreimageAdvancedOCS](Tx.md#checkpreimageadvancedocs)
- [checkPreimageOCS](Tx.md#checkpreimageocs)
- [checkPreimageOpt](Tx.md#checkpreimageopt)
- [checkPreimageOptOCS](Tx.md#checkpreimageoptocs)
- [checkPreimageOptOCS\_](Tx.md#checkpreimageoptocs_)
- [checkPreimageOpt\_](Tx.md#checkpreimageopt_)
- [checkPreimageSigHashTypeOCS](Tx.md#checkpreimagesighashtypeocs)
- [fromBEUnsigned](Tx.md#frombeunsigned)
- [isFirstCall](Tx.md#isfirstcall)
- [normalize](Tx.md#normalize)
- [sign](Tx.md#sign)

## Constructors

### constructor

• **new Tx**()

## Properties

### invK

▪ `Static` `Readonly` **invK**: `bigint`

#### Defined in

[src/builtins/functions.ts:671](https://github.com/sCrypt-Inc/ts-sCrypt/blob/c724703/src/builtins/functions.ts#L671)

___

### privKey

▪ `Static` `Readonly` **privKey**: [`PrivKey`](PrivKey.md)

#### Defined in

[src/builtins/functions.ts:668](https://github.com/sCrypt-Inc/ts-sCrypt/blob/c724703/src/builtins/functions.ts#L668)

___

### pubKey

▪ `Static` `Readonly` **pubKey**: [`PubKey`](PubKey.md)

#### Defined in

[src/builtins/functions.ts:669](https://github.com/sCrypt-Inc/ts-sCrypt/blob/c724703/src/builtins/functions.ts#L669)

___

### r

▪ `Static` `Readonly` **r**: `bigint`

#### Defined in

[src/builtins/functions.ts:673](https://github.com/sCrypt-Inc/ts-sCrypt/blob/c724703/src/builtins/functions.ts#L673)

___

### rBigEndian

▪ `Static` `Readonly` **rBigEndian**: `string`

#### Defined in

[src/builtins/functions.ts:675](https://github.com/sCrypt-Inc/ts-sCrypt/blob/c724703/src/builtins/functions.ts#L675)

## Methods

### checkPreimageAdvancedOCS

▸ `Static` **checkPreimageAdvancedOCS**(`txPreimage`, `privKey`, `pubKey`, `inverseK`, `r`, `rBigEndian`, `sigHashType`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `txPreimage` | [`SigHashPreimage`](SigHashPreimage.md) |
| `privKey` | [`PrivKey`](PrivKey.md) |
| `pubKey` | [`PubKey`](PubKey.md) |
| `inverseK` | `bigint` |
| `r` | `bigint` |
| `rBigEndian` | `string` |
| `sigHashType` | [`SigHashType`](SigHashType.md) |

#### Returns

`boolean`

#### Defined in

[src/builtins/functions.ts:729](https://github.com/sCrypt-Inc/ts-sCrypt/blob/c724703/src/builtins/functions.ts#L729)

___

### checkPreimageOCS

▸ `Static` **checkPreimageOCS**(`txPreimage`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `txPreimage` | [`SigHashPreimage`](SigHashPreimage.md) |

#### Returns

`boolean`

#### Defined in

[src/builtins/functions.ts:731](https://github.com/sCrypt-Inc/ts-sCrypt/blob/c724703/src/builtins/functions.ts#L731)

___

### checkPreimageOpt

▸ `Static` **checkPreimageOpt**(`txPreimage`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `txPreimage` | [`SigHashPreimage`](SigHashPreimage.md) |

#### Returns

`boolean`

#### Defined in

[src/builtins/functions.ts:720](https://github.com/sCrypt-Inc/ts-sCrypt/blob/c724703/src/builtins/functions.ts#L720)

___

### checkPreimageOptOCS

▸ `Static` **checkPreimageOptOCS**(`txPreimage`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `txPreimage` | [`SigHashPreimage`](SigHashPreimage.md) |

#### Returns

`boolean`

#### Defined in

[src/builtins/functions.ts:736](https://github.com/sCrypt-Inc/ts-sCrypt/blob/c724703/src/builtins/functions.ts#L736)

___

### checkPreimageOptOCS\_

▸ `Static` **checkPreimageOptOCS_**(`txPreimage`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `txPreimage` | [`SigHashPreimage`](SigHashPreimage.md) |

#### Returns

`boolean`

#### Defined in

[src/builtins/functions.ts:740](https://github.com/sCrypt-Inc/ts-sCrypt/blob/c724703/src/builtins/functions.ts#L740)

___

### checkPreimageOpt\_

▸ `Static` **checkPreimageOpt_**(`txPreimage`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `txPreimage` | [`SigHashPreimage`](SigHashPreimage.md) |

#### Returns

`boolean`

#### Defined in

[src/builtins/functions.ts:723](https://github.com/sCrypt-Inc/ts-sCrypt/blob/c724703/src/builtins/functions.ts#L723)

___

### checkPreimageSigHashTypeOCS

▸ `Static` **checkPreimageSigHashTypeOCS**(`txPreimage`, `sigHashType`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `txPreimage` | [`SigHashPreimage`](SigHashPreimage.md) |
| `sigHashType` | [`SigHashType`](SigHashType.md) |

#### Returns

`boolean`

#### Defined in

[src/builtins/functions.ts:733](https://github.com/sCrypt-Inc/ts-sCrypt/blob/c724703/src/builtins/functions.ts#L733)

___

### fromBEUnsigned

▸ `Static` **fromBEUnsigned**(`bytes`): `bigint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `string` |

#### Returns

`bigint`

#### Defined in

[src/builtins/functions.ts:712](https://github.com/sCrypt-Inc/ts-sCrypt/blob/c724703/src/builtins/functions.ts#L712)

___

### isFirstCall

▸ `Static` **isFirstCall**(`txPreimage`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `txPreimage` | [`SigHashPreimage`](SigHashPreimage.md) |

#### Returns

`boolean`

#### Defined in

[src/builtins/functions.ts:743](https://github.com/sCrypt-Inc/ts-sCrypt/blob/c724703/src/builtins/functions.ts#L743)

___

### normalize

▸ `Static` **normalize**(`k`, `modulus`): `bigint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `k` | `bigint` |
| `modulus` | `bigint` |

#### Returns

`bigint`

#### Defined in

[src/builtins/functions.ts:678](https://github.com/sCrypt-Inc/ts-sCrypt/blob/c724703/src/builtins/functions.ts#L678)

___

### sign

▸ `Static` **sign**(`h`, `privKey`, `inverseK`, `r`, `rBigEndian`, `sigHashType`): [`Sig`](Sig.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `h` | `bigint` |
| `privKey` | [`PrivKey`](PrivKey.md) |
| `inverseK` | `bigint` |
| `r` | `bigint` |
| `rBigEndian` | `string` |
| `sigHashType` | [`SigHashType`](SigHashType.md) |

#### Returns

[`Sig`](Sig.md)

#### Defined in

[src/builtins/functions.ts:685](https://github.com/sCrypt-Inc/ts-sCrypt/blob/c724703/src/builtins/functions.ts#L685)
