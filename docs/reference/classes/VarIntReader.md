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
| `buf` | `Bytes` |

#### Defined in

[src/builtins/functions.ts:594](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L594)

## Properties

### buf

• **buf**: `Bytes`

#### Defined in

[src/builtins/functions.ts:591](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L591)

___

### pos

• **pos**: `bigint`

#### Defined in

[src/builtins/functions.ts:592](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L592)

___

### StateLen

▪ `Static` `Readonly` **StateLen**: `bigint`

#### Defined in

[src/builtins/functions.ts:585](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L585)

___

### Version

▪ `Static` `Readonly` **Version**: `bigint`

#### Defined in

[src/builtins/functions.ts:589](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L589)

___

### VersionLen

▪ `Static` `Readonly` **VersionLen**: `bigint`

#### Defined in

[src/builtins/functions.ts:587](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L587)

## Methods

### eof

▸ **eof**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/builtins/functions.ts:599](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L599)

___

### readBool

▸ **readBool**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/builtins/functions.ts:639](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L639)

___

### readBytes

▸ **readBytes**(): `Bytes`

#### Returns

`Bytes`

#### Defined in

[src/builtins/functions.ts:603](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L603)

___

### readInt

▸ **readInt**(): `bigint`

#### Returns

`bigint`

#### Defined in

[src/builtins/functions.ts:645](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L645)

___

### getStateStart

▸ `Static` **getStateStart**(`scriptCode`): `bigint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `scriptCode` | `Bytes` |

#### Returns

`bigint`

#### Defined in

[src/builtins/functions.ts:649](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L649)
