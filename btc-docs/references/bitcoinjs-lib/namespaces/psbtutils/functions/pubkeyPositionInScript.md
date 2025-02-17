[**bitcoinjs-lib v1.0.7**](../../../README.md)

***

[bitcoinjs-lib](../../../README.md) / [psbtutils](../README.md) / pubkeyPositionInScript

# Function: pubkeyPositionInScript()

> **pubkeyPositionInScript**(`pubkey`, `script`): `number`

Defined in: [ts\_src/psbt/psbtutils.ts:75](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/psbt/psbtutils.ts#L75)

Finds the position of a public key in a script.

## Parameters

### pubkey

`Uint8Array`

The public key to search for.

### script

`Uint8Array`

The script to search in.

## Returns

`number`

The index of the public key in the script, or -1 if not found.

## Throws

If there is an unknown script error.
