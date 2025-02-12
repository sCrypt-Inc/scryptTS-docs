[scrypt-ts](../README.md) / TAALSigner

# Class: TAALSigner

A `Signer` is a class which in some way directly or indirectly has access to a private key, which can sign messages and transactions to authorize the network to perform operations.

## Hierarchy

- [`Signer`](Signer.md)

  ↳ **`TAALSigner`**

## Table of contents

### Constructors

- [constructor](TAALSigner.md#constructor)

### Properties

- [\_app\_name](TAALSigner.md#_app_name)
- [\_isSigner](TAALSigner.md#_issigner)
- [\_port](TAALSigner.md#_port)
- [assertIsAuthenticated](TAALSigner.md#assertisauthenticated)
- [provider](TAALSigner.md#provider)
- [signCustomInput](TAALSigner.md#signcustominput)

### Accessors

- [connectedProvider](TAALSigner.md#connectedprovider)

### Methods

- [connect](TAALSigner.md#connect)
- [getBalance](TAALSigner.md#getbalance)
- [getDefaultAddress](TAALSigner.md#getdefaultaddress)
- [getDefaultPubKey](TAALSigner.md#getdefaultpubkey)
- [getNetwork](TAALSigner.md#getnetwork)
- [getPubKey](TAALSigner.md#getpubkey)
- [getSignatures](TAALSigner.md#getsignatures)
- [isAuthenticated](TAALSigner.md#isauthenticated)
- [listUnspent](TAALSigner.md#listunspent)
- [requestAuth](TAALSigner.md#requestauth)
- [signAndsendTransaction](TAALSigner.md#signandsendtransaction)
- [signMessage](TAALSigner.md#signmessage)
- [signRawTransaction](TAALSigner.md#signrawtransaction)
- [signTransaction](TAALSigner.md#signtransaction)
- [updateInputsWithInfo](TAALSigner.md#updateinputswithinfo)
- [isSigner](TAALSigner.md#issigner)

## Constructors

### constructor

• **new TAALSigner**(`provider`, `app_name?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `provider` | [`Provider`](Provider.md) |
| `app_name?` | `string` |

#### Overrides

[Signer](Signer.md).[constructor](Signer.md#constructor)

#### Defined in

dist/bsv/signers/taal-signer/index.d.ts:14

## Properties

### \_app\_name

• `Private` **\_app\_name**: `any`

#### Defined in

dist/bsv/signers/taal-signer/index.d.ts:13

___

### \_isSigner

• `Readonly` **\_isSigner**: `boolean`

#### Inherited from

[Signer](Signer.md).[_isSigner](Signer.md#_issigner)

#### Defined in

dist/bsv/abstract-signer.d.ts:57

___

### \_port

• `Private` **\_port**: `any`

#### Defined in

dist/bsv/signers/taal-signer/index.d.ts:12

___

### assertIsAuthenticated

• `Private` **assertIsAuthenticated**: `any`

#### Defined in

dist/bsv/signers/taal-signer/index.d.ts:20

___

### provider

• `Optional` **provider**: [`Provider`](Provider.md)

#### Inherited from

[Signer](Signer.md).[provider](Signer.md#provider)

#### Defined in

dist/bsv/abstract-signer.d.ts:56

___

### signCustomInput

• `Private` **signCustomInput**: `any`

#### Defined in

dist/bsv/signers/taal-signer/index.d.ts:41

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
▸ **connect**(`provider?`): `Promise`<[`TAALSigner`](TAALSigner.md)\>
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
`Promise`<[`TAALSigner`](TAALSigner.md)\>
```

#### Overrides

[Signer](Signer.md).[connect](Signer.md#connect)

#### Defined in

dist/bsv/signers/taal-signer/index.d.ts:21

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

dist/bsv/signers/taal-signer/index.d.ts:37

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

dist/bsv/signers/taal-signer/index.d.ts:22

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

dist/bsv/signers/taal-signer/index.d.ts:23

___

### getNetwork

```ts
▸ **getNetwork**(): `Promise`<`any`\>
```

#### Returns

```ts
`Promise`<`any`\>
```

#### Defined in

dist/bsv/signers/taal-signer/index.d.ts:26

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

dist/bsv/signers/taal-signer/index.d.ts:24

___

### getSignatures

```ts
▸ **getSignatures**(`rawTxHex`, `sigRequests`): `Promise`<[`SignatureResponse`](../interfaces/SignatureResponse.md)[]\>
```

Get signatures with api

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rawTxHex` | `string` | a transation raw hex |
| `sigRequests` | [`SignatureRequest`](../interfaces/SignatureRequest.md)[] | a `SignatureRequest` array for the some inputs of the transaction. |

#### Returns

```ts
`Promise`<[`SignatureResponse`](../interfaces/SignatureResponse.md)[]\>
```

a `SignatureResponse` array

#### Overrides

[Signer](Signer.md).[getSignatures](Signer.md#getsignatures)

#### Defined in

dist/bsv/signers/taal-signer/index.d.ts:35

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

dist/bsv/signers/taal-signer/index.d.ts:15

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

#### Inherited from

[Signer](Signer.md).[listUnspent](Signer.md#listunspent)

#### Defined in

dist/bsv/abstract-signer.d.ts:147

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

dist/bsv/signers/taal-signer/index.d.ts:16

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

dist/bsv/signers/taal-signer/index.d.ts:36

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

dist/bsv/signers/taal-signer/index.d.ts:25

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

dist/bsv/signers/taal-signer/index.d.ts:28

___

### updateInputsWithInfo

```ts
▸ **updateInputsWithInfo**(`tx`, `inputInfos`): [`Transaction`](bsv.Transaction-1.md)
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `tx` | [`Transaction`](bsv.Transaction-1.md) |
| `inputInfos` | `InputInfo`[] |

#### Returns

[`Transaction`](bsv.Transaction-1.md)

#### Defined in

dist/bsv/signers/taal-signer/index.d.ts:27

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
