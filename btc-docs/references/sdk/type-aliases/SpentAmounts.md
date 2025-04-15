[**bitcoinjs-lib v0.2.9-beta.16**](../README.md)

***

[bitcoinjs-lib](../README.md) / SpentAmounts

# Type Alias: SpentAmounts

> **SpentAmounts**: [`FixedArray`](FixedArray.md)\<[`ByteString`](ByteString.md), *typeof* `TX_INPUT_COUNT_MAX`\>

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/structs.ts:175](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/structs.ts#L175)

The context of the spent amounts.
spentAmounts is an array of the spent amounts, that is the amount of the previous output. [spentAmount1, spentAmount2, ...], length is MAX_INPUT. The rest is empty ByteString if inputs are less than MAX_INPUT.
each non-empty element is a ByteString of 8 bytes, which is the amount of the previous output.

## Onchain
