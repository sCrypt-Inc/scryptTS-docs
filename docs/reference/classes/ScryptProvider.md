[**scrypt-ts**](../README.md)

***

[scrypt-ts](../globals.md) / ScryptProvider

# Class: ScryptProvider

Defined in: scrypt-ts/dist/providers/scrypt-provider.d.ts:3

A Provider is an abstraction of non-account-based operations on a blockchain and is generally not directly involved in signing transaction or data.

## Extends

- [`Provider`](Provider.md)

## Constructors

### new ScryptProvider()

> **new ScryptProvider**(): [`ScryptProvider`](ScryptProvider.md)

Defined in: scrypt-ts/dist/providers/scrypt-provider.d.ts:6

#### Returns

[`ScryptProvider`](ScryptProvider.md)

#### Overrides

[`Provider`](Provider.md).[`constructor`](Provider.md#constructors)

## Properties

### \_isProvider

> `readonly` **\_isProvider**: `boolean`

Defined in: scrypt-ts/dist/bsv/abstract-provider.d.ts:98

#### Inherited from

[`Provider`](Provider.md).[`_isProvider`](Provider.md#_isprovider)

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

> **connect**(): `Promise`\<[`ScryptProvider`](ScryptProvider.md)\>

Defined in: scrypt-ts/dist/providers/scrypt-provider.d.ts:8

Implement the connection provider, for example, verify the api key during the connection process.

#### Returns

`Promise`\<[`ScryptProvider`](ScryptProvider.md)\>

a connected provider. Throw an exception if the connection fails.

#### Overrides

[`Provider`](Provider.md).[`connect`](Provider.md#connect)

***

### getBalance()

> **getBalance**(`address`): `Promise`\<\{ `confirmed`: `number`; `unconfirmed`: `number`; \}\>

Defined in: scrypt-ts/dist/providers/scrypt-provider.d.ts:15

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

Defined in: scrypt-ts/dist/providers/scrypt-provider.d.ts:11

#### Returns

`Promise`\<`number`\>

The fee rate for sending transactions through this provider.

#### Overrides

[`Provider`](Provider.md).[`getFeePerKb`](Provider.md#getfeeperkb)

***

### getNetwork()

> **getNetwork**(): [`Network`](../@scrypt-inc/bsv/namespaces/Networks/interfaces/Network.md)

Defined in: scrypt-ts/dist/providers/scrypt-provider.d.ts:10

#### Returns

[`Network`](../@scrypt-inc/bsv/namespaces/Networks/interfaces/Network.md)

The network this provider is connected to.

#### Overrides

[`Provider`](Provider.md).[`getNetwork`](Provider.md#getnetwork)

***

### getTransaction()

> **getTransaction**(`txHash`): `Promise`\<[`TransactionResponse`](../interfaces/TransactionResponse.md)\>

Defined in: scrypt-ts/dist/providers/scrypt-provider.d.ts:13

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

Defined in: scrypt-ts/dist/providers/scrypt-provider.d.ts:7

check if provider is ready

#### Returns

`boolean`

#### Overrides

[`Provider`](Provider.md).[`isConnected`](Provider.md#isconnected)

***

### listUnspent()

> **listUnspent**(`address`, `options`?): `Promise`\<[`IUnspentOutput`](../@scrypt-inc/bsv/namespaces/Transaction/interfaces/IUnspentOutput.md)[]\>

Defined in: scrypt-ts/dist/providers/scrypt-provider.d.ts:14

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

Defined in: scrypt-ts/dist/providers/scrypt-provider.d.ts:12

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

> **updateNetwork**(`newwork`): `void`

Defined in: scrypt-ts/dist/providers/scrypt-provider.d.ts:9

update provider network

#### Parameters

##### newwork

[`Network`](../@scrypt-inc/bsv/namespaces/Networks/interfaces/Network.md)

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
