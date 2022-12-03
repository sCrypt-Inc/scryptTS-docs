[scrypt-ts](../README.md) / OpCodeType

# Class: OpCodeType

a OpCode type.

## Hierarchy

- `OpCodeType`

  ↳ **`OpCodeType`**

## Table of contents

### Constructors

- [constructor](OpCodeType.md#constructor)

### Properties

- [\_asm](OpCodeType.md#_asm)
- [\_literal](OpCodeType.md#_literal)
- [\_type](OpCodeType.md#_type)
- [\_typeResolver](OpCodeType.md#_typeresolver)
- [\_value](OpCodeType.md#_value)

### Accessors

- [finalType](OpCodeType.md#finaltype)
- [literal](OpCodeType.md#literal)
- [type](OpCodeType.md#type)
- [value](OpCodeType.md#value)

### Methods

- [checkValue](OpCodeType.md#checkvalue)
- [clone](OpCodeType.md#clone)
- [equals](OpCodeType.md#equals)
- [serialize](OpCodeType.md#serialize)
- [toASM](OpCodeType.md#toasm)
- [toHex](OpCodeType.md#tohex)
- [toJSON](OpCodeType.md#tojson)
- [toLiteral](OpCodeType.md#toliteral)
- [toString](OpCodeType.md#tostring)

## Constructors

### constructor

• **new OpCodeType**(`bytesVal`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytesVal` | `string` |

#### Inherited from

OpCodeType\_.constructor

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:155

## Properties

### \_asm

• `Protected` **\_asm**: `string`

#### Inherited from

OpCodeType\_.\_asm

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:23

___

### \_literal

• `Protected` **\_literal**: `string`

#### Inherited from

OpCodeType\_.\_literal

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:22

___

### \_type

• `Protected` **\_type**: `string`

#### Inherited from

OpCodeType\_.\_type

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:24

___

### \_typeResolver

• `Protected` **\_typeResolver**: `TypeResolver`

#### Inherited from

OpCodeType\_.\_typeResolver

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:25

___

### \_value

• `Protected` **\_value**: `ValueType`

#### Inherited from

OpCodeType\_.\_value

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:21

## Accessors

### finalType

• `get` **finalType**(): `string`

#### Returns

`string`

#### Inherited from

OpCodeType\_.finalType

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:29

___

### literal

• `get` **literal**(): `string`

#### Returns

`string`

#### Inherited from

OpCodeType\_.literal

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:30

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Inherited from

OpCodeType\_.type

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:31

___

### value

• `get` **value**(): `ValueType`

#### Returns

`ValueType`

#### Inherited from

OpCodeType\_.value

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

OpCodeType\_.checkValue

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:37

___

### clone

▸ **clone**(): `ScryptType`

#### Returns

`ScryptType`

#### Inherited from

OpCodeType\_.clone

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

OpCodeType\_.equals

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:38

___

### serialize

▸ **serialize**(): `string`

#### Returns

`string`

#### Inherited from

OpCodeType\_.serialize

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:157

___

### toASM

▸ **toASM**(): `string`

#### Returns

`string`

#### Inherited from

OpCodeType\_.toASM

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:32

___

### toHex

▸ **toHex**(): `string`

#### Returns

`string`

#### Inherited from

OpCodeType\_.toHex

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:33

___

### toJSON

▸ **toJSON**(): `unknown`

#### Returns

`unknown`

#### Inherited from

OpCodeType\_.toJSON

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:35

___

### toLiteral

▸ **toLiteral**(): `string`

#### Returns

`string`

#### Inherited from

OpCodeType\_.toLiteral

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:156

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

OpCodeType\_.toString

#### Defined in

[src/builtins/types.ts:194](https://github.com/sCrypt-Inc/ts-sCrypt/blob/c724703/src/builtins/types.ts#L194)
