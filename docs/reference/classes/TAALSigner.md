[**scrypt-ts**](../README.md)

***

[scrypt-ts](../globals.md) / TAALSigner

# Class: TAALSigner

Defined in: scrypt-ts/dist/bsv/signers/taal-signer/index.d.ts:10

A `Signer` is a class which in some way directly or indirectly has access to a private key, which can sign messages and transactions to authorize the network to perform operations.

## Extends

- [`Signer`](Signer.md)

## Constructors

### new TAALSigner()

> **new TAALSigner**(`provider`, `app_name`?): [`TAALSigner`](TAALSigner.md)

Defined in: scrypt-ts/dist/bsv/signers/taal-signer/index.d.ts:13

#### Parameters

##### provider

[`Provider`](Provider.md)

##### app\_name?

`string`

#### Returns

[`TAALSigner`](TAALSigner.md)

#### Overrides

[`Signer`](Signer.md).[`constructor`](Signer.md#constructors)

## Properties

### \_isSigner

> `readonly` **\_isSigner**: `boolean`

Defined in: scrypt-ts/dist/bsv/abstract-signer.d.ts:58

#### Inherited from

[`Signer`](Signer.md).[`_isSigner`](Signer.md#_issigner)

***

### provider?

> `optional` **provider**: [`Provider`](Provider.md)

Defined in: scrypt-ts/dist/bsv/abstract-signer.d.ts:57

#### Inherited from

[`Signer`](Signer.md).[`provider`](Signer.md#provider-1)

## Accessors

### connectedProvider

#### Get Signature

> **get** **connectedProvider**(): [`Provider`](Provider.md)

Defined in: scrypt-ts/dist/bsv/abstract-signer.d.ts:132

Get the connected provider.

##### Throws

if no provider is connected to `this`.

##### Returns

[`Provider`](Provider.md)

the connected provider.

#### Inherited from

[`Signer`](Signer.md).[`connectedProvider`](Signer.md#connectedprovider)

## Methods

### alignProviderNetwork()

> **alignProviderNetwork**(): `Promise`\<`void`\>

Defined in: scrypt-ts/dist/bsv/abstract-signer.d.ts:165

Align provider's network after the signer is authenticated

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`Signer`](Signer.md).[`alignProviderNetwork`](Signer.md#alignprovidernetwork)

***

### getBalance()

> **getBalance**(`address`?): `Promise`\<\{ `confirmed`: `number`; `unconfirmed`: `number`; \}\>

Defined in: scrypt-ts/dist/bsv/signers/taal-signer/index.d.ts:35

Get the balance of BSVs in satoshis for an address.

#### Parameters

##### address?

[`Address`](../@scrypt-inc/bsv/classes/Address.md)

The query address.

#### Returns

`Promise`\<\{ `confirmed`: `number`; `unconfirmed`: `number`; \}\>

A promise which resolves to the address balance status.

#### Overrides

[`Signer`](Signer.md).[`getBalance`](Signer.md#getbalance)

***

### getDefaultAddress()

> **getDefaultAddress**(): `Promise`\<[`Address`](../@scrypt-inc/bsv/classes/Address.md)\>

Defined in: scrypt-ts/dist/bsv/signers/taal-signer/index.d.ts:21

#### Returns

`Promise`\<[`Address`](../@scrypt-inc/bsv/classes/Address.md)\>

A promise which resolves to the address to the default private key of the signer.

#### Overrides

[`Signer`](Signer.md).[`getDefaultAddress`](Signer.md#getdefaultaddress)

***

### getDefaultPubKey()

> **getDefaultPubKey**(): `Promise`\<[`PublicKey`](../@scrypt-inc/bsv/classes/PublicKey.md)\>

Defined in: scrypt-ts/dist/bsv/signers/taal-signer/index.d.ts:22

#### Returns

`Promise`\<[`PublicKey`](../@scrypt-inc/bsv/classes/PublicKey.md)\>

A promise which resolves to the public key of the default private key of the signer.

#### Overrides

[`Signer`](Signer.md).[`getDefaultPubKey`](Signer.md#getdefaultpubkey)

***

### getNetwork()

> **getNetwork**(): `Promise`\<[`Network`](../@scrypt-inc/bsv/namespaces/Networks/interfaces/Network.md)\>

Defined in: scrypt-ts/dist/bsv/signers/taal-signer/index.d.ts:24

#### Returns

`Promise`\<[`Network`](../@scrypt-inc/bsv/namespaces/Networks/interfaces/Network.md)\>

#### Overrides

[`Signer`](Signer.md).[`getNetwork`](Signer.md#getnetwork)

***

### getPubKey()

> **getPubKey**(`address`): `Promise`\<[`PublicKey`](../@scrypt-inc/bsv/classes/PublicKey.md)\>

Defined in: scrypt-ts/dist/bsv/signers/taal-signer/index.d.ts:23

#### Parameters

##### address

[`Address`](../@scrypt-inc/bsv/classes/Address.md)

The request address, using the default address if omitted.

#### Returns

`Promise`\<[`PublicKey`](../@scrypt-inc/bsv/classes/PublicKey.md)\>

The public key result.

#### Throws

If the private key for the address does not belong this signer.

#### Overrides

[`Signer`](Signer.md).[`getPubKey`](Signer.md#getpubkey)

***

### getSignatures()

> **getSignatures**(`rawTxHex`, `sigRequests`): `Promise`\<[`SignatureResponse`](../interfaces/SignatureResponse.md)[]\>

Defined in: scrypt-ts/dist/bsv/signers/taal-signer/index.d.ts:33

Get signatures with api

#### Parameters

##### rawTxHex

`string`

a transation raw hex

##### sigRequests

[`SignatureRequest`](../interfaces/SignatureRequest.md)[]

a `SignatureRequest` array for the some inputs of the transaction.

#### Returns

`Promise`\<[`SignatureResponse`](../interfaces/SignatureResponse.md)[]\>

a `SignatureResponse` array

#### Overrides

[`Signer`](Signer.md).[`getSignatures`](Signer.md#getsignatures)

***

### isAuthenticated()

> **isAuthenticated**(): `Promise`\<`boolean`\>

Defined in: scrypt-ts/dist/bsv/signers/taal-signer/index.d.ts:14

Check if the wallet has been authenticated

#### Returns

`Promise`\<`boolean`\>

true | false

#### Overrides

[`Signer`](Signer.md).[`isAuthenticated`](Signer.md#isauthenticated)

***

### listUnspent()

> **listUnspent**(`address`, `options`?): `Promise`\<[`IUnspentOutput`](../@scrypt-inc/bsv/namespaces/Transaction/interfaces/IUnspentOutput.md)[]\>

Defined in: scrypt-ts/dist/bsv/abstract-signer.d.ts:146

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

#### Inherited from

[`Signer`](Signer.md).[`listUnspent`](Signer.md#listunspent)

***

### requestAuth()

> **requestAuth**(): `Promise`\<\{ `error`: `string`; `isAuthenticated`: `boolean`; \}\>

Defined in: scrypt-ts/dist/bsv/signers/taal-signer/index.d.ts:15

Request wallet authentication

#### Returns

`Promise`\<\{ `error`: `string`; `isAuthenticated`: `boolean`; \}\>

A promise which resolves to if the wallet has been authenticated and the authenticate error message

#### Overrides

[`Signer`](Signer.md).[`requestAuth`](Signer.md#requestauth)

***

### setProvider()

> **setProvider**(`provider`): `void`

Defined in: scrypt-ts/dist/bsv/signers/taal-signer/index.d.ts:20

swith provider

#### Parameters

##### provider

[`Provider`](Provider.md)

The target provider.

#### Returns

`void`

#### Overrides

[`Signer`](Signer.md).[`setProvider`](Signer.md#setprovider)

***

### signAndsendTransaction()

> **signAndsendTransaction**(`tx`, `options`?): `Promise`\<[`TransactionResponse`](../interfaces/TransactionResponse.md)\>

Defined in: scrypt-ts/dist/bsv/abstract-signer.d.ts:139

Sign transaction and broadcast it

#### Parameters

##### tx

[`Transaction`](../@scrypt-inc/bsv/classes/Transaction.md)

A transaction is signed and broadcast

##### options?

[`SignTransactionOptions`](../interfaces/SignTransactionOptions.md)

The options for signing, see the details of `SignTransactionOptions`.

#### Returns

`Promise`\<[`TransactionResponse`](../interfaces/TransactionResponse.md)\>

A promise which resolves to the transaction id.

#### Inherited from

[`Signer`](Signer.md).[`signAndsendTransaction`](Signer.md#signandsendtransaction)

***

### signMessage()

> **signMessage**(`message`, `address`?): `Promise`\<`string`\>

Defined in: scrypt-ts/dist/bsv/signers/taal-signer/index.d.ts:34

Sign a message string.

#### Parameters

##### message

`string`

The message to be signed.

##### address?

[`Address`](../@scrypt-inc/bsv/classes/Address.md)

The optional address whose private key will be used to sign `message`, using the default private key if omitted.

#### Returns

`Promise`\<`string`\>

A promise which resolves to the signautre of the message.

#### Overrides

[`Signer`](Signer.md).[`signMessage`](Signer.md#signmessage)

***

### signRawTransaction()

> **signRawTransaction**(`rawTxHex`, `options`): `Promise`\<`string`\>

Defined in: scrypt-ts/dist/bsv/abstract-signer.d.ts:105

Sign a raw transaction hex string.

#### Parameters

##### rawTxHex

`string`

The raw transaction hex to sign.

##### options

[`SignTransactionOptions`](../interfaces/SignTransactionOptions.md)

The options for signing, see the details of `SignTransactionOptions`.

#### Returns

`Promise`\<`string`\>

A promise which resolves to the signed transaction hex string.

#### Throws

If any input of the transaction can not be signed properly.

#### Inherited from

[`Signer`](Signer.md).[`signRawTransaction`](Signer.md#signrawtransaction)

***

### signTransaction()

> **signTransaction**(`tx`, `options`?): `Promise`\<[`Transaction`](../@scrypt-inc/bsv/classes/Transaction.md)\>

Defined in: scrypt-ts/dist/bsv/signers/taal-signer/index.d.ts:26

Sign a transaction object. By default only signs inputs, which are unlocking P2PKH UTXO's.

#### Parameters

##### tx

[`Transaction`](../@scrypt-inc/bsv/classes/Transaction.md)

The transaction object to sign.

##### options?

[`SignTransactionOptions`](../interfaces/SignTransactionOptions.md)

The options for signing, see the details of `SignTransactionOptions`.

#### Returns

`Promise`\<[`Transaction`](../@scrypt-inc/bsv/classes/Transaction.md)\>

A promise which resolves to the signed transaction object.

#### Overrides

[`Signer`](Signer.md).[`signTransaction`](Signer.md#signtransaction)

***

### updateInputsWithInfo()

> **updateInputsWithInfo**(`tx`, `inputInfos`): [`Transaction`](../@scrypt-inc/bsv/classes/Transaction.md)

Defined in: scrypt-ts/dist/bsv/signers/taal-signer/index.d.ts:25

#### Parameters

##### tx

[`Transaction`](../@scrypt-inc/bsv/classes/Transaction.md)

##### inputInfos

`InputInfo`[]

#### Returns

[`Transaction`](../@scrypt-inc/bsv/classes/Transaction.md)

***

### isSigner()

> `static` **isSigner**(`value`): `value is Signer`

Defined in: scrypt-ts/dist/bsv/abstract-signer.d.ts:161

Check if an object is a `Signer`

#### Parameters

##### value

`any`

The target object

#### Returns

`value is Signer`

Returns `true` if and only if `object` is a Provider.

#### Inherited from

[`Signer`](Signer.md).[`isSigner`](Signer.md#issigner)
