[scrypt-ts](../README.md) / VarIntWriter

# Class: VarIntWriter

## Table of contents

### Constructors

- [constructor](VarIntWriter.md#constructor)

### Methods

- [serializeState](VarIntWriter.md#serializestate)
- [writeBool](VarIntWriter.md#writebool)
- [writeBytes](VarIntWriter.md#writebytes)
- [writeInt](VarIntWriter.md#writeint)

## Constructors

### constructor

• **new VarIntWriter**()

## Methods

### serializeState

▸ `Static` **serializeState**(`stateBuf`): [`ByteString`](../README.md#bytestring)

#### Parameters

| Name | Type |
| :------ | :------ |
| `stateBuf` | [`ByteString`](../README.md#bytestring) |

#### Returns

[`ByteString`](../README.md#bytestring)

#### Defined in

[src/smart-contract/builtins/functions.ts:712](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/functions.ts#L712)

___

### writeBool

▸ `Static` **writeBool**(`x`): [`ByteString`](../README.md#bytestring)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `boolean` |

#### Returns

[`ByteString`](../README.md#bytestring)

#### Defined in

[src/smart-contract/builtins/functions.ts:703](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/functions.ts#L703)

___

### writeBytes

▸ `Static` **writeBytes**(`buf`): [`ByteString`](../README.md#bytestring)

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`ByteString`](../README.md#bytestring) |

#### Returns

[`ByteString`](../README.md#bytestring)

#### Defined in

[src/smart-contract/builtins/functions.ts:677](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/functions.ts#L677)

___

### writeInt

▸ `Static` **writeInt**(`x`): [`ByteString`](../README.md#bytestring)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `bigint` |

#### Returns

[`ByteString`](../README.md#bytestring)

#### Defined in

[src/smart-contract/builtins/functions.ts:708](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/functions.ts#L708)
