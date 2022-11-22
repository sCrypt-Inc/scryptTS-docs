[ts-scrypt](../README.md) / [Exports](../modules.md) / VarIntReader

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

[src/builtins/functions.ts:338](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L338)

## Properties

### StateLen

▪ `Static` `Readonly` **StateLen**: `bigint`

#### Defined in

[src/builtins/functions.ts:332](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L332)

___

### Version

▪ `Static` `Readonly` **Version**: `bigint`

#### Defined in

[src/builtins/functions.ts:336](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L336)

___

### VersionLen

▪ `Static` `Readonly` **VersionLen**: `bigint`

#### Defined in

[src/builtins/functions.ts:334](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L334)

## Methods

### eof

▸ **eof**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/builtins/functions.ts:342](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L342)

___

### readBool

▸ **readBool**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/builtins/functions.ts:346](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L346)

___

### readInt

▸ **readInt**(): `bigint`

#### Returns

`bigint`

#### Defined in

[src/builtins/functions.ts:348](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L348)

___

### readstring

▸ **readstring**(): `string`

#### Returns

`string`

#### Defined in

[src/builtins/functions.ts:344](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L344)

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

[src/builtins/functions.ts:350](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L350)
