[**bitcoinjs-lib v1.0.7**](../../../README.md)

***

[bitcoinjs-lib](../../../README.md) / [address](../README.md) / fromBech32

# Function: fromBech32()

> **fromBech32**(`address`): [`Bech32Result`](../interfaces/Bech32Result.md)

Defined in: [ts\_src/address.ts:107](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/address.ts#L107)

Converts a Bech32 or Bech32m encoded address to its corresponding data representation.

## Parameters

### address

`string`

The Bech32 or Bech32m encoded address.

## Returns

[`Bech32Result`](../interfaces/Bech32Result.md)

An object containing the version, prefix, and data of the address.

## Throws

If the address uses the wrong encoding.
