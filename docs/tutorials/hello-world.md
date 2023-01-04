---
sidebar_position: 1
---

# Tutorial 1: Hello World


## Overview
In this tutorial, we will go over how to quickly create an sCrypt project and explain its components.

## Create a new project

First we need to make sure that the [sCrypt CLI tool](https://github.com/sCrypt-Inc/scrypt-cli) is installed. Check the [installation section](../getting-started/installation.md) if you don't have it installed yet.

We can run the following command to create a new sCrypt project:

```sh
scrypt project my-project
```

The resulting project will contain a demo smart contract along with all the scaffolding.


## The Smart Contract

Open `src/contracts/demo.ts` in your editor. You will see the following among the source files imports:

```ts
import { method, prop, SmartContract, assert } from "scrypt-ts";
```

What each of these are:


- `SmartContract`: The class that creates smart contracts.

- `method`: The decorator on class methods to mark them as contract methods. The logic implemented in these methods would be serialized into [bitcoin transactions](https://wiki.bitcoinsv.io/index.php/Bitcoin_Transactions) and be executed on chain.

- `prop`:  The decorator on class properties to mark them as contract properties, which means the values would be stored on chain within bitcoin transactions.

- `assert`: The function specifies terms/conditions of a contract. It consumes a boolean condition. If the condition is not met, the contract will abort execution and fail. Otherwise, the execution will resume.


## Smart Contract Class

All smart contracts should extends the `SmartContract` class.

```ts
export class Demo extends SmartContract {


}
```

In our generated template the smart contract is called `Demo`.


### Contract Properties

`@prop()` decorators are used to add properties to contracts. Properties are templated parameters of the contract, which make the contract more general.

```ts
export class Demo extends SmartContract {

  @prop()
  x: bigint;

  @prop()
  y: bigint;

}
```

Only three primitive types are allowed by `@prop` decorator：

1. `boolean`
2. `bigint`
3. `string`



*Note*: The `number` type is not also allowed except in some [special cases](../getting-started/how-to-write-a-contract.md#number-type).


### Constructor

Each contract has at most one constructor. It is where contract member variables are initialized. 

```ts
export class Demo extends SmartContract {

  @prop()
  x: bigint;

  @prop()
  y: bigint;

  constructor(x: bigint, y: bigint) {
    super(x, y);
    this.x = x;
    this.y = y;
  }

}
```

You must initialize the property in the constructor, it is not allowed to initialize when the property is declared.

### Non-Public Methods

**scryptTS** enables developers to define their own methods.

Let's take a look at the methods of the `Demo` contract.

```ts

export class Demo extends SmartContract {

  @prop()
  x: bigint;

  @prop()
  y: bigint;

  constructor(x: bigint, y: bigint) {
    super(x, y);
    this.x = x;
    this.y = y;
  }

  @method()
  sum(a: bigint, b: bigint): bigint {
      return a + b;
  }

  @method
  public add(z: bigint) {
      assert(z == this.sum(this.x, this.y));
  }

  @method
  public sub(z: bigint) {
      assert(z == this.x - this.y);
  }
}
```

### Public Methods

The public method is the interface for calling the contract externally. The main logic code contained in the method body can be regarded as a locking script; the method parameters can be regarded as the corresponding unlocking script. Miners actually verify the execution results of this combination.

The `add` public method of the demo contract provides a verification method for the contract whether the input `z` is the sum of two properties `x` and `y`. The return type of public methods is `void`. The return type need not be explicitly declared.


```ts
@method
public add(z: bigint) {
    assert(z == this.sum(this.x, this.y));
}
}
```

Each contract has at least one public method.

## Build

To compile the contract code into JavaScript with following commands:

```sh
npx tsc
```
or
```sh
npm run build
```

If the build process was successful, you wil see:

```
$npx tsc                                                     
activate scryptTS transformer plugin
...
transpiling errors []
```

The tsc compiling process may output diagnostic information in the console about the contract class. Update the source code if needed.


# Conclusion

Congrats! We have finished building our first smart contract with **scryptTS**.

Checkout [Tutorial 2](./how-to-test-a-contract.md) to learn how to test contract.












