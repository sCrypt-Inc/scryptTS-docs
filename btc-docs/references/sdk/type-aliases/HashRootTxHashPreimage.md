[**bitcoinjs-lib v0.2.9-beta.16**](../README.md)

***

[bitcoinjs-lib](../README.md) / HashRootTxHashPreimage

# Type Alias: HashRootTxHashPreimage

> **HashRootTxHashPreimage**: `object`

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/structs.ts:223](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/structs.ts#L223)

Same as `CompactTxHashPreimage`, but can more easily parse out the HashRoot contained in the transaction

## Type declaration

### hashRoot

> **hashRoot**: [`ByteString`](ByteString.md)

### inputCountVal

> **inputCountVal**: [`Int32`](Int32.md)

### inputList

> **inputList**: [`FixedArray`](FixedArray.md)\<[`ByteString`](ByteString.md), *typeof* `TX_INPUT_COUNT_MAX`\>

### outputCountVal

> **outputCountVal**: [`Int32`](Int32.md)

### suffixList

> **suffixList**: [`FixedArray`](FixedArray.md)\<[`ByteString`](ByteString.md), *typeof* `TX_HASH_PREIMAGE2_SUFFIX_ARRAY_SIZE`\>

### version

> **version**: [`ByteString`](ByteString.md)

## Onchain
