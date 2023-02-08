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

[src/smart-contract/builtins/types.ts:328](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/types.ts#L328)

## Properties

### DelegateClazz

• `Private` `Optional` **DelegateClazz**: typeof `AbstractContract`

#### Defined in

[src/smart-contract/builtins/types.ts:326](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/types.ts#L326)

___

### \_elemType

• `Private` `Optional` **\_elemType**: `string`

#### Defined in

[src/smart-contract/builtins/types.ts:323](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/types.ts#L323)

___

### \_type

• `Private` `Optional` **\_type**: `string`

#### Defined in

[src/smart-contract/builtins/types.ts:325](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/types.ts#L325)

___

### innerSet

• **innerSet**: `Set`<`E`\>

#### Defined in

[src/smart-contract/builtins/types.ts:319](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/types.ts#L319)

___

### H\_SIZE

▪ `Static` `Readonly` **H\_SIZE**: `Int`

#### Defined in

[src/smart-contract/builtins/types.ts:321](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/types.ts#L321)

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

[src/smart-contract/builtins/types.ts:348](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/types.ts#L348)

___

### \_checkInOrder

▸ `Private` **_checkInOrder**(`low`, `high`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `low` | [`ByteString`](../README.md#bytestring) |
| `high` | [`ByteString`](../README.md#bytestring) |

#### Returns

`boolean`

#### Defined in

[src/smart-contract/builtins/types.ts:340](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/types.ts#L340)

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

[src/smart-contract/builtins/types.ts:376](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/types.ts#L376)

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

[src/smart-contract/builtins/types.ts:390](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/types.ts#L390)

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

[src/smart-contract/builtins/types.ts:401](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/types.ts#L401)

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

[src/smart-contract/builtins/types.ts:458](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/types.ts#L458)

___

### clear

▸ **clear**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/smart-contract/builtins/types.ts:439](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/types.ts#L439)

___

### data

▸ **data**(): [`ByteString`](../README.md#bytestring)

#### Returns

[`ByteString`](../README.md#bytestring)

#### Defined in

[src/smart-contract/builtins/types.ts:450](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/types.ts#L450)

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

[src/smart-contract/builtins/types.ts:424](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/types.ts#L424)

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

[src/smart-contract/builtins/types.ts:415](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/types.ts#L415)

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

[src/smart-contract/builtins/types.ts:332](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/types.ts#L332)

___

### size

▸ **size**(): `bigint`

#### Returns

`bigint`

#### Defined in

[src/smart-contract/builtins/types.ts:445](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/types.ts#L445)

___

### toSet

▸ **toSet**(): `Set`<`E`\>

#### Returns

`Set`<`E`\>

#### Defined in

[src/smart-contract/builtins/types.ts:454](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/types.ts#L454)
