[scrypt-ts](../README.md) / Sha1

# Class: Sha1

a SHA-1 hash type.

## Hierarchy

- `Sha1`

  ↳ **`Sha1`**

## Table of contents

### Constructors

- [constructor](Sha1.md#constructor)

### Properties

- [\_asm](Sha1.md#_asm)
- [\_literal](Sha1.md#_literal)
- [\_type](Sha1.md#_type)
- [\_typeResolver](Sha1.md#_typeresolver)
- [\_value](Sha1.md#_value)

### Accessors

- [finalType](Sha1.md#finaltype)
- [literal](Sha1.md#literal)
- [type](Sha1.md#type)
- [value](Sha1.md#value)

### Methods

- [checkValue](Sha1.md#checkvalue)
- [clone](Sha1.md#clone)
- [equals](Sha1.md#equals)
- [serialize](Sha1.md#serialize)
- [toASM](Sha1.md#toasm)
- [toHex](Sha1.md#tohex)
- [toJSON](Sha1.md#tojson)
- [toLiteral](Sha1.md#toliteral)
- [toString](Sha1.md#tostring)

## Constructors

### constructor

• **new Sha1**(`bytesVal`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytesVal` | `string` |

#### Inherited from

Sha1\_.constructor

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:91

## Properties

### \_asm

• `Protected` **\_asm**: `string`

#### Inherited from

Sha1\_.\_asm

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:23

___

### \_literal

• `Protected` **\_literal**: `string`

#### Inherited from

Sha1\_.\_literal

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:22

___

### \_type

• `Protected` **\_type**: `string`

#### Inherited from

Sha1\_.\_type

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:24

___

### \_typeResolver

• `Protected` **\_typeResolver**: `TypeResolver`

#### Inherited from

Sha1\_.\_typeResolver

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:25

___

### \_value

• `Protected` **\_value**: `ValueType`

#### Inherited from

Sha1\_.\_value

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:21

## Accessors

### finalType

• `get` **finalType**(): `string`

#### Returns

`string`

#### Inherited from

Sha1\_.finalType

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:29

___

### literal

• `get` **literal**(): `string`

#### Returns

`string`

#### Inherited from

Sha1\_.literal

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:30

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Inherited from

Sha1\_.type

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:31

___

### value

• `get` **value**(): `ValueType`

#### Returns

`ValueType`

#### Inherited from

Sha1\_.value

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

Sha1\_.checkValue

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:37

___

### clone

▸ **clone**(): `ScryptType`

#### Returns

`ScryptType`

#### Inherited from

Sha1\_.clone

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

Sha1\_.equals

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:38

___

### serialize

▸ **serialize**(): `string`

#### Returns

`string`

#### Inherited from

Sha1\_.serialize

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:93

___

### toASM

▸ **toASM**(): `string`

#### Returns

`string`

#### Inherited from

Sha1\_.toASM

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:32

___

### toHex

▸ **toHex**(): `string`

#### Returns

`string`

#### Inherited from

Sha1\_.toHex

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:33

___

### toJSON

▸ **toJSON**(): `unknown`

#### Returns

`unknown`

#### Inherited from

Sha1\_.toJSON

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:35

___

### toLiteral

▸ **toLiteral**(): `string`

#### Returns

`string`

#### Inherited from

Sha1\_.toLiteral

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:92

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

Sha1\_.toString

#### Defined in

[src/builtins/types.ts:167](https://github.com/sCrypt-Inc/scrypt-ts/blob/244c0d1/src/builtins/types.ts#L167)
