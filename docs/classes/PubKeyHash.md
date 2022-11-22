[ts-scrypt](../README.md) / [Exports](../modules.md) / PubKeyHash

# Class: PubKeyHash

## Hierarchy

- [`Ripemd160`](Ripemd160.md)

  ↳ **`PubKeyHash`**

## Table of contents

### Constructors

- [constructor](PubKeyHash.md#constructor)

### Properties

- [\_asm](PubKeyHash.md#_asm)
- [\_literal](PubKeyHash.md#_literal)
- [\_type](PubKeyHash.md#_type)
- [\_typeResolver](PubKeyHash.md#_typeresolver)
- [\_value](PubKeyHash.md#_value)

### Accessors

- [finalType](PubKeyHash.md#finaltype)
- [literal](PubKeyHash.md#literal)
- [type](PubKeyHash.md#type)
- [value](PubKeyHash.md#value)

### Methods

- [checkValue](PubKeyHash.md#checkvalue)
- [clone](PubKeyHash.md#clone)
- [equals](PubKeyHash.md#equals)
- [serialize](PubKeyHash.md#serialize)
- [toASM](PubKeyHash.md#toasm)
- [toHex](PubKeyHash.md#tohex)
- [toJSON](PubKeyHash.md#tojson)
- [toLiteral](PubKeyHash.md#toliteral)
- [toString](PubKeyHash.md#tostring)

## Constructors

### constructor

• **new PubKeyHash**(`bytesVal`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytesVal` | `string` |

#### Inherited from

[Ripemd160](Ripemd160.md).[constructor](Ripemd160.md#constructor)

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:84

## Properties

### \_asm

• `Protected` **\_asm**: `string`

#### Inherited from

[Ripemd160](Ripemd160.md).[_asm](Ripemd160.md#_asm)

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:23

___

### \_literal

• `Protected` **\_literal**: `string`

#### Inherited from

[Ripemd160](Ripemd160.md).[_literal](Ripemd160.md#_literal)

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:22

___

### \_type

• `Protected` **\_type**: `string`

#### Inherited from

[Ripemd160](Ripemd160.md).[_type](Ripemd160.md#_type)

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:24

___

### \_typeResolver

• `Protected` **\_typeResolver**: `TypeResolver`

#### Inherited from

[Ripemd160](Ripemd160.md).[_typeResolver](Ripemd160.md#_typeresolver)

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:25

___

### \_value

• `Protected` **\_value**: `ValueType`

#### Inherited from

[Ripemd160](Ripemd160.md).[_value](Ripemd160.md#_value)

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:21

## Accessors

### finalType

• `get` **finalType**(): `string`

#### Returns

`string`

#### Inherited from

Ripemd160.finalType

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:29

___

### literal

• `get` **literal**(): `string`

#### Returns

`string`

#### Inherited from

Ripemd160.literal

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:30

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Inherited from

Ripemd160.type

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:31

___

### value

• `get` **value**(): `ValueType`

#### Returns

`ValueType`

#### Inherited from

Ripemd160.value

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

[Ripemd160](Ripemd160.md).[checkValue](Ripemd160.md#checkvalue)

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:37

___

### clone

▸ **clone**(): `ScryptType`

#### Returns

`ScryptType`

#### Inherited from

[Ripemd160](Ripemd160.md).[clone](Ripemd160.md#clone)

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

[Ripemd160](Ripemd160.md).[equals](Ripemd160.md#equals)

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:38

___

### serialize

▸ **serialize**(): `string`

#### Returns

`string`

#### Inherited from

[Ripemd160](Ripemd160.md).[serialize](Ripemd160.md#serialize)

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:86

___

### toASM

▸ **toASM**(): `string`

#### Returns

`string`

#### Inherited from

[Ripemd160](Ripemd160.md).[toASM](Ripemd160.md#toasm)

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:32

___

### toHex

▸ **toHex**(): `string`

#### Returns

`string`

#### Inherited from

[Ripemd160](Ripemd160.md).[toHex](Ripemd160.md#tohex)

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:33

___

### toJSON

▸ **toJSON**(): `unknown`

#### Returns

`unknown`

#### Inherited from

[Ripemd160](Ripemd160.md).[toJSON](Ripemd160.md#tojson)

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:35

___

### toLiteral

▸ **toLiteral**(): `string`

#### Returns

`string`

#### Inherited from

[Ripemd160](Ripemd160.md).[toLiteral](Ripemd160.md#toliteral)

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:85

___

### toString

▸ **toString**(`format`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `format` | `string` |

#### Returns

`string`

#### Inherited from

[Ripemd160](Ripemd160.md).[toString](Ripemd160.md#tostring)

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:34
