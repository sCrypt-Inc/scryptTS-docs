[scrypt-ts](../README.md) / TransactionResponse

# Interface: TransactionResponse

## Hierarchy

- [`Transaction`](../classes/bsv.Transaction-1.md)

  ↳ **`TransactionResponse`**

## Table of contents

### Properties

- [\_estimateSize](TransactionResponse.md#_estimatesize)
- [hash](TransactionResponse.md#hash)
- [id](TransactionResponse.md#id)
- [inputAmount](TransactionResponse.md#inputamount)
- [inputs](TransactionResponse.md#inputs)
- [nLockTime](TransactionResponse.md#nlocktime)
- [nid](TransactionResponse.md#nid)
- [outputAmount](TransactionResponse.md#outputamount)
- [outputs](TransactionResponse.md#outputs)

### Methods

- [\_estimateFee](TransactionResponse.md#_estimatefee)
- [\_getUnspentValue](TransactionResponse.md#_getunspentvalue)
- [addData](TransactionResponse.md#adddata)
- [addDummyInput](TransactionResponse.md#adddummyinput)
- [addInput](TransactionResponse.md#addinput)
- [addInputFromPrevTx](TransactionResponse.md#addinputfromprevtx)
- [addOutput](TransactionResponse.md#addoutput)
- [applySignature](TransactionResponse.md#applysignature)
- [change](TransactionResponse.md#change)
- [checkFeeRate](TransactionResponse.md#checkfeerate)
- [dummyChange](TransactionResponse.md#dummychange)
- [enableRBF](TransactionResponse.md#enablerbf)
- [fee](TransactionResponse.md#fee)
- [feePerKb](TransactionResponse.md#feeperkb)
- [from](TransactionResponse.md#from)
- [fromBuffer](TransactionResponse.md#frombuffer)
- [fromString](TransactionResponse.md#fromstring)
- [getChangeAddress](TransactionResponse.md#getchangeaddress)
- [getChangeAmount](TransactionResponse.md#getchangeamount)
- [getChangeOutput](TransactionResponse.md#getchangeoutput)
- [getEstimateFee](TransactionResponse.md#getestimatefee)
- [getFee](TransactionResponse.md#getfee)
- [getInputAmount](TransactionResponse.md#getinputamount)
- [getLockTime](TransactionResponse.md#getlocktime)
- [getOutputAmount](TransactionResponse.md#getoutputamount)
- [getPreimage](TransactionResponse.md#getpreimage)
- [getSerializationError](TransactionResponse.md#getserializationerror)
- [getSignature](TransactionResponse.md#getsignature)
- [hasWitnesses](TransactionResponse.md#haswitnesses)
- [inspect](TransactionResponse.md#inspect)
- [isCoinbase](TransactionResponse.md#iscoinbase)
- [isFullySigned](TransactionResponse.md#isfullysigned)
- [isRBF](TransactionResponse.md#isrbf)
- [isSealed](TransactionResponse.md#issealed)
- [lockUntilBlockHeight](TransactionResponse.md#lockuntilblockheight)
- [lockUntilDate](TransactionResponse.md#lockuntildate)
- [prevouts](TransactionResponse.md#prevouts)
- [seal](TransactionResponse.md#seal)
- [sealAsync](TransactionResponse.md#sealasync)
- [serialize](TransactionResponse.md#serialize)
- [setInputScript](TransactionResponse.md#setinputscript)
- [setInputScriptAsync](TransactionResponse.md#setinputscriptasync)
- [setInputSequence](TransactionResponse.md#setinputsequence)
- [setLockTime](TransactionResponse.md#setlocktime)
- [setOutput](TransactionResponse.md#setoutput)
- [sign](TransactionResponse.md#sign)
- [to](TransactionResponse.md#to)
- [toBuffer](TransactionResponse.md#tobuffer)
- [toObject](TransactionResponse.md#toobject)
- [uncheckedSerialize](TransactionResponse.md#uncheckedserialize)
- [verify](TransactionResponse.md#verify)
- [verifyInputScript](TransactionResponse.md#verifyinputscript)
- [verifyScript](TransactionResponse.md#verifyscript)
- [verifySignature](TransactionResponse.md#verifysignature)

## Properties

### \_estimateSize

• **\_estimateSize**: `number`

#### Inherited from

[Transaction](../classes/bsv.Transaction-1.md).[_estimateSize](../classes/bsv.Transaction-1.md#_estimatesize)

#### Defined in

node_modules/bsv/index.d.ts:961

___

### hash

• `Readonly` **hash**: `string`

#### Inherited from

[Transaction](../classes/bsv.Transaction-1.md).[hash](../classes/bsv.Transaction-1.md#hash)

#### Defined in

node_modules/bsv/index.d.ts:902

___

### id

• `Readonly` **id**: `string`

#### Inherited from

[Transaction](../classes/bsv.Transaction-1.md).[id](../classes/bsv.Transaction-1.md#id)

#### Defined in

node_modules/bsv/index.d.ts:901

___

### inputAmount

• `Readonly` **inputAmount**: `number`

#### Inherited from

[Transaction](../classes/bsv.Transaction-1.md).[inputAmount](../classes/bsv.Transaction-1.md#inputamount)

#### Defined in

node_modules/bsv/index.d.ts:903

___

### inputs

• **inputs**: [`Input`](../classes/bsv.Transaction.Input-1.md)[]

#### Inherited from

[Transaction](../classes/bsv.Transaction-1.md).[inputs](../classes/bsv.Transaction-1.md#inputs)

#### Defined in

node_modules/bsv/index.d.ts:899

___

### nLockTime

• **nLockTime**: `number`

#### Inherited from

[Transaction](../classes/bsv.Transaction-1.md).[nLockTime](../classes/bsv.Transaction-1.md#nlocktime)

#### Defined in

node_modules/bsv/index.d.ts:906

___

### nid

• **nid**: `string`

#### Inherited from

[Transaction](../classes/bsv.Transaction-1.md).[nid](../classes/bsv.Transaction-1.md#nid)

#### Defined in

node_modules/bsv/index.d.ts:905

___

### outputAmount

• `Readonly` **outputAmount**: `number`

#### Inherited from

[Transaction](../classes/bsv.Transaction-1.md).[outputAmount](../classes/bsv.Transaction-1.md#outputamount)

#### Defined in

node_modules/bsv/index.d.ts:904

___

### outputs

• **outputs**: [`Output`](../classes/bsv.Transaction.Output.md)[]

#### Inherited from

[Transaction](../classes/bsv.Transaction-1.md).[outputs](../classes/bsv.Transaction-1.md#outputs)

#### Defined in

node_modules/bsv/index.d.ts:900

## Methods

### \_estimateFee

▸ **_estimateFee**(): `number`

#### Returns

`number`

#### Inherited from

[Transaction](../classes/bsv.Transaction-1.md).[_estimateFee](../classes/bsv.Transaction-1.md#_estimatefee)

#### Defined in

node_modules/bsv/index.d.ts:960

___

### \_getUnspentValue

▸ **_getUnspentValue**(): `number`

#### Returns

`number`

#### Inherited from

[Transaction](../classes/bsv.Transaction-1.md).[_getUnspentValue](../classes/bsv.Transaction-1.md#_getunspentvalue)

#### Defined in

node_modules/bsv/index.d.ts:959

___

### addData

▸ **addData**(`value`): [`TransactionResponse`](TransactionResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| `Buffer` |

#### Returns

[`TransactionResponse`](TransactionResponse.md)

#### Inherited from

[Transaction](../classes/bsv.Transaction-1.md).[addData](../classes/bsv.Transaction-1.md#adddata)

#### Defined in

node_modules/bsv/index.d.ts:931

___

### addDummyInput

▸ **addDummyInput**(`script`, `satoshis`): [`TransactionResponse`](TransactionResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `script` | [`Script`](../classes/bsv.Script-1.md) |
| `satoshis` | `number` |

#### Returns

[`TransactionResponse`](TransactionResponse.md)

#### Inherited from

[Transaction](../classes/bsv.Transaction-1.md).[addDummyInput](../classes/bsv.Transaction-1.md#adddummyinput)

#### Defined in

node_modules/bsv/index.d.ts:985

___

### addInput

▸ **addInput**(`input`, `outputScript?`, `satoshis?`): [`TransactionResponse`](TransactionResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`Input`](../classes/bsv.Transaction.Input-1.md) |
| `outputScript?` | `string` \| [`Script`](../classes/bsv.Script-1.md) |
| `satoshis?` | `number` |

#### Returns

[`TransactionResponse`](TransactionResponse.md)

#### Inherited from

[Transaction](../classes/bsv.Transaction-1.md).[addInput](../classes/bsv.Transaction-1.md#addinput)

#### Defined in

node_modules/bsv/index.d.ts:925

___

### addInputFromPrevTx

▸ **addInputFromPrevTx**(`prevTx`, `outputIndex?`): [`TransactionResponse`](TransactionResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `prevTx` | [`Transaction`](../classes/bsv.Transaction-1.md) |
| `outputIndex?` | `number` |

#### Returns

[`TransactionResponse`](TransactionResponse.md)

#### Inherited from

[Transaction](../classes/bsv.Transaction-1.md).[addInputFromPrevTx](../classes/bsv.Transaction-1.md#addinputfromprevtx)

#### Defined in

node_modules/bsv/index.d.ts:984

___

### addOutput

▸ **addOutput**(`output`): [`TransactionResponse`](TransactionResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `output` | [`Output`](../classes/bsv.Transaction.Output.md) |

#### Returns

[`TransactionResponse`](TransactionResponse.md)

#### Inherited from

[Transaction](../classes/bsv.Transaction-1.md).[addOutput](../classes/bsv.Transaction-1.md#addoutput)

#### Defined in

node_modules/bsv/index.d.ts:930

___

### applySignature

▸ **applySignature**(`sig`): [`TransactionResponse`](TransactionResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sig` | `Object` |
| `sig.inputIndex` | `number` |
| `sig.publicKey` | [`PublicKey`](../classes/bsv.PublicKey.md) |
| `sig.signature` | [`Signature`](../classes/bsv.crypto.Signature.md) |
| `sig.sigtype` | `number` |

#### Returns

[`TransactionResponse`](TransactionResponse.md)

#### Inherited from

[Transaction](../classes/bsv.Transaction-1.md).[applySignature](../classes/bsv.Transaction-1.md#applysignature)

#### Defined in

node_modules/bsv/index.d.ts:923

___

### change

▸ **change**(`address`): [`TransactionResponse`](TransactionResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` \| [`Address`](../classes/bsv.Address.md) |

#### Returns

[`TransactionResponse`](TransactionResponse.md)

#### Inherited from

[Transaction](../classes/bsv.Transaction-1.md).[change](../classes/bsv.Transaction-1.md#change)

#### Defined in

node_modules/bsv/index.d.ts:916

___

### checkFeeRate

▸ **checkFeeRate**(`feePerKb?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `feePerKb?` | `number` |

#### Returns

`boolean`

#### Inherited from

[Transaction](../classes/bsv.Transaction-1.md).[checkFeeRate](../classes/bsv.Transaction-1.md#checkfeerate)

#### Defined in

node_modules/bsv/index.d.ts:980

___

### dummyChange

▸ **dummyChange**(): [`TransactionResponse`](TransactionResponse.md)

#### Returns

[`TransactionResponse`](TransactionResponse.md)

#### Inherited from

[Transaction](../classes/bsv.Transaction-1.md).[dummyChange](../classes/bsv.Transaction-1.md#dummychange)

#### Defined in

node_modules/bsv/index.d.ts:986

___

### enableRBF

▸ **enableRBF**(): [`TransactionResponse`](TransactionResponse.md)

#### Returns

[`TransactionResponse`](TransactionResponse.md)

#### Inherited from

[Transaction](../classes/bsv.Transaction-1.md).[enableRBF](../classes/bsv.Transaction-1.md#enablerbf)

#### Defined in

node_modules/bsv/index.d.ts:945

___

### fee

▸ **fee**(`amount`): [`TransactionResponse`](TransactionResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `number` |

#### Returns

[`TransactionResponse`](TransactionResponse.md)

#### Inherited from

[Transaction](../classes/bsv.Transaction-1.md).[fee](../classes/bsv.Transaction-1.md#fee)

#### Defined in

node_modules/bsv/index.d.ts:917

___

### feePerKb

▸ **feePerKb**(`amount`): [`TransactionResponse`](TransactionResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `number` |

#### Returns

[`TransactionResponse`](TransactionResponse.md)

#### Inherited from

[Transaction](../classes/bsv.Transaction-1.md).[feePerKb](../classes/bsv.Transaction-1.md#feeperkb)

#### Defined in

node_modules/bsv/index.d.ts:918

___

### from

▸ **from**(`utxos`): [`TransactionResponse`](TransactionResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `utxos` | [`IUnspentOutput`](bsv.Transaction.IUnspentOutput.md) \| [`IUnspentOutput`](bsv.Transaction.IUnspentOutput.md)[] |

#### Returns

[`TransactionResponse`](TransactionResponse.md)

#### Inherited from

[Transaction](../classes/bsv.Transaction-1.md).[from](../classes/bsv.Transaction-1.md#from)

#### Defined in

node_modules/bsv/index.d.ts:910

___

### fromBuffer

▸ **fromBuffer**(`buffer`): [`TransactionResponse`](TransactionResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `Buffer` |

#### Returns

[`TransactionResponse`](TransactionResponse.md)

#### Inherited from

[Transaction](../classes/bsv.Transaction-1.md).[fromBuffer](../classes/bsv.Transaction-1.md#frombuffer)

#### Defined in

node_modules/bsv/index.d.ts:914

___

### fromString

▸ **fromString**(`rawTxHex`): [`TransactionResponse`](TransactionResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rawTxHex` | `string` |

#### Returns

[`TransactionResponse`](TransactionResponse.md)

#### Inherited from

[Transaction](../classes/bsv.Transaction-1.md).[fromString](../classes/bsv.Transaction-1.md#fromstring)

#### Defined in

node_modules/bsv/index.d.ts:913

___

### getChangeAddress

▸ **getChangeAddress**(): [`Address`](../classes/bsv.Address.md)

#### Returns

[`Address`](../classes/bsv.Address.md)

#### Inherited from

[Transaction](../classes/bsv.Transaction-1.md).[getChangeAddress](../classes/bsv.Transaction-1.md#getchangeaddress)

#### Defined in

node_modules/bsv/index.d.ts:938

___

### getChangeAmount

▸ **getChangeAmount**(): `number`

#### Returns

`number`

#### Inherited from

[Transaction](../classes/bsv.Transaction-1.md).[getChangeAmount](../classes/bsv.Transaction-1.md#getchangeamount)

#### Defined in

node_modules/bsv/index.d.ts:978

___

### getChangeOutput

▸ **getChangeOutput**(): [`Output`](../classes/bsv.Transaction.Output.md)

#### Returns

[`Output`](../classes/bsv.Transaction.Output.md)

#### Inherited from

[Transaction](../classes/bsv.Transaction-1.md).[getChangeOutput](../classes/bsv.Transaction-1.md#getchangeoutput)

#### Defined in

node_modules/bsv/index.d.ts:937

___

### getEstimateFee

▸ **getEstimateFee**(): `number`

#### Returns

`number`

#### Inherited from

[Transaction](../classes/bsv.Transaction-1.md).[getEstimateFee](../classes/bsv.Transaction-1.md#getestimatefee)

#### Defined in

node_modules/bsv/index.d.ts:979

___

### getFee

▸ **getFee**(): `number`

#### Returns

`number`

#### Inherited from

[Transaction](../classes/bsv.Transaction-1.md).[getFee](../classes/bsv.Transaction-1.md#getfee)

#### Defined in

node_modules/bsv/index.d.ts:936

___

### getInputAmount

▸ **getInputAmount**(`inputIndex`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputIndex` | `number` |

#### Returns

`number`

#### Inherited from

[Transaction](../classes/bsv.Transaction-1.md).[getInputAmount](../classes/bsv.Transaction-1.md#getinputamount)

#### Defined in

node_modules/bsv/index.d.ts:1001

___

### getLockTime

▸ **getLockTime**(): `number` \| `Date`

#### Returns

`number` \| `Date`

#### Inherited from

[Transaction](../classes/bsv.Transaction-1.md).[getLockTime](../classes/bsv.Transaction-1.md#getlocktime)

#### Defined in

node_modules/bsv/index.d.ts:939

___

### getOutputAmount

▸ **getOutputAmount**(`outputIndex`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `outputIndex` | `number` |

#### Returns

`number`

#### Inherited from

[Transaction](../classes/bsv.Transaction-1.md).[getOutputAmount](../classes/bsv.Transaction-1.md#getoutputamount)

#### Defined in

node_modules/bsv/index.d.ts:1002

___

### getPreimage

▸ **getPreimage**(`inputIndex`, `sigtype?`, `isLowS?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputIndex` | `number` |
| `sigtype?` | `number` |
| `isLowS?` | `boolean` |

#### Returns

`string`

#### Inherited from

[Transaction](../classes/bsv.Transaction-1.md).[getPreimage](../classes/bsv.Transaction-1.md#getpreimage)

#### Defined in

node_modules/bsv/index.d.ts:983

___

### getSerializationError

▸ **getSerializationError**(`opts?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | `object` |

#### Returns

`any`

#### Inherited from

[Transaction](../classes/bsv.Transaction-1.md).[getSerializationError](../classes/bsv.Transaction-1.md#getserializationerror)

#### Defined in

node_modules/bsv/index.d.ts:957

___

### getSignature

▸ **getSignature**(`inputIndex`, `privateKey?`, `sigtype?`): `string` \| `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputIndex` | `number` |
| `privateKey?` | [`PrivateKey`](../classes/bsv.PrivateKey.md) \| [`PrivateKey`](../classes/bsv.PrivateKey.md)[] |
| `sigtype?` | `number` |

#### Returns

`string` \| `string`[]

#### Inherited from

[Transaction](../classes/bsv.Transaction-1.md).[getSignature](../classes/bsv.Transaction-1.md#getsignature)

#### Defined in

node_modules/bsv/index.d.ts:982

___

### hasWitnesses

▸ **hasWitnesses**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Transaction](../classes/bsv.Transaction-1.md).[hasWitnesses](../classes/bsv.Transaction-1.md#haswitnesses)

#### Defined in

node_modules/bsv/index.d.ts:935

___

### inspect

▸ **inspect**(): `string`

#### Returns

`string`

#### Inherited from

[Transaction](../classes/bsv.Transaction-1.md).[inspect](../classes/bsv.Transaction-1.md#inspect)

#### Defined in

node_modules/bsv/index.d.ts:948

___

### isCoinbase

▸ **isCoinbase**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Transaction](../classes/bsv.Transaction-1.md).[isCoinbase](../classes/bsv.Transaction-1.md#iscoinbase)

#### Defined in

node_modules/bsv/index.d.ts:943

___

### isFullySigned

▸ **isFullySigned**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Transaction](../classes/bsv.Transaction-1.md).[isFullySigned](../classes/bsv.Transaction-1.md#isfullysigned)

#### Defined in

node_modules/bsv/index.d.ts:955

___

### isRBF

▸ **isRBF**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Transaction](../classes/bsv.Transaction-1.md).[isRBF](../classes/bsv.Transaction-1.md#isrbf)

#### Defined in

node_modules/bsv/index.d.ts:946

___

### isSealed

▸ **isSealed**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Transaction](../classes/bsv.Transaction-1.md).[isSealed](../classes/bsv.Transaction-1.md#issealed)

#### Defined in

node_modules/bsv/index.d.ts:977

___

### lockUntilBlockHeight

▸ **lockUntilBlockHeight**(`height`): [`TransactionResponse`](TransactionResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `height` | `number` |

#### Returns

[`TransactionResponse`](TransactionResponse.md)

#### Inherited from

[Transaction](../classes/bsv.Transaction-1.md).[lockUntilBlockHeight](../classes/bsv.Transaction-1.md#lockuntilblockheight)

#### Defined in

node_modules/bsv/index.d.ts:933

___

### lockUntilDate

▸ **lockUntilDate**(`time`): [`TransactionResponse`](TransactionResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `time` | `number` \| `Date` |

#### Returns

[`TransactionResponse`](TransactionResponse.md)

#### Inherited from

[Transaction](../classes/bsv.Transaction-1.md).[lockUntilDate](../classes/bsv.Transaction-1.md#lockuntildate)

#### Defined in

node_modules/bsv/index.d.ts:932

___

### prevouts

▸ **prevouts**(): `string`

#### Returns

`string`

#### Inherited from

[Transaction](../classes/bsv.Transaction-1.md).[prevouts](../classes/bsv.Transaction-1.md#prevouts)

#### Defined in

node_modules/bsv/index.d.ts:981

___

### seal

▸ **seal**(): [`TransactionResponse`](TransactionResponse.md)

#### Returns

[`TransactionResponse`](TransactionResponse.md)

#### Inherited from

[Transaction](../classes/bsv.Transaction-1.md).[seal](../classes/bsv.Transaction-1.md#seal)

#### Defined in

node_modules/bsv/index.d.ts:975

___

### sealAsync

▸ **sealAsync**(): `Promise`<[`TransactionResponse`](TransactionResponse.md)\>

#### Returns

`Promise`<[`TransactionResponse`](TransactionResponse.md)\>

#### Inherited from

[Transaction](../classes/bsv.Transaction-1.md).[sealAsync](../classes/bsv.Transaction-1.md#sealasync)

#### Defined in

node_modules/bsv/index.d.ts:976

___

### serialize

▸ **serialize**(`opts?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | `object` |

#### Returns

`string`

#### Inherited from

[Transaction](../classes/bsv.Transaction-1.md).[serialize](../classes/bsv.Transaction-1.md#serialize)

#### Defined in

node_modules/bsv/index.d.ts:949

___

### setInputScript

▸ **setInputScript**(`inputIndex`, `unlockingScript`): [`TransactionResponse`](TransactionResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputIndex` | `number` \| { `inputIndex`: `number` ; `isLowS?`: `boolean` ; `privateKey?`: [`PrivateKey`](../classes/bsv.PrivateKey.md) \| [`PrivateKey`](../classes/bsv.PrivateKey.md)[] ; `sigtype?`: `number`  } |
| `unlockingScript` | [`Script`](../classes/bsv.Script-1.md) \| (`tx`: [`Transaction`](../classes/bsv.Transaction-1.md), `outputInPrevTx`: [`Output`](../classes/bsv.Transaction.Output.md)) => [`Script`](../classes/bsv.Script-1.md) |

#### Returns

[`TransactionResponse`](TransactionResponse.md)

#### Inherited from

[Transaction](../classes/bsv.Transaction-1.md).[setInputScript](../classes/bsv.Transaction-1.md#setinputscript)

#### Defined in

node_modules/bsv/index.d.ts:962

___

### setInputScriptAsync

▸ **setInputScriptAsync**(`inputIndex`, `callback`): `Promise`<[`TransactionResponse`](TransactionResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputIndex` | `number` \| { `inputIndex`: `number` ; `isLowS?`: `boolean` ; `sigtype?`: `number`  } |
| `callback` | (`tx`: [`Transaction`](../classes/bsv.Transaction-1.md), `outputInPrevTx`: [`Output`](../classes/bsv.Transaction.Output.md)) => `Promise`<[`Script`](../classes/bsv.Script-1.md)\> |

#### Returns

`Promise`<[`TransactionResponse`](TransactionResponse.md)\>

#### Inherited from

[Transaction](../classes/bsv.Transaction-1.md).[setInputScriptAsync](../classes/bsv.Transaction-1.md#setinputscriptasync)

#### Defined in

node_modules/bsv/index.d.ts:968

___

### setInputSequence

▸ **setInputSequence**(`inputIndex`, `sequence`): [`TransactionResponse`](TransactionResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputIndex` | `number` |
| `sequence` | `number` |

#### Returns

[`TransactionResponse`](TransactionResponse.md)

#### Inherited from

[Transaction](../classes/bsv.Transaction-1.md).[setInputSequence](../classes/bsv.Transaction-1.md#setinputsequence)

#### Defined in

node_modules/bsv/index.d.ts:973

___

### setLockTime

▸ **setLockTime**(`t`): [`TransactionResponse`](TransactionResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `number` |

#### Returns

[`TransactionResponse`](TransactionResponse.md)

#### Inherited from

[Transaction](../classes/bsv.Transaction-1.md).[setLockTime](../classes/bsv.Transaction-1.md#setlocktime)

#### Defined in

node_modules/bsv/index.d.ts:940

___

### setOutput

▸ **setOutput**(`outputIndex`, `output`): [`TransactionResponse`](TransactionResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `outputIndex` | `number` |
| `output` | [`Output`](../classes/bsv.Transaction.Output.md) \| (`tx`: [`Transaction`](../classes/bsv.Transaction-1.md)) => [`Output`](../classes/bsv.Transaction.Output.md) |

#### Returns

[`TransactionResponse`](TransactionResponse.md)

#### Inherited from

[Transaction](../classes/bsv.Transaction-1.md).[setOutput](../classes/bsv.Transaction-1.md#setoutput)

#### Defined in

node_modules/bsv/index.d.ts:974

___

### sign

▸ **sign**(`privateKey`, `sigtype?`): [`TransactionResponse`](TransactionResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateKey` | `string` \| `string`[] \| [`PrivateKey`](../classes/bsv.PrivateKey.md) \| [`PrivateKey`](../classes/bsv.PrivateKey.md)[] |
| `sigtype?` | `number` |

#### Returns

[`TransactionResponse`](TransactionResponse.md)

#### Inherited from

[Transaction](../classes/bsv.Transaction-1.md).[sign](../classes/bsv.Transaction-1.md#sign)

#### Defined in

node_modules/bsv/index.d.ts:919

___

### to

▸ **to**(`address`, `amount`): [`TransactionResponse`](TransactionResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` \| [`Address`](../classes/bsv.Address.md) \| [`Address`](../classes/bsv.Address.md)[] |
| `amount` | `number` |

#### Returns

[`TransactionResponse`](TransactionResponse.md)

#### Inherited from

[Transaction](../classes/bsv.Transaction-1.md).[to](../classes/bsv.Transaction-1.md#to)

#### Defined in

node_modules/bsv/index.d.ts:915

___

### toBuffer

▸ **toBuffer**(): `Buffer`

#### Returns

`Buffer`

#### Inherited from

[Transaction](../classes/bsv.Transaction-1.md).[toBuffer](../classes/bsv.Transaction-1.md#tobuffer)

#### Defined in

node_modules/bsv/index.d.ts:953

___

### toObject

▸ **toObject**(): `any`

#### Returns

`any`

#### Inherited from

[Transaction](../classes/bsv.Transaction-1.md).[toObject](../classes/bsv.Transaction-1.md#toobject)

#### Defined in

node_modules/bsv/index.d.ts:952

___

### uncheckedSerialize

▸ **uncheckedSerialize**(): `string`

#### Returns

`string`

#### Inherited from

[Transaction](../classes/bsv.Transaction-1.md).[uncheckedSerialize](../classes/bsv.Transaction-1.md#uncheckedserialize)

#### Defined in

node_modules/bsv/index.d.ts:950

___

### verify

▸ **verify**(): `string` \| ``true``

#### Returns

`string` \| ``true``

#### Inherited from

[Transaction](../classes/bsv.Transaction-1.md).[verify](../classes/bsv.Transaction-1.md#verify)

#### Defined in

node_modules/bsv/index.d.ts:942

___

### verifyInputScript

▸ **verifyInputScript**(`inputIndex`): `Object`

**`Deprecated`**

please use `verifyScript` instead

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputIndex` | `number` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `error` | `string` |
| `failedAt` | `any` |
| `success` | `boolean` |

#### Inherited from

[Transaction](../classes/bsv.Transaction-1.md).[verifyInputScript](../classes/bsv.Transaction-1.md#verifyinputscript)

#### Defined in

node_modules/bsv/index.d.ts:991

___

### verifyScript

▸ **verifyScript**(`inputIndex`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputIndex` | `number` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `error` | `string` |
| `failedAt` | `any` |
| `success` | `boolean` |

#### Inherited from

[Transaction](../classes/bsv.Transaction-1.md).[verifyScript](../classes/bsv.Transaction-1.md#verifyscript)

#### Defined in

node_modules/bsv/index.d.ts:996

___

### verifySignature

▸ **verifySignature**(`sig`, `pubkey`, `nin`, `subscript`, `satoshisBN`, `flags`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sig` | [`Signature`](../classes/bsv.crypto.Signature.md) |
| `pubkey` | [`PublicKey`](../classes/bsv.PublicKey.md) |
| `nin` | `number` |
| `subscript` | [`Script`](../classes/bsv.Script-1.md) |
| `satoshisBN` | [`BN`](../classes/bsv.crypto.BN.md) |
| `flags` | `number` |

#### Returns

`boolean`

#### Inherited from

[Transaction](../classes/bsv.Transaction-1.md).[verifySignature](../classes/bsv.Transaction-1.md#verifysignature)

#### Defined in

node_modules/bsv/index.d.ts:924
