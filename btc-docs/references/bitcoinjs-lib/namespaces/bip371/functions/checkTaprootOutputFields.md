[**bitcoinjs-lib v1.0.7**](../../../README.md)

***

[bitcoinjs-lib](../../../README.md) / [bip371](../README.md) / checkTaprootOutputFields

# Function: checkTaprootOutputFields()

> **checkTaprootOutputFields**(`outputData`, `newOutputData`, `action`): `void`

Defined in: [ts\_src/psbt/bip371.ts:148](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/psbt/bip371.ts#L148)

Checks the taproot output fields for consistency.

## Parameters

### outputData

`PsbtOutput`

The original output data.

### newOutputData

`PsbtOutput`

The new output data.

### action

`string`

The action being performed.

## Returns

`void`

## Throws

Throws an error if the output fields are inconsistent.
