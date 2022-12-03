[scrypt-ts](../README.md) / PrivKey

# Class: PrivKey

a private key type.

## Hierarchy

- `PrivKey`

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

#### Inherited from

PrivKey\_.constructor

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:68

## Properties

### \_asm

• `Protected` **\_asm**: `string`

#### Inherited from

PrivKey\_.\_asm

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:23

___

### \_literal

• `Protected` **\_literal**: `string`

#### Inherited from

PrivKey\_.\_literal

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:22

___

### \_type

• `Protected` **\_type**: `string`

#### Inherited from

PrivKey\_.\_type

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:24

___

### \_typeResolver

• `Protected` **\_typeResolver**: `TypeResolver`

#### Inherited from

PrivKey\_.\_typeResolver

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:25

___

### \_value

• `Protected` **\_value**: `ValueType`

#### Inherited from

PrivKey\_.\_value

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:21

## Accessors

### finalType

• `get` **finalType**(): `string`

#### Returns

`string`

#### Inherited from

PrivKey\_.finalType

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:29

___

### literal

• `get` **literal**(): `string`

#### Returns

`string`

#### Inherited from

PrivKey\_.literal

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:30

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Inherited from

PrivKey\_.type

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:31

___

### value

• `get` **value**(): `ValueType`

#### Returns

`ValueType`

#### Inherited from

PrivKey\_.value

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

PrivKey\_.checkValue

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:45

___

### clone

▸ **clone**(): `ScryptType`

#### Returns

`ScryptType`

#### Inherited from

PrivKey\_.clone

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

PrivKey\_.equals

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:38

___

### serialize

▸ **serialize**(): `string`

#### Returns

`string`

#### Inherited from

PrivKey\_.serialize

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:71

___

### toASM

▸ **toASM**(): `string`

#### Returns

`string`

#### Inherited from

PrivKey\_.toASM

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:32

___

### toHex

▸ **toHex**(): `string`

#### Returns

`string`

#### Inherited from

PrivKey\_.toHex

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:33

___

### toJSON

▸ **toJSON**(): `unknown`

#### Returns

`unknown`

#### Inherited from

PrivKey\_.toJSON

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:70

___

### toLiteral

▸ **toLiteral**(): `string`

#### Returns

`string`

#### Inherited from

PrivKey\_.toLiteral

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:69

___

### toNumber

▸ **toNumber**(): `string` \| `number`

#### Returns

`string` \| `number`

#### Inherited from

PrivKey\_.toNumber

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:48

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

PrivKey\_.toString

#### Defined in

[src/builtins/types.ts:207](https://github.com/sCrypt-Inc/ts-sCrypt/blob/c724703/src/builtins/types.ts#L207)
