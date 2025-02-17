[**bitcoinjs-lib v1.0.7**](../../../README.md)

***

[bitcoinjs-lib](../../../README.md) / [payments](../README.md) / toHashTree

# Function: toHashTree()

> **toHashTree**(`scriptTree`): [`HashTree`](../type-aliases/HashTree.md)

Defined in: [ts\_src/payments/bip341.ts:71](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/payments/bip341.ts#L71)

Build a hash tree of merkle nodes from the scripts binary tree.

## Parameters

### scriptTree

[`Taptree`](../../../type-aliases/Taptree.md)

the tree of scripts to pairwise hash.

## Returns

[`HashTree`](../type-aliases/HashTree.md)
