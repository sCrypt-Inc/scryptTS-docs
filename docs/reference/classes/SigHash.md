[**scrypt-ts**](../README.md)

***

[scrypt-ts](../globals.md) / SigHash

# Class: SigHash

Defined in: scrypt-ts/dist/smart-contract/builtins/functions.d.ts:984

A library to access various fields in the [preimage][https://github.com/bitcoin-sv/bitcoin-sv/blob/master/doc/abc/replay-protected-sighash.md](https://github.com/bitcoin-sv/bitcoin-sv/blob/master/doc/abc/replay-protected-sighash.md).
For example, we usually use `SigHash.scriptCode(preimage: SigHashPreimage)` to access the scriptCode of the preimage,
and use `SigHash.value(preimage: SigHashPreimage)` to access the value field of the preimage, which is the value of the number of bitcoins spent in this contract.

## Constructors

### new SigHash()

> **new SigHash**(): [`SigHash`](SigHash.md)

#### Returns

[`SigHash`](SigHash.md)

## Properties

### ALL

> `readonly` `static` **ALL**: [`SigHashType`](../type-aliases/SigHashType.md)

Defined in: scrypt-ts/dist/smart-contract/builtins/functions.d.ts:985

***

### ANYONECANPAY\_ALL

> `readonly` `static` **ANYONECANPAY\_ALL**: [`SigHashType`](../type-aliases/SigHashType.md)

Defined in: scrypt-ts/dist/smart-contract/builtins/functions.d.ts:988

***

### ANYONECANPAY\_NONE

> `readonly` `static` **ANYONECANPAY\_NONE**: [`SigHashType`](../type-aliases/SigHashType.md)

Defined in: scrypt-ts/dist/smart-contract/builtins/functions.d.ts:989

***

### ANYONECANPAY\_SINGLE

> `readonly` `static` **ANYONECANPAY\_SINGLE**: [`SigHashType`](../type-aliases/SigHashType.md)

Defined in: scrypt-ts/dist/smart-contract/builtins/functions.d.ts:990

***

### NONE

> `readonly` `static` **NONE**: [`SigHashType`](../type-aliases/SigHashType.md)

Defined in: scrypt-ts/dist/smart-contract/builtins/functions.d.ts:986

***

### SINGLE

> `readonly` `static` **SINGLE**: [`SigHashType`](../type-aliases/SigHashType.md)

Defined in: scrypt-ts/dist/smart-contract/builtins/functions.d.ts:987

## Methods

### hashOutputs()

> `static` **hashOutputs**(`preimage`): [`ByteString`](../type-aliases/ByteString.md)

Defined in: scrypt-ts/dist/smart-contract/builtins/functions.d.ts:1050

get hashOutputs of the transaction from the preimage

#### Parameters

##### preimage

[`SigHashPreimage`](../type-aliases/SigHashPreimage.md)

the preimage

#### Returns

[`ByteString`](../type-aliases/ByteString.md)

return hashOutputs `ByteString` in 32-byte hash

***

### hashPrevouts()

> `static` **hashPrevouts**(`preimage`): [`ByteString`](../type-aliases/ByteString.md)

Defined in: scrypt-ts/dist/smart-contract/builtins/functions.d.ts:1002

get hashPrevouts of the transaction from the preimage

#### Parameters

##### preimage

[`SigHashPreimage`](../type-aliases/SigHashPreimage.md)

the preimage

#### Returns

[`ByteString`](../type-aliases/ByteString.md)

return hashPrevouts `ByteString` in 32-byte little endian

***

### hashSequence()

> `static` **hashSequence**(`preimage`): [`ByteString`](../type-aliases/ByteString.md)

Defined in: scrypt-ts/dist/smart-contract/builtins/functions.d.ts:1008

get hashSequence of the transaction from the preimage

#### Parameters

##### preimage

[`SigHashPreimage`](../type-aliases/SigHashPreimage.md)

the preimage

#### Returns

[`ByteString`](../type-aliases/ByteString.md)

return hashSequence `ByteString` in 32-byte little endian

***

### nLocktime()

> `static` **nLocktime**(`preimage`): `bigint`

Defined in: scrypt-ts/dist/smart-contract/builtins/functions.d.ts:1062

get nLocktime of the transaction from the preimage

#### Parameters

##### preimage

[`SigHashPreimage`](../type-aliases/SigHashPreimage.md)

the preimage

#### Returns

`bigint`

return nLocktime

***

### nLocktimeRaw()

> `static` **nLocktimeRaw**(`preimage`): [`ByteString`](../type-aliases/ByteString.md)

Defined in: scrypt-ts/dist/smart-contract/builtins/functions.d.ts:1056

get nLocktime of the transaction from the preimage

#### Parameters

##### preimage

[`SigHashPreimage`](../type-aliases/SigHashPreimage.md)

the preimage

#### Returns

[`ByteString`](../type-aliases/ByteString.md)

return nLocktime `ByteString` in 4-byte little endian

***

### nSequence()

> `static` **nSequence**(`preimage`): `bigint`

Defined in: scrypt-ts/dist/smart-contract/builtins/functions.d.ts:1044

nSequence of the input from the preimage

#### Parameters

##### preimage

[`SigHashPreimage`](../type-aliases/SigHashPreimage.md)

the preimage

#### Returns

`bigint`

return nSequence

***

### nSequenceRaw()

> `static` **nSequenceRaw**(`preimage`): [`ByteString`](../type-aliases/ByteString.md)

Defined in: scrypt-ts/dist/smart-contract/builtins/functions.d.ts:1038

nSequence of the input from the preimage

#### Parameters

##### preimage

[`SigHashPreimage`](../type-aliases/SigHashPreimage.md)

the preimage

#### Returns

[`ByteString`](../type-aliases/ByteString.md)

return nSequence `ByteString` in 4-byte little endian

***

### nVersion()

> `static` **nVersion**(`preimage`): [`ByteString`](../type-aliases/ByteString.md)

Defined in: scrypt-ts/dist/smart-contract/builtins/functions.d.ts:996

get version of the transaction from the preimage

#### Parameters

##### preimage

[`SigHashPreimage`](../type-aliases/SigHashPreimage.md)

the preimage

#### Returns

[`ByteString`](../type-aliases/ByteString.md)

return version `ByteString` in 4-byte little endian

***

### outpoint()

> `static` **outpoint**(`preimage`): [`ByteString`](../type-aliases/ByteString.md)

Defined in: scrypt-ts/dist/smart-contract/builtins/functions.d.ts:1014

get outpoint of the transaction from the preimage

#### Parameters

##### preimage

[`SigHashPreimage`](../type-aliases/SigHashPreimage.md)

the preimage

#### Returns

[`ByteString`](../type-aliases/ByteString.md)

return outpoint `ByteString` in 32-byte hash + 4-byte little endian

***

### scriptCode()

> `static` **scriptCode**(`preimage`): [`ByteString`](../type-aliases/ByteString.md)

Defined in: scrypt-ts/dist/smart-contract/builtins/functions.d.ts:1020

get scriptCode of the transaction from the preimage. scriptCode is just scriptPubKey if there is no CODESEPARATOR in the latter

#### Parameters

##### preimage

[`SigHashPreimage`](../type-aliases/SigHashPreimage.md)

the preimage

#### Returns

[`ByteString`](../type-aliases/ByteString.md)

return scriptCode `ByteString`

***

### sigHashType()

> `static` **sigHashType**(`preimage`): [`SigHashType`](../type-aliases/SigHashType.md)

Defined in: scrypt-ts/dist/smart-contract/builtins/functions.d.ts:1068

sighash type of the signature from the preimage

#### Parameters

##### preimage

[`SigHashPreimage`](../type-aliases/SigHashPreimage.md)

the preimage

#### Returns

[`SigHashType`](../type-aliases/SigHashType.md)

return sighash type

***

### value()

> `static` **value**(`preimage`): `bigint`

Defined in: scrypt-ts/dist/smart-contract/builtins/functions.d.ts:1032

get value of the output spent by this input from the preimage

#### Parameters

##### preimage

[`SigHashPreimage`](../type-aliases/SigHashPreimage.md)

the preimage

#### Returns

`bigint`

return value

***

### valueRaw()

> `static` **valueRaw**(`preimage`): [`ByteString`](../type-aliases/ByteString.md)

Defined in: scrypt-ts/dist/smart-contract/builtins/functions.d.ts:1026

get value of the output spent by this input from the preimage

#### Parameters

##### preimage

[`SigHashPreimage`](../type-aliases/SigHashPreimage.md)

the preimage

#### Returns

[`ByteString`](../type-aliases/ByteString.md)

return value `ByteString` in 8-byte little endian
