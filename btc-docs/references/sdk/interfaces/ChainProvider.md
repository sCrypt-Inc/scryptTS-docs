[**bitcoinjs-lib v0.2.9-beta.16**](../README.md)

***

[bitcoinjs-lib](../README.md) / ChainProvider

# Interface: ChainProvider

Defined in: [packages/scrypt-ts-btc/src/providers/chainProvider.ts:7](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/providers/chainProvider.ts#L7)

a provider for interacting with the blockchain

## Methods

### broadcast()

> **broadcast**(`txHex`): `Promise`\<`string`\>

Defined in: [packages/scrypt-ts-btc/src/providers/chainProvider.ts:13](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/providers/chainProvider.ts#L13)

Send a raw transaction hex string.

#### Parameters

##### txHex

`string`

#### Returns

`Promise`\<`string`\>

A promise which resolves to the hash of the transaction that has been sent.

***

### getConfirmations()

> **getConfirmations**(`txId`): `Promise`\<`number`\>

Defined in: [packages/scrypt-ts-btc/src/providers/chainProvider.ts:24](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/providers/chainProvider.ts#L24)

Query a transaction confirmation

#### Parameters

##### txId

`string`

#### Returns

`Promise`\<`number`\>

***

### getFeeRate()

> **getFeeRate**(): `Promise`\<`number`\>

Defined in: [packages/scrypt-ts-btc/src/providers/chainProvider.ts:29](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/providers/chainProvider.ts#L29)

Query current network fee

#### Returns

`Promise`\<`number`\>

***

### getRawTransaction()

> **getRawTransaction**(`txId`): `Promise`\<`string`\>

Defined in: [packages/scrypt-ts-btc/src/providers/chainProvider.ts:19](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/providers/chainProvider.ts#L19)

Get a transaction raw hex from the network.

#### Parameters

##### txId

`string`

#### Returns

`Promise`\<`string`\>

The query result with the transaction raw hex.
