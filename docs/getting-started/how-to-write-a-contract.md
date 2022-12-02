---
sidebar_position: 2
---

# How to Write a Contract

A contract can be written as a class that extends the `SmartContract` base, a simple example could be like this:

```ts
import { SmartContract, method, prop, assert } from "scrypt-ts";

class Demo extends SmartContract {
  @prop()
  x: bigint;

  constructor(x: bigint) {
    super(x);
    this.x = x;
  }

  @method
  public unlock(x: bigint) {
    assert(this.add(this.x, 1n) === x);
  }

  @method
  add(x0: bigint, x1:bigint) : bigint {
    return x0 + x1;
  }
}
```

## Properties

A contract class can have two kinds of properties:

1.  Properties without `@prop` decorator. These properties are just like normal typescript class properties with no special restraints.

2. Properties with `@prop` decorator. These properties are **only allowed to have [types](#Types) specified below** and they shall only be initialized in the constructor.

### `@prop(state)` decorator 

Use this decorator on class properties to mark them as contract properties, which means the values would be stored on-chain within [tx](https://wiki.bitcoinsv.io/index.php/Bitcoin_Transactions).

This decorator can take a boolean parameter, which indicates whether it can be updated later. If the value is `true`, the property is so called a `stateful` property and its value stored on chain can be updated between contract calls; otherwise, its value can not be changed since the contract deployed.

## Constructor

A contract class should have an explicit constructor if it has at least one `@prop`s. 

The `super` method should be called in the constructor and be provided with all the initial values of `@prop`s in their declaration orders. For example,

```js
class A extends SmartContract {
  p0: string;
  @prop() p1: bigint;
  @prop() p2: boolean;
  constructor(p0: string, p1: bigint, p2: boolean) {
    super(p1, p2);  // Do not pass in `p0` bcoz it’s not a `@prop`, also note that `p1` & `p2` should be passed in order.
    this.p0 = p0;
    this.p1 = p1;
    this.p2 = p2;
  }
}
```

## Methods

Like properties, a contract can also have two kinds of methods:

1. Methods without `@method` decorator. These methods are just like normal typescript class methods with no special restraints.

2. Methods with `@method` decorator. These methods should follow the restraints described below:

Within these methods, **only [functions](#Functions) specified below or methods also decorated by `@method` can be called**; Similarly, **only the properties decorated by `@prop` can be visited**.

### `@method` decorator

Use this decorator on class methods to mark them as contract methods. The logic implemented in these methods would be serialized into [tx](https://wiki.bitcoinsv.io/index.php/Bitcoin_Transactions) and be executed on chain.

### Public/Entry `@method`s

With a `public` modifier, a `@method` is marked as an entry method that could be called outside the contract class, especially when building a tx. 

The main purpose of these methods is to validate / verify / check assertions for its input parameters according to its `@prop` decorated properties. 

Their return value must be `void`. For example:

```js
  @method
  public unlock(x: bigint) {
    assert(this.add(this.x, 1n) === x);
  }
```

### Non-Public/Non-Entry `@method`s

Without a `public` modifier, a `@method` is marked as an inner function, which is usually called within the contract class. 

It can return any valid types described later. For example:

```js
  @method
  add(x0: bigint, x1:bigint) : bigint {
    return x0 + x1;
  }
```

## Types

The types can be used in `@prop` and `@method` are restricted to these kinds:

### Basic Types

The most commonly basic types allowed are: `boolean` / `string` / `bigint`, along with their wrapper types `Boolean` / `String` / `Bigint`.

#### `string` Type

All the `string` type variables in `@method`s or `@prop`s should have values in a hex bytes format, which could be represented by a regular expression: `/^([0-9a-fA-F]{2})*$/`.

So literal `string` is not allowed to be used directly without wrapping in these functions below:

* `b(input: string)`: Will return the raw value of `input` while validating it as hex bytes.
* `u8b(input: string)`: Will return a value in hex bytes format representing the utf8 encoding of `input`.

For example:

```js
let s0 = u8b('hello world');  // valid, s0 === "68656c6c6f20776f726c64"

let s1 = b('01ab23ef');       // valid, s1 === '01ab23ef'

let invalid_str = "hello world";  // invalid, string literal without wrapper function

let invalid_str2 = b('012'); // invalid, odd number of hex characters
```

Also there are only two methods of `string` can be used in `@method`s:

* `String.slice(indexStart, indexEnd)`

To get a substring like `str.slice(0, 2)`, since the `str` is in hex bytes format, `indexStart` & `indexEnd` should be even numbers.

* `String.+`

To concat strings, like `str1 + str2`.

#### `number` Type

The `number` type variables are often not allowed in `@prop`s and `@method`s because it may cause precision issues when representing a floating point number. 

But it can be used in a few cases when the variable is:

* A compile-time constant

```ts
const N: number = 2;
let arr: FixedArray<bigint, N> = [1n, 2n];
```

* An array index

```ts
let idx : number = 3;
let item = arr[idx];
```

* An induction variable in `for` statement

```ts
for(let i: number =0; i < 5; i++) …
```

### User-defined Types

They can be defined using `type` or `interface`, made of basic types. For example,

```ts
type ST = {
  a: bigint;
  b: boolean;
}

interface ST1 {
  x: ST;
  y: string;
}
```

### Array Types

The common array types in Typescript like `T[]` or `Array<T>` are not allowed to be used in `@prop`s and `@method`s. 

They **must** be declared as type of `FixedArray<T, LENGTH>`, whose `LENGTH` should be a [CTC](#compile-time-constant) value described later, like:

```ts
let aaa: FixedArray<bigint, 3> = [1n, 3n, 3n];

const N = 2;
let aab: FixedArray<bigint, N> = [1n, 2n];

// 2-dimensional array
let abb: FixedArray<FixedArray<bigint, 2>, 3> = [[1n, 3n], [1n, 3n], [1n, 3n]];
```

### Domain Types

There are several domain types, specific to the Bitcoin SV context, used to further improve type safety.

* [PubKey](../reference/classes/PubKey.md) - a public key type.

* [PrivKey](../reference/classes/PrivKey.md) - a private key type.

* [Sig](../reference/classes/Sig.md) - a signature type in DER format, including signature hash type.

* [Ripemd160](../reference/classes/Ripemd160.md) - a RIPEMD-160 hash type.

* [PubKeyHash](../reference/classes/PubKeyHash.md) - an alias for Ripemd160` type. Usually represents a bitcoin address.

* [Sha1](../reference/classes/Sha1.md) - a SHA-1 hash type.

* [Sha256](../reference/classes/Sha256.md) - a SHA-256 hash type.

* [SigHashType](../reference/classes/SigHashType.md) - a sighash type.

* [SigHashPreimage](../reference/classes/SigHashPreimage.md) - a sighash preimage type.

* [OpCodeType](../reference/classes/OpCodeType.md) - a OpCode type.

### `SmartContract` subclasses Types

They are provided as libraries.

## Variables

Variables can be declared normally in `@method`s by keywords `const` / `var` / `let`, like:

```ts
let a : bigint = 1n;
var b: boolean = false;
const N: number = 3;
```

### Compile-time Constant

A compile-time constant, CTC for short, is a special variable whose value can be determined at compile time. There are three kinds of commonly used CTCs:

* A number literal like:

```ts
3;
```

* A `const` variable name like:

```ts
const N = 3;
```

* A `readonly` property name like:

```ts
class X {
  static readonly N = 3;
}
```

They can be used at places where a CTC is required, like:

* Array length in declaration

```ts
FixedArray<bigint, 3>
FixedArray<bigint, N>
FixedArray<bigint, X.N>
```

* Loop count in `for` statement

```ts
for(let i=0; i< 3; i++)
for(let i=0; i< N; i++)
for(let i=0; i< X.N; i++)
```

## Statements

There are also some other restraints / rules on the statements that could be used within the `@method`s besides the previously mentioned.

### `for` statement

Because of the underlying limitation of `loop` implementation on Bitcoin script, one can only use a compile time const number as the loop iterations.

So currently if you want to build a loop inside `@method`s, there is only one restricted version of the `for` statement that could be used. It's looks like:

```ts
for(let $i = 0; $i < $ctcNum; $i++) {
  ...
}
```

Note that the initial value `0` and the `<` operator and the post unary operator `++` are all unchangeable.

* `$i` can be whatever you named the induction variable;

* `$ctcNum` should be an expression of a [CTC](#compile-time-constant) numeric value described before.

### `return` statement

Due to a certain underlying limitation, `return` statement in a `@method` is only allowed to appear at the last statement of a function. Returning from the middle is not allowed.

```ts
@method m(x: bigint): bigint {
   if (x > 2n) return x; // invalid
   return x + 1n;  // valid
}
```

## Functions

As described before, all Javascript/Typescript built-in functions/global variables are not allowed in `@method`s, except the following kinds.

### Built-in Functions

#### `assert` Function

The most commonly used built-in function is the `assert(cond: boolean)` function. It throws a runtime error if `cond` is false and interrupts a contract call. That means if and only if all the `assert` functions return normally, a contract call can be successful.

### Whitelisted Functions

There are also some whitelisted Javascript/Typescript functions that can be used in `@method`s.

#### `console.log` Function

One exceptional statement is `console.log`, which can be used for debugging purposes.


