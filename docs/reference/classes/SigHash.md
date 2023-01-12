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

[src/builtins/functions.ts:507](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L507)

___

### ANYONECANPAY\_ALL

▪ `Static` `Readonly` **ANYONECANPAY\_ALL**: [`SigHashType`](../README.md#sighashtype)

#### Defined in

[src/builtins/functions.ts:510](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L510)

___

### ANYONECANPAY\_NONE

▪ `Static` `Readonly` **ANYONECANPAY\_NONE**: [`SigHashType`](../README.md#sighashtype)

#### Defined in

[src/builtins/functions.ts:511](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L511)

___

### ANYONECANPAY\_SINGLE

▪ `Static` `Readonly` **ANYONECANPAY\_SINGLE**: [`SigHashType`](../README.md#sighashtype)

#### Defined in

[src/builtins/functions.ts:512](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L512)

___

### NONE

▪ `Static` `Readonly` **NONE**: [`SigHashType`](../README.md#sighashtype)

#### Defined in

[src/builtins/functions.ts:508](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L508)

___

### SINGLE

▪ `Static` `Readonly` **SINGLE**: [`SigHashType`](../README.md#sighashtype)

#### Defined in

[src/builtins/functions.ts:509](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L509)

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

[src/builtins/functions.ts:559](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L559)

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

[src/builtins/functions.ts:524](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L524)

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

[src/builtins/functions.ts:528](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L528)

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

[src/builtins/functions.ts:569](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L569)

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

[src/builtins/functions.ts:564](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L564)

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

[src/builtins/functions.ts:555](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L555)

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

[src/builtins/functions.ts:550](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L550)

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

[src/builtins/functions.ts:520](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L520)

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

[src/builtins/functions.ts:532](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L532)

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

[src/builtins/functions.ts:537](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L537)

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

[src/builtins/functions.ts:573](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L573)

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

[src/builtins/functions.ts:546](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L546)

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

[src/builtins/functions.ts:541](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/functions.ts#L541)
