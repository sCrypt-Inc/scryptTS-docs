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

[src/smart-contract/builtins/functions.ts:593](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/functions.ts#L593)

## Properties

### buf

• **buf**: `Bytes`

#### Defined in

[src/smart-contract/builtins/functions.ts:590](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/functions.ts#L590)

___

### pos

• **pos**: `bigint`

#### Defined in

[src/smart-contract/builtins/functions.ts:591](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/functions.ts#L591)

___

### StateLen

▪ `Static` `Readonly` **StateLen**: `bigint`

#### Defined in

[src/smart-contract/builtins/functions.ts:584](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/functions.ts#L584)

___

### Version

▪ `Static` `Readonly` **Version**: `bigint`

#### Defined in

[src/smart-contract/builtins/functions.ts:588](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/functions.ts#L588)

___

### VersionLen

▪ `Static` `Readonly` **VersionLen**: `bigint`

#### Defined in

[src/smart-contract/builtins/functions.ts:586](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/functions.ts#L586)

## Methods

### eof

▸ **eof**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/smart-contract/builtins/functions.ts:598](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/functions.ts#L598)

___

### readBool

▸ **readBool**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/smart-contract/builtins/functions.ts:638](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/functions.ts#L638)

___

### readBytes

▸ **readBytes**(): `Bytes`

#### Returns

`Bytes`

#### Defined in

[src/smart-contract/builtins/functions.ts:602](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/functions.ts#L602)

___

### readInt

▸ **readInt**(): `bigint`

#### Returns

`bigint`

#### Defined in

[src/smart-contract/builtins/functions.ts:644](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/functions.ts#L644)

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

[src/smart-contract/builtins/functions.ts:648](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/functions.ts#L648)
