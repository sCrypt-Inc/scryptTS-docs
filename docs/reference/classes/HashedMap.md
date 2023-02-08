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

[src/smart-contract/builtins/types.ts:166](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/types.ts#L166)

## Properties

### DelegateClazz

• `Private` `Optional` **DelegateClazz**: typeof `AbstractContract`

#### Defined in

[src/smart-contract/builtins/types.ts:155](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/types.ts#L155)

___

### \_keyType

• `Private` `Optional` **\_keyType**: `string`

#### Defined in

[src/smart-contract/builtins/types.ts:149](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/types.ts#L149)

___

### \_type

• `Private` `Optional` **\_type**: `string`

#### Defined in

[src/smart-contract/builtins/types.ts:153](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/types.ts#L153)

___

### \_valueType

• `Private` `Optional` **\_valueType**: `string`

#### Defined in

[src/smart-contract/builtins/types.ts:151](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/types.ts#L151)

___

### innerMap

• `Private` **innerMap**: `Map`<`K`, `V`\>

#### Defined in

[src/smart-contract/builtins/types.ts:147](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/types.ts#L147)

___

### H\_SIZE

▪ `Static` `Readonly` **H\_SIZE**: `Int`

#### Defined in

[src/smart-contract/builtins/types.ts:144](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/types.ts#L144)

___

### ITEM\_SIZE

▪ `Static` `Readonly` **ITEM\_SIZE**: `Int`

#### Defined in

[src/smart-contract/builtins/types.ts:145](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/types.ts#L145)

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

[src/smart-contract/builtins/types.ts:209](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/types.ts#L209)

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

[src/smart-contract/builtins/types.ts:171](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/types.ts#L171)

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

[src/smart-contract/builtins/types.ts:222](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/types.ts#L222)

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

[src/smart-contract/builtins/types.ts:235](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/types.ts#L235)

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

[src/smart-contract/builtins/types.ts:179](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/types.ts#L179)

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

[src/smart-contract/builtins/types.ts:310](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/types.ts#L310)

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

[src/smart-contract/builtins/types.ts:297](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/types.ts#L297)

___

### clear

▸ **clear**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/smart-contract/builtins/types.ts:246](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/types.ts#L246)

___

### data

▸ **data**(): [`ByteString`](../README.md#bytestring)

#### Returns

[`ByteString`](../README.md#bytestring)

#### Defined in

[src/smart-contract/builtins/types.ts:257](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/types.ts#L257)

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

[src/smart-contract/builtins/types.ts:284](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/types.ts#L284)

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

[src/smart-contract/builtins/types.ts:274](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/types.ts#L274)

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

[src/smart-contract/builtins/types.ts:157](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/types.ts#L157)

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

[src/smart-contract/builtins/types.ts:262](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/types.ts#L262)

___

### size

▸ **size**(): `bigint`

#### Returns

`bigint`

#### Defined in

[src/smart-contract/builtins/types.ts:252](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/types.ts#L252)

___

### toMap

▸ **toMap**(): `Map`<`K`, `V`\>

#### Returns

`Map`<`K`, `V`\>

#### Defined in

[src/smart-contract/builtins/types.ts:306](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/builtins/types.ts#L306)
