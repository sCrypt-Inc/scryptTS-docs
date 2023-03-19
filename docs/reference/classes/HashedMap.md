[scrypt-ts](../README.md) / HashedMap

# Class: HashedMap<K, V\>

The `HashedMap` library provides a map/hashtable-like data structure. Unique keys and their corresponding values are hashed before being stored.
Only the hash values of key and value are saved on the chain.
`HashedMap` is a wrapper for `Map` in javascript.
Only some of the specified functions can be called in the `@method` function of a contract, but there is no restriction on other places.

## Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `SupportedParamType` |
| `V` | extends `SupportedParamType` |

## Hierarchy

- `Map`<`K`, `V`\>

  ↳ **`HashedMap`**

## Implements

- `SortedItemAccessTraceable`

## Table of contents

### Constructors

- [constructor](HashedMap.md#constructor)

### Properties

- [[toStringTag]](HashedMap.md#[tostringtag])
- [size](HashedMap.md#size)
- [[species]](HashedMap.md#[species])

### Methods

- [canGet](HashedMap.md#canget)
- [clear](HashedMap.md#clear)
- [delete](HashedMap.md#delete)
- [get](HashedMap.md#get)
- [has](HashedMap.md#has)
- [set](HashedMap.md#set)

## Constructors

### constructor

• **new HashedMap**<`K`, `V`\>(`entries?`)

The constructor of `HashedMap` should not be called inside the contract.
The `HashedMap` should be created outside the contract and passed to the contract via the contract's constructor.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `SupportedParamType` |
| `V` | extends `SupportedParamType` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `entries?` | readonly readonly [`K`, `V`][] |

#### Overrides

Map&lt;K, V\&gt;.constructor

#### Defined in

dist/smart-contract/builtins/hashed-map.d.ts:27

## Properties

### [toStringTag]

• `Readonly` **[toStringTag]**: `string`

#### Inherited from

Map.\_\_@toStringTag@24

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:135

___

### size

• `Readonly` **size**: `number`

#### Inherited from

Map.size

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:48

___

### [species]

▪ `Static` `Readonly` **[species]**: `MapConstructor`

#### Inherited from

Map.\_\_@species@598

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:317

## Methods

### canGet

▸ **canGet**(`key`, `val`): `boolean`

Check whether we can get a (key, val) pair from the map
Can be called in the `@method` function of a contract

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |
| `val` | `V` |

#### Returns

`boolean`

true if the HashedMap has the specified key and value pair in it, otherwise returns false.

#### Defined in

dist/smart-contract/builtins/hashed-map.d.ts:71

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Inherited from

Map.clear

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:23

___

### delete

▸ **delete**(`key`): `boolean`

Remove a entry with a specified key from the map.
Can be called in the `@method` function of a contract

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

`boolean`

true if an element in the HashedMap existed and has been removed, or false if the element does not exist.

#### Overrides

Map.delete

#### Defined in

dist/smart-contract/builtins/hashed-map.d.ts:55

___

### get

▸ **get**(`key`): `V`

Get value of a pair in the map by key
Can not be called in the `@method` function of a contract

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `K` | key |

#### Returns

`V`

value if key exists. Otherwise undefined.

#### Overrides

Map.get

#### Defined in

dist/smart-contract/builtins/hashed-map.d.ts:43

___

### has

▸ **has**(`key`): `boolean`

Check whether key exists in the map
Can be called in the `@method` function of a contract

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

`boolean`

true if the HashedMap has the specified key in it, otherwise returns false.

#### Overrides

Map.has

#### Defined in

dist/smart-contract/builtins/hashed-map.d.ts:49

___

### set

▸ **set**(`key`, `value`): [`HashedMap`](HashedMap.md)<`K`, `V`\>

Insert or update a (key, val) pair to the HashedMap.
If an element with the same key already exists, the element will be updated.
Can be called in the `@method` function of a contract

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `K` | key |
| `value` | `V` | value |

#### Returns

[`HashedMap`](HashedMap.md)<`K`, `V`\>

this

#### Overrides

Map.set

#### Defined in

dist/smart-contract/builtins/hashed-map.d.ts:36
