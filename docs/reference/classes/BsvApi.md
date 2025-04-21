[**scrypt-ts**](../README.md)

***

[scrypt-ts](../globals.md) / BsvApi

# Class: BsvApi

Defined in: scrypt-ts/dist/client/apis/bsv-api.d.ts:5

## Constructors

### new BsvApi()

> **new BsvApi**(`_core`): [`BsvApi`](BsvApi.md)

Defined in: scrypt-ts/dist/client/apis/bsv-api.d.ts:7

#### Parameters

##### \_core

`Core`

#### Returns

[`BsvApi`](BsvApi.md)

## Methods

### connect()

> **connect**(): `Promise`\<\{ `error`: `string`; `success`: `boolean`; \}\>

Defined in: scrypt-ts/dist/client/apis/bsv-api.d.ts:14

#### Returns

`Promise`\<\{ `error`: `string`; `success`: `boolean`; \}\>

***

### getBalance()

> **getBalance**(`address`): `Promise`\<\{ `confirmed`: `number`; `unconfirmed`: `number`; \}\>

Defined in: scrypt-ts/dist/client/apis/bsv-api.d.ts:9

#### Parameters

##### address

[`Address`](../@scrypt-inc/bsv/classes/Address.md)

#### Returns

`Promise`\<\{ `confirmed`: `number`; `unconfirmed`: `number`; \}\>

***

### getFeePerKB()

> **getFeePerKB**(): `Promise`\<`number`\>

Defined in: scrypt-ts/dist/client/apis/bsv-api.d.ts:13

#### Returns

`Promise`\<`number`\>

***

### getTransaction()

> **getTransaction**(`txId`): `Promise`\<[`Transaction`](../@scrypt-inc/bsv/classes/Transaction.md)\>

Defined in: scrypt-ts/dist/client/apis/bsv-api.d.ts:8

#### Parameters

##### txId

`string`

#### Returns

`Promise`\<[`Transaction`](../@scrypt-inc/bsv/classes/Transaction.md)\>

***

### listUnspent()

> **listUnspent**(`address`, `options`?): `Promise`\<[`IUnspentOutput`](../@scrypt-inc/bsv/namespaces/Transaction/interfaces/IUnspentOutput.md)[]\>

Defined in: scrypt-ts/dist/client/apis/bsv-api.d.ts:19

#### Parameters

##### address

[`Address`](../@scrypt-inc/bsv/classes/Address.md)

##### options?

[`UtxoQueryOptions`](../interfaces/UtxoQueryOptions.md)

#### Returns

`Promise`\<[`IUnspentOutput`](../@scrypt-inc/bsv/namespaces/Transaction/interfaces/IUnspentOutput.md)[]\>

***

### sendRawTransaction()

> **sendRawTransaction**(`txHex`): `Promise`\<`string`\>

Defined in: scrypt-ts/dist/client/apis/bsv-api.d.ts:18

#### Parameters

##### txHex

`string`

#### Returns

`Promise`\<`string`\>
