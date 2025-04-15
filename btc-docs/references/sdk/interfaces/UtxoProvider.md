[**bitcoinjs-lib v0.2.9-beta.16**](../README.md)

***

[bitcoinjs-lib](../README.md) / UtxoProvider

# Interface: UtxoProvider

Defined in: [packages/scrypt-ts-btc/src/providers/utxoProvider.ts:24](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/providers/utxoProvider.ts#L24)

a Provider used to query UTXO related to the address

## Methods

### addNewUTXO()

> **addNewUTXO**(`utxo`): `void`

Defined in: [packages/scrypt-ts-btc/src/providers/utxoProvider.ts:43](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/providers/utxoProvider.ts#L43)

Add a UTXO to the provider

#### Parameters

##### utxo

`UTXO`

#### Returns

`void`

***

### getUtxos()

> **getUtxos**(`address`, `options`?): `Promise`\<`ExtUtxo`[]\>

Defined in: [packages/scrypt-ts-btc/src/providers/utxoProvider.ts:31](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/providers/utxoProvider.ts#L31)

Get a list of the UTXOs.

#### Parameters

##### address

`string`

The address of the returned UTXOs belongs to.

##### options?

[`UtxoQueryOptions`](UtxoQueryOptions.md)

The optional query conditions, see details in `UtxoQueryOptions`.

#### Returns

`Promise`\<`ExtUtxo`[]\>

A promise which resolves to a list of UTXO for the query options.

***

### markSpent()

> **markSpent**(`txId`, `vout`): `void`

Defined in: [packages/scrypt-ts-btc/src/providers/utxoProvider.ts:37](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/providers/utxoProvider.ts#L37)

Mark an outpoint as spent

#### Parameters

##### txId

`string`

##### vout

`number`

#### Returns

`void`
