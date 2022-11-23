---
sidebar_position: 1
---

# Tutorial Intro

Let's discover **scrypt-ts in less than 5 minutes**.

## Getting Started

Get started by **creating a hello world contract**.


# scrypt-ts

`scrypt-ts` is a Typescript framework to write smart contracts on Bitcoin SV.

# Installation

Use this command to install `scrypt-ts` to your project:

`npm install -S scrypt-ts`

# Setup

`scrypt-ts` depends on [ts-patch](https://github.com/nonara/ts-patch) to provide a custom plugin support for typescript. So `ts-patch` should be installed and prepared first.

## 1. Install `ts-patch`

`npm install -D ts-patch`

**Note**: `ts-patch` currently has an issue with typescript version `4.9.x`, so make sure to use the version `4.8.4`.

## 2. Update `package.json`

Add prepare script (keeps patch persisted after npm install):

```json
{
 /* ... */
 "scripts": {
   "prepare": "ts-patch install -s"
 }
}
```

## 3. Update `tsconfig.json`

Add `scrypt-ts` plugin and enable decorators:

```json
{
  "compilerOptions": {
    ...
    "experimentalDecorators": true,
    "plugins": [
      {
        "transform": "scrypt-ts/dist/transformer",   // Required
        "transformProgram": true,                    // Required
        "outDir": "./scrypt",                        // Optional, define the auto-generated `.scrypt` files folder
        "debug": false                               // Optional, enable/disable debug log in console.
      }
    ]
  }
}
```

## 4. Download sCrypt compiler

`scrypt-ts` also depends on the native sCrypt compiler which could be downloaded with command:

```
curl -Ls https://scrypt.io/setup | sh -s --
```

That's all, you're ready to go!

# Usage

## Write Contract

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

### Decorator: `@prop(state=false)`

Use this decorator on class properties to mark them as contract properties, which means the values would be stored on chain within [tx](https://wiki.bitcoinsv.io/index.php/Bitcoin_Transactions).

This decorator can take a boolean parameter, which indicates whether it can be updated later. If it's `true`, the property is so called a `stateful` property and its value stored on chain can be updated between contract calls; otherwise, its value can not be changed since the contract deploy.


### Decorator: `@method`

Use this decorator on class methods to mark them as contract methods. The logic implemented in these methods would be serialized into [tx](https://wiki.bitcoinsv.io/index.php/Bitcoin_Transactions) and be executed on chain.

The class methods decorated by `@method` have some special requirements / restrains that should be followed:

* Within these methods, only functions provided as built-ins from `scrypt-ts` or methods also decorated by `@method` can be called; Similarly, only the properties decorated by `@prop` can be visited.

* With `public` modifier, a method is marked as an entry method that could be called outside the contract class, especially during a tx building process. The main purpose of these methods is to validate / verify / check assertions for its input parameters according to its `@prop` decorated properties. The return value must be `void`.

* Without a `public` modifier, a method is kind of an inner function usually be called within the contract class. It can return any valid types described later.

### Types

The types can be used in `@prop` and `@method` are restricted to these kinds:

* Basic types: `boolean` / `string` / `bigint`;

*Note*: the type `number` is not allowed in `@prop` because it may cause precision issues, and it's recommended to be used only in a few cases.

* Types composed by the basic types at the end level, for example like:

```ts
type ST = {
  x: bigint;
}

interface ST1 {
  x: ST;
  y: string;
}
```

* Other `SmartContract` subclasses provided as libraries.

## Build

Just run `npx tsc`, or `npm run build` if you have script as below declared in `package.json`:

```json
{
 "scripts": {
   "build": "tsc"
 }
}
```

The `tsc` compiling process may output diagnostic informations in console about the contract class, update the source code if needed.

## Test

You could write tests using tools like `mocha`, for example:

```js
describe('Test SmartContract `Demo`', () => {
  before(async () => {
    await Demo.compile();
  })

  it('should pass the public method unit test successfully.', async () => {
    let demo = new Demo(1n);

    let result = demo.verify(() => demo.unlock(2n));
    expect(result.success, result.error).to.eq(true);

    expect(() => {
      demo.unlock(3n);
    }).to.throw(/Execution failed/)
  })
})
```


## Deploy and Call 

Generally speaking, if you want to deploy or call the contract to BSV network, it takes three steps:

1. Build contract instance: 

Giving proper parameters to get an up-to-date contract instance.

2. Build tx: 

Build a tx corresponding to your business logic, especially to set the tx's proper input & output script with contract instance.

For example, to get the locking script, use code like:

```js
instance.lockingScript;
```

To get the unlocking script for a certain `entryMethod`, use code like:

```js
instance.getUnlockingScript(() => {
  intance.entryMethod(...);
})
```

3. Send tx:

The final step is to sign and send the tx to the network.

Here is an example code to deploy & call a `Demo` contract.

```js
await Demo.compile();
// build contract instance
const demo = new Demo(2n);
const balance = 1000;

// build contract deploy tx
const utxos = await fetchUtxos();
const unsignedDeployTx =
  new bsv.Transaction()
    .from(utxos)
    .addOutput(new bsv.Transaction.Output({
      // get the locking script for `demo` instance
      script: demo.lockingScript, 
      satoshis: balance,
    }));

// send contract deploy tx
const deployTx = await signAndSend(unsignedDeployTx);
console.log('contract deployed: ', deployTx.id)

// build contract call tx
const unsignedCallTx =
  new bsv.Transaction()
    .addInput(new bsv.Transaction.Input({
      prevTxId: deployTx.id,
      outputIndex: outputIdx,
      script: demo.getUnlockingScript(() => {
        // call public method to get the unlocking script for `demo` instance.
        demo.unlock(3n);
      }),
      output: deployTx.outputs[outputIdx]
    }))
    .addOutput(
      new bsv.Transaction.Output({
        script: bsv.Script.buildPublicKeyHashOut(publicKey.toAddress()),
        satoshis: balance / 2
      })
    );

// send contract call tx
const callTx = await signAndSend(unsignedCallTx);
console.log('contract called: ', callTx.id)
```

# Documentation

`scrypt-ts` documentation is available [here](./References/README.md).