[**bitcoinjs-lib v0.2.9-beta.16**](../README.md)

***

[bitcoinjs-lib](../README.md) / StatefulCovenant

# Class: StatefulCovenant\<StateT\>

Defined in: [packages/scrypt-ts-btc/src/covenant.ts:148](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/covenant.ts#L148)

Stateful covenant base class.

## Extends

- [`Covenant`](Covenant.md)

## Type Parameters

• **StateT** *extends* `StructObject`

## Constructors

### new StatefulCovenant()

> **new StatefulCovenant**\<`StateT`\>(`state`, `subContracts`, `options`): [`StatefulCovenant`](StatefulCovenant.md)\<`StateT`\>

Defined in: [packages/scrypt-ts-btc/src/covenant.ts:149](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/covenant.ts#L149)

#### Parameters

##### state

`StateT`

##### subContracts

`AliasedContract`\<`StateT`\>[]

##### options

###### network?

[`SupportedNetwork`](../type-aliases/SupportedNetwork.md)

#### Returns

[`StatefulCovenant`](StatefulCovenant.md)\<`StateT`\>

#### Overrides

[`Covenant`](Covenant.md).[`constructor`](Covenant.md#constructors)

## Properties

### accessedInputStateProofs

> `readonly` **accessedInputStateProofs**: `boolean`

Defined in: [packages/scrypt-ts-btc/src/covenant.ts:46](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/covenant.ts#L46)

#### Inherited from

[`Covenant`](Covenant.md).[`accessedInputStateProofs`](Covenant.md#accessedinputstateproofs)

***

### address

> `readonly` **address**: `string`

Defined in: [packages/scrypt-ts-btc/src/covenant.ts:45](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/covenant.ts#L45)

#### Inherited from

[`Covenant`](Covenant.md).[`address`](Covenant.md#address)

***

### lockingScript

> `readonly` **lockingScript**: `Script`

Defined in: [packages/scrypt-ts-btc/src/covenant.ts:44](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/covenant.ts#L44)

#### Inherited from

[`Covenant`](Covenant.md).[`lockingScript`](Covenant.md#lockingscript)

***

### subContracts

> **subContracts**: `Record`\<`string`, [`SmartContract`](SmartContract.md)\<`StructObject`\>\>

Defined in: [packages/scrypt-ts-btc/src/covenant.ts:41](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/covenant.ts#L41)

#### Inherited from

[`Covenant`](Covenant.md).[`subContracts`](Covenant.md#subcontracts-1)

***

### tpubkey

> `readonly` **tpubkey**: `string`

Defined in: [packages/scrypt-ts-btc/src/covenant.ts:43](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/covenant.ts#L43)

#### Inherited from

[`Covenant`](Covenant.md).[`tpubkey`](Covenant.md#tpubkey)

***

### utxo?

> `optional` **utxo**: `StateProvableUtxo`

Defined in: [packages/scrypt-ts-btc/src/covenant.ts:172](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/covenant.ts#L172)

#### Overrides

[`Covenant`](Covenant.md).[`utxo`](Covenant.md#utxo)

***

### stateTypeBearer

> `static` **stateTypeBearer**: *typeof* [`SmartContract`](SmartContract.md)

Defined in: [packages/scrypt-ts-btc/src/covenant.ts:210](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/covenant.ts#L210)

## Accessors

### lockingScriptHex

#### Get Signature

> **get** **lockingScriptHex**(): [`ByteString`](../type-aliases/ByteString.md)

Defined in: [packages/scrypt-ts-btc/src/covenant.ts:116](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/covenant.ts#L116)

##### Returns

[`ByteString`](../type-aliases/ByteString.md)

#### Inherited from

[`Covenant`](Covenant.md).[`lockingScriptHex`](Covenant.md#lockingscripthex)

***

### state

#### Get Signature

> **get** **state**(): `StateT`

Defined in: [packages/scrypt-ts-btc/src/covenant.ts:197](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/covenant.ts#L197)

##### Returns

`StateT`

#### Set Signature

> **set** **state**(`newState`): `void`

Defined in: [packages/scrypt-ts-btc/src/covenant.ts:201](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/covenant.ts#L201)

##### Parameters

###### newState

`StateT`

##### Returns

`void`

***

### stateHash

#### Get Signature

> **get** **stateHash**(): [`ByteString`](../type-aliases/ByteString.md)

Defined in: [packages/scrypt-ts-btc/src/covenant.ts:236](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/covenant.ts#L236)

##### Returns

[`ByteString`](../type-aliases/ByteString.md)

#### Overrides

[`Covenant`](Covenant.md).[`stateHash`](Covenant.md#statehash)

## Methods

### bindToUtxo()

> **bindToUtxo**(`utxo`): `this`

Defined in: [packages/scrypt-ts-btc/src/covenant.ts:174](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/covenant.ts#L174)

#### Parameters

##### utxo

`Optional`\<`StateProvableUtxo`, `"script"`\>

#### Returns

`this`

#### Overrides

[`Covenant`](Covenant.md).[`bindToUtxo`](Covenant.md#bindtoutxo)

***

### clone()

> **clone**(): [`StatefulCovenant`](StatefulCovenant.md)\<`StateT`\>

Defined in: [packages/scrypt-ts-btc/src/covenant.ts:181](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/covenant.ts#L181)

Clone the covenant.

#### Returns

[`StatefulCovenant`](StatefulCovenant.md)\<`StateT`\>

***

### getSubContract()

> **getSubContract**(`alias`): [`SmartContract`](SmartContract.md)\<`StructObject`\>

Defined in: [packages/scrypt-ts-btc/src/covenant.ts:120](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/covenant.ts#L120)

#### Parameters

##### alias

`string` = `'default'`

#### Returns

[`SmartContract`](SmartContract.md)\<`StructObject`\>

#### Inherited from

[`Covenant`](Covenant.md).[`getSubContract`](Covenant.md#getsubcontract)

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

#### Inherited from

[`Covenant`](Covenant.md).[`getSubContractCallArg`](Covenant.md#getsubcontractcallarg)

***

### next()

> **next**(`newState`): [`StatefulCovenant`](StatefulCovenant.md)\<`StateT`\>

Defined in: [packages/scrypt-ts-btc/src/covenant.ts:190](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/covenant.ts#L190)

Get a new covenant instance with the new state.

#### Parameters

##### newState

`StateT`

the new state

#### Returns

[`StatefulCovenant`](StatefulCovenant.md)\<`StateT`\>

the new covenant

***

### verifyWitnessProgram()

> **verifyWitnessProgram**(`witness`): `void`

Defined in: [packages/scrypt-ts-btc/src/covenant.ts:130](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/covenant.ts#L130)

#### Parameters

##### witness

`Witness`

#### Returns

`void`

#### Inherited from

[`Covenant`](Covenant.md).[`verifyWitnessProgram`](Covenant.md#verifywitnessprogram)

***

### createCovenant()

> `static` **createCovenant**\<`StateT`\>(`contract`, `options`?): [`StatefulCovenant`](StatefulCovenant.md)\<`StateT`\>

Defined in: [packages/scrypt-ts-btc/src/covenant.ts:212](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/covenant.ts#L212)

#### Type Parameters

• **StateT** *extends* `StructObject`

#### Parameters

##### contract

[`SmartContract`](SmartContract.md)\<`StateT`\>

##### options?

###### network?

[`SupportedNetwork`](../type-aliases/SupportedNetwork.md)

###### verify?

`boolean`

#### Returns

[`StatefulCovenant`](StatefulCovenant.md)\<`StateT`\>

#### Overrides

[`Covenant`](Covenant.md).[`createCovenant`](Covenant.md#createcovenant)
