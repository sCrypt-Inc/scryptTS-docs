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

[src/builtins/functions.ts:362](https://github.com/sCrypt-Inc/ts-sCrypt/blob/c724703/src/builtins/functions.ts#L362)

___

### PubKeyHashLen

▪ `Static` `Readonly` **PubKeyHashLen**: `bigint`

#### Defined in

[src/builtins/functions.ts:364](https://github.com/sCrypt-Inc/ts-sCrypt/blob/c724703/src/builtins/functions.ts#L364)

## Methods

### buildOpreturnScript

▸ `Static` **buildOpreturnScript**(`data`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |

#### Returns

`string`

#### Defined in

[src/builtins/functions.ts:442](https://github.com/sCrypt-Inc/ts-sCrypt/blob/c724703/src/builtins/functions.ts#L442)

___

### buildOutput

▸ `Static` **buildOutput**(`outputScript`, `outputSatoshis`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `outputScript` | `string` |
| `outputSatoshis` | `bigint` |

#### Returns

`string`

#### Defined in

[src/builtins/functions.ts:432](https://github.com/sCrypt-Inc/ts-sCrypt/blob/c724703/src/builtins/functions.ts#L432)

___

### buildPublicKeyHashScript

▸ `Static` **buildPublicKeyHashScript**(`pubKeyHash`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pubKeyHash` | [`PubKeyHash`](PubKeyHash.md) |

#### Returns

`string`

#### Defined in

[src/builtins/functions.ts:437](https://github.com/sCrypt-Inc/ts-sCrypt/blob/c724703/src/builtins/functions.ts#L437)

___

### fromLEUnsigned

▸ `Static` **fromLEUnsigned**(`bytes`): `bigint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `string` |

#### Returns

`bigint`

#### Defined in

[src/builtins/functions.ts:373](https://github.com/sCrypt-Inc/ts-sCrypt/blob/c724703/src/builtins/functions.ts#L373)

___

### readVarint

▸ `Static` **readVarint**(`buf`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | `string` |

#### Returns

`string`

#### Defined in

[src/builtins/functions.ts:381](https://github.com/sCrypt-Inc/ts-sCrypt/blob/c724703/src/builtins/functions.ts#L381)

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

[src/builtins/functions.ts:366](https://github.com/sCrypt-Inc/ts-sCrypt/blob/c724703/src/builtins/functions.ts#L366)

___

### writeVarint

▸ `Static` **writeVarint**(`buf`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | `string` |

#### Returns

`string`

#### Defined in

[src/builtins/functions.ts:409](https://github.com/sCrypt-Inc/ts-sCrypt/blob/c724703/src/builtins/functions.ts#L409)
