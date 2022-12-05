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

▸ `Static` **serializeState**(`stateBuf`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `stateBuf` | `string` |

#### Returns

`string`

#### Defined in

[src/builtins/functions.ts:650](https://github.com/sCrypt-Inc/scrypt-ts/blob/244c0d1/src/builtins/functions.ts#L650)

___

### writeBool

▸ `Static` **writeBool**(`x`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `boolean` |

#### Returns

`string`

#### Defined in

[src/builtins/functions.ts:641](https://github.com/sCrypt-Inc/scrypt-ts/blob/244c0d1/src/builtins/functions.ts#L641)

___

### writeBytes

▸ `Static` **writeBytes**(`buf`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | `string` |

#### Returns

`string`

#### Defined in

[src/builtins/functions.ts:615](https://github.com/sCrypt-Inc/scrypt-ts/blob/244c0d1/src/builtins/functions.ts#L615)

___

### writeInt

▸ `Static` **writeInt**(`x`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `bigint` |

#### Returns

`string`

#### Defined in

[src/builtins/functions.ts:646](https://github.com/sCrypt-Inc/scrypt-ts/blob/244c0d1/src/builtins/functions.ts#L646)
