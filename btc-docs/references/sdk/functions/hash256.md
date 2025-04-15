[**bitcoinjs-lib v0.2.9-beta.16**](../README.md)

***

[bitcoinjs-lib](../README.md) / hash256

# Function: hash256()

> **hash256**(`a`): [`Sha256`](../type-aliases/Sha256.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/fns/hashes.ts:50](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/fns/hashes.ts#L50)

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

[`Sha256`](../type-aliases/Sha256.md)

The hash in the form of a string.

## Onchain
