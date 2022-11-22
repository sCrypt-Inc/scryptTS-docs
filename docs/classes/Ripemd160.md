[ts-scrypt](../README.md) / [Exports](../modules.md) / Ripemd160

# Class: Ripemd160

## Hierarchy

- `ScryptType`

  ↳ **`Ripemd160`**

  ↳↳ [`PubKeyHash`](PubKeyHash.md)

## Table of contents

### Constructors

- [constructor](Ripemd160.md#constructor)

### Properties

- [\_asm](Ripemd160.md#_asm)
- [\_literal](Ripemd160.md#_literal)
- [\_type](Ripemd160.md#_type)
- [\_typeResolver](Ripemd160.md#_typeresolver)
- [\_value](Ripemd160.md#_value)

### Accessors

- [finalType](Ripemd160.md#finaltype)
- [literal](Ripemd160.md#literal)
- [type](Ripemd160.md#type)
- [value](Ripemd160.md#value)

### Methods

- [checkValue](Ripemd160.md#checkvalue)
- [clone](Ripemd160.md#clone)
- [equals](Ripemd160.md#equals)
- [serialize](Ripemd160.md#serialize)
- [toASM](Ripemd160.md#toasm)
- [toHex](Ripemd160.md#tohex)
- [toJSON](Ripemd160.md#tojson)
- [toLiteral](Ripemd160.md#toliteral)
- [toString](Ripemd160.md#tostring)

## Constructors

### constructor

• **new Ripemd160**(`bytesVal`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytesVal` | `string` |

#### Overrides

ScryptType.constructor

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:84

## Properties

### \_asm

• `Protected` **\_asm**: `string`

#### Inherited from

ScryptType.\_asm

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:23

___

### \_literal

• `Protected` **\_literal**: `string`

#### Inherited from

ScryptType.\_literal

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:22

___

### \_type

• `Protected` **\_type**: `string`

#### Inherited from

ScryptType.\_type

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:24

___

### \_typeResolver

• `Protected` **\_typeResolver**: `TypeResolver`

#### Inherited from

ScryptType.\_typeResolver

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:25

___

### \_value

• `Protected` **\_value**: `ValueType`

#### Inherited from

ScryptType.\_value

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:21

## Accessors

### finalType

• `get` **finalType**(): `string`

#### Returns

`string`

#### Inherited from

ScryptType.finalType

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:29

___

### literal

• `get` **literal**(): `string`

#### Returns

`string`

#### Inherited from

ScryptType.literal

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:30

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Inherited from

ScryptType.type

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:31

___

### value

• `get` **value**(): `ValueType`

#### Returns

`ValueType`

#### Inherited from

ScryptType.value

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

ScryptType.checkValue

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:37

___

### clone

▸ **clone**(): `ScryptType`

#### Returns

`ScryptType`

#### Inherited from

ScryptType.clone

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

ScryptType.equals

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:38

___

### serialize

▸ **serialize**(): `string`

#### Returns

`string`

#### Overrides

ScryptType.serialize

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:86

___

### toASM

▸ **toASM**(): `string`

#### Returns

`string`

#### Inherited from

ScryptType.toASM

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:32

___

### toHex

▸ **toHex**(): `string`

#### Returns

`string`

#### Inherited from

ScryptType.toHex

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:33

___

### toJSON

▸ **toJSON**(): `unknown`

#### Returns

`unknown`

#### Inherited from

ScryptType.toJSON

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:35

___

### toLiteral

▸ **toLiteral**(): `string`

#### Returns

`string`

#### Overrides

ScryptType.toLiteral

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

ScryptType.toString

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:34
