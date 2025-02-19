**scrypt-ts**

***

[![Test](https://github.com/sCrypt-Inc/scrypt-ts/actions/workflows/ci.yml/badge.svg)](https://github.com/sCrypt-Inc/scrypt-ts/actions/workflows/ci.yml)

# sCrypt

`sCrypt` is a Typescript framework to write smart contracts on Bitcoin compatible blockchains.

## Installation

Use this command to install `sCrypt` in to your machine:

`npm install -g scrypt-cli`

## Create new sCrypt project
simply use the command below to create a new project: 

 `npx scrypt-cli project demo`

 then change the directory to project folder:
`cd demo`

and run:
`npm install`
to install all the dependency needed.

That's all, you're ready to go!

## Usage

### Write a Contract

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

#### Property Decorator: `@prop()`

Use this decorator on class properties to mark them as contract properties, which means the values would be stored on chain.

This decorator can take a boolean parameter, which indicates whether it can be updated later. If it's `true`, the property is so called a `stateful` property and its value stored on chain can be updated between contract calls; otherwise, its value can not be changed when the contract deploy, by default its set to `false`.

#### Method Decorator: `@method()`

Use this decorator on class methods to mark them as contract methods. The logic implemented in these methods would be stored and be executed on chain.

The class methods decorated by `@method()` have some special requirements / restrains that should be followed:

* Within these methods, only functions provided as built-ins from `scrypt-ts` or methods also decorated by `@method()` can be called; Similarly, only the properties decorated by `@prop()` can be use.

* With `public` modifier, a method is marked as an entry method that could be called outside the contract class. The main purpose of these methods is to validate / verify / check assertions for its input parameters according to its `@prop()` decorated properties. The return value must be `void`.

* Without a `public` modifier, a method is kind of an inner function usually be called within the contract class. It can return any valid types.

#### Types

The types can be used in `@prop()` and `@method()` are restricted to these kinds:

* Basic types: `boolean` / `ByteString` / `bigint`;

*Note*: the type `number` is not allowed in `@prop()` because it may cause precision issues when representing a floating point number. It can only be used in a few cases like when using `FixedArray` or `Loop`.

* User types can be defined using `type` or `interface`, made of basic types. For example,

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

* Array types **must** be declared using `FixedArray`, whose length must be known at compile time, like:

```ts
let aaa: FixedArray<bigint, 3> = [1n, 3n, 3n];

// 2d array
let abb: FixedArray<FixedArray<bigint, 2>, 3> = [[1n, 3n], [1n, 3n], [1n, 3n]];
```

* Other `SmartContract` subclasses are provided as libraries.

#### Statements

There are also some other restraints / rules on the statemets that could be used within the `@method`s besides the previously mentioned.

##### `for` statement

Because of the underlaying limitation of `loop` implemetion on Bitcoin script, one can only use a compile time const number as the loop iterations.

So currently if you want to build a loop inside `@method`s, there is only one restricted version of `for` statement that could be used. It's looks like:

```ts
for(let $i = 0; $i < $constNum; $i++) {
  ...
}
```

Note that the initial value `0` and the `<` operator and the post unary operator `++` are all unchangeable.

* `$i` can be whatever you named the induction variable;

* `$constNum` should be an expression of a CTC numeric value of the followings:

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

##### `console.log` statement

As described before, all Javascript/Typescript built-in functions/global variables are not allowed in `@method`s, with only a few exceptions.

One exceptional statement is `console.log`, which can be used for debugging purpose.
```ts
@method
add(x0: bigint, x1:bigint) : bigint {
  console.log(x0);
  return x0 + x1;
}
```

### Compile a Contract

Just run `npx scrypt-cli@latest compile`, the contract will be compiled if there is no any issue and output the contract json file in the `artifact` folder inside the project.

### Test a Contract

You could write tests using tools like `mocha`, for example:

```js
describe('Test SmartContract `Demo`', () => {
    let demo: Demo

    before(async () => {
        Demo.loadArtifact()

        demo = new Demo(3n)
        await demo.connect(getDefaultSigner())
    })

 it('should pass `unlock` with correct answer', async () => {
        await demo.deploy(1)
        const callContract = async () => demo.methods.unlock(4n)
        return expect(callContract()).not.rejected
    })
})
```

### Deploy and Call a Contract

With sCrypt deploying and calling Smart Contracts is very simple and easy as the code below:

```ts
async function main() {
    await Demo.loadArtifact()

    // Prepare signer. 
    const signer = new TestWallet(privateKey, new DefaultProvider({
        network: bsv.Networks.testnet
    }))

    // the amount of satoshis locked in the smart contract:
    const amount = 1

    const instance = new Demo(3n)

    // Connect to a signer.
    await instance.connect(signer)

    // Contract deployment.
    const deployTx = await instance.deploy(amount)

    console.log('Demo contract was successfully deployed!')
    console.log(`Deployment TXID: ${deployTx.id}`)

    // Calling the contract
    const {tx : callTx} = await instance.methods.unlock(4n)
    console.log(`Contract called: ${callTx.id}`)
}

main()

```

## Documentation

The full version of `sCrypt` documentation is available [here](https://docs.scrypt.io).
