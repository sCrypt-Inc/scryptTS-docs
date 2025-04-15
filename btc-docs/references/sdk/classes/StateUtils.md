[**bitcoinjs-lib v0.2.9-beta.16**](../README.md)

***

[bitcoinjs-lib](../README.md) / StateUtils

# Class: StateUtils

Defined in: [packages/scrypt-ts-btc/src/smart-contract/builtin-libs/stateUtils.ts:17](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/builtin-libs/stateUtils.ts#L17)

state utils library

## Onchain

## Extends

- [`SmartContractLib`](SmartContractLib.md)

## Constructors

### new StateUtils()

> **new StateUtils**(...`args`): [`StateUtils`](StateUtils.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/smartContractLib.ts:29](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/smartContractLib.ts#L29)

#### Parameters

##### args

...`SupportedParamType`[]

#### Returns

[`StateUtils`](StateUtils.md)

#### Inherited from

[`SmartContractLib`](SmartContractLib.md).[`constructor`](SmartContractLib.md#constructors)

## Properties

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

## Methods

### buildStateHashRootOutput()

> `static` **buildStateHashRootOutput**(`stateHashes`, `t_leadingStateRoots`, `t_stateCount`): [`ByteString`](../type-aliases/ByteString.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/builtin-libs/stateUtils.ts:61](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/builtin-libs/stateUtils.ts#L61)

Build state output with leading state roots, and verify the user pass-in stateHashes as well

#### Parameters

##### stateHashes

[`StateHashes`](../type-aliases/StateHashes.md)

user passed-in stateHashes to verify

##### t\_leadingStateRoots

[`ByteString`](../type-aliases/ByteString.md)

leading state roots of curTx outputs which should be trustable

##### t\_stateCount

[`Int32`](../type-aliases/Int32.md)

the number of states in curTx which should be trustable

#### Returns

[`ByteString`](../type-aliases/ByteString.md)

serialized state output in format ByteString

***

### checkInputStateHash()

> `static` **checkInputStateHash**(`proof`, `stateHash`, `t_prevout`): `void`

Defined in: [packages/scrypt-ts-btc/src/smart-contract/builtin-libs/stateUtils.ts:101](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/builtin-libs/stateUtils.ts#L101)

Check if state of prev output corresponding to an input

#### Parameters

##### proof

[`InputStateProof`](../type-aliases/InputStateProof.md)

input state proof

##### stateHash

[`ByteString`](../type-aliases/ByteString.md)

state hash of prev output corresponding to this input

##### t\_prevout

[`ByteString`](../type-aliases/ByteString.md)

prevout of this input which is trustable

#### Returns

`void`

***

### checkStateHash()

> `static` **checkStateHash**(`stateHashes`, `stateHash`, `t_hashRoot`, `t_outputIndex`): `void`

Defined in: [packages/scrypt-ts-btc/src/smart-contract/builtin-libs/stateUtils.ts:79](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/builtin-libs/stateUtils.ts#L79)

Use trustable hashRoot and outputIndex to check passed-in stateHashes and stateHash

#### Parameters

##### stateHashes

[`StateHashes`](../type-aliases/StateHashes.md)

passed-in stateHashes

##### stateHash

[`ByteString`](../type-aliases/ByteString.md)

passed-in stateHash

##### t\_hashRoot

[`ByteString`](../type-aliases/ByteString.md)

trustable hashRoot

##### t\_outputIndex

[`Int32`](../type-aliases/Int32.md)

trustable outputIndex

#### Returns

`void`

***

### checkStateHashRoot()

> `static` **checkStateHashRoot**(`stateHashes`, `t_hashRoot`): `void`

Defined in: [packages/scrypt-ts-btc/src/smart-contract/builtin-libs/stateUtils.ts:24](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/builtin-libs/stateUtils.ts#L24)

Check if stateHashes match hashRoot

#### Parameters

##### stateHashes

[`StateHashes`](../type-aliases/StateHashes.md)

state hash array of tx outputs

##### t\_hashRoot

[`ByteString`](../type-aliases/ByteString.md)

trustable state hash root

#### Returns

`void`

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

***

### padEmptyStateRoots()

> `static` **padEmptyStateRoots**(`stateCount`): [`ByteString`](../type-aliases/ByteString.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/builtin-libs/stateUtils.ts:41](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/builtin-libs/stateUtils.ts#L41)

Pad empty state roots to fill the state root array

#### Parameters

##### stateCount

[`Int32`](../type-aliases/Int32.md)

the number of states

#### Returns

[`ByteString`](../type-aliases/ByteString.md)

padding state roots
