[scrypt-ts](../README.md) / SensiletSigner

# Class: SensiletSigner

A `Signer` is a class which in some way directly or indirectly has access to a private key, which can sign messages and transactions to authorize the network to perform operations.

## Hierarchy

- [`Signer`](Signer.md)

  ↳ **`SensiletSigner`**

## Table of contents

### Constructors

- [constructor](SensiletSigner.md#constructor)

### Properties

- [\_address](SensiletSigner.md#_address)
- [\_isSigner](SensiletSigner.md#_issigner)
- [\_target](SensiletSigner.md#_target)
- [provider](SensiletSigner.md#provider)
- [DEBUG\_TAG](SensiletSigner.md#debug_tag)

### Accessors

- [connectedProvider](SensiletSigner.md#connectedprovider)

### Methods

- [connect](SensiletSigner.md#connect)
- [getBalance](SensiletSigner.md#getbalance)
- [getConnectedTarget](SensiletSigner.md#getconnectedtarget)
- [getDefaultAddress](SensiletSigner.md#getdefaultaddress)
- [getDefaultPubKey](SensiletSigner.md#getdefaultpubkey)
- [getNetwork](SensiletSigner.md#getnetwork)
- [getPubKey](SensiletSigner.md#getpubkey)
- [getSensilet](SensiletSigner.md#getsensilet)
- [getSignatures](SensiletSigner.md#getsignatures)
- [isSensiletConnected](SensiletSigner.md#issensiletconnected)
- [listUnspent](SensiletSigner.md#listunspent)
- [signAndsendTransaction](SensiletSigner.md#signandsendtransaction)
- [signMessage](SensiletSigner.md#signmessage)
- [signRawTransaction](SensiletSigner.md#signrawtransaction)
- [signTransaction](SensiletSigner.md#signtransaction)
- [isSigner](SensiletSigner.md#issigner)

## Constructors

### constructor

• **new SensiletSigner**(`provider?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `provider?` | [`Provider`](Provider.md) |

#### Overrides

[Signer](Signer.md).[constructor](Signer.md#constructor)

#### Defined in

[src/bsv/signers/sensilet-signer.ts:48](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/bsv/signers/sensilet-signer.ts#L48)

## Properties

### \_address

• `Private` **\_address**: `string`

#### Defined in

[src/bsv/signers/sensilet-signer.ts:46](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/bsv/signers/sensilet-signer.ts#L46)

___

### \_isSigner

• `Readonly` **\_isSigner**: `boolean`

#### Inherited from

[Signer](Signer.md).[_isSigner](Signer.md#_issigner)

#### Defined in

[src/bsv/abstract-signer.ts:55](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/bsv/abstract-signer.ts#L55)

___

### \_target

• `Private` **\_target**: `SensiletWalletAPI`

#### Defined in

[src/bsv/signers/sensilet-signer.ts:45](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/bsv/signers/sensilet-signer.ts#L45)

___

### provider

• `Optional` **provider**: [`Provider`](Provider.md)

#### Inherited from

[Signer](Signer.md).[provider](Signer.md#provider)

#### Defined in

[src/bsv/abstract-signer.ts:54](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/bsv/abstract-signer.ts#L54)

___

### DEBUG\_TAG

▪ `Static` `Readonly` **DEBUG\_TAG**: ``"SensiletSigner"``

#### Defined in

[src/bsv/signers/sensilet-signer.ts:44](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/bsv/signers/sensilet-signer.ts#L44)

## Accessors

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

[src/bsv/abstract-signer.ts:67](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/bsv/abstract-signer.ts#L67)

## Methods

### connect

▸ **connect**(`provider`): `Promise`<[`SensiletSigner`](SensiletSigner.md)\>

Connect a provider to `this`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `provider` | [`Provider`](Provider.md) | The target provider. |

#### Returns

`Promise`<[`SensiletSigner`](SensiletSigner.md)\>

#### Overrides

[Signer](Signer.md).[connect](Signer.md#connect)

#### Defined in

[src/bsv/signers/sensilet-signer.ts:98](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/bsv/signers/sensilet-signer.ts#L98)

___

### getBalance

▸ **getBalance**(`address?`): `Promise`<{ `confirmed`: `number` ; `unconfirmed`: `number`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address?` | [`AddressOption`](../README.md#addressoption) |

#### Returns

`Promise`<{ `confirmed`: `number` ; `unconfirmed`: `number`  }\>

#### Overrides

[Signer](Signer.md).[getBalance](Signer.md#getbalance)

#### Defined in

[src/bsv/signers/sensilet-signer.ts:127](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/bsv/signers/sensilet-signer.ts#L127)

___

### getConnectedTarget

▸ **getConnectedTarget**(): `Promise`<`SensiletWalletAPI`\>

Get an object that can directly interact with the Sensilet wallet,
if there is no connection with the wallet, it will request to establish a connection.

#### Returns

`Promise`<`SensiletWalletAPI`\>

SensiletWalletAPI

#### Defined in

[src/bsv/signers/sensilet-signer.ts:83](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/bsv/signers/sensilet-signer.ts#L83)

___

### getDefaultAddress

▸ **getDefaultAddress**(): `Promise`<[`Address`](bsv.Address.md)\>

#### Returns

`Promise`<[`Address`](bsv.Address.md)\>

A promise which resolves to the address to the default private key of the signer.

#### Overrides

[Signer](Signer.md).[getDefaultAddress](Signer.md#getdefaultaddress)

#### Defined in

[src/bsv/signers/sensilet-signer.ts:116](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/bsv/signers/sensilet-signer.ts#L116)

___

### getDefaultPubKey

▸ **getDefaultPubKey**(): `Promise`<[`PublicKey`](bsv.PublicKey.md)\>

#### Returns

`Promise`<[`PublicKey`](bsv.PublicKey.md)\>

A promise which resolves to the public key of the default private key of the signer.

#### Overrides

[Signer](Signer.md).[getDefaultPubKey](Signer.md#getdefaultpubkey)

#### Defined in

[src/bsv/signers/sensilet-signer.ts:134](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/bsv/signers/sensilet-signer.ts#L134)

___

### getNetwork

▸ **getNetwork**(): `Promise`<[`Network`](../interfaces/bsv.Networks.Network.md)\>

#### Returns

`Promise`<[`Network`](../interfaces/bsv.Networks.Network.md)\>

#### Defined in

[src/bsv/signers/sensilet-signer.ts:122](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/bsv/signers/sensilet-signer.ts#L122)

___

### getPubKey

▸ **getPubKey**(`address`): `Promise`<[`PublicKey`](bsv.PublicKey.md)\>

**`Throws`**

If the private key for the address does not belong this signer.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | [`AddressOption`](../README.md#addressoption) | The request address, using the default address if omitted. |

#### Returns

`Promise`<[`PublicKey`](bsv.PublicKey.md)\>

The public key result.

#### Overrides

[Signer](Signer.md).[getPubKey](Signer.md#getpubkey)

#### Defined in

[src/bsv/signers/sensilet-signer.ts:140](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/bsv/signers/sensilet-signer.ts#L140)

___

### getSensilet

▸ **getSensilet**(): `SensiletWalletAPI`

Get an object that can directly interact with the Sensilet wallet

#### Returns

`SensiletWalletAPI`

SensiletWalletAPI or undefined if the provider has not yet established a connection with the wallet

#### Defined in

[src/bsv/signers/sensilet-signer.ts:62](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/bsv/signers/sensilet-signer.ts#L62)

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

[src/bsv/signers/sensilet-signer.ts:212](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/bsv/signers/sensilet-signer.ts#L212)

___

### isSensiletConnected

▸ **isSensiletConnected**(): `Promise`<`boolean`\>

Check if the wallet is connected

#### Returns

`Promise`<`boolean`\>

true | false

#### Defined in

[src/bsv/signers/sensilet-signer.ts:70](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/bsv/signers/sensilet-signer.ts#L70)

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

#### Inherited from

[Signer](Signer.md).[listUnspent](Signer.md#listunspent)

#### Defined in

[src/bsv/abstract-signer.ts:108](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/bsv/abstract-signer.ts#L108)

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

#### Inherited from

[Signer](Signer.md).[signAndsendTransaction](Signer.md#signandsendtransaction)

#### Defined in

[src/bsv/abstract-signer.ts:157](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/bsv/abstract-signer.ts#L157)

___

### signMessage

▸ **signMessage**(`message`, `address?`): `Promise`<`string`\>

Sign a message string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | The message to be signed. |
| `address?` | [`AddressOption`](../README.md#addressoption) | The optional address whose private key will be used to sign `message`, using the default private key if omitted. |

#### Returns

`Promise`<`string`\>

A promise which resolves to the signautre of the message.

#### Overrides

[Signer](Signer.md).[signMessage](Signer.md#signmessage)

#### Defined in

[src/bsv/signers/sensilet-signer.ts:204](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/bsv/signers/sensilet-signer.ts#L204)

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

[src/bsv/signers/sensilet-signer.ts:144](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/bsv/signers/sensilet-signer.ts#L144)

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

[src/bsv/signers/sensilet-signer.ts:165](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/bsv/signers/sensilet-signer.ts#L165)

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

[src/bsv/abstract-signer.ts:171](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/bsv/abstract-signer.ts#L171)
