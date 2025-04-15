[**bitcoinjs-lib v0.2.9-beta.16**](../README.md)

***

[bitcoinjs-lib](../README.md) / Outpoint

# Type Alias: Outpoint

> **Outpoint**: `object`

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/structs.ts:14](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/structs.ts#L14)

The structure used to refer to a particular transaction output

## Type declaration

### outputIndex

> **outputIndex**: [`ByteString`](ByteString.md)

The index of the output in the transaction.

### txHash

> **txHash**: [`ByteString`](ByteString.md)

The transaction hash, which is the reverse order of bytes of the `txId`.

## Onchain
