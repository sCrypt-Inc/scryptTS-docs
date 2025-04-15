[**bitcoinjs-lib v0.2.9-beta.16**](../README.md)

***

[bitcoinjs-lib](../README.md) / StateLib

# Class: StateLib\<T\>

Defined in: [packages/scrypt-ts-btc/src/smart-contract/builtin-libs/stateLib.ts:11](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/builtin-libs/stateLib.ts#L11)

Library for computing the hash of a state.

## Onchain

## Extends

- [`SmartContractLib`](SmartContractLib.md)

## Type Parameters

• **T** *extends* `StructObject`

## Constructors

### new StateLib()

> **new StateLib**\<`T`\>(...`args`): [`StateLib`](StateLib.md)\<`T`\>

Defined in: [packages/scrypt-ts-btc/src/smart-contract/smartContractLib.ts:29](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/smartContractLib.ts#L29)

#### Parameters

##### args

...`SupportedParamType`[]

#### Returns

[`StateLib`](StateLib.md)\<`T`\>

#### Inherited from

[`SmartContractLib`](SmartContractLib.md).[`constructor`](SmartContractLib.md#constructors)

## Other

### args

> **args**: `any`[] = `[]`

Defined in: [packages/scrypt-ts-btc/src/smart-contract/smartContractLib.ts:28](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/smartContractLib.ts#L28)

#### Inherited from

[`SmartContractLib`](SmartContractLib.md).[`args`](SmartContractLib.md#args-1)

***

### artifact

> `static` **artifact**: [`Artifact`](../interfaces/Artifact.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/smartContractLib.ts:15](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/smartContractLib.ts#L15)

#### Inherited from

[`SmartContractLib`](SmartContractLib.md).[`artifact`](SmartContractLib.md#artifact)

***

### stateType?

> `static` `optional` **stateType**: `string`

Defined in: [packages/scrypt-ts-btc/src/smart-contract/smartContractLib.ts:16](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/smartContractLib.ts#L16)

#### Inherited from

[`SmartContractLib`](SmartContractLib.md).[`stateType`](SmartContractLib.md#statetype)

***

### loadArtifact()

> `static` **loadArtifact**(`artifact`): *typeof* [`SmartContractLib`](SmartContractLib.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/smartContractLib.ts:18](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/smartContractLib.ts#L18)

#### Parameters

##### artifact

[`Artifact`](../interfaces/Artifact.md)

#### Returns

*typeof* [`SmartContractLib`](SmartContractLib.md)

#### Inherited from

[`SmartContractLib`](SmartContractLib.md).[`loadArtifact`](SmartContractLib.md#loadartifact)

## State

### stateHash()

> `static` **stateHash**\<`ST`\>(`this`, `state`): [`Ripemd160`](../type-aliases/Ripemd160.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/builtin-libs/stateLib.ts:19](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/builtin-libs/stateLib.ts#L19)

Calculate the hash of the state object

#### Type Parameters

• **ST** *extends* `StructObject`

#### Parameters

##### this

(...`args`) => [`StateLib`](StateLib.md)\<`ST`\>

##### state

`ST`

the state object

#### Returns

[`Ripemd160`](../type-aliases/Ripemd160.md)

the hash byte string of the state object

#### Onchain
