[**bitcoinjs-lib v1.0.7**](../README.md)

***

[bitcoinjs-lib](../README.md) / BufferWriter

# Class: BufferWriter

Defined in: [ts\_src/bufferutils.ts:48](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/bufferutils.ts#L48)

Helper class for serialization of bitcoin data types into a pre-allocated buffer.

## Constructors

### new BufferWriter()

> **new BufferWriter**(`buffer`, `offset`): [`BufferWriter`](BufferWriter.md)

Defined in: [ts\_src/bufferutils.ts:53](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/bufferutils.ts#L53)

#### Parameters

##### buffer

`Uint8Array`

##### offset

`number` = `0`

#### Returns

[`BufferWriter`](BufferWriter.md)

## Properties

### buffer

> **buffer**: `Uint8Array`

Defined in: [ts\_src/bufferutils.ts:54](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/bufferutils.ts#L54)

***

### offset

> **offset**: `number` = `0`

Defined in: [ts\_src/bufferutils.ts:55](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/bufferutils.ts#L55)

## Methods

### end()

> **end**(): `Uint8Array`

Defined in: [ts\_src/bufferutils.ts:106](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/bufferutils.ts#L106)

#### Returns

`Uint8Array`

***

### writeInt32()

> **writeInt32**(`i`): `void`

Defined in: [ts\_src/bufferutils.ts:67](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/bufferutils.ts#L67)

#### Parameters

##### i

`number`

#### Returns

`void`

***

### writeInt64()

> **writeInt64**(`i`): `void`

Defined in: [ts\_src/bufferutils.ts:71](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/bufferutils.ts#L71)

#### Parameters

##### i

`number` | `bigint`

#### Returns

`void`

***

### writeSlice()

> **writeSlice**(`slice`): `void`

Defined in: [ts\_src/bufferutils.ts:88](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/bufferutils.ts#L88)

#### Parameters

##### slice

`Uint8Array`

#### Returns

`void`

***

### writeUInt32()

> **writeUInt32**(`i`): `void`

Defined in: [ts\_src/bufferutils.ts:75](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/bufferutils.ts#L75)

#### Parameters

##### i

`number`

#### Returns

`void`

***

### writeUInt64()

> **writeUInt64**(`i`): `void`

Defined in: [ts\_src/bufferutils.ts:79](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/bufferutils.ts#L79)

#### Parameters

##### i

`number` | `bigint`

#### Returns

`void`

***

### writeUInt8()

> **writeUInt8**(`i`): `void`

Defined in: [ts\_src/bufferutils.ts:63](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/bufferutils.ts#L63)

#### Parameters

##### i

`number`

#### Returns

`void`

***

### writeVarInt()

> **writeVarInt**(`i`): `void`

Defined in: [ts\_src/bufferutils.ts:83](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/bufferutils.ts#L83)

#### Parameters

##### i

`number`

#### Returns

`void`

***

### writeVarSlice()

> **writeVarSlice**(`slice`): `void`

Defined in: [ts\_src/bufferutils.ts:96](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/bufferutils.ts#L96)

#### Parameters

##### slice

`Uint8Array`

#### Returns

`void`

***

### writeVector()

> **writeVector**(`vector`): `void`

Defined in: [ts\_src/bufferutils.ts:101](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/bufferutils.ts#L101)

#### Parameters

##### vector

`Uint8Array`[]

#### Returns

`void`

***

### withCapacity()

> `static` **withCapacity**(`size`): [`BufferWriter`](BufferWriter.md)

Defined in: [ts\_src/bufferutils.ts:49](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/bufferutils.ts#L49)

#### Parameters

##### size

`number`

#### Returns

[`BufferWriter`](BufferWriter.md)
