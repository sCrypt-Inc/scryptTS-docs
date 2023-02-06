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

- [\_ctx](SmartContract.md#_ctx)
- [\_lockTo](SmartContract.md#_lockto)
- [\_provider](SmartContract.md#_provider)
- [\_signer](SmartContract.md#_signer)
- [\_unlockFrom](SmartContract.md#_unlockfrom)
- [delegateInstance](SmartContract.md#delegateinstance)
- [enableUpdateEMC](SmartContract.md#enableupdateemc)
- [entryMethodCall](SmartContract.md#entrymethodcall)
- [DelegateClazz](SmartContract.md#delegateclazz)
- [transformInfo](SmartContract.md#transforminfo)

### Accessors

- [codePart](SmartContract.md#codepart)
- [ctx](SmartContract.md#ctx)
- [dataPart](SmartContract.md#datapart)
- [debug](SmartContract.md#debug)
- [lockTo](SmartContract.md#lockto)
- [lockingScript](SmartContract.md#lockingscript)
- [provider](SmartContract.md#provider)
- [signer](SmartContract.md#signer)
- [unlockFrom](SmartContract.md#unlockfrom)

### Other Methods

- [buildDeployTransaction](SmartContract.md#builddeploytransaction)
- [buildEntryMethodCall](SmartContract.md#buildentrymethodcall)
- [buildStateOutput](SmartContract.md#buildstateoutput)
- [callDelegatedMethod](SmartContract.md#calldelegatedmethod)
- [checkPreimage](SmartContract.md#checkpreimage)
- [checkPreimageAdvanced](SmartContract.md#checkpreimageadvanced)
- [checkPreimageSigHashType](SmartContract.md#checkpreimagesighashtype)
- [checkPubkeyEncoding](SmartContract.md#checkpubkeyencoding)
- [checkSignatureEncoding](SmartContract.md#checksignatureencoding)
- [clone](SmartContract.md#clone)
- [connect](SmartContract.md#connect)
- [deploy](SmartContract.md#deploy)
- [diffOutputs](SmartContract.md#diffoutputs)
- [genLaunchConfig](SmartContract.md#genlaunchconfig)
- [getContractArtifact](SmartContract.md#getcontractartifact)
- [getCtxMethods](SmartContract.md#getctxmethods)
- [getDelegateClazz](SmartContract.md#getdelegateclazz)
- [getStateScript](SmartContract.md#getstatescript)
- [getUnlockingScript](SmartContract.md#getunlockingscript)
- [markAsGenesis](SmartContract.md#markasgenesis)
- [next](SmartContract.md#next)
- [setDataPartInASM](SmartContract.md#setdatapartinasm)
- [setDataPartInHex](SmartContract.md#setdatapartinhex)
- [syncStateProps](SmartContract.md#syncstateprops)
- [updateState](SmartContract.md#updatestate)
- [updateStateSigHashType](SmartContract.md#updatestatesighashtype)
- [verify](SmartContract.md#verify)
- [\_getCachedArtifactFile](SmartContract.md#_getcachedartifactfile)
- [\_getCtxMethods](SmartContract.md#_getctxmethods)
- [\_getScryptFile](SmartContract.md#_getscryptfile)
- [\_getTransform](SmartContract.md#_gettransform)
- [\_loadCachedArtifact](SmartContract.md#_loadcachedartifact)
- [compile](SmartContract.md#compile)
- [compileImpl](SmartContract.md#compileimpl)
- [findKeyIndex](SmartContract.md#findkeyindex)
- [fromScript](SmartContract.md#fromscript)
- [init](SmartContract.md#init)

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

[src/smart-contract/contract.ts:271](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/contract.ts#L271)

## Properties

### \_ctx

• `Optional` **\_ctx**: `ScriptContext`

#### Defined in

[src/smart-contract/contract.ts:113](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/contract.ts#L113)

___

### \_lockTo

• `Private` `Optional` **\_lockTo**: [`TxOutputRef`](../interfaces/TxOutputRef.md)

#### Defined in

[src/smart-contract/contract.ts:110](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/contract.ts#L110)

___

### \_provider

• `Optional` **\_provider**: [`Provider`](Provider.md)

#### Defined in

[src/smart-contract/contract.ts:686](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/contract.ts#L686)

___

### \_signer

• `Optional` **\_signer**: [`Signer`](Signer.md)

#### Defined in

[src/smart-contract/contract.ts:687](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/contract.ts#L687)

___

### \_unlockFrom

• `Private` `Optional` **\_unlockFrom**: [`TxInputRef`](../interfaces/TxInputRef.md)

#### Defined in

[src/smart-contract/contract.ts:111](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/contract.ts#L111)

___

### delegateInstance

• `Private` **delegateInstance**: `AbstractContract`

#### Defined in

[src/smart-contract/contract.ts:116](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/contract.ts#L116)

___

### enableUpdateEMC

• `Private` **enableUpdateEMC**: `boolean` = `false`

#### Defined in

[src/smart-contract/contract.ts:617](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/contract.ts#L617)

___

### entryMethodCall

• `Private` `Optional` **entryMethodCall**: [`FunctionCall`](FunctionCall.md)

#### Defined in

[src/smart-contract/contract.ts:603](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/contract.ts#L603)

___

### DelegateClazz

▪ `Static` `Private` **DelegateClazz**: typeof `AbstractContract`

#### Defined in

[src/smart-contract/contract.ts:115](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/contract.ts#L115)

___

### transformInfo

▪ `Static` `Private` `Optional` **transformInfo**: `TransformInfo`

#### Defined in

[src/smart-contract/contract.ts:119](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/contract.ts#L119)

## Accessors

### ctx

• `get` **ctx**(): `ScriptContext`

#### Returns

`ScriptContext`

#### Defined in

[src/smart-contract/contract.ts:803](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/contract.ts#L803)

___

### debug

• `get` **debug**(): `DebugFunctions`

#### Returns

`DebugFunctions`

#### Defined in

[src/smart-contract/contract.ts:794](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/contract.ts#L794)

___

### lockTo

• `get` **lockTo**(): [`TxOutputRef`](../interfaces/TxOutputRef.md)

#### Returns

[`TxOutputRef`](../interfaces/TxOutputRef.md)

#### Defined in

[src/smart-contract/contract.ts:677](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/contract.ts#L677)

• `set` **lockTo**(`ref`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ref` | [`TxOutputRef`](../interfaces/TxOutputRef.md) |

#### Returns

`void`

#### Defined in

[src/smart-contract/contract.ts:681](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/contract.ts#L681)

___

### lockingScript

• `get` **lockingScript**(): [`Script`](bsv.Script-1.md)

#### Returns

[`Script`](bsv.Script-1.md)

#### Defined in

[src/smart-contract/contract.ts:373](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/contract.ts#L373)

___

### provider

• `get` **provider**(): [`Provider`](Provider.md)

#### Returns

[`Provider`](Provider.md)

#### Defined in

[src/smart-contract/contract.ts:709](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/contract.ts#L709)

___

### signer

• `get` **signer**(): [`Signer`](Signer.md)

#### Returns

[`Signer`](Signer.md)

#### Defined in

[src/smart-contract/contract.ts:702](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/contract.ts#L702)

___

### unlockFrom

• `get` **unlockFrom**(): [`TxInputRef`](../interfaces/TxInputRef.md)

#### Returns

[`TxInputRef`](../interfaces/TxInputRef.md)

#### Defined in

[src/smart-contract/contract.ts:673](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/contract.ts#L673)

• `set` **unlockFrom**(`ref`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ref` | [`TxInputRef`](../interfaces/TxInputRef.md) |

#### Returns

`void`

#### Defined in

[src/smart-contract/contract.ts:642](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/contract.ts#L642)

## Other Methods

### buildDeployTransaction

▸ **buildDeployTransaction**(`utxos`, `amount`, `changeAddress?`): `Promise`<[`Transaction`](bsv.Transaction-1.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `utxos` | [`IUnspentOutput`](../interfaces/bsv.Transaction.IUnspentOutput.md)[] |
| `amount` | `number` |
| `changeAddress?` | `string` \| [`Address`](bsv.Address.md) |

#### Returns

`Promise`<[`Transaction`](bsv.Transaction-1.md)\>

#### Defined in

[src/smart-contract/contract.ts:716](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/contract.ts#L716)

___

### buildEntryMethodCall

▸ `Private` **buildEntryMethodCall**<`T`\>(`callPub`): `SamePromiseOrValue`<`T`, [`FunctionCall`](FunctionCall.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `void` \| `Promise`<`void`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `callPub` | (`self`: [`SmartContract`](SmartContract.md)) => `T` |

#### Returns

`SamePromiseOrValue`<`T`, [`FunctionCall`](FunctionCall.md)\>

#### Defined in

[src/smart-contract/contract.ts:619](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/contract.ts#L619)

___

### buildStateOutput

▸ **buildStateOutput**(`amount`): `Bytes`

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `bigint` |

#### Returns

`Bytes`

#### Defined in

[src/smart-contract/contract.ts:424](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/contract.ts#L424)

___

### callDelegatedMethod

▸ `Private` **callDelegatedMethod**(`methodName`, `...args`): [`FunctionCall`](FunctionCall.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `methodName` | `string` |
| `...args` | `any`[] |

#### Returns

[`FunctionCall`](FunctionCall.md)

#### Defined in

[src/smart-contract/contract.ts:580](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/contract.ts#L580)

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

[src/smart-contract/contract.ts:515](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/contract.ts#L515)

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

[src/smart-contract/contract.ts:503](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/contract.ts#L503)

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

[src/smart-contract/contract.ts:511](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/contract.ts#L511)

___

### checkPubkeyEncoding

▸ `Private` **checkPubkeyEncoding**(`publickey`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `publickey` | [`PubKey`](../README.md#pubkey) |

#### Returns

`boolean`

#### Defined in

[src/smart-contract/contract.ts:534](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/contract.ts#L534)

___

### checkSignatureEncoding

▸ `Private` **checkSignatureEncoding**(`signature`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `signature` | [`Sig`](../README.md#sig) |

#### Returns

`boolean`

#### Defined in

[src/smart-contract/contract.ts:541](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/contract.ts#L541)

___

### clone

▸ **clone**(`opt?`): [`SmartContract`](SmartContract.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opt?` | `Object` |
| `opt.refCloneProps?` | `string`[] |

#### Returns

[`SmartContract`](SmartContract.md)

#### Defined in

[src/smart-contract/contract.ts:382](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/contract.ts#L382)

___

### connect

▸ **connect**(`providerOrSigner`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `providerOrSigner` | [`Provider`](Provider.md) \| [`Signer`](Signer.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/smart-contract/contract.ts:689](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/contract.ts#L689)

___

### deploy

▸ **deploy**(`amount?`, `options?`): `Promise`<[`TransactionResponse`](../interfaces/TransactionResponse.md)\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `amount` | `number` | `1` |
| `options?` | `Object` | `undefined` |
| `options.address?` | `string` \| [`Address`](bsv.Address.md) | `undefined` |
| `options.changeAddress?` | `string` \| [`Address`](bsv.Address.md) | `undefined` |

#### Returns

`Promise`<[`TransactionResponse`](../interfaces/TransactionResponse.md)\>

#### Defined in

[src/smart-contract/contract.ts:734](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/contract.ts#L734)

___

### diffOutputs

▸ `Private` **diffOutputs**(`outputs`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `outputs` | `Bytes` |

#### Returns

`void`

#### Defined in

[src/smart-contract/contract.ts:780](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/contract.ts#L780)

___

### genLaunchConfig

▸ **genLaunchConfig**(`a`, `tx`, `inputIndex?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `any` |
| `tx` | [`Transaction`](bsv.Transaction-1.md) |
| `inputIndex?` | `number` |

#### Returns

`string`

#### Defined in

[src/smart-contract/contract.ts:350](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/contract.ts#L350)

___

### getContractArtifact

▸ **getContractArtifact**(): [`ContractArtifact`](../interfaces/ContractArtifact.md)

#### Returns

[`ContractArtifact`](../interfaces/ContractArtifact.md)

#### Defined in

[src/smart-contract/contract.ts:253](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/contract.ts#L253)

___

### getCtxMethods

▸ **getCtxMethods**(): `string`[]

#### Returns

`string`[]

#### Defined in

[src/smart-contract/contract.ts:263](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/contract.ts#L263)

___

### getDelegateClazz

▸ `Private` **getDelegateClazz**(): typeof `AbstractContract`

#### Returns

typeof `AbstractContract`

#### Defined in

[src/smart-contract/contract.ts:267](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/contract.ts#L267)

___

### getStateScript

▸ **getStateScript**(): `Bytes`

#### Returns

`Bytes`

#### Defined in

[src/smart-contract/contract.ts:430](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/contract.ts#L430)

___

### getUnlockingScript

▸ **getUnlockingScript**<`T`\>(`callPub`): `SamePromiseOrValue`<`T`, [`Script`](bsv.Script-1.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `void` \| `Promise`<`void`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `callPub` | (`self`: [`SmartContract`](SmartContract.md)) => `T` |

#### Returns

`SamePromiseOrValue`<`T`, [`Script`](bsv.Script-1.md)\>

#### Defined in

[src/smart-contract/contract.ts:337](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/contract.ts#L337)

___

### markAsGenesis

▸ **markAsGenesis**(): [`SmartContract`](SmartContract.md)

#### Returns

[`SmartContract`](SmartContract.md)

#### Defined in

[src/smart-contract/contract.ts:412](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/contract.ts#L412)

___

### next

▸ **next**(`opt?`): [`SmartContract`](SmartContract.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opt?` | `Object` |
| `opt.refCloneProps?` | `string`[] |

#### Returns

[`SmartContract`](SmartContract.md)

#### Defined in

[src/smart-contract/contract.ts:404](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/contract.ts#L404)

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

[src/smart-contract/contract.ts:605](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/contract.ts#L605)

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

[src/smart-contract/contract.ts:609](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/contract.ts#L609)

___

### syncStateProps

▸ `Private` **syncStateProps**(): `void`

#### Returns

`void`

#### Defined in

[src/smart-contract/contract.ts:355](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/contract.ts#L355)

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

[src/smart-contract/contract.ts:530](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/contract.ts#L530)

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

[src/smart-contract/contract.ts:417](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/contract.ts#L417)

___

### verify

▸ **verify**<`T`\>(`entryMethodInvoking`): `SamePromiseOrValue`<`T`, [`VerifyResult`](../interfaces/VerifyResult.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `void` \| `Promise`<`void`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `entryMethodInvoking` | (`self`: [`SmartContract`](SmartContract.md)) => `T` |

#### Returns

`SamePromiseOrValue`<`T`, [`VerifyResult`](../interfaces/VerifyResult.md)\>

#### Defined in

[src/smart-contract/contract.ts:298](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/contract.ts#L298)

___

### \_getCachedArtifactFile

▸ `Static` `Private` **_getCachedArtifactFile**(): `string`

#### Returns

`string`

#### Defined in

[src/smart-contract/contract.ts:228](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/contract.ts#L228)

___

### \_getCtxMethods

▸ `Static` `Private` **_getCtxMethods**(): `string`[]

#### Returns

`string`[]

#### Defined in

[src/smart-contract/contract.ts:257](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/contract.ts#L257)

___

### \_getScryptFile

▸ `Static` `Private` **_getScryptFile**(): `string`

#### Returns

`string`

#### Defined in

[src/smart-contract/contract.ts:205](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/contract.ts#L205)

___

### \_getTransform

▸ `Static` `Private` **_getTransform**(): `TransformInfo`

#### Returns

`TransformInfo`

#### Defined in

[src/smart-contract/contract.ts:183](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/contract.ts#L183)

___

### \_loadCachedArtifact

▸ `Static` `Private` **_loadCachedArtifact**(): [`ContractArtifact`](../interfaces/ContractArtifact.md)

#### Returns

[`ContractArtifact`](../interfaces/ContractArtifact.md)

#### Defined in

[src/smart-contract/contract.ts:236](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/contract.ts#L236)

___

### compile

▸ `Static` **compile**(): `Promise`<`TranspileError`[]\>

compiling the scrypt source which is the output of transpiling. only used for testing.
This function should not be called in production environment.

#### Returns

`Promise`<`TranspileError`[]\>

errors if compiling fails

#### Defined in

[src/smart-contract/contract.ts:151](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/contract.ts#L151)

___

### compileImpl

▸ `Static` `Private` **compileImpl**(`filePath`): `Promise`<`CompileResult`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `filePath` | `string` |

#### Returns

`Promise`<`CompileResult`\>

#### Defined in

[src/smart-contract/contract.ts:121](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/contract.ts#L121)

___

### findKeyIndex

▸ `Static` **findKeyIndex**(`collection`, `key`, `keyType?`): `bigint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `collection` | `Set`<`SupportedParamType`\> \| `Map`<`SupportedParamType`, `SupportedParamType`\> |
| `key` | `SupportedParamType` |
| `keyType?` | `string` |

#### Returns

`bigint`

#### Defined in

[src/smart-contract/contract.ts:759](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/contract.ts#L759)

___

### fromScript

▸ `Static` **fromScript**(`script`): [`SmartContract`](SmartContract.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `script` | `string` |

#### Returns

[`SmartContract`](SmartContract.md)

#### Defined in

[src/smart-contract/contract.ts:808](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/contract.ts#L808)

___

### init

▸ `Static` **init**(`transform`, `artifact`): `void`

This function is usually called on the frontend. 
The contract class needs to call this function to initialize before instantiating.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transform` | `TransformInfo` | a object that contains transform infos |
| `artifact` | [`ContractArtifact`](../interfaces/ContractArtifact.md) | a contract artifact object |

#### Returns

`void`

#### Defined in

[src/smart-contract/contract.ts:178](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/contract.ts#L178)

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

[src/smart-contract/contract.ts:524](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/contract.ts#L524)

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

[src/smart-contract/contract.ts:471](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/contract.ts#L471)
