[scrypt-ts](../README.md) / [Exports](../modules.md) / Tx

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

[src/builtins/functions.ts:561](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/builtins/functions.ts#L561)

___

### privKey

▪ `Static` `Readonly` **privKey**: [`PrivKey`](PrivKey.md)

#### Defined in

[src/builtins/functions.ts:558](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/builtins/functions.ts#L558)

___

### pubKey

▪ `Static` `Readonly` **pubKey**: [`PubKey`](PubKey.md)

#### Defined in

[src/builtins/functions.ts:559](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/builtins/functions.ts#L559)

___

### r

▪ `Static` `Readonly` **r**: `bigint`

#### Defined in

[src/builtins/functions.ts:563](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/builtins/functions.ts#L563)

___

### rBigEndian

▪ `Static` `Readonly` **rBigEndian**: `string`

#### Defined in

[src/builtins/functions.ts:565](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/builtins/functions.ts#L565)

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

[src/builtins/functions.ts:574](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/builtins/functions.ts#L574)

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

[src/builtins/functions.ts:583](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/builtins/functions.ts#L583)

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

[src/builtins/functions.ts:588](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/builtins/functions.ts#L588)

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

[src/builtins/functions.ts:590](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/builtins/functions.ts#L590)

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

[src/builtins/functions.ts:577](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/builtins/functions.ts#L577)

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

[src/builtins/functions.ts:595](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/builtins/functions.ts#L595)

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

[src/builtins/functions.ts:599](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/builtins/functions.ts#L599)

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

[src/builtins/functions.ts:580](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/builtins/functions.ts#L580)

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

[src/builtins/functions.ts:586](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/builtins/functions.ts#L586)

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

[src/builtins/functions.ts:592](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/builtins/functions.ts#L592)

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

[src/builtins/functions.ts:572](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/builtins/functions.ts#L572)

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

[src/builtins/functions.ts:602](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/builtins/functions.ts#L602)

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

[src/builtins/functions.ts:568](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/builtins/functions.ts#L568)

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

[src/builtins/functions.ts:570](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/builtins/functions.ts#L570)
