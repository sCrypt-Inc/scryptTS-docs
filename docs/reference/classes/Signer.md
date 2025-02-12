[**scrypt-ts**](../README.md)

***

[scrypt-ts](../globals.md) / Signer

# Class: `abstract` Signer

Defined in: scrypt-ts/dist/bsv/abstract-signer.d.ts:56

A `Signer` is a class which in some way directly or indirectly has access to a private key, which can sign messages and transactions to authorize the network to perform operations.

## Extended by

- [`TestWallet`](TestWallet.md)
- [`SensiletSigner`](SensiletSigner.md)
- [`DotwalletSigner`](DotwalletSigner.md)
- [`TAALSigner`](TAALSigner.md)
- [`PandaSigner`](PandaSigner.md)

## Constructors

### new Signer()

> **new Signer**(`provider`?): [`Signer`](Signer.md)

Defined in: scrypt-ts/dist/bsv/abstract-signer.d.ts:59

#### Parameters

##### provider?

[`Provider`](Provider.md)

#### Returns

[`Signer`](Signer.md)

## Properties

### \_isSigner

> `readonly` **\_isSigner**: `boolean`

Defined in: scrypt-ts/dist/bsv/abstract-signer.d.ts:58

***

### provider?

> `optional` **provider**: [`Provider`](Provider.md)

Defined in: scrypt-ts/dist/bsv/abstract-signer.d.ts:57

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

## Methods

### alignProviderNetwork()

> **alignProviderNetwork**(): `Promise`\<`void`\>

Defined in: scrypt-ts/dist/bsv/abstract-signer.d.ts:165

Align provider's network after the signer is authenticated

#### Returns

`Promise`\<`void`\>

***

### getBalance()

> **getBalance**(`address`?): `Promise`\<\{ `confirmed`: `number`; `unconfirmed`: `number`; \}\>

Defined in: scrypt-ts/dist/bsv/abstract-signer.d.ts:152

Get the balance of BSVs in satoshis for an address.

#### Parameters

##### address?

[`Address`](../@scrypt-inc/bsv/classes/Address.md)

The query address.

#### Returns

`Promise`\<\{ `confirmed`: `number`; `unconfirmed`: `number`; \}\>

A promise which resolves to the address balance status.

***

### getDefaultAddress()

> `abstract` **getDefaultAddress**(): `Promise`\<[`Address`](../@scrypt-inc/bsv/classes/Address.md)\>

Defined in: scrypt-ts/dist/bsv/abstract-signer.d.ts:89

#### Returns

`Promise`\<[`Address`](../@scrypt-inc/bsv/classes/Address.md)\>

A promise which resolves to the address to the default private key of the signer.

***

### getDefaultPubKey()

> `abstract` **getDefaultPubKey**(): `Promise`\<[`PublicKey`](../@scrypt-inc/bsv/classes/PublicKey.md)\>

Defined in: scrypt-ts/dist/bsv/abstract-signer.d.ts:84

#### Returns

`Promise`\<[`PublicKey`](../@scrypt-inc/bsv/classes/PublicKey.md)\>

A promise which resolves to the public key of the default private key of the signer.

***

### getNetwork()

> `abstract` **getNetwork**(): `Promise`\<[`Network`](../@scrypt-inc/bsv/namespaces/Networks/interfaces/Network.md)\>

Defined in: scrypt-ts/dist/bsv/abstract-signer.d.ts:60

#### Returns

`Promise`\<[`Network`](../@scrypt-inc/bsv/namespaces/Networks/interfaces/Network.md)\>

***

### getPubKey()

> `abstract` **getPubKey**(`address`?): `Promise`\<[`PublicKey`](../@scrypt-inc/bsv/classes/PublicKey.md)\>

Defined in: scrypt-ts/dist/bsv/abstract-signer.d.ts:96

#### Parameters

##### address?

[`Address`](../@scrypt-inc/bsv/classes/Address.md)

The request address, using the default address if omitted.

#### Returns

`Promise`\<[`PublicKey`](../@scrypt-inc/bsv/classes/PublicKey.md)\>

The public key result.

#### Throws

If the private key for the address does not belong this signer.

***

### getSignatures()

> `abstract` **getSignatures**(`rawTxHex`, `sigRequests`): `Promise`\<[`SignatureResponse`](../interfaces/SignatureResponse.md)[]\>

Defined in: scrypt-ts/dist/bsv/abstract-signer.d.ts:126

Get the requested transaction signatures for the raw transaction.

#### Parameters

##### rawTxHex

`string`

The raw transaction hex to get signatures from.

##### sigRequests

[`SignatureRequest`](../interfaces/SignatureRequest.md)[]

The signature requst informations, see details in `SignatureRequest`.

#### Returns

`Promise`\<[`SignatureResponse`](../interfaces/SignatureResponse.md)[]\>

A promise which resolves to a list of `SignatureReponse` corresponding to `sigRequests`.

***

### isAuthenticated()

> `abstract` **isAuthenticated**(): `Promise`\<`boolean`\>

Defined in: scrypt-ts/dist/bsv/abstract-signer.d.ts:65

Check if the wallet has been authenticated

#### Returns

`Promise`\<`boolean`\>

true | false

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

***

### requestAuth()

> `abstract` **requestAuth**(): `Promise`\<\{ `error`: `string`; `isAuthenticated`: `boolean`; \}\>

Defined in: scrypt-ts/dist/bsv/abstract-signer.d.ts:70

Request wallet authentication

#### Returns

`Promise`\<\{ `error`: `string`; `isAuthenticated`: `boolean`; \}\>

A promise which resolves to if the wallet has been authenticated and the authenticate error message

***

### setProvider()

> `abstract` **setProvider**(`provider`): `void`

Defined in: scrypt-ts/dist/bsv/abstract-signer.d.ts:79

swith provider

#### Parameters

##### provider

[`Provider`](Provider.md)

The target provider.

#### Returns

`void`

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

***

### signMessage()

> `abstract` **signMessage**(`message`, `address`?): `Promise`\<`string`\>

Defined in: scrypt-ts/dist/bsv/abstract-signer.d.ts:119

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

***

### signTransaction()

> **signTransaction**(`tx`, `options`?): `Promise`\<[`Transaction`](../@scrypt-inc/bsv/classes/Transaction.md)\>

Defined in: scrypt-ts/dist/bsv/abstract-signer.d.ts:112

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
