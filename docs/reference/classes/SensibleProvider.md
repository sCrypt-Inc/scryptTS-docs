[**scrypt-ts**](../README.md)

***

[scrypt-ts](../globals.md) / SensibleProvider

# Class: SensibleProvider

Defined in: scrypt-ts/dist/providers/sensible-provider.d.ts:7

The SensibleProvider is backed by [Sensible][https://github.com/sensible-contract/sensiblequery](https://github.com/sensible-contract/sensiblequery),

## Extends

- [`Provider`](Provider.md)

## Constructors

### new SensibleProvider()

> **new SensibleProvider**(`network`, `apiKey`): [`SensibleProvider`](SensibleProvider.md)

Defined in: scrypt-ts/dist/providers/sensible-provider.d.ts:11

#### Parameters

##### network

[`Network`](../@scrypt-inc/bsv/namespaces/Networks/interfaces/Network.md)

##### apiKey

`string`

#### Returns

[`SensibleProvider`](SensibleProvider.md)

#### Overrides

[`Provider`](Provider.md).[`constructor`](Provider.md#constructors)

## Properties

### \_isProvider

> `readonly` **\_isProvider**: `boolean`

Defined in: scrypt-ts/dist/bsv/abstract-provider.d.ts:98

#### Inherited from

[`Provider`](Provider.md).[`_isProvider`](Provider.md#_isprovider)

## Accessors

### apiEndpoint

#### Get Signature

> **get** **apiEndpoint**(): `string`

Defined in: scrypt-ts/dist/providers/sensible-provider.d.ts:12

##### Returns

`string`

## Methods

### \_initializeConnection()

> `protected` **\_initializeConnection**(): `void`

Defined in: scrypt-ts/dist/bsv/abstract-provider.d.ts:37

#### Returns

`void`

#### Inherited from

[`Provider`](Provider.md).[`_initializeConnection`](Provider.md#_initializeconnection)

***

### \_ready()

> `protected` **\_ready**(): `Promise`\<`void`\>

Defined in: scrypt-ts/dist/bsv/abstract-provider.d.ts:38

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`Provider`](Provider.md).[`_ready`](Provider.md#_ready)

***

### connect()

> **connect**(): `Promise`\<[`SensibleProvider`](SensibleProvider.md)\>

Defined in: scrypt-ts/dist/providers/sensible-provider.d.ts:14

Implement the connection provider, for example, verify the api key during the connection process.

#### Returns

`Promise`\<[`SensibleProvider`](SensibleProvider.md)\>

a connected provider. Throw an exception if the connection fails.

#### Overrides

[`Provider`](Provider.md).[`connect`](Provider.md#connect)

***

### getBalance()

> **getBalance**(`address`): `Promise`\<\{ `confirmed`: `number`; `unconfirmed`: `number`; \}\>

Defined in: scrypt-ts/dist/providers/sensible-provider.d.ts:19

Get the balance of BSVs in satoshis for an address.

#### Parameters

##### address

[`Address`](../@scrypt-inc/bsv/classes/Address.md)

The query address.

#### Returns

`Promise`\<\{ `confirmed`: `number`; `unconfirmed`: `number`; \}\>

A promise which resolves to the address balance status.

#### Overrides

[`Provider`](Provider.md).[`getBalance`](Provider.md#getbalance)

***

### getEstimateFee()

> **getEstimateFee**(`tx`): `Promise`\<`number`\>

Defined in: scrypt-ts/dist/bsv/abstract-provider.d.ts:62

Get a best guess of the fee for a transaction.

#### Parameters

##### tx

[`Transaction`](../@scrypt-inc/bsv/classes/Transaction.md)

A transaction object to estimate.

#### Returns

`Promise`\<`number`\>

The estimated fee in satoshis.

#### Inherited from

[`Provider`](Provider.md).[`getEstimateFee`](Provider.md#getestimatefee)

***

### getFeePerKb()

> **getFeePerKb**(): `Promise`\<`number`\>

Defined in: scrypt-ts/dist/providers/sensible-provider.d.ts:24

#### Returns

`Promise`\<`number`\>

The fee rate for sending transactions through this provider.

#### Overrides

[`Provider`](Provider.md).[`getFeePerKb`](Provider.md#getfeeperkb)

***

### getNetwork()

> **getNetwork**(): [`Network`](../@scrypt-inc/bsv/namespaces/Networks/interfaces/Network.md)

Defined in: scrypt-ts/dist/providers/sensible-provider.d.ts:16

#### Returns

[`Network`](../@scrypt-inc/bsv/namespaces/Networks/interfaces/Network.md)

The network this provider is connected to.

#### Overrides

[`Provider`](Provider.md).[`getNetwork`](Provider.md#getnetwork)

***

### getTransaction()

> **getTransaction**(`txHash`): `Promise`\<[`TransactionResponse`](../interfaces/TransactionResponse.md)\>

Defined in: scrypt-ts/dist/providers/sensible-provider.d.ts:23

Get a transaction from the network.

#### Parameters

##### txHash

`string`

The hash value of the transaction.

#### Returns

`Promise`\<[`TransactionResponse`](../interfaces/TransactionResponse.md)\>

The query result with the transaction information.

#### Overrides

[`Provider`](Provider.md).[`getTransaction`](Provider.md#gettransaction)

***

### isConnected()

> **isConnected**(): `boolean`

Defined in: scrypt-ts/dist/providers/sensible-provider.d.ts:13

check if provider is ready

#### Returns

`boolean`

#### Overrides

[`Provider`](Provider.md).[`isConnected`](Provider.md#isconnected)

***

### listUnspent()

> **listUnspent**(`address`, `options`?): `Promise`\<[`IUnspentOutput`](../@scrypt-inc/bsv/namespaces/Transaction/interfaces/IUnspentOutput.md)[]\>

Defined in: scrypt-ts/dist/providers/sensible-provider.d.ts:18

Get a list of the P2PKH UTXOs.

#### Parameters

##### address

[`Address`](../@scrypt-inc/bsv/classes/Address.md)

The address of the returned UTXOs belongs to.

##### options?

[`UtxoQueryOptions`](../interfaces/UtxoQueryOptions.md)

The optional query conditions, see details in `UtxoQueryOptions`.

#### Returns

`Promise`\<[`IUnspentOutput`](../@scrypt-inc/bsv/namespaces/Transaction/interfaces/IUnspentOutput.md)[]\>

A promise which resolves to a list of UTXO for the query options.

#### Overrides

[`Provider`](Provider.md).[`listUnspent`](Provider.md#listunspent)

***

### sendRawTransaction()

> **sendRawTransaction**(`rawTxHex`): `Promise`\<`string`\>

Defined in: scrypt-ts/dist/providers/sensible-provider.d.ts:17

Send a raw transaction hex string.

#### Parameters

##### rawTxHex

`string`

The raw transaction hex string to send.

#### Returns

`Promise`\<`string`\>

A promise which resolves to the hash of the transaction that has been sent.

#### Overrides

[`Provider`](Provider.md).[`sendRawTransaction`](Provider.md#sendrawtransaction)

***

### sendTransaction()

> **sendTransaction**(`tx`): `Promise`\<`string`\>

Defined in: scrypt-ts/dist/bsv/abstract-provider.d.ts:75

Send a transaction object.

#### Parameters

##### tx

[`Transaction`](../@scrypt-inc/bsv/classes/Transaction.md)

The transaction object to send.

#### Returns

`Promise`\<`string`\>

A promise which resolves to the hash of the transaction that has been sent.

#### Throws

If there is a problem with the `tx` object during serialization.

#### Inherited from

[`Provider`](Provider.md).[`sendTransaction`](Provider.md#sendtransaction)

***

### updateNetwork()

> **updateNetwork**(`network`): `void`

Defined in: scrypt-ts/dist/providers/sensible-provider.d.ts:15

update provider network

#### Parameters

##### network

[`Network`](../@scrypt-inc/bsv/namespaces/Networks/interfaces/Network.md)

Network type to be updated

#### Returns

`void`

#### Overrides

[`Provider`](Provider.md).[`updateNetwork`](Provider.md#updatenetwork)

***

### isProvider()

> `static` **isProvider**(`value`): `value is Provider`

Defined in: scrypt-ts/dist/bsv/abstract-provider.d.ts:104

Check if an object is a `Provider`

#### Parameters

##### value

`any`

The target object

#### Returns

`value is Provider`

Returns `true` if and only if `object` is a Provider.

#### Inherited from

[`Provider`](Provider.md).[`isProvider`](Provider.md#isprovider)
