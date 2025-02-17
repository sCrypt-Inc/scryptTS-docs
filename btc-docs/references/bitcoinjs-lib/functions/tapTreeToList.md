[**bitcoinjs-lib v1.0.7**](../README.md)

***

[bitcoinjs-lib](../README.md) / tapTreeToList

# Function: tapTreeToList()

> **tapTreeToList**(`tree`): `TapLeaf`[]

Defined in: [ts\_src/psbt/bip371.ts:227](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/psbt/bip371.ts#L227)

Convert a binary tree to a BIP371 type list. Each element of the list is (according to BIP371):
One or more tuples representing the depth, leaf version, and script for a leaf in the Taproot tree,
allowing the entire tree to be reconstructed. The tuples must be in depth first search order so that
the tree is correctly reconstructed.

## Parameters

### tree

[`Taptree`](../type-aliases/Taptree.md)

the binary tap tree

## Returns

`TapLeaf`[]

a list of BIP 371 tapleaves
