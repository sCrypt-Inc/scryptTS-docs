[**bitcoinjs-lib v1.0.7**](../README.md)

***

[bitcoinjs-lib](../README.md) / BufferReader

# Class: BufferReader

Defined in: [ts\_src/bufferutils.ts:117](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/bufferutils.ts#L117)

Helper class for reading of bitcoin data types from a buffer.

## Constructors

### new BufferReader()

> **new BufferReader**(`buffer`, `offset`): [`BufferReader`](BufferReader.md)

Defined in: [ts\_src/bufferutils.ts:118](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/bufferutils.ts#L118)

#### Parameters

##### buffer

`Uint8Array`

##### offset

`number` = `0`

#### Returns

[`BufferReader`](BufferReader.md)

## Properties

### buffer

> **buffer**: `Uint8Array`

Defined in: [ts\_src/bufferutils.ts:119](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/bufferutils.ts#L119)

***

### offset

> **offset**: `number` = `0`

Defined in: [ts\_src/bufferutils.ts:120](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/bufferutils.ts#L120)

## Methods

### readInt32()

> **readInt32**(): `number`

Defined in: [ts\_src/bufferutils.ts:134](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/bufferutils.ts#L134)

#### Returns

`number`

***

### readInt64()

> **readInt64**(): `bigint`

Defined in: [ts\_src/bufferutils.ts:146](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/bufferutils.ts#L146)

#### Returns

`bigint`

***

### readSlice()

> **readSlice**(`n`): `Uint8Array`

Defined in: [ts\_src/bufferutils.ts:158](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/bufferutils.ts#L158)

#### Parameters

##### n

`number` | `bigint`

#### Returns

`Uint8Array`

***

### readUInt32()

> **readUInt32**(): `number`

Defined in: [ts\_src/bufferutils.ts:140](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/bufferutils.ts#L140)

#### Returns

`number`

***

### readUInt8()

> **readUInt8**(): `number`

Defined in: [ts\_src/bufferutils.ts:128](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/bufferutils.ts#L128)

#### Returns

`number`

***

### readVarInt()

> **readVarInt**(): `bigint`

Defined in: [ts\_src/bufferutils.ts:152](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/bufferutils.ts#L152)

#### Returns

`bigint`

***

### readVarSlice()

> **readVarSlice**(): `Uint8Array`

Defined in: [ts\_src/bufferutils.ts:169](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/bufferutils.ts#L169)

#### Returns

`Uint8Array`

***

### readVector()

> **readVector**(): `Uint8Array`[]

Defined in: [ts\_src/bufferutils.ts:173](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/bufferutils.ts#L173)

#### Returns

`Uint8Array`[]
