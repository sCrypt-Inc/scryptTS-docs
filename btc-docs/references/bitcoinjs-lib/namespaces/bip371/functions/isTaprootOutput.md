[**bitcoinjs-lib v1.0.7**](../../../README.md)

***

[bitcoinjs-lib](../../../README.md) / [bip371](../README.md) / isTaprootOutput

# Function: isTaprootOutput()

> **isTaprootOutput**(`output`, `script`?): `boolean`

Defined in: [ts\_src/psbt/bip371.ts:110](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/psbt/bip371.ts#L110)

Checks if a PSBT output is a taproot output.

## Parameters

### output

`PsbtOutput`

The PSBT output to check.

### script?

`Uint8Array`

The script to check. Optional.

## Returns

`boolean`

True if the output is a taproot output, false otherwise.
