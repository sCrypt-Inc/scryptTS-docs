[**scrypt-ts**](../README.md)

***

[scrypt-ts](../globals.md) / reverseByteString

# Function: reverseByteString()

> **reverseByteString**(`b`, `size`): [`ByteString`](../type-aliases/ByteString.md)

Defined in: scrypt-ts/dist/smart-contract/builtins/functions.d.ts:48

Returns reversed bytes of b, which is of size bytes. Note size must be a compiled-time constant.
It is often useful when converting a number between little-endian and big-endian.

## Parameters

### b

[`ByteString`](../type-aliases/ByteString.md)

a ByteString to be reversed

### size

`bigint`

the size of the ByteString.

## Returns

[`ByteString`](../type-aliases/ByteString.md)

reversed ByteString.
