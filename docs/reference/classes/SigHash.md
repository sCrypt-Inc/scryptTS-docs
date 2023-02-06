[scrypt-ts](../README.md) / SigHash

# Class: SigHash

## Table of contents

### Constructors

- [constructor](SigHash.md#constructor)

### Properties

- [ALL](SigHash.md#all)
- [ANYONECANPAY\_ALL](SigHash.md#anyonecanpay_all)
- [ANYONECANPAY\_NONE](SigHash.md#anyonecanpay_none)
- [ANYONECANPAY\_SINGLE](SigHash.md#anyonecanpay_single)
- [NONE](SigHash.md#none)
- [SINGLE](SigHash.md#single)

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

### ALL

▪ `Static` `Readonly` **ALL**: [`SigHashType`](../README.md#sighashtype)

#### Defined in

[src/smart-contract/builtins/functions.ts:506](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/functions.ts#L506)

___

### ANYONECANPAY\_ALL

▪ `Static` `Readonly` **ANYONECANPAY\_ALL**: [`SigHashType`](../README.md#sighashtype)

#### Defined in

[src/smart-contract/builtins/functions.ts:509](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/functions.ts#L509)

___

### ANYONECANPAY\_NONE

▪ `Static` `Readonly` **ANYONECANPAY\_NONE**: [`SigHashType`](../README.md#sighashtype)

#### Defined in

[src/smart-contract/builtins/functions.ts:510](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/functions.ts#L510)

___

### ANYONECANPAY\_SINGLE

▪ `Static` `Readonly` **ANYONECANPAY\_SINGLE**: [`SigHashType`](../README.md#sighashtype)

#### Defined in

[src/smart-contract/builtins/functions.ts:511](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/functions.ts#L511)

___

### NONE

▪ `Static` `Readonly` **NONE**: [`SigHashType`](../README.md#sighashtype)

#### Defined in

[src/smart-contract/builtins/functions.ts:507](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/functions.ts#L507)

___

### SINGLE

▪ `Static` `Readonly` **SINGLE**: [`SigHashType`](../README.md#sighashtype)

#### Defined in

[src/smart-contract/builtins/functions.ts:508](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/functions.ts#L508)

## Methods

### hashOutputs

▸ `Static` **hashOutputs**(`preimage`): `Bytes`

#### Parameters

| Name | Type |
| :------ | :------ |
| `preimage` | [`SigHashPreimage`](../README.md#sighashpreimage) |

#### Returns

`Bytes`

#### Defined in

[src/smart-contract/builtins/functions.ts:558](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/functions.ts#L558)

___

### hashPrevouts

▸ `Static` **hashPrevouts**(`preimage`): `Bytes`

#### Parameters

| Name | Type |
| :------ | :------ |
| `preimage` | [`SigHashPreimage`](../README.md#sighashpreimage) |

#### Returns

`Bytes`

#### Defined in

[src/smart-contract/builtins/functions.ts:523](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/functions.ts#L523)

___

### hashSequence

▸ `Static` **hashSequence**(`preimage`): `Bytes`

#### Parameters

| Name | Type |
| :------ | :------ |
| `preimage` | [`SigHashPreimage`](../README.md#sighashpreimage) |

#### Returns

`Bytes`

#### Defined in

[src/smart-contract/builtins/functions.ts:527](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/functions.ts#L527)

___

### nLocktime

▸ `Static` **nLocktime**(`preimage`): `bigint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `preimage` | [`SigHashPreimage`](../README.md#sighashpreimage) |

#### Returns

`bigint`

#### Defined in

[src/smart-contract/builtins/functions.ts:568](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/functions.ts#L568)

___

### nLocktimeRaw

▸ `Static` **nLocktimeRaw**(`preimage`): `Bytes`

#### Parameters

| Name | Type |
| :------ | :------ |
| `preimage` | [`SigHashPreimage`](../README.md#sighashpreimage) |

#### Returns

`Bytes`

#### Defined in

[src/smart-contract/builtins/functions.ts:563](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/functions.ts#L563)

___

### nSequence

▸ `Static` **nSequence**(`preimage`): `bigint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `preimage` | [`SigHashPreimage`](../README.md#sighashpreimage) |

#### Returns

`bigint`

#### Defined in

[src/smart-contract/builtins/functions.ts:554](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/functions.ts#L554)

___

### nSequenceRaw

▸ `Static` **nSequenceRaw**(`preimage`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `preimage` | [`SigHashPreimage`](../README.md#sighashpreimage) |

#### Returns

`string`

#### Defined in

[src/smart-contract/builtins/functions.ts:549](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/functions.ts#L549)

___

### nVersion

▸ `Static` **nVersion**(`preimage`): `Bytes`

#### Parameters

| Name | Type |
| :------ | :------ |
| `preimage` | [`SigHashPreimage`](../README.md#sighashpreimage) |

#### Returns

`Bytes`

#### Defined in

[src/smart-contract/builtins/functions.ts:519](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/functions.ts#L519)

___

### outpoint

▸ `Static` **outpoint**(`preimage`): `Bytes`

#### Parameters

| Name | Type |
| :------ | :------ |
| `preimage` | [`SigHashPreimage`](../README.md#sighashpreimage) |

#### Returns

`Bytes`

#### Defined in

[src/smart-contract/builtins/functions.ts:531](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/functions.ts#L531)

___

### scriptCode

▸ `Static` **scriptCode**(`preimage`): `Bytes`

#### Parameters

| Name | Type |
| :------ | :------ |
| `preimage` | [`SigHashPreimage`](../README.md#sighashpreimage) |

#### Returns

`Bytes`

#### Defined in

[src/smart-contract/builtins/functions.ts:536](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/functions.ts#L536)

___

### sigHashType

▸ `Static` **sigHashType**(`preimage`): [`SigHashType`](../README.md#sighashtype)

#### Parameters

| Name | Type |
| :------ | :------ |
| `preimage` | [`SigHashPreimage`](../README.md#sighashpreimage) |

#### Returns

[`SigHashType`](../README.md#sighashtype)

#### Defined in

[src/smart-contract/builtins/functions.ts:572](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/functions.ts#L572)

___

### value

▸ `Static` **value**(`preimage`): `bigint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `preimage` | [`SigHashPreimage`](../README.md#sighashpreimage) |

#### Returns

`bigint`

#### Defined in

[src/smart-contract/builtins/functions.ts:545](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/functions.ts#L545)

___

### valueRaw

▸ `Static` **valueRaw**(`preimage`): `Bytes`

#### Parameters

| Name | Type |
| :------ | :------ |
| `preimage` | [`SigHashPreimage`](../README.md#sighashpreimage) |

#### Returns

`Bytes`

#### Defined in

[src/smart-contract/builtins/functions.ts:540](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/functions.ts#L540)
