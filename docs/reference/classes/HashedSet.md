[**scrypt-ts**](../README.md)

***

[scrypt-ts](../globals.md) / HashedSet

# Class: HashedSet\<T\>

Defined in: scrypt-ts/dist/smart-contract/builtins/hashed-set.d.ts:11

The HashedSet library provides a set-like data structure.
It can be regarded as a special HashedMap where a value is the same with its key and is thus omitted.
Unique values are hashed before being stored. Only the hash values of key are saved on the chain.
`HashedSet` is a wrapper for `Set` in javascript.
Only some of the specified functions can be called in the `@method` function of a contract, but there is no restriction on other places.

## Extends

- `Set`\<`T`\>

## Type Parameters

• **T** *extends* `SupportedParamType`

## Implements

- `SortedItemAccessTraceable`

## Constructors

### new HashedSet()

> **new HashedSet**\<`T`\>(`values`?): [`HashedSet`](HashedSet.md)\<`T`\>

Defined in: scrypt-ts/dist/smart-contract/builtins/hashed-set.d.ts:26

The constructor of `HashedSet` should not be called inside the contract.
The `HashedSet` should be created outside the contract and passed to the contract via the contract's constructor.

#### Parameters

##### values?

readonly `T`[]

#### Returns

[`HashedSet`](HashedSet.md)\<`T`\>

#### Overrides

`Set<T>.constructor`

## Properties

### \[toStringTag\]

> `readonly` **\[toStringTag\]**: `string`

Defined in: typescript/lib/lib.es2015.symbol.wellknown.d.ts:145

#### Inherited from

`Set.[toStringTag]`

***

### size

> `readonly` **size**: `number`

Defined in: typescript/lib/lib.es2015.collection.d.ts:112

#### Returns

the number of (unique) elements in Set.

#### Inherited from

`Set.size`

***

### \[species\]

> `readonly` `static` **\[species\]**: `SetConstructor`

Defined in: typescript/lib/lib.es2015.symbol.wellknown.d.ts:322

#### Inherited from

`Set.[species]`

## Methods

### \[iterator\]()

> **\[iterator\]**(): `SetIterator`\<`T`\>

Defined in: typescript/lib/lib.es2015.iterable.d.ts:198

Iterates over values in the set.

#### Returns

`SetIterator`\<`T`\>

#### Inherited from

`Set.[iterator]`

***

### add()

> **add**(`value`): `this`

Defined in: scrypt-ts/dist/smart-contract/builtins/hashed-set.d.ts:33

Appends a new element with a specified value to the Set.
Can be called in the `@method` function of a contract

#### Parameters

##### value

`T`

value of a element

#### Returns

`this`

this set

#### Overrides

`Set.add`

***

### clear()

> **clear**(): `void`

Defined in: typescript/lib/lib.es2015.collection.d.ts:95

#### Returns

`void`

#### Inherited from

`Set.clear`

***

### data()

> **data**(): `Bytes`

Defined in: scrypt-ts/dist/smart-contract/builtins/hashed-set.d.ts:54

Returns the internal data representation of the set.
Can be called in the `@method` function of a contract

#### Returns

`Bytes`

***

### delete()

> **delete**(`value`): `boolean`

Defined in: scrypt-ts/dist/smart-contract/builtins/hashed-set.d.ts:40

Remove a element with a specified value from the Set.
Can be called in the `@method` function of a contract

#### Parameters

##### value

`T`

value of a element

#### Returns

`boolean`

true if an element in the Set existed and has been removed, or false if the element does not exist.

#### Overrides

`Set.delete`

***

### difference()

> **difference**\<`U`\>(`other`): `Set`\<`T`\>

Defined in: typescript/lib/lib.esnext.collection.d.ts:48

#### Type Parameters

• **U**

#### Parameters

##### other

`ReadonlySetLike`\<`U`\>

#### Returns

`Set`\<`T`\>

a new Set containing all the elements in this Set which are not also in the argument.

#### Inherited from

`Set.difference`

***

### entries()

> **entries**(): `SetIterator`\<\[`T`, `T`\]\>

Defined in: typescript/lib/lib.es2015.iterable.d.ts:202

Returns an iterable of [v,v] pairs for every value `v` in the set.

#### Returns

`SetIterator`\<\[`T`, `T`\]\>

#### Inherited from

`Set.entries`

***

### forEach()

> **forEach**(`callbackfn`, `thisArg`?): `void`

Defined in: typescript/lib/lib.es2015.collection.d.ts:104

Executes a provided function once per each value in the Set object, in insertion order.

#### Parameters

##### callbackfn

(`value`, `value2`, `set`) => `void`

##### thisArg?

`any`

#### Returns

`void`

#### Inherited from

`Set.forEach`

***

### has()

> **has**(`value`): `boolean`

Defined in: scrypt-ts/dist/smart-contract/builtins/hashed-set.d.ts:47

Check whether element exists in the set
Can be called in the `@method` function of a contract

#### Parameters

##### value

`T`

value of a element

#### Returns

`boolean`

true if an element with the specified value exists in the Set, otherwise returns false.

#### Overrides

`Set.has`

***

### intersection()

> **intersection**\<`U`\>(`other`): `Set`\<`T` & `U`\>

Defined in: typescript/lib/lib.esnext.collection.d.ts:44

#### Type Parameters

• **U**

#### Parameters

##### other

`ReadonlySetLike`\<`U`\>

#### Returns

`Set`\<`T` & `U`\>

a new Set containing all the elements which are both in this Set and in the argument.

#### Inherited from

`Set.intersection`

***

### isDisjointFrom()

> **isDisjointFrom**(`other`): `boolean`

Defined in: typescript/lib/lib.esnext.collection.d.ts:64

#### Parameters

##### other

`ReadonlySetLike`\<`unknown`\>

#### Returns

`boolean`

a boolean indicating whether this Set has no elements in common with the argument.

#### Inherited from

`Set.isDisjointFrom`

***

### isSubsetOf()

> **isSubsetOf**(`other`): `boolean`

Defined in: typescript/lib/lib.esnext.collection.d.ts:56

#### Parameters

##### other

`ReadonlySetLike`\<`unknown`\>

#### Returns

`boolean`

a boolean indicating whether all the elements in this Set are also in the argument.

#### Inherited from

`Set.isSubsetOf`

***

### isSupersetOf()

> **isSupersetOf**(`other`): `boolean`

Defined in: typescript/lib/lib.esnext.collection.d.ts:60

#### Parameters

##### other

`ReadonlySetLike`\<`unknown`\>

#### Returns

`boolean`

a boolean indicating whether all the elements in the argument are also in this Set.

#### Inherited from

`Set.isSupersetOf`

***

### keys()

> **keys**(): `SetIterator`\<`T`\>

Defined in: typescript/lib/lib.es2015.iterable.d.ts:206

Despite its name, returns an iterable of the values in the set.

#### Returns

`SetIterator`\<`T`\>

#### Inherited from

`Set.keys`

***

### symmetricDifference()

> **symmetricDifference**\<`U`\>(`other`): `Set`\<`T` \| `U`\>

Defined in: typescript/lib/lib.esnext.collection.d.ts:52

#### Type Parameters

• **U**

#### Parameters

##### other

`ReadonlySetLike`\<`U`\>

#### Returns

`Set`\<`T` \| `U`\>

a new Set containing all the elements which are in either this Set or in the argument, but not in both.

#### Inherited from

`Set.symmetricDifference`

***

### union()

> **union**\<`U`\>(`other`): `Set`\<`T` \| `U`\>

Defined in: typescript/lib/lib.esnext.collection.d.ts:40

#### Type Parameters

• **U**

#### Parameters

##### other

`ReadonlySetLike`\<`U`\>

#### Returns

`Set`\<`T` \| `U`\>

a new Set containing all the elements in this Set and also all the elements in the argument.

#### Inherited from

`Set.union`

***

### values()

> **values**(): `SetIterator`\<`T`\>

Defined in: typescript/lib/lib.es2015.iterable.d.ts:211

Returns an iterable of values in the set.

#### Returns

`SetIterator`\<`T`\>

#### Inherited from

`Set.values`
