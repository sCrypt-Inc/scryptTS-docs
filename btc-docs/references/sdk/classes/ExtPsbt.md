[**bitcoinjs-lib v0.2.9-beta.16**](../README.md)

***

[bitcoinjs-lib](../README.md) / ExtPsbt

# Class: ExtPsbt

Defined in: [packages/scrypt-ts-btc/src/psbt/extPsbt.ts:91](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/psbt/extPsbt.ts#L91)

Extended [Psbt][https://docs.scrypt.io/references/bitcoinjs-lib/classes/Psbt](https://docs.scrypt.io/references/bitcoinjs-lib/classes/Psbt) class.
Used to construct transactions to unlock smart contracts.

## Extends

- `Psbt`

## Implements

- [`IExtPsbt`](../interfaces/IExtPsbt.md)

## Constructors

### new ExtPsbt()

> **new ExtPsbt**(`opts`, `data`?): [`ExtPsbt`](ExtPsbt.md)

Defined in: [packages/scrypt-ts-btc/src/psbt/extPsbt.ts:92](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/psbt/extPsbt.ts#L92)

#### Parameters

##### opts

`PsbtOptsOptional` = `{}`

##### data?

`Psbt`

#### Returns

[`ExtPsbt`](ExtPsbt.md)

#### Overrides

`Psbt.constructor`

## Properties

### data

> `readonly` **data**: `Psbt`

Defined in: node\_modules/@scrypt-inc/bitcoinjs-lib/dist/cjs/psbt.d.ts:61

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`data`](../interfaces/IExtPsbt.md#data)

#### Inherited from

`Psbt.data`

## Accessors

### accessedInputStateProofs

#### Get Signature

> **get** **accessedInputStateProofs**(): `boolean`

Defined in: [packages/scrypt-ts-btc/src/psbt/extPsbt.ts:164](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/psbt/extPsbt.ts#L164)

##### Returns

`boolean`

***

### inputAmount

#### Get Signature

> **get** **inputAmount**(): `number`

Defined in: [packages/scrypt-ts-btc/src/psbt/extPsbt.ts:385](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/psbt/extPsbt.ts#L385)

##### Returns

`number`

***

### inputCount

#### Get Signature

> **get** **inputCount**(): `number`

Defined in: node\_modules/@scrypt-inc/bitcoinjs-lib/dist/cjs/psbt.d.ts:68

##### Returns

`number`

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`inputCount`](../interfaces/IExtPsbt.md#inputcount)

#### Inherited from

`Psbt.inputCount`

***

### isFinalized

#### Get Signature

> **get** **isFinalized**(): `boolean`

Defined in: [packages/scrypt-ts-btc/src/psbt/extPsbt.ts:539](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/psbt/extPsbt.ts#L539)

Whether the PSBT is finalized.

##### Returns

`boolean`

Whether the PSBT is finalized.

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`isFinalized`](../interfaces/IExtPsbt.md#isfinalized)

***

### isFinalizing

#### Get Signature

> **get** **isFinalizing**(): `boolean`

Defined in: [packages/scrypt-ts-btc/src/psbt/extPsbt.ts:481](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/psbt/extPsbt.ts#L481)

Whether the PSBT starts finalizing.

##### Returns

`boolean`

Whether the PSBT starts finalizing.

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`isFinalizing`](../interfaces/IExtPsbt.md#isfinalizing)

***

### isSealed

#### Get Signature

> **get** **isSealed**(): `boolean`

Defined in: [packages/scrypt-ts-btc/src/psbt/extPsbt.ts:485](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/psbt/extPsbt.ts#L485)

##### Returns

`boolean`

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

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`locktime`](../interfaces/IExtPsbt.md#locktime)

#### Inherited from

`Psbt.locktime`

***

### network

#### Get Signature

> **get** **network**(): `Network`

Defined in: [packages/scrypt-ts-btc/src/psbt/extPsbt.ts:458](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/psbt/extPsbt.ts#L458)

##### Returns

`Network`

***

### outputAmount

#### Get Signature

> **get** **outputAmount**(): `number`

Defined in: [packages/scrypt-ts-btc/src/psbt/extPsbt.ts:389](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/psbt/extPsbt.ts#L389)

##### Returns

`number`

***

### stateHashRoot

#### Get Signature

> **get** **stateHashRoot**(): [`ByteString`](../type-aliases/ByteString.md)

Defined in: [packages/scrypt-ts-btc/src/psbt/extPsbt.ts:152](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/psbt/extPsbt.ts#L152)

##### Returns

[`ByteString`](../type-aliases/ByteString.md)

***

### stateHashRootScript

#### Get Signature

> **get** **stateHashRootScript**(): `Uint8Array`

Defined in: [packages/scrypt-ts-btc/src/psbt/extPsbt.ts:160](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/psbt/extPsbt.ts#L160)

##### Returns

`Uint8Array`

***

### txInputs

#### Get Signature

> **get** **txInputs**(): `PsbtTxInput`[]

Defined in: node\_modules/@scrypt-inc/bitcoinjs-lib/dist/cjs/psbt.d.ts:73

##### Returns

`PsbtTxInput`[]

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`txInputs`](../interfaces/IExtPsbt.md#txinputs)

#### Inherited from

`Psbt.txInputs`

***

### txOutputs

#### Get Signature

> **get** **txOutputs**(): `PsbtTxOutput`[]

Defined in: node\_modules/@scrypt-inc/bitcoinjs-lib/dist/cjs/psbt.d.ts:74

##### Returns

`PsbtTxOutput`[]

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`txOutputs`](../interfaces/IExtPsbt.md#txoutputs)

#### Inherited from

`Psbt.txOutputs`

***

### unsignedTx

#### Get Signature

> **get** **unsignedTx**(): `Transaction`

Defined in: [packages/scrypt-ts-btc/src/psbt/extPsbt.ts:452](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/psbt/extPsbt.ts#L452)

The unsigned transaction when the PSBT is not finalized.
note:

##### Returns

`Transaction`

The unsigned transaction when the PSBT is not finalized.
note:

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`unsignedTx`](../interfaces/IExtPsbt.md#unsignedtx)

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

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`version`](../interfaces/IExtPsbt.md#version)

#### Inherited from

`Psbt.version`

## Methods

### addCovenantInput()

> **addCovenantInput**(`covenant`, `subContractAlias`?): `this`

Defined in: [packages/scrypt-ts-btc/src/psbt/extPsbt.ts:264](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/psbt/extPsbt.ts#L264)

Add an input to spend the covenant.

#### Parameters

##### covenant

[`Covenant`](Covenant.md)

##### subContractAlias?

`string`

#### Returns

`this`

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`addCovenantInput`](../interfaces/IExtPsbt.md#addcovenantinput)

***

### addCovenantOutput()

> **addCovenantOutput**(`covenant`, `satoshis`): `this`

Defined in: [packages/scrypt-ts-btc/src/psbt/extPsbt.ts:349](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/psbt/extPsbt.ts#L349)

Add an output to create new covenant.

#### Parameters

##### covenant

[`Covenant`](Covenant.md)

a new covenant

##### satoshis

`number`

the output includes the amount of satoshis.

#### Returns

`this`

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`addCovenantOutput`](../interfaces/IExtPsbt.md#addcovenantoutput)

***

### addInput()

> **addInput**(`inputData`): `this`

Defined in: [packages/scrypt-ts-btc/src/psbt/extPsbt.ts:182](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/psbt/extPsbt.ts#L182)

#### Parameters

##### inputData

`PsbtInputExtended`

#### Returns

`this`

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`addInput`](../interfaces/IExtPsbt.md#addinput)

#### Overrides

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

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`addInputs`](../interfaces/IExtPsbt.md#addinputs)

#### Inherited from

`Psbt.addInputs`

***

### addOutput()

> **addOutput**(`outputData`): `this`

Defined in: [packages/scrypt-ts-btc/src/psbt/extPsbt.ts:242](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/psbt/extPsbt.ts#L242)

#### Parameters

##### outputData

`PsbtOutputExtended`

#### Returns

`this`

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`addOutput`](../interfaces/IExtPsbt.md#addoutput)

#### Overrides

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

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`addOutputs`](../interfaces/IExtPsbt.md#addoutputs)

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

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`addUnknownKeyValToGlobal`](../interfaces/IExtPsbt.md#addunknownkeyvaltoglobal)

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

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`addUnknownKeyValToInput`](../interfaces/IExtPsbt.md#addunknownkeyvaltoinput)

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

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`addUnknownKeyValToOutput`](../interfaces/IExtPsbt.md#addunknownkeyvaltooutput)

#### Inherited from

`Psbt.addUnknownKeyValToOutput`

***

### change()

> **change**(`toAddr`, `feeRate`): `this`

Defined in: [packages/scrypt-ts-btc/src/psbt/extPsbt.ts:393](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/psbt/extPsbt.ts#L393)

Add a change output to the transaction if neccesarry.

#### Parameters

##### toAddr

`string`

##### feeRate

`number`

the fee rate in satoshi per byte

#### Returns

`this`

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`change`](../interfaces/IExtPsbt.md#change)

***

### clearFinalizedInput()

> **clearFinalizedInput**(`inputIndex`): `this`

Defined in: node\_modules/@scrypt-inc/bitcoinjs-lib/dist/cjs/psbt.d.ts:126

#### Parameters

##### inputIndex

`number`

#### Returns

`this`

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`clearFinalizedInput`](../interfaces/IExtPsbt.md#clearfinalizedinput)

#### Inherited from

`Psbt.clearFinalizedInput`

***

### clone()

> **clone**(): `Psbt`

Defined in: node\_modules/@scrypt-inc/bitcoinjs-lib/dist/cjs/psbt.d.ts:76

#### Returns

`Psbt`

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`clone`](../interfaces/IExtPsbt.md#clone)

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

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`combine`](../interfaces/IExtPsbt.md#combine)

#### Inherited from

`Psbt.combine`

***

### estimateFee()

> **estimateFee**(`feeRate`): `number`

Defined in: [packages/scrypt-ts-btc/src/psbt/extPsbt.ts:468](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/psbt/extPsbt.ts#L468)

Estimate the fee of the transaction.

#### Parameters

##### feeRate

`number`

the fee rate in satoshi per byte

#### Returns

`number`

the estimated fee in satoshis

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`estimateFee`](../interfaces/IExtPsbt.md#estimatefee)

***

### estimateVSize()

> **estimateVSize**(): `number`

Defined in: [packages/scrypt-ts-btc/src/psbt/extPsbt.ts:463](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/psbt/extPsbt.ts#L463)

Estimate the virtual size of the transaction.

#### Returns

`number`

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`estimateVSize`](../interfaces/IExtPsbt.md#estimatevsize)

***

### extractTransaction()

> **extractTransaction**(`disableFeeCheck`?): `Transaction`

Defined in: node\_modules/@scrypt-inc/bitcoinjs-lib/dist/cjs/psbt.d.ts:85

#### Parameters

##### disableFeeCheck?

`boolean`

#### Returns

`Transaction`

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`extractTransaction`](../interfaces/IExtPsbt.md#extracttransaction)

#### Inherited from

`Psbt.extractTransaction`

***

### finalizeAllInputs()

> **finalizeAllInputs**(): `this`

Defined in: [packages/scrypt-ts-btc/src/psbt/extPsbt.ts:489](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/psbt/extPsbt.ts#L489)

#### Returns

`this`

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`finalizeAllInputs`](../interfaces/IExtPsbt.md#finalizeallinputs)

#### Overrides

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

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`finalizeInput`](../interfaces/IExtPsbt.md#finalizeinput)

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

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`finalizeTaprootInput`](../interfaces/IExtPsbt.md#finalizetaprootinput)

#### Inherited from

`Psbt.finalizeTaprootInput`

***

### getChangeInfo()

> **getChangeInfo**(): [`TxOut`](../type-aliases/TxOut.md)

Defined in: [packages/scrypt-ts-btc/src/psbt/extPsbt.ts:432](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/psbt/extPsbt.ts#L432)

Get the change output information.

#### Returns

[`TxOut`](../type-aliases/TxOut.md)

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`getChangeInfo`](../interfaces/IExtPsbt.md#getchangeinfo)

***

### getChangeUTXO()

> **getChangeUTXO**(): `StateProvableUtxo`

Defined in: [packages/scrypt-ts-btc/src/psbt/extPsbt.ts:709](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/psbt/extPsbt.ts#L709)

#### Returns

`StateProvableUtxo`

***

### getFee()

> **getFee**(): `bigint`

Defined in: node\_modules/@scrypt-inc/bitcoinjs-lib/dist/cjs/psbt.d.ts:87

#### Returns

`bigint`

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`getFee`](../interfaces/IExtPsbt.md#getfee)

#### Inherited from

`Psbt.getFee`

***

### getFeeRate()

> **getFeeRate**(): `number`

Defined in: node\_modules/@scrypt-inc/bitcoinjs-lib/dist/cjs/psbt.d.ts:86

#### Returns

`number`

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`getFeeRate`](../interfaces/IExtPsbt.md#getfeerate)

#### Inherited from

`Psbt.getFeeRate`

***

### getInputCovernant()

> **getInputCovernant**(`inputIndex`): [`Covenant`](Covenant.md)

Defined in: [packages/scrypt-ts-btc/src/psbt/extPsbt.ts:701](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/psbt/extPsbt.ts#L701)

#### Parameters

##### inputIndex

`number`

#### Returns

[`Covenant`](Covenant.md)

***

### getInputCtx()

> **getInputCtx**(`inputIndex`): `InputContext`

Defined in: [packages/scrypt-ts-btc/src/psbt/extPsbt.ts:144](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/psbt/extPsbt.ts#L144)

Get the context of the current PSBT input in which this contract is called or spent.

#### Parameters

##### inputIndex

`number`

the index of the input in the PSBT

#### Returns

`InputContext`

the context of the current PSBT input

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`getInputCtx`](../interfaces/IExtPsbt.md#getinputctx)

***

### getInputType()

> **getInputType**(`inputIndex`): `AllScriptType`

Defined in: node\_modules/@scrypt-inc/bitcoinjs-lib/dist/cjs/psbt.d.ts:93

#### Parameters

##### inputIndex

`number`

#### Returns

`AllScriptType`

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`getInputType`](../interfaces/IExtPsbt.md#getinputtype)

#### Inherited from

`Psbt.getInputType`

***

### getlockTime()

> **getlockTime**(): `number`

Defined in: [packages/scrypt-ts-btc/src/psbt/extPsbt.ts:100](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/psbt/extPsbt.ts#L100)

Get the lockTime of the current PSBT.

#### Returns

`number`

lockTime of the current PSBT input

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`getlockTime`](../interfaces/IExtPsbt.md#getlocktime)

***

### getOutputSatoshisList()

> **getOutputSatoshisList**(): `string`[]

Defined in: [packages/scrypt-ts-btc/src/psbt/extPsbt.ts:748](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/psbt/extPsbt.ts#L748)

#### Returns

`string`[]

***

### getSequence()

> **getSequence**(`inputIndex`): `number`

Defined in: [packages/scrypt-ts-btc/src/psbt/extPsbt.ts:97](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/psbt/extPsbt.ts#L97)

Get the sequence of the input by inputIndex.

#### Parameters

##### inputIndex

`number`

the index of the input in the PSBT

#### Returns

`number`

the sequence of the PSBT input

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`getSequence`](../interfaces/IExtPsbt.md#getsequence)

***

### getSig()

> **getSig**(`inputIndex`, `options`): [`Sig`](../type-aliases/Sig.md)

Defined in: [packages/scrypt-ts-btc/src/psbt/extPsbt.ts:650](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/psbt/extPsbt.ts#L650)

Get signature from signed psbt by inputIndex

#### Parameters

##### inputIndex

`number`

index of the input

##### options

`Omit`\<[`ToSignInput`](../interfaces/ToSignInput.md), `"index"`\>

options to find signatures

#### Returns

[`Sig`](../type-aliases/Sig.md)

the signature, if no signature found, return a dummy signature.

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`getSig`](../interfaces/IExtPsbt.md#getsig)

***

### getSigHashType()

> **getSigHashType**(`inputIndex`): [`SigHashType`](../enumerations/SigHashType.md)

Defined in: [packages/scrypt-ts-btc/src/psbt/extPsbt.ts:140](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/psbt/extPsbt.ts#L140)

Get the sighash type for the current input.

#### Parameters

##### inputIndex

`number`

the index of the input in the PSBT

#### Returns

[`SigHashType`](../enumerations/SigHashType.md)

the sighash type for the current input

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`getSigHashType`](../interfaces/IExtPsbt.md#getsighashtype)

***

### getStatefulCovenantUtxo()

> **getStatefulCovenantUtxo**(`outputIndex`): `StateProvableUtxo`

Defined in: [packages/scrypt-ts-btc/src/psbt/extPsbt.ts:735](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/psbt/extPsbt.ts#L735)

#### Parameters

##### outputIndex

`number`

#### Returns

`StateProvableUtxo`

***

### getStatefulInputUtxo()

> **getStatefulInputUtxo**(`inputIndex`): `StateProvableUtxo`

Defined in: [packages/scrypt-ts-btc/src/psbt/extPsbt.ts:705](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/psbt/extPsbt.ts#L705)

Get the stateful covenant utxo of the current input

#### Parameters

##### inputIndex

`number`

the index of the input in the PSBT

#### Returns

`StateProvableUtxo`

the stateful covenant utxo of the current input

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`getStatefulInputUtxo`](../interfaces/IExtPsbt.md#getstatefulinpututxo)

***

### getTxoStateHashes()

> **getTxoStateHashes**(): [`StateHashes`](../type-aliases/StateHashes.md)

Defined in: [packages/scrypt-ts-btc/src/psbt/extPsbt.ts:148](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/psbt/extPsbt.ts#L148)

Get the output state hashes of the current transaction

#### Returns

[`StateHashes`](../type-aliases/StateHashes.md)

the output state hashes of the current transaction

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`getTxoStateHashes`](../interfaces/IExtPsbt.md#gettxostatehashes)

***

### getUtxo()

> **getUtxo**(`outputIndex`): `StateProvableUtxo`

Defined in: [packages/scrypt-ts-btc/src/psbt/extPsbt.ts:721](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/psbt/extPsbt.ts#L721)

#### Parameters

##### outputIndex

`number`

#### Returns

`StateProvableUtxo`

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

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`inputHasHDKey`](../interfaces/IExtPsbt.md#inputhashdkey)

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

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`inputHasPubkey`](../interfaces/IExtPsbt.md#inputhaspubkey)

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

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`outputHasHDKey`](../interfaces/IExtPsbt.md#outputhashdkey)

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

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`outputHasPubkey`](../interfaces/IExtPsbt.md#outputhaspubkey)

#### Inherited from

`Psbt.outputHasPubkey`

***

### psbtOptions()

> **psbtOptions**(`autoFinalized`): [`SignOptions`](../interfaces/SignOptions.md)

Defined in: [packages/scrypt-ts-btc/src/psbt/extPsbt.ts:632](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/psbt/extPsbt.ts#L632)

#### Parameters

##### autoFinalized

`boolean` = `false`

#### Returns

[`SignOptions`](../interfaces/SignOptions.md)

***

### seal()

> **seal**(): `this`

Defined in: [packages/scrypt-ts-btc/src/psbt/extPsbt.ts:762](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/psbt/extPsbt.ts#L762)

#### Returns

`this`

***

### setInputSequence()

> **setInputSequence**(`inputIndex`, `sequence`): `this`

Defined in: [packages/scrypt-ts-btc/src/psbt/extPsbt.ts:259](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/psbt/extPsbt.ts#L259)

#### Parameters

##### inputIndex

`number`

##### sequence

`number`

#### Returns

`this`

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`setInputSequence`](../interfaces/IExtPsbt.md#setinputsequence)

#### Overrides

`Psbt.setInputSequence`

***

### setLocktime()

> **setLocktime**(`locktime`): `this`

Defined in: [packages/scrypt-ts-btc/src/psbt/extPsbt.ts:254](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/psbt/extPsbt.ts#L254)

#### Parameters

##### locktime

`number`

#### Returns

`this`

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`setLocktime`](../interfaces/IExtPsbt.md#setlocktime)

#### Overrides

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

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`setMaximumFeeRate`](../interfaces/IExtPsbt.md#setmaximumfeerate)

#### Inherited from

`Psbt.setMaximumFeeRate`

***

### setSighashType()

> **setSighashType**(`inputIndex`, `sigHashType`): `void`

Defined in: [packages/scrypt-ts-btc/src/psbt/extPsbt.ts:128](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/psbt/extPsbt.ts#L128)

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

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`setSighashType`](../interfaces/IExtPsbt.md#setsighashtype)

***

### setVersion()

> **setVersion**(`version`): `this`

Defined in: [packages/scrypt-ts-btc/src/psbt/extPsbt.ts:249](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/psbt/extPsbt.ts#L249)

#### Parameters

##### version

`number`

#### Returns

`this`

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`setVersion`](../interfaces/IExtPsbt.md#setversion)

#### Overrides

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

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`signAllInputs`](../interfaces/IExtPsbt.md#signallinputs)

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

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`signAllInputsAsync`](../interfaces/IExtPsbt.md#signallinputsasync)

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

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`signAllInputsHD`](../interfaces/IExtPsbt.md#signallinputshd)

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

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`signAllInputsHDAsync`](../interfaces/IExtPsbt.md#signallinputshdasync)

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

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`signInput`](../interfaces/IExtPsbt.md#signinput)

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

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`signInputAsync`](../interfaces/IExtPsbt.md#signinputasync)

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

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`signInputHD`](../interfaces/IExtPsbt.md#signinputhd)

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

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`signInputHDAsync`](../interfaces/IExtPsbt.md#signinputhdasync)

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

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`signTaprootInput`](../interfaces/IExtPsbt.md#signtaprootinput)

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

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`signTaprootInputAsync`](../interfaces/IExtPsbt.md#signtaprootinputasync)

#### Inherited from

`Psbt.signTaprootInputAsync`

***

### spendUTXO()

> **spendUTXO**(`utxos`): `this`

Defined in: [packages/scrypt-ts-btc/src/psbt/extPsbt.ts:210](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/psbt/extPsbt.ts#L210)

Add input(s) for current psbt to spend the utxos.

#### Parameters

##### utxos

the utxos to spend

`ExtUtxo` | `ExtUtxo`[]

#### Returns

`this`

this

***

### toBase64()

> **toBase64**(): `string`

Defined in: node\_modules/@scrypt-inc/bitcoinjs-lib/dist/cjs/psbt.d.ts:119

#### Returns

`string`

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`toBase64`](../interfaces/IExtPsbt.md#tobase64)

#### Inherited from

`Psbt.toBase64`

***

### toBuffer()

> **toBuffer**(): `Uint8Array`

Defined in: node\_modules/@scrypt-inc/bitcoinjs-lib/dist/cjs/psbt.d.ts:117

#### Returns

`Uint8Array`

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`toBuffer`](../interfaces/IExtPsbt.md#tobuffer)

#### Inherited from

`Psbt.toBuffer`

***

### toHex()

> **toHex**(): `string`

Defined in: node\_modules/@scrypt-inc/bitcoinjs-lib/dist/cjs/psbt.d.ts:118

#### Returns

`string`

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`toHex`](../interfaces/IExtPsbt.md#tohex)

#### Inherited from

`Psbt.toHex`

***

### txHashPreimage()

> **txHashPreimage**(): `string`

Defined in: [packages/scrypt-ts-btc/src/psbt/extPsbt.ts:744](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/psbt/extPsbt.ts#L744)

#### Returns

`string`

***

### updateCovenantInput()

> **updateCovenantInput**(`inputIndex`, `covenant`, `subContractCall`): `this`

Defined in: [packages/scrypt-ts-btc/src/psbt/extPsbt.ts:309](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/psbt/extPsbt.ts#L309)

Populate the witness for the covenant spending input.

#### Parameters

##### inputIndex

`number`

index of the input

##### covenant

[`Covenant`](Covenant.md)

the spent covenant

##### subContractCall

`SubContractCall`

A options used to determine how to unlock the covenant.

#### Returns

`this`

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`updateCovenantInput`](../interfaces/IExtPsbt.md#updatecovenantinput)

***

### updateGlobal()

> **updateGlobal**(`updateData`): `this`

Defined in: node\_modules/@scrypt-inc/bitcoinjs-lib/dist/cjs/psbt.d.ts:120

#### Parameters

##### updateData

`PsbtGlobalUpdate`

#### Returns

`this`

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`updateGlobal`](../interfaces/IExtPsbt.md#updateglobal)

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

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`updateInput`](../interfaces/IExtPsbt.md#updateinput)

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

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`updateOutput`](../interfaces/IExtPsbt.md#updateoutput)

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

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`validateSignaturesOfAllInputs`](../interfaces/IExtPsbt.md#validatesignaturesofallinputs)

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

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`validateSignaturesOfInput`](../interfaces/IExtPsbt.md#validatesignaturesofinput)

#### Inherited from

`Psbt.validateSignaturesOfInput`

***

### create()

> `static` **create**(`opts`, `data`?): [`ExtPsbt`](ExtPsbt.md)

Defined in: [packages/scrypt-ts-btc/src/psbt/extPsbt.ts:104](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/psbt/extPsbt.ts#L104)

#### Parameters

##### opts

`ExtPsbtOpts`

##### data?

`Psbt`

#### Returns

[`ExtPsbt`](ExtPsbt.md)

***

### fromBase64()

> `static` **fromBase64**(`data`, `opts`): [`ExtPsbt`](ExtPsbt.md)

Defined in: [packages/scrypt-ts-btc/src/psbt/extPsbt.ts:109](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/psbt/extPsbt.ts#L109)

#### Parameters

##### data

`string`

##### opts

`PsbtOptsOptional` = `{}`

#### Returns

[`ExtPsbt`](ExtPsbt.md)

#### Overrides

`Psbt.fromBase64`

***

### fromBuffer()

> `static` **fromBuffer**(`buffer`, `opts`): [`ExtPsbt`](ExtPsbt.md)

Defined in: [packages/scrypt-ts-btc/src/psbt/extPsbt.ts:119](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/psbt/extPsbt.ts#L119)

#### Parameters

##### buffer

`Uint8Array`

##### opts

`PsbtOptsOptional` = `{}`

#### Returns

[`ExtPsbt`](ExtPsbt.md)

#### Overrides

`Psbt.fromBuffer`

***

### fromHex()

> `static` **fromHex**(`data`, `opts`): [`ExtPsbt`](ExtPsbt.md)

Defined in: [packages/scrypt-ts-btc/src/psbt/extPsbt.ts:114](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/psbt/extPsbt.ts#L114)

#### Parameters

##### data

`string`

##### opts

`PsbtOptsOptional` = `{}`

#### Returns

[`ExtPsbt`](ExtPsbt.md)

#### Overrides

`Psbt.fromHex`
