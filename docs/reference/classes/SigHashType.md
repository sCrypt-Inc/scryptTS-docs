[scrypt-ts](../README.md) / SigHashType

# Class: SigHashType

a sighash type.

## Hierarchy

- `SigHashType`

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

#### Inherited from

SigHashType\_.constructor

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:114

## Properties

### \_asm

• `Protected` **\_asm**: `string`

#### Inherited from

SigHashType\_.\_asm

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:23

___

### \_literal

• `Protected` **\_literal**: `string`

#### Inherited from

SigHashType\_.\_literal

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:22

___

### \_type

• `Protected` **\_type**: `string`

#### Inherited from

SigHashType\_.\_type

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:24

___

### \_typeResolver

• `Protected` **\_typeResolver**: `TypeResolver`

#### Inherited from

SigHashType\_.\_typeResolver

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:25

___

### \_value

• `Protected` **\_value**: `ValueType`

#### Inherited from

SigHashType\_.\_value

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:21

## Accessors

### finalType

• `get` **finalType**(): `string`

#### Returns

`string`

#### Inherited from

SigHashType\_.finalType

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:29

___

### literal

• `get` **literal**(): `string`

#### Returns

`string`

#### Inherited from

SigHashType\_.literal

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:30

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Inherited from

SigHashType\_.type

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:31

___

### value

• `get` **value**(): `ValueType`

#### Returns

`ValueType`

#### Inherited from

SigHashType\_.value

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

SigHashType\_.checkValue

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:37

___

### clone

▸ **clone**(): `ScryptType`

#### Returns

`ScryptType`

#### Inherited from

SigHashType\_.clone

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

SigHashType\_.equals

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:38

___

### serialize

▸ **serialize**(): `string`

#### Returns

`string`

#### Inherited from

SigHashType\_.serialize

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:116

___

### toASM

▸ **toASM**(): `string`

#### Returns

`string`

#### Inherited from

SigHashType\_.toASM

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:32

___

### toHex

▸ **toHex**(): `string`

#### Returns

`string`

#### Inherited from

SigHashType\_.toHex

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:33

___

### toJSON

▸ **toJSON**(): `unknown`

#### Returns

`unknown`

#### Inherited from

SigHashType\_.toJSON

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:35

___

### toLiteral

▸ **toLiteral**(): `string`

#### Returns

`string`

#### Inherited from

SigHashType\_.toLiteral

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:115

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

SigHashType\_.toString

#### Defined in

[src/builtins/types.ts:181](https://github.com/sCrypt-Inc/scrypt-ts/blob/244c0d1/src/builtins/types.ts#L181)
