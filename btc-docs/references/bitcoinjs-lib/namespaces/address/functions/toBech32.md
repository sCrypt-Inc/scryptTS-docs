[**bitcoinjs-lib v1.0.7**](../../../README.md)

***

[bitcoinjs-lib](../../../README.md) / [address](../README.md) / toBech32

# Function: toBech32()

> **toBech32**(`data`, `version`, `prefix`): `string`

Defined in: [ts\_src/address.ts:155](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/address.ts#L155)

Converts a buffer to a Bech32 or Bech32m encoded string.

## Parameters

### data

`Uint8Array`

The buffer to be encoded.

### version

`number`

The version number to be used in the encoding.

### prefix

`string`

The prefix string to be used in the encoding.

## Returns

`string`

The Bech32 or Bech32m encoded string.
