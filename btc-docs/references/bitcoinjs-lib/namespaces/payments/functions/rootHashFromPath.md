[**bitcoinjs-lib v1.0.7**](../../../README.md)

***

[bitcoinjs-lib](../../../README.md) / [payments](../README.md) / rootHashFromPath

# Function: rootHashFromPath()

> **rootHashFromPath**(`controlBlock`, `leafHash`): `Uint8Array`

Defined in: [ts\_src/payments/bip341.ts:44](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/payments/bip341.ts#L44)

Calculates the root hash from a given control block and leaf hash.

## Parameters

### controlBlock

`Uint8Array`

The control block buffer.

### leafHash

`Uint8Array`

The leaf hash buffer.

## Returns

`Uint8Array`

The root hash buffer.

## Throws

If the control block length is less than 33.
