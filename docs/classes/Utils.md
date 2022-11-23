[scrypt-ts](../README.md) / [Exports](../modules.md) / Utils

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

[src/builtins/functions.ts:425](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/builtins/functions.ts#L425)

___

### PubKeyHashLen

▪ `Static` `Readonly` **PubKeyHashLen**: `bigint`

#### Defined in

[src/builtins/functions.ts:427](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/builtins/functions.ts#L427)

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

[src/builtins/functions.ts:454](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/builtins/functions.ts#L454)

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

[src/builtins/functions.ts:445](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/builtins/functions.ts#L445)

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

[src/builtins/functions.ts:448](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/builtins/functions.ts#L448)

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

[src/builtins/functions.ts:432](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/builtins/functions.ts#L432)

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

[src/builtins/functions.ts:438](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/builtins/functions.ts#L438)

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

[src/builtins/functions.ts:429](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/builtins/functions.ts#L429)

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

[src/builtins/functions.ts:442](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/builtins/functions.ts#L442)
