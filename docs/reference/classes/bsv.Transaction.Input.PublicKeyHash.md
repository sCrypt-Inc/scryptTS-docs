[scrypt-ts](../README.md) / [bsv](../modules/bsv.md) / [Transaction](../modules/bsv.Transaction.md) / [Input](../modules/bsv.Transaction.Input.md) / PublicKeyHash

# Class: PublicKeyHash

[Transaction](../modules/bsv.Transaction.md).[Input](../modules/bsv.Transaction.Input.md).PublicKeyHash

## Hierarchy

- [`Input`](bsv.Transaction.Input-1.md)

  ↳ **`PublicKeyHash`**

## Table of contents

### Constructors

- [constructor](bsv.Transaction.Input.PublicKeyHash.md#constructor)

### Properties

- [output](bsv.Transaction.Input.PublicKeyHash.md#output)
- [outputIndex](bsv.Transaction.Input.PublicKeyHash.md#outputindex)
- [prevTxId](bsv.Transaction.Input.PublicKeyHash.md#prevtxid)
- [script](bsv.Transaction.Input.PublicKeyHash.md#script)
- [sequenceNumber](bsv.Transaction.Input.PublicKeyHash.md#sequencenumber)

### Methods

- [getPreimage](bsv.Transaction.Input.PublicKeyHash.md#getpreimage)
- [getSignatures](bsv.Transaction.Input.PublicKeyHash.md#getsignatures)
- [isValidSignature](bsv.Transaction.Input.PublicKeyHash.md#isvalidsignature)
- [setScript](bsv.Transaction.Input.PublicKeyHash.md#setscript)

## Constructors

### constructor

• **new PublicKeyHash**(`params`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `object` |

#### Inherited from

[Input](bsv.Transaction.Input-1.md).[constructor](bsv.Transaction.Input-1.md#constructor)

#### Defined in

node_modules/bsv/index.d.ts:831

## Properties

### output

• `Optional` **output**: [`Output`](bsv.Transaction.Output.md)

#### Inherited from

[Input](bsv.Transaction.Input-1.md).[output](bsv.Transaction.Input-1.md#output)

#### Defined in

node_modules/bsv/index.d.ts:830

___

### outputIndex

• `Readonly` **outputIndex**: `number`

#### Inherited from

[Input](bsv.Transaction.Input-1.md).[outputIndex](bsv.Transaction.Input-1.md#outputindex)

#### Defined in

node_modules/bsv/index.d.ts:827

___

### prevTxId

• `Readonly` **prevTxId**: `Buffer`

#### Inherited from

[Input](bsv.Transaction.Input-1.md).[prevTxId](bsv.Transaction.Input-1.md#prevtxid)

#### Defined in

node_modules/bsv/index.d.ts:826

___

### script

• `Readonly` **script**: [`Script`](bsv.Script-1.md)

#### Inherited from

[Input](bsv.Transaction.Input-1.md).[script](bsv.Transaction.Input-1.md#script)

#### Defined in

node_modules/bsv/index.d.ts:829

___

### sequenceNumber

• **sequenceNumber**: `number`

#### Inherited from

[Input](bsv.Transaction.Input-1.md).[sequenceNumber](bsv.Transaction.Input-1.md#sequencenumber)

#### Defined in

node_modules/bsv/index.d.ts:828

## Methods

### getPreimage

▸ **getPreimage**(`tx`, `inputIndex`, `sigtype?`, `isLowS?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tx` | [`Transaction`](bsv.Transaction-1.md) |
| `inputIndex` | `number` |
| `sigtype?` | `number` |
| `isLowS?` | `boolean` |

#### Returns

`any`

#### Inherited from

[Input](bsv.Transaction.Input-1.md).[getPreimage](bsv.Transaction.Input-1.md#getpreimage)

#### Defined in

node_modules/bsv/index.d.ts:835

___

### getSignatures

▸ **getSignatures**(`tx`, `privateKey`, `inputIndex`, `sigtype?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tx` | [`Transaction`](bsv.Transaction-1.md) |
| `privateKey` | [`PrivateKey`](bsv.PrivateKey.md) |
| `inputIndex` | `number` |
| `sigtype?` | `number` |

#### Returns

`any`

#### Inherited from

[Input](bsv.Transaction.Input-1.md).[getSignatures](bsv.Transaction.Input-1.md#getsignatures)

#### Defined in

node_modules/bsv/index.d.ts:834

___

### isValidSignature

▸ **isValidSignature**(`tx`, `sig`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tx` | [`Transaction`](bsv.Transaction-1.md) |
| `sig` | `any` |

#### Returns

`boolean`

#### Inherited from

[Input](bsv.Transaction.Input-1.md).[isValidSignature](bsv.Transaction.Input-1.md#isvalidsignature)

#### Defined in

node_modules/bsv/index.d.ts:832

___

### setScript

▸ **setScript**(`script`): [`PublicKeyHash`](bsv.Transaction.Input.PublicKeyHash.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `script` | [`Script`](bsv.Script-1.md) |

#### Returns

[`PublicKeyHash`](bsv.Transaction.Input.PublicKeyHash.md)

#### Inherited from

[Input](bsv.Transaction.Input-1.md).[setScript](bsv.Transaction.Input-1.md#setscript)

#### Defined in

node_modules/bsv/index.d.ts:833
