[scrypt-ts](../README.md) / DotwalletSigner

# Class: DotwalletSigner

a [signer][https://docs.scrypt.io/how-to-test-a-contract#signer](https://docs.scrypt.io/how-to-test-a-contract#signer) which implemented the protocol with the [dotwallet][https://www.dotwallet.com/en](https://www.dotwallet.com/en),
and dapps can use to interact with the dotwallet.

## Hierarchy

- [`Signer`](Signer.md)

  ↳ **`DotwalletSigner`**

## Table of contents

### Constructors

- [constructor](DotwalletSigner.md#constructor)

### Properties

- [\_address](DotwalletSigner.md#_address)
- [\_isSigner](DotwalletSigner.md#_issigner)
- [accessToken](DotwalletSigner.md#accesstoken)
- [default\_public\_key](DotwalletSigner.md#default_public_key)
- [provider](DotwalletSigner.md#provider)
- [sender](DotwalletSigner.md#sender)
- [state](DotwalletSigner.md#state)
- [utxos\_public\_key](DotwalletSigner.md#utxos_public_key)
- [DEBUG\_TAG](DotwalletSigner.md#debug_tag)

### Accessors

- [connectedProvider](DotwalletSigner.md#connectedprovider)

### Methods

- [connect](DotwalletSigner.md#connect)
- [getBalance](DotwalletSigner.md#getbalance)
- [getDefaultAddress](DotwalletSigner.md#getdefaultaddress)
- [getDefaultPubKey](DotwalletSigner.md#getdefaultpubkey)
- [getNetwork](DotwalletSigner.md#getnetwork)
- [getPubKey](DotwalletSigner.md#getpubkey)
- [getSignatures](DotwalletSigner.md#getsignatures)
- [isAuthenticated](DotwalletSigner.md#isauthenticated)
- [listUnspent](DotwalletSigner.md#listunspent)
- [requestAuth](DotwalletSigner.md#requestauth)
- [signAndsendTransaction](DotwalletSigner.md#signandsendtransaction)
- [signMessage](DotwalletSigner.md#signmessage)
- [signRawTransaction](DotwalletSigner.md#signrawtransaction)
- [signTransaction](DotwalletSigner.md#signtransaction)
- [isSigner](DotwalletSigner.md#issigner)

## Constructors

### constructor

• **new DotwalletSigner**(`accessToken`, `provider`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `accessToken` | `string` |
| `provider` | [`Provider`](Provider.md) |

#### Overrides

[Signer](Signer.md).[constructor](Signer.md#constructor)

#### Defined in

dist/bsv/signers/dotwallet-signer.d.ts:18

## Properties

### \_address

• `Private` **\_address**: `any`

#### Defined in

dist/bsv/signers/dotwallet-signer.d.ts:13

___

### \_isSigner

• `Readonly` **\_isSigner**: `boolean`

#### Inherited from

[Signer](Signer.md).[_isSigner](Signer.md#_issigner)

#### Defined in

dist/bsv/abstract-signer.d.ts:57

___

### accessToken

• `Private` **accessToken**: `any`

#### Defined in

dist/bsv/signers/dotwallet-signer.d.ts:12

___

### default\_public\_key

• `Private` **default\_public\_key**: `any`

#### Defined in

dist/bsv/signers/dotwallet-signer.d.ts:16

___

### provider

• `Optional` **provider**: [`Provider`](Provider.md)

#### Inherited from

[Signer](Signer.md).[provider](Signer.md#provider)

#### Defined in

dist/bsv/abstract-signer.d.ts:56

___

### sender

• `Private` **sender**: `any`

#### Defined in

dist/bsv/signers/dotwallet-signer.d.ts:15

___

### state

• `Private` **state**: `any`

#### Defined in

dist/bsv/signers/dotwallet-signer.d.ts:14

___

### utxos\_public\_key

• `Private` **utxos\_public\_key**: `any`

#### Defined in

dist/bsv/signers/dotwallet-signer.d.ts:17

___

### DEBUG\_TAG

▪ `Static` `Readonly` **DEBUG\_TAG**: ``"DotwalletSigner"``

#### Defined in

dist/bsv/signers/dotwallet-signer.d.ts:11

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

dist/bsv/abstract-signer.d.ts:133

## Methods

### connect

```ts
▸ **connect**(`provider?`): `Promise`<[`DotwalletSigner`](DotwalletSigner.md)\>
```

Connect a provider to `this`. If a new provider is specified when connecting,
a connection will be established for the new provider and then switched to the new provider.
If no new provider is specified, a connection is established for signer's built-in provider.
If neither exists, an exception is thrown.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `provider?` | [`Provider`](Provider.md) | The target provider. |

#### Returns

```ts
`Promise`<[`DotwalletSigner`](DotwalletSigner.md)\>
```

#### Overrides

[Signer](Signer.md).[connect](Signer.md#connect)

#### Defined in

dist/bsv/signers/dotwallet-signer.d.ts:32

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

#### Overrides

[Signer](Signer.md).[getBalance](Signer.md#getbalance)

#### Defined in

dist/bsv/signers/dotwallet-signer.d.ts:35

___

### getDefaultAddress

```ts
▸ **getDefaultAddress**(): `Promise`<[`Address`](bsv.Address.md)\>
```

#### Returns

```ts
`Promise`<[`Address`](bsv.Address.md)\>
```

A promise which resolves to the address to the default private key of the signer.

#### Overrides

[Signer](Signer.md).[getDefaultAddress](Signer.md#getdefaultaddress)

#### Defined in

dist/bsv/signers/dotwallet-signer.d.ts:33

___

### getDefaultPubKey

```ts
▸ **getDefaultPubKey**(): `Promise`<[`PublicKey`](bsv.PublicKey.md)\>
```

#### Returns

```ts
`Promise`<[`PublicKey`](bsv.PublicKey.md)\>
```

A promise which resolves to the public key of the default private key of the signer.

#### Overrides

[Signer](Signer.md).[getDefaultPubKey](Signer.md#getdefaultpubkey)

#### Defined in

dist/bsv/signers/dotwallet-signer.d.ts:39

___

### getNetwork

```ts
▸ **getNetwork**(): `Promise`<[`Network`](../interfaces/bsv.Networks.Network.md)\>
```

#### Returns

```ts
`Promise`<[`Network`](../interfaces/bsv.Networks.Network.md)\>
```

#### Defined in

dist/bsv/signers/dotwallet-signer.d.ts:34

___

### getPubKey

```ts
▸ **getPubKey**(`address`): `Promise`<[`PublicKey`](bsv.PublicKey.md)\>
```

**`Throws`**

If the private key for the address does not belong this signer.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | [`Address`](bsv.Address.md) | The request address, using the default address if omitted. |

#### Returns

```ts
`Promise`<[`PublicKey`](bsv.PublicKey.md)\>
```

The public key result.

#### Overrides

[Signer](Signer.md).[getPubKey](Signer.md#getpubkey)

#### Defined in

dist/bsv/signers/dotwallet-signer.d.ts:40

___

### getSignatures

```ts
▸ **getSignatures**(`rawTxHex`, `sigRequests`): `Promise`<[`SignatureResponse`](../interfaces/SignatureResponse.md)[]\>
```

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

#### Overrides

[Signer](Signer.md).[getSignatures](Signer.md#getsignatures)

#### Defined in

dist/bsv/signers/dotwallet-signer.d.ts:44

___

### isAuthenticated

```ts
▸ **isAuthenticated**(): `Promise`<`boolean`\>
```

Check if the wallet has been authenticated

#### Returns

```ts
`Promise`<`boolean`\>
```

true | false

#### Overrides

[Signer](Signer.md).[isAuthenticated](Signer.md#isauthenticated)

#### Defined in

dist/bsv/signers/dotwallet-signer.d.ts:23

___

### listUnspent

```ts
▸ **listUnspent**(`address`, `options?`): `Promise`<[`IUnspentOutput`](../interfaces/bsv.Transaction.IUnspentOutput.md)[]\>
```

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

#### Overrides

[Signer](Signer.md).[listUnspent](Signer.md#listunspent)

#### Defined in

dist/bsv/signers/dotwallet-signer.d.ts:51

___

### requestAuth

```ts
▸ **requestAuth**(): `Promise`<{ `error`: `string` ; `isAuthenticated`: `boolean`  }\>
```

Request wallet authentication

#### Returns

```ts
`Promise`<{ `error`: `string` ; `isAuthenticated`: `boolean`  }\>
```

A promise which resolves to if the wallet has been authenticated and the authenticate error message

#### Overrides

[Signer](Signer.md).[requestAuth](Signer.md#requestauth)

#### Defined in

dist/bsv/signers/dotwallet-signer.d.ts:28

___

### signAndsendTransaction

```ts
▸ **signAndsendTransaction**(`tx`, `options?`): `Promise`<[`TransactionResponse`](../interfaces/TransactionResponse.md)\>
```

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

#### Inherited from

[Signer](Signer.md).[signAndsendTransaction](Signer.md#signandsendtransaction)

#### Defined in

dist/bsv/abstract-signer.d.ts:140

___

### signMessage

```ts
▸ **signMessage**(`message`, `address?`): `Promise`<`string`\>
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

#### Overrides

[Signer](Signer.md).[signMessage](Signer.md#signmessage)

#### Defined in

dist/bsv/signers/dotwallet-signer.d.ts:43

___

### signRawTransaction

```ts
▸ **signRawTransaction**(`rawTxHex`, `options`): `Promise`<`string`\>
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

#### Overrides

[Signer](Signer.md).[signRawTransaction](Signer.md#signrawtransaction)

#### Defined in

dist/bsv/signers/dotwallet-signer.d.ts:41

___

### signTransaction

```ts
▸ **signTransaction**(`tx`, `options?`): `Promise`<[`Transaction`](bsv.Transaction-1.md)\>
```

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

#### Overrides

[Signer](Signer.md).[signTransaction](Signer.md#signtransaction)

#### Defined in

dist/bsv/signers/dotwallet-signer.d.ts:42

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

dist/bsv/abstract-signer.d.ts:162
