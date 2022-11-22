[ts-scrypt](../README.md) / [Exports](../modules.md) / SigHash

# Class: SigHash

## Table of contents

### Constructors

- [constructor](SigHash.md#constructor)

### Properties

- [ALL\_ANYONECANPAY\_FORKID](SigHash.md#all_anyonecanpay_forkid)
- [ALL\_FORKID](SigHash.md#all_forkid)
- [NONE\_ANYONECANPAY\_ORKID](SigHash.md#none_anyonecanpay_orkid)
- [NONE\_FORKID](SigHash.md#none_forkid)
- [SINGLE\_ANYONECANPAY\_FORKID](SigHash.md#single_anyonecanpay_forkid)
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

### ALL\_ANYONECANPAY\_FORKID

▪ `Static` `Readonly` **ALL\_ANYONECANPAY\_FORKID**: [`SigHashType`](SigHashType.md)

#### Defined in

[src/builtins/functions.ts:291](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L291)

___

### ALL\_FORKID

▪ `Static` `Readonly` **ALL\_FORKID**: [`SigHashType`](SigHashType.md)

#### Defined in

[src/builtins/functions.ts:288](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L288)

___

### NONE\_ANYONECANPAY\_ORKID

▪ `Static` `Readonly` **NONE\_ANYONECANPAY\_ORKID**: [`SigHashType`](SigHashType.md)

#### Defined in

[src/builtins/functions.ts:292](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L292)

___

### NONE\_FORKID

▪ `Static` `Readonly` **NONE\_FORKID**: [`SigHashType`](SigHashType.md)

#### Defined in

[src/builtins/functions.ts:289](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L289)

___

### SINGLE\_ANYONECANPAY\_FORKID

▪ `Static` `Readonly` **SINGLE\_ANYONECANPAY\_FORKID**: [`SigHashType`](SigHashType.md)

#### Defined in

[src/builtins/functions.ts:293](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L293)

___

### SINGLE\_FORKID

▪ `Static` `Readonly` **SINGLE\_FORKID**: [`SigHashType`](SigHashType.md)

#### Defined in

[src/builtins/functions.ts:290](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L290)

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

[src/builtins/functions.ts:320](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L320)

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

[src/builtins/functions.ts:303](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L303)

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

[src/builtins/functions.ts:305](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L305)

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

[src/builtins/functions.ts:324](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L324)

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

[src/builtins/functions.ts:322](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L322)

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

[src/builtins/functions.ts:318](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L318)

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

[src/builtins/functions.ts:316](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L316)

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

[src/builtins/functions.ts:301](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L301)

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

[src/builtins/functions.ts:307](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L307)

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

[src/builtins/functions.ts:310](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L310)

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

[src/builtins/functions.ts:326](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L326)

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

[src/builtins/functions.ts:314](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L314)

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

[src/builtins/functions.ts:312](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L312)
