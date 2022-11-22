[ts-scrypt](../README.md) / [Exports](../modules.md) / Tx

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

- [checkPreimage](Tx.md#checkpreimage)
- [checkPreimageAdvanced](Tx.md#checkpreimageadvanced)
- [checkPreimageAdvancedOCS](Tx.md#checkpreimageadvancedocs)
- [checkPreimageOCS](Tx.md#checkpreimageocs)
- [checkPreimageOpt](Tx.md#checkpreimageopt)
- [checkPreimageOptOCS](Tx.md#checkpreimageoptocs)
- [checkPreimageOptOCS\_](Tx.md#checkpreimageoptocs_)
- [checkPreimageOpt\_](Tx.md#checkpreimageopt_)
- [checkPreimageSigHashType](Tx.md#checkpreimagesighashtype)
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

[src/builtins/functions.ts:378](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L378)

___

### privKey

▪ `Static` `Readonly` **privKey**: [`PrivKey`](PrivKey.md)

#### Defined in

[src/builtins/functions.ts:375](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L375)

___

### pubKey

▪ `Static` `Readonly` **pubKey**: [`PubKey`](PubKey.md)

#### Defined in

[src/builtins/functions.ts:376](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L376)

___

### r

▪ `Static` `Readonly` **r**: `bigint`

#### Defined in

[src/builtins/functions.ts:380](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L380)

___

### rBigEndian

▪ `Static` `Readonly` **rBigEndian**: `string`

#### Defined in

[src/builtins/functions.ts:382](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L382)

## Methods

### checkPreimage

▸ `Static` **checkPreimage**(`txPreimage`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `txPreimage` | [`SigHashPreimage`](SigHashPreimage.md) |

#### Returns

`boolean`

#### Defined in

[src/builtins/functions.ts:391](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L391)

___

### checkPreimageAdvanced

▸ `Static` **checkPreimageAdvanced**(`txPreimage`, `privKey`, `pubKey`, `inverseK`, `r`, `rBigEndian`, `sigHashType`): `boolean`

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

[src/builtins/functions.ts:400](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L400)

___

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

[src/builtins/functions.ts:405](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L405)

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

[src/builtins/functions.ts:407](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L407)

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

[src/builtins/functions.ts:394](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L394)

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

[src/builtins/functions.ts:412](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L412)

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

[src/builtins/functions.ts:416](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L416)

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

[src/builtins/functions.ts:397](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L397)

___

### checkPreimageSigHashType

▸ `Static` **checkPreimageSigHashType**(`txPreimage`, `sigHashType`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `txPreimage` | [`SigHashPreimage`](SigHashPreimage.md) |
| `sigHashType` | [`SigHashType`](SigHashType.md) |

#### Returns

`boolean`

#### Defined in

[src/builtins/functions.ts:403](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L403)

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

[src/builtins/functions.ts:409](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L409)

___

### fromBEUnsigned

▸ `Static` **fromBEUnsigned**(`b`): `bigint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `string` |

#### Returns

`bigint`

#### Defined in

[src/builtins/functions.ts:389](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L389)

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

[src/builtins/functions.ts:419](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L419)

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

[src/builtins/functions.ts:385](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L385)

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

[src/builtins/functions.ts:387](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L387)
