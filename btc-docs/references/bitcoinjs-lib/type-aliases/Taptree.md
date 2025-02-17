[**bitcoinjs-lib v1.0.7**](../README.md)

***

[bitcoinjs-lib](../README.md) / Taptree

# Type Alias: Taptree

> **Taptree**: \[[`Taptree`](Taptree.md) \| [`Tapleaf`](../namespaces/types/interfaces/Tapleaf.md), [`Taptree`](Taptree.md) \| [`Tapleaf`](../namespaces/types/interfaces/Tapleaf.md)\] \| [`Tapleaf`](../namespaces/types/interfaces/Tapleaf.md)

Defined in: [ts\_src/types.ts:74](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/types.ts#L74)

Binary tree repsenting script path spends for a Taproot input.
Each node is either a single Tapleaf, or a pair of Tapleaf | Taptree.
The tree has no balancing requirements.
