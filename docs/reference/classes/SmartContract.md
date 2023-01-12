[scrypt-ts](../README.md) / SmartContract

# Class: SmartContract

The main contract class. To write a contract, extend this class as such:

**`Example`**

```ts
class YourSmartContract extends SmartContract {
  // your smart contract code here
}
```

## Table of contents

### Constructors

- [constructor](SmartContract.md#constructor)

### Properties

- [ctx](SmartContract.md#ctx)

### Accessors

- [codePart](SmartContract.md#codepart)
- [dataPart](SmartContract.md#datapart)
- [debug](SmartContract.md#debug)
- [lockTo](SmartContract.md#lockto)
- [lockingScript](SmartContract.md#lockingscript)
- [unlockFrom](SmartContract.md#unlockfrom)

### Other Methods

- [buildStateOutput](SmartContract.md#buildstateoutput)
- [checkPreimage](SmartContract.md#checkpreimage)
- [checkPreimageAdvanced](SmartContract.md#checkpreimageadvanced)
- [checkPreimageSigHashType](SmartContract.md#checkpreimagesighashtype)
- [clone](SmartContract.md#clone)
- [getStateScript](SmartContract.md#getstatescript)
- [getUnlockingScript](SmartContract.md#getunlockingscript)
- [markAsGenesis](SmartContract.md#markasgenesis)
- [next](SmartContract.md#next)
- [setDataPartInASM](SmartContract.md#setdatapartinasm)
- [setDataPartInHex](SmartContract.md#setdatapartinhex)
- [updateState](SmartContract.md#updatestate)
- [updateStateSigHashType](SmartContract.md#updatestatesighashtype)
- [verify](SmartContract.md#verify)
- [compile](SmartContract.md#compile)
- [loadArtifact](SmartContract.md#loadartifact)

### Signature Verification Methods

- [checkMultiSig](SmartContract.md#checkmultisig)
- [checkSig](SmartContract.md#checksig)

## Constructors

### constructor

• **new SmartContract**(`...args`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Defined in

[src/contract.ts:258](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/contract.ts#L258)

## Properties

### ctx

• `Optional` **ctx**: `ScriptContext`

#### Defined in

[src/contract.ts:122](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/contract.ts#L122)

## Accessors

### codePart

• `get` **codePart**(): `string`

#### Returns

`string`

#### Defined in

[src/contract.ts:359](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/contract.ts#L359)

___

### dataPart

• `get` **dataPart**(): [`Script`](bsv.Script-1.md)

#### Returns

[`Script`](bsv.Script-1.md)

#### Defined in

[src/contract.ts:588](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/contract.ts#L588)

___

### debug

• `get` **debug**(): [`DebugFunctions`](../interfaces/DebugFunctions.md)

contains a set of functions for debugging contracts at runtime.

#### Returns

[`DebugFunctions`](../interfaces/DebugFunctions.md)

#### Defined in

[src/contract.ts:701](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/contract.ts#L701)

___

### lockTo

• `get` **lockTo**(): `TxOutputRef`

A reference to an output of a transaction

#### Returns

`TxOutputRef`

#### Defined in

[src/contract.ts:650](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/contract.ts#L650)

• `set` **lockTo**(`ref`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ref` | `TxOutputRef` |

#### Returns

`void`

#### Defined in

[src/contract.ts:654](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/contract.ts#L654)

___

### lockingScript

• `get` **lockingScript**(): [`Script`](bsv.Script-1.md)

#### Returns

[`Script`](bsv.Script-1.md)

#### Defined in

[src/contract.ts:354](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/contract.ts#L354)

___

### unlockFrom

• `get` **unlockFrom**(): `TxInputRef`

A reference to an input of a transaction

#### Returns

`TxInputRef`

#### Defined in

[src/contract.ts:643](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/contract.ts#L643)

• `set` **unlockFrom**(`ref`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ref` | `TxInputRef` |

#### Returns

`void`

#### Defined in

[src/contract.ts:614](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/contract.ts#L614)

## Other Methods

### buildStateOutput

▸ **buildStateOutput**(`amount`): `Bytes`

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `bigint` |

#### Returns

`Bytes`

#### Defined in

[src/contract.ts:387](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/contract.ts#L387)

___

### checkPreimage

▸ **checkPreimage**(`txPreimage`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `txPreimage` | [`SigHashPreimage`](../README.md#sighashpreimage) |

#### Returns

`boolean`

#### Defined in

[src/contract.ts:478](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/contract.ts#L478)

___

### checkPreimageAdvanced

▸ **checkPreimageAdvanced**(`txPreimage`, `privKey`, `pubKey`, `inverseK`, `r`, `rBigEndian`, `sigHashType`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `txPreimage` | [`SigHashPreimage`](../README.md#sighashpreimage) |
| `privKey` | [`PrivKey`](../README.md#privkey) |
| `pubKey` | [`PubKey`](../README.md#pubkey) |
| `inverseK` | `bigint` |
| `r` | `bigint` |
| `rBigEndian` | `string` |
| `sigHashType` | [`SigHashType`](../README.md#sighashtype) |

#### Returns

`boolean`

#### Defined in

[src/contract.ts:466](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/contract.ts#L466)

___

### checkPreimageSigHashType

▸ **checkPreimageSigHashType**(`txPreimage`, `sigHashType`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `txPreimage` | [`SigHashPreimage`](../README.md#sighashpreimage) |
| `sigHashType` | [`SigHashType`](../README.md#sighashtype) |

#### Returns

`boolean`

#### Defined in

[src/contract.ts:474](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/contract.ts#L474)

___

### clone

▸ **clone**(): [`SmartContract`](SmartContract.md)

#### Returns

[`SmartContract`](SmartContract.md)

#### Defined in

[src/contract.ts:363](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/contract.ts#L363)

___

### getStateScript

▸ **getStateScript**(): `Bytes`

#### Returns

`Bytes`

#### Defined in

[src/contract.ts:393](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/contract.ts#L393)

___

### getUnlockingScript

▸ **getUnlockingScript**(`callPub`): [`Script`](bsv.Script-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `callPub` | (`self`: [`SmartContract`](SmartContract.md)) => `void` |

#### Returns

[`Script`](bsv.Script-1.md)

#### Defined in

[src/contract.ts:316](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/contract.ts#L316)

___

### markAsGenesis

▸ **markAsGenesis**(): [`SmartContract`](SmartContract.md)

#### Returns

[`SmartContract`](SmartContract.md)

#### Defined in

[src/contract.ts:375](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/contract.ts#L375)

___

### next

▸ **next**(): [`SmartContract`](SmartContract.md)

#### Returns

[`SmartContract`](SmartContract.md)

#### Defined in

[src/contract.ts:368](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/contract.ts#L368)

___

### setDataPartInASM

▸ **setDataPartInASM**(`dataPart`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataPart` | `string` |

#### Returns

`void`

#### Defined in

[src/contract.ts:580](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/contract.ts#L580)

___

### setDataPartInHex

▸ **setDataPartInHex**(`dataPart`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataPart` | `string` |

#### Returns

`void`

#### Defined in

[src/contract.ts:584](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/contract.ts#L584)

___

### updateState

▸ **updateState**(`preimage`, `amount`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `preimage` | [`SigHashPreimage`](../README.md#sighashpreimage) |
| `amount` | `bigint` |

#### Returns

`boolean`

#### Defined in

[src/contract.ts:493](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/contract.ts#L493)

___

### updateStateSigHashType

▸ **updateStateSigHashType**(`txPreimage`, `amount`, `sigHashType`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `txPreimage` | [`SigHashPreimage`](../README.md#sighashpreimage) |
| `amount` | `bigint` |
| `sigHashType` | [`SigHashType`](../README.md#sighashtype) |

#### Returns

`boolean`

#### Defined in

[src/contract.ts:380](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/contract.ts#L380)

___

### verify

▸ **verify**(`entryMethodInvoking`): [`VerifyResult`](../interfaces/VerifyResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `entryMethodInvoking` | (`self`: [`SmartContract`](SmartContract.md)) => `void` |

#### Returns

[`VerifyResult`](../interfaces/VerifyResult.md)

#### Defined in

[src/contract.ts:286](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/contract.ts#L286)

___

### compile

▸ `Static` **compile**(): `Promise`<`TranspileError`[]\>

compile contract

#### Returns

`Promise`<`TranspileError`[]\>

#### Defined in

[src/contract.ts:139](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/contract.ts#L139)

___

### loadArtifact

▸ `Static` **loadArtifact**(`artifact`): `void`

load a Contract Artifact file in production environment. No need to compile contracts

#### Parameters

| Name | Type |
| :------ | :------ |
| `artifact` | [`ContractArtifact`](../interfaces/ContractArtifact.md) |

#### Returns

`void`

#### Defined in

[src/contract.ts:172](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/contract.ts#L172)

___

## Signature Verification Methods

### checkMultiSig

▸ **checkMultiSig**(`signatures`, `publickeys`): `boolean`

Compares the first signature against each public key until it finds an ECDSA match. Starting with the subsequent public key, it compares the second signature against each remaining public key until it finds an ECDSA match. The process is repeated until all signatures have been checked or not enough public keys remain to produce a successful result. All signatures need to match a public key. Because public keys are not checked again if they fail any signature comparison, signatures must be placed in the scriptSig using the same order as their corresponding public keys were placed in the scriptPubKey or redeemScript. If all signatures are valid, 1 is returned, 0 otherwise. Due to a bug, one extra unused value is removed from the stack.

**`See`**

https://wiki.bitcoinsv.io/index.php/Opcodes_used_in_Bitcoin_Script

#### Parameters

| Name | Type |
| :------ | :------ |
| `signatures` | [`Sig`](../README.md#sig)[] |
| `publickeys` | [`PubKey`](../README.md#pubkey)[] |

#### Returns

`boolean`

#### Defined in

[src/contract.ts:487](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/contract.ts#L487)

___

### checkSig

▸ **checkSig**(`signature`, `publickey`): `boolean`

verifies an ECDSA signature. It takes two inputs from the stack, a public key (on top of the stack) and an ECDSA signature in its DER_CANONISED format concatenated with sighash flags. It outputs true or false on the stack based on whether the signature check passes or fails.

**`See`**

https://wiki.bitcoinsv.io/index.php/Opcodes_used_in_Bitcoin_Script

#### Parameters

| Name | Type |
| :------ | :------ |
| `signature` | [`Sig`](../README.md#sig) |
| `publickey` | [`PubKey`](../README.md#pubkey) |

#### Returns

`boolean`

#### Defined in

[src/contract.ts:434](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/contract.ts#L434)
