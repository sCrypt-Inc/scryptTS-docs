[**bitcoinjs-lib v1.0.7**](../../../README.md)

***

[bitcoinjs-lib](../../../README.md) / [bip371](../README.md) / tweakInternalPubKey

# Function: tweakInternalPubKey()

> **tweakInternalPubKey**(`inputIndex`, `input`): `Uint8Array`

Defined in: [ts\_src/psbt/bip371.ts:201](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/psbt/bip371.ts#L201)

Tweak the internal public key for a specific input.

## Parameters

### inputIndex

`number`

The index of the input.

### input

`PsbtInput`

The PsbtInput object representing the input.

## Returns

`Uint8Array`

The tweaked internal public key.

## Throws

Error if the tap internal key cannot be tweaked.
