[scrypt-ts](../README.md) / [Exports](../modules.md) / VarIntReader

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

[src/builtins/functions.ts:515](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/builtins/functions.ts#L515)

## Properties

### StateLen

▪ `Static` `Readonly` **StateLen**: `bigint`

#### Defined in

[src/builtins/functions.ts:509](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/builtins/functions.ts#L509)

___

### Version

▪ `Static` `Readonly` **Version**: `bigint`

#### Defined in

[src/builtins/functions.ts:513](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/builtins/functions.ts#L513)

___

### VersionLen

▪ `Static` `Readonly` **VersionLen**: `bigint`

#### Defined in

[src/builtins/functions.ts:511](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/builtins/functions.ts#L511)

## Methods

### eof

▸ **eof**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/builtins/functions.ts:519](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/builtins/functions.ts#L519)

___

### readBool

▸ **readBool**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/builtins/functions.ts:523](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/builtins/functions.ts#L523)

___

### readInt

▸ **readInt**(): `bigint`

#### Returns

`bigint`

#### Defined in

[src/builtins/functions.ts:525](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/builtins/functions.ts#L525)

___

### readstring

▸ **readstring**(): `string`

#### Returns

`string`

#### Defined in

[src/builtins/functions.ts:521](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/builtins/functions.ts#L521)

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

[src/builtins/functions.ts:527](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/builtins/functions.ts#L527)
