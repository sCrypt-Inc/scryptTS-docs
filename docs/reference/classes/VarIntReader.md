[scrypt-ts](../README.md) / VarIntReader

# Class: VarIntReader

## Table of contents

### Constructors

- [constructor](VarIntReader.md#constructor)

### Properties

- [buf](VarIntReader.md#buf)
- [pos](VarIntReader.md#pos)
- [StateLen](VarIntReader.md#statelen)
- [Version](VarIntReader.md#version)
- [VersionLen](VarIntReader.md#versionlen)

### Methods

- [eof](VarIntReader.md#eof)
- [readBool](VarIntReader.md#readbool)
- [readBytes](VarIntReader.md#readbytes)
- [readInt](VarIntReader.md#readint)
- [getStateStart](VarIntReader.md#getstatestart)

## Constructors

### constructor

• **new VarIntReader**(`buf`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | `string` |

#### Defined in

[src/builtins/functions.ts:540](https://github.com/sCrypt-Inc/ts-sCrypt/blob/c724703/src/builtins/functions.ts#L540)

## Properties

### buf

• **buf**: `string`

#### Defined in

[src/builtins/functions.ts:537](https://github.com/sCrypt-Inc/ts-sCrypt/blob/c724703/src/builtins/functions.ts#L537)

___

### pos

• **pos**: `bigint`

#### Defined in

[src/builtins/functions.ts:538](https://github.com/sCrypt-Inc/ts-sCrypt/blob/c724703/src/builtins/functions.ts#L538)

___

### StateLen

▪ `Static` `Readonly` **StateLen**: `bigint`

#### Defined in

[src/builtins/functions.ts:531](https://github.com/sCrypt-Inc/ts-sCrypt/blob/c724703/src/builtins/functions.ts#L531)

___

### Version

▪ `Static` `Readonly` **Version**: `bigint`

#### Defined in

[src/builtins/functions.ts:535](https://github.com/sCrypt-Inc/ts-sCrypt/blob/c724703/src/builtins/functions.ts#L535)

___

### VersionLen

▪ `Static` `Readonly` **VersionLen**: `bigint`

#### Defined in

[src/builtins/functions.ts:533](https://github.com/sCrypt-Inc/ts-sCrypt/blob/c724703/src/builtins/functions.ts#L533)

## Methods

### eof

▸ **eof**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/builtins/functions.ts:545](https://github.com/sCrypt-Inc/ts-sCrypt/blob/c724703/src/builtins/functions.ts#L545)

___

### readBool

▸ **readBool**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/builtins/functions.ts:585](https://github.com/sCrypt-Inc/ts-sCrypt/blob/c724703/src/builtins/functions.ts#L585)

___

### readBytes

▸ **readBytes**(): `string`

#### Returns

`string`

#### Defined in

[src/builtins/functions.ts:549](https://github.com/sCrypt-Inc/ts-sCrypt/blob/c724703/src/builtins/functions.ts#L549)

___

### readInt

▸ **readInt**(): `bigint`

#### Returns

`bigint`

#### Defined in

[src/builtins/functions.ts:591](https://github.com/sCrypt-Inc/ts-sCrypt/blob/c724703/src/builtins/functions.ts#L591)

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

[src/builtins/functions.ts:595](https://github.com/sCrypt-Inc/ts-sCrypt/blob/c724703/src/builtins/functions.ts#L595)
