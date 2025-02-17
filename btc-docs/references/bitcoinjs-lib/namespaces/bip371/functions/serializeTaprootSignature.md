[**bitcoinjs-lib v1.0.7**](../../../README.md)

***

[bitcoinjs-lib](../../../README.md) / [bip371](../README.md) / serializeTaprootSignature

# Function: serializeTaprootSignature()

> **serializeTaprootSignature**(`sig`, `sighashType`?): `Uint8Array`

Defined in: [ts\_src/psbt/bip371.ts:75](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/psbt/bip371.ts#L75)

Serializes a taproot signature.

## Parameters

### sig

`Uint8Array`

The signature to serialize.

### sighashType?

`number`

The sighash type. Optional.

## Returns

`Uint8Array`

The serialized taproot signature.
