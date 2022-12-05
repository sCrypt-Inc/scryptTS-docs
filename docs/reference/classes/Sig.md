[scrypt-ts](../README.md) / Sig

# Class: Sig

a signature type in [DER](https://docs.moneybutton.com/docs/bsv-signature.html) format, including [signature hash type](https://github.com/libbitcoin/libbitcoin-system/wiki/Sighash-and-TX-Signing), which is `SIGHASH_ALL | SIGHASH_FORKID (0x41)` in the below example.

## Hierarchy

- `Sig`

  ↳ **`Sig`**

## Table of contents

### Constructors

- [constructor](Sig.md#constructor)

### Properties

- [\_asm](Sig.md#_asm)
- [\_literal](Sig.md#_literal)
- [\_type](Sig.md#_type)
- [\_typeResolver](Sig.md#_typeresolver)
- [\_value](Sig.md#_value)

### Accessors

- [finalType](Sig.md#finaltype)
- [literal](Sig.md#literal)
- [type](Sig.md#type)
- [value](Sig.md#value)

### Methods

- [checkValue](Sig.md#checkvalue)
- [clone](Sig.md#clone)
- [equals](Sig.md#equals)
- [serialize](Sig.md#serialize)
- [toASM](Sig.md#toasm)
- [toHex](Sig.md#tohex)
- [toJSON](Sig.md#tojson)
- [toLiteral](Sig.md#toliteral)
- [toString](Sig.md#tostring)

## Constructors

### constructor

• **new Sig**(`bytesVal`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytesVal` | `string` |

#### Inherited from

Sig\_.constructor

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:79

## Properties

### \_asm

• `Protected` **\_asm**: `string`

#### Inherited from

Sig\_.\_asm

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:23

___

### \_literal

• `Protected` **\_literal**: `string`

#### Inherited from

Sig\_.\_literal

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:22

___

### \_type

• `Protected` **\_type**: `string`

#### Inherited from

Sig\_.\_type

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:24

___

### \_typeResolver

• `Protected` **\_typeResolver**: `TypeResolver`

#### Inherited from

Sig\_.\_typeResolver

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:25

___

### \_value

• `Protected` **\_value**: `ValueType`

#### Inherited from

Sig\_.\_value

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:21

## Accessors

### finalType

• `get` **finalType**(): `string`

#### Returns

`string`

#### Inherited from

Sig\_.finalType

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:29

___

### literal

• `get` **literal**(): `string`

#### Returns

`string`

#### Inherited from

Sig\_.literal

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:30

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Inherited from

Sig\_.type

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:31

___

### value

• `get` **value**(): `ValueType`

#### Returns

`ValueType`

#### Inherited from

Sig\_.value

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

Sig\_.checkValue

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:37

___

### clone

▸ **clone**(): `ScryptType`

#### Returns

`ScryptType`

#### Inherited from

Sig\_.clone

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

Sig\_.equals

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:38

___

### serialize

▸ **serialize**(): `string`

#### Returns

`string`

#### Inherited from

Sig\_.serialize

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:81

___

### toASM

▸ **toASM**(): `string`

#### Returns

`string`

#### Inherited from

Sig\_.toASM

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:32

___

### toHex

▸ **toHex**(): `string`

#### Returns

`string`

#### Inherited from

Sig\_.toHex

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:33

___

### toJSON

▸ **toJSON**(): `unknown`

#### Returns

`unknown`

#### Inherited from

Sig\_.toJSON

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:35

___

### toLiteral

▸ **toLiteral**(): `string`

#### Returns

`string`

#### Inherited from

Sig\_.toLiteral

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:80

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

Sig\_.toString

#### Defined in

[src/builtins/types.ts:100](https://github.com/sCrypt-Inc/scrypt-ts/blob/244c0d1/src/builtins/types.ts#L100)
