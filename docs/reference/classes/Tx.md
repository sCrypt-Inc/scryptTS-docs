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

[src/builtins/functions.ts:511](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L511)

___

### privKey

▪ `Static` `Readonly` **privKey**: [`PrivKey`](PrivKey.md)

#### Defined in

[src/builtins/functions.ts:508](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L508)

___

### pubKey

▪ `Static` `Readonly` **pubKey**: [`PubKey`](PubKey.md)

#### Defined in

[src/builtins/functions.ts:509](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L509)

___

### r

▪ `Static` `Readonly` **r**: `bigint`

#### Defined in

[src/builtins/functions.ts:513](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L513)

___

### rBigEndian

▪ `Static` `Readonly` **rBigEndian**: `string`

#### Defined in

[src/builtins/functions.ts:515](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L515)

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

[src/builtins/functions.ts:524](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L524)

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

[src/builtins/functions.ts:533](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L533)

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

[src/builtins/functions.ts:538](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L538)

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

[src/builtins/functions.ts:540](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L540)

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

[src/builtins/functions.ts:527](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L527)

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

[src/builtins/functions.ts:545](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L545)

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

[src/builtins/functions.ts:549](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L549)

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

[src/builtins/functions.ts:530](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L530)

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

[src/builtins/functions.ts:536](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L536)

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

[src/builtins/functions.ts:542](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L542)

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

[src/builtins/functions.ts:522](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L522)

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

[src/builtins/functions.ts:552](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L552)

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

[src/builtins/functions.ts:518](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L518)

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

[src/builtins/functions.ts:520](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L520)
