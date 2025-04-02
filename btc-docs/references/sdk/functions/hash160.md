[**bitcoinjs-lib v0.2.9-beta.16**](../README.md)

***

[bitcoinjs-lib](../README.md) / hash160

# Function: hash160()

> **hash160**(`a`): [`Ripemd160`](../type-aliases/Ripemd160.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/fns/hashes.ts:20](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/fns/hashes.ts#L20)

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

[`Ripemd160`](../type-aliases/Ripemd160.md)

The hash in the form of a string.

## Onchain
