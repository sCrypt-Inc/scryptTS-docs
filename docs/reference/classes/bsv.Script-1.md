[scrypt-ts](../README.md) / [bsv](../modules/bsv.md) / Script

# Class: Script

[bsv](../modules/bsv.md).Script

## Table of contents

### Constructors

- [constructor](bsv.Script-1.md#constructor)

### Properties

- [chunks](bsv.Script-1.md#chunks)
- [length](bsv.Script-1.md#length)

### Methods

- [add](bsv.Script-1.md#add)
- [checkMinimalPush](bsv.Script-1.md#checkminimalpush)
- [classify](bsv.Script-1.md#classify)
- [classifyInput](bsv.Script-1.md#classifyinput)
- [classifyOutput](bsv.Script-1.md#classifyoutput)
- [clone](bsv.Script-1.md#clone)
- [equals](bsv.Script-1.md#equals)
- [findAndDelete](bsv.Script-1.md#findanddelete)
- [getAddressInfo](bsv.Script-1.md#getaddressinfo)
- [getData](bsv.Script-1.md#getdata)
- [getPublicKey](bsv.Script-1.md#getpublickey)
- [getPublicKeyHash](bsv.Script-1.md#getpublickeyhash)
- [getSignatureOperationsCount](bsv.Script-1.md#getsignatureoperationscount)
- [hasCodeseparators](bsv.Script-1.md#hascodeseparators)
- [isDataOut](bsv.Script-1.md#isdataout)
- [isMultisigIn](bsv.Script-1.md#ismultisigin)
- [isMultisigOut](bsv.Script-1.md#ismultisigout)
- [isPublicKeyHashIn](bsv.Script-1.md#ispublickeyhashin)
- [isPublicKeyHashOut](bsv.Script-1.md#ispublickeyhashout)
- [isPublicKeyIn](bsv.Script-1.md#ispublickeyin)
- [isPublicKeyOut](bsv.Script-1.md#ispublickeyout)
- [isPushOnly](bsv.Script-1.md#ispushonly)
- [isSafeDataOut](bsv.Script-1.md#issafedataout)
- [isScriptHashIn](bsv.Script-1.md#isscripthashin)
- [isScriptHashOut](bsv.Script-1.md#isscripthashout)
- [isStandard](bsv.Script-1.md#isstandard)
- [isWitnessProgram](bsv.Script-1.md#iswitnessprogram)
- [isWitnessPublicKeyHashOut](bsv.Script-1.md#iswitnesspublickeyhashout)
- [isWitnessScriptHashOut](bsv.Script-1.md#iswitnessscripthashout)
- [prepend](bsv.Script-1.md#prepend)
- [removeCodeseparators](bsv.Script-1.md#removecodeseparators)
- [set](bsv.Script-1.md#set)
- [subScript](bsv.Script-1.md#subscript)
- [toASM](bsv.Script-1.md#toasm)
- [toAddress](bsv.Script-1.md#toaddress)
- [toBuffer](bsv.Script-1.md#tobuffer)
- [toHex](bsv.Script-1.md#tohex)
- [toString](bsv.Script-1.md#tostring)
- [fromChunks](bsv.Script-1.md#fromchunks)

## Constructors

### constructor

• **new Script**(`data`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` \| `object` |

#### Defined in

node_modules/bsv/index.d.ts:818

## Properties

### chunks

• **chunks**: [`IOpChunk`](../interfaces/bsv.Script.IOpChunk.md)[]

#### Defined in

node_modules/bsv/index.d.ts:820

___

### length

• **length**: `number`

#### Defined in

node_modules/bsv/index.d.ts:821

## Methods

### add

▸ **add**(`obj`): [`Script`](bsv.Script-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

[`Script`](bsv.Script-1.md)

#### Defined in

node_modules/bsv/index.d.ts:859

___

### checkMinimalPush

▸ **checkMinimalPush**(`i`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `i` | `number` |

#### Returns

`boolean`

#### Defined in

node_modules/bsv/index.d.ts:868

___

### classify

▸ **classify**(): `string`

#### Returns

`string`

#### Defined in

node_modules/bsv/index.d.ts:852

___

### classifyInput

▸ **classifyInput**(): `string`

#### Returns

`string`

#### Defined in

node_modules/bsv/index.d.ts:853

___

### classifyOutput

▸ **classifyOutput**(): `string`

#### Returns

`string`

#### Defined in

node_modules/bsv/index.d.ts:854

___

### clone

▸ **clone**(): [`Script`](bsv.Script-1.md)

#### Returns

[`Script`](bsv.Script-1.md)

#### Defined in

node_modules/bsv/index.d.ts:873

___

### equals

▸ **equals**(`script`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `script` | [`Script`](bsv.Script-1.md) |

#### Returns

`boolean`

#### Defined in

node_modules/bsv/index.d.ts:864

___

### findAndDelete

▸ **findAndDelete**(`script`): [`Script`](bsv.Script-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `script` | [`Script`](bsv.Script-1.md) |

#### Returns

[`Script`](bsv.Script-1.md)

#### Defined in

node_modules/bsv/index.d.ts:867

___

### getAddressInfo

▸ **getAddressInfo**(): `boolean` \| [`Address`](bsv.Address.md)

#### Returns

`boolean` \| [`Address`](bsv.Address.md)

#### Defined in

node_modules/bsv/index.d.ts:866

___

### getData

▸ **getData**(): `Buffer`

#### Returns

`Buffer`

#### Defined in

node_modules/bsv/index.d.ts:849

___

### getPublicKey

▸ **getPublicKey**(): `Buffer`

#### Returns

`Buffer`

#### Defined in

node_modules/bsv/index.d.ts:833

___

### getPublicKeyHash

▸ **getPublicKeyHash**(): `Buffer`

#### Returns

`Buffer`

#### Defined in

node_modules/bsv/index.d.ts:834

___

### getSignatureOperationsCount

▸ **getSignatureOperationsCount**(`accurate`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `accurate` | `boolean` |

#### Returns

`number`

#### Defined in

node_modules/bsv/index.d.ts:869

___

### hasCodeseparators

▸ **hasCodeseparators**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/bsv/index.d.ts:861

___

### isDataOut

▸ **isDataOut**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/bsv/index.d.ts:846

___

### isMultisigIn

▸ **isMultisigIn**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/bsv/index.d.ts:845

___

### isMultisigOut

▸ **isMultisigOut**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/bsv/index.d.ts:844

___

### isPublicKeyHashIn

▸ **isPublicKeyHashIn**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/bsv/index.d.ts:831

___

### isPublicKeyHashOut

▸ **isPublicKeyHashOut**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/bsv/index.d.ts:830

___

### isPublicKeyIn

▸ **isPublicKeyIn**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/bsv/index.d.ts:837

___

### isPublicKeyOut

▸ **isPublicKeyOut**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/bsv/index.d.ts:836

___

### isPushOnly

▸ **isPushOnly**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/bsv/index.d.ts:850

___

### isSafeDataOut

▸ **isSafeDataOut**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/bsv/index.d.ts:847

___

### isScriptHashIn

▸ **isScriptHashIn**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/bsv/index.d.ts:843

___

### isScriptHashOut

▸ **isScriptHashOut**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/bsv/index.d.ts:839

___

### isStandard

▸ **isStandard**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/bsv/index.d.ts:856

___

### isWitnessProgram

▸ **isWitnessProgram**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/bsv/index.d.ts:842

___

### isWitnessPublicKeyHashOut

▸ **isWitnessPublicKeyHashOut**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/bsv/index.d.ts:841

___

### isWitnessScriptHashOut

▸ **isWitnessScriptHashOut**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/bsv/index.d.ts:840

___

### prepend

▸ **prepend**(`obj`): [`Script`](bsv.Script-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

[`Script`](bsv.Script-1.md)

#### Defined in

node_modules/bsv/index.d.ts:858

___

### removeCodeseparators

▸ **removeCodeseparators**(): [`Script`](bsv.Script-1.md)

#### Returns

[`Script`](bsv.Script-1.md)

#### Defined in

node_modules/bsv/index.d.ts:862

___

### set

▸ **set**(`obj`): [`Script`](bsv.Script-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `object` |

#### Returns

[`Script`](bsv.Script-1.md)

#### Defined in

node_modules/bsv/index.d.ts:823

___

### subScript

▸ **subScript**(`n`): [`Script`](bsv.Script-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`Script`](bsv.Script-1.md)

#### Defined in

node_modules/bsv/index.d.ts:875

___

### toASM

▸ **toASM**(): `string`

#### Returns

`string`

#### Defined in

node_modules/bsv/index.d.ts:826

___

### toAddress

▸ **toAddress**(`network?`): [`Address`](bsv.Address.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `network?` | [`Type`](../modules/bsv.Networks.md#type) |

#### Returns

[`Address`](bsv.Address.md)

#### Defined in

node_modules/bsv/index.d.ts:871

___

### toBuffer

▸ **toBuffer**(): `Buffer`

#### Returns

`Buffer`

#### Defined in

node_modules/bsv/index.d.ts:825

___

### toHex

▸ **toHex**(): `string`

#### Returns

`string`

#### Defined in

node_modules/bsv/index.d.ts:828

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

node_modules/bsv/index.d.ts:827

___

### fromChunks

▸ `Static` **fromChunks**(`chunks`): [`Script`](bsv.Script-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunks` | [`IOpChunk`](../interfaces/bsv.Script.IOpChunk.md)[] |

#### Returns

[`Script`](bsv.Script-1.md)

#### Defined in

node_modules/bsv/index.d.ts:877
