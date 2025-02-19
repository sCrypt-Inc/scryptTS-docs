[**bitcoinjs-lib v1.0.7**](../../../README.md)

***

[bitcoinjs-lib](../../../README.md) / [address](../README.md) / toOutputScript

# Function: toOutputScript()

> **toOutputScript**(`address`, `network`?): `Uint8Array`

Defined in: [ts\_src/address.ts:211](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/address.ts#L211)

Converts a Bitcoin address to its corresponding output script.

## Parameters

### address

`string`

The Bitcoin address to convert.

### network?

[`Network`](../../networks/interfaces/Network.md)

The Bitcoin network to use. Defaults to the Bitcoin network.

## Returns

`Uint8Array`

The corresponding output script as a Buffer.

## Throws

If the address has an invalid prefix or no matching script.
