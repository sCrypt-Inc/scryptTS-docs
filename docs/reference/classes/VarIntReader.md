[scrypt-ts](../README.md) / VarIntReader

# Class: VarIntReader

## Table of contents

### Constructors

- [constructor](VarIntReader.md#constructor)

### Properties

- [StateLen](VarIntReader.md#statelen)
- [Version](VarIntReader.md#version)
- [VersionLen](VarIntReader.md#versionlen)

### Methods

- [eof](VarIntReader.md#eof)
- [readBool](VarIntReader.md#readbool)
- [readInt](VarIntReader.md#readint)
- [readstring](VarIntReader.md#readstring)
- [getStateStart](VarIntReader.md#getstatestart)

## Constructors

### constructor

• **new VarIntReader**(`buf`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | `string` |

#### Defined in

[src/builtins/functions.ts:465](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L465)

## Properties

### StateLen

▪ `Static` `Readonly` **StateLen**: `bigint`

#### Defined in

[src/builtins/functions.ts:459](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L459)

___

### Version

▪ `Static` `Readonly` **Version**: `bigint`

#### Defined in

[src/builtins/functions.ts:463](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L463)

___

### VersionLen

▪ `Static` `Readonly` **VersionLen**: `bigint`

#### Defined in

[src/builtins/functions.ts:461](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L461)

## Methods

### eof

▸ **eof**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/builtins/functions.ts:469](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L469)

___

### readBool

▸ **readBool**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/builtins/functions.ts:473](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L473)

___

### readInt

▸ **readInt**(): `bigint`

#### Returns

`bigint`

#### Defined in

[src/builtins/functions.ts:475](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L475)

___

### readstring

▸ **readstring**(): `string`

#### Returns

`string`

#### Defined in

[src/builtins/functions.ts:471](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L471)

___

### getStateStart

▸ `Static` **getStateStart**(`scriptCode`): `bigint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `scriptCode` | `string` |

#### Returns

`bigint`

#### Defined in

[src/builtins/functions.ts:477](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L477)
