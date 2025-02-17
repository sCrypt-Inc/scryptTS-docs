[**bitcoinjs-lib v1.0.7**](../../../README.md)

***

[bitcoinjs-lib](../../../README.md) / [payments](../README.md) / tapTweakHash

# Function: tapTweakHash()

> **tapTweakHash**(`pubKey`, `h`): `Uint8Array`

Defined in: [ts\_src/payments/bip341.ts:133](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/payments/bip341.ts#L133)

Computes the taproot tweak hash for a given public key and optional hash.
If a hash is provided, the public key and hash are concatenated before computing the hash.
If no hash is provided, only the public key is used to compute the hash.

## Parameters

### pubKey

`Uint8Array`

The public key buffer.

### h

The optional hash buffer.

`undefined` | `Uint8Array`

## Returns

`Uint8Array`

The taproot tweak hash.
