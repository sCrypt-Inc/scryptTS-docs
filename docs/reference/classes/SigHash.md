[scrypt-ts](../README.md) / SigHash

# Class: SigHash

## Table of contents

### Constructors

- [constructor](SigHash.md#constructor)

### Properties

- [ALL\_FORKID](SigHash.md#all_forkid)
- [ANYONECANPAY\_ALL\_FORKID](SigHash.md#anyonecanpay_all_forkid)
- [ANYONECANPAY\_NONE\_FORKID](SigHash.md#anyonecanpay_none_forkid)
- [ANYONECANPAY\_SINGLE\_FORKID](SigHash.md#anyonecanpay_single_forkid)
- [NONE\_FORKID](SigHash.md#none_forkid)
- [SINGLE\_FORKID](SigHash.md#single_forkid)

### Methods

- [hashOutputs](SigHash.md#hashoutputs)
- [hashPrevouts](SigHash.md#hashprevouts)
- [hashSequence](SigHash.md#hashsequence)
- [nLocktime](SigHash.md#nlocktime)
- [nLocktimeRaw](SigHash.md#nlocktimeraw)
- [nSequence](SigHash.md#nsequence)
- [nSequenceRaw](SigHash.md#nsequenceraw)
- [nVersion](SigHash.md#nversion)
- [outpoint](SigHash.md#outpoint)
- [scriptCode](SigHash.md#scriptcode)
- [sigHashType](SigHash.md#sighashtype)
- [value](SigHash.md#value)
- [valueRaw](SigHash.md#valueraw)

## Constructors

### constructor

• **new SigHash**()

## Properties

### ALL\_FORKID

▪ `Static` `Readonly` **ALL\_FORKID**: [`SigHashType`](SigHashType.md)

#### Defined in

[src/builtins/functions.ts:413](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L413)

___

### ANYONECANPAY\_ALL\_FORKID

▪ `Static` `Readonly` **ANYONECANPAY\_ALL\_FORKID**: [`SigHashType`](SigHashType.md)

#### Defined in

[src/builtins/functions.ts:416](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L416)

___

### ANYONECANPAY\_NONE\_FORKID

▪ `Static` `Readonly` **ANYONECANPAY\_NONE\_FORKID**: [`SigHashType`](SigHashType.md)

#### Defined in

[src/builtins/functions.ts:417](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L417)

___

### ANYONECANPAY\_SINGLE\_FORKID

▪ `Static` `Readonly` **ANYONECANPAY\_SINGLE\_FORKID**: [`SigHashType`](SigHashType.md)

#### Defined in

[src/builtins/functions.ts:418](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L418)

___

### NONE\_FORKID

▪ `Static` `Readonly` **NONE\_FORKID**: [`SigHashType`](SigHashType.md)

#### Defined in

[src/builtins/functions.ts:414](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L414)

___

### SINGLE\_FORKID

▪ `Static` `Readonly` **SINGLE\_FORKID**: [`SigHashType`](SigHashType.md)

#### Defined in

[src/builtins/functions.ts:415](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L415)

## Methods

### hashOutputs

▸ `Static` **hashOutputs**(`preimage`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `preimage` | [`SigHashPreimage`](SigHashPreimage.md) |

#### Returns

`string`

#### Defined in

[src/builtins/functions.ts:445](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L445)

___

### hashPrevouts

▸ `Static` **hashPrevouts**(`preimage`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `preimage` | [`SigHashPreimage`](SigHashPreimage.md) |

#### Returns

`string`

#### Defined in

[src/builtins/functions.ts:428](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L428)

___

### hashSequence

▸ `Static` **hashSequence**(`preimage`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `preimage` | [`SigHashPreimage`](SigHashPreimage.md) |

#### Returns

`string`

#### Defined in

[src/builtins/functions.ts:430](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L430)

___

### nLocktime

▸ `Static` **nLocktime**(`preimage`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `preimage` | [`SigHashPreimage`](SigHashPreimage.md) |

#### Returns

`number`

#### Defined in

[src/builtins/functions.ts:449](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L449)

___

### nLocktimeRaw

▸ `Static` **nLocktimeRaw**(`preimage`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `preimage` | [`SigHashPreimage`](SigHashPreimage.md) |

#### Returns

`string`

#### Defined in

[src/builtins/functions.ts:447](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L447)

___

### nSequence

▸ `Static` **nSequence**(`preimage`): `bigint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `preimage` | [`SigHashPreimage`](SigHashPreimage.md) |

#### Returns

`bigint`

#### Defined in

[src/builtins/functions.ts:443](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L443)

___

### nSequenceRaw

▸ `Static` **nSequenceRaw**(`preimage`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `preimage` | [`SigHashPreimage`](SigHashPreimage.md) |

#### Returns

`string`

#### Defined in

[src/builtins/functions.ts:441](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L441)

___

### nVersion

▸ `Static` **nVersion**(`preimage`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `preimage` | [`SigHashPreimage`](SigHashPreimage.md) |

#### Returns

`string`

#### Defined in

[src/builtins/functions.ts:426](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L426)

___

### outpoint

▸ `Static` **outpoint**(`preimage`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `preimage` | [`SigHashPreimage`](SigHashPreimage.md) |

#### Returns

`string`

#### Defined in

[src/builtins/functions.ts:432](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L432)

___

### scriptCode

▸ `Static` **scriptCode**(`preimage`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `preimage` | [`SigHashPreimage`](SigHashPreimage.md) |

#### Returns

`string`

#### Defined in

[src/builtins/functions.ts:435](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L435)

___

### sigHashType

▸ `Static` **sigHashType**(`preimage`): [`SigHashType`](SigHashType.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `preimage` | [`SigHashPreimage`](SigHashPreimage.md) |

#### Returns

[`SigHashType`](SigHashType.md)

#### Defined in

[src/builtins/functions.ts:451](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L451)

___

### value

▸ `Static` **value**(`preimage`): `bigint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `preimage` | [`SigHashPreimage`](SigHashPreimage.md) |

#### Returns

`bigint`

#### Defined in

[src/builtins/functions.ts:439](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L439)

___

### valueRaw

▸ `Static` **valueRaw**(`preimage`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `preimage` | [`SigHashPreimage`](SigHashPreimage.md) |

#### Returns

`string`

#### Defined in

[src/builtins/functions.ts:437](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L437)
