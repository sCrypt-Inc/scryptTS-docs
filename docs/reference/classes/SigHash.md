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

[src/builtins/functions.ts:453](https://github.com/sCrypt-Inc/scrypt-ts/blob/244c0d1/src/builtins/functions.ts#L453)

___

### ANYONECANPAY\_ALL\_FORKID

▪ `Static` `Readonly` **ANYONECANPAY\_ALL\_FORKID**: [`SigHashType`](SigHashType.md)

#### Defined in

[src/builtins/functions.ts:456](https://github.com/sCrypt-Inc/scrypt-ts/blob/244c0d1/src/builtins/functions.ts#L456)

___

### ANYONECANPAY\_NONE\_FORKID

▪ `Static` `Readonly` **ANYONECANPAY\_NONE\_FORKID**: [`SigHashType`](SigHashType.md)

#### Defined in

[src/builtins/functions.ts:457](https://github.com/sCrypt-Inc/scrypt-ts/blob/244c0d1/src/builtins/functions.ts#L457)

___

### ANYONECANPAY\_SINGLE\_FORKID

▪ `Static` `Readonly` **ANYONECANPAY\_SINGLE\_FORKID**: [`SigHashType`](SigHashType.md)

#### Defined in

[src/builtins/functions.ts:458](https://github.com/sCrypt-Inc/scrypt-ts/blob/244c0d1/src/builtins/functions.ts#L458)

___

### NONE\_FORKID

▪ `Static` `Readonly` **NONE\_FORKID**: [`SigHashType`](SigHashType.md)

#### Defined in

[src/builtins/functions.ts:454](https://github.com/sCrypt-Inc/scrypt-ts/blob/244c0d1/src/builtins/functions.ts#L454)

___

### SINGLE\_FORKID

▪ `Static` `Readonly` **SINGLE\_FORKID**: [`SigHashType`](SigHashType.md)

#### Defined in

[src/builtins/functions.ts:455](https://github.com/sCrypt-Inc/scrypt-ts/blob/244c0d1/src/builtins/functions.ts#L455)

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

[src/builtins/functions.ts:505](https://github.com/sCrypt-Inc/scrypt-ts/blob/244c0d1/src/builtins/functions.ts#L505)

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

[src/builtins/functions.ts:470](https://github.com/sCrypt-Inc/scrypt-ts/blob/244c0d1/src/builtins/functions.ts#L470)

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

[src/builtins/functions.ts:474](https://github.com/sCrypt-Inc/scrypt-ts/blob/244c0d1/src/builtins/functions.ts#L474)

___

### nLocktime

▸ `Static` **nLocktime**(`preimage`): `bigint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `preimage` | [`SigHashPreimage`](SigHashPreimage.md) |

#### Returns

`bigint`

#### Defined in

[src/builtins/functions.ts:515](https://github.com/sCrypt-Inc/scrypt-ts/blob/244c0d1/src/builtins/functions.ts#L515)

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

[src/builtins/functions.ts:510](https://github.com/sCrypt-Inc/scrypt-ts/blob/244c0d1/src/builtins/functions.ts#L510)

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

[src/builtins/functions.ts:501](https://github.com/sCrypt-Inc/scrypt-ts/blob/244c0d1/src/builtins/functions.ts#L501)

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

[src/builtins/functions.ts:496](https://github.com/sCrypt-Inc/scrypt-ts/blob/244c0d1/src/builtins/functions.ts#L496)

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

[src/builtins/functions.ts:466](https://github.com/sCrypt-Inc/scrypt-ts/blob/244c0d1/src/builtins/functions.ts#L466)

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

[src/builtins/functions.ts:478](https://github.com/sCrypt-Inc/scrypt-ts/blob/244c0d1/src/builtins/functions.ts#L478)

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

[src/builtins/functions.ts:483](https://github.com/sCrypt-Inc/scrypt-ts/blob/244c0d1/src/builtins/functions.ts#L483)

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

[src/builtins/functions.ts:519](https://github.com/sCrypt-Inc/scrypt-ts/blob/244c0d1/src/builtins/functions.ts#L519)

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

[src/builtins/functions.ts:492](https://github.com/sCrypt-Inc/scrypt-ts/blob/244c0d1/src/builtins/functions.ts#L492)

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

[src/builtins/functions.ts:487](https://github.com/sCrypt-Inc/scrypt-ts/blob/244c0d1/src/builtins/functions.ts#L487)
