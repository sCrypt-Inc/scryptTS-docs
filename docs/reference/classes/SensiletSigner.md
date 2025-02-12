[scrypt-ts](../README.md) / SensiletSigner

# Class: SensiletSigner

a [signer][https://docs.scrypt.io/how-to-test-a-contract#signer](https://docs.scrypt.io/how-to-test-a-contract#signer) which implemented the protocol with the [sensilet wallet][https://sensilet.com](https://sensilet.com),
and dapps can use to interact with the Sensilet wallet

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
- [getConnectedTarget](SensiletSigner.md#getconnectedtarget)
- [provider](SensiletSigner.md#provider)
- [DEBUG\_TAG](SensiletSigner.md#debug_tag)

### Accessors

- [connectedProvider](SensiletSigner.md#connectedprovider)

### Methods

- [connect](SensiletSigner.md#connect)
- [getBalance](SensiletSigner.md#getbalance)
- [getDefaultAddress](SensiletSigner.md#getdefaultaddress)
- [getDefaultPubKey](SensiletSigner.md#getdefaultpubkey)
- [getNetwork](SensiletSigner.md#getnetwork)
- [getPubKey](SensiletSigner.md#getpubkey)
- [getSignatures](SensiletSigner.md#getsignatures)
- [isAuthenticated](SensiletSigner.md#isauthenticated)
- [listUnspent](SensiletSigner.md#listunspent)
- [requestAuth](SensiletSigner.md#requestauth)
- [signAndsendTransaction](SensiletSigner.md#signandsendtransaction)
- [signMessage](SensiletSigner.md#signmessage)
- [signRawTransaction](SensiletSigner.md#signrawtransaction)
- [signTransaction](SensiletSigner.md#signtransaction)
- [isSigner](SensiletSigner.md#issigner)

## Constructors

### constructor

• **new SensiletSigner**(`provider`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `provider` | [`Provider`](Provider.md) |

#### Overrides

[Signer](Signer.md).[constructor](Signer.md#constructor)

#### Defined in

dist/bsv/signers/sensilet-signer.d.ts:14

## Properties

### \_address

• `Private` **\_address**: `any`

#### Defined in

dist/bsv/signers/sensilet-signer.d.ts:13

___

### \_isSigner

• `Readonly` **\_isSigner**: `boolean`

#### Inherited from

[Signer](Signer.md).[_isSigner](Signer.md#_issigner)

#### Defined in

dist/bsv/abstract-signer.d.ts:57

___

### \_target

• `Private` **\_target**: `any`

#### Defined in

dist/bsv/signers/sensilet-signer.d.ts:12

___

### getConnectedTarget

• `Private` **getConnectedTarget**: `any`

#### Defined in

dist/bsv/signers/sensilet-signer.d.ts:28

___

### provider

• `Optional` **provider**: [`Provider`](Provider.md)

#### Inherited from

[Signer](Signer.md).[provider](Signer.md#provider)

#### Defined in

dist/bsv/abstract-signer.d.ts:56

___

### DEBUG\_TAG

▪ `Static` `Readonly` **DEBUG\_TAG**: ``"SensiletSigner"``

#### Defined in

dist/bsv/signers/sensilet-signer.d.ts:11

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
▸ **connect**(`provider?`): `Promise`<[`SensiletSigner`](SensiletSigner.md)\>
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
`Promise`<[`SensiletSigner`](SensiletSigner.md)\>
```

#### Overrides

[Signer](Signer.md).[connect](Signer.md#connect)

#### Defined in

dist/bsv/signers/sensilet-signer.d.ts:29

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

dist/bsv/signers/sensilet-signer.d.ts:32

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

dist/bsv/signers/sensilet-signer.d.ts:30

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

dist/bsv/signers/sensilet-signer.d.ts:36

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

dist/bsv/signers/sensilet-signer.d.ts:31

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

dist/bsv/signers/sensilet-signer.d.ts:37

___

### getSignatures

```ts
▸ **getSignatures**(`rawTxHex`, `sigRequests`): `Promise`<[`SignatureResponse`](../interfaces/Signa```
tureResponse.md)[]\>

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

dist/bsv/signers/sensilet-signer.d.ts:41

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

dist/bsv/signers/sensilet-signer.d.ts:19

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

dist/bsv/signers/sensilet-signer.d.ts:24

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

dist/bsv/signers/sensilet-signer.d.ts:40

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

dist/bsv/signers/sensilet-signer.d.ts:38

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

dist/bsv/signers/sensilet-signer.d.ts:39

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
