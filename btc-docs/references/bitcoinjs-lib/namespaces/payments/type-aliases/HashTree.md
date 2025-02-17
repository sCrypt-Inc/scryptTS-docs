[**bitcoinjs-lib v1.0.7**](../../../README.md)

***

[bitcoinjs-lib](../../../README.md) / [payments](../README.md) / HashTree

# Type Alias: HashTree

> **HashTree**: `HashLeaf` \| `HashBranch`

Defined in: [ts\_src/payments/bip341.ts:35](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/payments/bip341.ts#L35)

Binary tree representing leaf, branch, and root node hashes of a Taptree.
Each node contains a hash, and potentially left and right branch hashes.
This tree is used for 2 purposes: Providing the root hash for tweaking,
and calculating merkle inclusion proofs when constructing a control block.
