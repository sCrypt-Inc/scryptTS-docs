[scrypt-ts](../README.md) / HashedSet

# Class: HashedSet<E\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends `SupportedParamType` |

## Table of contents

### Constructors

- [constructor](HashedSet.md#constructor)

### Properties

- [DelegateClazz](HashedSet.md#delegateclazz)
- [\_elemType](HashedSet.md#_elemtype)
- [\_type](HashedSet.md#_type)
- [innerSet](HashedSet.md#innerset)
- [H\_SIZE](HashedSet.md#h_size)

### Methods

- [\_add](HashedSet.md#_add)
- [\_checkInOrder](HashedSet.md#_checkinorder)
- [\_delete](HashedSet.md#_delete)
- [\_has](HashedSet.md#_has)
- [add](HashedSet.md#add)
- [attach](HashedSet.md#attach)
- [clear](HashedSet.md#clear)
- [data](HashedSet.md#data)
- [delete](HashedSet.md#delete)
- [has](HashedSet.md#has)
- [init](HashedSet.md#init)
- [size](HashedSet.md#size)
- [toSet](HashedSet.md#toset)

## Constructors

### constructor

• **new HashedSet**<`E`\>(`set`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends `SupportedParamType` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `set` | `Set`<`E`\> |

#### Defined in

[src/smart-contract/builtins/types.ts:329](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/types.ts#L329)

## Properties

### DelegateClazz

• `Private` `Optional` **DelegateClazz**: typeof `AbstractContract`

#### Defined in

[src/smart-contract/builtins/types.ts:327](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/types.ts#L327)

___

### \_elemType

• `Private` `Optional` **\_elemType**: `string`

#### Defined in

[src/smart-contract/builtins/types.ts:324](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/types.ts#L324)

___

### \_type

• `Private` `Optional` **\_type**: `string`

#### Defined in

[src/smart-contract/builtins/types.ts:326](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/types.ts#L326)

___

### innerSet

• **innerSet**: `Set`<`E`\>

#### Defined in

[src/smart-contract/builtins/types.ts:320](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/types.ts#L320)

___

### H\_SIZE

▪ `Static` `Readonly` **H\_SIZE**: `Int`

#### Defined in

[src/smart-contract/builtins/types.ts:322](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/types.ts#L322)

## Methods

### \_add

▸ `Private` **_add**(`elem`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `elem` | [`SortedItem`](../README.md#sorteditem)<`E`\> |

#### Returns

`boolean`

#### Defined in

[src/smart-contract/builtins/types.ts:349](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/types.ts#L349)

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

[src/smart-contract/builtins/types.ts:341](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/types.ts#L341)

___

### \_delete

▸ `Private` **_delete**(`elem`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `elem` | [`SortedItem`](../README.md#sorteditem)<`E`\> |

#### Returns

`boolean`

#### Defined in

[src/smart-contract/builtins/types.ts:377](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/types.ts#L377)

___

### \_has

▸ `Private` **_has**(`elem`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `elem` | [`SortedItem`](../README.md#sorteditem)<`E`\> |

#### Returns

`boolean`

#### Defined in

[src/smart-contract/builtins/types.ts:391](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/types.ts#L391)

___

### add

▸ **add**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`SortedItem`](../README.md#sorteditem)<`E`\> |

#### Returns

`boolean`

#### Defined in

[src/smart-contract/builtins/types.ts:402](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/types.ts#L402)

___

### attach

▸ **attach**(`set`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `set` | `Set`<`E`\> |

#### Returns

`void`

#### Defined in

[src/smart-contract/builtins/types.ts:459](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/types.ts#L459)

___

### clear

▸ **clear**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/smart-contract/builtins/types.ts:440](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/types.ts#L440)

___

### data

▸ **data**(): `Bytes`

#### Returns

`Bytes`

#### Defined in

[src/smart-contract/builtins/types.ts:451](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/types.ts#L451)

___

### delete

▸ **delete**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`SortedItem`](../README.md#sorteditem)<`E`\> |

#### Returns

`boolean`

#### Defined in

[src/smart-contract/builtins/types.ts:425](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/types.ts#L425)

___

### has

▸ **has**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`SortedItem`](../README.md#sorteditem)<`E`\> |

#### Returns

`boolean`

#### Defined in

[src/smart-contract/builtins/types.ts:416](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/types.ts#L416)

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

[src/smart-contract/builtins/types.ts:333](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/types.ts#L333)

___

### size

▸ **size**(): `bigint`

#### Returns

`bigint`

#### Defined in

[src/smart-contract/builtins/types.ts:446](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/types.ts#L446)

___

### toSet

▸ **toSet**(): `Set`<`E`\>

#### Returns

`Set`<`E`\>

#### Defined in

[src/smart-contract/builtins/types.ts:455](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/smart-contract/builtins/types.ts#L455)
