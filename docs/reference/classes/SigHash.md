[scrypt-ts](../README.md) / SigHash

# Class: SigHash

A library to access various fields in the [preimage][https://github.com/bitcoin-sv/bitcoin-sv/blob/master/doc/abc/replay-protected-sighash.md](https://github.com/bitcoin-sv/bitcoin-sv/blob/master/doc/abc/replay-protected-sighash.md).
For example, we usually use `SigHash.scriptCode(preimage: SigHashPreimage)` to access the scriptCode of the preimage,
and use `SigHash.value(preimage: SigHashPreimage)` to access the value field of the preimage, which is the value of the number of bitcoins spent in this contract.

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

dist/smart-contract/builtins/functions.d.ts:961

___

### ANYONECANPAY\_ALL

▪ `Static` `Readonly` **ANYONECANPAY\_ALL**: [`SigHashType`](../README.md#sighashtype)

#### Defined in

dist/smart-contract/builtins/functions.d.ts:964

___

### ANYONECANPAY\_NONE

▪ `Static` `Readonly` **ANYONECANPAY\_NONE**: [`SigHashType`](../README.md#sighashtype)

#### Defined in

dist/smart-contract/builtins/functions.d.ts:965

___

### ANYONECANPAY\_SINGLE

▪ `Static` `Readonly` **ANYONECANPAY\_SINGLE**: [`SigHashType`](../README.md#sighashtype)

#### Defined in

dist/smart-contract/builtins/functions.d.ts:966

___

### NONE

▪ `Static` `Readonly` **NONE**: [`SigHashType`](../README.md#sighashtype)

#### Defined in

dist/smart-contract/builtins/functions.d.ts:962

___

### SINGLE

▪ `Static` `Readonly` **SINGLE**: [`SigHashType`](../README.md#sighashtype)

#### Defined in

dist/smart-contract/builtins/functions.d.ts:963

## Methods

### hashOutputs

▸ `Static` **hashOutputs**(`preimage`): [`ByteString`](../README.md#bytestring)

get hashOutputs of the transaction from the preimage

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `preimage` | [`SigHashPreimage`](../README.md#sighashpreimage) | the preimage |

#### Returns

[`ByteString`](../README.md#bytestring)

return hashOutputs `ByteString` in 32-byte hash

#### Defined in

dist/smart-contract/builtins/functions.d.ts:1026

___

### hashPrevouts

▸ `Static` **hashPrevouts**(`preimage`): [`ByteString`](../README.md#bytestring)

get hashPrevouts of the transaction from the preimage

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `preimage` | [`SigHashPreimage`](../README.md#sighashpreimage) | the preimage |

#### Returns

[`ByteString`](../README.md#bytestring)

return hashPrevouts `ByteString` in 32-byte little endian

#### Defined in

dist/smart-contract/builtins/functions.d.ts:978

___

### hashSequence

▸ `Static` **hashSequence**(`preimage`): [`ByteString`](../README.md#bytestring)

get hashSequence of the transaction from the preimage

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `preimage` | [`SigHashPreimage`](../README.md#sighashpreimage) | the preimage |

#### Returns

[`ByteString`](../README.md#bytestring)

return hashSequence `ByteString` in 32-byte little endian

#### Defined in

dist/smart-contract/builtins/functions.d.ts:984

___

### nLocktime

▸ `Static` **nLocktime**(`preimage`): `bigint`

get nLocktime of the transaction from the preimage

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `preimage` | [`SigHashPreimage`](../README.md#sighashpreimage) | the preimage |

#### Returns

`bigint`

return nLocktime

#### Defined in

dist/smart-contract/builtins/functions.d.ts:1038

___

### nLocktimeRaw

▸ `Static` **nLocktimeRaw**(`preimage`): [`ByteString`](../README.md#bytestring)

get nLocktime of the transaction from the preimage

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `preimage` | [`SigHashPreimage`](../README.md#sighashpreimage) | the preimage |

#### Returns

[`ByteString`](../README.md#bytestring)

return nLocktime `ByteString` in 4-byte little endian

#### Defined in

dist/smart-contract/builtins/functions.d.ts:1032

___

### nSequence

▸ `Static` **nSequence**(`preimage`): `bigint`

nSequence of the input from the preimage

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `preimage` | [`SigHashPreimage`](../README.md#sighashpreimage) | the preimage |

#### Returns

`bigint`

return nSequence

#### Defined in

dist/smart-contract/builtins/functions.d.ts:1020

___

### nSequenceRaw

▸ `Static` **nSequenceRaw**(`preimage`): [`ByteString`](../README.md#bytestring)

nSequence of the input from the preimage

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `preimage` | [`SigHashPreimage`](../README.md#sighashpreimage) | the preimage |

#### Returns

[`ByteString`](../README.md#bytestring)

return nSequence `ByteString` in 4-byte little endian

#### Defined in

dist/smart-contract/builtins/functions.d.ts:1014

___

### nVersion

▸ `Static` **nVersion**(`preimage`): [`ByteString`](../README.md#bytestring)

get version of the transaction from the preimage

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `preimage` | [`SigHashPreimage`](../README.md#sighashpreimage) | the preimage |

#### Returns

[`ByteString`](../README.md#bytestring)

return version `ByteString` in 4-byte little endian

#### Defined in

dist/smart-contract/builtins/functions.d.ts:972

___

### outpoint

▸ `Static` **outpoint**(`preimage`): [`ByteString`](../README.md#bytestring)

get outpoint of the transaction from the preimage

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `preimage` | [`SigHashPreimage`](../README.md#sighashpreimage) | the preimage |

#### Returns

[`ByteString`](../README.md#bytestring)

return outpoint `ByteString` in 32-byte hash + 4-byte little endian

#### Defined in

dist/smart-contract/builtins/functions.d.ts:990

___

### scriptCode

▸ `Static` **scriptCode**(`preimage`): [`ByteString`](../README.md#bytestring)

get scriptCode of the transaction from the preimage. scriptCode is just scriptPubKey if there is no CODESEPARATOR in the latter

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `preimage` | [`SigHashPreimage`](../README.md#sighashpreimage) | the preimage |

#### Returns

[`ByteString`](../README.md#bytestring)

return scriptCode `ByteString`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:996

___

### sigHashType

▸ `Static` **sigHashType**(`preimage`): [`SigHashType`](../README.md#sighashtype)

sighash type of the signature from the preimage

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `preimage` | [`SigHashPreimage`](../README.md#sighashpreimage) | the preimage |

#### Returns

[`SigHashType`](../README.md#sighashtype)

return sighash type

#### Defined in

dist/smart-contract/builtins/functions.d.ts:1044

___

### value

▸ `Static` **value**(`preimage`): `bigint`

get value of the output spent by this input from the preimage

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `preimage` | [`SigHashPreimage`](../README.md#sighashpreimage) | the preimage |

#### Returns

`bigint`

return value

#### Defined in

dist/smart-contract/builtins/functions.d.ts:1008

___

### valueRaw

▸ `Static` **valueRaw**(`preimage`): [`ByteString`](../README.md#bytestring)

get value of the output spent by this input from the preimage

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `preimage` | [`SigHashPreimage`](../README.md#sighashpreimage) | the preimage |

#### Returns

[`ByteString`](../README.md#bytestring)

return value `ByteString` in 8-byte little endian

#### Defined in

dist/smart-contract/builtins/functions.d.ts:1002
