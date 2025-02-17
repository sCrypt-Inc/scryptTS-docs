[**bitcoinjs-lib v1.0.7**](../README.md)

***

[bitcoinjs-lib](../README.md) / Psbt

# Class: Psbt

Defined in: [ts\_src/psbt.ts:131](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/psbt.ts#L131)

Psbt class can parse and generate a PSBT binary based off of the BIP174.
There are 6 roles that this class fulfills. (Explained in BIP174)

Creator: This can be done with `new Psbt()`

Updater: This can be done with `psbt.addInput(input)`, `psbt.addInputs(inputs)`,
  `psbt.addOutput(output)`, `psbt.addOutputs(outputs)` when you are looking to
  add new inputs and outputs to the PSBT, and `psbt.updateGlobal(itemObject)`,
  `psbt.updateInput(itemObject)`, `psbt.updateOutput(itemObject)`
  addInput requires hash: Buffer | string; and index: number; as attributes
  and can also include any attributes that are used in updateInput method.
  addOutput requires script: Buffer; and value: number; and likewise can include
  data for updateOutput.
  For a list of what attributes should be what types. Check the bip174 library.
  Also, check the integration tests for some examples of usage.

Signer: There are a few methods. signAllInputs and signAllInputsAsync, which will search all input
  information for your pubkey or pubkeyhash, and only sign inputs where it finds
  your info. Or you can explicitly sign a specific input with signInput and
  signInputAsync. For the async methods you can create a SignerAsync object
  and use something like a hardware wallet to sign with. (You must implement this)

Combiner: psbts can be combined easily with `psbt.combine(psbt2, psbt3, psbt4 ...)`
  the psbt calling combine will always have precedence when a conflict occurs.
  Combine checks if the internal bitcoin transaction is the same, so be sure that
  all sequences, version, locktime, etc. are the same before combining.

Input Finalizer: This role is fairly important. Not only does it need to construct
  the input scriptSigs and witnesses, but it SHOULD verify the signatures etc.
  Before running `psbt.finalizeAllInputs()` please run `psbt.validateSignaturesOfAllInputs()`
  Running any finalize method will delete any data in the input(s) that are no longer
  needed due to the finalized scripts containing the information.

Transaction Extractor: This role will perform some checks before returning a
  Transaction object. Such as fee rate not being larger than maximumFeeRate etc.

## Constructors

### new Psbt()

> **new Psbt**(`opts`, `data`): [`Psbt`](Psbt.md)

Defined in: [ts\_src/psbt.ts:152](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/psbt.ts#L152)

#### Parameters

##### opts

[`PsbtOptsOptional`](../interfaces/PsbtOptsOptional.md) = `{}`

##### data

`Psbt` = `...`

#### Returns

[`Psbt`](Psbt.md)

## Properties

### data

> `readonly` **data**: `Psbt`

Defined in: [ts\_src/psbt.ts:154](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/psbt.ts#L154)

## Accessors

### inputCount

#### Get Signature

> **get** **inputCount**(): `number`

Defined in: [ts\_src/psbt.ts:190](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/psbt.ts#L190)

##### Returns

`number`

***

### locktime

#### Get Signature

> **get** **locktime**(): `number`

Defined in: [ts\_src/psbt.ts:202](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/psbt.ts#L202)

##### Returns

`number`

#### Set Signature

> **set** **locktime**(`locktime`): `void`

Defined in: [ts\_src/psbt.ts:206](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/psbt.ts#L206)

##### Parameters

###### locktime

`number`

##### Returns

`void`

***

### txInputs

#### Get Signature

> **get** **txInputs**(): [`PsbtTxInput`](../interfaces/PsbtTxInput.md)[]

Defined in: [ts\_src/psbt.ts:210](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/psbt.ts#L210)

##### Returns

[`PsbtTxInput`](../interfaces/PsbtTxInput.md)[]

***

### txOutputs

#### Get Signature

> **get** **txOutputs**(): [`PsbtTxOutput`](../interfaces/PsbtTxOutput.md)[]

Defined in: [ts\_src/psbt.ts:218](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/psbt.ts#L218)

##### Returns

[`PsbtTxOutput`](../interfaces/PsbtTxOutput.md)[]

***

### version

#### Get Signature

> **get** **version**(): `number`

Defined in: [ts\_src/psbt.ts:194](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/psbt.ts#L194)

##### Returns

`number`

#### Set Signature

> **set** **version**(`version`): `void`

Defined in: [ts\_src/psbt.ts:198](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/psbt.ts#L198)

##### Parameters

###### version

`number`

##### Returns

`void`

## Methods

### addInput()

> **addInput**(`inputData`): `this`

Defined in: [ts\_src/psbt.ts:284](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/psbt.ts#L284)

#### Parameters

##### inputData

[`PsbtInputExtended`](../namespaces/psbt/interfaces/PsbtInputExtended.md)

#### Returns

`this`

***

### addInputs()

> **addInputs**(`inputDatas`): `this`

Defined in: [ts\_src/psbt.ts:279](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/psbt.ts#L279)

#### Parameters

##### inputDatas

[`PsbtInputExtended`](../namespaces/psbt/interfaces/PsbtInputExtended.md)[]

#### Returns

`this`

***

### addOutput()

> **addOutput**(`outputData`): `this`

Defined in: [ts\_src/psbt.ts:320](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/psbt.ts#L320)

#### Parameters

##### outputData

[`PsbtOutputExtended`](../namespaces/psbt/type-aliases/PsbtOutputExtended.md)

#### Returns

`this`

***

### addOutputs()

> **addOutputs**(`outputDatas`): `this`

Defined in: [ts\_src/psbt.ts:315](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/psbt.ts#L315)

#### Parameters

##### outputDatas

[`PsbtOutputExtended`](../namespaces/psbt/type-aliases/PsbtOutputExtended.md)[]

#### Returns

`this`

***

### addUnknownKeyValToGlobal()

> **addUnknownKeyValToGlobal**(`keyVal`): `this`

Defined in: [ts\_src/psbt.ts:1125](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/psbt.ts#L1125)

#### Parameters

##### keyVal

`KeyValue`

#### Returns

`this`

***

### addUnknownKeyValToInput()

> **addUnknownKeyValToInput**(`inputIndex`, `keyVal`): `this`

Defined in: [ts\_src/psbt.ts:1130](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/psbt.ts#L1130)

#### Parameters

##### inputIndex

`number`

##### keyVal

`KeyValue`

#### Returns

`this`

***

### addUnknownKeyValToOutput()

> **addUnknownKeyValToOutput**(`outputIndex`, `keyVal`): `this`

Defined in: [ts\_src/psbt.ts:1135](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/psbt.ts#L1135)

#### Parameters

##### outputIndex

`number`

##### keyVal

`KeyValue`

#### Returns

`this`

***

### clearFinalizedInput()

> **clearFinalizedInput**(`inputIndex`): `this`

Defined in: [ts\_src/psbt.ts:1140](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/psbt.ts#L1140)

#### Parameters

##### inputIndex

`number`

#### Returns

`this`

***

### clone()

> **clone**(): [`Psbt`](Psbt.md)

Defined in: [ts\_src/psbt.ts:237](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/psbt.ts#L237)

#### Returns

[`Psbt`](Psbt.md)

***

### combine()

> **combine**(...`those`): `this`

Defined in: [ts\_src/psbt.ts:232](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/psbt.ts#L232)

#### Parameters

##### those

...[`Psbt`](Psbt.md)[]

#### Returns

`this`

***

### extractTransaction()

> **extractTransaction**(`disableFeeCheck`?): [`Transaction`](Transaction.md)

Defined in: [ts\_src/psbt.ts:350](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/psbt.ts#L350)

#### Parameters

##### disableFeeCheck?

`boolean`

#### Returns

[`Transaction`](Transaction.md)

***

### finalizeAllInputs()

> **finalizeAllInputs**(): `this`

Defined in: [ts\_src/psbt.ts:380](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/psbt.ts#L380)

#### Returns

`this`

***

### finalizeInput()

> **finalizeInput**(`inputIndex`, `finalScriptsFunc`?): `this`

Defined in: [ts\_src/psbt.ts:386](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/psbt.ts#L386)

#### Parameters

##### inputIndex

`number`

##### finalScriptsFunc?

`FinalScriptsFunc` | `FinalTaprootScriptsFunc`

#### Returns

`this`

***

### finalizeTaprootInput()

> **finalizeTaprootInput**(`inputIndex`, `tapLeafHashToFinalize`?, `finalScriptsFunc`?): `this`

Defined in: [ts\_src/psbt.ts:405](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/psbt.ts#L405)

#### Parameters

##### inputIndex

`number`

##### tapLeafHashToFinalize?

`Uint8Array`

##### finalScriptsFunc?

`FinalTaprootScriptsFunc` = `tapScriptFinalizer`

#### Returns

`this`

***

### getFee()

> **getFee**(): `bigint`

Defined in: [ts\_src/psbt.ts:371](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/psbt.ts#L371)

#### Returns

`bigint`

***

### getFeeRate()

> **getFeeRate**(): `number`

Defined in: [ts\_src/psbt.ts:362](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/psbt.ts#L362)

#### Returns

`number`

***

### getInputType()

> **getInputType**(`inputIndex`): `AllScriptType`

Defined in: [ts\_src/psbt.ts:487](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/psbt.ts#L487)

#### Parameters

##### inputIndex

`number`

#### Returns

`AllScriptType`

***

### inputHasHDKey()

> **inputHasHDKey**(`inputIndex`, `root`): `boolean`

Defined in: [ts\_src/psbt.ts:508](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/psbt.ts#L508)

#### Parameters

##### inputIndex

`number`

##### root

[`HDSigner`](../interfaces/HDSigner.md)

#### Returns

`boolean`

***

### inputHasPubkey()

> **inputHasPubkey**(`inputIndex`, `pubkey`): `boolean`

Defined in: [ts\_src/psbt.ts:503](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/psbt.ts#L503)

#### Parameters

##### inputIndex

`number`

##### pubkey

`Uint8Array`

#### Returns

`boolean`

***

### outputHasHDKey()

> **outputHasHDKey**(`outputIndex`, `root`): `boolean`

Defined in: [ts\_src/psbt.ts:521](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/psbt.ts#L521)

#### Parameters

##### outputIndex

`number`

##### root

[`HDSigner`](../interfaces/HDSigner.md)

#### Returns

`boolean`

***

### outputHasPubkey()

> **outputHasPubkey**(`outputIndex`, `pubkey`): `boolean`

Defined in: [ts\_src/psbt.ts:516](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/psbt.ts#L516)

#### Parameters

##### outputIndex

`number`

##### pubkey

`Uint8Array`

#### Returns

`boolean`

***

### setInputSequence()

> **setInputSequence**(`inputIndex`, `sequence`): `this`

Defined in: [ts\_src/psbt.ts:267](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/psbt.ts#L267)

#### Parameters

##### inputIndex

`number`

##### sequence

`number`

#### Returns

`this`

***

### setLocktime()

> **setLocktime**(`locktime`): `this`

Defined in: [ts\_src/psbt.ts:258](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/psbt.ts#L258)

#### Parameters

##### locktime

`number`

#### Returns

`this`

***

### setMaximumFeeRate()

> **setMaximumFeeRate**(`satoshiPerByte`): `void`

Defined in: [ts\_src/psbt.ts:244](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/psbt.ts#L244)

#### Parameters

##### satoshiPerByte

`number`

#### Returns

`void`

***

### setVersion()

> **setVersion**(`version`): `this`

Defined in: [ts\_src/psbt.ts:249](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/psbt.ts#L249)

#### Parameters

##### version

`number`

#### Returns

`this`

***

### signAllInputs()

> **signAllInputs**(`keyPair`, `sighashTypes`?): `this`

Defined in: [ts\_src/psbt.ts:748](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/psbt.ts#L748)

#### Parameters

##### keyPair

[`Signer`](../interfaces/Signer.md)

##### sighashTypes?

`number`[]

#### Returns

`this`

***

### signAllInputsAsync()

> **signAllInputsAsync**(`keyPair`, `sighashTypes`?): `Promise`\<`void`\>

Defined in: [ts\_src/psbt.ts:770](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/psbt.ts#L770)

#### Parameters

##### keyPair

[`Signer`](../interfaces/Signer.md) | [`SignerAsync`](../interfaces/SignerAsync.md)

##### sighashTypes?

`number`[]

#### Returns

`Promise`\<`void`\>

***

### signAllInputsHD()

> **signAllInputsHD**(`hdKeyPair`, `sighashTypes`): `this`

Defined in: [ts\_src/psbt.ts:655](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/psbt.ts#L655)

#### Parameters

##### hdKeyPair

[`HDSigner`](../interfaces/HDSigner.md)

##### sighashTypes

`number`[] = `...`

#### Returns

`this`

***

### signAllInputsHDAsync()

> **signAllInputsHDAsync**(`hdKeyPair`, `sighashTypes`): `Promise`\<`void`\>

Defined in: [ts\_src/psbt.ts:678](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/psbt.ts#L678)

#### Parameters

##### hdKeyPair

[`HDSigner`](../interfaces/HDSigner.md) | [`HDSignerAsync`](../interfaces/HDSignerAsync.md)

##### sighashTypes

`number`[] = `...`

#### Returns

`Promise`\<`void`\>

***

### signInput()

> **signInput**(`inputIndex`, `keyPair`, `sighashTypes`?): `this`

Defined in: [ts\_src/psbt.ts:804](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/psbt.ts#L804)

#### Parameters

##### inputIndex

`number`

##### keyPair

[`Signer`](../interfaces/Signer.md)

##### sighashTypes?

`number`[]

#### Returns

`this`

***

### signInputAsync()

> **signInputAsync**(`inputIndex`, `keyPair`, `sighashTypes`?): `Promise`\<`void`\>

Defined in: [ts\_src/psbt.ts:920](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/psbt.ts#L920)

#### Parameters

##### inputIndex

`number`

##### keyPair

[`Signer`](../interfaces/Signer.md) | [`SignerAsync`](../interfaces/SignerAsync.md)

##### sighashTypes?

`number`[]

#### Returns

`Promise`\<`void`\>

***

### signInputHD()

> **signInputHD**(`inputIndex`, `hdKeyPair`, `sighashTypes`): `this`

Defined in: [ts\_src/psbt.ts:710](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/psbt.ts#L710)

#### Parameters

##### inputIndex

`number`

##### hdKeyPair

[`HDSigner`](../interfaces/HDSigner.md)

##### sighashTypes

`number`[] = `...`

#### Returns

`this`

***

### signInputHDAsync()

> **signInputHDAsync**(`inputIndex`, `hdKeyPair`, `sighashTypes`): `Promise`\<`void`\>

Defined in: [ts\_src/psbt.ts:727](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/psbt.ts#L727)

#### Parameters

##### inputIndex

`number`

##### hdKeyPair

[`HDSigner`](../interfaces/HDSigner.md) | [`HDSignerAsync`](../interfaces/HDSignerAsync.md)

##### sighashTypes

`number`[] = `...`

#### Returns

`Promise`\<`void`\>

***

### signTaprootInput()

> **signTaprootInput**(`inputIndex`, `keyPair`, `tapLeafHashToSign`?, `sighashTypes`?): `this`

Defined in: [ts\_src/psbt.ts:826](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/psbt.ts#L826)

#### Parameters

##### inputIndex

`number`

##### keyPair

[`Signer`](../interfaces/Signer.md)

##### tapLeafHashToSign?

`Uint8Array`

##### sighashTypes?

`number`[]

#### Returns

`this`

***

### signTaprootInputAsync()

> **signTaprootInputAsync**(`inputIndex`, `keyPair`, `tapLeafHash`?, `sighashTypes`?): `Promise`\<`void`\>

Defined in: [ts\_src/psbt.ts:943](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/psbt.ts#L943)

#### Parameters

##### inputIndex

`number`

##### keyPair

[`Signer`](../interfaces/Signer.md) | [`SignerAsync`](../interfaces/SignerAsync.md)

##### tapLeafHash?

`Uint8Array`

##### sighashTypes?

`number`[]

#### Returns

`Promise`\<`void`\>

***

### toBase64()

> **toBase64**(): `string`

Defined in: [ts\_src/psbt.ts:1089](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/psbt.ts#L1089)

#### Returns

`string`

***

### toBuffer()

> **toBuffer**(): `Uint8Array`

Defined in: [ts\_src/psbt.ts:1079](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/psbt.ts#L1079)

#### Returns

`Uint8Array`

***

### toHex()

> **toHex**(): `string`

Defined in: [ts\_src/psbt.ts:1084](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/psbt.ts#L1084)

#### Returns

`string`

***

### updateGlobal()

> **updateGlobal**(`updateData`): `this`

Defined in: [ts\_src/psbt.ts:1094](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/psbt.ts#L1094)

#### Parameters

##### updateData

`PsbtGlobalUpdate`

#### Returns

`this`

***

### updateInput()

> **updateInput**(`inputIndex`, `updateData`): `this`

Defined in: [ts\_src/psbt.ts:1099](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/psbt.ts#L1099)

#### Parameters

##### inputIndex

`number`

##### updateData

`PsbtInputUpdate`

#### Returns

`this`

***

### updateOutput()

> **updateOutput**(`outputIndex`, `updateData`): `this`

Defined in: [ts\_src/psbt.ts:1117](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/psbt.ts#L1117)

#### Parameters

##### outputIndex

`number`

##### updateData

`PsbtOutputUpdate`

#### Returns

`this`

***

### validateSignaturesOfAllInputs()

> **validateSignaturesOfAllInputs**(`validator`): `boolean`

Defined in: [ts\_src/psbt.ts:529](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/psbt.ts#L529)

#### Parameters

##### validator

[`ValidateSigFunction`](../namespaces/psbt/type-aliases/ValidateSigFunction.md)

#### Returns

`boolean`

***

### validateSignaturesOfInput()

> **validateSignaturesOfInput**(`inputIndex`, `validator`, `pubkey`?): `boolean`

Defined in: [ts\_src/psbt.ts:537](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/psbt.ts#L537)

#### Parameters

##### inputIndex

`number`

##### validator

[`ValidateSigFunction`](../namespaces/psbt/type-aliases/ValidateSigFunction.md)

##### pubkey?

`Uint8Array`

#### Returns

`boolean`

***

### fromBase64()

> `static` **fromBase64**(`data`, `opts`): [`Psbt`](Psbt.md)

Defined in: [ts\_src/psbt.ts:132](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/psbt.ts#L132)

#### Parameters

##### data

`string`

##### opts

[`PsbtOptsOptional`](../interfaces/PsbtOptsOptional.md) = `{}`

#### Returns

[`Psbt`](Psbt.md)

***

### fromBuffer()

> `static` **fromBuffer**(`buffer`, `opts`): [`Psbt`](Psbt.md)

Defined in: [ts\_src/psbt.ts:142](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/psbt.ts#L142)

#### Parameters

##### buffer

`Uint8Array`

##### opts

[`PsbtOptsOptional`](../interfaces/PsbtOptsOptional.md) = `{}`

#### Returns

[`Psbt`](Psbt.md)

***

### fromHex()

> `static` **fromHex**(`data`, `opts`): [`Psbt`](Psbt.md)

Defined in: [ts\_src/psbt.ts:137](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/psbt.ts#L137)

#### Parameters

##### data

`string`

##### opts

[`PsbtOptsOptional`](../interfaces/PsbtOptsOptional.md) = `{}`

#### Returns

[`Psbt`](Psbt.md)
