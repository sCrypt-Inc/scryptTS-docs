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
    super(x);
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

## Properties

A smart contract can have two kinds of properties:

1. Properties with `@prop` decorator. These properties are **only allowed to have [types](#Types) specified below** and they shall only be initialized in the constructor.

2.  Properties without `@prop` decorator. These properties are normal TypeScript class properties without any special requirement.


### `@prop(stateful: boolean = false)` decorator 

Use this decorator to mark any property that intends to be stored on chain.

This decorator takes a `boolean` parameter. By default, it is set to `false`, meaning the property cannot be changed after the contract is deployed. If the value is `true`, the property is a so-called `stateful` property and its value can be updated in subsequent contract calls.

## Constructor

A smart contract must have an explicit constructor if it has at least one `@prop`. 

The `super` method must be called in the constructor with all the arguments for `@prop`s in the same orders as they are passed in. For example,

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

Like properties, a smart contract can also have two kinds of methods:

1. Methods without `@method` decorator. These methods are just like normal TypeScript class methods with no special restraints.

2. Methods with `@method` decorator. These methods can only call **methods also decorated by `@method` or [functions](#Functions) specified below**. Similarly, **only the properties decorated by `@prop` can be accessed**.

### `@method` decorator

Use this decorator to mark any function that intends to be stored on chain.

### Public `@method`s

Each contract has at least one public method. It is denoted with the `public` modifier and does not return any value. It is visible outside the contract and acts as the entry point into the contract (like main in C and Java).

A public method can be called from an external transaction. The call succeeds if it runs to completion without violating any conditions in [assert()](#`assert`). An example is shown below.

```js
  @method()
  public unlock(x: bigint) {
    assert(this.add(this.x, 1n) === x);
  }
```

### Non-Public `@method`s

Without a `public` modifier, a `@method` is an internal method and can only be called within the contract class. 

It can return any valid types described later. The return type must be explicitly declared. e.g.,

```js
  @method()
  add(x0: bigint, x1:bigint) : bigint {
    return x0 + x1;
  }
```


Note: Recursion is disallowed. Both **Non-Public Methods** and **Public Methods** cannot call themselves in their body, either directly or indirectly.


## Types

The types used in `@prop` and `@method` are restricted to these kinds:

### Basic Types

#### `boolean` Type

Basic type `boolean` is allowed, along with its wrapper type `Boolean`.

#### `bigint` Type

Basic type `bigint` is allowed, along with its wrapper type `Bigint`.

#### `ByteString` Type

In a smart contract context (i.e., in `@method`s or `@prop`s), a `ByteString` type represents a byte array in hex format. It must be able be represented by the regular expression: `/^([0-9a-fA-F]{2})*$/`.

Literal `string` is not allowed to be used directly without being wrapped in these functions below:

* `toByteString(input: string)`: return the raw value of `input` as a byte array while validating it as hex bytes.
* `utf8ToByteString(input: string)`: return a value in hex bytes format representing the utf8 encoding of `input`.

For example:

```js
let s0 = utf8ToByteString('hello world');  // valid, s0 === "68656c6c6f20776f726c64"

let s1 = toByteString('01ab23ef');       // valid, s1 === '01ab23ef'

let invalid_str = "hello world";  // invalid, string literal without wrapper function

let invalid_str2 = toByteString('012'); // invalid, odd number of hex characters
```

Also there are only a few methods of `ByteString` can be used in `@method`s:

* `ByteString.==` / `ByteString.===`: compare two strings, like `str1 == str2` or `str1 === str2`.

* `ByteString.+`: concat two strings, like `str1 + str2`.

* `ByteString.slice(indexStart, indexEnd?)`: return a substring like `str.slice(0, 2)`. Since `ByteString` is a byte array, `indexStart` and `indexEnd` must be even numbers.

#### `number` Type

By default, type `number` is not allowed in `@prop`s and `@method`s because it may cause precision issues when representing a floating point number. There are a few exceptions:

* [A compile-time constant](#compile-time-constant)

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
```

### Array Types

The common array types in TypeScript like `T[]` or `Array<T>` are not allowed to be used in `@prop`s and `@method`s. 

An array **must** be declared as type of `FixedArray<T, LENGTH>`, whose `LENGTH` must be a [CTC](#compile-time-constant) value described later, like:

```ts
let aaa: FixedArray<bigint, 3> = [1n, 3n, 3n];

const N = 2;
let aab: FixedArray<bigint, N> = [1n, 2n];

// 2-dimensional array
let abb: FixedArray<FixedArray<bigint, 2>, 3> = [[1n, 3n], [1n, 3n], [1n, 3n]];
```

### Domain Types

There are several domain types, specific to the Bitcoin context, used to further improve type safety.

* [PubKey](../reference/classes/PubKey.md) - a public key

* [PrivKey](../reference/classes/PrivKey.md) - a private key

* [Sig](../reference/classes/Sig.md) - a signature type in DER format, including signature hash

* [Ripemd160](../reference/classes/Ripemd160.md) - a RIPEMD-160 hash

* [PubKeyHash](../reference/classes/PubKeyHash.md) - an alias for Ripemd160`, usually representing a bitcoin address.

* [Sha1](../reference/classes/Sha1.md) - a SHA-1 hash

* [Sha256](../reference/classes/Sha256.md) - a SHA-256 hash

* [SigHashType](../reference/classes/SigHashType.md) - a sighash

* [SigHashPreimage](../reference/classes/SigHashPreimage.md) - a sighash preimage

* [OpCodeType](../reference/classes/OpCodeType.md) - an OpCode

### `SmartContract` subclasses Types

Libraries derived from `SmartContract` can be imported as dependencies and reused by other `SmartContract`s.

## Variable declarations

Variables can be declared in `@method`s by keywords `const` / `var` / `let`, like in normal TypeScript.

```ts
let a : bigint = 1n;
var b: boolean = false;
const N: number = 3;
```

### Compile-time Constant

A compile-time constant, CTC for short, is a special variable whose value can be determined at compile time. There are three kinds:

* A number literal like:

```ts
3;
```

* A `const` variable:

```ts
const N = 3;
```

* A `readonly` property:

```ts
class X {
  static readonly N = 3;
}
```

Only numeric literal can be used to initialize CTC. Expressions are not allowed.

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

There are some other constraints on statements that could be used within the `@method`s, besides previously mentioned.

### `for` statement

Bitcoin Script does not provide looping constructs natively for security reasons, to prevent DoS attacks. All loops must be bounded at compile time. So if you want to loop inside `@method`, you must strictly use the following format:

```ts
for(let $i = 0; $i < $maxLoopCount; $i++) {
  ...
}
```

Note:
* the initial value must be `0`, the operator `<` (no `<=`), and increment `$i++` (no pre-increment `++$i`).
* `$maxLoopCount` must be a [CTC](#compile-time-constant).
* `$i` can be arbitrary name, e.g., `i`, `j`, or `k`.
* `break` and `continue` are currently not allowed.

### `return` statement

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

## Functions

### Built-in Functions
#### `assert`

The most commonly used built-in function is `assert(condition: boolean, msg?: string)`. It throws an error if `condition` is false. A contract call is successful if and only if the first arugment `condition` passed to the `assert` functions is true.

### Whitelisted Functions
Be default, all Javascript/TypeScript built-in functions/global variables are not allowed in `@method`s, except the following kinds.

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

**scryptTS** is a subset of TypeScript. Only the following TypeScript operators can be used directly.


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

TypeScript's bitwise operator cannot be used in scryptTS. But you can use the bitwise built-in function provided by scryptTS.


| Operator | Description | built-in function| 
| :-----| :----: | :----: | 
| `&` | Bitwise AND | `and(x,y)`| 
| <code> &#124; </code> | Bitwise OR | `or(x,y)`| 
| `^` | Bitwise XOR | `xor(x,y)`| 
| `~` | Bitwise NOT | `invert(x,y)`| 
| `<<` | Left shift | `lshift(x,y)`| 
| `>>` | 	Sign-propagating right shift | `rshift(x,y)`|

The number in the Bitcoin virtual machine is saved in the [Sign–magnitude format](https://en.wikipedia.org/wiki/Signed_number_representations) in stack, not the [two's complement format](https://en.wikipedia.org/wiki/Signed_number_representations) commonly used by computers. If the operands participating in the operation are all positive numbers, the result of the operation is consistent with TypeScript's bitwise operator. (except `~`). Otherwise, the operation results may be inconsistent.


## ScriptContext


Using [OP_PUSH_TX](https://medium.com/@xiaohuiliu/op-push-tx-3d3d279174c1) allows the contract code to access the entire transaction data, including all inputs and outputs.
This allows us to set any constraints on the data. This opens up endless possibilities for running various smart contracts on the BSV network.


OP_PUSH_TX requires the [transaction preimage](https://github.com/bitcoin-sv/bitcoin-sv/blob/master/doc/abc/replay-protected-sighash.md#digest-algorithm) to be computed externally, and the transaction preimage is passed into the contract through the public function parameters of the contract.

```ts
export class Counter extends SmartContract {
  @prop(true)
  count: bigint;

  constructor(count: bigint) {
    super(count);
    this.count = count;
  }

  @method()
  public increment(txPreimage: SigHashPreimage) {
    this.count++;
    assert(this.updateState(txPreimage, SigHash.value(txPreimage)));
  }
}
```

**scryptTS** encapsulates the computation of the transaction preimage. Users do not need to explicitly calculate and pass the transaction preimage. The data of the entire transaction can be accessed through `ScriptContext`.

```ts
export type ScriptContext = {
    nVersion: ByteString;
    utxo: UTXO;
    hashPrevouts: ByteString;
    hashSequence: ByteString;
    nSequence: bigint;
    hashOutputs: ByteString;
    nLocktime: bigint;
    sigHashType: SigHashType;
};
```

Correspondence between `ScriptContext` structure and transaction preimage `txPreimage`:

| ScriptContext  | transaction preimage `txPreimage`  |
| ------------- | ------------- | 
| nVersion | nVersion of the transaction  |
| utxo.value | value of the output spent by this input (8-byte little endian)  |
| utxo.scriptCode | scriptCode of the input (serialized as scripts inside CTxOuts) |
| utxo.outpoint.txid | prevTx id in 32-byte hash |
| utxo.outpoint.outputIndex | outputIndex in prevTx |
| hashPrevouts | `hashPrevouts` is the double SHA256 of the serialization of all input outpoints; |
| hashSequence | `hashSequence` is the double SHA256 of the serialization of nSequence of all inputs; |
| nSequence | nSequence of the input  |
| hashOutputs | `hashOutputs` is the double SHA256 of the serialization of all output amount (8-byte little endian) with scriptPubKey (serialized as scripts inside CTxOuts); |
| nLocktime| nLocktime of the transaction |
| sigHashType| sighash type of the signature |




You can directly access the relevant data of the transaction preimage through `this.ctx` in the public functions of the contract (access in **non-public** functions is not supported).


```ts
export class Counter extends SmartContract {
  @prop(true)
  count: bigint;

  constructor(count: bigint) {
    super(count);
    this.count = count;
  }

  @method()
  public increment() {
    this.count++;
    assert(this.ctx.hashOutputs == hash256(this.buildStateOutput(this.ctx.utxo.value)));
  }
}
```

There is no need to pass in the transaction preimage `txPreimage` when calling the contract:


```ts
getCallTx(utxos: UTXO[], prevTx: bsv.Transaction, nextInst: Counter): bsv.Transaction {
const inputIndex = 1;
return new bsv.Transaction().from(utxos)
    .addInputFromPrevTx(prevTx)
    .setOutput(0, (tx: bsv.Transaction) => {
    nextInst.lockTo = { tx, outputIndex: 0 };
    return new bsv.Transaction.Output({
        script: nextInst.lockingScript,
        satoshis: this.balance,
    })
    })
    .setInputScript(inputIndex, (tx: bsv.Transaction) => {
    this.unlockFrom = { tx, inputIndex };
    return this.getUnlockingScript(self => {
        self.increment();
    })
    });
}
```


### SigHash Type 

The default [sigHash type](https://wiki.bitcoinsv.io/index.php/SIGHASH_flags) used to calculate the transation preimage is `SigHash.ALL`. You can customize the sighash type with the `@method()` decorator.

```ts
@method(SigHash.ANYONECANPAY_SINGLE)
public increment() {
  ...
}
```

There are a total of 6 sigHash types to choose from:

| SigHash Type | Functional Meaning |
| ------------- | ------------- | 
| SigHash.ALL | Sign all inputs and outputs |
| SigHash.NONE | Sign all inputs and no output |
| SigHash.SINGLE | Sign all inputs and the output with the same index |
| SigHash.ANYONECANPAY_ALL | Sign its own input and all outputs |
| SigHash.ANYONECANPAY_NONE | Sign its own input and no output |
| SigHash.ANYONECANPAY_SINGLE | Sign its own input and the output with the same index |


When you use a custom sighash type, you need to use the specified sighash type when constructing the transaction that calls the contract.



```ts
getCallTx(utxos: UTXO[], prevTx: bsv.Transaction, nextInst: Counter): bsv.Transaction {
const inputIndex = 1;
return new bsv.Transaction().from(utxos)
    .addInputFromPrevTx(prevTx)
    .setOutput(0, (tx: bsv.Transaction) => {
    nextInst.lockTo = { tx, outputIndex: 0 };
    return new bsv.Transaction.Output({
        script: nextInst.lockingScript,
        satoshis: this.balance,
    })
    })
    .setInputScript({
      inputIndex,
      sigtype: bsv.crypto.Signature.ANYONECANPAY_SINGLE
    }, (tx: bsv.Transaction) => {
    this.unlockFrom = { tx, inputIndex };
    return this.getUnlockingScript(self => {
        self.increment();
    })
    });
}
```



