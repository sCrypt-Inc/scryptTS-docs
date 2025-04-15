[**bitcoinjs-lib v0.2.9-beta.16**](../README.md)

***

[bitcoinjs-lib](../README.md) / SpentScripts

# Type Alias: SpentScripts

> **SpentScripts**: [`FixedArray`](FixedArray.md)\<[`ByteString`](ByteString.md), *typeof* `TX_INPUT_COUNT_MAX`\>

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/structs.ts:166](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/structs.ts#L166)

The context of the spent scripts.
spentScripts is an array of the spent scripts, that is the script of the previous output. [spentScript1, spentScript2, ...], length is MAX_INPUT. The rest is empty ByteString if inputs are less than MAX_INPUT.
each non-empty element is a ByteString, which is the script of the previous output.

## Onchain
