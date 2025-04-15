[**bitcoinjs-lib v0.2.9-beta.16**](../README.md)

***

[bitcoinjs-lib](../README.md) / Backtrace

# Class: Backtrace

Defined in: [packages/scrypt-ts-btc/src/smart-contract/builtin-libs/backtrace.ts:20](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/builtin-libs/backtrace.ts#L20)

Library for verifying backtraces all the way to the genesis point.

## Onchain

## Extends

- [`SmartContractLib`](SmartContractLib.md)

## Constructors

### new Backtrace()

> **new Backtrace**(...`args`): [`Backtrace`](Backtrace.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/smartContractLib.ts:29](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/smartContractLib.ts#L29)

#### Parameters

##### args

...`SupportedParamType`[]

#### Returns

[`Backtrace`](Backtrace.md)

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

### verifyChainTxs()

> `static` **verifyChainTxs**(`backtraceInfo`, `t_prevTxInputList`): [`ChainTxVerifyResponse`](../type-aliases/ChainTxVerifyResponse.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/builtin-libs/backtrace.ts:74](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/builtin-libs/backtrace.ts#L74)

Tx chain verification to ensure:
  1. the current spending UTXO is the output of prevTx
  2. the specific input of prevTx is the output of prevPrevTx

#### Parameters

##### backtraceInfo

[`BacktraceInfo`](../type-aliases/BacktraceInfo.md)

backtrace info to verify, including prevTx and prevPrevTx preimages

##### t\_prevTxInputList

[`FixedArray`](../type-aliases/FixedArray.md)\<[`ByteString`](../type-aliases/ByteString.md), `6`\>

input list of the prevTx which should be trustable

#### Returns

[`ChainTxVerifyResponse`](../type-aliases/ChainTxVerifyResponse.md)

locking script and outpoint of the specified output of prevPrevTx

***

### verifyFromOutpoint()

> `static` **verifyFromOutpoint**(`backtraceInfo`, `t_genesisOutpoint`, `t_selfScript`, `t_prevTxInputList`): `void`

Defined in: [packages/scrypt-ts-btc/src/smart-contract/builtin-libs/backtrace.ts:30](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/builtin-libs/backtrace.ts#L30)

Back-to-genesis backtrace verification for a contract which can be backtraced to the genesis outpoint.
It will be a valid backtraceInfo if the prevPrevOutpoint is the genesis outpoint or the prevPrevScript is the selfScript.

#### Parameters

##### backtraceInfo

[`BacktraceInfo`](../type-aliases/BacktraceInfo.md)

backtrace info to verify, including prevTx and prevPrevTx informations

##### t\_genesisOutpoint

[`ByteString`](../type-aliases/ByteString.md)

expected genesis outpoint of the contract which usually is a contract property and trustable

##### t\_selfScript

[`ByteString`](../type-aliases/ByteString.md)

expected self locking script, i.e. this.ctx.spentScript, of the currect spending UTXO context which is trustable

##### t\_prevTxInputList

[`FixedArray`](../type-aliases/FixedArray.md)\<[`ByteString`](../type-aliases/ByteString.md), `6`\>

input list of the prevTx which should be trustable

#### Returns

`void`

***

### verifyFromScript()

> `static` **verifyFromScript**(`backtraceInfo`, `t_genesisScript`, `t_selfScript`, `t_prevTxInputList`): `void`

Defined in: [packages/scrypt-ts-btc/src/smart-contract/builtin-libs/backtrace.ts:52](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/builtin-libs/backtrace.ts#L52)

Back-to-genesis backtrace verification for a contract which can be backtraced to the genesis script.
It will be a valid backtraceInfo if the prevPrevScript is the genesis script or the selfScript.

#### Parameters

##### backtraceInfo

[`BacktraceInfo`](../type-aliases/BacktraceInfo.md)

backtrace info to verify, including prevTx and prevPrevTx informations

##### t\_genesisScript

[`ByteString`](../type-aliases/ByteString.md)

expected genensis locking script which usually is a contract property and trustable

##### t\_selfScript

[`ByteString`](../type-aliases/ByteString.md)

expected self locking script, i.e. this.ctx.spentScript, of the current spending UTXO context and is trustable

##### t\_prevTxInputList

[`FixedArray`](../type-aliases/FixedArray.md)\<[`ByteString`](../type-aliases/ByteString.md), `6`\>

input list of the prevTx which should be trustable

#### Returns

`void`
