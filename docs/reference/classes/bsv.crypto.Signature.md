[scrypt-ts](../README.md) / [bsv](../modules/bsv.md) / [crypto](../modules/bsv.crypto.md) / Signature

# Class: Signature

[bsv](../modules/bsv.md).[crypto](../modules/bsv.crypto.md).Signature

## Table of contents

### Constructors

- [constructor](bsv.crypto.Signature.md#constructor)

### Properties

- [nhashtype](bsv.crypto.Signature.md#nhashtype)
- [ALL](bsv.crypto.Signature.md#all)
- [ANYONECANPAY\_ALL](bsv.crypto.Signature.md#anyonecanpay_all)
- [ANYONECANPAY\_NONE](bsv.crypto.Signature.md#anyonecanpay_none)
- [ANYONECANPAY\_SINGLE](bsv.crypto.Signature.md#anyonecanpay_single)
- [NONE](bsv.crypto.Signature.md#none)
- [SIGHASH\_ALL](bsv.crypto.Signature.md#sighash_all)
- [SIGHASH\_ANYONECANPAY](bsv.crypto.Signature.md#sighash_anyonecanpay)
- [SIGHASH\_FORKID](bsv.crypto.Signature.md#sighash_forkid)
- [SIGHASH\_NONE](bsv.crypto.Signature.md#sighash_none)
- [SIGHASH\_SINGLE](bsv.crypto.Signature.md#sighash_single)
- [SINGLE](bsv.crypto.Signature.md#single)

### Methods

- [hasDefinedHashtype](bsv.crypto.Signature.md#hasdefinedhashtype)
- [hasLowS](bsv.crypto.Signature.md#haslows)
- [toBuffer](bsv.crypto.Signature.md#tobuffer)
- [toDER](bsv.crypto.Signature.md#toder)
- [toString](bsv.crypto.Signature.md#tostring)
- [toTxFormat](bsv.crypto.Signature.md#totxformat)
- [fromDER](bsv.crypto.Signature.md#fromder)
- [fromString](bsv.crypto.Signature.md#fromstring)
- [fromTxFormat](bsv.crypto.Signature.md#fromtxformat)
- [isTxDER](bsv.crypto.Signature.md#istxder)

## Constructors

### constructor

• **new Signature**()

## Properties

### nhashtype

• **nhashtype**: `number`

#### Defined in

node_modules/bsv/index.d.ts:780

___

### ALL

▪ `Static` **ALL**: `number`

#### Defined in

node_modules/bsv/index.d.ts:773

___

### ANYONECANPAY\_ALL

▪ `Static` **ANYONECANPAY\_ALL**: `number`

#### Defined in

node_modules/bsv/index.d.ts:776

___

### ANYONECANPAY\_NONE

▪ `Static` **ANYONECANPAY\_NONE**: `number`

#### Defined in

node_modules/bsv/index.d.ts:777

___

### ANYONECANPAY\_SINGLE

▪ `Static` **ANYONECANPAY\_SINGLE**: `number`

#### Defined in

node_modules/bsv/index.d.ts:778

___

### NONE

▪ `Static` **NONE**: `number`

#### Defined in

node_modules/bsv/index.d.ts:774

___

### SIGHASH\_ALL

▪ `Static` **SIGHASH\_ALL**: `number`

#### Defined in

node_modules/bsv/index.d.ts:767

___

### SIGHASH\_ANYONECANPAY

▪ `Static` **SIGHASH\_ANYONECANPAY**: `number`

#### Defined in

node_modules/bsv/index.d.ts:771

___

### SIGHASH\_FORKID

▪ `Static` **SIGHASH\_FORKID**: `number`

#### Defined in

node_modules/bsv/index.d.ts:770

___

### SIGHASH\_NONE

▪ `Static` **SIGHASH\_NONE**: `number`

#### Defined in

node_modules/bsv/index.d.ts:768

___

### SIGHASH\_SINGLE

▪ `Static` **SIGHASH\_SINGLE**: `number`

#### Defined in

node_modules/bsv/index.d.ts:769

___

### SINGLE

▪ `Static` **SINGLE**: `number`

#### Defined in

node_modules/bsv/index.d.ts:775

## Methods

### hasDefinedHashtype

▸ **hasDefinedHashtype**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/bsv/index.d.ts:784

___

### hasLowS

▸ **hasLowS**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/bsv/index.d.ts:786

___

### toBuffer

▸ **toBuffer**(): `Buffer`

#### Returns

`Buffer`

#### Defined in

node_modules/bsv/index.d.ts:782

___

### toDER

▸ **toDER**(): `Buffer`

#### Returns

`Buffer`

#### Defined in

node_modules/bsv/index.d.ts:783

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

node_modules/bsv/index.d.ts:781

___

### toTxFormat

▸ **toTxFormat**(): `Buffer`

#### Returns

`Buffer`

#### Defined in

node_modules/bsv/index.d.ts:787

___

### fromDER

▸ `Static` **fromDER**(`sig`): [`Signature`](bsv.crypto.Signature.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sig` | `Buffer` |

#### Returns

[`Signature`](bsv.crypto.Signature.md)

#### Defined in

node_modules/bsv/index.d.ts:764

___

### fromString

▸ `Static` **fromString**(`data`): [`Signature`](bsv.crypto.Signature.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |

#### Returns

[`Signature`](bsv.crypto.Signature.md)

#### Defined in

node_modules/bsv/index.d.ts:766

___

### fromTxFormat

▸ `Static` **fromTxFormat**(`buf`): [`Signature`](bsv.crypto.Signature.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | `Buffer` |

#### Returns

[`Signature`](bsv.crypto.Signature.md)

#### Defined in

node_modules/bsv/index.d.ts:765

___

### isTxDER

▸ `Static` **isTxDER**(`buf`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | `Buffer` |

#### Returns

`boolean`

#### Defined in

node_modules/bsv/index.d.ts:785
