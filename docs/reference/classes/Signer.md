[scrypt-ts](../README.md) / Signer

# Class: Signer

A `Signer` is a class which in some way directly or indirectly has access to a private key, which can sign messages and transactions to authorize the network to perform operations.

## Hierarchy

- **`Signer`**

  ↳ [`SensiletSigner`](SensiletSigner.md)

  ↳ [`TestWallet`](TestWallet.md)

## Table of contents

### Constructors

- [constructor](Signer.md#constructor)

### Properties

- [\_isSigner](Signer.md#_issigner)
- [provider](Signer.md#provider)

### Accessors

- [connectedProvider](Signer.md#connectedprovider)

### Methods

- [connect](Signer.md#connect)
- [getBalance](Signer.md#getbalance)
- [getDefaultAddress](Signer.md#getdefaultaddress)
- [getDefaultPubKey](Signer.md#getdefaultpubkey)
- [getPubKey](Signer.md#getpubkey)
- [getSignatures](Signer.md#getsignatures)
- [isAuthenticated](Signer.md#isauthenticated)
- [listUnspent](Signer.md#listunspent)
- [requestAuth](Signer.md#requestauth)
- [signAndsendTransaction](Signer.md#signandsendtransaction)
- [signMessage](Signer.md#signmessage)
- [signRawTransaction](Signer.md#signrawtransaction)
- [signTransaction](Signer.md#signtransaction)
- [isSigner](Signer.md#issigner)

## Constructors

### constructor

• **new Signer**(`provider?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `provider?` | [`Provider`](Provider.md) |

#### Defined in

dist/bsv/abstract-signer.d.ts:49

## Properties

### \_isSigner

• `Readonly` **\_isSigner**: `boolean`

#### Defined in

dist/bsv/abstract-signer.d.ts:48

___

### provider

• `Optional` **provider**: [`Provider`](Provider.md)

#### Defined in

dist/bsv/abstract-signer.d.ts:47

## Accessors

### connectedProvider

• `get` **connectedProvider**(): [`Provider`](Provider.md)

Get the connected provider.

**`Throws`**

if no provider is connected to `this`.

#### Returns

[`Provider`](Provider.md)

the connected provider.

#### Defined in

dist/bsv/abstract-signer.d.ts:121

## Methods

### connect

▸ `Abstract` **connect**(`provider`): `Promise`<[`Signer`](Signer.md)\>

Connect a provider to `this`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `provider` | [`Provider`](Provider.md) | The target provider. |

#### Returns

`Promise`<[`Signer`](Signer.md)\>

#### Defined in

dist/bsv/abstract-signer.d.ts:68

___

### getBalance

▸ **getBalance**(`address?`): `Promise`<{ `confirmed`: `number` ; `unconfirmed`: `number`  }\>

Get the balance of BSVs in satoshis for an address.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address?` | [`Address`](bsv.Address.md) | The query address. |

#### Returns

`Promise`<{ `confirmed`: `number` ; `unconfirmed`: `number`  }\>

A promise which resolves to the address balance status.

#### Defined in

dist/bsv/abstract-signer.d.ts:141

___

### getDefaultAddress

▸ `Abstract` **getDefaultAddress**(): `Promise`<[`Address`](bsv.Address.md)\>

#### Returns

`Promise`<[`Address`](bsv.Address.md)\>

A promise which resolves to the address to the default private key of the signer.

#### Defined in

dist/bsv/abstract-signer.d.ts:78

___

### getDefaultPubKey

▸ `Abstract` **getDefaultPubKey**(): `Promise`<[`PublicKey`](bsv.PublicKey.md)\>

#### Returns

`Promise`<[`PublicKey`](bsv.PublicKey.md)\>

A promise which resolves to the public key of the default private key of the signer.

#### Defined in

dist/bsv/abstract-signer.d.ts:73

___

### getPubKey

▸ `Abstract` **getPubKey**(`address?`): `Promise`<[`PublicKey`](bsv.PublicKey.md)\>

**`Throws`**

If the private key for the address does not belong this signer.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address?` | [`Address`](bsv.Address.md) | The request address, using the default address if omitted. |

#### Returns

`Promise`<[`PublicKey`](bsv.PublicKey.md)\>

The public key result.

#### Defined in

dist/bsv/abstract-signer.d.ts:85

___

### getSignatures

▸ `Abstract` **getSignatures**(`rawTxHex`, `sigRequests`): `Promise`<[`SignatureResponse`](../interfaces/SignatureResponse.md)[]\>

Get the requested transaction signatures for the raw transaction.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rawTxHex` | `string` | The raw transaction hex to get signatures from. |
| `sigRequests` | [`SignatureRequest`](../interfaces/SignatureRequest.md)[] | The signature requst informations, see details in `SignatureRequest`. |

#### Returns

`Promise`<[`SignatureResponse`](../interfaces/SignatureResponse.md)[]\>

A promise which resolves to a list of `SignatureReponse` corresponding to `sigRequests`.

#### Defined in

dist/bsv/abstract-signer.d.ts:115

___

### isAuthenticated

▸ `Abstract` **isAuthenticated**(): `Promise`<`boolean`\>

Check if the wallet has been authenticated

#### Returns

`Promise`<`boolean`\>

true | false

#### Defined in

dist/bsv/abstract-signer.d.ts:54

___

### listUnspent

▸ **listUnspent**(`address`, `options?`): `Promise`<[`IUnspentOutput`](../interfaces/bsv.Transaction.IUnspentOutput.md)[]\>

Get a list of the P2PKH UTXOs.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | [`Address`](bsv.Address.md) | The address of the returned UTXOs belongs to. |
| `options?` | [`UtxoQueryOptions`](../interfaces/UtxoQueryOptions.md) | The optional query conditions, see details in `UtxoQueryOptions`. |

#### Returns

`Promise`<[`IUnspentOutput`](../interfaces/bsv.Transaction.IUnspentOutput.md)[]\>

A promise which resolves to a list of UTXO for the query options.

#### Defined in

dist/bsv/abstract-signer.d.ts:135

___

### requestAuth

▸ `Abstract` **requestAuth**(): `Promise`<{ `error`: `string` ; `isAuthenticated`: `boolean`  }\>

Request wallet authentication

#### Returns

`Promise`<{ `error`: `string` ; `isAuthenticated`: `boolean`  }\>

A promise which resolves to if the wallet has been authenticated and the authenticate error message

#### Defined in

dist/bsv/abstract-signer.d.ts:59

___

### signAndsendTransaction

▸ **signAndsendTransaction**(`tx`, `options?`): `Promise`<[`TransactionResponse`](../interfaces/TransactionResponse.md)\>

Sign transaction and broadcast it

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tx` | [`Transaction`](bsv.Transaction-1.md) | A transaction is signed and broadcast |
| `options?` | [`SignTransactionOptions`](../interfaces/SignTransactionOptions.md) | The options for signing, see the details of `SignTransactionOptions`. |

#### Returns

`Promise`<[`TransactionResponse`](../interfaces/TransactionResponse.md)\>

A promise which resolves to the transaction id.

#### Defined in

dist/bsv/abstract-signer.d.ts:128

___

### signMessage

▸ `Abstract` **signMessage**(`message`, `address?`): `Promise`<`string`\>

Sign a message string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | The message to be signed. |
| `address?` | [`Address`](bsv.Address.md) | The optional address whose private key will be used to sign `message`, using the default private key if omitted. |

#### Returns

`Promise`<`string`\>

A promise which resolves to the signautre of the message.

#### Defined in

dist/bsv/abstract-signer.d.ts:108

___

### signRawTransaction

▸ `Abstract` **signRawTransaction**(`rawTxHex`, `options`): `Promise`<`string`\>

Sign a raw transaction hex string.

**`Throws`**

If any input of the transaction can not be signed properly.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rawTxHex` | `string` | The raw transaction hex to sign. |
| `options` | [`SignTransactionOptions`](../interfaces/SignTransactionOptions.md) | The options for signing, see the details of `SignTransactionOptions`. |

#### Returns

`Promise`<`string`\>

A promise which resolves to the signed transaction hex string.

#### Defined in

dist/bsv/abstract-signer.d.ts:94

___

### signTransaction

▸ `Abstract` **signTransaction**(`tx`, `options?`): `Promise`<[`Transaction`](bsv.Transaction-1.md)\>

Sign a transaction object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tx` | [`Transaction`](bsv.Transaction-1.md) | The transaction object to sign. |
| `options?` | [`SignTransactionOptions`](../interfaces/SignTransactionOptions.md) | The options for signing, see the details of `SignTransactionOptions`. |

#### Returns

`Promise`<[`Transaction`](bsv.Transaction-1.md)\>

A promise which resolves to the signed transaction object.

#### Defined in

dist/bsv/abstract-signer.d.ts:101

___

### isSigner

▸ `Static` **isSigner**(`value`): value is Signer

Check if an object is a `Signer`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `any` | The target object |

#### Returns

value is Signer

Returns `true` if and only if `object` is a Provider.

#### Defined in

dist/bsv/abstract-signer.d.ts:150
