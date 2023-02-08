[scrypt-ts](../README.md) / [bsv](../modules/bsv.md) / [Transaction](../modules/bsv.Transaction.md) / Output

# Class: Output

[bsv](../modules/bsv.md).[Transaction](../modules/bsv.Transaction.md).Output

## Table of contents

### Constructors

- [constructor](bsv.Transaction.Output.md#constructor)

### Properties

- [satoshis](bsv.Transaction.Output.md#satoshis)
- [satoshisBN](bsv.Transaction.Output.md#satoshisbn)
- [script](bsv.Transaction.Output.md#script)
- [spentTxId](bsv.Transaction.Output.md#spenttxid)

### Methods

- [getSize](bsv.Transaction.Output.md#getsize)
- [inspect](bsv.Transaction.Output.md#inspect)
- [setScript](bsv.Transaction.Output.md#setscript)
- [toBufferWriter](bsv.Transaction.Output.md#tobufferwriter)
- [toObject](bsv.Transaction.Output.md#toobject)
- [fromBufferReader](bsv.Transaction.Output.md#frombufferreader)

## Constructors

### constructor

• **new Output**(`data`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Object` |
| `data.satoshis` | `number` |
| `data.script` | [`Script`](bsv.Script-1.md) |

#### Defined in

node_modules/bsv/index.d.ts:361

## Properties

### satoshis

• `Readonly` **satoshis**: `number`

#### Defined in

node_modules/bsv/index.d.ts:358

___

### satoshisBN

• `Readonly` **satoshisBN**: [`BN`](bsv.crypto.BN.md)

#### Defined in

node_modules/bsv/index.d.ts:359

___

### script

• `Readonly` **script**: [`Script`](bsv.Script-1.md)

#### Defined in

node_modules/bsv/index.d.ts:357

___

### spentTxId

• **spentTxId**: `string`

#### Defined in

node_modules/bsv/index.d.ts:360

## Methods

### getSize

▸ **getSize**(): `number`

#### Returns

`number`

#### Defined in

node_modules/bsv/index.d.ts:369

___

### inspect

▸ **inspect**(): `string`

#### Returns

`string`

#### Defined in

node_modules/bsv/index.d.ts:367

___

### setScript

▸ **setScript**(`script`): [`Output`](bsv.Transaction.Output.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `script` | `string` \| `Buffer` \| [`Script`](bsv.Script-1.md) |

#### Returns

[`Output`](bsv.Transaction.Output.md)

#### Defined in

node_modules/bsv/index.d.ts:366

___

### toBufferWriter

▸ **toBufferWriter**(`writer?`): [`BufferWriter`](bsv.encoding.BufferWriter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `writer?` | [`BufferWriter`](bsv.encoding.BufferWriter.md) |

#### Returns

[`BufferWriter`](bsv.encoding.BufferWriter.md)

#### Defined in

node_modules/bsv/index.d.ts:370

___

### toObject

▸ **toObject**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `satoshis` | `number` |
| `script` | `string` |

#### Defined in

node_modules/bsv/index.d.ts:368

___

### fromBufferReader

▸ `Static` **fromBufferReader**(`reader`): [`Output`](bsv.Transaction.Output.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `reader` | [`BufferReader`](bsv.encoding.BufferReader.md) |

#### Returns

[`Output`](bsv.Transaction.Output.md)

#### Defined in

node_modules/bsv/index.d.ts:371
