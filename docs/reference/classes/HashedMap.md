[**scrypt-ts**](../README.md)

***

[scrypt-ts](../globals.md) / HashedMap

# Class: HashedMap\<K, V\>

Defined in: scrypt-ts/dist/smart-contract/builtins/hashed-map.d.ts:12

The `HashedMap` library provides a map/hashtable-like data structure. Unique keys and their corresponding values are hashed before being stored.
Only the hash values of key and value are saved on the chain.
`HashedMap` is a wrapper for `Map` in javascript.
Only some of the specified functions can be called in the `@method` function of a contract, but there is no restriction on other places.

## Extends

- `Map`\<`K`, `V`\>

## Type Parameters

• **K** *extends* `SupportedParamType`

• **V** *extends* `SupportedParamType`

## Implements

- `SortedItemAccessTraceable`

## Constructors

### new HashedMap()

> **new HashedMap**\<`K`, `V`\>(`entries`?): [`HashedMap`](HashedMap.md)\<`K`, `V`\>

Defined in: scrypt-ts/dist/smart-contract/builtins/hashed-map.d.ts:27

The constructor of `HashedMap` should not be called inside the contract.
The `HashedMap` should be created outside the contract and passed to the contract via the contract's constructor.

#### Parameters

##### entries?

readonly readonly \[`K`, `V`\][]

#### Returns

[`HashedMap`](HashedMap.md)\<`K`, `V`\>

#### Overrides

`Map<K, V>.constructor`

## Properties

### \[toStringTag\]

> `readonly` **\[toStringTag\]**: `string`

Defined in: typescript/lib/lib.es2015.symbol.wellknown.d.ts:137

#### Inherited from

`Map.[toStringTag]`

***

### size

> `readonly` **size**: `number`

Defined in: typescript/lib/lib.es2015.collection.d.ts:45

#### Returns

the number of elements in the Map.

#### Inherited from

`Map.size`

***

### \[species\]

> `readonly` `static` **\[species\]**: `MapConstructor`

Defined in: typescript/lib/lib.es2015.symbol.wellknown.d.ts:319

#### Inherited from

`Map.[species]`

## Methods

### canGet()

> **canGet**(`key`, `val`): `boolean`

Defined in: scrypt-ts/dist/smart-contract/builtins/hashed-map.d.ts:71

Check whether we can get a (key, val) pair from the map
Can be called in the `@method` function of a contract

#### Parameters

##### key

`K`

##### val

`V`

#### Returns

`boolean`

true if the HashedMap has the specified key and value pair in it, otherwise returns false.

***

### clear()

> **clear**(): `void`

Defined in: typescript/lib/lib.es2015.collection.d.ts:20

#### Returns

`void`

#### Inherited from

`Map.clear`

***

### delete()

> **delete**(`key`): `boolean`

Defined in: scrypt-ts/dist/smart-contract/builtins/hashed-map.d.ts:55

Remove a entry with a specified key from the map.
Can be called in the `@method` function of a contract

#### Parameters

##### key

`K`

#### Returns

`boolean`

true if an element in the HashedMap existed and has been removed, or false if the element does not exist.

#### Overrides

`Map.delete`

***

### get()

> **get**(`key`): `V`

Defined in: scrypt-ts/dist/smart-contract/builtins/hashed-map.d.ts:43

Get value of a pair in the map by key
Can not be called in the `@method` function of a contract

#### Parameters

##### key

`K`

key

#### Returns

`V`

value if key exists. Otherwise undefined.

#### Overrides

`Map.get`

***

### has()

> **has**(`key`): `boolean`

Defined in: scrypt-ts/dist/smart-contract/builtins/hashed-map.d.ts:49

Check whether key exists in the map
Can be called in the `@method` function of a contract

#### Parameters

##### key

`K`

#### Returns

`boolean`

true if the HashedMap has the specified key in it, otherwise returns false.

#### Overrides

`Map.has`

***

### set()

> **set**(`key`, `value`): `this`

Defined in: scrypt-ts/dist/smart-contract/builtins/hashed-map.d.ts:36

Insert or update a (key, val) pair to the HashedMap.
If an element with the same key already exists, the element will be updated.
Can be called in the `@method` function of a contract

#### Parameters

##### key

`K`

key

##### value

`V`

value

#### Returns

`this`

this

#### Overrides

`Map.set`

***

### groupBy()

> `static` **groupBy**\<`K`, `T`\>(`items`, `keySelector`): `Map`\<`K`, `T`[]\>

Defined in: typescript/lib/lib.es2024.collection.d.ts:25

Groups members of an iterable according to the return value of the passed callback.

#### Type Parameters

• **K**

• **T**

#### Parameters

##### items

`Iterable`\<`T`\>

An iterable.

##### keySelector

(`item`, `index`) => `K`

A callback which will be invoked for each item in items.

#### Returns

`Map`\<`K`, `T`[]\>

#### Inherited from

`Map.groupBy`
