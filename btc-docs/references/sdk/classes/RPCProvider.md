[**bitcoinjs-lib v0.2.9-beta.16**](../README.md)

***

[bitcoinjs-lib](../README.md) / RPCProvider

# Class: RPCProvider

Defined in: [packages/scrypt-ts-btc/src/providers/rpcProvider.ts:12](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/providers/rpcProvider.ts#L12)

The RPCProvider is backed by [bitcoin RPC][https://developer.bitcoin.org/reference/rpc/](https://developer.bitcoin.org/reference/rpc/)

## Implements

- [`ChainProvider`](../interfaces/ChainProvider.md)
- [`UtxoProvider`](../interfaces/UtxoProvider.md)

## Constructors

### new RPCProvider()

> **new RPCProvider**(`url`, `walletName`, `username`, `password`): [`RPCProvider`](RPCProvider.md)

Defined in: [packages/scrypt-ts-btc/src/providers/rpcProvider.ts:18](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/providers/rpcProvider.ts#L18)

#### Parameters

##### url

`string`

##### walletName

`string`

##### username

`string`

##### password

`string`

#### Returns

[`RPCProvider`](RPCProvider.md)

## Properties

### password

> `readonly` **password**: `string`

Defined in: [packages/scrypt-ts-btc/src/providers/rpcProvider.ts:22](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/providers/rpcProvider.ts#L22)

***

### url

> `readonly` **url**: `string`

Defined in: [packages/scrypt-ts-btc/src/providers/rpcProvider.ts:19](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/providers/rpcProvider.ts#L19)

***

### username

> `readonly` **username**: `string`

Defined in: [packages/scrypt-ts-btc/src/providers/rpcProvider.ts:21](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/providers/rpcProvider.ts#L21)

***

### walletName

> `readonly` **walletName**: `string`

Defined in: [packages/scrypt-ts-btc/src/providers/rpcProvider.ts:20](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/providers/rpcProvider.ts#L20)

## Methods

### addNewUTXO()

> **addNewUTXO**(`utxo`): `void`

Defined in: [packages/scrypt-ts-btc/src/providers/rpcProvider.ts:292](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/providers/rpcProvider.ts#L292)

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

Defined in: [packages/scrypt-ts-btc/src/providers/rpcProvider.ts:170](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/providers/rpcProvider.ts#L170)

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

Defined in: [packages/scrypt-ts-btc/src/providers/rpcProvider.ts:75](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/providers/rpcProvider.ts#L75)

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

Defined in: [packages/scrypt-ts-btc/src/providers/rpcProvider.ts:24](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/providers/rpcProvider.ts#L24)

Query current network fee

#### Returns

`Promise`\<`number`\>

#### Implementation of

[`ChainProvider`](../interfaces/ChainProvider.md).[`getFeeRate`](../interfaces/ChainProvider.md#getfeerate)

***

### getRawTransaction()

> **getRawTransaction**(`txId`): `Promise`\<`string`\>

Defined in: [packages/scrypt-ts-btc/src/providers/rpcProvider.ts:179](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/providers/rpcProvider.ts#L179)

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

### getRpcPassword()

> `protected` **getRpcPassword**(): `string`

Defined in: [packages/scrypt-ts-btc/src/providers/rpcProvider.ts:68](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/providers/rpcProvider.ts#L68)

#### Returns

`string`

***

### getRpcUrl()

> `protected` **getRpcUrl**(`walletName`): `string`

Defined in: [packages/scrypt-ts-btc/src/providers/rpcProvider.ts:71](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/providers/rpcProvider.ts#L71)

#### Parameters

##### walletName

`string`

#### Returns

`string`

***

### getRpcUser()

> `protected` **getRpcUser**(): `string`

Defined in: [packages/scrypt-ts-btc/src/providers/rpcProvider.ts:65](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/providers/rpcProvider.ts#L65)

#### Returns

`string`

***

### getUtxos()

> **getUtxos**(`address`, `_options`?): `Promise`\<`UTXO`[]\>

Defined in: [packages/scrypt-ts-btc/src/providers/rpcProvider.ts:229](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/providers/rpcProvider.ts#L229)

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

Defined in: [packages/scrypt-ts-btc/src/providers/rpcProvider.ts:285](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/providers/rpcProvider.ts#L285)

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
