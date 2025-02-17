[**bitcoinjs-lib v1.0.7**](../../../README.md)

***

[bitcoinjs-lib](../../../README.md) / [bip371](../README.md) / checkTaprootInputFields

# Function: checkTaprootInputFields()

> **checkTaprootInputFields**(`inputData`, `newInputData`, `action`): `void`

Defined in: [ts\_src/psbt/bip371.ts:132](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/psbt/bip371.ts#L132)

Checks the taproot input fields for consistency.

## Parameters

### inputData

`PsbtInput`

The original input data.

### newInputData

`PsbtInput`

The new input data.

### action

`string`

The action being performed.

## Returns

`void`

## Throws

Throws an error if the input fields are inconsistent.
