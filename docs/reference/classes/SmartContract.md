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
- [\_provider](SmartContract.md#_provider)
- [\_signer](SmartContract.md#_signer)
- [delegateInstance](SmartContract.md#delegateinstance)
- [enableUpdateEMC](SmartContract.md#enableupdateemc)
- [entryMethodCall](SmartContract.md#entrymethodcall)
- [from](SmartContract.md#from)
- [to](SmartContract.md#to)
- [DelegateClazz](SmartContract.md#delegateclazz)
- [\_txBuilders](SmartContract.md#_txbuilders)
- [transformInfo](SmartContract.md#transforminfo)

### Accessors

- [changeAmount](SmartContract.md#changeamount)
- [ctx](SmartContract.md#ctx)
- [debug](SmartContract.md#debug)
- [lockingScript](SmartContract.md#lockingscript)
- [provider](SmartContract.md#provider)
- [signer](SmartContract.md#signer)

### Other Methods

- [\_assertFromExist](SmartContract.md#_assertfromexist)
- [\_assertToExist](SmartContract.md#_asserttoexist)
- [\_prepareArgsForMethodCall](SmartContract.md#_prepareargsformethodcall)
- [buildContractInput](SmartContract.md#buildcontractinput)
- [buildDeployTransaction](SmartContract.md#builddeploytransaction)
- [buildEntryMethodCall](SmartContract.md#buildentrymethodcall)
- [buildStateOutput](SmartContract.md#buildstateoutput)
- [call](SmartContract.md#call)
- [callDelegatedMethod](SmartContract.md#calldelegatedmethod)
- [checkPreimage](SmartContract.md#checkpreimage)
- [checkPreimageAdvanced](SmartContract.md#checkpreimageadvanced)
- [checkPreimageSigHashType](SmartContract.md#checkpreimagesighashtype)
- [checkPubkeyEncoding](SmartContract.md#checkpubkeyencoding)
- [checkSignatureEncoding](SmartContract.md#checksignatureencoding)
- [clearCtx](SmartContract.md#clearctx)
- [clone](SmartContract.md#clone)
- [connect](SmartContract.md#connect)
- [deploy](SmartContract.md#deploy)
- [diffOutputs](SmartContract.md#diffoutputs)
- [dummySignCallTx](SmartContract.md#dummysigncalltx)
- [genLaunchConfig](SmartContract.md#genlaunchconfig)
- [getContractArtifact](SmartContract.md#getcontractartifact)
- [getCtxMethods](SmartContract.md#getctxmethods)
- [getDelegateClazz](SmartContract.md#getdelegateclazz)
- [getMethodsMeta](SmartContract.md#getmethodsmeta)
- [getStateScript](SmartContract.md#getstatescript)
- [getTxBuilder](SmartContract.md#gettxbuilder)
- [getUnlockingScript](SmartContract.md#getunlockingscript)
- [isStateful](SmartContract.md#isstateful)
- [markAsGenesis](SmartContract.md#markasgenesis)
- [methods](SmartContract.md#methods)
- [next](SmartContract.md#next)
- [setCtx](SmartContract.md#setctx)
- [setDataPartInASM](SmartContract.md#setdatapartinasm)
- [setDataPartInHex](SmartContract.md#setdatapartinhex)
- [sigTypeOfMethod](SmartContract.md#sigtypeofmethod)
- [syncStateProps](SmartContract.md#syncstateprops)
- [verify](SmartContract.md#verify)
- [\_getCachedArtifactFile](SmartContract.md#_getcachedartifactfile)
- [\_getCtxMethods](SmartContract.md#_getctxmethods)
- [\_getScryptFile](SmartContract.md#_getscryptfile)
- [\_getTransform](SmartContract.md#_gettransform)
- [\_loadCachedArtifact](SmartContract.md#_loadcachedartifact)
- [bindTxBuilder](SmartContract.md#bindtxbuilder)
- [compile](SmartContract.md#compile)
- [compileImpl](SmartContract.md#compileimpl)
- [defaultCallTxBuilder](SmartContract.md#defaultcalltxbuilder)
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

[src/smart-contract/contract.ts:295](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/contract.ts#L295)

## Properties

### \_ctx

• `Optional` **\_ctx**: `ScriptContext`

#### Defined in

[src/smart-contract/contract.ts:134](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/contract.ts#L134)

___

### \_provider

• `Optional` **\_provider**: [`Provider`](Provider.md)

#### Defined in

[src/smart-contract/contract.ts:730](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/contract.ts#L730)

___

### \_signer

• `Optional` **\_signer**: [`Signer`](Signer.md)

#### Defined in

[src/smart-contract/contract.ts:731](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/contract.ts#L731)

___

### delegateInstance

• `Private` **delegateInstance**: `AbstractContract`

#### Defined in

[src/smart-contract/contract.ts:137](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/contract.ts#L137)

___

### enableUpdateEMC

• `Private` **enableUpdateEMC**: `boolean` = `false`

#### Defined in

[src/smart-contract/contract.ts:692](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/contract.ts#L692)

___

### entryMethodCall

• `Private` `Optional` **entryMethodCall**: [`FunctionCall`](FunctionCall.md)

#### Defined in

[src/smart-contract/contract.ts:675](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/contract.ts#L675)

___

### from

• `Optional` **from**: [`TxOutputRef`](../interfaces/TxOutputRef.md)

`from` is a reference to a transaction output where the props of `this` contract instance are located/stored on chain.
In other words, it's the start point for the lifecycle of `this` instance.

#### Defined in

[src/smart-contract/contract.ts:126](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/contract.ts#L126)

___

### to

• `Optional` **to**: [`TxInputRef`](../interfaces/TxInputRef.md)

`to` is a reference to a transaction input where a public method of `this` contract instance is called.
In other words, it's the end point for the lifecycle of `this` instance.

#### Defined in

[src/smart-contract/contract.ts:132](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/contract.ts#L132)

___

### DelegateClazz

▪ `Static` `Private` **DelegateClazz**: typeof `AbstractContract`

#### Defined in

[src/smart-contract/contract.ts:136](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/contract.ts#L136)

___

### \_txBuilders

▪ `Static` `Private` **\_txBuilders**: `Map`<`string`, [`MethodCallTxBuilder`](../interfaces/MethodCallTxBuilder.md)<[`SmartContract`](SmartContract.md)\>\>

#### Defined in

[src/smart-contract/contract.ts:1063](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/contract.ts#L1063)

___

### transformInfo

▪ `Static` `Private` `Optional` **transformInfo**: `TransformInfo`

#### Defined in

[src/smart-contract/contract.ts:140](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/contract.ts#L140)

## Accessors

### changeAmount

• `get` **changeAmount**(): `bigint`

Get the amount of the change output for `to.tx`.

#### Returns

`bigint`

amount in satoshis

#### Defined in

[src/smart-contract/contract.ts:554](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/contract.ts#L554)

___

### ctx

• `get` **ctx**(): `ScriptContext`

#### Returns

`ScriptContext`

#### Defined in

[src/smart-contract/contract.ts:1178](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/contract.ts#L1178)

___

### debug

• `get` **debug**(): `DebugFunctions`

#### Returns

`DebugFunctions`

#### Defined in

[src/smart-contract/contract.ts:1169](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/contract.ts#L1169)

___

### lockingScript

• `get` **lockingScript**(): [`Script`](bsv.Script-1.md)

#### Returns

[`Script`](bsv.Script-1.md)

#### Defined in

[src/smart-contract/contract.ts:397](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/contract.ts#L397)

___

### provider

• `get` **provider**(): [`Provider`](Provider.md)

#### Returns

[`Provider`](Provider.md)

#### Defined in

[src/smart-contract/contract.ts:753](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/contract.ts#L753)

___

### signer

• `get` **signer**(): [`Signer`](Signer.md)

#### Returns

[`Signer`](Signer.md)

#### Defined in

[src/smart-contract/contract.ts:746](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/contract.ts#L746)

## Other Methods

### \_assertFromExist

▸ `Private` **_assertFromExist**(): `void`

#### Returns

`void`

#### Defined in

[src/smart-contract/contract.ts:723](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/contract.ts#L723)

___

### \_assertToExist

▸ `Private` **_assertToExist**(): `void`

#### Returns

`void`

#### Defined in

[src/smart-contract/contract.ts:717](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/contract.ts#L717)

___

### \_prepareArgsForMethodCall

▸ `Private` **_prepareArgsForMethodCall**(`methodName`, `...args`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `methodName` | `string` |
| `...args` | `any`[] |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `methodArgs` | `any`[] |
| `methodCallOptions` | [`MethodCallOptions`](../interfaces/MethodCallOptions.md)<[`SmartContract`](SmartContract.md)\> |
| `sigArgs` | `Map`<`number`, { `callback`: `Function` ; `length`: `number`  }\> |

#### Defined in

[src/smart-contract/contract.ts:811](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/contract.ts#L811)

___

### buildContractInput

▸ **buildContractInput**(`fromUTXO?`): [`Input`](bsv.Transaction.Input-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fromUTXO?` | [`IUnspentOutput`](../interfaces/bsv.Transaction.IUnspentOutput.md) |

#### Returns

[`Input`](bsv.Transaction.Input-1.md)

#### Defined in

[src/smart-contract/contract.ts:1104](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/contract.ts#L1104)

___

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

[src/smart-contract/contract.ts:760](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/contract.ts#L760)

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

[src/smart-contract/contract.ts:694](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/contract.ts#L694)

___

### buildStateOutput

▸ **buildStateOutput**(`amount`): [`ByteString`](../README.md#bytestring)

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `bigint` |

#### Returns

[`ByteString`](../README.md#bytestring)

#### Defined in

[src/smart-contract/contract.ts:446](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/contract.ts#L446)

___

### call

▸ `Private` **call**(`methodName`, `...args`): `Promise`<[`MethodCallResult`](../interfaces/MethodCallResult.md)<[`SmartContract`](SmartContract.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `methodName` | `string` |
| `...args` | `any`[] |

#### Returns

`Promise`<[`MethodCallResult`](../interfaces/MethodCallResult.md)<[`SmartContract`](SmartContract.md)\>\>

#### Defined in

[src/smart-contract/contract.ts:859](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/contract.ts#L859)

___

### callDelegatedMethod

▸ `Private` **callDelegatedMethod**(`methodName`, `...args`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `methodName` | `string` |
| `...args` | `any`[] |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `publicMethodCall` | [`FunctionCall`](FunctionCall.md) |
| `txPreimage?` | [`SigHashPreimage`](../README.md#sighashpreimage) |

#### Defined in

[src/smart-contract/contract.ts:605](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/contract.ts#L605)

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

[src/smart-contract/contract.ts:535](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/contract.ts#L535)

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

[src/smart-contract/contract.ts:523](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/contract.ts#L523)

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

[src/smart-contract/contract.ts:531](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/contract.ts#L531)

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

[src/smart-contract/contract.ts:559](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/contract.ts#L559)

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

[src/smart-contract/contract.ts:566](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/contract.ts#L566)

___

### clearCtx

▸ `Private` **clearCtx**(): `void`

#### Returns

`void`

#### Defined in

[src/smart-contract/contract.ts:671](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/contract.ts#L671)

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

[src/smart-contract/contract.ts:409](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/contract.ts#L409)

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

[src/smart-contract/contract.ts:733](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/contract.ts#L733)

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
| `options.send` | `boolean` | `undefined` |

#### Returns

`Promise`<[`TransactionResponse`](../interfaces/TransactionResponse.md)\>

#### Defined in

[src/smart-contract/contract.ts:778](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/contract.ts#L778)

___

### diffOutputs

▸ `Private` **diffOutputs**(`outputs`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `outputs` | [`ByteString`](../README.md#bytestring) |

#### Returns

`void`

#### Defined in

[src/smart-contract/contract.ts:1157](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/contract.ts#L1157)

___

### dummySignCallTx

▸ `Private` **dummySignCallTx**(`tx`, `inputIndex`, `methodName`, `...args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tx` | [`Transaction`](bsv.Transaction-1.md) |
| `inputIndex` | `number` |
| `methodName` | `string` |
| `...args` | `any` |

#### Returns

`void`

#### Defined in

[src/smart-contract/contract.ts:1017](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/contract.ts#L1017)

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

[src/smart-contract/contract.ts:374](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/contract.ts#L374)

___

### getContractArtifact

▸ **getContractArtifact**(): [`ContractArtifact`](../interfaces/ContractArtifact.md)

#### Returns

[`ContractArtifact`](../interfaces/ContractArtifact.md)

#### Defined in

[src/smart-contract/contract.ts:277](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/contract.ts#L277)

___

### getCtxMethods

▸ **getCtxMethods**(): `string`[]

#### Returns

`string`[]

#### Defined in

[src/smart-contract/contract.ts:287](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/contract.ts#L287)

___

### getDelegateClazz

▸ `Private` **getDelegateClazz**(): typeof `AbstractContract`

#### Returns

typeof `AbstractContract`

#### Defined in

[src/smart-contract/contract.ts:291](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/contract.ts#L291)

___

### getMethodsMeta

▸ `Private` **getMethodsMeta**(`methodName`): `MethodsMetaValue`

#### Parameters

| Name | Type |
| :------ | :------ |
| `methodName` | `string` |

#### Returns

`MethodsMetaValue`

#### Defined in

[src/smart-contract/contract.ts:1132](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/contract.ts#L1132)

___

### getStateScript

▸ **getStateScript**(): [`ByteString`](../README.md#bytestring)

#### Returns

[`ByteString`](../README.md#bytestring)

#### Defined in

[src/smart-contract/contract.ts:452](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/contract.ts#L452)

___

### getTxBuilder

▸ `Private` **getTxBuilder**(`methodName`): [`MethodCallTxBuilder`](../interfaces/MethodCallTxBuilder.md)<[`SmartContract`](SmartContract.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `methodName` | `string` |

#### Returns

[`MethodCallTxBuilder`](../interfaces/MethodCallTxBuilder.md)<[`SmartContract`](SmartContract.md)\>

#### Defined in

[src/smart-contract/contract.ts:1043](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/contract.ts#L1043)

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

[src/smart-contract/contract.ts:361](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/contract.ts#L361)

___

### isStateful

▸ **isStateful**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/smart-contract/contract.ts:1120](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/contract.ts#L1120)

___

### markAsGenesis

▸ **markAsGenesis**(): [`SmartContract`](SmartContract.md)

#### Returns

[`SmartContract`](SmartContract.md)

#### Defined in

[src/smart-contract/contract.ts:439](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/contract.ts#L439)

___

### methods

▸ **methods**(): `Record`<`string`, (...`args`: `any`) => `Promise`<[`MethodCallResult`](../interfaces/MethodCallResult.md)<[`SmartContract`](SmartContract.md)\>\>\>

#### Returns

`Record`<`string`, (...`args`: `any`) => `Promise`<[`MethodCallResult`](../interfaces/MethodCallResult.md)<[`SmartContract`](SmartContract.md)\>\>\>

#### Defined in

[src/smart-contract/contract.ts:1034](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/contract.ts#L1034)

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

[src/smart-contract/contract.ts:431](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/contract.ts#L431)

___

### setCtx

▸ `Private` **setCtx**(`txPreimage`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `txPreimage` | [`SigHashPreimage`](../README.md#sighashpreimage) |

#### Returns

`void`

#### Defined in

[src/smart-contract/contract.ts:650](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/contract.ts#L650)

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

[src/smart-contract/contract.ts:677](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/contract.ts#L677)

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

[src/smart-contract/contract.ts:681](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/contract.ts#L681)

___

### sigTypeOfMethod

▸ **sigTypeOfMethod**(`methodName`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `methodName` | `string` |

#### Returns

`number`

#### Defined in

[src/smart-contract/contract.ts:1124](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/contract.ts#L1124)

___

### syncStateProps

▸ `Private` **syncStateProps**(): `void`

#### Returns

`void`

#### Defined in

[src/smart-contract/contract.ts:379](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/contract.ts#L379)

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

[src/smart-contract/contract.ts:322](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/contract.ts#L322)

___

### \_getCachedArtifactFile

▸ `Static` `Private` **_getCachedArtifactFile**(): `string`

#### Returns

`string`

#### Defined in

[src/smart-contract/contract.ts:252](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/contract.ts#L252)

___

### \_getCtxMethods

▸ `Static` `Private` **_getCtxMethods**(): `string`[]

#### Returns

`string`[]

#### Defined in

[src/smart-contract/contract.ts:281](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/contract.ts#L281)

___

### \_getScryptFile

▸ `Static` `Private` **_getScryptFile**(): `string`

#### Returns

`string`

#### Defined in

[src/smart-contract/contract.ts:229](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/contract.ts#L229)

___

### \_getTransform

▸ `Static` `Private` **_getTransform**(): `TransformInfo`

#### Returns

`TransformInfo`

#### Defined in

[src/smart-contract/contract.ts:207](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/contract.ts#L207)

___

### \_loadCachedArtifact

▸ `Static` `Private` **_loadCachedArtifact**(): [`ContractArtifact`](../interfaces/ContractArtifact.md)

#### Returns

[`ContractArtifact`](../interfaces/ContractArtifact.md)

#### Defined in

[src/smart-contract/contract.ts:260](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/contract.ts#L260)

___

### bindTxBuilder

▸ `Static` **bindTxBuilder**(`methodName`, `txBuilder`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `methodName` | `string` |
| `txBuilder` | [`MethodCallTxBuilder`](../interfaces/MethodCallTxBuilder.md)<[`SmartContract`](SmartContract.md)\> |

#### Returns

`void`

#### Defined in

[src/smart-contract/contract.ts:1052](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/contract.ts#L1052)

___

### compile

▸ `Static` **compile**(): `Promise`<`TranspileError`[]\>

compiling the scrypt source which is the output of transpiling. only used for testing.
This function should not be called in production environment.

#### Returns

`Promise`<`TranspileError`[]\>

errors if compiling fails

#### Defined in

[src/smart-contract/contract.ts:172](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/contract.ts#L172)

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

[src/smart-contract/contract.ts:142](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/contract.ts#L142)

___

### defaultCallTxBuilder

▸ `Static` **defaultCallTxBuilder**(`sigHashType`): [`MethodCallTxBuilder`](../interfaces/MethodCallTxBuilder.md)<[`SmartContract`](SmartContract.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sigHashType` | [`SigHashType`](../README.md#sighashtype) |

#### Returns

[`MethodCallTxBuilder`](../interfaces/MethodCallTxBuilder.md)<[`SmartContract`](SmartContract.md)\>

#### Defined in

[src/smart-contract/contract.ts:1065](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/contract.ts#L1065)

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

[src/smart-contract/contract.ts:1136](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/contract.ts#L1136)

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

[src/smart-contract/contract.ts:1183](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/contract.ts#L1183)

___

### init

▸ `Static` **init**(`artifact`): `void`

This function is usually called on the frontend. 
The contract class needs to call this function before instantiating.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `artifact` | [`MergedArtifact`](../README.md#mergedartifact) | a merged contract artifact object |

#### Returns

`void`

#### Defined in

[src/smart-contract/contract.ts:198](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/contract.ts#L198)

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

[src/smart-contract/contract.ts:544](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/contract.ts#L544)

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

[src/smart-contract/contract.ts:493](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/contract.ts#L493)
