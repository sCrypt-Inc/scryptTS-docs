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
- [listUnspent](Signer.md#listunspent)
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

[src/bsv/abstract-signer.ts:57](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/bsv/abstract-signer.ts#L57)

## Properties

### \_isSigner

• `Readonly` **\_isSigner**: `boolean`

#### Defined in

[src/bsv/abstract-signer.ts:55](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/bsv/abstract-signer.ts#L55)

___

### provider

• `Optional` **provider**: [`Provider`](Provider.md)

#### Defined in

[src/bsv/abstract-signer.ts:54](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/bsv/abstract-signer.ts#L54)

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

[src/bsv/abstract-signer.ts:67](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/bsv/abstract-signer.ts#L67)

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

[src/bsv/abstract-signer.ts:83](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/bsv/abstract-signer.ts#L83)

___

### getBalance

▸ **getBalance**(`address?`): `Promise`<{ `confirmed`: `number` ; `unconfirmed`: `number`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address?` | [`AddressOption`](../README.md#addressoption) |

#### Returns

`Promise`<{ `confirmed`: `number` ; `unconfirmed`: `number`  }\>

#### Defined in

[src/bsv/abstract-signer.ts:114](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/bsv/abstract-signer.ts#L114)

___

### getDefaultAddress

▸ `Abstract` **getDefaultAddress**(): `Promise`<[`Address`](bsv.Address.md)\>

#### Returns

`Promise`<[`Address`](bsv.Address.md)\>

A promise which resolves to the address to the default private key of the signer.

#### Defined in

[src/bsv/abstract-signer.ts:97](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/bsv/abstract-signer.ts#L97)

___

### getDefaultPubKey

▸ `Abstract` **getDefaultPubKey**(): `Promise`<[`PublicKey`](bsv.PublicKey.md)\>

#### Returns

`Promise`<[`PublicKey`](bsv.PublicKey.md)\>

A promise which resolves to the public key of the default private key of the signer.

#### Defined in

[src/bsv/abstract-signer.ts:91](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/bsv/abstract-signer.ts#L91)

___

### getPubKey

▸ `Abstract` **getPubKey**(`address?`): `Promise`<[`PublicKey`](bsv.PublicKey.md)\>

**`Throws`**

If the private key for the address does not belong this signer.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address?` | [`AddressOption`](../README.md#addressoption) | The request address, using the default address if omitted. |

#### Returns

`Promise`<[`PublicKey`](bsv.PublicKey.md)\>

The public key result.

#### Defined in

[src/bsv/abstract-signer.ts:105](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/bsv/abstract-signer.ts#L105)

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

[src/bsv/abstract-signer.ts:153](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/bsv/abstract-signer.ts#L153)

___

### listUnspent

▸ **listUnspent**(`address`, `options?`): `Promise`<[`IUnspentOutput`](../interfaces/bsv.Transaction.IUnspentOutput.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | [`AddressOption`](../README.md#addressoption) |
| `options?` | `UtxoQueryOptions` |

#### Returns

`Promise`<[`IUnspentOutput`](../interfaces/bsv.Transaction.IUnspentOutput.md)[]\>

#### Defined in

[src/bsv/abstract-signer.ts:108](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/bsv/abstract-signer.ts#L108)

___

### signAndsendTransaction

▸ **signAndsendTransaction**(`tx`, `options?`): `Promise`<[`TransactionResponse`](../interfaces/TransactionResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tx` | [`Transaction`](bsv.Transaction-1.md) |
| `options?` | [`SignTransactionOptions`](../interfaces/SignTransactionOptions.md) |

#### Returns

`Promise`<[`TransactionResponse`](../interfaces/TransactionResponse.md)\>

#### Defined in

[src/bsv/abstract-signer.ts:157](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/bsv/abstract-signer.ts#L157)

___

### signMessage

▸ `Abstract` **signMessage**(`message`, `address?`): `Promise`<`string`\>

Sign a message string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | The message to be signed. |
| `address?` | [`AddressOption`](../README.md#addressoption) | The optional address whose private key will be used to sign `message`, using the default private key if omitted. |

#### Returns

`Promise`<`string`\>

A promise which resolves to the signautre of the message.

#### Defined in

[src/bsv/abstract-signer.ts:145](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/bsv/abstract-signer.ts#L145)

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

[src/bsv/abstract-signer.ts:129](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/bsv/abstract-signer.ts#L129)

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

[src/bsv/abstract-signer.ts:137](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/bsv/abstract-signer.ts#L137)

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

[src/bsv/abstract-signer.ts:171](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/bsv/abstract-signer.ts#L171)
