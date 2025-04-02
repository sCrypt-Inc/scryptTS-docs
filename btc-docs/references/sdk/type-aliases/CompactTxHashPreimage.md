[**bitcoinjs-lib v0.2.9-beta.16**](../README.md)

***

[bitcoinjs-lib](../README.md) / CompactTxHashPreimage

# Type Alias: CompactTxHashPreimage

> **CompactTxHashPreimage**: `object`

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/structs.ts:202](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/structs.ts#L202)

Same as `TxHashPreimage`, but more compact because it incorporates data about the inputs included in the transaction

## Type declaration

### inputCountVal

> **inputCountVal**: [`Int32`](Int32.md)

### inputList

> **inputList**: [`FixedArray`](FixedArray.md)\<[`ByteString`](ByteString.md), *typeof* `TX_INPUT_COUNT_MAX`\>

### locktime

> **locktime**: [`ByteString`](ByteString.md)

### outputCountVal

> **outputCountVal**: [`Int32`](Int32.md)

### outputSatoshisList

> **outputSatoshisList**: [`FixedArray`](FixedArray.md)\<[`ByteString`](ByteString.md), *typeof* `TX_OUTPUT_COUNT_MAX`\>

### outputScriptList

> **outputScriptList**: [`FixedArray`](FixedArray.md)\<[`ByteString`](ByteString.md), *typeof* `TX_OUTPUT_COUNT_MAX`\>

### version

> **version**: [`ByteString`](ByteString.md)

## Onchain
