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

[src/smart-contract/builtins/functions.ts:724](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/functions.ts#L724)

___

### privKey

▪ `Static` `Readonly` **privKey**: [`PrivKey`](../README.md#privkey)

#### Defined in

[src/smart-contract/builtins/functions.ts:721](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/functions.ts#L721)

___

### pubKey

▪ `Static` `Readonly` **pubKey**: [`PubKey`](../README.md#pubkey)

#### Defined in

[src/smart-contract/builtins/functions.ts:722](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/functions.ts#L722)

___

### r

▪ `Static` `Readonly` **r**: `bigint`

#### Defined in

[src/smart-contract/builtins/functions.ts:726](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/functions.ts#L726)

___

### rBigEndian

▪ `Static` `Readonly` **rBigEndian**: `Bytes`

#### Defined in

[src/smart-contract/builtins/functions.ts:728](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/functions.ts#L728)

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

[src/smart-contract/builtins/functions.ts:782](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/functions.ts#L782)

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

[src/smart-contract/builtins/functions.ts:784](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/functions.ts#L784)

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

[src/smart-contract/builtins/functions.ts:773](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/functions.ts#L773)

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

[src/smart-contract/builtins/functions.ts:789](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/functions.ts#L789)

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

[src/smart-contract/builtins/functions.ts:793](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/functions.ts#L793)

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

[src/smart-contract/builtins/functions.ts:776](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/functions.ts#L776)

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

[src/smart-contract/builtins/functions.ts:786](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/functions.ts#L786)

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

[src/smart-contract/builtins/functions.ts:765](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/functions.ts#L765)

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

[src/smart-contract/builtins/functions.ts:796](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/functions.ts#L796)

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

[src/smart-contract/builtins/functions.ts:731](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/functions.ts#L731)

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

[src/smart-contract/builtins/functions.ts:738](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/functions.ts#L738)
