[**scrypt-ts**](../README.md)

***

[scrypt-ts](../globals.md) / SmartContract

# Class: SmartContract

Defined in: scrypt-ts/dist/smart-contract/contract.d.ts:99

The main contract class. To write a contract, extend this class as such:

## Example

```ts
class YourSmartContract extends SmartContract {
  // your smart contract code here
}
```

## Extended by

- [`P2PKH`](P2PKH.md)
- [`P2PK`](P2PK.md)

## Constructors

### new SmartContract()

> **new SmartContract**(...`args`): [`SmartContract`](SmartContract.md)

Defined in: scrypt-ts/dist/smart-contract/contract.d.ts:157

#### Parameters

##### args

...`any`[]

#### Returns

[`SmartContract`](SmartContract.md)

## Other

### from?

> `optional` **from**: [`IUnspentOutput`](../@scrypt-inc/bsv/namespaces/Transaction/interfaces/IUnspentOutput.md) \| [`TxOutputRef`](../interfaces/TxOutputRef.md)

Defined in: scrypt-ts/dist/smart-contract/contract.d.ts:104

`from` is a reference to a transaction output where the props of `this` contract instance are located/stored on chain.
In other words, it's the start point for the lifecycle of `this` instance.

***

### to?

> `optional` **to**: [`TxInputRef`](../interfaces/TxInputRef.md)

Defined in: scrypt-ts/dist/smart-contract/contract.d.ts:109

`to` is a reference to a transaction input where a public method of `this` contract instance is called.
In other words, it's the end point for the lifecycle of `this` instance.

***

### asmArgs

#### Get Signature

> **get** **asmArgs**(): `AsmVarValues`

Defined in: scrypt-ts/dist/smart-contract/contract.d.ts:217

Returns set ASM variable values.

##### Returns

`AsmVarValues`

***

### balance

#### Get Signature

> **get** **balance**(): `number`

Defined in: scrypt-ts/dist/smart-contract/contract.d.ts:508

Get the current locked balance of the contract

##### Returns

`number`

***

### changeAddress

#### Get Signature

> **get** **changeAddress**(): `Ripemd160`

Defined in: scrypt-ts/dist/smart-contract/contract.d.ts:335

Get the change address of the change output for `to.tx`.

##### Onchain

##### Returns

`Ripemd160`

the change address of to.tx

***

### changeAmount

#### Get Signature

> **get** **changeAmount**(): `bigint`

Defined in: scrypt-ts/dist/smart-contract/contract.d.ts:323

Get the amount of the change output for `to.tx`.

##### Onchain

##### Returns

`bigint`

amount in satoshis

***

### codePart

#### Get Signature

> **get** **codePart**(): `string`

Defined in: scrypt-ts/dist/smart-contract/contract.d.ts:202

Returns code part of the lockingScript, in hex format.

##### Returns

`string`

***

### ctx

#### Get Signature

> **get** **ctx**(): [`ScriptContext`](../interfaces/ScriptContext.md)

Defined in: scrypt-ts/dist/smart-contract/contract.d.ts:518

You can directly access the context through `this.ctx` in any public @method.
[ScriptContext][https://docs.scrypt.io/how-to-write-a-contract/scriptcontext](https://docs.scrypt.io/how-to-write-a-contract/scriptcontext) can be considered additional information a public method gets when called, besides its function parameters.

##### Onchain

##### Returns

[`ScriptContext`](../interfaces/ScriptContext.md)

***

### dataPart

#### Get Signature

> **get** **dataPart**(): [`Script`](../@scrypt-inc/bsv/classes/Script.md)

Defined in: scrypt-ts/dist/smart-contract/contract.d.ts:385

##### Returns

[`Script`](../@scrypt-inc/bsv/classes/Script.md)

***

### debug

#### Get Signature

> **get** **debug**(): `DebugFunctions`

Defined in: scrypt-ts/dist/smart-contract/contract.d.ts:504

A set of functions for debugging contracts, which can only be called in `@method` methods.

##### Returns

`DebugFunctions`

***

### lockingScript

#### Get Signature

> **get** **lockingScript**(): [`Script`](../@scrypt-inc/bsv/classes/Script.md)

Defined in: scrypt-ts/dist/smart-contract/contract.d.ts:194

Returns a lockingScript of contract.

##### Returns

[`Script`](../@scrypt-inc/bsv/classes/Script.md)

***

### methods

#### Get Signature

> **get** **methods**(): `Record`\<`string`, (...`args`) => `Promise`\<[`ContractTransaction`](../interfaces/ContractTransaction.md)\>\>

Defined in: scrypt-ts/dist/smart-contract/contract.d.ts:467

An object to access all public `@method`s

##### Returns

`Record`\<`string`, (...`args`) => `Promise`\<[`ContractTransaction`](../interfaces/ContractTransaction.md)\>\>

***

### prevouts

#### Get Signature

> **get** **prevouts**(): [`ByteString`](../type-aliases/ByteString.md)

Defined in: scrypt-ts/dist/smart-contract/contract.d.ts:329

Get the prevouts for `to.tx`.

##### Onchain

##### Returns

[`ByteString`](../type-aliases/ByteString.md)

prevouts in satoshis

***

### provider

#### Get Signature

> **get** **provider**(): [`Provider`](Provider.md)

Defined in: scrypt-ts/dist/smart-contract/contract.d.ts:415

Get the connected [provider][https://docs.scrypt.io/how-to-test-a-contract#provider](https://docs.scrypt.io/how-to-test-a-contract#provider)

##### Returns

[`Provider`](Provider.md)

***

### scriptHash

#### Get Signature

> **get** **scriptHash**(): `string`

Defined in: scrypt-ts/dist/smart-contract/contract.d.ts:206

Returns sha256 hash of the current locking script, formatted as a LE hex string.

##### Returns

`string`

***

### scriptSize

#### Get Signature

> **get** **scriptSize**(): `number`

Defined in: scrypt-ts/dist/smart-contract/contract.d.ts:198

Returns script size of lockingScript.

##### Returns

`number`

***

### signer

#### Get Signature

> **get** **signer**(): [`Signer`](Signer.md)

Defined in: scrypt-ts/dist/smart-contract/contract.d.ts:411

Get the connected [signer][https://docs.scrypt.io/how-to-test-a-contract#signer](https://docs.scrypt.io/how-to-test-a-contract#signer)

##### Returns

[`Signer`](Signer.md)

***

### utxo

#### Get Signature

> **get** **utxo**(): [`IUnspentOutput`](../@scrypt-inc/bsv/namespaces/Transaction/interfaces/IUnspentOutput.md)

Defined in: scrypt-ts/dist/smart-contract/contract.d.ts:512

Get the utxo where the contract is currently located

##### Returns

[`IUnspentOutput`](../@scrypt-inc/bsv/namespaces/Transaction/interfaces/IUnspentOutput.md)

***

### bindTxBuilder()

> **bindTxBuilder**(`methodName`, `txBuilder`): `void`

Defined in: scrypt-ts/dist/smart-contract/contract.d.ts:475

Bind a transation builder for a public `@method`

#### Parameters

##### methodName

`string`

the public `@method` name

##### txBuilder

[`MethodCallTxBuilder`](../interfaces/MethodCallTxBuilder.md)\<[`SmartContract`](SmartContract.md)\>

a transation builder

#### Returns

`void`

***

### buildChangeOutput()

> **buildChangeOutput**(): [`ByteString`](../type-aliases/ByteString.md)

Defined in: scrypt-ts/dist/smart-contract/contract.d.ts:249

A built-in function to create an [change output][https://wiki.bitcoinsv.io/index.php/Change](https://wiki.bitcoinsv.io/index.php/Change).

#### Returns

[`ByteString`](../type-aliases/ByteString.md)

#### Onchain

***

### buildContractInput()

> **buildContractInput**(`fromUTXO`?): [`Input`](../@scrypt-inc/bsv/namespaces/Transaction/classes/Input.md)

Defined in: scrypt-ts/dist/smart-contract/contract.d.ts:485

Build an input that includes the contract

#### Parameters

##### fromUTXO?

[`IUnspentOutput`](../@scrypt-inc/bsv/namespaces/Transaction/interfaces/IUnspentOutput.md)

A parameter to specify the `utxo` where the contract is located

#### Returns

[`Input`](../@scrypt-inc/bsv/namespaces/Transaction/classes/Input.md)

an input that includes the contract

***

### buildDeployTransaction()

> **buildDeployTransaction**(`utxos`, `amount`, `changeAddress`): `Promise`\<[`Transaction`](../@scrypt-inc/bsv/classes/Transaction.md)\>

Defined in: scrypt-ts/dist/smart-contract/contract.d.ts:445

creates a tx to deploy the contract. Users override it to cutomize a deployment tx as below.

#### Parameters

##### utxos

[`IUnspentOutput`](../@scrypt-inc/bsv/namespaces/Transaction/interfaces/IUnspentOutput.md)[]

represents one or more P2PKH inputs for paying transaction fees.

##### amount

`number`

the balance of contract output

##### changeAddress

a change address

`string` | [`Address`](../@scrypt-inc/bsv/classes/Address.md)

#### Returns

`Promise`\<[`Transaction`](../@scrypt-inc/bsv/classes/Transaction.md)\>

#### Example

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

***

### buildStateOutput()

> **buildStateOutput**(`amount`): [`ByteString`](../type-aliases/ByteString.md)

Defined in: scrypt-ts/dist/smart-contract/contract.d.ts:243

A built-in function to create an output containing the new state. It takes an input: the number of satoshis in the output.

#### Parameters

##### amount

`bigint`

the number of satoshis in the output

#### Returns

[`ByteString`](../type-aliases/ByteString.md)

an output containing the new state

#### Onchain

***

### checkPreimage()

> **checkPreimage**(`txPreimage`): `boolean`

Defined in: scrypt-ts/dist/smart-contract/contract.d.ts:290

Using the [OP_PUSH_TX][https://medium.com/@xiaohuiliu/op-push-tx-3d3d279174c1](https://medium.com/@xiaohuiliu/op-push-tx-3d3d279174c1) technique, check if `txPreimage` is the preimage of the current transaction.

#### Parameters

##### txPreimage

[`SigHashPreimage`](../type-aliases/SigHashPreimage.md)

The format of the preimage is [specified][https://github.com/bitcoin-sv/bitcoin-sv/blob/master/doc/abc/replay-protected-sighash.md#digest-algorithm](https://github.com/bitcoin-sv/bitcoin-sv/blob/master/doc/abc/replay-protected-sighash.md#digest-algorithm)

#### Returns

`boolean`

true if `txPreimage` is the preimage of the current transaction. Otherwise false.

#### Onchain

***

### checkPreimageAdvanced()

> **checkPreimageAdvanced**(`txPreimage`, `privKey`, `pubKey`, `inverseK`, `r`, `rBigEndian`, `sigHashType`): `boolean`

Defined in: scrypt-ts/dist/smart-contract/contract.d.ts:275

Same as `checkPreimage`, but support customized more settings.

#### Parameters

##### txPreimage

[`SigHashPreimage`](../type-aliases/SigHashPreimage.md)

The format of the preimage is [specified][https://github.com/bitcoin-sv/bitcoin-sv/blob/master/doc/abc/replay-protected-sighash.md#digest-algorithm](https://github.com/bitcoin-sv/bitcoin-sv/blob/master/doc/abc/replay-protected-sighash.md#digest-algorithm)

##### privKey

[`PrivKey`](../type-aliases/PrivKey.md)

private Key

##### pubKey

`PubKey`

public key

##### inverseK

`bigint`

inverseK

##### r

`bigint`

r

##### rBigEndian

`string`

must be mininally encoded, to conform to strict DER rule https://github.com/bitcoin/bips/blob/master/bip-0062.mediawiki#der-encoding

##### sigHashType

[`SigHashType`](../type-aliases/SigHashType.md)

A SIGHASH flag is used to indicate which part of the transaction is signed by the ECDSA signature.

#### Returns

`boolean`

true if `txPreimage` is the preimage of the current transaction. Otherwise false.

#### Onchain

***

### checkPreimageSigHashType()

> **checkPreimageSigHashType**(`txPreimage`, `sigHashType`): `boolean`

Defined in: scrypt-ts/dist/smart-contract/contract.d.ts:283

Same as `checkPreimage`, but support customized sighash type

#### Parameters

##### txPreimage

[`SigHashPreimage`](../type-aliases/SigHashPreimage.md)

The format of the preimage is [specified][https://github.com/bitcoin-sv/bitcoin-sv/blob/master/doc/abc/replay-protected-sighash.md#digest-algorithm](https://github.com/bitcoin-sv/bitcoin-sv/blob/master/doc/abc/replay-protected-sighash.md#digest-algorithm)

##### sigHashType

[`SigHashType`](../type-aliases/SigHashType.md)

A SIGHASH flag is used to indicate which part of the transaction is signed by the ECDSA signature.

#### Returns

`boolean`

true if `txPreimage` is the preimage of the current transaction. Otherwise false.

#### Onchain

***

### connect()

> **connect**(`signer`): `Promise`\<`void`\>

Defined in: scrypt-ts/dist/smart-contract/contract.d.ts:402

connect a signer.

#### Parameters

##### signer

[`Signer`](Signer.md)

a signer

#### Returns

`Promise`\<`void`\>

***

### deploy()

> **deploy**(`amount`?, `options`?): `Promise`\<[`TransactionResponse`](../interfaces/TransactionResponse.md)\>

Defined in: scrypt-ts/dist/smart-contract/contract.d.ts:452

Deploy the contract

#### Parameters

##### amount?

`number`

satoshis locked in the contract, 1 sat by default

##### options?

An optional parameter that can specify the change address and additional UTXOs

###### address?

[`Address`](../@scrypt-inc/bsv/classes/Address.md)

###### changeAddress?

[`Address`](../@scrypt-inc/bsv/classes/Address.md)

###### utxos?

[`IUnspentOutput`](../@scrypt-inc/bsv/namespaces/Transaction/interfaces/IUnspentOutput.md)[]

#### Returns

`Promise`\<[`TransactionResponse`](../interfaces/TransactionResponse.md)\>

The transaction id of the successfully deployed contract

***

### getDefaultTxBuilder()

> `protected` **getDefaultTxBuilder**\<`T`\>(`methodName`): [`MethodCallTxBuilder`](../interfaces/MethodCallTxBuilder.md)\<`T`\>

Defined in: scrypt-ts/dist/smart-contract/contract.d.ts:469

#### Type Parameters

• **T** *extends* [`SmartContract`](SmartContract.md)

#### Parameters

##### methodName

`string`

#### Returns

[`MethodCallTxBuilder`](../interfaces/MethodCallTxBuilder.md)\<`T`\>

***

### getDelegateInstance()

> `protected` **getDelegateInstance**(): `AbstractContract`

Defined in: scrypt-ts/dist/smart-contract/contract.d.ts:155

#### Returns

`AbstractContract`

***

### getOffchainUpdates()

> **getOffchainUpdates**\<`T`\>(): [`OffchainUpdates`](../type-aliases/OffchainUpdates.md)\<`T`\>

Defined in: scrypt-ts/dist/smart-contract/contract.d.ts:576

Offchain update functions to apply when replaying a contract to the latest instance. This is used to populate
properties which are tied to offchain values, such as `HashedMap` and `HashedSet`.

#### Type Parameters

• **T** *extends* [`SmartContract`](SmartContract.md)

#### Returns

[`OffchainUpdates`](../type-aliases/OffchainUpdates.md)\<`T`\>

***

### getPrependNOPScript()

> **getPrependNOPScript**(): [`Script`](../@scrypt-inc/bsv/classes/Script.md)

Defined in: scrypt-ts/dist/smart-contract/contract.d.ts:571

#### Returns

[`Script`](../@scrypt-inc/bsv/classes/Script.md)

***

### getStateScript()

> **getStateScript**(): [`ByteString`](../type-aliases/ByteString.md)

Defined in: scrypt-ts/dist/smart-contract/contract.d.ts:255

A built-in function to create a locking script containing the new state.

#### Returns

[`ByteString`](../type-aliases/ByteString.md)

a locking script that containing the new state

#### Onchain

***

### getTxBuilder()

> **getTxBuilder**\<`T`\>(`methodName`): [`MethodCallTxBuilder`](../interfaces/MethodCallTxBuilder.md)\<`T`\>

Defined in: scrypt-ts/dist/smart-contract/contract.d.ts:468

#### Type Parameters

• **T** *extends* [`SmartContract`](SmartContract.md)

#### Parameters

##### methodName

`string`

#### Returns

[`MethodCallTxBuilder`](../interfaces/MethodCallTxBuilder.md)\<`T`\>

***

### init()

> `protected` **init**(...`args`): `void`

Defined in: scrypt-ts/dist/smart-contract/contract.d.ts:165

Only inherited classes can call this function.
Direct subclasses of `SmartContract` do not need to call this function.

#### Parameters

##### args

...`any`[]

constructor parameters of inherited classes

#### Returns

`void`

#### Onchain

***

### insertCodeSeparator()

> **insertCodeSeparator**(): `void`

Defined in: scrypt-ts/dist/smart-contract/contract.d.ts:295

Insert and OP_CODESEPARATOR at this point of the functions logic.
More detail about [OP_CODESEPARATOR][https://wiki.bitcoinsv.io/index.php/OP\_CODESEPARATOR](https://wiki.bitcoinsv.io/index.php/OP_CODESEPARATOR)

#### Returns

`void`

***

### isStateful()

> **isStateful**(): `boolean`

Defined in: scrypt-ts/dist/smart-contract/contract.d.ts:490

Check if the contract is a stateful contract

#### Returns

`boolean`

true if contract has a `@prop(true)` property

***

### markAsGenesis()

> **markAsGenesis**(): `this`

Defined in: scrypt-ts/dist/smart-contract/contract.d.ts:236

Mark the contract as genesis contracts

#### Returns

`this`

***

### next()

> **next**(`opt`?): `this`

Defined in: scrypt-ts/dist/smart-contract/contract.d.ts:230

#### Parameters

##### opt?

properties that only references are copied, but not deep clone their values.

###### refCloneProps?

`string`[]

#### Returns

`this`

a cloned contract instance with `this.from = undefined` and `this.to = undefined`

***

### prependNOPScript()

> **prependNOPScript**(`nopScript`): `void`

Defined in: scrypt-ts/dist/smart-contract/contract.d.ts:570

#### Parameters

##### nopScript

[`Script`](../@scrypt-inc/bsv/classes/Script.md)

#### Returns

`void`

***

### setAsmVars()

> **setAsmVars**(`asmVarValues`): `void`

Defined in: scrypt-ts/dist/smart-contract/contract.d.ts:213

If the compiled contract contains any ASM variable templates (e.g. P2PKH.unlock.pubKeyHash),
replace them with the passed values.

#### Parameters

##### asmVarValues

`AsmVarValues`

type that contains the actual values.

#### Returns

`void`

***

### setDataPartInASM()

> **setDataPartInASM**(`dataPart`): `void`

Defined in: scrypt-ts/dist/smart-contract/contract.d.ts:379

set the data part of the contract in ASM format

#### Parameters

##### dataPart

`string`

#### Returns

`void`

***

### setDataPartInHex()

> **setDataPartInHex**(`dataPart`): `void`

Defined in: scrypt-ts/dist/smart-contract/contract.d.ts:384

set the data part of the contract in hex format

#### Parameters

##### dataPart

`string`

#### Returns

`void`

***

### setDelegateInstance()

> `protected` **setDelegateInstance**(`delegateInstance`): `void`

Defined in: scrypt-ts/dist/smart-contract/contract.d.ts:156

#### Parameters

##### delegateInstance

`AbstractContract`

#### Returns

`void`

***

### setProvider()

> **setProvider**(`provider`): `void`

Defined in: scrypt-ts/dist/smart-contract/contract.d.ts:407

set a provider.

#### Parameters

##### provider

[`Provider`](Provider.md)

a provider

#### Returns

`void`

***

### sigTypeOfMethod()

> **sigTypeOfMethod**(`methodName`): `number`

Defined in: scrypt-ts/dist/smart-contract/contract.d.ts:496

Get [sigHash type][https://docs.scrypt.io/how-to-write-a-contract/scriptcontext#sighash-type](https://docs.scrypt.io/how-to-write-a-contract/scriptcontext#sighash-type) of the public `@method` function.

#### Parameters

##### methodName

`string`

name of the public `@method` function.

#### Returns

`number`

a sigHash type

***

### compile()

> `static` **compile**(): `Promise`\<[`Artifact`](../interfaces/Artifact.md)\>

Defined in: scrypt-ts/dist/smart-contract/contract.d.ts:128

compiling the scrypt source which is the output of transpiling. Calling this function to output the contract artifact file.
only used for testing.
This function should not be called in production environment.

#### Returns

`Promise`\<[`Artifact`](../interfaces/Artifact.md)\>

if compiling succeed, otherwise it throws error.

***

### fromTx()

> `static` **fromTx**\<`T`\>(`this`, `tx`, `atOutputIndex`, `offchainValues`?, `nopScript`?): `T`

Defined in: scrypt-ts/dist/smart-contract/contract.d.ts:538

recover a `SmartContract` instance from the transaction
if the contract contains onchain properties of type `HashedMap` or `HashedSet`
it's required to pass all their offchain raw data at this transaction moment

#### Type Parameters

• **T** *extends* [`SmartContract`](SmartContract.md)

#### Parameters

##### this

(...`args`) => `T`

##### tx

[`Transaction`](../@scrypt-inc/bsv/classes/Transaction.md)

transaction

##### atOutputIndex

`number`

output index of `tx`

##### offchainValues?

`Record`\<`string`, `any`\>

the value of offchain properties, the raw data of onchain `HashedMap` and `HashedSet` properties, at this transaction moment

##### nopScript?

[`Script`](../@scrypt-inc/bsv/classes/Script.md)

a script if contract locking script startwiths a nopScript.

#### Returns

`T`

***

### fromUTXO()

> `static` **fromUTXO**\<`T`\>(`this`, `utxo`, `offchainValues`?, `nopScript`?): `T`

Defined in: scrypt-ts/dist/smart-contract/contract.d.ts:547

recover a `SmartContract` instance from the transaction
if the contract contains onchain properties of type `HashedMap` or `HashedSet`
it's required to pass all their offchain raw data at this transaction moment

#### Type Parameters

• **T** *extends* [`SmartContract`](SmartContract.md)

#### Parameters

##### this

(...`args`) => `T`

##### utxo

[`IUnspentOutput`](../@scrypt-inc/bsv/namespaces/Transaction/interfaces/IUnspentOutput.md)

##### offchainValues?

`Record`\<`string`, `any`\>

the value of offchain properties, the raw data of onchain `HashedMap` and `HashedSet` properties, at this transaction moment

##### nopScript?

[`Script`](../@scrypt-inc/bsv/classes/Script.md)

a script if contract locking script startwiths a nopScript.

#### Returns

`T`

***

### getArtifact()

> `static` **getArtifact**(): [`Artifact`](../interfaces/Artifact.md)

Defined in: scrypt-ts/dist/smart-contract/contract.d.ts:142

The contract class needs to call this function before instantiating.

#### Returns

[`Artifact`](../interfaces/Artifact.md)

***

### loadArtifact()

> `static` **loadArtifact**(`artifactFile`?): `void`

Defined in: scrypt-ts/dist/smart-contract/contract.d.ts:136

This function is usually called on the frontend.
The contract class needs to call this function before instantiating.

#### Parameters

##### artifactFile?

a merged contract artifact object, or its file path

`string` | [`Artifact`](../interfaces/Artifact.md)

#### Returns

`void`

***

### multiContractCall()

> `static` **multiContractCall**(`partialContractTx`, `feeSigner`, `options`?): `Promise`\<[`MultiContractTransaction`](../interfaces/MultiContractTransaction.md)\>

Defined in: scrypt-ts/dist/smart-contract/contract.d.ts:560

When the `@method`s of multiple contracts is called in a transaction, this function signs and broadcasts the final transaction.

#### Parameters

##### partialContractTx

[`ContractTransaction`](../interfaces/ContractTransaction.md)

a `ContractTransation` with a unsigned transation.

##### feeSigner

[`Signer`](Signer.md)

a signer to sign the transation.

##### options?

[`MultiContractCallOptions`](../interfaces/MultiContractCallOptions.md)

#### Returns

`Promise`\<[`MultiContractTransaction`](../interfaces/MultiContractTransaction.md)\>

a `MultiContractTransation` with a signed transation.

***

### parseCallData()

> `static` **parseCallData**(`tx`, `inputIndex`): `CallData`

Defined in: scrypt-ts/dist/smart-contract/contract.d.ts:567

parse call data when a contract public method called in a transation.

#### Parameters

##### tx

[`Transaction`](../@scrypt-inc/bsv/classes/Transaction.md)

##### inputIndex

`number`

#### Returns

`CallData`

## Signature Verification

### checkMultiSig()

> **checkMultiSig**(`signatures`, `publickeys`): `boolean`

Defined in: scrypt-ts/dist/smart-contract/contract.d.ts:302

Compares the first signature against each public key until it finds an ECDSA match. Starting with the subsequent public key, it compares the second signature against each remaining public key until it finds an ECDSA match. The process is repeated until all signatures have been checked or not enough public keys remain to produce a successful result. All signatures need to match a public key. Because public keys are not checked again if they fail any signature comparison, signatures must be placed in the scriptSig using the same order as their corresponding public keys were placed in the scriptPubKey or redeemScript. If all signatures are valid, 1 is returned, 0 otherwise. Due to a bug, one extra unused value is removed from the stack.

#### Parameters

##### signatures

`Sig`[]

##### publickeys

`PubKey`[]

#### Returns

`boolean`

#### Onchain

#### See

https://wiki.bitcoinsv.io/index.php/Opcodes_used_in_Bitcoin_Script

***

### checkSig()

> **checkSig**(`signature`, `publickey`, `errorMsg`?): `boolean`

Defined in: scrypt-ts/dist/smart-contract/contract.d.ts:262

A built-in function verifies an ECDSA signature. It takes two inputs from the stack, a public key (on top of the stack) and an ECDSA signature in its DER_CANONISED format concatenated with sighash flags. It outputs true or false on the stack based on whether the signature check passes or fails.

#### Parameters

##### signature

`Sig`

##### publickey

`PubKey`

##### errorMsg?

`string`

#### Returns

`boolean`

#### Onchain

#### See

https://wiki.bitcoinsv.io/index.php/Opcodes_used_in_Bitcoin_Script

## Time Lock

### timeLock()

> **timeLock**(`locktime`): `boolean`

Defined in: scrypt-ts/dist/smart-contract/contract.d.ts:317

Implements a time-based lock on a transaction until a specified `locktime` has been reached.
The lock can be based on either block height or a UNIX timestamp.

If the `locktime` is below 500,000,000, it's interpreted as a block height. Otherwise,
it's interpreted as a UNIX timestamp. This function checks and ensures that the transaction's
nSequence is less than `UINT_MAX`, and that the provided `locktime` has been reached or passed.

#### Parameters

##### locktime

`bigint`

The block height or timestamp until which the transaction should be locked.

#### Returns

`boolean`

If `true` is returned, nlockTime and sequence in `this.ctx` are valid, otherwise they are invalid.

#### Onchain

#### See

https://docs.scrypt.io/tutorials/timeLock
