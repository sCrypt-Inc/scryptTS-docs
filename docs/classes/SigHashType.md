[ts-scrypt](../README.md) / [Exports](../modules.md) / SigHashType

# Class: SigHashType

## Hierarchy

- `ScryptType`

  ↳ **`SigHashType`**

## Table of contents

### Constructors

- [constructor](SigHashType.md#constructor)

### Properties

- [\_asm](SigHashType.md#_asm)
- [\_literal](SigHashType.md#_literal)
- [\_type](SigHashType.md#_type)
- [\_typeResolver](SigHashType.md#_typeresolver)
- [\_value](SigHashType.md#_value)

### Accessors

- [finalType](SigHashType.md#finaltype)
- [literal](SigHashType.md#literal)
- [type](SigHashType.md#type)
- [value](SigHashType.md#value)

### Methods

- [checkValue](SigHashType.md#checkvalue)
- [clone](SigHashType.md#clone)
- [equals](SigHashType.md#equals)
- [serialize](SigHashType.md#serialize)
- [toASM](SigHashType.md#toasm)
- [toHex](SigHashType.md#tohex)
- [toJSON](SigHashType.md#tojson)
- [toLiteral](SigHashType.md#toliteral)
- [toString](SigHashType.md#tostring)

## Constructors

### constructor

• **new SigHashType**(`intVal`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `intVal` | `number` |

#### Overrides

ScryptType.constructor

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:114

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

node_modules/scryptlib/dist/scryptTypes.d.ts:116

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

node_modules/scryptlib/dist/scryptTypes.d.ts:115

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Overrides

ScryptType.toString

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:117
