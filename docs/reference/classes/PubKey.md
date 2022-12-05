[scrypt-ts](../README.md) / PubKey

# Class: PubKey

a public key type.

## Hierarchy

- `PubKey`

  ↳ **`PubKey`**

## Table of contents

### Constructors

- [constructor](PubKey.md#constructor)

### Properties

- [\_asm](PubKey.md#_asm)
- [\_literal](PubKey.md#_literal)
- [\_type](PubKey.md#_type)
- [\_typeResolver](PubKey.md#_typeresolver)
- [\_value](PubKey.md#_value)

### Accessors

- [finalType](PubKey.md#finaltype)
- [literal](PubKey.md#literal)
- [type](PubKey.md#type)
- [value](PubKey.md#value)

### Methods

- [checkValue](PubKey.md#checkvalue)
- [clone](PubKey.md#clone)
- [equals](PubKey.md#equals)
- [serialize](PubKey.md#serialize)
- [toASM](PubKey.md#toasm)
- [toHex](PubKey.md#tohex)
- [toJSON](PubKey.md#tojson)
- [toLiteral](PubKey.md#toliteral)
- [toString](PubKey.md#tostring)

## Constructors

### constructor

• **new PubKey**(`bytesVal`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytesVal` | `string` |

#### Inherited from

PubKey\_.constructor

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:74

## Properties

### \_asm

• `Protected` **\_asm**: `string`

#### Inherited from

PubKey\_.\_asm

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:23

___

### \_literal

• `Protected` **\_literal**: `string`

#### Inherited from

PubKey\_.\_literal

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:22

___

### \_type

• `Protected` **\_type**: `string`

#### Inherited from

PubKey\_.\_type

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:24

___

### \_typeResolver

• `Protected` **\_typeResolver**: `TypeResolver`

#### Inherited from

PubKey\_.\_typeResolver

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:25

___

### \_value

• `Protected` **\_value**: `ValueType`

#### Inherited from

PubKey\_.\_value

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:21

## Accessors

### finalType

• `get` **finalType**(): `string`

#### Returns

`string`

#### Inherited from

PubKey\_.finalType

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:29

___

### literal

• `get` **literal**(): `string`

#### Returns

`string`

#### Inherited from

PubKey\_.literal

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:30

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Inherited from

PubKey\_.type

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:31

___

### value

• `get` **value**(): `ValueType`

#### Returns

`ValueType`

#### Inherited from

PubKey\_.value

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:28

## Methods

### checkValue

▸ **checkValue**(`value`): `ValueType`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `ValueType`[] |

#### Returns

`ValueType`

#### Inherited from

PubKey\_.checkValue

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:37

___

### clone

▸ **clone**(): `ScryptType`

#### Returns

`ScryptType`

#### Inherited from

PubKey\_.clone

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:40

___

### equals

▸ **equals**(`obj`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `ScryptType` |

#### Returns

`boolean`

#### Inherited from

PubKey\_.equals

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:38

___

### serialize

▸ **serialize**(): `string`

#### Returns

`string`

#### Inherited from

PubKey\_.serialize

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:76

___

### toASM

▸ **toASM**(): `string`

#### Returns

`string`

#### Inherited from

PubKey\_.toASM

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:32

___

### toHex

▸ **toHex**(): `string`

#### Returns

`string`

#### Inherited from

PubKey\_.toHex

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:33

___

### toJSON

▸ **toJSON**(): `unknown`

#### Returns

`unknown`

#### Inherited from

PubKey\_.toJSON

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:35

___

### toLiteral

▸ **toLiteral**(): `string`

#### Returns

`string`

#### Inherited from

PubKey\_.toLiteral

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:75

___

### toString

▸ **toString**(`format?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `format` | ``"hex"`` | `'hex'` |

#### Returns

`string`

#### Overrides

PubKey\_.toString

#### Defined in

[src/builtins/types.ts:90](https://github.com/sCrypt-Inc/scrypt-ts/blob/244c0d1/src/builtins/types.ts#L90)
