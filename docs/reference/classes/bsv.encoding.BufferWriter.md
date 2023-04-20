[scrypt-ts](../README.md) / [bsv](../modules/bsv.md) / [encoding](../modules/bsv.encoding.md) / BufferWriter

# Class: BufferWriter

[bsv](../modules/bsv.md).[encoding](../modules/bsv.encoding.md).BufferWriter

## Table of contents

### Constructors

- [constructor](bsv.encoding.BufferWriter.md#constructor)

### Methods

- [toBuffer](bsv.encoding.BufferWriter.md#tobuffer)
- [write](bsv.encoding.BufferWriter.md#write)
- [writeInt32LE](bsv.encoding.BufferWriter.md#writeint32le)
- [writeReverse](bsv.encoding.BufferWriter.md#writereverse)
- [writeUInt16BE](bsv.encoding.BufferWriter.md#writeuint16be)
- [writeUInt16LE](bsv.encoding.BufferWriter.md#writeuint16le)
- [writeUInt32BE](bsv.encoding.BufferWriter.md#writeuint32be)
- [writeUInt32LE](bsv.encoding.BufferWriter.md#writeuint32le)
- [writeUInt64BEBN](bsv.encoding.BufferWriter.md#writeuint64bebn)
- [writeUInt64LEBN](bsv.encoding.BufferWriter.md#writeuint64lebn)
- [writeUInt8](bsv.encoding.BufferWriter.md#writeuint8)
- [writeVarintBN](bsv.encoding.BufferWriter.md#writevarintbn)
- [writeVarintNum](bsv.encoding.BufferWriter.md#writevarintnum)

## Constructors

### constructor

• **new BufferWriter**()

## Methods

### toBuffer

▸ **toBuffer**(): `Buffer`

#### Returns

`Buffer`

#### Defined in

node_modules/bsv/index.d.ts:644

___

### write

▸ **write**(`buf`): [`BufferWriter`](bsv.encoding.BufferWriter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | `Buffer` |

#### Returns

[`BufferWriter`](bsv.encoding.BufferWriter.md)

#### Defined in

node_modules/bsv/index.d.ts:632

___

### writeInt32LE

▸ **writeInt32LE**(`n`): [`BufferWriter`](bsv.encoding.BufferWriter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`BufferWriter`](bsv.encoding.BufferWriter.md)

#### Defined in

node_modules/bsv/index.d.ts:638

___

### writeReverse

▸ **writeReverse**(`buf`): [`BufferWriter`](bsv.encoding.BufferWriter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | `Buffer` |

#### Returns

[`BufferWriter`](bsv.encoding.BufferWriter.md)

#### Defined in

node_modules/bsv/index.d.ts:643

___

### writeUInt16BE

▸ **writeUInt16BE**(`n`): [`BufferWriter`](bsv.encoding.BufferWriter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`BufferWriter`](bsv.encoding.BufferWriter.md)

#### Defined in

node_modules/bsv/index.d.ts:634

___

### writeUInt16LE

▸ **writeUInt16LE**(`n`): [`BufferWriter`](bsv.encoding.BufferWriter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`BufferWriter`](bsv.encoding.BufferWriter.md)

#### Defined in

node_modules/bsv/index.d.ts:635

___

### writeUInt32BE

▸ **writeUInt32BE**(`n`): [`BufferWriter`](bsv.encoding.BufferWriter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`BufferWriter`](bsv.encoding.BufferWriter.md)

#### Defined in

node_modules/bsv/index.d.ts:636

___

### writeUInt32LE

▸ **writeUInt32LE**(`n`): [`BufferWriter`](bsv.encoding.BufferWriter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`BufferWriter`](bsv.encoding.BufferWriter.md)

#### Defined in

node_modules/bsv/index.d.ts:637

___

### writeUInt64BEBN

▸ **writeUInt64BEBN**(`n`): [`BufferWriter`](bsv.encoding.BufferWriter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`BufferWriter`](bsv.encoding.BufferWriter.md)

#### Defined in

node_modules/bsv/index.d.ts:639

___

### writeUInt64LEBN

▸ **writeUInt64LEBN**(`n`): [`BufferWriter`](bsv.encoding.BufferWriter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`BufferWriter`](bsv.encoding.BufferWriter.md)

#### Defined in

node_modules/bsv/index.d.ts:640

___

### writeUInt8

▸ **writeUInt8**(`n`): [`BufferWriter`](bsv.encoding.BufferWriter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`BufferWriter`](bsv.encoding.BufferWriter.md)

#### Defined in

node_modules/bsv/index.d.ts:633

___

### writeVarintBN

▸ **writeVarintBN**(`n`): [`BufferWriter`](bsv.encoding.BufferWriter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | [`BN`](bsv.crypto.BN.md) |

#### Returns

[`BufferWriter`](bsv.encoding.BufferWriter.md)

#### Defined in

node_modules/bsv/index.d.ts:642

___

### writeVarintNum

▸ **writeVarintNum**(`n`): [`BufferWriter`](bsv.encoding.BufferWriter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`BufferWriter`](bsv.encoding.BufferWriter.md)

#### Defined in

node_modules/bsv/index.d.ts:641
