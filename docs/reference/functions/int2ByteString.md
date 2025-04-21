[**scrypt-ts**](../README.md)

***

[scrypt-ts](../globals.md) / int2ByteString

# Function: int2ByteString()

> **int2ByteString**(`n`, `size`?): [`ByteString`](../type-aliases/ByteString.md)

Defined in: scrypt-ts/dist/smart-contract/builtins/functions.d.ts:27

bigint can be converted to string with int2ByteString.
If `size` is not passed, the number `n` is converted to a ByteString with as few bytes as possible.
Otherwise, converts the number `n` to a ByteString of the specified size, including the sign bit. Fails if the number cannot be accommodated.

## Parameters

### n

`bigint`

a number being converts

### size?

`bigint`

the size of the ByteString

## Returns

[`ByteString`](../type-aliases/ByteString.md)
