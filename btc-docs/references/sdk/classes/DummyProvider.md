[**bitcoinjs-lib v0.2.9-beta.16**](../README.md)

***

[bitcoinjs-lib](../README.md) / DummyProvider

# Class: DummyProvider

Defined in: [packages/scrypt-ts-btc/src/providers/dummyProvider.ts:12](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/providers/dummyProvider.ts#L12)

A DummyProvider is build for test purpose only, it always returns a dummy utxo for `getUtxos` request.

## Implements

- [`ChainProvider`](../interfaces/ChainProvider.md)
- [`UtxoProvider`](../interfaces/UtxoProvider.md)

## Constructors

### new DummyProvider()

> **new DummyProvider**(): [`DummyProvider`](DummyProvider.md)

Defined in: [packages/scrypt-ts-btc/src/providers/dummyProvider.ts:18](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/providers/dummyProvider.ts#L18)

#### Returns

[`DummyProvider`](DummyProvider.md)

## Methods

### addNewUTXO()

> **addNewUTXO**(`utxo`): `void`

Defined in: [packages/scrypt-ts-btc/src/providers/dummyProvider.ts:39](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/providers/dummyProvider.ts#L39)

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

Defined in: [packages/scrypt-ts-btc/src/providers/dummyProvider.ts:49](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/providers/dummyProvider.ts#L49)

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

> **getConfirmations**(`_txId`): `Promise`\<`number`\>

Defined in: [packages/scrypt-ts-btc/src/providers/dummyProvider.ts:46](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/providers/dummyProvider.ts#L46)

Query a transaction confirmation

#### Parameters

##### \_txId

`string`

#### Returns

`Promise`\<`number`\>

#### Implementation of

[`ChainProvider`](../interfaces/ChainProvider.md).[`getConfirmations`](../interfaces/ChainProvider.md#getconfirmations)

***

### getFeeRate()

> **getFeeRate**(): `Promise`\<`number`\>

Defined in: [packages/scrypt-ts-btc/src/providers/dummyProvider.ts:43](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/providers/dummyProvider.ts#L43)

Query current network fee

#### Returns

`Promise`\<`number`\>

#### Implementation of

[`ChainProvider`](../interfaces/ChainProvider.md).[`getFeeRate`](../interfaces/ChainProvider.md#getfeerate)

***

### getRawTransaction()

> **getRawTransaction**(`txId`): `Promise`\<`string`\>

Defined in: [packages/scrypt-ts-btc/src/providers/dummyProvider.ts:55](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/providers/dummyProvider.ts#L55)

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

Defined in: [packages/scrypt-ts-btc/src/providers/dummyProvider.ts:19](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/providers/dummyProvider.ts#L19)

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

Defined in: [packages/scrypt-ts-btc/src/providers/dummyProvider.ts:32](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/providers/dummyProvider.ts#L32)

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
