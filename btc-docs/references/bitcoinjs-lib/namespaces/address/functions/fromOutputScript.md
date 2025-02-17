[**bitcoinjs-lib v1.0.7**](../../../README.md)

***

[bitcoinjs-lib](../../../README.md) / [address](../README.md) / fromOutputScript

# Function: fromOutputScript()

> **fromOutputScript**(`output`, `network`?): `string`

Defined in: [ts\_src/address.ts:175](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/address.ts#L175)

Converts an output script to a Bitcoin address.

## Parameters

### output

`Uint8Array`

The output script as a Buffer.

### network?

[`Network`](../../networks/interfaces/Network.md)

The Bitcoin network (optional).

## Returns

`string`

The Bitcoin address corresponding to the output script.

## Throws

If the output script has no matching address.
