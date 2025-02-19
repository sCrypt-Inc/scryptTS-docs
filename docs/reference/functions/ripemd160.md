[**scrypt-ts**](../README.md)

***

[scrypt-ts](../globals.md) / ripemd160

# Function: ripemd160()

> **ripemd160**(`a`): `Ripemd160`

Defined in: scrypt-ts/dist/smart-contract/builtins/functions.d.ts:85

A RIPEMD160 hash, which is always 160 bits or 20 bytes long.
See:
https://en.wikipedia.org/wiki/RIPEMD

## Parameters

### a

[`ByteString`](../type-aliases/ByteString.md)

ByteString Data, a.k.a. pre-image, which can be any size.

## Returns

`Ripemd160`

The hash in the form of a ByteString.
