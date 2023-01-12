[scrypt-ts](../README.md) / Utils

# Class: Utils

## Table of contents

### Constructors

- [constructor](Utils.md#constructor)

### Properties

- [OutputValueLen](Utils.md#outputvaluelen)
- [PubKeyHashLen](Utils.md#pubkeyhashlen)

### Methods

- [buildOpreturnScript](Utils.md#buildopreturnscript)
- [buildOutput](Utils.md#buildoutput)
- [buildPublicKeyHashScript](Utils.md#buildpublickeyhashscript)
- [fromLEUnsigned](Utils.md#fromleunsigned)
- [readVarint](Utils.md#readvarint)
- [toLEUnsigned](Utils.md#toleunsigned)
- [writeVarint](Utils.md#writevarint)

## Constructors

### constructor

• **new Utils**()

## Properties

### OutputValueLen

▪ `Static` `Readonly` **OutputValueLen**: `bigint`

#### Defined in

[src/builtins/functions.ts:415](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L415)

___

### PubKeyHashLen

▪ `Static` `Readonly` **PubKeyHashLen**: `bigint`

#### Defined in

[src/builtins/functions.ts:417](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L417)

## Methods

### buildOpreturnScript

▸ `Static` **buildOpreturnScript**(`data`): `Bytes`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Bytes` |

#### Returns

`Bytes`

#### Defined in

[src/builtins/functions.ts:496](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L496)

___

### buildOutput

▸ `Static` **buildOutput**(`outputScript`, `outputSatoshis`): `Bytes`

#### Parameters

| Name | Type |
| :------ | :------ |
| `outputScript` | `Bytes` |
| `outputSatoshis` | `bigint` |

#### Returns

`Bytes`

#### Defined in

[src/builtins/functions.ts:485](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L485)

___

### buildPublicKeyHashScript

▸ `Static` **buildPublicKeyHashScript**(`pubKeyHash`): `Bytes`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pubKeyHash` | `Bytes` \| [`Ripemd160`](../README.md#ripemd160) |

#### Returns

`Bytes`

#### Defined in

[src/builtins/functions.ts:490](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L490)

___

### fromLEUnsigned

▸ `Static` **fromLEUnsigned**(`bytes`): `bigint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Bytes` |

#### Returns

`bigint`

#### Defined in

[src/builtins/functions.ts:426](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L426)

___

### readVarint

▸ `Static` **readVarint**(`buf`): `Bytes`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | `Bytes` |

#### Returns

`Bytes`

#### Defined in

[src/builtins/functions.ts:434](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L434)

___

### toLEUnsigned

▸ `Static` **toLEUnsigned**(`n`, `l`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `bigint` |
| `l` | `bigint` |

#### Returns

`string`

#### Defined in

[src/builtins/functions.ts:419](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L419)

___

### writeVarint

▸ `Static` **writeVarint**(`buf`): `Bytes`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | `Bytes` |

#### Returns

`Bytes`

#### Defined in

[src/builtins/functions.ts:462](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L462)
