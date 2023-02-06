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

▸ `Static` **serializeState**(`stateBuf`): `Bytes`

#### Parameters

| Name | Type |
| :------ | :------ |
| `stateBuf` | `Bytes` |

#### Returns

`Bytes`

#### Defined in

[src/smart-contract/builtins/functions.ts:703](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/functions.ts#L703)

___

### writeBool

▸ `Static` **writeBool**(`x`): `Bytes`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `boolean` |

#### Returns

`Bytes`

#### Defined in

[src/smart-contract/builtins/functions.ts:694](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/functions.ts#L694)

___

### writeBytes

▸ `Static` **writeBytes**(`buf`): `Bytes`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | `Bytes` |

#### Returns

`Bytes`

#### Defined in

[src/smart-contract/builtins/functions.ts:668](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/functions.ts#L668)

___

### writeInt

▸ `Static` **writeInt**(`x`): `Bytes`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `bigint` |

#### Returns

`Bytes`

#### Defined in

[src/smart-contract/builtins/functions.ts:699](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/functions.ts#L699)
