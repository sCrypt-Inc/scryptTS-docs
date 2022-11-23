[scrypt-ts](../README.md) / [Exports](../modules.md) / VarIntWriter

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

[src/builtins/functions.ts:544](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/builtins/functions.ts#L544)

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

[src/builtins/functions.ts:539](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/builtins/functions.ts#L539)

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

[src/builtins/functions.ts:542](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/builtins/functions.ts#L542)

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

[src/builtins/functions.ts:536](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/builtins/functions.ts#L536)
