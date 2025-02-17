[**bitcoinjs-lib v1.0.7**](../README.md)

***

[bitcoinjs-lib](../README.md) / tapTreeFromList

# Function: tapTreeFromList()

> **tapTreeFromList**(`leaves`): [`Taptree`](../type-aliases/Taptree.md)

Defined in: [ts\_src/psbt/bip371.ts:243](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/psbt/bip371.ts#L243)

Convert a BIP371 TapLeaf list to a TapTree (binary).

## Parameters

### leaves

`TapLeaf`[] = `[]`

a list of tapleaves where each element of the list is (according to BIP371):
One or more tuples representing the depth, leaf version, and script for a leaf in the Taproot tree,
allowing the entire tree to be reconstructed. The tuples must be in depth first search order so that
the tree is correctly reconstructed.

## Returns

[`Taptree`](../type-aliases/Taptree.md)

the corresponding taptree, or throws an exception if the tree cannot be reconstructed
