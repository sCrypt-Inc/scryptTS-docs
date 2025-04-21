[**scrypt-ts**](../README.md)

***

[scrypt-ts](../globals.md) / TransactionResponse

# Interface: TransactionResponse

Defined in: scrypt-ts/dist/bsv/abstract-provider.d.ts:5

## Extends

- [`Transaction`](../@scrypt-inc/bsv/classes/Transaction.md)

## Properties

### hash

> `readonly` **hash**: `string`

Defined in: @scrypt-inc/bsv/index.d.ts:908

#### Inherited from

[`Transaction`](../@scrypt-inc/bsv/classes/Transaction.md).[`hash`](../@scrypt-inc/bsv/classes/Transaction.md#hash)

***

### id

> `readonly` **id**: `string`

Defined in: @scrypt-inc/bsv/index.d.ts:907

#### Inherited from

[`Transaction`](../@scrypt-inc/bsv/classes/Transaction.md).[`id`](../@scrypt-inc/bsv/classes/Transaction.md#id)

***

### inputAmount

> `readonly` **inputAmount**: `number`

Defined in: @scrypt-inc/bsv/index.d.ts:909

#### Inherited from

[`Transaction`](../@scrypt-inc/bsv/classes/Transaction.md).[`inputAmount`](../@scrypt-inc/bsv/classes/Transaction.md#inputamount)

***

### inputs

> **inputs**: [`Input`](../@scrypt-inc/bsv/namespaces/Transaction/classes/Input.md)[]

Defined in: @scrypt-inc/bsv/index.d.ts:905

#### Inherited from

[`Transaction`](../@scrypt-inc/bsv/classes/Transaction.md).[`inputs`](../@scrypt-inc/bsv/classes/Transaction.md#inputs)

***

### nid

> **nid**: `string`

Defined in: @scrypt-inc/bsv/index.d.ts:911

#### Inherited from

[`Transaction`](../@scrypt-inc/bsv/classes/Transaction.md).[`nid`](../@scrypt-inc/bsv/classes/Transaction.md#nid)

***

### nLockTime

> **nLockTime**: `number`

Defined in: @scrypt-inc/bsv/index.d.ts:912

#### Inherited from

[`Transaction`](../@scrypt-inc/bsv/classes/Transaction.md).[`nLockTime`](../@scrypt-inc/bsv/classes/Transaction.md#nlocktime)

***

### outputAmount

> `readonly` **outputAmount**: `number`

Defined in: @scrypt-inc/bsv/index.d.ts:910

#### Inherited from

[`Transaction`](../@scrypt-inc/bsv/classes/Transaction.md).[`outputAmount`](../@scrypt-inc/bsv/classes/Transaction.md#outputamount)

***

### outputs

> **outputs**: [`Output`](../@scrypt-inc/bsv/namespaces/Transaction/classes/Output.md)[]

Defined in: @scrypt-inc/bsv/index.d.ts:906

#### Inherited from

[`Transaction`](../@scrypt-inc/bsv/classes/Transaction.md).[`outputs`](../@scrypt-inc/bsv/classes/Transaction.md#outputs)

## Methods

### addData()

> **addData**(`value`): `this`

Defined in: @scrypt-inc/bsv/index.d.ts:938

#### Parameters

##### value

`string` | `Buffer`\<`ArrayBufferLike`\>

#### Returns

`this`

#### Inherited from

[`Transaction`](../@scrypt-inc/bsv/classes/Transaction.md).[`addData`](../@scrypt-inc/bsv/classes/Transaction.md#adddata)

***

### addDummyInput()

> **addDummyInput**(`script`, `satoshis`): `this`

Defined in: @scrypt-inc/bsv/index.d.ts:991

#### Parameters

##### script

[`Script`](../@scrypt-inc/bsv/classes/Script.md)

##### satoshis

`number`

#### Returns

`this`

#### Inherited from

[`Transaction`](../@scrypt-inc/bsv/classes/Transaction.md).[`addDummyInput`](../@scrypt-inc/bsv/classes/Transaction.md#adddummyinput)

***

### addInput()

> **addInput**(`input`, `outputScript`?, `satoshis`?): `this`

Defined in: @scrypt-inc/bsv/index.d.ts:931

#### Parameters

##### input

[`Input`](../@scrypt-inc/bsv/namespaces/Transaction/classes/Input.md)

##### outputScript?

`string` | [`Script`](../@scrypt-inc/bsv/classes/Script.md)

##### satoshis?

`number`

#### Returns

`this`

#### Inherited from

[`Transaction`](../@scrypt-inc/bsv/classes/Transaction.md).[`addInput`](../@scrypt-inc/bsv/classes/Transaction.md#addinput)

***

### addInputFromPrevTx()

> **addInputFromPrevTx**(`prevTx`, `outputIndex`?): `this`

Defined in: @scrypt-inc/bsv/index.d.ts:990

#### Parameters

##### prevTx

[`Transaction`](../@scrypt-inc/bsv/classes/Transaction.md)

##### outputIndex?

`number`

#### Returns

`this`

#### Inherited from

[`Transaction`](../@scrypt-inc/bsv/classes/Transaction.md).[`addInputFromPrevTx`](../@scrypt-inc/bsv/classes/Transaction.md#addinputfromprevtx)

***

### addOutput()

> **addOutput**(`output`): `this`

Defined in: @scrypt-inc/bsv/index.d.ts:937

#### Parameters

##### output

[`Output`](../@scrypt-inc/bsv/namespaces/Transaction/classes/Output.md)

#### Returns

`this`

#### Inherited from

[`Transaction`](../@scrypt-inc/bsv/classes/Transaction.md).[`addOutput`](../@scrypt-inc/bsv/classes/Transaction.md#addoutput)

***

### applySignature()

> **applySignature**(`sig`): `this`

Defined in: @scrypt-inc/bsv/index.d.ts:929

#### Parameters

##### sig

###### inputIndex

`number`

###### publicKey

[`PublicKey`](../@scrypt-inc/bsv/classes/PublicKey.md)

###### signature

[`Signature`](../@scrypt-inc/bsv/namespaces/crypto/classes/Signature.md)

###### sigtype

`number`

#### Returns

`this`

#### Inherited from

[`Transaction`](../@scrypt-inc/bsv/classes/Transaction.md).[`applySignature`](../@scrypt-inc/bsv/classes/Transaction.md#applysignature)

***

### change()

> **change**(`address`): `this`

Defined in: @scrypt-inc/bsv/index.d.ts:922

#### Parameters

##### address

`string` | [`Address`](../@scrypt-inc/bsv/classes/Address.md)

#### Returns

`this`

#### Inherited from

[`Transaction`](../@scrypt-inc/bsv/classes/Transaction.md).[`change`](../@scrypt-inc/bsv/classes/Transaction.md#change)

***

### checkFeeRate()

> **checkFeeRate**(`feePerKb`?): `boolean`

Defined in: @scrypt-inc/bsv/index.d.ts:986

#### Parameters

##### feePerKb?

`number`

#### Returns

`boolean`

#### Inherited from

[`Transaction`](../@scrypt-inc/bsv/classes/Transaction.md).[`checkFeeRate`](../@scrypt-inc/bsv/classes/Transaction.md#checkfeerate)

***

### dummyChange()

> **dummyChange**(): `this`

Defined in: @scrypt-inc/bsv/index.d.ts:992

#### Returns

`this`

#### Inherited from

[`Transaction`](../@scrypt-inc/bsv/classes/Transaction.md).[`dummyChange`](../@scrypt-inc/bsv/classes/Transaction.md#dummychange)

***

### enableRBF()

> **enableRBF**(): `this`

Defined in: @scrypt-inc/bsv/index.d.ts:952

#### Returns

`this`

#### Inherited from

[`Transaction`](../@scrypt-inc/bsv/classes/Transaction.md).[`enableRBF`](../@scrypt-inc/bsv/classes/Transaction.md#enablerbf)

***

### fee()

> **fee**(`amount`): `this`

Defined in: @scrypt-inc/bsv/index.d.ts:923

#### Parameters

##### amount

`number`

#### Returns

`this`

#### Inherited from

[`Transaction`](../@scrypt-inc/bsv/classes/Transaction.md).[`fee`](../@scrypt-inc/bsv/classes/Transaction.md#fee)

***

### feePerKb()

> **feePerKb**(`amount`): `this`

Defined in: @scrypt-inc/bsv/index.d.ts:924

#### Parameters

##### amount

`number`

#### Returns

`this`

#### Inherited from

[`Transaction`](../@scrypt-inc/bsv/classes/Transaction.md).[`feePerKb`](../@scrypt-inc/bsv/classes/Transaction.md#feeperkb-1)

***

### from()

> **from**(`utxos`): `this`

Defined in: @scrypt-inc/bsv/index.d.ts:916

#### Parameters

##### utxos

[`IUnspentOutput`](../@scrypt-inc/bsv/namespaces/Transaction/interfaces/IUnspentOutput.md) | [`IUnspentOutput`](../@scrypt-inc/bsv/namespaces/Transaction/interfaces/IUnspentOutput.md)[]

#### Returns

`this`

#### Inherited from

[`Transaction`](../@scrypt-inc/bsv/classes/Transaction.md).[`from`](../@scrypt-inc/bsv/classes/Transaction.md#from)

***

### fromBuffer()

> **fromBuffer**(`buffer`): `this`

Defined in: @scrypt-inc/bsv/index.d.ts:920

#### Parameters

##### buffer

`Buffer`

#### Returns

`this`

#### Inherited from

[`Transaction`](../@scrypt-inc/bsv/classes/Transaction.md).[`fromBuffer`](../@scrypt-inc/bsv/classes/Transaction.md#frombuffer)

***

### fromString()

> **fromString**(`rawTxHex`): `this`

Defined in: @scrypt-inc/bsv/index.d.ts:919

#### Parameters

##### rawTxHex

`string`

#### Returns

`this`

#### Inherited from

[`Transaction`](../@scrypt-inc/bsv/classes/Transaction.md).[`fromString`](../@scrypt-inc/bsv/classes/Transaction.md#fromstring)

***

### getChangeAddress()

> **getChangeAddress**(): [`Address`](../@scrypt-inc/bsv/classes/Address.md)

Defined in: @scrypt-inc/bsv/index.d.ts:945

#### Returns

[`Address`](../@scrypt-inc/bsv/classes/Address.md)

#### Inherited from

[`Transaction`](../@scrypt-inc/bsv/classes/Transaction.md).[`getChangeAddress`](../@scrypt-inc/bsv/classes/Transaction.md#getchangeaddress)

***

### getChangeAmount()

> **getChangeAmount**(): `number`

Defined in: @scrypt-inc/bsv/index.d.ts:983

#### Returns

`number`

#### Inherited from

[`Transaction`](../@scrypt-inc/bsv/classes/Transaction.md).[`getChangeAmount`](../@scrypt-inc/bsv/classes/Transaction.md#getchangeamount)

***

### getChangeOutput()

> **getChangeOutput**(): [`Output`](../@scrypt-inc/bsv/namespaces/Transaction/classes/Output.md)

Defined in: @scrypt-inc/bsv/index.d.ts:944

#### Returns

[`Output`](../@scrypt-inc/bsv/namespaces/Transaction/classes/Output.md)

#### Inherited from

[`Transaction`](../@scrypt-inc/bsv/classes/Transaction.md).[`getChangeOutput`](../@scrypt-inc/bsv/classes/Transaction.md#getchangeoutput)

***

### getEstimateFee()

> **getEstimateFee**(): `number`

Defined in: @scrypt-inc/bsv/index.d.ts:985

#### Returns

`number`

#### Inherited from

[`Transaction`](../@scrypt-inc/bsv/classes/Transaction.md).[`getEstimateFee`](../@scrypt-inc/bsv/classes/Transaction.md#getestimatefee)

***

### getEstimateSize()

> **getEstimateSize**(): `number`

Defined in: @scrypt-inc/bsv/index.d.ts:984

#### Returns

`number`

#### Inherited from

[`Transaction`](../@scrypt-inc/bsv/classes/Transaction.md).[`getEstimateSize`](../@scrypt-inc/bsv/classes/Transaction.md#getestimatesize)

***

### getFee()

> **getFee**(): `number`

Defined in: @scrypt-inc/bsv/index.d.ts:943

#### Returns

`number`

#### Inherited from

[`Transaction`](../@scrypt-inc/bsv/classes/Transaction.md).[`getFee`](../@scrypt-inc/bsv/classes/Transaction.md#getfee)

***

### getInputAmount()

> **getInputAmount**(`inputIndex`): `number`

Defined in: @scrypt-inc/bsv/index.d.ts:1007

#### Parameters

##### inputIndex

`number`

#### Returns

`number`

#### Inherited from

[`Transaction`](../@scrypt-inc/bsv/classes/Transaction.md).[`getInputAmount`](../@scrypt-inc/bsv/classes/Transaction.md#getinputamount)

***

### getLockTime()

> **getLockTime**(): `number` \| `Date`

Defined in: @scrypt-inc/bsv/index.d.ts:946

#### Returns

`number` \| `Date`

#### Inherited from

[`Transaction`](../@scrypt-inc/bsv/classes/Transaction.md).[`getLockTime`](../@scrypt-inc/bsv/classes/Transaction.md#getlocktime)

***

### getOutputAmount()

> **getOutputAmount**(`outputIndex`): `number`

Defined in: @scrypt-inc/bsv/index.d.ts:1008

#### Parameters

##### outputIndex

`number`

#### Returns

`number`

#### Inherited from

[`Transaction`](../@scrypt-inc/bsv/classes/Transaction.md).[`getOutputAmount`](../@scrypt-inc/bsv/classes/Transaction.md#getoutputamount)

***

### getPreimage()

> **getPreimage**(`inputIndex`, `sigtype`?, `isLowS`?, `csIdx`?): `string`

Defined in: @scrypt-inc/bsv/index.d.ts:989

#### Parameters

##### inputIndex

`number`

##### sigtype?

`number`

##### isLowS?

`boolean`

##### csIdx?

`number`

#### Returns

`string`

#### Inherited from

[`Transaction`](../@scrypt-inc/bsv/classes/Transaction.md).[`getPreimage`](../@scrypt-inc/bsv/classes/Transaction.md#getpreimage)

***

### getSerializationError()

> **getSerializationError**(`opts`?): `any`

Defined in: @scrypt-inc/bsv/index.d.ts:964

#### Parameters

##### opts?

`object`

#### Returns

`any`

#### Inherited from

[`Transaction`](../@scrypt-inc/bsv/classes/Transaction.md).[`getSerializationError`](../@scrypt-inc/bsv/classes/Transaction.md#getserializationerror)

***

### getSignature()

> **getSignature**(`inputIndex`, `privateKey`?, `sigtype`?): `string` \| `string`[]

Defined in: @scrypt-inc/bsv/index.d.ts:988

#### Parameters

##### inputIndex

`number`

##### privateKey?

[`PrivateKey`](../@scrypt-inc/bsv/classes/PrivateKey.md) | [`PrivateKey`](../@scrypt-inc/bsv/classes/PrivateKey.md)[]

##### sigtype?

`number`

#### Returns

`string` \| `string`[]

#### Inherited from

[`Transaction`](../@scrypt-inc/bsv/classes/Transaction.md).[`getSignature`](../@scrypt-inc/bsv/classes/Transaction.md#getsignature)

***

### getUnspentValue()

> **getUnspentValue**(): `number`

Defined in: @scrypt-inc/bsv/index.d.ts:966

#### Returns

`number`

#### Inherited from

[`Transaction`](../@scrypt-inc/bsv/classes/Transaction.md).[`getUnspentValue`](../@scrypt-inc/bsv/classes/Transaction.md#getunspentvalue)

***

### hasWitnesses()

> **hasWitnesses**(): `boolean`

Defined in: @scrypt-inc/bsv/index.d.ts:942

#### Returns

`boolean`

#### Inherited from

[`Transaction`](../@scrypt-inc/bsv/classes/Transaction.md).[`hasWitnesses`](../@scrypt-inc/bsv/classes/Transaction.md#haswitnesses)

***

### inspect()

> **inspect**(): `string`

Defined in: @scrypt-inc/bsv/index.d.ts:955

#### Returns

`string`

#### Inherited from

[`Transaction`](../@scrypt-inc/bsv/classes/Transaction.md).[`inspect`](../@scrypt-inc/bsv/classes/Transaction.md#inspect)

***

### isCoinbase()

> **isCoinbase**(): `boolean`

Defined in: @scrypt-inc/bsv/index.d.ts:950

#### Returns

`boolean`

#### Inherited from

[`Transaction`](../@scrypt-inc/bsv/classes/Transaction.md).[`isCoinbase`](../@scrypt-inc/bsv/classes/Transaction.md#iscoinbase)

***

### isFullySigned()

> **isFullySigned**(): `boolean`

Defined in: @scrypt-inc/bsv/index.d.ts:962

#### Returns

`boolean`

#### Inherited from

[`Transaction`](../@scrypt-inc/bsv/classes/Transaction.md).[`isFullySigned`](../@scrypt-inc/bsv/classes/Transaction.md#isfullysigned)

***

### isRBF()

> **isRBF**(): `boolean`

Defined in: @scrypt-inc/bsv/index.d.ts:953

#### Returns

`boolean`

#### Inherited from

[`Transaction`](../@scrypt-inc/bsv/classes/Transaction.md).[`isRBF`](../@scrypt-inc/bsv/classes/Transaction.md#isrbf)

***

### isSealed()

> **isSealed**(): `boolean`

Defined in: @scrypt-inc/bsv/index.d.ts:982

#### Returns

`boolean`

#### Inherited from

[`Transaction`](../@scrypt-inc/bsv/classes/Transaction.md).[`isSealed`](../@scrypt-inc/bsv/classes/Transaction.md#issealed)

***

### lockUntilBlockHeight()

> **lockUntilBlockHeight**(`height`): `this`

Defined in: @scrypt-inc/bsv/index.d.ts:940

#### Parameters

##### height

`number`

#### Returns

`this`

#### Inherited from

[`Transaction`](../@scrypt-inc/bsv/classes/Transaction.md).[`lockUntilBlockHeight`](../@scrypt-inc/bsv/classes/Transaction.md#lockuntilblockheight)

***

### lockUntilDate()

> **lockUntilDate**(`time`): `this`

Defined in: @scrypt-inc/bsv/index.d.ts:939

#### Parameters

##### time

`number` | `Date`

#### Returns

`this`

#### Inherited from

[`Transaction`](../@scrypt-inc/bsv/classes/Transaction.md).[`lockUntilDate`](../@scrypt-inc/bsv/classes/Transaction.md#lockuntildate)

***

### prevouts()

> **prevouts**(): `string`

Defined in: @scrypt-inc/bsv/index.d.ts:987

#### Returns

`string`

#### Inherited from

[`Transaction`](../@scrypt-inc/bsv/classes/Transaction.md).[`prevouts`](../@scrypt-inc/bsv/classes/Transaction.md#prevouts)

***

### removeInput()

> **removeInput**(`txId`, `outputIndex`): `void`

Defined in: @scrypt-inc/bsv/index.d.ts:936

#### Parameters

##### txId

`string`

##### outputIndex

`number`

#### Returns

`void`

#### Inherited from

[`Transaction`](../@scrypt-inc/bsv/classes/Transaction.md).[`removeInput`](../@scrypt-inc/bsv/classes/Transaction.md#removeinput)

***

### seal()

> **seal**(): `this`

Defined in: @scrypt-inc/bsv/index.d.ts:980

#### Returns

`this`

#### Inherited from

[`Transaction`](../@scrypt-inc/bsv/classes/Transaction.md).[`seal`](../@scrypt-inc/bsv/classes/Transaction.md#seal)

***

### sealAsync()

> **sealAsync**(): `Promise`\<[`TransactionResponse`](TransactionResponse.md)\>

Defined in: @scrypt-inc/bsv/index.d.ts:981

#### Returns

`Promise`\<[`TransactionResponse`](TransactionResponse.md)\>

#### Inherited from

[`Transaction`](../@scrypt-inc/bsv/classes/Transaction.md).[`sealAsync`](../@scrypt-inc/bsv/classes/Transaction.md#sealasync)

***

### serialize()

> **serialize**(`opts`?): `string`

Defined in: @scrypt-inc/bsv/index.d.ts:956

#### Parameters

##### opts?

`object`

#### Returns

`string`

#### Inherited from

[`Transaction`](../@scrypt-inc/bsv/classes/Transaction.md).[`serialize`](../@scrypt-inc/bsv/classes/Transaction.md#serialize)

***

### setInputScript()

> **setInputScript**(`inputIndex`, `unlockingScript`): `this`

Defined in: @scrypt-inc/bsv/index.d.ts:967

#### Parameters

##### inputIndex

`number` | \{ `inputIndex`: `number`; `isLowS`: `boolean`; `privateKey`: [`PrivateKey`](../@scrypt-inc/bsv/classes/PrivateKey.md) \| [`PrivateKey`](../@scrypt-inc/bsv/classes/PrivateKey.md)[]; `sigtype`: `number`; \}

##### unlockingScript

[`Script`](../@scrypt-inc/bsv/classes/Script.md) | (`tx`, `outputInPrevTx`) => [`Script`](../@scrypt-inc/bsv/classes/Script.md)

#### Returns

`this`

#### Inherited from

[`Transaction`](../@scrypt-inc/bsv/classes/Transaction.md).[`setInputScript`](../@scrypt-inc/bsv/classes/Transaction.md#setinputscript)

***

### setInputScriptAsync()

> **setInputScriptAsync**(`inputIndex`, `callback`): `Promise`\<[`TransactionResponse`](TransactionResponse.md)\>

Defined in: @scrypt-inc/bsv/index.d.ts:973

#### Parameters

##### inputIndex

`number` | \{ `inputIndex`: `number`; `isLowS`: `boolean`; `sigtype`: `number`; \}

##### callback

(`tx`, `outputInPrevTx`) => `Promise`\<[`Script`](../@scrypt-inc/bsv/classes/Script.md)\>

#### Returns

`Promise`\<[`TransactionResponse`](TransactionResponse.md)\>

#### Inherited from

[`Transaction`](../@scrypt-inc/bsv/classes/Transaction.md).[`setInputScriptAsync`](../@scrypt-inc/bsv/classes/Transaction.md#setinputscriptasync)

***

### setInputSequence()

> **setInputSequence**(`inputIndex`, `sequence`): `this`

Defined in: @scrypt-inc/bsv/index.d.ts:978

#### Parameters

##### inputIndex

`number`

##### sequence

`number`

#### Returns

`this`

#### Inherited from

[`Transaction`](../@scrypt-inc/bsv/classes/Transaction.md).[`setInputSequence`](../@scrypt-inc/bsv/classes/Transaction.md#setinputsequence)

***

### setLockTime()

> **setLockTime**(`t`): `this`

Defined in: @scrypt-inc/bsv/index.d.ts:947

#### Parameters

##### t

`number`

#### Returns

`this`

#### Inherited from

[`Transaction`](../@scrypt-inc/bsv/classes/Transaction.md).[`setLockTime`](../@scrypt-inc/bsv/classes/Transaction.md#setlocktime)

***

### setOutput()

> **setOutput**(`outputIndex`, `output`): `this`

Defined in: @scrypt-inc/bsv/index.d.ts:979

#### Parameters

##### outputIndex

`number`

##### output

[`Output`](../@scrypt-inc/bsv/namespaces/Transaction/classes/Output.md) | (`tx`) => [`Output`](../@scrypt-inc/bsv/namespaces/Transaction/classes/Output.md)

#### Returns

`this`

#### Inherited from

[`Transaction`](../@scrypt-inc/bsv/classes/Transaction.md).[`setOutput`](../@scrypt-inc/bsv/classes/Transaction.md#setoutput)

***

### sign()

> **sign**(`privateKey`, `sigtype`?): `this`

Defined in: @scrypt-inc/bsv/index.d.ts:925

#### Parameters

##### privateKey

`string` | `string`[] | [`PrivateKey`](../@scrypt-inc/bsv/classes/PrivateKey.md) | [`PrivateKey`](../@scrypt-inc/bsv/classes/PrivateKey.md)[]

##### sigtype?

`number`

#### Returns

`this`

#### Inherited from

[`Transaction`](../@scrypt-inc/bsv/classes/Transaction.md).[`sign`](../@scrypt-inc/bsv/classes/Transaction.md#sign)

***

### to()

> **to**(`address`, `amount`): `this`

Defined in: @scrypt-inc/bsv/index.d.ts:921

#### Parameters

##### address

`string` | [`Address`](../@scrypt-inc/bsv/classes/Address.md) | [`Address`](../@scrypt-inc/bsv/classes/Address.md)[]

##### amount

`number`

#### Returns

`this`

#### Inherited from

[`Transaction`](../@scrypt-inc/bsv/classes/Transaction.md).[`to`](../@scrypt-inc/bsv/classes/Transaction.md#to)

***

### toBuffer()

> **toBuffer**(): `Buffer`

Defined in: @scrypt-inc/bsv/index.d.ts:960

#### Returns

`Buffer`

#### Inherited from

[`Transaction`](../@scrypt-inc/bsv/classes/Transaction.md).[`toBuffer`](../@scrypt-inc/bsv/classes/Transaction.md#tobuffer)

***

### toObject()

> **toObject**(): `any`

Defined in: @scrypt-inc/bsv/index.d.ts:959

#### Returns

`any`

#### Inherited from

[`Transaction`](../@scrypt-inc/bsv/classes/Transaction.md).[`toObject`](../@scrypt-inc/bsv/classes/Transaction.md#toobject)

***

### uncheckedSerialize()

> **uncheckedSerialize**(): `string`

Defined in: @scrypt-inc/bsv/index.d.ts:957

#### Returns

`string`

#### Inherited from

[`Transaction`](../@scrypt-inc/bsv/classes/Transaction.md).[`uncheckedSerialize`](../@scrypt-inc/bsv/classes/Transaction.md#uncheckedserialize)

***

### verify()

> **verify**(): `string` \| `true`

Defined in: @scrypt-inc/bsv/index.d.ts:949

#### Returns

`string` \| `true`

#### Inherited from

[`Transaction`](../@scrypt-inc/bsv/classes/Transaction.md).[`verify`](../@scrypt-inc/bsv/classes/Transaction.md#verify)

***

### ~~verifyInputScript()~~

> **verifyInputScript**(`inputIndex`): `object`

Defined in: @scrypt-inc/bsv/index.d.ts:997

#### Parameters

##### inputIndex

`number`

#### Returns

`object`

##### ~~error~~

> **error**: `string`

##### ~~failedAt~~

> **failedAt**: `any`

##### ~~success~~

> **success**: `boolean`

#### Deprecated

please use `verifyScript` instead

#### Inherited from

[`Transaction`](../@scrypt-inc/bsv/classes/Transaction.md).[`verifyInputScript`](../@scrypt-inc/bsv/classes/Transaction.md#verifyinputscript)

***

### verifyScript()

> **verifyScript**(`inputIndex`): `object`

Defined in: @scrypt-inc/bsv/index.d.ts:1002

#### Parameters

##### inputIndex

`number`

#### Returns

`object`

##### error

> **error**: `string`

##### failedAt

> **failedAt**: `any`

##### success

> **success**: `boolean`

#### Inherited from

[`Transaction`](../@scrypt-inc/bsv/classes/Transaction.md).[`verifyScript`](../@scrypt-inc/bsv/classes/Transaction.md#verifyscript)

***

### verifySignature()

> **verifySignature**(`sig`, `pubkey`, `nin`, `subscript`, `satoshisBN`, `flags`): `boolean`

Defined in: @scrypt-inc/bsv/index.d.ts:930

#### Parameters

##### sig

[`Signature`](../@scrypt-inc/bsv/namespaces/crypto/classes/Signature.md)

##### pubkey

[`PublicKey`](../@scrypt-inc/bsv/classes/PublicKey.md)

##### nin

`number`

##### subscript

[`Script`](../@scrypt-inc/bsv/classes/Script.md)

##### satoshisBN

[`BN`](../@scrypt-inc/bsv/namespaces/crypto/classes/BN.md)

##### flags

`number`

#### Returns

`boolean`

#### Inherited from

[`Transaction`](../@scrypt-inc/bsv/classes/Transaction.md).[`verifySignature`](../@scrypt-inc/bsv/classes/Transaction.md#verifysignature)
