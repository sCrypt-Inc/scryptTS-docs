[**scrypt-ts**](../README.md)

***

[scrypt-ts](../globals.md) / hash160

# Function: hash160()

> **hash160**(`a`): `Ripemd160`

Defined in: scrypt-ts/dist/smart-contract/builtins/functions.d.ts:117

A RIPEMD160 hash of a SHA256 hash, which is always 160 bits or 20 bytes long.
This value is commonly used inside Bitcoin, particularly for Bitcoin
addresses.

See:
https://en.wikipedia.org/wiki/RIPEMD

## Parameters

### a

[`ByteString`](../type-aliases/ByteString.md)

ByteString Data, a.k.a. pre-image, which can be any size.

## Returns

`Ripemd160`

The hash in the form of a string.
