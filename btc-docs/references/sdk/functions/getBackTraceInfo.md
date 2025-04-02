[**bitcoinjs-lib v0.2.9-beta.16**](../README.md)

***

[bitcoinjs-lib](../README.md) / getBackTraceInfo

# Function: getBackTraceInfo()

> **getBackTraceInfo**(`prevTxHex`, `prevPrevTxHex`, `prevTxInputIndex`): `object`

Defined in: [packages/scrypt-ts-btc/src/utils/proof.ts:236](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/utils/proof.ts#L236)

## Parameters

### prevTxHex

`string`

### prevPrevTxHex

`string`

### prevTxInputIndex

`number`

## Returns

`object`

### prevPrevTxPreimage

> **prevPrevTxPreimage**: [`CompactTxHashPreimage`](../type-aliases/CompactTxHashPreimage.md) = `prevPrevCompactTxHashPreimage`

### prevTxInput

> **prevTxInput**: [`TxIn`](../type-aliases/TxIn.md)

### prevTxInputIndexVal

> **prevTxInputIndexVal**: `bigint`

### prevTxPreimage

> **prevTxPreimage**: [`HashRootTxHashPreimage`](../type-aliases/HashRootTxHashPreimage.md) = `hashRootTxHashPreimage`
