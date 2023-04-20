[scrypt-ts](../README.md) / VarIntReader

# Class: VarIntReader

A reader to parse a ByteString buffer

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

## Constructors

### constructor

• **new VarIntReader**(`buf`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`ByteString`](../README.md#bytestring) |

#### Defined in

dist/smart-contract/builtins/functions.d.ts:1051

## Properties

### buf

• **buf**: [`ByteString`](../README.md#bytestring)

#### Defined in

dist/smart-contract/builtins/functions.d.ts:1049

___

### pos

• **pos**: `bigint`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:1050

___

### StateLen

▪ `Static` `Readonly` **StateLen**: `bigint`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:1046

___

### Version

▪ `Static` `Readonly` **Version**: `bigint`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:1048

___

### VersionLen

▪ `Static` `Readonly` **VersionLen**: `bigint`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:1047

## Methods

### eof

▸ **eof**(): `boolean`

Check if all have been read

#### Returns

`boolean`

true if all have been read

#### Defined in

dist/smart-contract/builtins/functions.d.ts:1056

___

### readBool

▸ **readBool**(): `boolean`

read a byte as boolean

#### Returns

`boolean`

true if the read byte not equal to '00'

#### Defined in

dist/smart-contract/builtins/functions.d.ts:1066

___

### readBytes

▸ **readBytes**(): [`ByteString`](../README.md#bytestring)

read bytes which encoded with bitcoin [value-pushing words][https://wiki.bitcoinsv.io/index.php/Opcodes_used_in_Bitcoin_Script](https://wiki.bitcoinsv.io/index.php/Opcodes_used_in_Bitcoin_Script)

#### Returns

[`ByteString`](../README.md#bytestring)

true if all have been read

#### Defined in

dist/smart-contract/builtins/functions.d.ts:1061

___

### readInt

▸ **readInt**(): `bigint`

read bytes as `readBytes` and convert it to a number with `byteString2Int`

#### Returns

`bigint`

a number

#### Defined in

dist/smart-contract/builtins/functions.d.ts:1071
