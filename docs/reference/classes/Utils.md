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

[src/builtins/functions.ts:375](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L375)

___

### PubKeyHashLen

▪ `Static` `Readonly` **PubKeyHashLen**: `bigint`

#### Defined in

[src/builtins/functions.ts:377](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L377)

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

[src/builtins/functions.ts:404](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L404)

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

[src/builtins/functions.ts:395](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L395)

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

[src/builtins/functions.ts:398](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L398)

___

### fromLEUnsigned

▸ `Static` **fromLEUnsigned**(`b`): `bigint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `string` |

#### Returns

`bigint`

#### Defined in

[src/builtins/functions.ts:382](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L382)

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

[src/builtins/functions.ts:388](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L388)

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

[src/builtins/functions.ts:379](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L379)

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

[src/builtins/functions.ts:392](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L392)
