[**scrypt-ts**](../README.md)

***

[scrypt-ts](../globals.md) / FixedArray

# Type Alias: FixedArray\<T, N\>

> **FixedArray**\<`T`, `N`\>: `T`[] & `object`

Defined in: scrypt-ts/dist/smart-contract/builtins/types.d.ts:116

An array is a fixed-size list of values of the same basic type.
When you declare an array you have to declare it like this:

## Type declaration

### length

> **length**: `N`

## Type Parameters

• **T**

• **N** *extends* `number`

## Example

```ts
let aaa: FixedArray<bigint, 3> = [1n, 3n, 3n];

let abb: FixedArray<FixedArray<bigint, 2>, 3> = [[1n, 3n], [1n, 3n], [1n, 3n]];

let bbb: FixedArray<FixedArray<FixedArray<bigint, 1>, 2>, 3> = [[[1n], [1n]], [[1n], [1n]], [[1n], [1n]]];
```
