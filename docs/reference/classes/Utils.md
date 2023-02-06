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

[src/smart-contract/builtins/functions.ts:414](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/functions.ts#L414)

___

### PubKeyHashLen

▪ `Static` `Readonly` **PubKeyHashLen**: `bigint`

#### Defined in

[src/smart-contract/builtins/functions.ts:416](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/functions.ts#L416)

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

[src/smart-contract/builtins/functions.ts:495](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/functions.ts#L495)

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

[src/smart-contract/builtins/functions.ts:484](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/functions.ts#L484)

___

### buildPublicKeyHashScript

▸ `Static` **buildPublicKeyHashScript**(`pubKeyHash`): `Bytes`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pubKeyHash` | [`Ripemd160`](../README.md#ripemd160) |

#### Returns

`Bytes`

#### Defined in

[src/smart-contract/builtins/functions.ts:489](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/functions.ts#L489)

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

[src/smart-contract/builtins/functions.ts:425](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/functions.ts#L425)

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

[src/smart-contract/builtins/functions.ts:433](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/functions.ts#L433)

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

[src/smart-contract/builtins/functions.ts:418](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/functions.ts#L418)

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

[src/smart-contract/builtins/functions.ts:461](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/functions.ts#L461)
