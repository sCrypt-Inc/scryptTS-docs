---
sidebar_position: 3
---

[ts-scrypt](README.md) / Exports

# ts-scrypt

## Table of contents

### Classes

- [Bool](classes/Bool.md)
- [Bytes](classes/Bytes.md)
- [Constants](classes/Constants.md)
- [Int](classes/Int.md)
- [OpCode](classes/OpCode.md)
- [OpCodeType](classes/OpCodeType.md)
- [PrivKey](classes/PrivKey.md)
- [PubKey](classes/PubKey.md)
- [PubKeyHash](classes/PubKeyHash.md)
- [Ripemd160](classes/Ripemd160.md)
- [Sha1](classes/Sha1.md)
- [Sha256](classes/Sha256.md)
- [Sig](classes/Sig.md)
- [SigHash](classes/SigHash.md)
- [SigHashPreimage](classes/SigHashPreimage.md)
- [SigHashType](classes/SigHashType.md)
- [SmartContract](classes/SmartContract.md)
- [StdShift](classes/StdShift.md)
- [Tx](classes/Tx.md)
- [Utils](classes/Utils.md)
- [VarIntReader](classes/VarIntReader.md)
- [VarIntWriter](classes/VarIntWriter.md)

### Type Aliases

- [FixedArray](modules.md#fixedarray)
- [TxOutputRef](modules.md#txoutputref)
- [auto](modules.md#auto)

### Functions

- [abs](modules.md#abs)
- [asm](modules.md#asm)
- [assert](modules.md#assert)
- [b](modules.md#b)
- [checkMultiSig](modules.md#checkmultisig)
- [checkSig](modules.md#checksig)
- [contract](modules.md#contract)
- [exit](modules.md#exit)
- [flattenSha256](modules.md#flattensha256)
- [hash160](modules.md#hash160)
- [hash256](modules.md#hash256)
- [len](modules.md#len)
- [loop](modules.md#loop)
- [max](modules.md#max)
- [method](modules.md#method)
- [min](modules.md#min)
- [num2bin](modules.md#num2bin)
- [pack](modules.md#pack)
- [prop](modules.md#prop)
- [reverseBytes](modules.md#reversebytes)
- [ripemd160](modules.md#ripemd160)
- [sha1](modules.md#sha1)
- [sha256](modules.md#sha256)
- [unpack](modules.md#unpack)
- [within](modules.md#within)

## Type Aliases

### FixedArray

Ƭ **FixedArray**<`T`, `N`\>: `GrowToSize`<`T`, [], `N`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `N` | extends `number` |

#### Defined in

[src/builtins/types.ts:14](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/types.ts#L14)

___

### TxOutputRef

Ƭ **TxOutputRef**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `outputIndex` | `number` |
| `tx` | `bsv.Transaction` |

#### Defined in

[src/contract.ts:17](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/contract.ts#L17)

___

### auto

Ƭ **auto**: `any`

#### Defined in

[src/builtins/types.ts:6](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/types.ts#L6)

## Functions

### abs

▸ **abs**(`a`): `bigint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `bigint` |

#### Returns

`bigint`

#### Defined in

[src/builtins/functions.ts:45](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L45)

___

### asm

▸ **asm**<`ReturnType`\>(`code`): `ReturnType`

#### Type parameters

| Name |
| :------ |
| `ReturnType` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `any` |

#### Returns

`ReturnType`

#### Defined in

[src/builtins/functions.ts:98](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L98)

___

### assert

▸ **assert**(`cond`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cond` | `boolean` |

#### Returns

`void`

#### Defined in

[src/builtins/functions.ts:79](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L79)

___

### b

▸ **b**(`a`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `TemplateStringsArray` |

#### Returns

`string`

#### Defined in

[src/builtins/types.ts:9](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/types.ts#L9)

___

### checkMultiSig

▸ **checkMultiSig**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Sig`](classes/Sig.md)[] |
| `b` | [`PubKey`](classes/PubKey.md)[] |

#### Returns

`boolean`

#### Defined in

[src/builtins/functions.ts:35](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L35)

___

### checkSig

▸ **checkSig**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Sig`](classes/Sig.md) |
| `b` | [`PubKey`](classes/PubKey.md) |

#### Returns

`boolean`

#### Defined in

[src/builtins/functions.ts:34](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L34)

___

### contract

▸ **contract**(`target`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |

#### Returns

`any`

#### Defined in

[src/decorators.ts:3](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/decorators.ts#L3)

___

### exit

▸ **exit**(`a`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `boolean` |

#### Returns

`void`

#### Defined in

[src/builtins/functions.ts:42](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L42)

___

### flattenSha256

▸ **flattenSha256**(`a`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `any` |

#### Returns

`string`

#### Defined in

[src/builtins/functions.ts:75](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L75)

___

### hash160

▸ **hash160**(`a`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `string` |

#### Returns

`string`

#### Defined in

[src/builtins/functions.ts:71](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L71)

___

### hash256

▸ **hash256**(`a`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `string` |

#### Returns

`string`

#### Defined in

[src/builtins/functions.ts:74](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L74)

___

### len

▸ **len**(`a`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `string` |

#### Returns

`number`

#### Defined in

[src/builtins/functions.ts:21](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L21)

___

### loop

▸ **loop**(`times`): (`fn`: (`i`: `number`) => `void`) => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `times` | `bigint` |

#### Returns

`fn`

▸ (`fn`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`i`: `number`) => `void` |

##### Returns

`void`

#### Defined in

[src/builtins/functions.ts:86](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L86)

___

### max

▸ **max**(`a`, `b`): `bigint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `bigint` |
| `b` | `bigint` |

#### Returns

`bigint`

#### Defined in

[src/builtins/functions.ts:54](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L54)

___

### method

▸ **method**(`target`, `methodName`, `descriptor`): `PropertyDescriptor`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |
| `methodName` | `string` |
| `descriptor` | `PropertyDescriptor` |

#### Returns

`PropertyDescriptor`

#### Defined in

[src/decorators.ts:8](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/decorators.ts#L8)

___

### min

▸ **min**(`a`, `b`): `bigint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `bigint` |
| `b` | `bigint` |

#### Returns

`bigint`

#### Defined in

[src/builtins/functions.ts:51](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L51)

___

### num2bin

▸ **num2bin**(`a`, `c`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `bigint` |
| `c` | `bigint` |

#### Returns

`string`

#### Defined in

[src/builtins/functions.ts:20](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L20)

___

### pack

▸ **pack**(`n`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `bigint` |

#### Returns

`string`

#### Defined in

[src/builtins/functions.ts:10](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L10)

___

### prop

▸ **prop**(`state?`): (`target`: `any`, `propertyName`: `string`) => `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `state` | `boolean` | `false` |

#### Returns

`fn`

▸ (`target`, `propertyName`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |
| `propertyName` | `string` |

##### Returns

`void`

#### Defined in

[src/decorators.ts:45](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/decorators.ts#L45)

___

### reverseBytes

▸ **reverseBytes**(`a`, `c`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `string` |
| `c` | `number` |

#### Returns

`string`

#### Defined in

[src/builtins/functions.ts:22](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L22)

___

### ripemd160

▸ **ripemd160**(`a`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `string` |

#### Returns

`string`

#### Defined in

[src/builtins/functions.ts:62](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L62)

___

### sha1

▸ **sha1**(`a`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `string` |

#### Returns

`string`

#### Defined in

[src/builtins/functions.ts:65](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L65)

___

### sha256

▸ **sha256**(`a`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `string` |

#### Returns

`string`

#### Defined in

[src/builtins/functions.ts:68](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L68)

___

### unpack

▸ **unpack**(`a`): `bigint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `string` |

#### Returns

`bigint`

#### Defined in

[src/builtins/functions.ts:16](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L16)

___

### within

▸ **within**(`x`, `min`, `max`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `bigint` |
| `min` | `bigint` |
| `max` | `bigint` |

#### Returns

`boolean`

#### Defined in

[src/builtins/functions.ts:57](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L57)
