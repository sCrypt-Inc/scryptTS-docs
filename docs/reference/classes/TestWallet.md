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

- [\_checkAddressOption](TestWallet.md#_checkaddressoption)
- [\_getAddressesIn](TestWallet.md#_getaddressesin)
- [\_getPrivateKeys](TestWallet.md#_getprivatekeys)
- [connect](TestWallet.md#connect)
- [getBalance](TestWallet.md#getbalance)
- [getDefaultAddress](TestWallet.md#getdefaultaddress)
- [getDefaultPubKey](TestWallet.md#getdefaultpubkey)
- [getPubKey](TestWallet.md#getpubkey)
- [getSignatures](TestWallet.md#getsignatures)
- [listUnspent](TestWallet.md#listunspent)
- [pushPrivateKey](TestWallet.md#pushprivatekey)
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

[src/bsv/wallets/test-wallet.ts:22](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/bsv/wallets/test-wallet.ts#L22)

## Properties

### \_isSigner

• `Readonly` **\_isSigner**: `boolean`

#### Inherited from

[Signer](Signer.md).[_isSigner](Signer.md#_issigner)

#### Defined in

[src/bsv/abstract-signer.ts:55](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/bsv/abstract-signer.ts#L55)

___

### \_privateKeys

• `Private` `Readonly` **\_privateKeys**: [`PrivateKey`](bsv.PrivateKey.md)[]

#### Defined in

[src/bsv/wallets/test-wallet.ts:18](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/bsv/wallets/test-wallet.ts#L18)

___

### \_utxoManagers

• `Private` **\_utxoManagers**: `Map`<`string`, `CacheableUtxoManager`\>

#### Defined in

[src/bsv/wallets/test-wallet.ts:20](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/bsv/wallets/test-wallet.ts#L20)

___

### provider

• `Optional` **provider**: [`Provider`](Provider.md)

#### Inherited from

[Signer](Signer.md).[provider](Signer.md#provider)

#### Defined in

[src/bsv/abstract-signer.ts:54](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/bsv/abstract-signer.ts#L54)

## Accessors

### \_defaultPrivateKey

• `Private` `get` **_defaultPrivateKey**(): [`PrivateKey`](bsv.PrivateKey.md)

#### Returns

[`PrivateKey`](bsv.PrivateKey.md)

#### Defined in

[src/bsv/wallets/test-wallet.ts:148](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/bsv/wallets/test-wallet.ts#L148)

___

### addresses

• `get` **addresses**(): `string`[]

#### Returns

`string`[]

#### Defined in

[src/bsv/wallets/test-wallet.ts:36](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/bsv/wallets/test-wallet.ts#L36)

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

[src/bsv/abstract-signer.ts:67](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/bsv/abstract-signer.ts#L67)

___

### network

• `get` **network**(): [`Network`](../interfaces/bsv.Networks.Network.md)

#### Returns

[`Network`](../interfaces/bsv.Networks.Network.md)

#### Defined in

[src/bsv/wallets/test-wallet.ts:32](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/bsv/wallets/test-wallet.ts#L32)

## Methods

### \_checkAddressOption

▸ `Private` **_checkAddressOption**(`address?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `address?` | [`AddressesOption`](../README.md#addressesoption) |

#### Returns

`void`

#### Defined in

[src/bsv/wallets/test-wallet.ts:137](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/bsv/wallets/test-wallet.ts#L137)

___

### \_getAddressesIn

▸ `Private` **_getAddressesIn**(`sigRequests?`): [`AddressesOption`](../README.md#addressesoption)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sigRequests?` | [`SignatureRequest`](../interfaces/SignatureRequest.md)[] |

#### Returns

[`AddressesOption`](../README.md#addressesoption)

#### Defined in

[src/bsv/wallets/test-wallet.ts:127](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/bsv/wallets/test-wallet.ts#L127)

___

### \_getPrivateKeys

▸ `Private` **_getPrivateKeys**(`address?`): [`PrivateKey`](bsv.PrivateKey.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `address?` | [`AddressesOption`](../README.md#addressesoption) |

#### Returns

[`PrivateKey`](bsv.PrivateKey.md)[]

#### Defined in

[src/bsv/wallets/test-wallet.ts:152](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/bsv/wallets/test-wallet.ts#L152)

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

[src/bsv/wallets/test-wallet.ts:111](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/bsv/wallets/test-wallet.ts#L111)

___

### getBalance

▸ **getBalance**(`address?`): `Promise`<{ `confirmed`: `number` ; `unconfirmed`: `number`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address?` | [`AddressOption`](../README.md#addressoption) |

#### Returns

`Promise`<{ `confirmed`: `number` ; `unconfirmed`: `number`  }\>

#### Inherited from

[Signer](Signer.md).[getBalance](Signer.md#getbalance)

#### Defined in

[src/bsv/abstract-signer.ts:114](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/bsv/abstract-signer.ts#L114)

___

### getDefaultAddress

▸ **getDefaultAddress**(): `Promise`<[`Address`](bsv.Address.md)\>

#### Returns

`Promise`<[`Address`](bsv.Address.md)\>

A promise which resolves to the address to the default private key of the signer.

#### Overrides

[Signer](Signer.md).[getDefaultAddress](Signer.md#getdefaultaddress)

#### Defined in

[src/bsv/wallets/test-wallet.ts:45](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/bsv/wallets/test-wallet.ts#L45)

___

### getDefaultPubKey

▸ **getDefaultPubKey**(): `Promise`<[`PublicKey`](bsv.PublicKey.md)\>

#### Returns

`Promise`<[`PublicKey`](bsv.PublicKey.md)\>

A promise which resolves to the public key of the default private key of the signer.

#### Overrides

[Signer](Signer.md).[getDefaultPubKey](Signer.md#getdefaultpubkey)

#### Defined in

[src/bsv/wallets/test-wallet.ts:49](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/bsv/wallets/test-wallet.ts#L49)

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

[src/bsv/wallets/test-wallet.ts:53](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/bsv/wallets/test-wallet.ts#L53)

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

[src/bsv/wallets/test-wallet.ts:87](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/bsv/wallets/test-wallet.ts#L87)

___

### listUnspent

▸ **listUnspent**(`address`, `options`): `Promise`<[`IUnspentOutput`](../interfaces/bsv.Transaction.IUnspentOutput.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | [`AddressOption`](../README.md#addressoption) |
| `options` | `UtxoQueryOptions` |

#### Returns

`Promise`<[`IUnspentOutput`](../interfaces/bsv.Transaction.IUnspentOutput.md)[]\>

#### Overrides

[Signer](Signer.md).[listUnspent](Signer.md#listunspent)

#### Defined in

[src/bsv/wallets/test-wallet.ts:117](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/bsv/wallets/test-wallet.ts#L117)

___

### pushPrivateKey

▸ **pushPrivateKey**(`privateKey`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateKey` | [`PrivateKey`](bsv.PrivateKey.md) \| [`PrivateKey`](bsv.PrivateKey.md)[] |

#### Returns

`void`

#### Defined in

[src/bsv/wallets/test-wallet.ts:40](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/bsv/wallets/test-wallet.ts#L40)

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

[src/bsv/abstract-signer.ts:157](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/bsv/abstract-signer.ts#L157)

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

[src/bsv/wallets/test-wallet.ts:83](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/bsv/wallets/test-wallet.ts#L83)

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

[src/bsv/wallets/test-wallet.ts:57](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/bsv/wallets/test-wallet.ts#L57)

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

[src/bsv/wallets/test-wallet.ts:76](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/bsv/wallets/test-wallet.ts#L76)

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

[src/bsv/abstract-signer.ts:171](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/bsv/abstract-signer.ts#L171)
