[**scrypt-ts**](../README.md)

***

[scrypt-ts](../globals.md) / PandaSigner

# Class: PandaSigner

Defined in: scrypt-ts/dist/bsv/signers/panda-signer/index.d.ts:84

a [signer][https://docs.scrypt.io/how-to-test-a-contract#signer](https://docs.scrypt.io/how-to-test-a-contract#signer) which implemented the protocol with the [panda wallet][https://panda.com](https://panda.com),
and dapps can use to interact with the panda wallet

## Extends

- [`Signer`](Signer.md)

## Constructors

### new PandaSigner()

> **new PandaSigner**(`provider`): [`PandaSigner`](PandaSigner.md)

Defined in: scrypt-ts/dist/bsv/signers/panda-signer/index.d.ts:87

#### Parameters

##### provider

[`Provider`](Provider.md)

#### Returns

[`PandaSigner`](PandaSigner.md)

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

***

### DEBUG\_TAG

> `readonly` `static` **DEBUG\_TAG**: `"PandaSigner"` = `"PandaSigner"`

Defined in: scrypt-ts/dist/bsv/signers/panda-signer/index.d.ts:85

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

Defined in: scrypt-ts/dist/bsv/signers/panda-signer/index.d.ts:111

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

Defined in: scrypt-ts/dist/bsv/signers/panda-signer/index.d.ts:104

#### Returns

`Promise`\<[`Address`](../@scrypt-inc/bsv/classes/Address.md)\>

A promise which resolves to the address to the default private key of the signer.

#### Overrides

[`Signer`](Signer.md).[`getDefaultAddress`](Signer.md#getdefaultaddress)

***

### getDefaultPubKey()

> **getDefaultPubKey**(): `Promise`\<[`PublicKey`](../@scrypt-inc/bsv/classes/PublicKey.md)\>

Defined in: scrypt-ts/dist/bsv/signers/panda-signer/index.d.ts:115

#### Returns

`Promise`\<[`PublicKey`](../@scrypt-inc/bsv/classes/PublicKey.md)\>

A promise which resolves to the public key of the default private key of the signer.

#### Overrides

[`Signer`](Signer.md).[`getDefaultPubKey`](Signer.md#getdefaultpubkey)

***

### getNetwork()

> **getNetwork**(): `Promise`\<[`Network`](../@scrypt-inc/bsv/namespaces/Networks/interfaces/Network.md)\>

Defined in: scrypt-ts/dist/bsv/signers/panda-signer/index.d.ts:110

#### Returns

`Promise`\<[`Network`](../@scrypt-inc/bsv/namespaces/Networks/interfaces/Network.md)\>

#### Overrides

[`Signer`](Signer.md).[`getNetwork`](Signer.md#getnetwork)

***

### getOrdAddress()

> **getOrdAddress**(): `Promise`\<[`Address`](../@scrypt-inc/bsv/classes/Address.md)\>

Defined in: scrypt-ts/dist/bsv/signers/panda-signer/index.d.ts:109

get ordinals address of panda wallet

#### Returns

`Promise`\<[`Address`](../@scrypt-inc/bsv/classes/Address.md)\>

***

### getOrdinals()

> **getOrdinals**(): `Promise`\<`Ordinal`[]\>

Defined in: scrypt-ts/dist/bsv/signers/panda-signer/index.d.ts:125

get all ordinals nft

#### Returns

`Promise`\<`Ordinal`[]\>

a list of Ordinals

***

### getOrdPubKey()

> **getOrdPubKey**(): `Promise`\<[`PublicKey`](../@scrypt-inc/bsv/classes/PublicKey.md)\>

Defined in: scrypt-ts/dist/bsv/signers/panda-signer/index.d.ts:120

get ordinal PubKey of panda wallet

#### Returns

`Promise`\<[`PublicKey`](../@scrypt-inc/bsv/classes/PublicKey.md)\>

a PubKey

***

### getPubKey()

> **getPubKey**(`address`): `Promise`\<[`PublicKey`](../@scrypt-inc/bsv/classes/PublicKey.md)\>

Defined in: scrypt-ts/dist/bsv/signers/panda-signer/index.d.ts:132

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

Defined in: scrypt-ts/dist/bsv/signers/panda-signer/index.d.ts:134

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

#### Overrides

[`Signer`](Signer.md).[`getSignatures`](Signer.md#getsignatures)

***

### isAuthenticated()

> **isAuthenticated**(): `Promise`\<`boolean`\>

Defined in: scrypt-ts/dist/bsv/signers/panda-signer/index.d.ts:92

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

Defined in: scrypt-ts/dist/bsv/signers/panda-signer/index.d.ts:97

Request wallet authentication

#### Returns

`Promise`\<\{ `error`: `string`; `isAuthenticated`: `boolean`; \}\>

A promise which resolves to if the wallet has been authenticated and the authenticate error message

#### Overrides

[`Signer`](Signer.md).[`requestAuth`](Signer.md#requestauth)

***

### setProvider()

> **setProvider**(`provider`): `void`

Defined in: scrypt-ts/dist/bsv/signers/panda-signer/index.d.ts:103

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

Defined in: scrypt-ts/dist/bsv/signers/panda-signer/index.d.ts:133

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

#### Inherited from

[`Signer`](Signer.md).[`signTransaction`](Signer.md#signtransaction)

***

### transferOrdinal()

> **transferOrdinal**(`options`): `Promise`\<`string`\>

Defined in: scrypt-ts/dist/bsv/signers/panda-signer/index.d.ts:131

transfer ordinal nft

#### Parameters

##### options

`TransferOptions`

#### Returns

`Promise`\<`string`\>

transfer transaction id

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
