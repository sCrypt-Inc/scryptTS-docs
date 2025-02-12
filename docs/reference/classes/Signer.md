[scrypt-ts](../README.md) / Signer

# Class: Signer

A `Signer` is a class which in some way directly or indirectly has access to a private key, which can sign messages and transactions to authorize the network to perform operations.

## Hierarchy

- **`Signer`**

  ↳ [`SensiletSigner`](SensiletSigner.md)

  ↳ [`DotwalletSigner`](DotwalletSigner.md)

  ↳ [`TAALSigner`](TAALSigner.md)

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

dist/bsv/abstract-signer.d.ts:58

## Properties

### \_isSigner

• `Readonly` **\_isSigner**: `boolean`

#### Defined in

dist/bsv/abstract-signer.d.ts:57

___

### provider

• `Optional` **provider**: [`Provider`](Provider.md)

#### Defined in

dist/bsv/abstract-signer.d.ts:56

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

dist/bsv/abstract-signer.d.ts:133

## Methods

### connect

```ts
▸ `Abstract` **connect**(`newProvider?`): `Promise`<[`Signer`](Signer.md)\>
```

Connect a provider to `this`. If a new provider is specified when connecting,
a connection will be established for the new provider and then switched to the new provider.
If no new provider is specified, a connection is established for signer's built-in provider.
If neither exists, an exception is thrown.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newProvider?` | [`Provider`](Provider.md) | The target provider. |

#### Returns

```ts
`Promise`<[`Signer`](Signer.md)\>
```

#### Defined in

dist/bsv/abstract-signer.d.ts:80

___

### getBalance

```ts
▸ **getBalance**(`address?`): `Promise`<{ `confirmed`: `number` ; `unconfirmed`: `number`  }\>
```

Get the balance of BSVs in satoshis for an address.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address?` | [`Address`](bsv.Address.md) | The query address. |

#### Returns

```ts
`Promise`<{ `confirmed`: `number` ; `unconfirmed`: `number`  }\>
```

A promise which resolves to the address balance status.

#### Defined in

dist/bsv/abstract-signer.d.ts:153

___

### getDefaultAddress

```ts
▸ `Abstract` **getDefaultAddress**(): `Promise`<[`Address`](bsv.Address.md)\>
```

#### Returns

```ts
`Promise`<[`Address`](bsv.Address.md)\>
```

A promise which resolves to the address to the default private key of the signer.

#### Defined in

dist/bsv/abstract-signer.d.ts:90

___

### getDefaultPubKey

```ts
▸ `Abstract` **getDefaultPubKey**(): `Promise`<[`PublicKey`](bsv.PublicKey.md)\>
```

#### Returns

```ts
`Promise`<[`PublicKey`](bsv.PublicKey.md)\>
```

A promise which resolves to the public key of the default private key of the signer.

#### Defined in

dist/bsv/abstract-signer.d.ts:85

___

### getPubKey

```ts
▸ `Abstract` **getPubKey**(`address?`): `Promise`<[`PublicKey`](bsv.PublicKey.md)\>
```

**`Throws`**

If the private key for the address does not belong this signer.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address?` | [`Address`](bsv.Address.md) | The request address, using the default address if omitted. |

#### Returns

```ts
`Promise`<[`PublicKey`](bsv.PublicKey.md)\>
```

The public key result.

#### Defined in

dist/bsv/abstract-signer.d.ts:97

___

### getSignatures

```ts
▸ `Abstract` **getSignatures**(`rawTxHex`, `sigRequests`): `Promise`<[`SignatureResponse`](../
```interfaces/SignatureResponse.md)[]\>

Get the requested transaction signatures for the raw transaction.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rawTxHex` | `string` | The raw transaction hex to get signatures from. |
| `sigRequests` | [`SignatureRequest`](../interfaces/SignatureRequest.md)[] | The signature requst informations, see details in `SignatureRequest`. |

#### Returns

```ts
`Promise`<[`SignatureResponse`](../interfaces/SignatureResponse.md)[]\>
```

A promise which resolves to a list of `SignatureReponse` corresponding to `sigRequests`.

#### Defined in

dist/bsv/abstract-signer.d.ts:127

___

### isAuthenticated

```ts
▸ `Abstract` **isAuthenticated**(): `Promise`<`boolean`\>
```

Check if the wallet has been authenticated

#### Returns

```ts
`Promise`<`boolean`\>
```

true | false

#### Defined in

dist/bsv/abstract-signer.d.ts:63

___

### listUnspent

```ts
▸ **listUnspent**(`address`, `options?`): `Promise`<[`IUnspentOutput`](../interfaces/bsv.Trans```
action.IUnspentOutput.md)[]\>

Get a list of the P2PKH UTXOs.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | [`Address`](bsv.Address.md) | The address of the returned UTXOs belongs to. |
| `options?` | [`UtxoQueryOptions`](../interfaces/UtxoQueryOptions.md) | The optional query conditions, see details in `UtxoQueryOptions`. |

#### Returns

```ts
`Promise`<[`IUnspentOutput`](../interfaces/bsv.Transaction.IUnspentOutput.md)[]\>
```

A promise which resolves to a list of UTXO for the query options.

#### Defined in

dist/bsv/abstract-signer.d.ts:147

___

### requestAuth

```ts
▸ `Abstract` **requestAuth**(): `Promise`<{ `error`: `string` ; `isAuthenticated`: `boolean`  }\>
```

Request wallet authentication

#### Returns

```ts
`Promise`<{ `error`: `string` ; `isAuthenticated`: `boolean`  }\>
```

A promise which resolves to if the wallet has been authenticated and the authenticate error message

#### Defined in

dist/bsv/abstract-signer.d.ts:68

___

### signAndsendTransaction

```ts
▸ **signAndsendTransaction**(`tx`, `options?`): `Promise`<[`TransactionResponse`](../interfaces/Trans```
actionResponse.md)\>

Sign transaction and broadcast it

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tx` | [`Transaction`](bsv.Transaction-1.md) | A transaction is signed and broadcast |
| `options?` | [`SignTransactionOptions`](../interfaces/SignTransactionOptions.md) | The options for signing, see the details of `SignTransactionOptions`. |

#### Returns

```ts
`Promise`<[`TransactionResponse`](../interfaces/TransactionResponse.md)\>
```

A promise which resolves to the transaction id.

#### Defined in

dist/bsv/abstract-signer.d.ts:140

___

### signMessage

```ts
▸ `Abstract` **signMessage**(`message`, `address?`): `Promise`<`string`\>
```

Sign a message string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | The message to be signed. |
| `address?` | [`Address`](bsv.Address.md) | The optional address whose private key will be used to sign `message`, using the default private key if omitted. |

#### Returns

```ts
`Promise`<`string`\>
```

A promise which resolves to the signautre of the message.

#### Defined in

dist/bsv/abstract-signer.d.ts:120

___

### signRawTransaction

```ts
▸ `Abstract` **signRawTransaction**(`rawTxHex`, `options`): `Promise`<`string`\>
```

Sign a raw transaction hex string.

**`Throws`**

If any input of the transaction can not be signed properly.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rawTxHex` | `string` | The raw transaction hex to sign. |
| `options` | [`SignTransactionOptions`](../interfaces/SignTransactionOptions.md) | The options for signing, see the details of `SignTransactionOptions`. |

#### Returns

```ts
`Promise`<`string`\>
```

A promise which resolves to the signed transaction hex string.

#### Defined in

dist/bsv/abstract-signer.d.ts:106

___

### signTransaction

```ts
▸ `Abstract` **signTransaction**(`tx`, `options?`): `Promise`<[`Transaction`](bsv.Transaction-1.md)
```\>

Sign a transaction object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tx` | [`Transaction`](bsv.Transaction-1.md) | The transaction object to sign. |
| `options?` | [`SignTransactionOptions`](../interfaces/SignTransactionOptions.md) | The options for signing, see the details of `SignTransactionOptions`. |

#### Returns

```ts
`Promise`<[`Transaction`](bsv.Transaction-1.md)\>
```

A promise which resolves to the signed transaction object.

#### Defined in

dist/bsv/abstract-signer.d.ts:113

___

### isSigner

```ts
▸ `Static` **isSigner**(`value`): value is Signer
```

Check if an object is a `Signer`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `any` | The target object |

#### Returns

value is Signer

Returns `true` if and only if `object` is a Provider.

#### Defined in

dist/bsv/abstract-signer.d.ts:162
