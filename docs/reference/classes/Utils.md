[scrypt-ts](../README.md) / Utils

# Class: Utils

The Utils library provides a set of commonly used utility functions.

## Table of contents

### Constructors

- [constructor](Utils.md#constructor)

### Properties

- [OutputValueLen](Utils.md#outputvaluelen)
- [PubKeyHashLen](Utils.md#pubkeyhashlen)

### Methods

- [buildOpreturnScript](Utils.md#buildopreturnscript)
- [buildOutput](Utils.md#buildoutput)
- [buildPublicKeyHashOutput](Utils.md#buildpublickeyhashoutput)
- [buildPublicKeyHashScript](Utils.md#buildpublickeyhashscript)
- [fromLEUnsigned](Utils.md#fromleunsigned)
- [readVarint](Utils.md#readvarint)
- [toLEUnsigned](Utils.md#toleunsigned)
- [writeVarint](Utils.md#writevarint)

## Constructors

### constructor

• **new Utils**()

## Properties

### OutputValueLen

▪ `Static` `Readonly` **OutputValueLen**: `bigint`

number of string to denote output value

#### Defined in

dist/smart-contract/builtins/functions.d.ts:894

___

### PubKeyHashLen

▪ `Static` `Readonly` **PubKeyHashLen**: `bigint`

number of string to denote a public key hash

#### Defined in

dist/smart-contract/builtins/functions.d.ts:896

## Methods

### buildOpreturnScript

▸ `Static` **buildOpreturnScript**(`data`): [`ByteString`](../README.md#bytestring)

build `OP_FALSE OP_RETURN` script from data payload

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | [`ByteString`](../README.md#bytestring) | the data payload |

#### Returns

[`ByteString`](../README.md#bytestring)

a ByteString contains the data payload

#### Defined in

dist/smart-contract/builtins/functions.d.ts:947

___

### buildOutput

▸ `Static` **buildOutput**(`outputScript`, `outputSatoshis`): [`ByteString`](../README.md#bytestring)

build a tx output from its script and satoshi amount

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outputScript` | [`ByteString`](../README.md#bytestring) | the locking script |
| `outputSatoshis` | `bigint` | the satoshi amount |

#### Returns

[`ByteString`](../README.md#bytestring)

a `ByteString` that represents an output

#### Defined in

dist/smart-contract/builtins/functions.d.ts:928

___

### buildPublicKeyHashOutput

▸ `Static` **buildPublicKeyHashOutput**(`pubKeyHash`, `amount`): [`ByteString`](../README.md#bytestring)

build P2PKH output from PubKeyHash

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pubKeyHash` | [`Ripemd160`](../README.md#ripemd160) | the address to receive change coin |
| `amount` | `bigint` | satoshi amount |

#### Returns

[`ByteString`](../README.md#bytestring)

a P2PKH output

#### Defined in

dist/smart-contract/builtins/functions.d.ts:941

___

### buildPublicKeyHashScript

▸ `Static` **buildPublicKeyHashScript**(`pubKeyHash`): [`ByteString`](../README.md#bytestring)

build P2PKH script from PubKeyHash

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pubKeyHash` | [`Ripemd160`](../README.md#ripemd160) | recipient's pubKeyHash |

#### Returns

[`ByteString`](../README.md#bytestring)

a `ByteString` that represents P2PKH script

#### Defined in

dist/smart-contract/builtins/functions.d.ts:934

___

### fromLEUnsigned

▸ `Static` **fromLEUnsigned**(`bytes`): `bigint`

convert `ByteString` to unsigned integer, in sign-magnitude little endian

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bytes` | [`ByteString`](../README.md#bytestring) | the `ByteString` to be converted |

#### Returns

`bigint`

returns a number

#### Defined in

dist/smart-contract/builtins/functions.d.ts:909

___

### readVarint

▸ `Static` **readVarint**(`buf`): [`ByteString`](../README.md#bytestring)

read a [VarInt (variable integer)][https://learnmeabitcoin.com/technical/varint](https://learnmeabitcoin.com/technical/varint) field from the beginning of 'buf'

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `buf` | [`ByteString`](../README.md#bytestring) | a buffer `ByteString` |

#### Returns

[`ByteString`](../README.md#bytestring)

return a `ByteString` of the VarInt field

#### Defined in

dist/smart-contract/builtins/functions.d.ts:915

___

### toLEUnsigned

▸ `Static` **toLEUnsigned**(`n`, `l`): [`ByteString`](../README.md#bytestring)

convert signed integer `n` to unsigned integer of `l` string, in little endian

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `n` | `bigint` | the number to be converted |
| `l` | `bigint` | expected length |

#### Returns

[`ByteString`](../README.md#bytestring)

returns a `ByteString`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:903

___

### writeVarint

▸ `Static` **writeVarint**(`buf`): [`ByteString`](../README.md#bytestring)

convert 'b' to a [VarInt (variable integer)][https://learnmeabitcoin.com/technical/varint](https://learnmeabitcoin.com/technical/varint) field, including the preceding length

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `buf` | [`ByteString`](../README.md#bytestring) | a buffer `ByteString` |

#### Returns

[`ByteString`](../README.md#bytestring)

return a `ByteString` appended the VarInt

#### Defined in

dist/smart-contract/builtins/functions.d.ts:921
