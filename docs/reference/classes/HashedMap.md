[scrypt-ts](../README.md) / HashedMap

# Class: HashedMap<K, V\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `SupportedParamType` |
| `V` | extends `SupportedParamType` |

## Table of contents

### Constructors

- [constructor](HashedMap.md#constructor)

### Properties

- [DelegateClazz](HashedMap.md#delegateclazz)
- [\_keyType](HashedMap.md#_keytype)
- [\_type](HashedMap.md#_type)
- [\_valueType](HashedMap.md#_valuetype)
- [innerMap](HashedMap.md#innermap)
- [H\_SIZE](HashedMap.md#h_size)
- [ITEM\_SIZE](HashedMap.md#item_size)

### Methods

- [\_canGet](HashedMap.md#_canget)
- [\_checkInOrder](HashedMap.md#_checkinorder)
- [\_delete](HashedMap.md#_delete)
- [\_has](HashedMap.md#_has)
- [\_set](HashedMap.md#_set)
- [attach](HashedMap.md#attach)
- [canGet](HashedMap.md#canget)
- [clear](HashedMap.md#clear)
- [data](HashedMap.md#data)
- [delete](HashedMap.md#delete)
- [has](HashedMap.md#has)
- [init](HashedMap.md#init)
- [set](HashedMap.md#set)
- [size](HashedMap.md#size)
- [toMap](HashedMap.md#tomap)

## Constructors

### constructor

• **new HashedMap**<`K`, `V`\>(`map`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `SupportedParamType` |
| `V` | extends `SupportedParamType` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | `Map`<`K`, `V`\> |

#### Defined in

[src/builtins/types.ts:179](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/types.ts#L179)

## Properties

### DelegateClazz

• `Private` `Optional` **DelegateClazz**: typeof `AbstractContract`

#### Defined in

[src/builtins/types.ts:168](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/types.ts#L168)

___

### \_keyType

• `Private` `Optional` **\_keyType**: `string`

#### Defined in

[src/builtins/types.ts:162](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/types.ts#L162)

___

### \_type

• `Private` `Optional` **\_type**: `string`

#### Defined in

[src/builtins/types.ts:166](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/types.ts#L166)

___

### \_valueType

• `Private` `Optional` **\_valueType**: `string`

#### Defined in

[src/builtins/types.ts:164](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/types.ts#L164)

___

### innerMap

• `Private` **innerMap**: `Map`<`K`, `V`\>

#### Defined in

[src/builtins/types.ts:160](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/types.ts#L160)

___

### H\_SIZE

▪ `Static` `Readonly` **H\_SIZE**: `32n`

#### Defined in

[src/builtins/types.ts:157](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/types.ts#L157)

___

### ITEM\_SIZE

▪ `Static` `Readonly` **ITEM\_SIZE**: `64n`

#### Defined in

[src/builtins/types.ts:158](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/types.ts#L158)

## Methods

### \_canGet

▸ `Private` **_canGet**(`key`, `val`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`SortedItem`](../README.md#sorteditem)<`K`\> |
| `val` | `V` |

#### Returns

`boolean`

#### Defined in

[src/builtins/types.ts:221](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/types.ts#L221)

___

### \_checkInOrder

▸ `Private` **_checkInOrder**(`low`, `high`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `low` | `Bytes` |
| `high` | `Bytes` |

#### Returns

`boolean`

#### Defined in

[src/builtins/types.ts:184](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/types.ts#L184)

___

### \_delete

▸ `Private` **_delete**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`SortedItem`](../README.md#sorteditem)<`K`\> |

#### Returns

`boolean`

#### Defined in

[src/builtins/types.ts:234](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/types.ts#L234)

___

### \_has

▸ `Private` **_has**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`SortedItem`](../README.md#sorteditem)<`K`\> |

#### Returns

`boolean`

#### Defined in

[src/builtins/types.ts:247](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/types.ts#L247)

___

### \_set

▸ `Private` **_set**(`key`, `val`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`SortedItem`](../README.md#sorteditem)<`K`\> |
| `val` | `V` |

#### Returns

`boolean`

#### Defined in

[src/builtins/types.ts:191](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/types.ts#L191)

___

### attach

▸ **attach**(`map`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | `Map`<`K`, `V`\> |

#### Returns

`void`

#### Defined in

[src/builtins/types.ts:322](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/types.ts#L322)

___

### canGet

▸ **canGet**(`key`, `val`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`SortedItem`](../README.md#sorteditem)<`K`\> |
| `val` | `V` |

#### Returns

`boolean`

#### Defined in

[src/builtins/types.ts:309](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/types.ts#L309)

___

### clear

▸ **clear**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/builtins/types.ts:258](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/types.ts#L258)

___

### data

▸ **data**(): `Bytes`

#### Returns

`Bytes`

#### Defined in

[src/builtins/types.ts:269](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/types.ts#L269)

___

### delete

▸ **delete**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`SortedItem`](../README.md#sorteditem)<`K`\> |

#### Returns

`boolean`

#### Defined in

[src/builtins/types.ts:296](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/types.ts#L296)

___

### has

▸ **has**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`SortedItem`](../README.md#sorteditem)<`K`\> |

#### Returns

`boolean`

#### Defined in

[src/builtins/types.ts:286](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/types.ts#L286)

___

### init

▸ **init**(`type`, `clazz`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `clazz` | typeof `AbstractContract` |

#### Returns

`void`

#### Defined in

[src/builtins/types.ts:170](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/types.ts#L170)

___

### set

▸ **set**(`key`, `value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`SortedItem`](../README.md#sorteditem)<`K`\> |
| `value` | `V` |

#### Returns

`boolean`

#### Defined in

[src/builtins/types.ts:274](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/types.ts#L274)

___

### size

▸ **size**(): `bigint`

#### Returns

`bigint`

#### Defined in

[src/builtins/types.ts:264](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/types.ts#L264)

___

### toMap

▸ **toMap**(): `Map`<`K`, `V`\>

#### Returns

`Map`<`K`, `V`\>

#### Defined in

[src/builtins/types.ts:318](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/types.ts#L318)
