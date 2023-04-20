[scrypt-ts](../README.md) / BsvApi

# Class: BsvApi

## Table of contents

### Constructors

- [constructor](BsvApi.md#constructor)

### Properties

- [\_core](BsvApi.md#_core)

### Methods

- [connect](BsvApi.md#connect)
- [getBalance](BsvApi.md#getbalance)
- [getFeePerKB](BsvApi.md#getfeeperkb)
- [getTransaction](BsvApi.md#gettransaction)
- [listUnspent](BsvApi.md#listunspent)
- [sendRawTransaction](BsvApi.md#sendrawtransaction)

## Constructors

### constructor

• **new BsvApi**(`_core`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_core` | `Core` |

#### Defined in

dist/client/apis/bsv-api.d.ts:7

## Properties

### \_core

• `Private` `Readonly` **\_core**: `any`

#### Defined in

dist/client/apis/bsv-api.d.ts:6

## Methods

### connect

▸ **connect**(): `Promise`<{ `error`: `string` ; `success`: `boolean`  }\>

#### Returns

`Promise`<{ `error`: `string` ; `success`: `boolean`  }\>

#### Defined in

dist/client/apis/bsv-api.d.ts:14

___

### getBalance

▸ **getBalance**(`address`): `Promise`<{ `confirmed`: `number` ; `unconfirmed`: `number`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | [`Address`](bsv.Address.md) |

#### Returns

`Promise`<{ `confirmed`: `number` ; `unconfirmed`: `number`  }\>

#### Defined in

dist/client/apis/bsv-api.d.ts:9

___

### getFeePerKB

▸ **getFeePerKB**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Defined in

dist/client/apis/bsv-api.d.ts:13

___

### getTransaction

▸ **getTransaction**(`txId`): `Promise`<[`Transaction`](bsv.Transaction-1.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `txId` | `string` |

#### Returns

`Promise`<[`Transaction`](bsv.Transaction-1.md)\>

#### Defined in

dist/client/apis/bsv-api.d.ts:8

___

### listUnspent

▸ **listUnspent**(`address`, `options?`): `Promise`<[`IUnspentOutput`](../interfaces/bsv.Transaction.IUnspentOutput.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | [`Address`](bsv.Address.md) |
| `options?` | [`UtxoQueryOptions`](../interfaces/UtxoQueryOptions.md) |

#### Returns

`Promise`<[`IUnspentOutput`](../interfaces/bsv.Transaction.IUnspentOutput.md)[]\>

#### Defined in

dist/client/apis/bsv-api.d.ts:19

___

### sendRawTransaction

▸ **sendRawTransaction**(`txHex`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `txHex` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

dist/client/apis/bsv-api.d.ts:18
