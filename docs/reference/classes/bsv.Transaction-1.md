[scrypt-ts](../README.md) / [bsv](../modules/bsv.md) / Transaction

# Class: Transaction

[bsv](../modules/bsv.md).Transaction

## Hierarchy

- **`Transaction`**

  ↳ [`TransactionResponse`](../interfaces/TransactionResponse.md)

## Table of contents

### Constructors

- [constructor](bsv.Transaction-1.md#constructor)

### Properties

- [\_estimateSize](bsv.Transaction-1.md#_estimatesize)
- [hash](bsv.Transaction-1.md#hash)
- [id](bsv.Transaction-1.md#id)
- [inputAmount](bsv.Transaction-1.md#inputamount)
- [inputs](bsv.Transaction-1.md#inputs)
- [nLockTime](bsv.Transaction-1.md#nlocktime)
- [nid](bsv.Transaction-1.md#nid)
- [outputAmount](bsv.Transaction-1.md#outputamount)
- [outputs](bsv.Transaction-1.md#outputs)
- [DUMMY\_PRIVATEKEY](bsv.Transaction-1.md#dummy_privatekey)

### Methods

- [\_estimateFee](bsv.Transaction-1.md#_estimatefee)
- [\_getUnspentValue](bsv.Transaction-1.md#_getunspentvalue)
- [addData](bsv.Transaction-1.md#adddata)
- [addDummyInput](bsv.Transaction-1.md#adddummyinput)
- [addInput](bsv.Transaction-1.md#addinput)
- [addInputFromPrevTx](bsv.Transaction-1.md#addinputfromprevtx)
- [addOutput](bsv.Transaction-1.md#addoutput)
- [applySignature](bsv.Transaction-1.md#applysignature)
- [change](bsv.Transaction-1.md#change)
- [checkFeeRate](bsv.Transaction-1.md#checkfeerate)
- [dummyChange](bsv.Transaction-1.md#dummychange)
- [enableRBF](bsv.Transaction-1.md#enablerbf)
- [fee](bsv.Transaction-1.md#fee)
- [feePerKb](bsv.Transaction-1.md#feeperkb)
- [from](bsv.Transaction-1.md#from)
- [fromBuffer](bsv.Transaction-1.md#frombuffer)
- [fromString](bsv.Transaction-1.md#fromstring)
- [getChangeAmount](bsv.Transaction-1.md#getchangeamount)
- [getChangeOutput](bsv.Transaction-1.md#getchangeoutput)
- [getEstimateFee](bsv.Transaction-1.md#getestimatefee)
- [getFee](bsv.Transaction-1.md#getfee)
- [getInputAmount](bsv.Transaction-1.md#getinputamount)
- [getLockTime](bsv.Transaction-1.md#getlocktime)
- [getOutputAmount](bsv.Transaction-1.md#getoutputamount)
- [getPreimage](bsv.Transaction-1.md#getpreimage)
- [getSerializationError](bsv.Transaction-1.md#getserializationerror)
- [getSignature](bsv.Transaction-1.md#getsignature)
- [hasWitnesses](bsv.Transaction-1.md#haswitnesses)
- [inspect](bsv.Transaction-1.md#inspect)
- [isCoinbase](bsv.Transaction-1.md#iscoinbase)
- [isFullySigned](bsv.Transaction-1.md#isfullysigned)
- [isRBF](bsv.Transaction-1.md#isrbf)
- [isSealed](bsv.Transaction-1.md#issealed)
- [lockUntilBlockHeight](bsv.Transaction-1.md#lockuntilblockheight)
- [lockUntilDate](bsv.Transaction-1.md#lockuntildate)
- [prevouts](bsv.Transaction-1.md#prevouts)
- [seal](bsv.Transaction-1.md#seal)
- [sealAsync](bsv.Transaction-1.md#sealasync)
- [serialize](bsv.Transaction-1.md#serialize)
- [setInputScript](bsv.Transaction-1.md#setinputscript)
- [setInputScriptAsync](bsv.Transaction-1.md#setinputscriptasync)
- [setInputSequence](bsv.Transaction-1.md#setinputsequence)
- [setLockTime](bsv.Transaction-1.md#setlocktime)
- [setOutput](bsv.Transaction-1.md#setoutput)
- [sign](bsv.Transaction-1.md#sign)
- [to](bsv.Transaction-1.md#to)
- [toBuffer](bsv.Transaction-1.md#tobuffer)
- [toObject](bsv.Transaction-1.md#toobject)
- [uncheckedSerialize](bsv.Transaction-1.md#uncheckedserialize)
- [verify](bsv.Transaction-1.md#verify)
- [verifyInputScript](bsv.Transaction-1.md#verifyinputscript)
- [verifySignature](bsv.Transaction-1.md#verifysignature)

## Constructors

### constructor

• **new Transaction**(`raw?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `raw?` | `string` |

#### Defined in

node_modules/bsv/index.d.ts:457

## Properties

### \_estimateSize

• **\_estimateSize**: `number`

#### Defined in

node_modules/bsv/index.d.ts:509

___

### hash

• `Readonly` **hash**: `string`

#### Defined in

node_modules/bsv/index.d.ts:451

___

### id

• `Readonly` **id**: `string`

#### Defined in

node_modules/bsv/index.d.ts:450

___

### inputAmount

• `Readonly` **inputAmount**: `number`

#### Defined in

node_modules/bsv/index.d.ts:452

___

### inputs

• **inputs**: [`Input`](bsv.Transaction.Input-1.md)[]

#### Defined in

node_modules/bsv/index.d.ts:448

___

### nLockTime

• **nLockTime**: `number`

#### Defined in

node_modules/bsv/index.d.ts:455

___

### nid

• **nid**: `string`

#### Defined in

node_modules/bsv/index.d.ts:454

___

### outputAmount

• `Readonly` **outputAmount**: `number`

#### Defined in

node_modules/bsv/index.d.ts:453

___

### outputs

• **outputs**: [`Output`](bsv.Transaction.Output.md)[]

#### Defined in

node_modules/bsv/index.d.ts:449

___

### DUMMY\_PRIVATEKEY

▪ `Static` **DUMMY\_PRIVATEKEY**: [`PrivateKey`](bsv.PrivateKey.md)

#### Defined in

node_modules/bsv/index.d.ts:447

## Methods

### \_estimateFee

▸ **_estimateFee**(): `number`

#### Returns

`number`

#### Defined in

node_modules/bsv/index.d.ts:508

___

### \_getUnspentValue

▸ **_getUnspentValue**(): `number`

#### Returns

`number`

#### Defined in

node_modules/bsv/index.d.ts:507

___

### addData

▸ **addData**(`value`): [`Transaction`](bsv.Transaction-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| `Buffer` |

#### Returns

[`Transaction`](bsv.Transaction-1.md)

#### Defined in

node_modules/bsv/index.d.ts:480

___

### addDummyInput

▸ **addDummyInput**(`script`, `satoshis`): [`Transaction`](bsv.Transaction-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `script` | [`Script`](bsv.Script-1.md) |
| `satoshis` | `number` |

#### Returns

[`Transaction`](bsv.Transaction-1.md)

#### Defined in

node_modules/bsv/index.d.ts:533

___

### addInput

▸ **addInput**(`input`, `outputScript?`, `satoshis?`): [`Transaction`](bsv.Transaction-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`Input`](bsv.Transaction.Input-1.md) |
| `outputScript?` | `string` \| [`Script`](bsv.Script-1.md) |
| `satoshis?` | `number` |

#### Returns

[`Transaction`](bsv.Transaction-1.md)

#### Defined in

node_modules/bsv/index.d.ts:474

___

### addInputFromPrevTx

▸ **addInputFromPrevTx**(`prevTx`, `outputIndex?`): [`Transaction`](bsv.Transaction-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `prevTx` | [`Transaction`](bsv.Transaction-1.md) |
| `outputIndex?` | `number` |

#### Returns

[`Transaction`](bsv.Transaction-1.md)

#### Defined in

node_modules/bsv/index.d.ts:532

___

### addOutput

▸ **addOutput**(`output`): [`Transaction`](bsv.Transaction-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `output` | [`Output`](bsv.Transaction.Output.md) |

#### Returns

[`Transaction`](bsv.Transaction-1.md)

#### Defined in

node_modules/bsv/index.d.ts:479

___

### applySignature

▸ **applySignature**(`sig`): [`Transaction`](bsv.Transaction-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sig` | `Object` |
| `sig.inputIndex` | `number` |
| `sig.publicKey` | [`PublicKey`](bsv.PublicKey.md) |
| `sig.signature` | [`Signature`](bsv.crypto.Signature.md) |
| `sig.sigtype` | `number` |

#### Returns

[`Transaction`](bsv.Transaction-1.md)

#### Defined in

node_modules/bsv/index.d.ts:472

___

### change

▸ **change**(`address`): [`Transaction`](bsv.Transaction-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` \| [`Address`](bsv.Address.md) |

#### Returns

[`Transaction`](bsv.Transaction-1.md)

#### Defined in

node_modules/bsv/index.d.ts:465

___

### checkFeeRate

▸ **checkFeeRate**(`feePerKb?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `feePerKb?` | `number` |

#### Returns

`boolean`

#### Defined in

node_modules/bsv/index.d.ts:528

___

### dummyChange

▸ **dummyChange**(): [`Transaction`](bsv.Transaction-1.md)

#### Returns

[`Transaction`](bsv.Transaction-1.md)

#### Defined in

node_modules/bsv/index.d.ts:534

___

### enableRBF

▸ **enableRBF**(): [`Transaction`](bsv.Transaction-1.md)

#### Returns

[`Transaction`](bsv.Transaction-1.md)

#### Defined in

node_modules/bsv/index.d.ts:493

___

### fee

▸ **fee**(`amount`): [`Transaction`](bsv.Transaction-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `number` |

#### Returns

[`Transaction`](bsv.Transaction-1.md)

#### Defined in

node_modules/bsv/index.d.ts:466

___

### feePerKb

▸ **feePerKb**(`amount`): [`Transaction`](bsv.Transaction-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `number` |

#### Returns

[`Transaction`](bsv.Transaction-1.md)

#### Defined in

node_modules/bsv/index.d.ts:467

___

### from

▸ **from**(`utxos`): [`Transaction`](bsv.Transaction-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `utxos` | [`IUnspentOutput`](../interfaces/bsv.Transaction.IUnspentOutput.md) \| [`IUnspentOutput`](../interfaces/bsv.Transaction.IUnspentOutput.md)[] |

#### Returns

[`Transaction`](bsv.Transaction-1.md)

#### Defined in

node_modules/bsv/index.d.ts:459

___

### fromBuffer

▸ **fromBuffer**(`buffer`): [`Transaction`](bsv.Transaction-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `Buffer` |

#### Returns

[`Transaction`](bsv.Transaction-1.md)

#### Defined in

node_modules/bsv/index.d.ts:463

___

### fromString

▸ **fromString**(`rawTxHex`): [`Transaction`](bsv.Transaction-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rawTxHex` | `string` |

#### Returns

[`Transaction`](bsv.Transaction-1.md)

#### Defined in

node_modules/bsv/index.d.ts:462

___

### getChangeAmount

▸ **getChangeAmount**(): `number`

#### Returns

`number`

#### Defined in

node_modules/bsv/index.d.ts:526

___

### getChangeOutput

▸ **getChangeOutput**(): [`Output`](bsv.Transaction.Output.md)

#### Returns

[`Output`](bsv.Transaction.Output.md)

#### Defined in

node_modules/bsv/index.d.ts:486

___

### getEstimateFee

▸ **getEstimateFee**(): `number`

#### Returns

`number`

#### Defined in

node_modules/bsv/index.d.ts:527

___

### getFee

▸ **getFee**(): `number`

#### Returns

`number`

#### Defined in

node_modules/bsv/index.d.ts:485

___

### getInputAmount

▸ **getInputAmount**(`inputIndex`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputIndex` | `number` |

#### Returns

`number`

#### Defined in

node_modules/bsv/index.d.ts:540

___

### getLockTime

▸ **getLockTime**(): `number` \| `Date`

#### Returns

`number` \| `Date`

#### Defined in

node_modules/bsv/index.d.ts:487

___

### getOutputAmount

▸ **getOutputAmount**(`outputIndex`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `outputIndex` | `number` |

#### Returns

`number`

#### Defined in

node_modules/bsv/index.d.ts:541

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

#### Defined in

node_modules/bsv/index.d.ts:531

___

### getSerializationError

▸ **getSerializationError**(`opts?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | `object` |

#### Returns

`any`

#### Defined in

node_modules/bsv/index.d.ts:505

___

### getSignature

▸ **getSignature**(`inputIndex`, `privateKey?`, `sigtype?`): `string` \| `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputIndex` | `number` |
| `privateKey?` | [`PrivateKey`](bsv.PrivateKey.md) \| [`PrivateKey`](bsv.PrivateKey.md)[] |
| `sigtype?` | `number` |

#### Returns

`string` \| `string`[]

#### Defined in

node_modules/bsv/index.d.ts:530

___

### hasWitnesses

▸ **hasWitnesses**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/bsv/index.d.ts:484

___

### inspect

▸ **inspect**(): `string`

#### Returns

`string`

#### Defined in

node_modules/bsv/index.d.ts:496

___

### isCoinbase

▸ **isCoinbase**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/bsv/index.d.ts:491

___

### isFullySigned

▸ **isFullySigned**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/bsv/index.d.ts:503

___

### isRBF

▸ **isRBF**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/bsv/index.d.ts:494

___

### isSealed

▸ **isSealed**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/bsv/index.d.ts:525

___

### lockUntilBlockHeight

▸ **lockUntilBlockHeight**(`height`): [`Transaction`](bsv.Transaction-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `height` | `number` |

#### Returns

[`Transaction`](bsv.Transaction-1.md)

#### Defined in

node_modules/bsv/index.d.ts:482

___

### lockUntilDate

▸ **lockUntilDate**(`time`): [`Transaction`](bsv.Transaction-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `time` | `number` \| `Date` |

#### Returns

[`Transaction`](bsv.Transaction-1.md)

#### Defined in

node_modules/bsv/index.d.ts:481

___

### prevouts

▸ **prevouts**(): `string`

#### Returns

`string`

#### Defined in

node_modules/bsv/index.d.ts:529

___

### seal

▸ **seal**(): [`Transaction`](bsv.Transaction-1.md)

#### Returns

[`Transaction`](bsv.Transaction-1.md)

#### Defined in

node_modules/bsv/index.d.ts:523

___

### sealAsync

▸ **sealAsync**(): `Promise`<[`Transaction`](bsv.Transaction-1.md)\>

#### Returns

`Promise`<[`Transaction`](bsv.Transaction-1.md)\>

#### Defined in

node_modules/bsv/index.d.ts:524

___

### serialize

▸ **serialize**(`opts?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | `object` |

#### Returns

`string`

#### Defined in

node_modules/bsv/index.d.ts:497

___

### setInputScript

▸ **setInputScript**(`inputIndex`, `unlockingScript`): [`Transaction`](bsv.Transaction-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputIndex` | `number` \| { `inputIndex`: `number` ; `isLowS?`: `boolean` ; `privateKey?`: [`PrivateKey`](bsv.PrivateKey.md) \| [`PrivateKey`](bsv.PrivateKey.md)[] ; `sigtype?`: `number`  } |
| `unlockingScript` | [`Script`](bsv.Script-1.md) \| (`tx`: [`Transaction`](bsv.Transaction-1.md), `outputInPrevTx`: [`Output`](bsv.Transaction.Output.md)) => [`Script`](bsv.Script-1.md) |

#### Returns

[`Transaction`](bsv.Transaction-1.md)

#### Defined in

node_modules/bsv/index.d.ts:510

___

### setInputScriptAsync

▸ **setInputScriptAsync**(`inputIndex`, `callback`): `Promise`<[`Transaction`](bsv.Transaction-1.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputIndex` | `number` \| { `inputIndex`: `number` ; `isLowS?`: `boolean` ; `sigtype?`: `number`  } |
| `callback` | (`tx`: [`Transaction`](bsv.Transaction-1.md), `outputInPrevTx`: [`Output`](bsv.Transaction.Output.md)) => `Promise`<[`Script`](bsv.Script-1.md)\> |

#### Returns

`Promise`<[`Transaction`](bsv.Transaction-1.md)\>

#### Defined in

node_modules/bsv/index.d.ts:516

___

### setInputSequence

▸ **setInputSequence**(`inputIndex`, `sequence`): [`Transaction`](bsv.Transaction-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputIndex` | `number` |
| `sequence` | `number` |

#### Returns

[`Transaction`](bsv.Transaction-1.md)

#### Defined in

node_modules/bsv/index.d.ts:521

___

### setLockTime

▸ **setLockTime**(`t`): [`Transaction`](bsv.Transaction-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `number` |

#### Returns

[`Transaction`](bsv.Transaction-1.md)

#### Defined in

node_modules/bsv/index.d.ts:488

___

### setOutput

▸ **setOutput**(`outputIndex`, `output`): [`Transaction`](bsv.Transaction-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `outputIndex` | `number` |
| `output` | [`Output`](bsv.Transaction.Output.md) \| (`tx`: [`Transaction`](bsv.Transaction-1.md)) => [`Output`](bsv.Transaction.Output.md) |

#### Returns

[`Transaction`](bsv.Transaction-1.md)

#### Defined in

node_modules/bsv/index.d.ts:522

___

### sign

▸ **sign**(`privateKey`, `sigtype?`): [`Transaction`](bsv.Transaction-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateKey` | `string` \| `string`[] \| [`PrivateKey`](bsv.PrivateKey.md) \| [`PrivateKey`](bsv.PrivateKey.md)[] |
| `sigtype?` | `number` |

#### Returns

[`Transaction`](bsv.Transaction-1.md)

#### Defined in

node_modules/bsv/index.d.ts:468

___

### to

▸ **to**(`address`, `amount`): [`Transaction`](bsv.Transaction-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` \| [`Address`](bsv.Address.md) \| [`Address`](bsv.Address.md)[] |
| `amount` | `number` |

#### Returns

[`Transaction`](bsv.Transaction-1.md)

#### Defined in

node_modules/bsv/index.d.ts:464

___

### toBuffer

▸ **toBuffer**(): `Buffer`

#### Returns

`Buffer`

#### Defined in

node_modules/bsv/index.d.ts:501

___

### toObject

▸ **toObject**(): `any`

#### Returns

`any`

#### Defined in

node_modules/bsv/index.d.ts:500

___

### uncheckedSerialize

▸ **uncheckedSerialize**(): `string`

#### Returns

`string`

#### Defined in

node_modules/bsv/index.d.ts:498

___

### verify

▸ **verify**(): `string` \| ``true``

#### Returns

`string` \| ``true``

#### Defined in

node_modules/bsv/index.d.ts:490

___

### verifyInputScript

▸ **verifyInputScript**(`inputIndex`): `Object`

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

#### Defined in

node_modules/bsv/index.d.ts:535

___

### verifySignature

▸ **verifySignature**(`sig`, `pubkey`, `nin`, `subscript`, `satoshisBN`, `flags`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sig` | [`Signature`](bsv.crypto.Signature.md) |
| `pubkey` | [`PublicKey`](bsv.PublicKey.md) |
| `nin` | `number` |
| `subscript` | [`Script`](bsv.Script-1.md) |
| `satoshisBN` | [`BN`](bsv.crypto.BN.md) |
| `flags` | `number` |

#### Returns

`boolean`

#### Defined in

node_modules/bsv/index.d.ts:473
