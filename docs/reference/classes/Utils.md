[scrypt-ts](../README.md) / Utils

# Class: Utils

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

#### Defined in

[src/smart-contract/builtins/functions.ts:413](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/functions.ts#L413)

___

### PubKeyHashLen

▪ `Static` `Readonly` **PubKeyHashLen**: `bigint`

#### Defined in

[src/smart-contract/builtins/functions.ts:415](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/functions.ts#L415)

## Methods

### buildOpreturnScript

▸ `Static` **buildOpreturnScript**(`data`): [`ByteString`](../README.md#bytestring)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`ByteString`](../README.md#bytestring) |

#### Returns

[`ByteString`](../README.md#bytestring)

#### Defined in

[src/smart-contract/builtins/functions.ts:504](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/functions.ts#L504)

___

### buildOutput

▸ `Static` **buildOutput**(`outputScript`, `outputSatoshis`): [`ByteString`](../README.md#bytestring)

#### Parameters

| Name | Type |
| :------ | :------ |
| `outputScript` | [`ByteString`](../README.md#bytestring) |
| `outputSatoshis` | `bigint` |

#### Returns

[`ByteString`](../README.md#bytestring)

#### Defined in

[src/smart-contract/builtins/functions.ts:483](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/functions.ts#L483)

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

[src/smart-contract/builtins/functions.ts:499](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/functions.ts#L499)

___

### buildPublicKeyHashScript

▸ `Static` **buildPublicKeyHashScript**(`pubKeyHash`): [`ByteString`](../README.md#bytestring)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pubKeyHash` | [`Ripemd160`](../README.md#ripemd160) |

#### Returns

[`ByteString`](../README.md#bytestring)

#### Defined in

[src/smart-contract/builtins/functions.ts:488](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/functions.ts#L488)

___

### fromLEUnsigned

▸ `Static` **fromLEUnsigned**(`bytes`): `bigint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | [`ByteString`](../README.md#bytestring) |

#### Returns

`bigint`

#### Defined in

[src/smart-contract/builtins/functions.ts:424](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/functions.ts#L424)

___

### readVarint

▸ `Static` **readVarint**(`buf`): [`ByteString`](../README.md#bytestring)

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`ByteString`](../README.md#bytestring) |

#### Returns

[`ByteString`](../README.md#bytestring)

#### Defined in

[src/smart-contract/builtins/functions.ts:432](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/functions.ts#L432)

___

### toLEUnsigned

▸ `Static` **toLEUnsigned**(`n`, `l`): [`ByteString`](../README.md#bytestring)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `bigint` |
| `l` | `bigint` |

#### Returns

[`ByteString`](../README.md#bytestring)

#### Defined in

[src/smart-contract/builtins/functions.ts:417](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/functions.ts#L417)

___

### writeVarint

▸ `Static` **writeVarint**(`buf`): [`ByteString`](../README.md#bytestring)

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`ByteString`](../README.md#bytestring) |

#### Returns

[`ByteString`](../README.md#bytestring)

#### Defined in

[src/smart-contract/builtins/functions.ts:460](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/functions.ts#L460)
