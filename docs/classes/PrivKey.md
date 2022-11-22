[ts-scrypt](../README.md) / [Exports](../modules.md) / PrivKey

# Class: PrivKey

## Hierarchy

- [`Int`](Int.md)

  ↳ **`PrivKey`**

## Table of contents

### Constructors

- [constructor](PrivKey.md#constructor)

### Properties

- [\_asm](PrivKey.md#_asm)
- [\_literal](PrivKey.md#_literal)
- [\_type](PrivKey.md#_type)
- [\_typeResolver](PrivKey.md#_typeresolver)
- [\_value](PrivKey.md#_value)

### Accessors

- [finalType](PrivKey.md#finaltype)
- [literal](PrivKey.md#literal)
- [type](PrivKey.md#type)
- [value](PrivKey.md#value)

### Methods

- [checkValue](PrivKey.md#checkvalue)
- [clone](PrivKey.md#clone)
- [equals](PrivKey.md#equals)
- [serialize](PrivKey.md#serialize)
- [toASM](PrivKey.md#toasm)
- [toHex](PrivKey.md#tohex)
- [toJSON](PrivKey.md#tojson)
- [toLiteral](PrivKey.md#toliteral)
- [toNumber](PrivKey.md#tonumber)
- [toString](PrivKey.md#tostring)

## Constructors

### constructor

• **new PrivKey**(`intVal`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `intVal` | `string` \| `number` \| `bigint` |

#### Overrides

[Int](Int.md).[constructor](Int.md#constructor)

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:68

## Properties

### \_asm

• `Protected` **\_asm**: `string`

#### Inherited from

[Int](Int.md).[_asm](Int.md#_asm)

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:23

___

### \_literal

• `Protected` **\_literal**: `string`

#### Inherited from

[Int](Int.md).[_literal](Int.md#_literal)

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:22

___

### \_type

• `Protected` **\_type**: `string`

#### Inherited from

[Int](Int.md).[_type](Int.md#_type)

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:24

___

### \_typeResolver

• `Protected` **\_typeResolver**: `TypeResolver`

#### Inherited from

[Int](Int.md).[_typeResolver](Int.md#_typeresolver)

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:25

___

### \_value

• `Protected` **\_value**: `ValueType`

#### Inherited from

[Int](Int.md).[_value](Int.md#_value)

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:21

## Accessors

### finalType

• `get` **finalType**(): `string`

#### Returns

`string`

#### Inherited from

Int.finalType

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:29

___

### literal

• `get` **literal**(): `string`

#### Returns

`string`

#### Inherited from

Int.literal

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:30

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Inherited from

Int.type

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:31

___

### value

• `get` **value**(): `ValueType`

#### Returns

`ValueType`

#### Inherited from

Int.value

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

[Int](Int.md).[checkValue](Int.md#checkvalue)

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:45

___

### clone

▸ **clone**(): `ScryptType`

#### Returns

`ScryptType`

#### Inherited from

[Int](Int.md).[clone](Int.md#clone)

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

[Int](Int.md).[equals](Int.md#equals)

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:38

___

### serialize

▸ **serialize**(): `string`

#### Returns

`string`

#### Overrides

[Int](Int.md).[serialize](Int.md#serialize)

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:71

___

### toASM

▸ **toASM**(): `string`

#### Returns

`string`

#### Inherited from

[Int](Int.md).[toASM](Int.md#toasm)

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:32

___

### toHex

▸ **toHex**(): `string`

#### Returns

`string`

#### Inherited from

[Int](Int.md).[toHex](Int.md#tohex)

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:33

___

### toJSON

▸ **toJSON**(): `unknown`

#### Returns

`unknown`

#### Overrides

[Int](Int.md).[toJSON](Int.md#tojson)

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:70

___

### toLiteral

▸ **toLiteral**(): `string`

#### Returns

`string`

#### Overrides

[Int](Int.md).[toLiteral](Int.md#toliteral)

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:69

___

### toNumber

▸ **toNumber**(): `string` \| `number`

#### Returns

`string` \| `number`

#### Inherited from

[Int](Int.md).[toNumber](Int.md#tonumber)

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:48

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

[Int](Int.md).[toString](Int.md#tostring)

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:34
