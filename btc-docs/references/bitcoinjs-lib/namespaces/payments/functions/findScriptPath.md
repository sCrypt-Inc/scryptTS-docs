[**bitcoinjs-lib v1.0.7**](../../../README.md)

***

[bitcoinjs-lib](../../../README.md) / [payments](../README.md) / findScriptPath

# Function: findScriptPath()

> **findScriptPath**(`node`, `hash`): `undefined` \| `Uint8Array`[]

Defined in: [ts\_src/payments/bip341.ts:94](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/payments/bip341.ts#L94)

Given a HashTree, finds the path from a particular hash to the root.

## Parameters

### node

[`HashTree`](../type-aliases/HashTree.md)

the root of the tree

### hash

`Uint8Array`

the hash to search for

## Returns

`undefined` \| `Uint8Array`[]

- array of sibling hashes, from leaf (inclusive) to root
(exclusive) needed to prove inclusion of the specified hash. undefined if no
path is found
