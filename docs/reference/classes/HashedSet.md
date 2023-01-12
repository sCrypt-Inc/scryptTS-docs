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

[src/builtins/types.ts:340](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/types.ts#L340)

## Properties

### DelegateClazz

• `Private` `Optional` **DelegateClazz**: typeof `AbstractContract`

#### Defined in

[src/builtins/types.ts:338](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/types.ts#L338)

___

### \_elemType

• `Private` `Optional` **\_elemType**: `string`

#### Defined in

[src/builtins/types.ts:335](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/types.ts#L335)

___

### \_type

• `Private` `Optional` **\_type**: `string`

#### Defined in

[src/builtins/types.ts:337](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/types.ts#L337)

___

### innerSet

• **innerSet**: `Set`<`E`\>

#### Defined in

[src/builtins/types.ts:331](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/types.ts#L331)

___

### H\_SIZE

▪ `Static` `Readonly` **H\_SIZE**: `32n`

#### Defined in

[src/builtins/types.ts:333](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/types.ts#L333)

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

[src/builtins/types.ts:359](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/types.ts#L359)

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

[src/builtins/types.ts:352](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/types.ts#L352)

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

[src/builtins/types.ts:387](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/types.ts#L387)

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

[src/builtins/types.ts:401](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/types.ts#L401)

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

[src/builtins/types.ts:412](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/types.ts#L412)

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

[src/builtins/types.ts:469](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/types.ts#L469)

___

### clear

▸ **clear**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/builtins/types.ts:450](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/types.ts#L450)

___

### data

▸ **data**(): `Bytes`

#### Returns

`Bytes`

#### Defined in

[src/builtins/types.ts:461](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/types.ts#L461)

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

[src/builtins/types.ts:435](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/types.ts#L435)

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

[src/builtins/types.ts:426](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/types.ts#L426)

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

[src/builtins/types.ts:344](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/types.ts#L344)

___

### size

▸ **size**(): `bigint`

#### Returns

`bigint`

#### Defined in

[src/builtins/types.ts:456](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/types.ts#L456)

___

### toSet

▸ **toSet**(): `Set`<`E`\>

#### Returns

`Set`<`E`\>

#### Defined in

[src/builtins/types.ts:465](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/builtins/types.ts#L465)
