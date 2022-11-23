[scrypt-ts](../README.md) / [Exports](../modules.md) / SigHash

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

[src/builtins/functions.ts:463](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/builtins/functions.ts#L463)

___

### ANYONECANPAY\_ALL\_FORKID

▪ `Static` `Readonly` **ANYONECANPAY\_ALL\_FORKID**: [`SigHashType`](SigHashType.md)

#### Defined in

[src/builtins/functions.ts:466](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/builtins/functions.ts#L466)

___

### ANYONECANPAY\_NONE\_FORKID

▪ `Static` `Readonly` **ANYONECANPAY\_NONE\_FORKID**: [`SigHashType`](SigHashType.md)

#### Defined in

[src/builtins/functions.ts:467](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/builtins/functions.ts#L467)

___

### ANYONECANPAY\_SINGLE\_FORKID

▪ `Static` `Readonly` **ANYONECANPAY\_SINGLE\_FORKID**: [`SigHashType`](SigHashType.md)

#### Defined in

[src/builtins/functions.ts:468](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/builtins/functions.ts#L468)

___

### NONE\_FORKID

▪ `Static` `Readonly` **NONE\_FORKID**: [`SigHashType`](SigHashType.md)

#### Defined in

[src/builtins/functions.ts:464](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/builtins/functions.ts#L464)

___

### SINGLE\_FORKID

▪ `Static` `Readonly` **SINGLE\_FORKID**: [`SigHashType`](SigHashType.md)

#### Defined in

[src/builtins/functions.ts:465](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/builtins/functions.ts#L465)

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

[src/builtins/functions.ts:495](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/builtins/functions.ts#L495)

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

[src/builtins/functions.ts:478](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/builtins/functions.ts#L478)

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

[src/builtins/functions.ts:480](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/builtins/functions.ts#L480)

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

[src/builtins/functions.ts:499](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/builtins/functions.ts#L499)

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

[src/builtins/functions.ts:497](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/builtins/functions.ts#L497)

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

[src/builtins/functions.ts:493](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/builtins/functions.ts#L493)

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

[src/builtins/functions.ts:491](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/builtins/functions.ts#L491)

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

[src/builtins/functions.ts:476](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/builtins/functions.ts#L476)

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

[src/builtins/functions.ts:482](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/builtins/functions.ts#L482)

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

[src/builtins/functions.ts:485](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/builtins/functions.ts#L485)

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

[src/builtins/functions.ts:501](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/builtins/functions.ts#L501)

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

[src/builtins/functions.ts:489](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/builtins/functions.ts#L489)

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

[src/builtins/functions.ts:487](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/builtins/functions.ts#L487)
