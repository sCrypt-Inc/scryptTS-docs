[scrypt-ts](../README.md) / [bsv](../modules/bsv.md) / [Transaction](../modules/bsv.Transaction.md) / Input

# Class: Input

[bsv](../modules/bsv.md).[Transaction](../modules/bsv.Transaction.md).Input

## Hierarchy

- **`Input`**

  ↳ [`PublicKeyHash`](bsv.Transaction.Input.PublicKeyHash.md)

## Table of contents

### Constructors

- [constructor](bsv.Transaction.Input-1.md#constructor)

### Properties

- [output](bsv.Transaction.Input-1.md#output)
- [outputIndex](bsv.Transaction.Input-1.md#outputindex)
- [prevTxId](bsv.Transaction.Input-1.md#prevtxid)
- [script](bsv.Transaction.Input-1.md#script)
- [sequenceNumber](bsv.Transaction.Input-1.md#sequencenumber)

### Methods

- [getPreimage](bsv.Transaction.Input-1.md#getpreimage)
- [getSignatures](bsv.Transaction.Input-1.md#getsignatures)
- [isValidSignature](bsv.Transaction.Input-1.md#isvalidsignature)
- [setScript](bsv.Transaction.Input-1.md#setscript)

## Constructors

### constructor

• **new Input**(`params`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `object` |

#### Defined in

node_modules/bsv/index.d.ts:831

## Properties

### output

• `Optional` **output**: [`Output`](bsv.Transaction.Output.md)

#### Defined in

node_modules/bsv/index.d.ts:830

___

### outputIndex

• `Readonly` **outputIndex**: `number`

#### Defined in

node_modules/bsv/index.d.ts:827

___

### prevTxId

• `Readonly` **prevTxId**: `Buffer`

#### Defined in

node_modules/bsv/index.d.ts:826

___

### script

• `Readonly` **script**: [`Script`](bsv.Script-1.md)

#### Defined in

node_modules/bsv/index.d.ts:829

___

### sequenceNumber

• **sequenceNumber**: `number`

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

#### Defined in

node_modules/bsv/index.d.ts:832

___

### setScript

▸ **setScript**(`script`): [`Input`](bsv.Transaction.Input-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `script` | [`Script`](bsv.Script-1.md) |

#### Returns

[`Input`](bsv.Transaction.Input-1.md)

#### Defined in

node_modules/bsv/index.d.ts:833
