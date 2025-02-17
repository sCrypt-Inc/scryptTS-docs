[**bitcoinjs-lib v1.0.7**](../../../README.md)

***

[bitcoinjs-lib](../../../README.md) / [bip371](../README.md) / tapScriptFinalizer

# Function: tapScriptFinalizer()

> **tapScriptFinalizer**(`inputIndex`, `input`, `tapLeafHashToFinalize`?): `object`

Defined in: [ts\_src/psbt/bip371.ts:47](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/psbt/bip371.ts#L47)

Default tapscript finalizer. It searches for the `tapLeafHashToFinalize` if provided.
Otherwise it will search for the tapleaf that has at least one signature and has the shortest path.

## Parameters

### inputIndex

`number`

the position of the PSBT input.

### input

`PsbtInput`

the PSBT input.

### tapLeafHashToFinalize?

`Uint8Array`

optional, if provided the finalizer will search for a tapleaf that has this hash
                             and will try to build the finalScriptWitness.

## Returns

`object`

the finalScriptWitness or throws an exception if no tapleaf found.

### finalScriptWitness

> **finalScriptWitness**: `undefined` \| `Uint8Array`
