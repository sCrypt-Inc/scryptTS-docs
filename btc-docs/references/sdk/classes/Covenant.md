[**bitcoinjs-lib v0.2.9-beta.16**](../README.md)

***

[bitcoinjs-lib](../README.md) / Covenant

# Class: Covenant

Defined in: [packages/scrypt-ts-btc/src/covenant.ts:40](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/covenant.ts#L40)

Covenant base class. `Covenant` is a wrapper for `Taproot`. `Covenant` can contain multiple `SmartContract`.
Each `SmartContract` is an script path to spend the `Taproot` locking script.

## Extended by

- [`StatefulCovenant`](StatefulCovenant.md)

## Constructors

### new Covenant()

> **new Covenant**(`subContracts`, `options`): [`Covenant`](Covenant.md)

Defined in: [packages/scrypt-ts-btc/src/covenant.ts:49](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/covenant.ts#L49)

#### Parameters

##### subContracts

`AliasedContract`\<`StructObject`\>[]

##### options

###### network?

[`SupportedNetwork`](../type-aliases/SupportedNetwork.md)

#### Returns

[`Covenant`](Covenant.md)

## Properties

### accessedInputStateProofs

> `readonly` **accessedInputStateProofs**: `boolean`

Defined in: [packages/scrypt-ts-btc/src/covenant.ts:46](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/covenant.ts#L46)

***

### address

> `readonly` **address**: `string`

Defined in: [packages/scrypt-ts-btc/src/covenant.ts:45](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/covenant.ts#L45)

***

### lockingScript

> `readonly` **lockingScript**: `Script`

Defined in: [packages/scrypt-ts-btc/src/covenant.ts:44](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/covenant.ts#L44)

***

### subContracts

> **subContracts**: `Record`\<`string`, [`SmartContract`](SmartContract.md)\<`StructObject`\>\>

Defined in: [packages/scrypt-ts-btc/src/covenant.ts:41](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/covenant.ts#L41)

***

### tpubkey

> `readonly` **tpubkey**: `string`

Defined in: [packages/scrypt-ts-btc/src/covenant.ts:43](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/covenant.ts#L43)

***

### utxo?

> `optional` **utxo**: `UTXO`

Defined in: [packages/scrypt-ts-btc/src/covenant.ts:47](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/covenant.ts#L47)

## Accessors

### lockingScriptHex

#### Get Signature

> **get** **lockingScriptHex**(): [`ByteString`](../type-aliases/ByteString.md)

Defined in: [packages/scrypt-ts-btc/src/covenant.ts:116](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/covenant.ts#L116)

##### Returns

[`ByteString`](../type-aliases/ByteString.md)

***

### stateHash

#### Get Signature

> **get** **stateHash**(): [`ByteString`](../type-aliases/ByteString.md)

Defined in: [packages/scrypt-ts-btc/src/covenant.ts:139](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/covenant.ts#L139)

##### Returns

[`ByteString`](../type-aliases/ByteString.md)

## Methods

### bindToUtxo()

> **bindToUtxo**(`utxo`): `this`

Defined in: [packages/scrypt-ts-btc/src/covenant.ts:106](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/covenant.ts#L106)

#### Parameters

##### utxo

`Optional`\<`UTXO`, `"script"`\>

#### Returns

`this`

***

### getSubContract()

> **getSubContract**(`alias`): [`SmartContract`](SmartContract.md)\<`StructObject`\>

Defined in: [packages/scrypt-ts-btc/src/covenant.ts:120](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/covenant.ts#L120)

#### Parameters

##### alias

`string` = `'default'`

#### Returns

[`SmartContract`](SmartContract.md)\<`StructObject`\>

***

### getSubContractCallArg()

> **getSubContractCallArg**(`inputWitness`, `method`, `argName`, `alias`?): `SupportedParamType`

Defined in: [packages/scrypt-ts-btc/src/covenant.ts:124](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/covenant.ts#L124)

#### Parameters

##### inputWitness

`Witness`

##### method

`string`

##### argName

`string`

##### alias?

`string`

#### Returns

`SupportedParamType`

***

### verifyWitnessProgram()

> **verifyWitnessProgram**(`witness`): `void`

Defined in: [packages/scrypt-ts-btc/src/covenant.ts:130](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/covenant.ts#L130)

#### Parameters

##### witness

`Witness`

#### Returns

`void`

***

### createCovenant()

> `static` **createCovenant**\<`T`\>(`contract`, `options`?): [`Covenant`](Covenant.md)

Defined in: [packages/scrypt-ts-btc/src/covenant.ts:83](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/covenant.ts#L83)

#### Type Parameters

• **T** *extends* `StructObject`

#### Parameters

##### contract

[`SmartContract`](SmartContract.md)\<`T`\>

##### options?

###### network?

[`SupportedNetwork`](../type-aliases/SupportedNetwork.md)

###### verify?

`boolean`

#### Returns

[`Covenant`](Covenant.md)
