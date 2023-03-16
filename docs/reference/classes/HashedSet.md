[scrypt-ts](../README.md) / HashedSet

# Class: HashedSet<T\>

The HashedSet library provides a set-like data structure.
It can be regarded as a special HashedMap where a value is the same with its key and is thus omitted.
Unique values are hashed before being stored. Only the hash values of key are saved on the chain.
`HashedSet` is a wrapper for `Set` in javascript.
Only some of the specified functions can be called in the `@method` function of a contract, but there is no restriction on other places.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `SupportedParamType` |

## Hierarchy

- `Set`<`T`\>

  ↳ **`HashedSet`**

## Implements

- `SortedItemAccessTraceable`

## Table of contents

### Constructors

- [constructor](HashedSet.md#constructor)

### Properties

- [[toStringTag]](HashedSet.md#[tostringtag])
- [size](HashedSet.md#size)
- [[species]](HashedSet.md#[species])

### Methods

- [[iterator]](HashedSet.md#[iterator])
- [add](HashedSet.md#add)
- [clear](HashedSet.md#clear)
- [data](HashedSet.md#data)
- [delete](HashedSet.md#delete)
- [entries](HashedSet.md#entries)
- [forEach](HashedSet.md#foreach)
- [has](HashedSet.md#has)
- [keys](HashedSet.md#keys)
- [values](HashedSet.md#values)

## Constructors

### constructor

• **new HashedSet**<`T`\>(`values?`)

The constructor of `HashedSet` should not be called inside the contract.
The `HashedSet` should be created outside the contract and passed to the contract via the contract's constructor.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `SupportedParamType` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values?` | readonly `T`[] |

#### Overrides

Set&lt;T\&gt;.constructor

#### Defined in

dist/smart-contract/builtins/hashed-set.d.ts:26

## Properties

### [toStringTag]

• `Readonly` **[toStringTag]**: `string`

#### Inherited from

Set.\_\_@toStringTag@24

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:143

___

### size

• `Readonly` **size**: `number`

#### Inherited from

Set.size

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:115

___

### [species]

▪ `Static` `Readonly` **[species]**: `SetConstructor`

#### Inherited from

Set.\_\_@species@598

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:320

## Methods

### [iterator]

▸ **[iterator]**(): `IterableIterator`<`T`\>

Iterates over values in the set.

#### Returns

`IterableIterator`<`T`\>

#### Inherited from

Set.\_\_@iterator@86

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:172

___

### add

▸ **add**(`value`): [`HashedSet`](HashedSet.md)<`T`\>

Appends a new element with a specified value to the Set.
Can be called in the `@method` function of a contract

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` | value of a element |

#### Returns

[`HashedSet`](HashedSet.md)<`T`\>

this set

#### Overrides

Set.add

#### Defined in

dist/smart-contract/builtins/hashed-set.d.ts:33

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Inherited from

Set.clear

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:98

___

### data

▸ **data**(): `Bytes`

Returns the internal data representation of the set.
Can be called in the `@method` function of a contract

#### Returns

`Bytes`

#### Defined in

dist/smart-contract/builtins/hashed-set.d.ts:54

___

### delete

▸ **delete**(`value`): `boolean`

Remove a element with a specified value from the Set.
Can be called in the `@method` function of a contract

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` | value of a element |

#### Returns

`boolean`

true if an element in the Set existed and has been removed, or false if the element does not exist.

#### Overrides

Set.delete

#### Defined in

dist/smart-contract/builtins/hashed-set.d.ts:40

___

### entries

▸ **entries**(): `IterableIterator`<[`T`, `T`]\>

Returns an iterable of [v,v] pairs for every value `v` in the set.

#### Returns

`IterableIterator`<[`T`, `T`]\>

#### Inherited from

Set.entries

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:176

___

### forEach

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

Executes a provided function once per each value in the Set object, in insertion order.

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`value`: `T`, `value2`: `T`, `set`: `Set`<`T`\>) => `void` |
| `thisArg?` | `any` |

#### Returns

`void`

#### Inherited from

Set.forEach

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:107

___

### has

▸ **has**(`value`): `boolean`

Check whether element exists in the set
Can be called in the `@method` function of a contract

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` | value of a element |

#### Returns

`boolean`

true if an element with the specified value exists in the Set, otherwise returns false.

#### Overrides

Set.has

#### Defined in

dist/smart-contract/builtins/hashed-set.d.ts:47

___

### keys

▸ **keys**(): `IterableIterator`<`T`\>

Despite its name, returns an iterable of the values in the set.

#### Returns

`IterableIterator`<`T`\>

#### Inherited from

Set.keys

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:180

___

### values

▸ **values**(): `IterableIterator`<`T`\>

Returns an iterable of values in the set.

#### Returns

`IterableIterator`<`T`\>

#### Inherited from

Set.values

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:185
