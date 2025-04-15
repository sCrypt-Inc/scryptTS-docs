[**bitcoinjs-lib v0.2.9-beta.16**](../README.md)

***

[bitcoinjs-lib](../README.md) / MempoolProvider

# Class: MempoolProvider

Defined in: [packages/scrypt-ts-btc/src/providers/mempoolProvider.ts:12](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/providers/mempoolProvider.ts#L12)

The MempoolProvider is backed by [Mempool][https://mempool.fractalbitcoin.io](https://mempool.fractalbitcoin.io)

## Implements

- [`ChainProvider`](../interfaces/ChainProvider.md)
- [`UtxoProvider`](../interfaces/UtxoProvider.md)

## Constructors

### new MempoolProvider()

> **new MempoolProvider**(`network`): [`MempoolProvider`](MempoolProvider.md)

Defined in: [packages/scrypt-ts-btc/src/providers/mempoolProvider.ts:18](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/providers/mempoolProvider.ts#L18)

#### Parameters

##### network

[`SupportedNetwork`](../type-aliases/SupportedNetwork.md)

#### Returns

[`MempoolProvider`](MempoolProvider.md)

## Properties

### network

> `readonly` **network**: [`SupportedNetwork`](../type-aliases/SupportedNetwork.md)

Defined in: [packages/scrypt-ts-btc/src/providers/mempoolProvider.ts:18](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/providers/mempoolProvider.ts#L18)

## Methods

### addNewUTXO()

> **addNewUTXO**(`utxo`): `void`

Defined in: [packages/scrypt-ts-btc/src/providers/mempoolProvider.ts:73](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/providers/mempoolProvider.ts#L73)

Add a UTXO to the provider

#### Parameters

##### utxo

`UTXO`

#### Returns

`void`

#### Implementation of

[`UtxoProvider`](../interfaces/UtxoProvider.md).[`addNewUTXO`](../interfaces/UtxoProvider.md#addnewutxo)

***

### broadcast()

> **broadcast**(`txHex`): `Promise`\<`string`\>

Defined in: [packages/scrypt-ts-btc/src/providers/mempoolProvider.ts:180](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/providers/mempoolProvider.ts#L180)

Send a raw transaction hex string.

#### Parameters

##### txHex

`string`

#### Returns

`Promise`\<`string`\>

A promise which resolves to the hash of the transaction that has been sent.

#### Implementation of

[`ChainProvider`](../interfaces/ChainProvider.md).[`broadcast`](../interfaces/ChainProvider.md#broadcast)

***

### getConfirmations()

> **getConfirmations**(`txId`): `Promise`\<`number`\>

Defined in: [packages/scrypt-ts-btc/src/providers/mempoolProvider.ts:95](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/providers/mempoolProvider.ts#L95)

Query a transaction confirmation

#### Parameters

##### txId

`string`

#### Returns

`Promise`\<`number`\>

#### Implementation of

[`ChainProvider`](../interfaces/ChainProvider.md).[`getConfirmations`](../interfaces/ChainProvider.md#getconfirmations)

***

### getFeeRate()

> **getFeeRate**(): `Promise`\<`number`\>

Defined in: [packages/scrypt-ts-btc/src/providers/mempoolProvider.ts:77](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/providers/mempoolProvider.ts#L77)

Query current network fee

#### Returns

`Promise`\<`number`\>

#### Implementation of

[`ChainProvider`](../interfaces/ChainProvider.md).[`getFeeRate`](../interfaces/ChainProvider.md#getfeerate)

***

### getRawTransaction()

> **getRawTransaction**(`txId`): `Promise`\<`string`\>

Defined in: [packages/scrypt-ts-btc/src/providers/mempoolProvider.ts:189](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/providers/mempoolProvider.ts#L189)

Get a transaction raw hex from the network.

#### Parameters

##### txId

`string`

#### Returns

`Promise`\<`string`\>

The query result with the transaction raw hex.

#### Implementation of

[`ChainProvider`](../interfaces/ChainProvider.md).[`getRawTransaction`](../interfaces/ChainProvider.md#getrawtransaction)

***

### getUtxos()

> **getUtxos**(`address`, `_options`?): `Promise`\<`UTXO`[]\>

Defined in: [packages/scrypt-ts-btc/src/providers/mempoolProvider.ts:19](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/providers/mempoolProvider.ts#L19)

Get a list of the UTXOs.

#### Parameters

##### address

`string`

The address of the returned UTXOs belongs to.

##### \_options?

[`UtxoQueryOptions`](../interfaces/UtxoQueryOptions.md)

#### Returns

`Promise`\<`UTXO`[]\>

A promise which resolves to a list of UTXO for the query options.

#### Implementation of

[`UtxoProvider`](../interfaces/UtxoProvider.md).[`getUtxos`](../interfaces/UtxoProvider.md#getutxos)

***

### markSpent()

> **markSpent**(`txId`, `vout`): `void`

Defined in: [packages/scrypt-ts-btc/src/providers/mempoolProvider.ts:66](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/providers/mempoolProvider.ts#L66)

Mark an outpoint as spent

#### Parameters

##### txId

`string`

##### vout

`number`

#### Returns

`void`

#### Implementation of

[`UtxoProvider`](../interfaces/UtxoProvider.md).[`markSpent`](../interfaces/UtxoProvider.md#markspent)
