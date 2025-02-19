[**bitcoinjs-lib v1.0.7**](../../../README.md)

***

[bitcoinjs-lib](../../../README.md) / [payments](../README.md) / tweakKey

# Function: tweakKey()

> **tweakKey**(`pubKey`, `h`): `null` \| `TweakedPublicKey`

Defined in: [ts\_src/payments/bip341.ts:149](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/payments/bip341.ts#L149)

Tweak a public key with a given tweak hash.

## Parameters

### pubKey

`Uint8Array`

The public key to be tweaked.

### h

The tweak hash.

`undefined` | `Uint8Array`

## Returns

`null` \| `TweakedPublicKey`

The tweaked public key or null if the input is invalid.
