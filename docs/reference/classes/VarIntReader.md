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
| `buf` | [`ByteString`](../README.md#bytestring) |

#### Defined in

[src/smart-contract/builtins/functions.ts:602](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/functions.ts#L602)

## Properties

### buf

• **buf**: [`ByteString`](../README.md#bytestring)

#### Defined in

[src/smart-contract/builtins/functions.ts:599](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/functions.ts#L599)

___

### pos

• **pos**: `bigint`

#### Defined in

[src/smart-contract/builtins/functions.ts:600](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/functions.ts#L600)

___

### StateLen

▪ `Static` `Readonly` **StateLen**: `bigint`

#### Defined in

[src/smart-contract/builtins/functions.ts:593](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/functions.ts#L593)

___

### Version

▪ `Static` `Readonly` **Version**: `bigint`

#### Defined in

[src/smart-contract/builtins/functions.ts:597](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/functions.ts#L597)

___

### VersionLen

▪ `Static` `Readonly` **VersionLen**: `bigint`

#### Defined in

[src/smart-contract/builtins/functions.ts:595](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/functions.ts#L595)

## Methods

### eof

▸ **eof**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/smart-contract/builtins/functions.ts:607](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/functions.ts#L607)

___

### readBool

▸ **readBool**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/smart-contract/builtins/functions.ts:647](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/functions.ts#L647)

___

### readBytes

▸ **readBytes**(): [`ByteString`](../README.md#bytestring)

#### Returns

[`ByteString`](../README.md#bytestring)

#### Defined in

[src/smart-contract/builtins/functions.ts:611](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/functions.ts#L611)

___

### readInt

▸ **readInt**(): `bigint`

#### Returns

`bigint`

#### Defined in

[src/smart-contract/builtins/functions.ts:653](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/functions.ts#L653)

___

### getStateStart

▸ `Static` **getStateStart**(`scriptCode`): `bigint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `scriptCode` | [`ByteString`](../README.md#bytestring) |

#### Returns

`bigint`

#### Defined in

[src/smart-contract/builtins/functions.ts:657](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/functions.ts#L657)
