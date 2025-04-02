[**bitcoinjs-lib v0.2.9-beta.16**](../README.md)

***

[bitcoinjs-lib](../README.md) / sha1

# Function: sha1()

> **sha1**(`a`): [`Sha1`](../type-aliases/Sha1.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/fns/hashes.ts:64](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/fns/hashes.ts#L64)

A SHA or SHA1 hash, which is always 160 bits or 20 bytes long.

See:
https://en.wikipedia.org/wiki/SHA-1

## Parameters

### a

[`ByteString`](../type-aliases/ByteString.md)

ByteString Data, a.k.a. pre-image, which can be any size.

## Returns

[`Sha1`](../type-aliases/Sha1.md)

The hash in the form of a string.

## Onchain
