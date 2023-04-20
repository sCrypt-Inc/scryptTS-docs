[scrypt-ts](../README.md) / [bsv](../modules/bsv.md) / [encoding](../modules/bsv.encoding.md) / BufferReader

# Class: BufferReader

[bsv](../modules/bsv.md).[encoding](../modules/bsv.encoding.md).BufferReader

## Table of contents

### Constructors

- [constructor](bsv.encoding.BufferReader.md#constructor)

### Properties

- [pos](bsv.encoding.BufferReader.md#pos)

### Methods

- [eof](bsv.encoding.BufferReader.md#eof)
- [read](bsv.encoding.BufferReader.md#read)
- [readAll](bsv.encoding.BufferReader.md#readall)
- [readInt32LE](bsv.encoding.BufferReader.md#readint32le)
- [readReverse](bsv.encoding.BufferReader.md#readreverse)
- [readUInt16BE](bsv.encoding.BufferReader.md#readuint16be)
- [readUInt16LE](bsv.encoding.BufferReader.md#readuint16le)
- [readUInt32BE](bsv.encoding.BufferReader.md#readuint32be)
- [readUInt32LE](bsv.encoding.BufferReader.md#readuint32le)
- [readUInt64BEBN](bsv.encoding.BufferReader.md#readuint64bebn)
- [readUInt64LEBN](bsv.encoding.BufferReader.md#readuint64lebn)
- [readUInt8](bsv.encoding.BufferReader.md#readuint8)
- [readVarLengthBuffer](bsv.encoding.BufferReader.md#readvarlengthbuffer)
- [readVarintBN](bsv.encoding.BufferReader.md#readvarintbn)
- [readVarintBuf](bsv.encoding.BufferReader.md#readvarintbuf)
- [readVarintNum](bsv.encoding.BufferReader.md#readvarintnum)
- [remaining](bsv.encoding.BufferReader.md#remaining)
- [reverse](bsv.encoding.BufferReader.md#reverse)

## Constructors

### constructor

• **new BufferReader**(`buf`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | `Buffer` |

#### Defined in

node_modules/bsv/index.d.ts:610

## Properties

### pos

• **pos**: `number`

#### Defined in

node_modules/bsv/index.d.ts:629

## Methods

### eof

▸ **eof**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/bsv/index.d.ts:627

___

### read

▸ **read**(`len`): `Buffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `len` | `number` |

#### Returns

`Buffer`

#### Defined in

node_modules/bsv/index.d.ts:611

___

### readAll

▸ **readAll**(): `Buffer`

#### Returns

`Buffer`

#### Defined in

node_modules/bsv/index.d.ts:626

___

### readInt32LE

▸ **readInt32LE**(): `number`

#### Returns

`number`

#### Defined in

node_modules/bsv/index.d.ts:617

___

### readReverse

▸ **readReverse**(`len?`): `Buffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `len?` | `number` |

#### Returns

`Buffer`

#### Defined in

node_modules/bsv/index.d.ts:625

___

### readUInt16BE

▸ **readUInt16BE**(): `number`

#### Returns

`number`

#### Defined in

node_modules/bsv/index.d.ts:613

___

### readUInt16LE

▸ **readUInt16LE**(): `number`

#### Returns

`number`

#### Defined in

node_modules/bsv/index.d.ts:614

___

### readUInt32BE

▸ **readUInt32BE**(): `number`

#### Returns

`number`

#### Defined in

node_modules/bsv/index.d.ts:615

___

### readUInt32LE

▸ **readUInt32LE**(): `number`

#### Returns

`number`

#### Defined in

node_modules/bsv/index.d.ts:616

___

### readUInt64BEBN

▸ **readUInt64BEBN**(): `number`

#### Returns

`number`

#### Defined in

node_modules/bsv/index.d.ts:618

___

### readUInt64LEBN

▸ **readUInt64LEBN**(): `number`

#### Returns

`number`

#### Defined in

node_modules/bsv/index.d.ts:619

___

### readUInt8

▸ **readUInt8**(): `number`

#### Returns

`number`

#### Defined in

node_modules/bsv/index.d.ts:612

___

### readVarLengthBuffer

▸ **readVarLengthBuffer**(): `Buffer`

#### Returns

`Buffer`

#### Defined in

node_modules/bsv/index.d.ts:621

___

### readVarintBN

▸ **readVarintBN**(): [`BN`](bsv.crypto.BN.md)

#### Returns

[`BN`](bsv.crypto.BN.md)

#### Defined in

node_modules/bsv/index.d.ts:623

___

### readVarintBuf

▸ **readVarintBuf**(): `Buffer`

#### Returns

`Buffer`

#### Defined in

node_modules/bsv/index.d.ts:622

___

### readVarintNum

▸ **readVarintNum**(): `number`

#### Returns

`number`

#### Defined in

node_modules/bsv/index.d.ts:620

___

### remaining

▸ **remaining**(): `number`

#### Returns

`number`

#### Defined in

node_modules/bsv/index.d.ts:628

___

### reverse

▸ **reverse**(): [`BufferReader`](bsv.encoding.BufferReader.md)

#### Returns

[`BufferReader`](bsv.encoding.BufferReader.md)

#### Defined in

node_modules/bsv/index.d.ts:624
