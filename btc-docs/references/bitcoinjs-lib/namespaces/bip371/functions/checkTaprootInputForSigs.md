[**bitcoinjs-lib v1.0.7**](../../../README.md)

***

[bitcoinjs-lib](../../../README.md) / [bip371](../README.md) / checkTaprootInputForSigs

# Function: checkTaprootInputForSigs()

> **checkTaprootInputForSigs**(`input`, `action`): `boolean`

Defined in: [ts\_src/psbt/bip371.ts:259](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/psbt/bip371.ts#L259)

Checks the taproot input for signatures.

## Parameters

### input

`PsbtInput`

The PSBT input to check.

### action

`string`

The action being performed.

## Returns

`boolean`

True if the input has taproot signatures, false otherwise.
