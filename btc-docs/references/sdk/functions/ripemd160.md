[**bitcoinjs-lib v0.2.9-beta.16**](../README.md)

***

[bitcoinjs-lib](../README.md) / ripemd160

# Function: ripemd160()

> **ripemd160**(`a`): [`Ripemd160`](../type-aliases/Ripemd160.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/fns/hashes.ts:77](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/fns/hashes.ts#L77)

A RIPEMD160 hash, which is always 160 bits or 20 bytes long.
See:
https://en.wikipedia.org/wiki/RIPEMD

## Parameters

### a

[`ByteString`](../type-aliases/ByteString.md)

ByteString Data, a.k.a. pre-image, which can be any size.

## Returns

[`Ripemd160`](../type-aliases/Ripemd160.md)

The hash in the form of a ByteString.

## Onchain
