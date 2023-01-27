---
sidebar_position: 2
---

# How to Write a Contract

A smart contract is a class that extends the `SmartContract` base class. A simple example is shown below.

```ts
import { SmartContract, method, prop, assert } from "scrypt-ts";

class Demo extends SmartContract {
  @prop()
  x: bigint;

  constructor(x: bigint) {
    super(...arguments);
    this.x = x;
  }

  @method()
  public unlock(x: bigint) {
    assert(this.add(this.x, 1n) === x);
  }

  @method()
  add(x0: bigint, x1:bigint) : bigint {
    return x0 + x1;
  }
}
```

Class members decorated with `@prop` and `@method` will end up on the blockchain and thus must be a strict subset of TypeScript. Members docorated with neither are regular TypeScript and are kept off chain. The significant benefit of `scryptTS` is that both on-chain and off-chain code are written in the same language: TypeScript.

## Properties

A smart contract can have two kinds of properties:

1. With `@prop` decorator: these properties are **only allowed to have [types](#Types) specified below** and they shall only be initialized in the constructor.

2. Without `@prop` decorator: these properties are regular TypeScript  properties without any special requirement. Accessing these properties is prohibited in methods decorated with the `@method` decorator.


### `@prop(stateful: boolean = false)` decorator 

Use this decorator to mark any property that intends to be stored on chain.

This decorator takes a `boolean` parameter. By default, it is set to `false`, meaning the property cannot be changed after the contract is deployed. If the value is `true`, the property is a so-called [stateful](../tutorials/stateful-contract.md) property and its value can be updated in subsequent contract calls.

## Constructor

A smart contract must have an explicit constructor if it has at least one `@prop`. 

The `super` method must be called in the constructor and all the arguments of the constructor should be passed to `super`
in the same order as they are passed into the constructor. For example,

```ts
class A extends SmartContract {
  p0: bigint;
  
  @prop()
  p1: bigint;
  
  @prop()
  p2: boolean;
  
  constructor(p0: bigint, p1: bigint, p2: boolean) {
    super(...arguments);  // same as super(p0, p1, p2)
    this.p0 = p0;
    this.p1 = p1;
    this.p2 = p2;
  }
}
```
[`arguments`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments) is an array containing the values of the arguments passed to that function. `...` is the [spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax).


## Methods

Like properties, a smart contract can also have two kinds of methods:

1. With `@method` decorator: these methods can only call **methods also decorated by `@method` or [functions](#Functions) specified below**. Also, **only the properties decorated by `@prop` can be accessed**.

2. Without `@method` decorator: these methods are just  regular TypeScript class methods.


### `@method` decorator

1. Use this decorator to mark any method that intends to run on chain.
2. It takes a [sighash flag](./what-is-scriptcontext.md#sighash-type) as an parameter.


### Public `@method`s

Each contract must have at least one public `@method`. It is denoted with the `public` modifier and does not return any value. It is visible outside the contract and acts as the main method into the contract (like `main` in C and Java).

A public `@method` can be called from an external transaction. The call succeeds if it runs to completion without violating any conditions in [assert()](#`assert`). An example is shown below.

```js
  @method()
  public unlock(x: bigint) {
    // only succeeds if x is 1
    assert(this.add(this.x, 1n) === x, "unequal");
  }
```

### Non-public `@method`s

Without a `public` modifier, a `@method` is an internal method and can only be called within the contract class.

It can return these [types](#Types), e.g.,

```js
  @method()
  add(x0: bigint, x1:bigint) : bigint {
    return x0 + x1;
  }
```


Note: **Recursion is disallowed**. A `@method`, public and not, cannot call itself, either directly in its own body or indirectly calls another method that eventually calls itself.


## Data Types

Types used in `@prop` and `@method` are restricted to these kinds:

### Basic Types

#### boolean

A simple value `true` or `false`.
```ts
let isDone: boolean = false;
```

#### `bigint`

`bigint` can represent arbitrarily large integers. A  [bigint literal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) is a number with suffix `n`:

```ts
11n;
0x33FEn;
const previouslyMaxSafeInteger = 9007199254740991n
const alsoHuge = BigInt(9007199254740991)
// 9007199254740991n
const hugeHex: bigint = BigInt("0x1fffffffffffff")
// 9007199254740991n
```

#### `ByteString`

In a smart contract context (i.e., in `@method`s or `@prop`s), a `ByteString` represents a byte array. It must be able be represented by the regular expression: `/^([0-9a-fA-F]{2})*$/`.

A `string` can be converted in to a `ByteString`:

* `toByteString(input: string)`: treat `input` as a byte array in hex format
* `utf8ToByteString(input: string)`: treat `input` as utf8 encoded.

For example:

```js
let str0: ByteString = toByteString('01ab23ef');       // valid, s1 === '01ab23ef'

let str1: ByteString = utf8ToByteString('hello world');  // valid, s0 === '68656c6c6f20776f726c64'

let invalid_str: ByteString = "hello world";  // invalid, string literal without wrapper function

let invalid_str2: ByteString = toByteString('ff012'); // invalid, odd number of hex characters

```

`ByteString` has the following operators and methods:

* `==` / `===`: compare

* `+`: concatenate

* `ByteString.slice(start: number, end?: number)`: return a substring from `start` to, but not including, `end`. If `end` is not specified, the substring continues to the last byte. Since `ByteString` is a byte array and each byte consists of two hex characters, `start` and `end` must be even.

```ts
// comparison
str0 == str1
str0 === str1
// false

// concatenation
str0 + str1
// '01ab23ef68656c6c6f20776f726c64'

// slice
str1.slice(2, 6)
// `556c`, not '6c6c6f20', since each byte has two hex characters
```

#### `number`

Type `number` is not allowed in `@prop`s and `@method`s, except in the following cases. We can use `Number()` function to convert `bigint` to `number`.

* Array index

```ts
let arr: FixedArray<bigint, 3> = [1n, 3n, 3n];
let idx: bigint = 2n;
let item = arr[Number(idx)];
```

* Loop variable

``` ts
for (let i: number = 0; i < 10; i++) {
  let j: bigint = BigInt(i); // convert number to bigint
}
```

* Calling `slice(start: number, end?: number)` function on a `ByteString`

```ts
let b: ByteString = toByteString("001122");
let end: bigint = 4n;
b.slice(0, Number(end));
// "0011"
```
It can also be used in defining [compile-time constants](#compile-time-constant).


### User-defined Types

Users can be define customized types using `type` or `interface`, made of basic types. For example,

```ts
type ST = {
  a: bigint;
  b: boolean;
}

interface ST1 {
  x: ST;
  y: ByteString;
}

type Point = {
  x: number;
  y: number;
};
 
// Exactly the same as the earlier example
function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

interface Point2 {
  x: number;
  y: number;
}
 
function printCoord(pt: Point2) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

```

### Array

The common TypeScript arrays declared like `T[]` or `Array<T>` are not allowed in `@prop`s and `@method`s. An array **must** be declared as type of `FixedArray<T, LENGTH>`, whose `LENGTH` must be a [CTC](#compile-time-constant) described later, like:

```ts
let aaa: FixedArray<bigint, 3> = [1n, 3n, 3n];

const N = 2;
let aab: FixedArray<bigint, N> = [1n, 2n];

// 2-dimensional array
let abb: FixedArray<FixedArray<bigint, 2>, 3> = [[1n, 3n], [1n, 3n], [1n, 3n]];
```

### Domain Types

There are several domain types, specific to the Bitcoin context, used to further improve type safety. They are all subtypes of `ByteString`. That is, they can be used where a `ByteString` is expected, but not vice versa.


* `PubKey` - a public key

* `Sig` - a signature type in DER format, including signature hash

* `Ripemd160` - a RIPEMD-160 hash

* `PubKeyHash` - an alias for Ripemd160`, usually representing a bitcoin address.

* `Sha1` - a SHA-1 hash

* `Sha256` - a SHA-256 hash

* `SigHashType` - a sighash

* `SigHashPreimage` - a sighash preimage

* `OpCodeType` - an OpCode

```ts
@method()
public unlock(sig: Sig, pubkey: PubKey) {
    // hash160() takes a ByteString as input, but can accept pubkey here, which if of type PubKey
    assert(hash160(pubkey) == this.pubKeyHash)
    assert(this.checkSig(sig, pubkey), 'signature check failed')
}
```

## Variable declarations

Variables can be declared in `@method`s by keywords `const` / `var` / `let`, like in normal TypeScript.

```ts
let a : bigint = 1n;
var b: boolean = false;
const byte: ByteString = toByteString("ff");
```

## Statements

There are some constraints on these following statements within `@method`s.

### `for`

Bitcoin does not allow unbounded loops for security reasons, to prevent DoS attacks. All loops must be bounded at compile time. So if you want to loop inside `@method`, you must strictly use the following format:

```ts
for(let $i = 0; $i < $maxLoopCount; $i++) {
  ...
}
```

Note:
* the initial value must be `0`, the operator `<` (no `<=`), and increment `$i++` (no pre-increment `++$i`).
* `$maxLoopCount` must be a [CTC](#compile-time-constant).
* `$i` can be arbitrary name, e.g., `i`, `j`, or `k`.
* `break` and `continue` are currently not allowed, but can be emulated like

```ts
// emulate break
let done = false;
for (let i = 0; i < 3; i++) {
    if (!done) {
        x = x * 2n;
        if (x >= 8n) {
            done = true;
        }
    }
}
```

### `return`

Due to the lack of native return semantics support in Bitcoin Script, a function currently must end with a `return` statement and it is the only valid place for a `return` statement. This requirement may be relaxed in the future. 

```ts
@method() m(x: bigint): bigint {
   if (x > 2n) return x; // invalid
   return x + 1n;  // valid
}
```

This is usually not a problem since it can be circumvented as follows:
```ts
@method()
abs(a: bigint): bigint {
    if (a > 0) {
        return a;
    } else {
        return -a;
    }
}
```
can be rewritten as
```ts
@method()
abs(a: bigint): bigint {
    let ret : bigint = 0;

    if (a > 0) {
        ret = a;
    } else {
        ret = -a;
    }
    return ret;
}
```

### Compile-time Constant

A compile-time constant, CTC for short, is a special variable whose value can be determined at compile time. There are three kinds:

* A number literal like:

```ts
3;
```

* A `const` variable, its value should be a numeric literal:

```ts
const N = 3; // valid
const N: number = 3; // valid
```

* A `static` `readonly` property:

```ts
class X {
  static readonly N = 3;
}
```

Only a numeric literal can be used to initialize CTC. Expressions are not allowed for now.

```ts
const N = 3; // valid
const N = 3 + 3; // invalid
class X {
  static readonly N = 3; // valid
  static readonly N = 3 + 3; // invalid
}
```


They can be used at places where a CTC is required, including:

* Array length in declaration

```ts
const N: number = 2;
let arr1: FixedArray<bigint, N> = [1n, 2n];
let arr2: FixedArray<bigint, 3> = [1n, 2n, 3n];
let arr3: FixedArray<bigint, Demo.N> = [1n, 2n, 3n]; // Demo.N is CTC
```

* Loop bound in `for` statement

```ts
for(let i=0; i< 3; i++)
for(let i=0; i< N; i++)
for(let i=0; i< X.N; i++)
```

## Functions

### Built-in Functions
#### `assert`

The most commonly used built-in function is `assert(condition: boolean, msg?: string)`. It throws an error if `condition` is false. A contract call is successful if and only if the first arugment `condition` passed to the functions is true for all `assert`s executed.

### Whitelisted Functions
Be default, all Javascript/TypeScript built-in functions and global variables are not allowed in `@method`s, except the following kinds.

#### `console.log`

`console.log` can be used for debugging purposes.
```ts
@method()
add(x0: bigint, x1:bigint) : bigint {
  console.log(x0);
  return x0 + x1;
}
```


## Operators

**scryptTS** is a subset of TypeScript. Only the following operators can be used directly.


| Operator | Description | Example |
| :-----| :----: | :----: | 
| `+` | Addition | `x + y` |
| `-` | Subtraction | `x - y` |
| `*` | Multiplication | `x * y` |
| `/` | Division | `x / y` |
| `%` | Remainder | `x % y` |
| `++` | Increment (increments by 1) | `++x` or `x++` |
| `--` | Decrement (decrements by 1) | `--x` or `x--` |
| `==` | Equal to: returns `true` if the operands are equal |  `x == y` |
| `!=` | Not equal to: returns `true` if the operands are not equal |  `x != y` |
| `===` | Same as `==` in **scryptTS** |  `x === y` |
| `!==` | Same as `!=` in **scryptTS** |  `x !== y` |
| `>` | Greater than: `true` if left operand is greater than the right operand |  `x > y` |
| `>=` | Greater than or equal to: `true` if left operand is greater than or equal to the right operand |  `x >= y` |
| `<` | Less than: `true` if the left operand is less than the right operand |  `x < y` |
| `<=` | Less than or equal to: `true` if the left operand is less than or equal to the right operand |  `x <= y` |
| `&&` | Logical AND: `true` if both the operands are `true`, else returns `false` |  `x && y` |
| <code>&#124;&#124;</code> | Logical OR: `true` if either of the operands is `true`; returns `false` if both are `false` |  <code>x &#124;&#124; y</code> |
| `!` | Logical NOT: `true` if the operand is `false` and vice-versa. | `!x` |
| `condition ? expression : expression ` | returns value based on the condition | `(5 > 3) ? 'success' : 'error'; // "success"` |

Note `**` is not supported currently.

### Bitwise Operators

TypeScript's bitwise operator cannot be used in `scryptTS`. But you can use the bitwise built-in function provided.


| Operator | Description | built-in function| 
| :-----| :----: | :----: | 
| `&` | Bitwise AND | `and(x,y)`| 
| <code> &#124; </code> | Bitwise OR | `or(x,y)`| 
| `^` | Bitwise XOR | `xor(x,y)`| 
| `~` | Bitwise NOT | `invert(x)`| 
| `<<` | Left shift | `lshift(x,y)`| 
| `>>` | 	Sign-propagating right shift | `rshift(x,y)`|

Bigint in the Bitcoin is stored in [Sign–magnitude format](https://en.wikipedia.org/wiki/Signed_number_representations), not [two's complement format](https://en.wikipedia.org/wiki/Signed_number_representations) commonly used. If the operands are all nonnegative, the result of the operation is consistent with TypeScript's bitwise operator (except `~`). Otherwise, the operation results may be inconsistent and thus undefined. It is strongly recommended to NEVER apply bitwise operations on negative numbers.


## ScriptContext

See [what is ScriptContext](./what-is-scriptcontext.md).
