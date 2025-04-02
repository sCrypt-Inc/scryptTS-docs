[**bitcoinjs-lib v0.2.9-beta.16**](../README.md)

***

[bitcoinjs-lib](../README.md) / IExtPsbt

# Interface: IExtPsbt

Defined in: [packages/scrypt-ts-btc/src/psbt/types.ts:29](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/psbt/types.ts#L29)

## Extends

- `Psbt`.`Contextual`

## Properties

### data

> `readonly` **data**: `Psbt`

Defined in: node\_modules/@scrypt-inc/bitcoinjs-lib/dist/cjs/psbt.d.ts:61

#### Inherited from

`Psbt.data`

***

### isFinalized

> **isFinalized**: `boolean`

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/context.ts:173](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/context.ts#L173)

Whether the PSBT is finalized.

#### Inherited from

`Contextual.isFinalized`

***

### isFinalizing

> **isFinalizing**: `boolean`

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/context.ts:168](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/context.ts#L168)

Whether the PSBT starts finalizing.

#### Inherited from

`Contextual.isFinalizing`

***

### unsignedTx

> **unsignedTx**: `Transaction`

Defined in: [packages/scrypt-ts-btc/src/psbt/types.ts:80](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/psbt/types.ts#L80)

The unsigned transaction when the PSBT is not finalized.
note:

## Accessors

### inputCount

#### Get Signature

> **get** **inputCount**(): `number`

Defined in: node\_modules/@scrypt-inc/bitcoinjs-lib/dist/cjs/psbt.d.ts:68

##### Returns

`number`

#### Inherited from

`Psbt.inputCount`

***

### locktime

#### Get Signature

> **get** **locktime**(): `number`

Defined in: node\_modules/@scrypt-inc/bitcoinjs-lib/dist/cjs/psbt.d.ts:71

##### Returns

`number`

#### Set Signature

> **set** **locktime**(`locktime`): `void`

Defined in: node\_modules/@scrypt-inc/bitcoinjs-lib/dist/cjs/psbt.d.ts:72

##### Parameters

###### locktime

`number`

##### Returns

`void`

#### Inherited from

`Psbt.locktime`

***

### txInputs

#### Get Signature

> **get** **txInputs**(): `PsbtTxInput`[]

Defined in: node\_modules/@scrypt-inc/bitcoinjs-lib/dist/cjs/psbt.d.ts:73

##### Returns

`PsbtTxInput`[]

#### Inherited from

`Psbt.txInputs`

***

### txOutputs

#### Get Signature

> **get** **txOutputs**(): `PsbtTxOutput`[]

Defined in: node\_modules/@scrypt-inc/bitcoinjs-lib/dist/cjs/psbt.d.ts:74

##### Returns

`PsbtTxOutput`[]

#### Inherited from

`Psbt.txOutputs`

***

### version

#### Get Signature

> **get** **version**(): `number`

Defined in: node\_modules/@scrypt-inc/bitcoinjs-lib/dist/cjs/psbt.d.ts:69

##### Returns

`number`

#### Set Signature

> **set** **version**(`version`): `void`

Defined in: node\_modules/@scrypt-inc/bitcoinjs-lib/dist/cjs/psbt.d.ts:70

##### Parameters

###### version

`number`

##### Returns

`void`

#### Inherited from

`Psbt.version`

## Methods

### addCovenantInput()

> **addCovenantInput**(`covenant`, `subContractAlias`?): `this`

Defined in: [packages/scrypt-ts-btc/src/psbt/types.ts:35](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/psbt/types.ts#L35)

Add an input to spend the covenant.

#### Parameters

##### covenant

[`Covenant`](../classes/Covenant.md)

##### subContractAlias?

`string`

#### Returns

`this`

***

### addCovenantOutput()

> **addCovenantOutput**(`covenant`, `satoshis`): `this`

Defined in: [packages/scrypt-ts-btc/src/psbt/types.ts:42](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/psbt/types.ts#L42)

Add an output to create new covenant.

#### Parameters

##### covenant

[`Covenant`](../classes/Covenant.md)

a new covenant

##### satoshis

`number`

the output includes the amount of satoshis.

#### Returns

`this`

***

### addInput()

> **addInput**(`inputData`): `this`

Defined in: node\_modules/@scrypt-inc/bitcoinjs-lib/dist/cjs/psbt.d.ts:82

#### Parameters

##### inputData

`PsbtInputExtended`

#### Returns

`this`

#### Inherited from

`Psbt.addInput`

***

### addInputs()

> **addInputs**(`inputDatas`): `this`

Defined in: node\_modules/@scrypt-inc/bitcoinjs-lib/dist/cjs/psbt.d.ts:81

#### Parameters

##### inputDatas

`PsbtInputExtended`[]

#### Returns

`this`

#### Inherited from

`Psbt.addInputs`

***

### addOutput()

> **addOutput**(`outputData`): `this`

Defined in: node\_modules/@scrypt-inc/bitcoinjs-lib/dist/cjs/psbt.d.ts:84

#### Parameters

##### outputData

`PsbtOutputExtended`

#### Returns

`this`

#### Inherited from

`Psbt.addOutput`

***

### addOutputs()

> **addOutputs**(`outputDatas`): `this`

Defined in: node\_modules/@scrypt-inc/bitcoinjs-lib/dist/cjs/psbt.d.ts:83

#### Parameters

##### outputDatas

`PsbtOutputExtended`[]

#### Returns

`this`

#### Inherited from

`Psbt.addOutputs`

***

### addUnknownKeyValToGlobal()

> **addUnknownKeyValToGlobal**(`keyVal`): `this`

Defined in: node\_modules/@scrypt-inc/bitcoinjs-lib/dist/cjs/psbt.d.ts:123

#### Parameters

##### keyVal

`KeyValue`

#### Returns

`this`

#### Inherited from

`Psbt.addUnknownKeyValToGlobal`

***

### addUnknownKeyValToInput()

> **addUnknownKeyValToInput**(`inputIndex`, `keyVal`): `this`

Defined in: node\_modules/@scrypt-inc/bitcoinjs-lib/dist/cjs/psbt.d.ts:124

#### Parameters

##### inputIndex

`number`

##### keyVal

`KeyValue`

#### Returns

`this`

#### Inherited from

`Psbt.addUnknownKeyValToInput`

***

### addUnknownKeyValToOutput()

> **addUnknownKeyValToOutput**(`outputIndex`, `keyVal`): `this`

Defined in: node\_modules/@scrypt-inc/bitcoinjs-lib/dist/cjs/psbt.d.ts:125

#### Parameters

##### outputIndex

`number`

##### keyVal

`KeyValue`

#### Returns

`this`

#### Inherited from

`Psbt.addUnknownKeyValToOutput`

***

### change()

> **change**(`address`, `feeRate`, `estimatedVsize`?): `this`

Defined in: [packages/scrypt-ts-btc/src/psbt/types.ts:62](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/psbt/types.ts#L62)

Add a change output to the transaction if neccesarry.

#### Parameters

##### address

`string`

the address to send the change to

##### feeRate

`number`

the fee rate in satoshi per byte

##### estimatedVsize?

`number`

the estimated virtual size of the transaction

#### Returns

`this`

***

### clearFinalizedInput()

> **clearFinalizedInput**(`inputIndex`): `this`

Defined in: node\_modules/@scrypt-inc/bitcoinjs-lib/dist/cjs/psbt.d.ts:126

#### Parameters

##### inputIndex

`number`

#### Returns

`this`

#### Inherited from

`Psbt.clearFinalizedInput`

***

### clone()

> **clone**(): `Psbt`

Defined in: node\_modules/@scrypt-inc/bitcoinjs-lib/dist/cjs/psbt.d.ts:76

#### Returns

`Psbt`

#### Inherited from

`Psbt.clone`

***

### combine()

> **combine**(...`those`): `this`

Defined in: node\_modules/@scrypt-inc/bitcoinjs-lib/dist/cjs/psbt.d.ts:75

#### Parameters

##### those

...`Psbt`[]

#### Returns

`this`

#### Inherited from

`Psbt.combine`

***

### estimateFee()

> **estimateFee**(`feeRate`): `number`

Defined in: [packages/scrypt-ts-btc/src/psbt/types.ts:74](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/psbt/types.ts#L74)

Estimate the fee of the transaction.

#### Parameters

##### feeRate

`number`

the fee rate in satoshi per byte

#### Returns

`number`

the estimated fee in satoshis

***

### estimateVSize()

> **estimateVSize**(): `number`

Defined in: [packages/scrypt-ts-btc/src/psbt/types.ts:67](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/psbt/types.ts#L67)

Estimate the virtual size of the transaction.

#### Returns

`number`

***

### extractTransaction()

> **extractTransaction**(`disableFeeCheck`?): `Transaction`

Defined in: node\_modules/@scrypt-inc/bitcoinjs-lib/dist/cjs/psbt.d.ts:85

#### Parameters

##### disableFeeCheck?

`boolean`

#### Returns

`Transaction`

#### Inherited from

`Psbt.extractTransaction`

***

### finalizeAllInputs()

> **finalizeAllInputs**(): `this`

Defined in: node\_modules/@scrypt-inc/bitcoinjs-lib/dist/cjs/psbt.d.ts:88

#### Returns

`this`

#### Inherited from

`Psbt.finalizeAllInputs`

***

### finalizeInput()

> **finalizeInput**(`inputIndex`, `finalScriptsFunc`?): `this`

Defined in: node\_modules/@scrypt-inc/bitcoinjs-lib/dist/cjs/psbt.d.ts:89

#### Parameters

##### inputIndex

`number`

##### finalScriptsFunc?

`FinalScriptsFunc` | `FinalTaprootScriptsFunc`

#### Returns

`this`

#### Inherited from

`Psbt.finalizeInput`

***

### finalizeTaprootInput()

> **finalizeTaprootInput**(`inputIndex`, `tapLeafHashToFinalize`?, `finalScriptsFunc`?): `this`

Defined in: node\_modules/@scrypt-inc/bitcoinjs-lib/dist/cjs/psbt.d.ts:90

#### Parameters

##### inputIndex

`number`

##### tapLeafHashToFinalize?

`Uint8Array`

##### finalScriptsFunc?

`FinalTaprootScriptsFunc`

#### Returns

`this`

#### Inherited from

`Psbt.finalizeTaprootInput`

***

### getChangeInfo()

> **getChangeInfo**(): [`TxOut`](../type-aliases/TxOut.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/context.ts:163](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/context.ts#L163)

Get the change output information.

#### Returns

[`TxOut`](../type-aliases/TxOut.md)

#### Inherited from

`Contextual.getChangeInfo`

***

### getFee()

> **getFee**(): `bigint`

Defined in: node\_modules/@scrypt-inc/bitcoinjs-lib/dist/cjs/psbt.d.ts:87

#### Returns

`bigint`

#### Inherited from

`Psbt.getFee`

***

### getFeeRate()

> **getFeeRate**(): `number`

Defined in: node\_modules/@scrypt-inc/bitcoinjs-lib/dist/cjs/psbt.d.ts:86

#### Returns

`number`

#### Inherited from

`Psbt.getFeeRate`

***

### getInputCtx()

> **getInputCtx**(`inputIndex`): `InputContext`

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/context.ts:129](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/context.ts#L129)

Get the context of the current PSBT input in which this contract is called or spent.

#### Parameters

##### inputIndex

`number`

the index of the input in the PSBT

#### Returns

`InputContext`

the context of the current PSBT input

#### Inherited from

`Contextual.getInputCtx`

***

### getInputType()

> **getInputType**(`inputIndex`): `AllScriptType`

Defined in: node\_modules/@scrypt-inc/bitcoinjs-lib/dist/cjs/psbt.d.ts:93

#### Parameters

##### inputIndex

`number`

#### Returns

`AllScriptType`

#### Inherited from

`Psbt.getInputType`

***

### getlockTime()

> **getlockTime**(): `number`

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/context.ts:135](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/context.ts#L135)

Get the lockTime of the current PSBT.

#### Returns

`number`

lockTime of the current PSBT input

#### Inherited from

`Contextual.getlockTime`

***

### getSequence()

> **getSequence**(`inputIndex`): `number`

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/context.ts:142](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/context.ts#L142)

Get the sequence of the input by inputIndex.

#### Parameters

##### inputIndex

`number`

the index of the input in the PSBT

#### Returns

`number`

the sequence of the PSBT input

#### Inherited from

`Contextual.getSequence`

***

### getSig()

> **getSig**(`inputIndex`, `options`): [`Sig`](../type-aliases/Sig.md)

Defined in: [packages/scrypt-ts-btc/src/psbt/types.ts:88](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/psbt/types.ts#L88)

Get signature from signed psbt by inputIndex

#### Parameters

##### inputIndex

`number`

index of the input

##### options

`Omit`\<[`ToSignInput`](ToSignInput.md), `"index"`\>

options to find signatures

#### Returns

[`Sig`](../type-aliases/Sig.md)

the signature, if no signature found, return a dummy signature.

***

### getSigHashType()

> **getSigHashType**(`inputIndex`): [`SigHashType`](../enumerations/SigHashType.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/context.ts:158](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/context.ts#L158)

Get the sighash type for the current input.

#### Parameters

##### inputIndex

`number`

the index of the input in the PSBT

#### Returns

[`SigHashType`](../enumerations/SigHashType.md)

the sighash type for the current input

#### Inherited from

`Contextual.getSigHashType`

***

### getStatefulInputUtxo()

> **getStatefulInputUtxo**(`inputIndex`): `StateProvableUtxo`

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/context.ts:186](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/context.ts#L186)

Get the stateful covenant utxo of the current input

#### Parameters

##### inputIndex

`number`

the index of the input in the PSBT

#### Returns

`StateProvableUtxo`

the stateful covenant utxo of the current input

#### Inherited from

`Contextual.getStatefulInputUtxo`

***

### getTxoStateHashes()

> **getTxoStateHashes**(): [`StateHashes`](../type-aliases/StateHashes.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/context.ts:179](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/context.ts#L179)

Get the output state hashes of the current transaction

#### Returns

[`StateHashes`](../type-aliases/StateHashes.md)

the output state hashes of the current transaction

#### Inherited from

`Contextual.getTxoStateHashes`

***

### inputHasHDKey()

> **inputHasHDKey**(`inputIndex`, `root`): `boolean`

Defined in: node\_modules/@scrypt-inc/bitcoinjs-lib/dist/cjs/psbt.d.ts:95

#### Parameters

##### inputIndex

`number`

##### root

`HDSigner`

#### Returns

`boolean`

#### Inherited from

`Psbt.inputHasHDKey`

***

### inputHasPubkey()

> **inputHasPubkey**(`inputIndex`, `pubkey`): `boolean`

Defined in: node\_modules/@scrypt-inc/bitcoinjs-lib/dist/cjs/psbt.d.ts:94

#### Parameters

##### inputIndex

`number`

##### pubkey

`Uint8Array`

#### Returns

`boolean`

#### Inherited from

`Psbt.inputHasPubkey`

***

### outputHasHDKey()

> **outputHasHDKey**(`outputIndex`, `root`): `boolean`

Defined in: node\_modules/@scrypt-inc/bitcoinjs-lib/dist/cjs/psbt.d.ts:97

#### Parameters

##### outputIndex

`number`

##### root

`HDSigner`

#### Returns

`boolean`

#### Inherited from

`Psbt.outputHasHDKey`

***

### outputHasPubkey()

> **outputHasPubkey**(`outputIndex`, `pubkey`): `boolean`

Defined in: node\_modules/@scrypt-inc/bitcoinjs-lib/dist/cjs/psbt.d.ts:96

#### Parameters

##### outputIndex

`number`

##### pubkey

`Uint8Array`

#### Returns

`boolean`

#### Inherited from

`Psbt.outputHasPubkey`

***

### setInputSequence()

> **setInputSequence**(`inputIndex`, `sequence`): `this`

Defined in: node\_modules/@scrypt-inc/bitcoinjs-lib/dist/cjs/psbt.d.ts:80

#### Parameters

##### inputIndex

`number`

##### sequence

`number`

#### Returns

`this`

#### Inherited from

`Psbt.setInputSequence`

***

### setLocktime()

> **setLocktime**(`locktime`): `this`

Defined in: node\_modules/@scrypt-inc/bitcoinjs-lib/dist/cjs/psbt.d.ts:79

#### Parameters

##### locktime

`number`

#### Returns

`this`

#### Inherited from

`Psbt.setLocktime`

***

### setMaximumFeeRate()

> **setMaximumFeeRate**(`satoshiPerByte`): `void`

Defined in: node\_modules/@scrypt-inc/bitcoinjs-lib/dist/cjs/psbt.d.ts:77

#### Parameters

##### satoshiPerByte

`number`

#### Returns

`void`

#### Inherited from

`Psbt.setMaximumFeeRate`

***

### setSighashType()

> **setSighashType**(`inputIndex`, `sigHashType`): `void`

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/context.ts:151](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/context.ts#L151)

Set the sighash type for the current input.
used for `@method` decorator to set the sighash type for the current input.
sighash type is used to generate the preimage for the current input.

#### Parameters

##### inputIndex

`number`

the index of the input in the PSBT

##### sigHashType

[`SigHashType`](../enumerations/SigHashType.md)

the sighash type to set

#### Returns

`void`

#### Inherited from

`Contextual.setSighashType`

***

### setVersion()

> **setVersion**(`version`): `this`

Defined in: node\_modules/@scrypt-inc/bitcoinjs-lib/dist/cjs/psbt.d.ts:78

#### Parameters

##### version

`number`

#### Returns

`this`

#### Inherited from

`Psbt.setVersion`

***

### signAllInputs()

> **signAllInputs**(`keyPair`, `sighashTypes`?): `this`

Defined in: node\_modules/@scrypt-inc/bitcoinjs-lib/dist/cjs/psbt.d.ts:106

#### Parameters

##### keyPair

`Signer`

##### sighashTypes?

`number`[]

#### Returns

`this`

#### Inherited from

`Psbt.signAllInputs`

***

### signAllInputsAsync()

> **signAllInputsAsync**(`keyPair`, `sighashTypes`?): `Promise`\<`void`\>

Defined in: node\_modules/@scrypt-inc/bitcoinjs-lib/dist/cjs/psbt.d.ts:107

#### Parameters

##### keyPair

`Signer` | `SignerAsync`

##### sighashTypes?

`number`[]

#### Returns

`Promise`\<`void`\>

#### Inherited from

`Psbt.signAllInputsAsync`

***

### signAllInputsHD()

> **signAllInputsHD**(`hdKeyPair`, `sighashTypes`?): `this`

Defined in: node\_modules/@scrypt-inc/bitcoinjs-lib/dist/cjs/psbt.d.ts:102

#### Parameters

##### hdKeyPair

`HDSigner`

##### sighashTypes?

`number`[]

#### Returns

`this`

#### Inherited from

`Psbt.signAllInputsHD`

***

### signAllInputsHDAsync()

> **signAllInputsHDAsync**(`hdKeyPair`, `sighashTypes`?): `Promise`\<`void`\>

Defined in: node\_modules/@scrypt-inc/bitcoinjs-lib/dist/cjs/psbt.d.ts:103

#### Parameters

##### hdKeyPair

`HDSigner` | `HDSignerAsync`

##### sighashTypes?

`number`[]

#### Returns

`Promise`\<`void`\>

#### Inherited from

`Psbt.signAllInputsHDAsync`

***

### signInput()

> **signInput**(`inputIndex`, `keyPair`, `sighashTypes`?): `this`

Defined in: node\_modules/@scrypt-inc/bitcoinjs-lib/dist/cjs/psbt.d.ts:108

#### Parameters

##### inputIndex

`number`

##### keyPair

`Signer`

##### sighashTypes?

`number`[]

#### Returns

`this`

#### Inherited from

`Psbt.signInput`

***

### signInputAsync()

> **signInputAsync**(`inputIndex`, `keyPair`, `sighashTypes`?): `Promise`\<`void`\>

Defined in: node\_modules/@scrypt-inc/bitcoinjs-lib/dist/cjs/psbt.d.ts:112

#### Parameters

##### inputIndex

`number`

##### keyPair

`Signer` | `SignerAsync`

##### sighashTypes?

`number`[]

#### Returns

`Promise`\<`void`\>

#### Inherited from

`Psbt.signInputAsync`

***

### signInputHD()

> **signInputHD**(`inputIndex`, `hdKeyPair`, `sighashTypes`?): `this`

Defined in: node\_modules/@scrypt-inc/bitcoinjs-lib/dist/cjs/psbt.d.ts:104

#### Parameters

##### inputIndex

`number`

##### hdKeyPair

`HDSigner`

##### sighashTypes?

`number`[]

#### Returns

`this`

#### Inherited from

`Psbt.signInputHD`

***

### signInputHDAsync()

> **signInputHDAsync**(`inputIndex`, `hdKeyPair`, `sighashTypes`?): `Promise`\<`void`\>

Defined in: node\_modules/@scrypt-inc/bitcoinjs-lib/dist/cjs/psbt.d.ts:105

#### Parameters

##### inputIndex

`number`

##### hdKeyPair

`HDSigner` | `HDSignerAsync`

##### sighashTypes?

`number`[]

#### Returns

`Promise`\<`void`\>

#### Inherited from

`Psbt.signInputHDAsync`

***

### signTaprootInput()

> **signTaprootInput**(`inputIndex`, `keyPair`, `tapLeafHashToSign`?, `sighashTypes`?): `this`

Defined in: node\_modules/@scrypt-inc/bitcoinjs-lib/dist/cjs/psbt.d.ts:109

#### Parameters

##### inputIndex

`number`

##### keyPair

`Signer`

##### tapLeafHashToSign?

`Uint8Array`

##### sighashTypes?

`number`[]

#### Returns

`this`

#### Inherited from

`Psbt.signTaprootInput`

***

### signTaprootInputAsync()

> **signTaprootInputAsync**(`inputIndex`, `keyPair`, `tapLeafHash`?, `sighashTypes`?): `Promise`\<`void`\>

Defined in: node\_modules/@scrypt-inc/bitcoinjs-lib/dist/cjs/psbt.d.ts:113

#### Parameters

##### inputIndex

`number`

##### keyPair

`Signer` | `SignerAsync`

##### tapLeafHash?

`Uint8Array`

##### sighashTypes?

`number`[]

#### Returns

`Promise`\<`void`\>

#### Inherited from

`Psbt.signTaprootInputAsync`

***

### toBase64()

> **toBase64**(): `string`

Defined in: node\_modules/@scrypt-inc/bitcoinjs-lib/dist/cjs/psbt.d.ts:119

#### Returns

`string`

#### Inherited from

`Psbt.toBase64`

***

### toBuffer()

> **toBuffer**(): `Uint8Array`

Defined in: node\_modules/@scrypt-inc/bitcoinjs-lib/dist/cjs/psbt.d.ts:117

#### Returns

`Uint8Array`

#### Inherited from

`Psbt.toBuffer`

***

### toHex()

> **toHex**(): `string`

Defined in: node\_modules/@scrypt-inc/bitcoinjs-lib/dist/cjs/psbt.d.ts:118

#### Returns

`string`

#### Inherited from

`Psbt.toHex`

***

### updateCovenantInput()

> **updateCovenantInput**(`inputIndex`, `covenant`, `subContractCall`): `this`

Defined in: [packages/scrypt-ts-btc/src/psbt/types.ts:50](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/psbt/types.ts#L50)

Populate the witness for the covenant spending input.

#### Parameters

##### inputIndex

`number`

index of the input

##### covenant

[`Covenant`](../classes/Covenant.md)

the spent covenant

##### subContractCall

`SubContractCall`

A options used to determine how to unlock the covenant.

#### Returns

`this`

***

### updateGlobal()

> **updateGlobal**(`updateData`): `this`

Defined in: node\_modules/@scrypt-inc/bitcoinjs-lib/dist/cjs/psbt.d.ts:120

#### Parameters

##### updateData

`PsbtGlobalUpdate`

#### Returns

`this`

#### Inherited from

`Psbt.updateGlobal`

***

### updateInput()

> **updateInput**(`inputIndex`, `updateData`): `this`

Defined in: node\_modules/@scrypt-inc/bitcoinjs-lib/dist/cjs/psbt.d.ts:121

#### Parameters

##### inputIndex

`number`

##### updateData

`PsbtInputUpdate`

#### Returns

`this`

#### Inherited from

`Psbt.updateInput`

***

### updateOutput()

> **updateOutput**(`outputIndex`, `updateData`): `this`

Defined in: node\_modules/@scrypt-inc/bitcoinjs-lib/dist/cjs/psbt.d.ts:122

#### Parameters

##### outputIndex

`number`

##### updateData

`PsbtOutputUpdate`

#### Returns

`this`

#### Inherited from

`Psbt.updateOutput`

***

### validateSignaturesOfAllInputs()

> **validateSignaturesOfAllInputs**(`validator`): `boolean`

Defined in: node\_modules/@scrypt-inc/bitcoinjs-lib/dist/cjs/psbt.d.ts:98

#### Parameters

##### validator

`ValidateSigFunction`

#### Returns

`boolean`

#### Inherited from

`Psbt.validateSignaturesOfAllInputs`

***

### validateSignaturesOfInput()

> **validateSignaturesOfInput**(`inputIndex`, `validator`, `pubkey`?): `boolean`

Defined in: node\_modules/@scrypt-inc/bitcoinjs-lib/dist/cjs/psbt.d.ts:99

#### Parameters

##### inputIndex

`number`

##### validator

`ValidateSigFunction`

##### pubkey?

`Uint8Array`

#### Returns

`boolean`

#### Inherited from

`Psbt.validateSignaturesOfInput`
