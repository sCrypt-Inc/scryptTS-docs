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

[src/smart-contract/builtins/functions.ts:733](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/functions.ts#L733)

___

### privKey

▪ `Static` `Readonly` **privKey**: [`PrivKey`](../README.md#privkey)

#### Defined in

[src/smart-contract/builtins/functions.ts:730](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/functions.ts#L730)

___

### pubKey

▪ `Static` `Readonly` **pubKey**: [`PubKey`](../README.md#pubkey)

#### Defined in

[src/smart-contract/builtins/functions.ts:731](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/functions.ts#L731)

___

### r

▪ `Static` `Readonly` **r**: `bigint`

#### Defined in

[src/smart-contract/builtins/functions.ts:735](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/functions.ts#L735)

___

### rBigEndian

▪ `Static` `Readonly` **rBigEndian**: [`ByteString`](../README.md#bytestring)

#### Defined in

[src/smart-contract/builtins/functions.ts:737](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/functions.ts#L737)

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

[src/smart-contract/builtins/functions.ts:791](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/functions.ts#L791)

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

[src/smart-contract/builtins/functions.ts:793](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/functions.ts#L793)

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

[src/smart-contract/builtins/functions.ts:782](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/functions.ts#L782)

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

[src/smart-contract/builtins/functions.ts:798](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/functions.ts#L798)

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

[src/smart-contract/builtins/functions.ts:802](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/functions.ts#L802)

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

[src/smart-contract/builtins/functions.ts:785](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/functions.ts#L785)

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

[src/smart-contract/builtins/functions.ts:795](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/functions.ts#L795)

___

### fromBEUnsigned

▸ `Static` **fromBEUnsigned**(`bytes`): `bigint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | [`ByteString`](../README.md#bytestring) |

#### Returns

`bigint`

#### Defined in

[src/smart-contract/builtins/functions.ts:774](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/functions.ts#L774)

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

[src/smart-contract/builtins/functions.ts:805](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/functions.ts#L805)

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

[src/smart-contract/builtins/functions.ts:740](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/functions.ts#L740)

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
| `rBigEndian` | [`ByteString`](../README.md#bytestring) |
| `sigHashType` | [`SigHashType`](../README.md#sighashtype) |

#### Returns

[`Sig`](../README.md#sig)

#### Defined in

[src/smart-contract/builtins/functions.ts:747](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/functions.ts#L747)
