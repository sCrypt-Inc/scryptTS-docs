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

[src/smart-contract/builtins/functions.ts:515](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/functions.ts#L515)

___

### ANYONECANPAY\_ALL

▪ `Static` `Readonly` **ANYONECANPAY\_ALL**: [`SigHashType`](../README.md#sighashtype)

#### Defined in

[src/smart-contract/builtins/functions.ts:518](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/functions.ts#L518)

___

### ANYONECANPAY\_NONE

▪ `Static` `Readonly` **ANYONECANPAY\_NONE**: [`SigHashType`](../README.md#sighashtype)

#### Defined in

[src/smart-contract/builtins/functions.ts:519](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/functions.ts#L519)

___

### ANYONECANPAY\_SINGLE

▪ `Static` `Readonly` **ANYONECANPAY\_SINGLE**: [`SigHashType`](../README.md#sighashtype)

#### Defined in

[src/smart-contract/builtins/functions.ts:520](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/functions.ts#L520)

___

### NONE

▪ `Static` `Readonly` **NONE**: [`SigHashType`](../README.md#sighashtype)

#### Defined in

[src/smart-contract/builtins/functions.ts:516](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/functions.ts#L516)

___

### SINGLE

▪ `Static` `Readonly` **SINGLE**: [`SigHashType`](../README.md#sighashtype)

#### Defined in

[src/smart-contract/builtins/functions.ts:517](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/functions.ts#L517)

## Methods

### hashOutputs

▸ `Static` **hashOutputs**(`preimage`): [`ByteString`](../README.md#bytestring)

#### Parameters

| Name | Type |
| :------ | :------ |
| `preimage` | [`SigHashPreimage`](../README.md#sighashpreimage) |

#### Returns

[`ByteString`](../README.md#bytestring)

#### Defined in

[src/smart-contract/builtins/functions.ts:567](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/functions.ts#L567)

___

### hashPrevouts

▸ `Static` **hashPrevouts**(`preimage`): [`ByteString`](../README.md#bytestring)

#### Parameters

| Name | Type |
| :------ | :------ |
| `preimage` | [`SigHashPreimage`](../README.md#sighashpreimage) |

#### Returns

[`ByteString`](../README.md#bytestring)

#### Defined in

[src/smart-contract/builtins/functions.ts:532](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/functions.ts#L532)

___

### hashSequence

▸ `Static` **hashSequence**(`preimage`): [`ByteString`](../README.md#bytestring)

#### Parameters

| Name | Type |
| :------ | :------ |
| `preimage` | [`SigHashPreimage`](../README.md#sighashpreimage) |

#### Returns

[`ByteString`](../README.md#bytestring)

#### Defined in

[src/smart-contract/builtins/functions.ts:536](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/functions.ts#L536)

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

[src/smart-contract/builtins/functions.ts:577](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/functions.ts#L577)

___

### nLocktimeRaw

▸ `Static` **nLocktimeRaw**(`preimage`): [`ByteString`](../README.md#bytestring)

#### Parameters

| Name | Type |
| :------ | :------ |
| `preimage` | [`SigHashPreimage`](../README.md#sighashpreimage) |

#### Returns

[`ByteString`](../README.md#bytestring)

#### Defined in

[src/smart-contract/builtins/functions.ts:572](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/functions.ts#L572)

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

[src/smart-contract/builtins/functions.ts:563](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/functions.ts#L563)

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

[src/smart-contract/builtins/functions.ts:558](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/functions.ts#L558)

___

### nVersion

▸ `Static` **nVersion**(`preimage`): [`ByteString`](../README.md#bytestring)

#### Parameters

| Name | Type |
| :------ | :------ |
| `preimage` | [`SigHashPreimage`](../README.md#sighashpreimage) |

#### Returns

[`ByteString`](../README.md#bytestring)

#### Defined in

[src/smart-contract/builtins/functions.ts:528](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/functions.ts#L528)

___

### outpoint

▸ `Static` **outpoint**(`preimage`): [`ByteString`](../README.md#bytestring)

#### Parameters

| Name | Type |
| :------ | :------ |
| `preimage` | [`SigHashPreimage`](../README.md#sighashpreimage) |

#### Returns

[`ByteString`](../README.md#bytestring)

#### Defined in

[src/smart-contract/builtins/functions.ts:540](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/functions.ts#L540)

___

### scriptCode

▸ `Static` **scriptCode**(`preimage`): [`ByteString`](../README.md#bytestring)

#### Parameters

| Name | Type |
| :------ | :------ |
| `preimage` | [`SigHashPreimage`](../README.md#sighashpreimage) |

#### Returns

[`ByteString`](../README.md#bytestring)

#### Defined in

[src/smart-contract/builtins/functions.ts:545](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/functions.ts#L545)

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

[src/smart-contract/builtins/functions.ts:581](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/functions.ts#L581)

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

[src/smart-contract/builtins/functions.ts:554](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/functions.ts#L554)

___

### valueRaw

▸ `Static` **valueRaw**(`preimage`): [`ByteString`](../README.md#bytestring)

#### Parameters

| Name | Type |
| :------ | :------ |
| `preimage` | [`SigHashPreimage`](../README.md#sighashpreimage) |

#### Returns

[`ByteString`](../README.md#bytestring)

#### Defined in

[src/smart-contract/builtins/functions.ts:549](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/functions.ts#L549)
