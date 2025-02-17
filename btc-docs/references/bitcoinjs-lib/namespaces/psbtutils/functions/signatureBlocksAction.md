[**bitcoinjs-lib v1.0.7**](../../../README.md)

***

[bitcoinjs-lib](../../../README.md) / [psbtutils](../README.md) / signatureBlocksAction

# Function: signatureBlocksAction()

> **signatureBlocksAction**(`signature`, `signatureDecodeFn`, `action`): `boolean`

Defined in: [ts\_src/psbt/psbtutils.ts:133](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/psbt/psbtutils.ts#L133)

Determines if a given action is allowed for a signature block.

## Parameters

### signature

`Uint8Array`

The signature block.

### signatureDecodeFn

`SignatureDecodeFunc`

The function used to decode the signature.

### action

`string`

The action to be checked.

## Returns

`boolean`

True if the action is allowed, false otherwise.
