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

## Property Decorator: `@prop(state=false)`

Use this decorator on class properties to mark them as contract properties, which means the values would be stored on chain within [tx](https://wiki.bitcoinsv.io/index.php/Bitcoin_Transactions).

This decorator can take a boolean parameter, which indicates whether it can be updated later. If it's `true`, the property is so called a `stateful` property and its value stored on chain can be updated between contract calls; otherwise, its value can not be changed since the contract deploy.


## Method Decorator: `@method`

Use this decorator on class methods to mark them as contract methods. The logic implemented in these methods would be serialized into [tx](https://wiki.bitcoinsv.io/index.php/Bitcoin_Transactions) and be executed on chain.

The class methods decorated by `@method` have some special requirements / restrains that should be followed:

* Within these methods, only functions provided as built-ins from `scrypt-ts` or methods also decorated by `@method` can be called; Similarly, only the properties decorated by `@prop` can be visited.

* With `public` modifier, a method is marked as an entry method that could be called outside the contract class, especially during a tx building process. The main purpose of these methods is to validate / verify / check assertions for its input parameters according to its `@prop` decorated properties. The return value must be `void`.

* Without a `public` modifier, a method is kind of an inner function usually be called within the contract class. It can return any valid types described later.

## Types

The types can be used in `@prop` and `@method` are restricted to these kinds:

* Basic types: `boolean` / `string` / `bigint` / `number`;

*Note*: the type `number` is not allowed in `@prop` because it may cause precision issues, and it's recommended to be used only in a few cases.

* User defined types which composed by the basic types at the end level, for example like:

```ts
type ST = {
  x: bigint;
}

interface ST1 {
  x: ST;
  y: string;
}
```

* Array types **must** be the built-in version of `FixedArray`, which has a compile time constant declared as its length, for example like:

```ts
let aaa: FixedArray<bigint, 3> = [1n, 3n, 3n];

// 2d array
let abb: FixedArray<FixedArray<bigint, 2>, 3> = [[1n, 3n], [1n, 3n], [1n, 3n]];
```

* Other `SmartContract` subclasses provided as libraries.

## Statements

There are also some other restraints / rules on the statemets that could be used within the `@method`s besides the previously mentioned.

### `for` statement

Because of the underlaying limitation of `loop` implemetion on Bitcoin script, one can only use a compile time const number as the loop iterations.

So currently if you want to build a loop inside `@method`s, there is only one restricted version of `for` statement that could be used. It's looks like:

```ts
for(let $i = 0; $i < $constNum; $i++) {
  ...
}
```

Note that the initial value `0` and the `<` operator and the post unary operator `++` are all unchangeable.

* `$i` can be whatever you named the induction variable;

* `$constNum` should be an expression of a CTC numberic value of the followings:

A number literal like:

```ts
for(let i = 0; i < 5; i++ ) ...
```

Or a `const` variable name like:

```ts
const N = 3;
for(let i = 0; i < N; i++ ) ...
```

Or a `readonly` property name like:

```ts
class X {
static readonly N = 3;
}
for(let i = 0; i < X.N; i++ ) ...
```

### `console.log` statement

As descirbed before, all the javascript/typescript built-in functions / global variables are also not allowed to be used in `@method`s, but there are few exceptions.

One exceptional statement is `console.log`, which can be used to output logs for debugging purpose.
