[scrypt-ts](../README.md) / VarIntWriter

# Class: VarIntWriter

A writer that serializes `ByteString`, `boolean`, `bigint`

## Table of contents

### Constructors

- [constructor](VarIntWriter.md#constructor)

### Methods

- [writeBool](VarIntWriter.md#writebool)
- [writeBytes](VarIntWriter.md#writebytes)
- [writeInt](VarIntWriter.md#writeint)

## Constructors

### constructor

• **new VarIntWriter**()

## Methods

### writeBool

▸ `Static` **writeBool**(`x`): [`ByteString`](../README.md#bytestring)

serializes `boolean` with fixed 1 byte

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `boolean` | a boolean |

#### Returns

[`ByteString`](../README.md#bytestring)

serialized `ByteString`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:1095

___

### writeBytes

▸ `Static` **writeBytes**(`buf`): [`ByteString`](../README.md#bytestring)

serializes `ByteString` with `VarInt` encoding

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `buf` | [`ByteString`](../README.md#bytestring) | a `ByteString` |

#### Returns

[`ByteString`](../README.md#bytestring)

serialized `ByteString`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:1089

___

### writeInt

▸ `Static` **writeInt**(`x`): [`ByteString`](../README.md#bytestring)

serializes `bigint` with `VarInt` encoding

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `bigint` | a boolean |

#### Returns

[`ByteString`](../README.md#bytestring)

serialized `ByteString`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:1101
