[**bitcoinjs-lib v0.2.9-beta.16**](../README.md)

***

[bitcoinjs-lib](../README.md) / FixedArray

# Type Alias: FixedArray\<T, N\>

> **FixedArray**\<`T`, `N`\>: `T`[] & `object`

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/primitives.ts:200](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/primitives.ts#L200)

An array is a fixed-size list of values of the same basic type.
When you declare an array you have to declare it like this:

## Type declaration

### length

> **length**: `N`

## Type Parameters

• **T**

• **N** *extends* `number`

## Onchain

## Example

```ts
let aaa: FixedArray<bigint, 3> = [1n, 3n, 3n];

let abb: FixedArray<FixedArray<bigint, 2>, 3> = [[1n, 3n], [1n, 3n], [1n, 3n]];

let bbb: FixedArray<FixedArray<FixedArray<bigint, 1>, 2>, 3> = [[[1n], [1n]], [[1n], [1n]], [[1n], [1n]]];
```
