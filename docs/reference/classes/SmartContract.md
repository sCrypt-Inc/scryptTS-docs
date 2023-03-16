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

- [call](SmartContract.md#call)
- [dummySignSingleCallTx](SmartContract.md#dummysignsinglecalltx)
- [from](SmartContract.md#from)
- [multiContractCall](SmartContract.md#multicontractcall)
- [signSingleCallTx](SmartContract.md#signsinglecalltx)
- [singleContractCall](SmartContract.md#singlecontractcall)
- [to](SmartContract.md#to)

### Accessors

- [balance](SmartContract.md#balance)
- [changeAddress](SmartContract.md#changeaddress)
- [changeAmount](SmartContract.md#changeamount)
- [codePart](SmartContract.md#codepart)
- [ctx](SmartContract.md#ctx)
- [dataPart](SmartContract.md#datapart)
- [debug](SmartContract.md#debug)
- [lockingScript](SmartContract.md#lockingscript)
- [methods](SmartContract.md#methods)
- [provider](SmartContract.md#provider)
- [scriptSize](SmartContract.md#scriptsize)
- [signer](SmartContract.md#signer)
- [utxo](SmartContract.md#utxo)

### Other Methods

- [bindTxBuilder](SmartContract.md#bindtxbuilder)
- [buildChangeOutput](SmartContract.md#buildchangeoutput)
- [buildContractInput](SmartContract.md#buildcontractinput)
- [buildDeployTransaction](SmartContract.md#builddeploytransaction)
- [buildStateOutput](SmartContract.md#buildstateoutput)
- [checkPreimage](SmartContract.md#checkpreimage)
- [checkPreimageAdvanced](SmartContract.md#checkpreimageadvanced)
- [checkPreimageSigHashType](SmartContract.md#checkpreimagesighashtype)
- [connect](SmartContract.md#connect)
- [deploy](SmartContract.md#deploy)
- [getStateScript](SmartContract.md#getstatescript)
- [isStateful](SmartContract.md#isstateful)
- [markAsGenesis](SmartContract.md#markasgenesis)
- [next](SmartContract.md#next)
- [setDataPartInASM](SmartContract.md#setdatapartinasm)
- [setDataPartInHex](SmartContract.md#setdatapartinhex)
- [sigTypeOfMethod](SmartContract.md#sigtypeofmethod)
- [compile](SmartContract.md#compile)
- [fromTx](SmartContract.md#fromtx)
- [loadArtifact](SmartContract.md#loadartifact)
- [multiContractCall](SmartContract.md#multicontractcall-1)

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

dist/smart-contract/contract.d.ts:143

## Properties

### call

• `Private` **call**: `any`

#### Defined in

dist/smart-contract/contract.d.ts:389

___

### dummySignSingleCallTx

• `Private` **dummySignSingleCallTx**: `any`

#### Defined in

dist/smart-contract/contract.d.ts:393

___

### from

• `Optional` **from**: [`TxOutputRef`](../interfaces/TxOutputRef.md)

`from` is a reference to a transaction output where the props of `this` contract instance are located/stored on chain.
In other words, it's the start point for the lifecycle of `this` instance.

#### Defined in

dist/smart-contract/contract.d.ts:97

___

### multiContractCall

• `Private` **multiContractCall**: `any`

#### Defined in

dist/smart-contract/contract.d.ts:391

___

### signSingleCallTx

• `Private` **signSingleCallTx**: `any`

#### Defined in

dist/smart-contract/contract.d.ts:392

___

### singleContractCall

• `Private` **singleContractCall**: `any`

#### Defined in

dist/smart-contract/contract.d.ts:390

___

### to

• `Optional` **to**: [`TxInputRef`](../interfaces/TxInputRef.md)

`to` is a reference to a transaction input where a public method of `this` contract instance is called.
In other words, it's the end point for the lifecycle of `this` instance.

#### Defined in

dist/smart-contract/contract.d.ts:102

## Accessors

### balance

• `get` **balance**(): `number`

Get the current locked balance of the contract

#### Returns

`number`

#### Defined in

dist/smart-contract/contract.d.ts:438

___

### changeAddress

• `get` **changeAddress**(): [`Ripemd160`](../README.md#ripemd160)

Get the change address of the change output for `to.tx`.

**`Onchain`**

#### Returns

[`Ripemd160`](../README.md#ripemd160)

the change address of to.tx

#### Defined in

dist/smart-contract/contract.d.ts:272

___

### changeAmount

• `get` **changeAmount**(): `bigint`

Get the amount of the change output for `to.tx`.

**`Onchain`**

#### Returns

`bigint`

amount in satoshis

#### Defined in

dist/smart-contract/contract.d.ts:266

___

### codePart

• `get` **codePart**(): `string`

Returns code part of the lockingScript, in hex format.

#### Returns

`string`

#### Defined in

dist/smart-contract/contract.d.ts:180

___

### ctx

• `get` **ctx**(): `ScriptContext`

You can directly access the context through `this.ctx` in any public @method.
[ScriptContext][https://scrypt.io/scrypt-ts/how-to-write-a-contract/scriptcontext](https://scrypt.io/scrypt-ts/how-to-write-a-contract/scriptcontext) can be considered additional information a public method gets when called, besides its function parameters.

**`Onchain`**

#### Returns

`ScriptContext`

#### Defined in

dist/smart-contract/contract.d.ts:448

___

### dataPart

• `get` **dataPart**(): [`Script`](bsv.Script-1.md)

#### Returns

[`Script`](bsv.Script-1.md)

#### Defined in

dist/smart-contract/contract.d.ts:321

___

### debug

• `get` **debug**(): `DebugFunctions`

A set of functions for debugging contracts, which can only be called in `@method` methods.

#### Returns

`DebugFunctions`

#### Defined in

dist/smart-contract/contract.d.ts:434

___

### lockingScript

• `get` **lockingScript**(): [`Script`](bsv.Script-1.md)

Returns a lockingScript of contract.

#### Returns

[`Script`](bsv.Script-1.md)

#### Defined in

dist/smart-contract/contract.d.ts:172

___

### methods

• `get` **methods**(): `Record`<`string`, (...`args`: `any`) => `Promise`<[`ContractTransaction`](../interfaces/ContractTransaction.md)\>\>

An object to access all public `@method`s

#### Returns

`Record`<`string`, (...`args`: `any`) => `Promise`<[`ContractTransaction`](../interfaces/ContractTransaction.md)\>\>

#### Defined in

dist/smart-contract/contract.d.ts:397

___

### provider

• `get` **provider**(): [`Provider`](Provider.md)

Get the connected [provider][https://scrypt.io/scrypt-ts/how-to-test-a-contract#provider](https://scrypt.io/scrypt-ts/how-to-test-a-contract#provider)

#### Returns

[`Provider`](Provider.md)

#### Defined in

dist/smart-contract/contract.d.ts:346

___

### scriptSize

• `get` **scriptSize**(): `number`

Returns script size of lockingScript.

#### Returns

`number`

#### Defined in

dist/smart-contract/contract.d.ts:176

___

### signer

• `get` **signer**(): [`Signer`](Signer.md)

Get the connected [signer][https://scrypt.io/scrypt-ts/how-to-test-a-contract#signer](https://scrypt.io/scrypt-ts/how-to-test-a-contract#signer)

#### Returns

[`Signer`](Signer.md)

#### Defined in

dist/smart-contract/contract.d.ts:342

___

### utxo

• `get` **utxo**(): [`IUnspentOutput`](../interfaces/bsv.Transaction.IUnspentOutput.md)

Get the utxo where the contract is currently located

#### Returns

[`IUnspentOutput`](../interfaces/bsv.Transaction.IUnspentOutput.md)

#### Defined in

dist/smart-contract/contract.d.ts:442

## Other Methods

### bindTxBuilder

▸ **bindTxBuilder**(`methodName`, `txBuilder`): `void`

Bind a transation builder for a public `@method`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `methodName` | `string` | the public `@method` name |
| `txBuilder` | [`MethodCallTxBuilder`](../interfaces/MethodCallTxBuilder.md)<[`SmartContract`](SmartContract.md)\> | a transation builder |

#### Returns

`void`

#### Defined in

dist/smart-contract/contract.d.ts:405

___

### buildChangeOutput

▸ **buildChangeOutput**(): [`ByteString`](../README.md#bytestring)

A built-in function to create an [change output][https://wiki.bitcoinsv.io/index.php/Change](https://wiki.bitcoinsv.io/index.php/Change).

**`Onchain`**

#### Returns

[`ByteString`](../README.md#bytestring)

#### Defined in

dist/smart-contract/contract.d.ts:212

___

### buildContractInput

▸ **buildContractInput**(`fromUTXO?`): [`Input`](bsv.Transaction.Input-1.md)

Build an input that includes the contract

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fromUTXO?` | [`IUnspentOutput`](../interfaces/bsv.Transaction.IUnspentOutput.md) | A parameter to specify the `utxo` where the contract is located |

#### Returns

[`Input`](bsv.Transaction.Input-1.md)

an input that includes the contract

#### Defined in

dist/smart-contract/contract.d.ts:415

___

### buildDeployTransaction

▸ **buildDeployTransaction**(`utxos`, `amount`, `changeAddress?`): `Promise`<[`Transaction`](bsv.Transaction-1.md)\>

creates a tx to deploy the contract. Users override it to cutomize a deployment tx as below.

**`Example`**

```ts
override async buildDeployTransaction(utxos: UTXO[], amount: number, changeAddress?: bsv.Address | string): Promise<bsv.Transaction> {
 const deployTx = new bsv.Transaction()
 // add p2pkh inputs for paying tx fees
 .from(utxos)
 // add contract output
 .addOutput(new bsv.Transaction.Output({
   script: this.lockingScript,
   satoshis: amount,
 }))
 // add the change output if passing `changeAddress`
 if (changeAddress) {
   deployTx.change(changeAddress);
   if (this._provider) {
     deployTx.feePerKb(await this.provider.getFeePerKb());
   }
 }

 return deployTx;
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `utxos` | [`IUnspentOutput`](../interfaces/bsv.Transaction.IUnspentOutput.md)[] | represents one or more P2PKH inputs for paying transaction fees. |
| `amount` | `number` | the balance of contract output |
| `changeAddress?` | `string` \| [`Address`](bsv.Address.md) | a change address |

#### Returns

`Promise`<[`Transaction`](bsv.Transaction-1.md)\>

#### Defined in

dist/smart-contract/contract.d.ts:376

___

### buildStateOutput

▸ **buildStateOutput**(`amount`): [`ByteString`](../README.md#bytestring)

A built-in function to create an output containing the new state. It takes an input: the number of satoshis in the output.

**`Onchain`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `bigint` | the number of satoshis in the output |

#### Returns

[`ByteString`](../README.md#bytestring)

an output containing the new state

#### Defined in

dist/smart-contract/contract.d.ts:206

___

### checkPreimage

▸ **checkPreimage**(`txPreimage`): `boolean`

Using the [OP_PUSH_TX][https://medium.com/@xiaohuiliu/op-push-tx-3d3d279174c1](https://medium.com/@xiaohuiliu/op-push-tx-3d3d279174c1) technique, check if `txPreimage` is the preimage of the current transaction.

**`Onchain`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `txPreimage` | [`SigHashPreimage`](../README.md#sighashpreimage) | The format of the preimage is [specified][https://github.com/bitcoin-sv/bitcoin-sv/blob/master/doc/abc/replay-protected-sighash.md#digest-algorithm](https://github.com/bitcoin-sv/bitcoin-sv/blob/master/doc/abc/replay-protected-sighash.md#digest-algorithm) |

#### Returns

`boolean`

true if `txPreimage` is the preimage of the current transaction. Otherwise false.

#### Defined in

dist/smart-contract/contract.d.ts:253

___

### checkPreimageAdvanced

▸ **checkPreimageAdvanced**(`txPreimage`, `privKey`, `pubKey`, `inverseK`, `r`, `rBigEndian`, `sigHashType`): `boolean`

Same as `checkPreimage`, but support customized more settings.

**`Onchain`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `txPreimage` | [`SigHashPreimage`](../README.md#sighashpreimage) | The format of the preimage is [specified][https://github.com/bitcoin-sv/bitcoin-sv/blob/master/doc/abc/replay-protected-sighash.md#digest-algorithm](https://github.com/bitcoin-sv/bitcoin-sv/blob/master/doc/abc/replay-protected-sighash.md#digest-algorithm) |
| `privKey` | [`PrivKey`](../README.md#privkey) | private Key |
| `pubKey` | [`PubKey`](../README.md#pubkey) | public key |
| `inverseK` | `bigint` | inverseK |
| `r` | `bigint` | r |
| `rBigEndian` | `string` | must be mininally encoded, to conform to strict DER rule https://github.com/bitcoin/bips/blob/master/bip-0062.mediawiki#der-encoding |
| `sigHashType` | [`SigHashType`](../README.md#sighashtype) | A SIGHASH flag is used to indicate which part of the transaction is signed by the ECDSA signature. |

#### Returns

`boolean`

true if `txPreimage` is the preimage of the current transaction. Otherwise false.

#### Defined in

dist/smart-contract/contract.d.ts:238

___

### checkPreimageSigHashType

▸ **checkPreimageSigHashType**(`txPreimage`, `sigHashType`): `boolean`

Same as `checkPreimage`, but support customized sighash type

**`Onchain`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `txPreimage` | [`SigHashPreimage`](../README.md#sighashpreimage) | The format of the preimage is [specified][https://github.com/bitcoin-sv/bitcoin-sv/blob/master/doc/abc/replay-protected-sighash.md#digest-algorithm](https://github.com/bitcoin-sv/bitcoin-sv/blob/master/doc/abc/replay-protected-sighash.md#digest-algorithm) |
| `sigHashType` | [`SigHashType`](../README.md#sighashtype) | A SIGHASH flag is used to indicate which part of the transaction is signed by the ECDSA signature. |

#### Returns

`boolean`

true if `txPreimage` is the preimage of the current transaction. Otherwise false.

#### Defined in

dist/smart-contract/contract.d.ts:246

___

### connect

▸ **connect**(`providerOrSigner`): `Promise`<`void`\>

connect a provider or a signer.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `providerOrSigner` | [`Provider`](Provider.md) \| [`Signer`](Signer.md) | a provider or a signer |

#### Returns

`Promise`<`void`\>

#### Defined in

dist/smart-contract/contract.d.ts:338

___

### deploy

▸ **deploy**(`amount?`, `options?`): `Promise`<[`TransactionResponse`](../interfaces/TransactionResponse.md)\>

Deploy the contract

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount?` | `number` | satoshis locked in the contract |
| `options?` | `Object` | An optional parameter that can specify the change address |
| `options.address?` | [`Address`](bsv.Address.md) | - |
| `options.changeAddress?` | [`Address`](bsv.Address.md) | - |

#### Returns

`Promise`<[`TransactionResponse`](../interfaces/TransactionResponse.md)\>

The transaction id of the successfully deployed contract

#### Defined in

dist/smart-contract/contract.d.ts:383

___

### getStateScript

▸ **getStateScript**(): [`ByteString`](../README.md#bytestring)

A built-in function to create a locking script containing the new state.

**`Onchain`**

#### Returns

[`ByteString`](../README.md#bytestring)

a locking script that containing the new state

#### Defined in

dist/smart-contract/contract.d.ts:218

___

### isStateful

▸ **isStateful**(): `boolean`

Check if the contract is a stateful contract

#### Returns

`boolean`

true if contract has a `@prop(true)` property

#### Defined in

dist/smart-contract/contract.d.ts:420

___

### markAsGenesis

▸ **markAsGenesis**(): [`SmartContract`](SmartContract.md)

Mark the contract as genesis contracts

#### Returns

[`SmartContract`](SmartContract.md)

#### Defined in

dist/smart-contract/contract.d.ts:199

___

### next

▸ **next**(`opt?`): [`SmartContract`](SmartContract.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opt?` | `Object` | properties that only references are copied, but not deep clone their values. |
| `opt.refCloneProps?` | `string`[] | - |

#### Returns

[`SmartContract`](SmartContract.md)

a cloned contract instance with `this.from = undefined` and `this.to = undefined`

#### Defined in

dist/smart-contract/contract.d.ts:193

___

### setDataPartInASM

▸ **setDataPartInASM**(`dataPart`): `void`

set the data part of the contract in ASM format

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataPart` | `string` |

#### Returns

`void`

#### Defined in

dist/smart-contract/contract.d.ts:315

___

### setDataPartInHex

▸ **setDataPartInHex**(`dataPart`): `void`

set the data part of the contract in hex format

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataPart` | `string` |

#### Returns

`void`

#### Defined in

dist/smart-contract/contract.d.ts:320

___

### sigTypeOfMethod

▸ **sigTypeOfMethod**(`methodName`): `number`

Get [sigHash type][https://scrypt.io/scrypt-ts/how-to-write-a-contract/scriptcontext#sighash-type](https://scrypt.io/scrypt-ts/how-to-write-a-contract/scriptcontext#sighash-type) of the public `@method` function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `methodName` | `string` | name of the public `@method` function. |

#### Returns

`number`

a sigHash type

#### Defined in

dist/smart-contract/contract.d.ts:426

___

### compile

▸ `Static` **compile**(): `Promise`<`TranspileError`[]\>

compiling the scrypt source which is the output of transpiling. only used for testing.
This function should not be called in production environment.

#### Returns

`Promise`<`TranspileError`[]\>

errors if compiling fails

#### Defined in

dist/smart-contract/contract.d.ts:120

___

### fromTx

▸ `Static` **fromTx**<`T`\>(`this`, `tx`, `atOutputIndex`, `offchainValues?`): `T`

recover a `SmartContract` instance from the transaction
if the contract contains onchain properties of type `HashedMap` or `HashedSet`
it's required to pass all their offchain raw data at this transaction moment

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`SmartContract`](SmartContract.md)<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | (...`args`: `any`[]) => `T` | - |
| `tx` | [`Transaction`](bsv.Transaction-1.md) | transaction |
| `atOutputIndex` | `number` | output index of `tx` |
| `offchainValues?` | `Record`<`string`, `any`\> | the value of offchain properties, the raw data of onchain `HashedMap` and `HashedSet` properties, at this transaction moment |

#### Returns

`T`

#### Defined in

dist/smart-contract/contract.d.ts:466

___

### loadArtifact

▸ `Static` **loadArtifact**(`artifact`): `void`

This function is usually called on the frontend.
The contract class needs to call this function before instantiating.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `artifact` | [`ContractArtifact`](../interfaces/ContractArtifact.md) | a merged contract artifact object |

#### Returns

`void`

#### Defined in

dist/smart-contract/contract.d.ts:126

___

### multiContractCall

▸ `Static` **multiContractCall**(`partialContractTransaction`, `signer`): `Promise`<[`MultiContractTransaction`](../interfaces/MultiContractTransaction.md)\>

When the `@method`s of multiple contracts is called in a transaction, this function signs and broadcasts the final transaction.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `partialContractTransaction` | [`ContractTransaction`](../interfaces/ContractTransaction.md) | - |
| `signer` | [`Signer`](Signer.md) | a signer to sign the transation. |

#### Returns

`Promise`<[`MultiContractTransaction`](../interfaces/MultiContractTransaction.md)\>

a `MultiContractTransation` with a signed transation.

#### Defined in

dist/smart-contract/contract.d.ts:477

___

## Signature Verification Methods

### checkMultiSig

▸ **checkMultiSig**(`signatures`, `publickeys`): `boolean`

Compares the first signature against each public key until it finds an ECDSA match. Starting with the subsequent public key, it compares the second signature against each remaining public key until it finds an ECDSA match. The process is repeated until all signatures have been checked or not enough public keys remain to produce a successful result. All signatures need to match a public key. Because public keys are not checked again if they fail any signature comparison, signatures must be placed in the scriptSig using the same order as their corresponding public keys were placed in the scriptPubKey or redeemScript. If all signatures are valid, 1 is returned, 0 otherwise. Due to a bug, one extra unused value is removed from the stack.

**`Onchain`**

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

dist/smart-contract/contract.d.ts:260

___

### checkSig

▸ **checkSig**(`signature`, `publickey`, `errorMsg?`): `boolean`

A built-in function verifies an ECDSA signature. It takes two inputs from the stack, a public key (on top of the stack) and an ECDSA signature in its DER_CANONISED format concatenated with sighash flags. It outputs true or false on the stack based on whether the signature check passes or fails.

**`Onchain`**

**`See`**

https://wiki.bitcoinsv.io/index.php/Opcodes_used_in_Bitcoin_Script

#### Parameters

| Name | Type |
| :------ | :------ |
| `signature` | [`Sig`](../README.md#sig) |
| `publickey` | [`PubKey`](../README.md#pubkey) |
| `errorMsg?` | `string` |

#### Returns

`boolean`

#### Defined in

dist/smart-contract/contract.d.ts:225
