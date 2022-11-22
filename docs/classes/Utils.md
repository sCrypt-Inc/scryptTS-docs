[ts-scrypt](../README.md) / [Exports](../modules.md) / Utils

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

[src/builtins/functions.ts:253](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L253)

___

### PubKeyHashLen

▪ `Static` `Readonly` **PubKeyHashLen**: `bigint`

#### Defined in

[src/builtins/functions.ts:255](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L255)

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

[src/builtins/functions.ts:282](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L282)

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

[src/builtins/functions.ts:273](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L273)

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

[src/builtins/functions.ts:276](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L276)

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

[src/builtins/functions.ts:260](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L260)

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

[src/builtins/functions.ts:266](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L266)

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

[src/builtins/functions.ts:257](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L257)

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

[src/builtins/functions.ts:270](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L270)
