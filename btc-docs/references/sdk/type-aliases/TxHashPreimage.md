[**bitcoinjs-lib v0.2.9-beta.16**](../README.md)

***

[bitcoinjs-lib](../README.md) / TxHashPreimage

# Type Alias: TxHashPreimage

> **TxHashPreimage**: `object`

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/structs.ts:183](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/structs.ts#L183)

The digest data used to calculate the Traditional Transaction ID (txid) consists of the transaction's
core components (inputs, outputs) without the witness information.

## Type declaration

### inputCount

> **inputCount**: [`ByteString`](ByteString.md)

### inputPrevOutputIndexList

> **inputPrevOutputIndexList**: [`FixedArray`](FixedArray.md)\<[`ByteString`](ByteString.md), *typeof* `TX_INPUT_COUNT_MAX`\>

### inputPrevTxHashList

> **inputPrevTxHashList**: [`FixedArray`](FixedArray.md)\<[`ByteString`](ByteString.md), *typeof* `TX_INPUT_COUNT_MAX`\>

### inputScriptList

> **inputScriptList**: [`FixedArray`](FixedArray.md)\<[`ByteString`](ByteString.md), *typeof* `TX_INPUT_COUNT_MAX`\>

### inputSequenceList

> **inputSequenceList**: [`FixedArray`](FixedArray.md)\<[`ByteString`](ByteString.md), *typeof* `TX_INPUT_COUNT_MAX`\>

### locktime

> **locktime**: [`ByteString`](ByteString.md)

### outputCount

> **outputCount**: [`ByteString`](ByteString.md)

### outputSatoshisList

> **outputSatoshisList**: [`FixedArray`](FixedArray.md)\<[`ByteString`](ByteString.md), *typeof* `TX_OUTPUT_COUNT_MAX`\>

### outputScriptLenList

> **outputScriptLenList**: [`FixedArray`](FixedArray.md)\<[`ByteString`](ByteString.md), *typeof* `TX_OUTPUT_COUNT_MAX`\>

### outputScriptList

> **outputScriptList**: [`FixedArray`](FixedArray.md)\<[`ByteString`](ByteString.md), *typeof* `TX_OUTPUT_COUNT_MAX`\>

### version

> **version**: [`ByteString`](ByteString.md)

## Onchain
