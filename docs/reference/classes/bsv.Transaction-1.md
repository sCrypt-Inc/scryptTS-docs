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
- [getChangeAddress](bsv.Transaction-1.md#getchangeaddress)
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
- [verifyScript](bsv.Transaction-1.md#verifyscript)
- [verifySignature](bsv.Transaction-1.md#verifysignature)

## Constructors

### constructor

• **new Transaction**(`raw?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `raw?` | `string` |

#### Defined in

node_modules/bsv/index.d.ts:910

## Properties

### \_estimateSize

• **\_estimateSize**: `number`

#### Defined in

node_modules/bsv/index.d.ts:963

___

### hash

• `Readonly` **hash**: `string`

#### Defined in

node_modules/bsv/index.d.ts:904

___

### id

• `Readonly` **id**: `string`

#### Defined in

node_modules/bsv/index.d.ts:903

___

### inputAmount

• `Readonly` **inputAmount**: `number`

#### Defined in

node_modules/bsv/index.d.ts:905

___

### inputs

• **inputs**: [`Input`](bsv.Transaction.Input-1.md)[]

#### Defined in

node_modules/bsv/index.d.ts:901

___

### nLockTime

• **nLockTime**: `number`

#### Defined in

node_modules/bsv/index.d.ts:908

___

### nid

• **nid**: `string`

#### Defined in

node_modules/bsv/index.d.ts:907

___

### outputAmount

• `Readonly` **outputAmount**: `number`

#### Defined in

node_modules/bsv/index.d.ts:906

___

### outputs

• **outputs**: [`Output`](bsv.Transaction.Output.md)[]

#### Defined in

node_modules/bsv/index.d.ts:902

___

### DUMMY\_PRIVATEKEY

▪ `Static` **DUMMY\_PRIVATEKEY**: [`PrivateKey`](bsv.PrivateKey.md)

#### Defined in

node_modules/bsv/index.d.ts:900

## Methods

### \_estimateFee

```ts
▸ **_estimateFee**(): `number`
```

#### Returns

`number`

#### Defined in

node_modules/bsv/index.d.ts:962

___

### \_getUnspentValue

```ts
▸ **_getUnspentValue**(): `number`
```

#### Returns

`number`

#### Defined in

node_modules/bsv/index.d.ts:961

___

### addData

```ts
▸ **addData**(`value`): [`Transaction`](bsv.Transaction-1.md)
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| `Buffer` |

#### Returns

[`Transaction`](bsv.Transaction-1.md)

#### Defined in

node_modules/bsv/index.d.ts:933

___

### addDummyInput

```ts
▸ **addDummyInput**(`script`, `satoshis`): [`Transaction`](bsv.Transaction-1.md)
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `script` | [`Script`](bsv.Script-1.md) |
| `satoshis` | `number` |

#### Returns

[`Transaction`](bsv.Transaction-1.md)

#### Defined in

node_modules/bsv/index.d.ts:987

___

### addInput

```ts
▸ **addInput**(`input`, `outputScript?`, `satoshis?`): [`Transaction`](bsv.Transaction-1.md)
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`Input`](bsv.Transaction.Input-1.md) |
| `outputScript?` | `string` \| [`Script`](bsv.Script-1.md) |
| `satoshis?` | `number` |

#### Returns

[`Transaction`](bsv.Transaction-1.md)

#### Defined in

node_modules/bsv/index.d.ts:927

___

### addInputFromPrevTx

```ts
▸ **addInputFromPrevTx**(`prevTx`, `outputIndex?`): [`Transaction`](bsv.Transaction-1.md)
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `prevTx` | [`Transaction`](bsv.Transaction-1.md) |
| `outputIndex?` | `number` |

#### Returns

[`Transaction`](bsv.Transaction-1.md)

#### Defined in

node_modules/bsv/index.d.ts:986

___

### addOutput

```ts
▸ **addOutput**(`output`): [`Transaction`](bsv.Transaction-1.md)
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `output` | [`Output`](bsv.Transaction.Output.md) |

#### Returns

[`Transaction`](bsv.Transaction-1.md)

#### Defined in

node_modules/bsv/index.d.ts:932

___

### applySignature

```ts
▸ **applySignature**(`sig`): [`Transaction`](bsv.Transaction-1.md)
```

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

node_modules/bsv/index.d.ts:925

___

### change

```ts
▸ **change**(`address`): [`Transaction`](bsv.Transaction-1.md)
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` \| [`Address`](bsv.Address.md) |

#### Returns

[`Transaction`](bsv.Transaction-1.md)

#### Defined in

node_modules/bsv/index.d.ts:918

___

### checkFeeRate

```ts
▸ **checkFeeRate**(`feePerKb?`): `boolean`
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `feePerKb?` | `number` |

#### Returns

`boolean`

#### Defined in

node_modules/bsv/index.d.ts:982

___

### dummyChange

```ts
▸ **dummyChange**(): [`Transaction`](bsv.Transaction-1.md)
```

#### Returns

[`Transaction`](bsv.Transaction-1.md)

#### Defined in

node_modules/bsv/index.d.ts:988

___

### enableRBF

```ts
▸ **enableRBF**(): [`Transaction`](bsv.Transaction-1.md)
```

#### Returns

[`Transaction`](bsv.Transaction-1.md)

#### Defined in

node_modules/bsv/index.d.ts:947

___

### fee

```ts
▸ **fee**(`amount`): [`Transaction`](bsv.Transaction-1.md)
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `number` |

#### Returns

[`Transaction`](bsv.Transaction-1.md)

#### Defined in

node_modules/bsv/index.d.ts:919

___

### feePerKb

```ts
▸ **feePerKb**(`amount`): [`Transaction`](bsv.Transaction-1.md)
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `number` |

#### Returns

[`Transaction`](bsv.Transaction-1.md)

#### Defined in

node_modules/bsv/index.d.ts:920

___

### from

```ts
▸ **from**(`utxos`): [`Transaction`](bsv.Transaction-1.md)
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `utxos` | [`IUnspentOutput`](../interfaces/bsv.Transaction.IUnspentOutput.md) \| [`IUnspentOutput`](../interfaces/bsv.Transaction.IUnspentOutput.md)[] |

#### Returns

[`Transaction`](bsv.Transaction-1.md)

#### Defined in

node_modules/bsv/index.d.ts:912

___

### fromBuffer

```ts
▸ **fromBuffer**(`buffer`): [`Transaction`](bsv.Transaction-1.md)
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `Buffer` |

#### Returns

[`Transaction`](bsv.Transaction-1.md)

#### Defined in

node_modules/bsv/index.d.ts:916

___

### fromString

```ts
▸ **fromString**(`rawTxHex`): [`Transaction`](bsv.Transaction-1.md)
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `rawTxHex` | `string` |

#### Returns

[`Transaction`](bsv.Transaction-1.md)

#### Defined in

node_modules/bsv/index.d.ts:915

___

### getChangeAddress

```ts
▸ **getChangeAddress**(): [`Address`](bsv.Address.md)
```

#### Returns

[`Address`](bsv.Address.md)

#### Defined in

node_modules/bsv/index.d.ts:940

___

### getChangeAmount

```ts
▸ **getChangeAmount**(): `number`
```

#### Returns

`number`

#### Defined in

node_modules/bsv/index.d.ts:980

___

### getChangeOutput

```ts
▸ **getChangeOutput**(): [`Output`](bsv.Transaction.Output.md)
```

#### Returns

[`Output`](bsv.Transaction.Output.md)

#### Defined in

node_modules/bsv/index.d.ts:939

___

### getEstimateFee

```ts
▸ **getEstimateFee**(): `number`
```

#### Returns

`number`

#### Defined in

node_modules/bsv/index.d.ts:981

___

### getFee

```ts
▸ **getFee**(): `number`
```

#### Returns

`number`

#### Defined in

node_modules/bsv/index.d.ts:938

___

### getInputAmount

```ts
▸ **getInputAmount**(`inputIndex`): `number`
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputIndex` | `number` |

#### Returns

`number`

#### Defined in

node_modules/bsv/index.d.ts:1003

___

### getLockTime

```ts
▸ **getLockTime**(): `number` \| `Date`
```

#### Returns

`number` \| `Date`

#### Defined in

node_modules/bsv/index.d.ts:941

___

### getOutputAmount

```ts
▸ **getOutputAmount**(`outputIndex`): `number`
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `outputIndex` | `number` |

#### Returns

`number`

#### Defined in

node_modules/bsv/index.d.ts:1004

___

### getPreimage

```ts
▸ **getPreimage**(`inputIndex`, `sigtype?`, `isLowS?`): `string`
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputIndex` | `number` |
| `sigtype?` | `number` |
| `isLowS?` | `boolean` |

#### Returns

`string`

#### Defined in

node_modules/bsv/index.d.ts:985

___

### getSerializationError

```ts
▸ **getSerializationError**(`opts?`): `any`
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | `object` |

#### Returns

`any`

#### Defined in

node_modules/bsv/index.d.ts:959

___

### getSignature

```ts
▸ **getSignature**(`inputIndex`, `privateKey?`, `sigtype?`): `string` \| `string`[]
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputIndex` | `number` |
| `privateKey?` | [`PrivateKey`](bsv.PrivateKey.md) \| [`PrivateKey`](bsv.PrivateKey.md)[] |
| `sigtype?` | `number` |

#### Returns

`string` \| `string`[]

#### Defined in

node_modules/bsv/index.d.ts:984

___

### hasWitnesses

```ts
▸ **hasWitnesses**(): `boolean`
```

#### Returns

`boolean`

#### Defined in

node_modules/bsv/index.d.ts:937

___

### inspect

```ts
▸ **inspect**(): `string`
```

#### Returns

`string`

#### Defined in

node_modules/bsv/index.d.ts:950

___

### isCoinbase

```ts
▸ **isCoinbase**(): `boolean`
```

#### Returns

`boolean`

#### Defined in

node_modules/bsv/index.d.ts:945

___

### isFullySigned

```ts
▸ **isFullySigned**(): `boolean`
```

#### Returns

`boolean`

#### Defined in

node_modules/bsv/index.d.ts:957

___

### isRBF

```ts
▸ **isRBF**(): `boolean`
```

#### Returns

`boolean`

#### Defined in

node_modules/bsv/index.d.ts:948

___

### isSealed

```ts
▸ **isSealed**(): `boolean`
```

#### Returns

`boolean`

#### Defined in

node_modules/bsv/index.d.ts:979

___

### lockUntilBlockHeight

```ts
▸ **lockUntilBlockHeight**(`height`): [`Transaction`](bsv.Transaction-1.md)
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `height` | `number` |

#### Returns

[`Transaction`](bsv.Transaction-1.md)

#### Defined in

node_modules/bsv/index.d.ts:935

___

### lockUntilDate

```ts
▸ **lockUntilDate**(`time`): [`Transaction`](bsv.Transaction-1.md)
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `time` | `number` \| `Date` |

#### Returns

[`Transaction`](bsv.Transaction-1.md)

#### Defined in

node_modules/bsv/index.d.ts:934

___

### prevouts

```ts
▸ **prevouts**(): `string`
```

#### Returns

`string`

#### Defined in

node_modules/bsv/index.d.ts:983

___

### seal

```ts
▸ **seal**(): [`Transaction`](bsv.Transaction-1.md)
```

#### Returns

[`Transaction`](bsv.Transaction-1.md)

#### Defined in

node_modules/bsv/index.d.ts:977

___

### sealAsync

```ts
▸ **sealAsync**(): `Promise`<[`Transaction`](bsv.Transaction-1.md)\>
```

#### Returns

```ts
`Promise`<[`Transaction`](bsv.Transaction-1.md)\>
```

#### Defined in

node_modules/bsv/index.d.ts:978

___

### serialize

```ts
▸ **serialize**(`opts?`): `string`
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | `object` |

#### Returns

`string`

#### Defined in

node_modules/bsv/index.d.ts:951

___

### setInputScript

```ts
▸ **setInputScript**(`inputIndex`, `unlockingScript`): [`Transaction`](bsv.Transaction-1.md)
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputIndex` | `number` \| `{ `inputIndex`: `number` ; `isLowS?`: `boolean` ; `privateKey?`: [`PrivateKey`](bsv.PrivateKey.md) \| [`PrivateKey`](bsv.PrivateKey.md)[] ; `sigtype?`: `number`  }` |
| `unlockingScript` | [`Script`](bsv.Script-1.md) \| (`tx`: [`Transaction`](bsv.Transaction-1.md), `outputInPrevTx`: [`Output`](bsv.Transaction.Output.md)) => [`Script`](bsv.Script-1.md) |

#### Returns

[`Transaction`](bsv.Transaction-1.md)

#### Defined in

node_modules/bsv/index.d.ts:964

___

### setInputScriptAsync

```ts
▸ **setInputScriptAsync**(`inputIndex`, `callback`): `Promise`<[`Transaction`](bsv.Transaction-1.md)\>
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputIndex` | `number` \| `{ `inputIndex`: `number` ; `isLowS?`: `boolean` ; `sigtype?`: `number`  }` |
| `callback` | (`tx`: `[`Transaction`](bsv.Transaction-1.md), `outputInPrevTx`: [`Output`](bsv.Transaction.Output.md)) => `Promise`<[`Script`](bsv.Script-1.md)\>` |

#### Returns

```ts
`Promise`<[`Transaction`](bsv.Transaction-1.md)\>
```

#### Defined in

node_modules/bsv/index.d.ts:970

___

### setInputSequence

```ts
▸ **setInputSequence**(`inputIndex`, `sequence`): [`Transaction`](bsv.Transaction-1.md)
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputIndex` | `number` |
| `sequence` | `number` |

#### Returns

[`Transaction`](bsv.Transaction-1.md)

#### Defined in

node_modules/bsv/index.d.ts:975

___

### setLockTime

```ts
▸ **setLockTime**(`t`): [`Transaction`](bsv.Transaction-1.md)
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `number` |

#### Returns

[`Transaction`](bsv.Transaction-1.md)

#### Defined in

node_modules/bsv/index.d.ts:942

___

### setOutput

```ts
▸ **setOutput**(`outputIndex`, `output`): [`Transaction`](bsv.Transaction-1.md)
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `outputIndex` | `number` |
| `output` | [`Output`](bsv.Transaction.Output.md) \| (`tx`: [`Transaction`](bsv.Transaction-1.md)) => [`Output`](bsv.Transaction.Output.md) |

#### Returns

[`Transaction`](bsv.Transaction-1.md)

#### Defined in

node_modules/bsv/index.d.ts:976

___

### sign

```ts
▸ **sign**(`privateKey`, `sigtype?`): [`Transaction`](bsv.Transaction-1.md)
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateKey` | `string` \| `string`[] \| [`PrivateKey`](bsv.PrivateKey.md) \| [`PrivateKey`](bsv.PrivateKey.md)[] |
| `sigtype?` | `number` |

#### Returns

[`Transaction`](bsv.Transaction-1.md)

#### Defined in

node_modules/bsv/index.d.ts:921

___

### to

```ts
▸ **to**(`address`, `amount`): [`Transaction`](bsv.Transaction-1.md)
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` \| [`Address`](bsv.Address.md) \| [`Address`](bsv.Address.md)[] |
| `amount` | `number` |

#### Returns

[`Transaction`](bsv.Transaction-1.md)

#### Defined in

node_modules/bsv/index.d.ts:917

___

### toBuffer

```ts
▸ **toBuffer**(): `Buffer`
```

#### Returns

`Buffer`

#### Defined in

node_modules/bsv/index.d.ts:955

___

### toObject

```ts
▸ **toObject**(): `any`
```

#### Returns

`any`

#### Defined in

node_modules/bsv/index.d.ts:954

___

### uncheckedSerialize

```ts
▸ **uncheckedSerialize**(): `string`
```

#### Returns

`string`

#### Defined in

node_modules/bsv/index.d.ts:952

___

### verify

```ts
▸ **verify**(): `string` \| ``true``
```

#### Returns

`string` \| ``true``

#### Defined in

node_modules/bsv/index.d.ts:944

___

### verifyInputScript

```ts
▸ **verifyInputScript**(`inputIndex`): `Object`
```

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

#### Defined in

node_modules/bsv/index.d.ts:993

___

### verifyScript

```ts
▸ **verifyScript**(`inputIndex`): `Object`
```

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

node_modules/bsv/index.d.ts:998

___

### verifySignature

```ts
▸ **verifySignature**(`sig`, `pubkey`, `nin`, `subscript`, `satoshisBN`, `flags`): `boolean`
```

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

node_modules/bsv/index.d.ts:926
