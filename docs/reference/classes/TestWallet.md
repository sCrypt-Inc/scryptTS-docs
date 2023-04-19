[scrypt-ts](../README.md) / TestWallet

# Class: TestWallet

An implemention of a simple wallet which should just be used in dev/test environments.
It can hold multiple private keys and have a feature of cachable in-memory utxo management.

Reminder: DO NOT USE IT IN PRODUCTION ENV.

## Hierarchy

- [`Signer`](Signer.md)

  ↳ **`TestWallet`**

## Table of contents

### Constructors

- [constructor](TestWallet.md#constructor)

### Properties

- [\_checkAddressOption](TestWallet.md#_checkaddressoption)
- [\_getAddressesIn](TestWallet.md#_getaddressesin)
- [\_getPrivateKeys](TestWallet.md#_getprivatekeys)
- [\_isSigner](TestWallet.md#_issigner)
- [\_privateKeys](TestWallet.md#_privatekeys)
- [\_utxoManagers](TestWallet.md#_utxomanagers)
- [provider](TestWallet.md#provider)

### Accessors

- [\_defaultPrivateKey](TestWallet.md#_defaultprivatekey)
- [addresses](TestWallet.md#addresses)
- [connectedProvider](TestWallet.md#connectedprovider)
- [network](TestWallet.md#network)

### Methods

- [addPrivateKey](TestWallet.md#addprivatekey)
- [connect](TestWallet.md#connect)
- [getBalance](TestWallet.md#getbalance)
- [getDefaultAddress](TestWallet.md#getdefaultaddress)
- [getDefaultPubKey](TestWallet.md#getdefaultpubkey)
- [getPubKey](TestWallet.md#getpubkey)
- [getSignatures](TestWallet.md#getsignatures)
- [isAuthenticated](TestWallet.md#isauthenticated)
- [listUnspent](TestWallet.md#listunspent)
- [requestAuth](TestWallet.md#requestauth)
- [signAndsendTransaction](TestWallet.md#signandsendtransaction)
- [signMessage](TestWallet.md#signmessage)
- [signRawTransaction](TestWallet.md#signrawtransaction)
- [signTransaction](TestWallet.md#signtransaction)
- [isSigner](TestWallet.md#issigner)

## Constructors

### constructor

• **new TestWallet**(`privateKey`, `provider?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateKey` | [`PrivateKey`](bsv.PrivateKey.md) \| [`PrivateKey`](bsv.PrivateKey.md)[] |
| `provider?` | [`Provider`](Provider.md) |

#### Overrides

[Signer](Signer.md).[constructor](Signer.md#constructor)

#### Defined in

dist/bsv/wallets/test-wallet.d.ts:14

## Properties

### \_checkAddressOption

• `Private` **\_checkAddressOption**: `any`

#### Defined in

dist/bsv/wallets/test-wallet.d.ts:33

___

### \_getAddressesIn

• `Private` **\_getAddressesIn**: `any`

#### Defined in

dist/bsv/wallets/test-wallet.d.ts:32

___

### \_getPrivateKeys

• `Private` **\_getPrivateKeys**: `any`

#### Defined in

dist/bsv/wallets/test-wallet.d.ts:35

___

### \_isSigner

• `Readonly` **\_isSigner**: `boolean`

#### Inherited from

[Signer](Signer.md).[_isSigner](Signer.md#_issigner)

#### Defined in

dist/bsv/abstract-signer.d.ts:48

___

### \_privateKeys

• `Private` `Readonly` **\_privateKeys**: `any`

#### Defined in

dist/bsv/wallets/test-wallet.d.ts:12

___

### \_utxoManagers

• `Private` **\_utxoManagers**: `any`

#### Defined in

dist/bsv/wallets/test-wallet.d.ts:13

___

### provider

• `Optional` **provider**: [`Provider`](Provider.md)

#### Inherited from

[Signer](Signer.md).[provider](Signer.md#provider)

#### Defined in

dist/bsv/abstract-signer.d.ts:47

## Accessors

### \_defaultPrivateKey

• `Private` `get` **_defaultPrivateKey**(): `any`

#### Returns

`any`

#### Defined in

dist/bsv/wallets/test-wallet.d.ts:34

___

### addresses

• `get` **addresses**(): `string`[]

#### Returns

`string`[]

#### Defined in

dist/bsv/wallets/test-wallet.d.ts:21

___

### connectedProvider

• `get` **connectedProvider**(): [`Provider`](Provider.md)

Get the connected provider.

**`Throws`**

if no provider is connected to `this`.

#### Returns

[`Provider`](Provider.md)

the connected provider.

#### Inherited from

Signer.connectedProvider

#### Defined in

dist/bsv/abstract-signer.d.ts:121

___

### network

• `get` **network**(): [`Network`](../interfaces/bsv.Networks.Network.md)

#### Returns

[`Network`](../interfaces/bsv.Networks.Network.md)

#### Defined in

dist/bsv/wallets/test-wallet.d.ts:20

## Methods

### addPrivateKey

▸ **addPrivateKey**(`privateKey`): [`TestWallet`](TestWallet.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateKey` | [`PrivateKey`](bsv.PrivateKey.md) \| [`PrivateKey`](bsv.PrivateKey.md)[] |

#### Returns

[`TestWallet`](TestWallet.md)

#### Defined in

dist/bsv/wallets/test-wallet.d.ts:22

___

### connect

▸ **connect**(`provider`): `Promise`<[`TestWallet`](TestWallet.md)\>

Connect a provider to `this`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `provider` | [`Provider`](Provider.md) | The target provider. |

#### Returns

`Promise`<[`TestWallet`](TestWallet.md)\>

#### Overrides

[Signer](Signer.md).[connect](Signer.md#connect)

#### Defined in

dist/bsv/wallets/test-wallet.d.ts:30

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

#### Inherited from

[Signer](Signer.md).[getBalance](Signer.md#getbalance)

#### Defined in

dist/bsv/abstract-signer.d.ts:141

___

### getDefaultAddress

▸ **getDefaultAddress**(): `Promise`<[`Address`](bsv.Address.md)\>

#### Returns

`Promise`<[`Address`](bsv.Address.md)\>

A promise which resolves to the address to the default private key of the signer.

#### Overrides

[Signer](Signer.md).[getDefaultAddress](Signer.md#getdefaultaddress)

#### Defined in

dist/bsv/wallets/test-wallet.d.ts:23

___

### getDefaultPubKey

▸ **getDefaultPubKey**(): `Promise`<[`PublicKey`](bsv.PublicKey.md)\>

#### Returns

`Promise`<[`PublicKey`](bsv.PublicKey.md)\>

A promise which resolves to the public key of the default private key of the signer.

#### Overrides

[Signer](Signer.md).[getDefaultPubKey](Signer.md#getdefaultpubkey)

#### Defined in

dist/bsv/wallets/test-wallet.d.ts:24

___

### getPubKey

▸ **getPubKey**(`address`): `Promise`<[`PublicKey`](bsv.PublicKey.md)\>

**`Throws`**

If the private key for the address does not belong this signer.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | [`Address`](bsv.Address.md) | The request address, using the default address if omitted. |

#### Returns

`Promise`<[`PublicKey`](bsv.PublicKey.md)\>

The public key result.

#### Overrides

[Signer](Signer.md).[getPubKey](Signer.md#getpubkey)

#### Defined in

dist/bsv/wallets/test-wallet.d.ts:25

___

### getSignatures

▸ **getSignatures**(`rawTxHex`, `sigRequests`): `Promise`<[`SignatureResponse`](../interfaces/SignatureResponse.md)[]\>

Get the requested transaction signatures for the raw transaction.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rawTxHex` | `string` | The raw transaction hex to get signatures from. |
| `sigRequests` | [`SignatureRequest`](../interfaces/SignatureRequest.md)[] | The signature requst informations, see details in `SignatureRequest`. |

#### Returns

`Promise`<[`SignatureResponse`](../interfaces/SignatureResponse.md)[]\>

A promise which resolves to a list of `SignatureReponse` corresponding to `sigRequests`.

#### Overrides

[Signer](Signer.md).[getSignatures](Signer.md#getsignatures)

#### Defined in

dist/bsv/wallets/test-wallet.d.ts:29

___

### isAuthenticated

▸ **isAuthenticated**(): `Promise`<`boolean`\>

Check if the wallet has been authenticated

#### Returns

`Promise`<`boolean`\>

true | false

#### Overrides

[Signer](Signer.md).[isAuthenticated](Signer.md#isauthenticated)

#### Defined in

dist/bsv/wallets/test-wallet.d.ts:15

___

### listUnspent

▸ **listUnspent**(`address`, `options`): `Promise`<[`IUnspentOutput`](../interfaces/bsv.Transaction.IUnspentOutput.md)[]\>

Get a list of the P2PKH UTXOs.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | [`Address`](bsv.Address.md) | The address of the returned UTXOs belongs to. |
| `options` | [`UtxoQueryOptions`](../interfaces/UtxoQueryOptions.md) | The optional query conditions, see details in `UtxoQueryOptions`. |

#### Returns

`Promise`<[`IUnspentOutput`](../interfaces/bsv.Transaction.IUnspentOutput.md)[]\>

A promise which resolves to a list of UTXO for the query options.

#### Overrides

[Signer](Signer.md).[listUnspent](Signer.md#listunspent)

#### Defined in

dist/bsv/wallets/test-wallet.d.ts:31

___

### requestAuth

▸ **requestAuth**(): `Promise`<{ `error`: `string` ; `isAuthenticated`: `boolean`  }\>

Request wallet authentication

#### Returns

`Promise`<{ `error`: `string` ; `isAuthenticated`: `boolean`  }\>

A promise which resolves to if the wallet has been authenticated and the authenticate error message

#### Overrides

[Signer](Signer.md).[requestAuth](Signer.md#requestauth)

#### Defined in

dist/bsv/wallets/test-wallet.d.ts:16

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

#### Inherited from

[Signer](Signer.md).[signAndsendTransaction](Signer.md#signandsendtransaction)

#### Defined in

dist/bsv/abstract-signer.d.ts:128

___

### signMessage

▸ **signMessage**(`message`, `address?`): `Promise`<`string`\>

Sign a message string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | The message to be signed. |
| `address?` | [`Address`](bsv.Address.md) | The optional address whose private key will be used to sign `message`, using the default private key if omitted. |

#### Returns

`Promise`<`string`\>

A promise which resolves to the signautre of the message.

#### Overrides

[Signer](Signer.md).[signMessage](Signer.md#signmessage)

#### Defined in

dist/bsv/wallets/test-wallet.d.ts:28

___

### signRawTransaction

▸ **signRawTransaction**(`rawTxHex`, `options`): `Promise`<`string`\>

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

#### Overrides

[Signer](Signer.md).[signRawTransaction](Signer.md#signrawtransaction)

#### Defined in

dist/bsv/wallets/test-wallet.d.ts:26

___

### signTransaction

▸ **signTransaction**(`tx`, `options?`): `Promise`<[`Transaction`](bsv.Transaction-1.md)\>

Sign a transaction object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tx` | [`Transaction`](bsv.Transaction-1.md) | The transaction object to sign. |
| `options?` | [`SignTransactionOptions`](../interfaces/SignTransactionOptions.md) | The options for signing, see the details of `SignTransactionOptions`. |

#### Returns

`Promise`<[`Transaction`](bsv.Transaction-1.md)\>

A promise which resolves to the signed transaction object.

#### Overrides

[Signer](Signer.md).[signTransaction](Signer.md#signtransaction)

#### Defined in

dist/bsv/wallets/test-wallet.d.ts:27

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

#### Inherited from

[Signer](Signer.md).[isSigner](Signer.md#issigner)

#### Defined in

dist/bsv/abstract-signer.d.ts:150
