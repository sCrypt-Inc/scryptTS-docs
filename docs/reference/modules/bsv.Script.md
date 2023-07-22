[scrypt-ts](../README.md) / [bsv](bsv.md) / Script

# Namespace: Script

[bsv](bsv.md).Script

## Table of contents

### Namespaces

- [Interpreter](bsv.Script.Interpreter.md)

### Classes

- [Interpreter](../classes/bsv.Script.Interpreter-1.md)

### Interfaces

- [IOpChunk](../interfaces/bsv.Script.IOpChunk.md)

### Variables

- [types](bsv.Script.md#types)

### Functions

- [buildMultisigIn](bsv.Script.md#buildmultisigin)
- [buildMultisigOut](bsv.Script.md#buildmultisigout)
- [buildPublicKeyHashIn](bsv.Script.md#buildpublickeyhashin)
- [buildPublicKeyHashOut](bsv.Script.md#buildpublickeyhashout)
- [buildPublicKeyIn](bsv.Script.md#buildpublickeyin)
- [buildPublicKeyOut](bsv.Script.md#buildpublickeyout)
- [buildSafeDataOut](bsv.Script.md#buildsafedataout)
- [buildScriptHashOut](bsv.Script.md#buildscripthashout)
- [empty](bsv.Script.md#empty)
- [fromASM](bsv.Script.md#fromasm)
- [fromAddress](bsv.Script.md#fromaddress)
- [fromBuffer](bsv.Script.md#frombuffer)
- [fromHex](bsv.Script.md#fromhex)
- [fromString](bsv.Script.md#fromstring)
- [toASM](bsv.Script.md#toasm)
- [toBuffer](bsv.Script.md#tobuffer)
- [toHex](bsv.Script.md#tohex)
- [toString](bsv.Script.md#tostring)

## Variables

### types

• `Const` **types**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `DATA_OUT` | `string` |

#### Defined in

node_modules/bsv/index.d.ts:1206

## Functions

### buildMultisigIn

▸ **buildMultisigIn**(`pubkeys`, `threshold`, `signatures`, `opts`): [`Script`](../classes/bsv.Script-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pubkeys` | [`PublicKey`](../classes/bsv.PublicKey.md)[] |
| `threshold` | `number` |
| `signatures` | `Buffer`[] |
| `opts` | `object` |

#### Returns

[`Script`](../classes/bsv.Script-1.md)

#### Defined in

node_modules/bsv/index.d.ts:1221

___

### buildMultisigOut

▸ **buildMultisigOut**(`publicKeys`, `threshold`, `opts`): [`Script`](../classes/bsv.Script-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKeys` | [`PublicKey`](../classes/bsv.PublicKey.md)[] |
| `threshold` | `number` |
| `opts` | `object` |

#### Returns

[`Script`](../classes/bsv.Script-1.md)

#### Defined in

node_modules/bsv/index.d.ts:1216

___

### buildPublicKeyHashIn

▸ **buildPublicKeyHashIn**(`publicKey`, `signature`, `sigtype`): [`Script`](../classes/bsv.Script-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKey` | [`PublicKey`](../classes/bsv.PublicKey.md) |
| `signature` | `Buffer` \| [`Signature`](../classes/bsv.crypto.Signature.md) |
| `sigtype` | `number` |

#### Returns

[`Script`](../classes/bsv.Script-1.md)

#### Defined in

node_modules/bsv/index.d.ts:1241

___

### buildPublicKeyHashOut

▸ **buildPublicKeyHashOut**(`address`): [`Script`](../classes/bsv.Script-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` \| [`PublicKey`](../classes/bsv.PublicKey.md) \| [`Address`](../classes/bsv.Address.md) |

#### Returns

[`Script`](../classes/bsv.Script-1.md)

#### Defined in

node_modules/bsv/index.d.ts:1228

___

### buildPublicKeyIn

▸ **buildPublicKeyIn**(`signature`, `sigtype`): [`Script`](../classes/bsv.Script-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signature` | `Buffer` \| [`Signature`](../classes/bsv.crypto.Signature.md) |
| `sigtype` | `number` |

#### Returns

[`Script`](../classes/bsv.Script-1.md)

#### Defined in

node_modules/bsv/index.d.ts:1237

___

### buildPublicKeyOut

▸ **buildPublicKeyOut**(`pubkey`): [`Script`](../classes/bsv.Script-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pubkey` | [`PublicKey`](../classes/bsv.PublicKey.md) |

#### Returns

[`Script`](../classes/bsv.Script-1.md)

#### Defined in

node_modules/bsv/index.d.ts:1231

___

### buildSafeDataOut

▸ **buildSafeDataOut**(`data`, `encoding?`): [`Script`](../classes/bsv.Script-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` \| `Buffer` \| (`string` \| `Buffer`)[] |
| `encoding?` | `string` |

#### Returns

[`Script`](../classes/bsv.Script-1.md)

#### Defined in

node_modules/bsv/index.d.ts:1232

___

### buildScriptHashOut

▸ **buildScriptHashOut**(`script`): [`Script`](../classes/bsv.Script-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `script` | [`Script`](../classes/bsv.Script-1.md) |

#### Returns

[`Script`](../classes/bsv.Script-1.md)

#### Defined in

node_modules/bsv/index.d.ts:1236

___

### empty

▸ **empty**(): [`Script`](../classes/bsv.Script-1.md)

#### Returns

[`Script`](../classes/bsv.Script-1.md)

#### Defined in

node_modules/bsv/index.d.ts:1258

___

### fromASM

▸ **fromASM**(`str`): [`Script`](../classes/bsv.Script-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

[`Script`](../classes/bsv.Script-1.md)

#### Defined in

node_modules/bsv/index.d.ts:1248

___

### fromAddress

▸ **fromAddress**(`address`): [`Script`](../classes/bsv.Script-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` \| [`Address`](../classes/bsv.Address.md) |

#### Returns

[`Script`](../classes/bsv.Script-1.md)

#### Defined in

node_modules/bsv/index.d.ts:1247

___

### fromBuffer

▸ **fromBuffer**(`buf`): [`Script`](../classes/bsv.Script-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | `Buffer` |

#### Returns

[`Script`](../classes/bsv.Script-1.md)

#### Defined in

node_modules/bsv/index.d.ts:1251

___

### fromHex

▸ **fromHex**(`hex`): [`Script`](../classes/bsv.Script-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `hex` | `string` |

#### Returns

[`Script`](../classes/bsv.Script-1.md)

#### Defined in

node_modules/bsv/index.d.ts:1249

___

### fromString

▸ **fromString**(`str`): [`Script`](../classes/bsv.Script-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

[`Script`](../classes/bsv.Script-1.md)

#### Defined in

node_modules/bsv/index.d.ts:1250

___

### toASM

▸ **toASM**(): `string`

#### Returns

`string`

#### Defined in

node_modules/bsv/index.d.ts:1253

___

### toBuffer

▸ **toBuffer**(): `Buffer`

#### Returns

`Buffer`

#### Defined in

node_modules/bsv/index.d.ts:1254

___

### toHex

▸ **toHex**(): `string`

#### Returns

`string`

#### Defined in

node_modules/bsv/index.d.ts:1255

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

node_modules/bsv/index.d.ts:1256
