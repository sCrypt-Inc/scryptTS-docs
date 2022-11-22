[ts-scrypt](../README.md) / [Exports](../modules.md) / SigHashPreimage

# Class: SigHashPreimage

## Hierarchy

- `ScryptType`

  ↳ **`SigHashPreimage`**

## Table of contents

### Constructors

- [constructor](SigHashPreimage.md#constructor)

### Properties

- [\_asm](SigHashPreimage.md#_asm)
- [\_buf](SigHashPreimage.md#_buf)
- [\_literal](SigHashPreimage.md#_literal)
- [\_type](SigHashPreimage.md#_type)
- [\_typeResolver](SigHashPreimage.md#_typeresolver)
- [\_value](SigHashPreimage.md#_value)
- [getReader](SigHashPreimage.md#getreader)

### Accessors

- [amount](SigHashPreimage.md#amount)
- [finalType](SigHashPreimage.md#finaltype)
- [hashOutputs](SigHashPreimage.md#hashoutputs)
- [hashPrevouts](SigHashPreimage.md#hashprevouts)
- [hashSequence](SigHashPreimage.md#hashsequence)
- [literal](SigHashPreimage.md#literal)
- [nLocktime](SigHashPreimage.md#nlocktime)
- [nSequence](SigHashPreimage.md#nsequence)
- [nVersion](SigHashPreimage.md#nversion)
- [outpoint](SigHashPreimage.md#outpoint)
- [scriptCode](SigHashPreimage.md#scriptcode)
- [sighashType](SigHashPreimage.md#sighashtype)
- [type](SigHashPreimage.md#type)
- [value](SigHashPreimage.md#value)

### Methods

- [checkValue](SigHashPreimage.md#checkvalue)
- [clone](SigHashPreimage.md#clone)
- [equals](SigHashPreimage.md#equals)
- [serialize](SigHashPreimage.md#serialize)
- [toASM](SigHashPreimage.md#toasm)
- [toHex](SigHashPreimage.md#tohex)
- [toJSON](SigHashPreimage.md#tojson)
- [toJSONObject](SigHashPreimage.md#tojsonobject)
- [toLiteral](SigHashPreimage.md#toliteral)
- [toString](SigHashPreimage.md#tostring)

## Constructors

### constructor

• **new SigHashPreimage**(`bytesVal`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytesVal` | `string` |

#### Overrides

ScryptType.constructor

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:125

## Properties

### \_asm

• `Protected` **\_asm**: `string`

#### Inherited from

ScryptType.\_asm

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:23

___

### \_buf

• `Private` **\_buf**: `any`

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:126

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

___

### getReader

• `Private` **getReader**: `any`

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:127

## Accessors

### amount

• `get` **amount**(): `number`

#### Returns

`number`

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:133

___

### finalType

• `get` **finalType**(): `string`

#### Returns

`string`

#### Inherited from

ScryptType.finalType

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:29

___

### hashOutputs

• `get` **hashOutputs**(): `string`

#### Returns

`string`

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:135

___

### hashPrevouts

• `get` **hashPrevouts**(): `string`

#### Returns

`string`

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:129

___

### hashSequence

• `get` **hashSequence**(): `string`

#### Returns

`string`

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:130

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

### nLocktime

• `get` **nLocktime**(): `number`

#### Returns

`number`

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:136

___

### nSequence

• `get` **nSequence**(): `number`

#### Returns

`number`

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:134

___

### nVersion

• `get` **nVersion**(): `number`

#### Returns

`number`

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:128

___

### outpoint

• `get` **outpoint**(): `Outpoint`

#### Returns

`Outpoint`

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:131

___

### scriptCode

• `get` **scriptCode**(): `string`

#### Returns

`string`

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:132

___

### sighashType

• `get` **sighashType**(): `number`

#### Returns

`number`

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:137

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

node_modules/scryptlib/dist/scryptTypes.d.ts:152

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

### toJSONObject

▸ **toJSONObject**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `amount` | `number` |
| `hashOutputs` | `string` |
| `hashPrevouts` | `string` |
| `hashSequence` | `string` |
| `nLocktime` | `number` |
| `nSequence` | `number` |
| `nVersion` | `number` |
| `outpoint` | `Outpoint` |
| `scriptCode` | `string` |
| `sighashType` | `string` |

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:140

___

### toLiteral

▸ **toLiteral**(): `string`

#### Returns

`string`

#### Overrides

ScryptType.toLiteral

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:139

___

### toString

▸ **toString**(`format?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `format?` | `string` |

#### Returns

`string`

#### Overrides

ScryptType.toString

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:138
