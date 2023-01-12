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

[src/builtins/functions.ts:725](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L725)

___

### privKey

▪ `Static` `Readonly` **privKey**: [`PrivKey`](../README.md#privkey)

#### Defined in

[src/builtins/functions.ts:722](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L722)

___

### pubKey

▪ `Static` `Readonly` **pubKey**: [`PubKey`](../README.md#pubkey)

#### Defined in

[src/builtins/functions.ts:723](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L723)

___

### r

▪ `Static` `Readonly` **r**: `bigint`

#### Defined in

[src/builtins/functions.ts:727](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L727)

___

### rBigEndian

▪ `Static` `Readonly` **rBigEndian**: `Bytes`

#### Defined in

[src/builtins/functions.ts:729](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L729)

## Methods

### checkPreimageAdvancedOCS

▸ `Static` **checkPreimageAdvancedOCS**(`txPreimage`, `privKey`, `pubKey`, `inverseK`, `r`, `rBigEndian`, `sigHashType`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `txPreimage` | [`SigHashPreimage`](../README.md#sighashpreimage) |
| `privKey` | [`PrivKey`](../README.md#privkey) |
| `pubKey` | [`PubKey`](../README.md#pubkey) |
| `inverseK` | `bigint` |
| `r` | `bigint` |
| `rBigEndian` | `string` |
| `sigHashType` | [`SigHashType`](../README.md#sighashtype) |

#### Returns

`boolean`

#### Defined in

[src/builtins/functions.ts:783](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L783)

___

### checkPreimageOCS

▸ `Static` **checkPreimageOCS**(`txPreimage`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `txPreimage` | [`SigHashPreimage`](../README.md#sighashpreimage) |

#### Returns

`boolean`

#### Defined in

[src/builtins/functions.ts:785](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L785)

___

### checkPreimageOpt

▸ `Static` **checkPreimageOpt**(`txPreimage`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `txPreimage` | [`SigHashPreimage`](../README.md#sighashpreimage) |

#### Returns

`boolean`

#### Defined in

[src/builtins/functions.ts:774](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L774)

___

### checkPreimageOptOCS

▸ `Static` **checkPreimageOptOCS**(`txPreimage`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `txPreimage` | [`SigHashPreimage`](../README.md#sighashpreimage) |

#### Returns

`boolean`

#### Defined in

[src/builtins/functions.ts:790](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L790)

___

### checkPreimageOptOCS\_

▸ `Static` **checkPreimageOptOCS_**(`txPreimage`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `txPreimage` | [`SigHashPreimage`](../README.md#sighashpreimage) |

#### Returns

`boolean`

#### Defined in

[src/builtins/functions.ts:794](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L794)

___

### checkPreimageOpt\_

▸ `Static` **checkPreimageOpt_**(`txPreimage`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `txPreimage` | [`SigHashPreimage`](../README.md#sighashpreimage) |

#### Returns

`boolean`

#### Defined in

[src/builtins/functions.ts:777](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L777)

___

### checkPreimageSigHashTypeOCS

▸ `Static` **checkPreimageSigHashTypeOCS**(`txPreimage`, `sigHashType`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `txPreimage` | [`SigHashPreimage`](../README.md#sighashpreimage) |
| `sigHashType` | [`SigHashType`](../README.md#sighashtype) |

#### Returns

`boolean`

#### Defined in

[src/builtins/functions.ts:787](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L787)

___

### fromBEUnsigned

▸ `Static` **fromBEUnsigned**(`bytes`): `bigint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Bytes` |

#### Returns

`bigint`

#### Defined in

[src/builtins/functions.ts:766](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L766)

___

### isFirstCall

▸ `Static` **isFirstCall**(`txPreimage`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `txPreimage` | [`SigHashPreimage`](../README.md#sighashpreimage) |

#### Returns

`boolean`

#### Defined in

[src/builtins/functions.ts:797](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L797)

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

[src/builtins/functions.ts:732](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L732)

___

### sign

▸ `Static` **sign**(`h`, `privKey`, `inverseK`, `r`, `rBigEndian`, `sigHashType`): [`Sig`](../README.md#sig)

#### Parameters

| Name | Type |
| :------ | :------ |
| `h` | `bigint` |
| `privKey` | [`PrivKey`](../README.md#privkey) |
| `inverseK` | `bigint` |
| `r` | `bigint` |
| `rBigEndian` | `Bytes` |
| `sigHashType` | [`SigHashType`](../README.md#sighashtype) |

#### Returns

[`Sig`](../README.md#sig)

#### Defined in

[src/builtins/functions.ts:739](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L739)
