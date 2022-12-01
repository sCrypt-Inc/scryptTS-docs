[scrypt-ts](../README.md) / VarIntWriter

# Class: VarIntWriter

## Table of contents

### Constructors

- [constructor](VarIntWriter.md#constructor)

### Methods

- [serializeState](VarIntWriter.md#serializestate)
- [writeBool](VarIntWriter.md#writebool)
- [writeInt](VarIntWriter.md#writeint)
- [writestring](VarIntWriter.md#writestring)

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

[src/builtins/functions.ts:494](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L494)

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

[src/builtins/functions.ts:489](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L489)

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

[src/builtins/functions.ts:492](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L492)

___

### writestring

▸ `Static` **writestring**(`buf`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | `string` |

#### Returns

`string`

#### Defined in

[src/builtins/functions.ts:486](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L486)
