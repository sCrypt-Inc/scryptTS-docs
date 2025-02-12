[**scrypt-ts**](../README.md)

***

[scrypt-ts](../globals.md) / slice

# Function: slice()

> **slice**(`byteString`, `start`, `end`?): [`ByteString`](../type-aliases/ByteString.md)

Defined in: scrypt-ts/dist/smart-contract/builtins/functions.d.ts:11

Returns a section of a ByteString.

## Parameters

### byteString

[`ByteString`](../type-aliases/ByteString.md)

The ByteString.

### start

`BigInt`

The beginning byte index of the specified portion of ByteString, included.

### end?

`BigInt`

The end byte index of the specified portion of ByteString, excluded.
 If this value is not specified, the sub-section continues to the end of ByteString.

## Returns

[`ByteString`](../type-aliases/ByteString.md)
