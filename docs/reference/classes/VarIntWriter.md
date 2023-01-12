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

[src/builtins/functions.ts:704](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L704)

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

[src/builtins/functions.ts:695](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L695)

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

[src/builtins/functions.ts:669](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L669)

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

[src/builtins/functions.ts:700](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L700)
