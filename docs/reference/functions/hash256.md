[**scrypt-ts**](../README.md)

***

[scrypt-ts](../globals.md) / hash256

# Function: hash256()

> **hash256**(`a`): `Sha256`

Defined in: scrypt-ts/dist/smart-contract/builtins/functions.d.ts:129

A double SHA256 hash, which is always 256 bits or 32 bytes bytes long. This
hash function is commonly used inside Bitcoin, particularly for the hash of a
block and the hash of a transaction.

See:
https://www.movable-type.co.uk/scripts/sha256.html

## Parameters

### a

[`ByteString`](../type-aliases/ByteString.md)

ByteString data, a.k.a. pre-image, which can be any size.

## Returns

`Sha256`

The hash in the form of a string.
