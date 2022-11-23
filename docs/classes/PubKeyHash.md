[scrypt-ts](../README.md) / [Exports](../modules.md) / PubKeyHash

# Class: PubKeyHash

an alias for Ripemd160` type. Usually represent a bitcoin address.

## Hierarchy

- `PubKeyHash`

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

PubKeyHash\_.constructor

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:84

## Properties

### \_asm

• `Protected` **\_asm**: `string`

#### Inherited from

PubKeyHash\_.\_asm

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:23

___

### \_literal

• `Protected` **\_literal**: `string`

#### Inherited from

PubKeyHash\_.\_literal

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:22

___

### \_type

• `Protected` **\_type**: `string`

#### Inherited from

PubKeyHash\_.\_type

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:24

___

### \_typeResolver

• `Protected` **\_typeResolver**: `TypeResolver`

#### Inherited from

PubKeyHash\_.\_typeResolver

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:25

___

### \_value

• `Protected` **\_value**: `ValueType`

#### Inherited from

PubKeyHash\_.\_value

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:21

## Accessors

### finalType

• `get` **finalType**(): `string`

#### Returns

`string`

#### Inherited from

PubKeyHash\_.finalType

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:29

___

### literal

• `get` **literal**(): `string`

#### Returns

`string`

#### Inherited from

PubKeyHash\_.literal

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:30

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Inherited from

PubKeyHash\_.type

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:31

___

### value

• `get` **value**(): `ValueType`

#### Returns

`ValueType`

#### Inherited from

PubKeyHash\_.value

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

PubKeyHash\_.checkValue

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:37

___

### clone

▸ **clone**(): `ScryptType`

#### Returns

`ScryptType`

#### Inherited from

PubKeyHash\_.clone

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

PubKeyHash\_.equals

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:38

___

### serialize

▸ **serialize**(): `string`

#### Returns

`string`

#### Inherited from

PubKeyHash\_.serialize

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:86

___

### toASM

▸ **toASM**(): `string`

#### Returns

`string`

#### Inherited from

PubKeyHash\_.toASM

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:32

___

### toHex

▸ **toHex**(): `string`

#### Returns

`string`

#### Inherited from

PubKeyHash\_.toHex

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:33

___

### toJSON

▸ **toJSON**(): `unknown`

#### Returns

`unknown`

#### Inherited from

PubKeyHash\_.toJSON

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:35

___

### toLiteral

▸ **toLiteral**(): `string`

#### Returns

`string`

#### Inherited from

PubKeyHash\_.toLiteral

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

PubKeyHash\_.toString

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:34
