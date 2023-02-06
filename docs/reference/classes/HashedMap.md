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

[src/smart-contract/builtins/types.ts:167](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/types.ts#L167)

## Properties

### DelegateClazz

• `Private` `Optional` **DelegateClazz**: typeof `AbstractContract`

#### Defined in

[src/smart-contract/builtins/types.ts:156](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/types.ts#L156)

___

### \_keyType

• `Private` `Optional` **\_keyType**: `string`

#### Defined in

[src/smart-contract/builtins/types.ts:150](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/types.ts#L150)

___

### \_type

• `Private` `Optional` **\_type**: `string`

#### Defined in

[src/smart-contract/builtins/types.ts:154](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/types.ts#L154)

___

### \_valueType

• `Private` `Optional` **\_valueType**: `string`

#### Defined in

[src/smart-contract/builtins/types.ts:152](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/types.ts#L152)

___

### innerMap

• `Private` **innerMap**: `Map`<`K`, `V`\>

#### Defined in

[src/smart-contract/builtins/types.ts:148](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/types.ts#L148)

___

### H\_SIZE

▪ `Static` `Readonly` **H\_SIZE**: `Int`

#### Defined in

[src/smart-contract/builtins/types.ts:145](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/types.ts#L145)

___

### ITEM\_SIZE

▪ `Static` `Readonly` **ITEM\_SIZE**: `Int`

#### Defined in

[src/smart-contract/builtins/types.ts:146](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/types.ts#L146)

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

[src/smart-contract/builtins/types.ts:210](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/types.ts#L210)

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

[src/smart-contract/builtins/types.ts:172](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/types.ts#L172)

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

[src/smart-contract/builtins/types.ts:223](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/types.ts#L223)

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

[src/smart-contract/builtins/types.ts:236](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/types.ts#L236)

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

[src/smart-contract/builtins/types.ts:180](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/types.ts#L180)

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

[src/smart-contract/builtins/types.ts:311](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/types.ts#L311)

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

[src/smart-contract/builtins/types.ts:298](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/types.ts#L298)

___

### clear

▸ **clear**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/smart-contract/builtins/types.ts:247](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/types.ts#L247)

___

### data

▸ **data**(): `Bytes`

#### Returns

`Bytes`

#### Defined in

[src/smart-contract/builtins/types.ts:258](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/types.ts#L258)

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

[src/smart-contract/builtins/types.ts:285](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/types.ts#L285)

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

[src/smart-contract/builtins/types.ts:275](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/types.ts#L275)

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

[src/smart-contract/builtins/types.ts:158](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/types.ts#L158)

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

[src/smart-contract/builtins/types.ts:263](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/types.ts#L263)

___

### size

▸ **size**(): `bigint`

#### Returns

`bigint`

#### Defined in

[src/smart-contract/builtins/types.ts:253](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/types.ts#L253)

___

### toMap

▸ **toMap**(): `Map`<`K`, `V`\>

#### Returns

`Map`<`K`, `V`\>

#### Defined in

[src/smart-contract/builtins/types.ts:307](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/types.ts#L307)
