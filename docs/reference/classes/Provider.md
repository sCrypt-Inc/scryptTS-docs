[**scrypt-ts**](../README.md)

***

[scrypt-ts](../globals.md) / Provider

# Class: `abstract` Provider

Defined in: scrypt-ts/dist/bsv/abstract-provider.d.ts:31

A Provider is an abstraction of non-account-based operations on a blockchain and is generally not directly involved in signing transaction or data.

## Extends

- `unknown`

## Extended by

- [`WhatsonchainProvider`](WhatsonchainProvider.md)
- [`SensibleProvider`](SensibleProvider.md)
- [`GorillapoolProvider`](GorillapoolProvider.md)
- [`TaalProvider`](TaalProvider.md)
- [`DefaultProvider`](DefaultProvider.md)
- [`DummyProvider`](DummyProvider.md)
- [`ScryptProvider`](ScryptProvider.md)

## Constructors

### new Provider()

> **new Provider**(): [`Provider`](Provider.md)

Defined in: scrypt-ts/dist/bsv/abstract-provider.d.ts:32

#### Returns

[`Provider`](Provider.md)

#### Overrides

`EventEmitter.constructor`

## Properties

### \_isProvider

> `readonly` **\_isProvider**: `boolean`

Defined in: scrypt-ts/dist/bsv/abstract-provider.d.ts:98

## Methods

### \_initializeConnection()

> `protected` **\_initializeConnection**(): `void`

Defined in: scrypt-ts/dist/bsv/abstract-provider.d.ts:37

#### Returns

`void`

***

### \_ready()

> `protected` **\_ready**(): `Promise`\<`void`\>

Defined in: scrypt-ts/dist/bsv/abstract-provider.d.ts:38

#### Returns

`Promise`\<`void`\>

***

### connect()

> `abstract` **connect**(): `Promise`\<[`Provider`](Provider.md)\>

Defined in: scrypt-ts/dist/bsv/abstract-provider.d.ts:43

Implement the connection provider, for example, verify the api key during the connection process.

#### Returns

`Promise`\<[`Provider`](Provider.md)\>

a connected provider. Throw an exception if the connection fails.

***

### getBalance()

> `abstract` **getBalance**(`address`?): `Promise`\<\{ `confirmed`: `number`; `unconfirmed`: `number`; \}\>

Defined in: scrypt-ts/dist/bsv/abstract-provider.d.ts:94

Get the balance of BSVs in satoshis for an address.

#### Parameters

##### address?

[`Address`](../@scrypt-inc/bsv/classes/Address.md)

The query address.

#### Returns

`Promise`\<\{ `confirmed`: `number`; `unconfirmed`: `number`; \}\>

A promise which resolves to the address balance status.

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

***

### getFeePerKb()

> `abstract` **getFeePerKb**(): `Promise`\<`number`\>

Defined in: scrypt-ts/dist/bsv/abstract-provider.d.ts:56

#### Returns

`Promise`\<`number`\>

The fee rate for sending transactions through this provider.

***

### getNetwork()

> `abstract` **getNetwork**(): [`Network`](../@scrypt-inc/bsv/namespaces/Networks/interfaces/Network.md)

Defined in: scrypt-ts/dist/bsv/abstract-provider.d.ts:52

#### Returns

[`Network`](../@scrypt-inc/bsv/namespaces/Networks/interfaces/Network.md)

The network this provider is connected to.

***

### getTransaction()

> `abstract` **getTransaction**(`txHash`): `Promise`\<[`TransactionResponse`](../interfaces/TransactionResponse.md)\>

Defined in: scrypt-ts/dist/bsv/abstract-provider.d.ts:81

Get a transaction from the network.

#### Parameters

##### txHash

`string`

The hash value of the transaction.

#### Returns

`Promise`\<[`TransactionResponse`](../interfaces/TransactionResponse.md)\>

The query result with the transaction information.

***

### isConnected()

> `abstract` **isConnected**(): `boolean`

Defined in: scrypt-ts/dist/bsv/abstract-provider.d.ts:36

check if provider is ready

#### Returns

`boolean`

***

### listUnspent()

> `abstract` **listUnspent**(`address`, `options`?): `Promise`\<[`IUnspentOutput`](../@scrypt-inc/bsv/namespaces/Transaction/interfaces/IUnspentOutput.md)[]\>

Defined in: scrypt-ts/dist/bsv/abstract-provider.d.ts:88

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

***

### sendRawTransaction()

> `abstract` **sendRawTransaction**(`rawTxHex`): `Promise`\<`string`\>

Defined in: scrypt-ts/dist/bsv/abstract-provider.d.ts:68

Send a raw transaction hex string.

#### Parameters

##### rawTxHex

`string`

The raw transaction hex string to send.

#### Returns

`Promise`\<`string`\>

A promise which resolves to the hash of the transaction that has been sent.

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

***

### updateNetwork()

> `abstract` **updateNetwork**(`network`): `void`

Defined in: scrypt-ts/dist/bsv/abstract-provider.d.ts:48

update provider network

#### Parameters

##### network

[`Network`](../@scrypt-inc/bsv/namespaces/Networks/interfaces/Network.md)

Network type to be updated

#### Returns

`void`

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
