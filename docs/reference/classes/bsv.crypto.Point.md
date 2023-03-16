[scrypt-ts](../README.md) / [bsv](../modules/bsv.md) / [crypto](../modules/bsv.crypto.md) / Point

# Class: Point

[bsv](../modules/bsv.md).[crypto](../modules/bsv.crypto.md).Point

## Table of contents

### Constructors

- [constructor](bsv.crypto.Point.md#constructor)

### Methods

- [getX](bsv.crypto.Point.md#getx)
- [getY](bsv.crypto.Point.md#gety)
- [mul](bsv.crypto.Point.md#mul)
- [validate](bsv.crypto.Point.md#validate)
- [fromX](bsv.crypto.Point.md#fromx)
- [getG](bsv.crypto.Point.md#getg)
- [getN](bsv.crypto.Point.md#getn)

## Constructors

### constructor

• **new Point**()

## Methods

### getX

▸ **getX**(): [`BN`](bsv.crypto.BN.md)

#### Returns

[`BN`](bsv.crypto.BN.md)

#### Defined in

node_modules/bsv/index.d.ts:307

___

### getY

▸ **getY**(): [`BN`](bsv.crypto.BN.md)

#### Returns

[`BN`](bsv.crypto.BN.md)

#### Defined in

node_modules/bsv/index.d.ts:308

___

### mul

▸ **mul**(`n`): [`Point`](bsv.crypto.Point.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | [`BN`](bsv.crypto.BN.md) |

#### Returns

[`Point`](bsv.crypto.Point.md)

#### Defined in

node_modules/bsv/index.d.ts:310

___

### validate

▸ **validate**(): [`Point`](bsv.crypto.Point.md)

#### Returns

[`Point`](bsv.crypto.Point.md)

#### Defined in

node_modules/bsv/index.d.ts:309

___

### fromX

▸ `Static` **fromX**(`odd`, `x`): [`Point`](bsv.crypto.Point.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `odd` | `boolean` |
| `x` | `string` \| [`BN`](bsv.crypto.BN.md) |

#### Returns

[`Point`](bsv.crypto.Point.md)

#### Defined in

node_modules/bsv/index.d.ts:304

___

### getG

▸ `Static` **getG**(): `any`

#### Returns

`any`

#### Defined in

node_modules/bsv/index.d.ts:305

___

### getN

▸ `Static` **getN**(): [`BN`](bsv.crypto.BN.md)

#### Returns

[`BN`](bsv.crypto.BN.md)

#### Defined in

node_modules/bsv/index.d.ts:306
