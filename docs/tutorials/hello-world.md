---
sidebar_position: 1
---

# Tutorial 1: Hello World


## Overview
In this tutorial, we will code a smart contract step by step, from start to finish.


## Setup

First go [setup](../overview.md) to install all dependencies.

## Create a new project

After all toolings installed, we can start building our application.

scryptTS is a Typescript framework to write smart contracts on Bitcoin SV. We use *npm* to start a new TypeScript Project.


```bash
mkdir scrypt-ts-hello-world
```

Now change into your project directory:

```bash
cd scrypt-ts-hello-world
```

Set up a new npm project.

```bash
npm init -y
```

Install `scryptTS`:

```bash
npm i scrypt-ts@latest
```

Create a `contracts` directory to store contract source code:

```bash
mkdir contracts
```

With TypeScript installed, you can initialize your TypeScript project by using the following command:

```bash
npx tsc --init
```

Update the `tsconfig.json` with following config:

```json
{
  "compilerOptions": {
    /* Language and Environment */
    "target": "es2021", /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */
    "lib": [
      "es2021"
    ], /* Specify a set of bundled library declaration files that describe the target runtime environment. */
    "experimentalDecorators": true, /* Enable experimental support for TC39 stage 2 draft decorators. */
    /* Modules */
    "module": "commonjs", /* Specify what module code is generated. */
    "rootDir": "./", /* Specify the root folder within your source files. */
    "moduleResolution": "node", /* Specify how TypeScript looks up a file from a given module specifier. */
    "outDir": "./dist", /* Specify an output folder for all emitted files. */
    "esModuleInterop": true, /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables 'allowSyntheticDefaultImports' for type compatibility. */
    /* Type Checking */
    /* "strict": true,                                       Enable all strict type-checking options. */
    "skipLibCheck": true /* Skip type checking all .d.ts files. */,
    "plugins": [
      {
        "transform": "scrypt-ts/dist/transformer",
        "outDir": "./scrypts",
        "transformProgram": true,
        "debug": true
      }
    ]
  },
  "include": [
    "contracts/**/*.ts"
  ]
}
```

## Write a Smart Contract

Now, the fun part! Let's write our smart contract: `contracts/demo.ts`. A final version of what we're writing can be found [here](https://github.com/sCrypt-Inc/scryptTS-example/blob/master/contracts/demo.ts).

First, open `contracts/demo.ts` in your editor, then add the following at the top of the file:

```ts
import { method, prop, SmartContract, assert } from "scrypt-ts";
```

What each of these are:


- `SmartContract`: The class that creates smart contracts.

- `method`: The decorator on class methods to mark them as contract methods. The logic implemented in these methods would be serialized into [bitcoin transactions](https://wiki.bitcoinsv.io/index.php/Bitcoin_Transactions) and be executed on chain.

- `prop`:  The decorator on class properties to mark them as contract properties, which means the values would be stored on chain within bitcoin transactions.

- `assert`: The function specifies terms/conditions of a contract. It consumes a boolean condition. If the condition is not met, the contract will abort execution and fail. Otherwise, the execution will resume.


## Smart Contract Class

All smart contracts should extends the `SmartContract` class. Write the following in your file:

```ts
export class Demo extends SmartContract {


}
```

This creates a new smart contract called `Demo`.


### Contract Properties

Use `@prop()` decorator to add properties to contracts. Properties are templated parameters of the contract, which make the contract more general.

```ts
export class Demo extends SmartContract {

  @prop()
  x: bigint;

  @prop()
  y: bigint;

  @prop()
  on: boolean;

  @prop()
  str: string;
}
```

Their types are all `bigint`. Only three primitive types are allowed by `@prop` decorator：

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

### Non-Public Functions

**scryptTS** enables developers to define their own functions.

Let's add a sum function to the `Demo` contract.

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

  @method
  sum(a: bigint, b: bigint): bigint {
      return a + b;
  }
}
```

It can return any valid types described later. The return type must be explicitly declared. 

### Public Functions

The public function is the interface for calling the contract externally. The main logic code contained in the function body can be regarded as a locking script; the function parameters can be regarded as the corresponding unlocking script. Miners actually verify the execution results of this combination.

Now we add an `add` public function to the demo contract, which provides a verification function for the contract whether the input `z` is the sum of two properties `x` and `y`. The return type of public methods is `void`. The return type need not be explicitly declared.



```ts
export class Demo extends SmartContract {

    @prop()
    x: bigint;

    @prop()
    y: bigint;

    @method
    sum(a: bigint, b: bigint): bigint {
        return a + b;
    }

    @method
    public add(z: bigint) {
        assert(z == this.sum(this.x, this.y));
    }

}
```

Each contract has at least one public function. Let's add another public function `sub` to the Demo contract.


```ts
export class Demo extends SmartContract {

    @prop()
    x: bigint;

    @prop()
    y: bigint;

    @method
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


Now we completes the `Demo` smart contract!

## Build

To compile the contract code into JavaScript with following commands:

```bash
npx tsc
```

or `npm run build` if you have script as below declared in *package.json*:

```json
{
 "scripts": {
   "build": "tsc"
 }
}
```

If succeeded, you wiil see:

```
$npx tsc                                                     
activate scryptTS transformer plugin
...
transpiling errors []
```

The tsc compiling process may output diagnostic informations in console about the contract class, update the source code if needed.


# Conclusion

Congrats! We have finished building our first smart contract with **scryptTS**.

Checkout [Tutorial 2](./how-to-test-contract.md) to learn how to test contract.












