[**scrypt-ts**](../README.md)

***

[scrypt-ts](../globals.md) / VarIntWriter

# Class: VarIntWriter

Defined in: scrypt-ts/dist/smart-contract/builtins/functions.d.ts:1112

A writer that serializes `ByteString`, `boolean`, `bigint`

## Constructors

### new VarIntWriter()

> **new VarIntWriter**(): [`VarIntWriter`](VarIntWriter.md)

#### Returns

[`VarIntWriter`](VarIntWriter.md)

## Methods

### writeBool()

> `static` **writeBool**(`x`): [`ByteString`](../type-aliases/ByteString.md)

Defined in: scrypt-ts/dist/smart-contract/builtins/functions.d.ts:1124

serializes `boolean` with fixed 1 byte

#### Parameters

##### x

`boolean`

a boolean

#### Returns

[`ByteString`](../type-aliases/ByteString.md)

serialized `ByteString`

***

### writeBytes()

> `static` **writeBytes**(`buf`): [`ByteString`](../type-aliases/ByteString.md)

Defined in: scrypt-ts/dist/smart-contract/builtins/functions.d.ts:1118

serializes `ByteString` with `VarInt` encoding

#### Parameters

##### buf

[`ByteString`](../type-aliases/ByteString.md)

a `ByteString`

#### Returns

[`ByteString`](../type-aliases/ByteString.md)

serialized `ByteString`

***

### writeInt()

> `static` **writeInt**(`x`): [`ByteString`](../type-aliases/ByteString.md)

Defined in: scrypt-ts/dist/smart-contract/builtins/functions.d.ts:1130

serializes `bigint` with `VarInt` encoding

#### Parameters

##### x

`bigint`

a boolean

#### Returns

[`ByteString`](../type-aliases/ByteString.md)

serialized `ByteString`
