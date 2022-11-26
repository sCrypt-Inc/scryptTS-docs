---
sidebar_position: 2
---

# Tutorial 2: How to test contract locally


After the contract code is written, the next step is to verify whether its function is implemented correctly.

## Setup

Install test framework, We recommend using [mocha](https://mochajs.org).

```bash
npm install -D mocha chai @types/chai @types/mocha
```

Create `tests\demo.test.ts` file with the editor.

Include test file in the `tsconfig.json`:

```json
{
  "include": [
    "contracts/**/*.ts",
    "tests/**/*.ts"
  ]
}
```

## Write test code

Testing the public function of Demo with the following code:


```ts
import { expect } from 'chai';
import { Demo } from '../contracts/demo';

describe('Test SmartContract `Demo`', () => {

  before(async () => {
    await Demo.compile(); // compiling to get bitcoin script 
  })

  it('should pass the public method unit test successfully.', async () => {
    let demo = new Demo(1n, 2n);

    let result = demo.verify(() => demo.add(3n));
    expect(result.success, result.error).to.eq(true);

    result = demo.verify(() => demo.sub(-1n));
    expect(result.success, result.error).to.eq(true);

  })
})
```

First we call `await Demo.compile()` to get [bitcoin script](https://wiki.bitcoinsv.io/index.php/Script),  which will be executed when you call `demo.verify()`.


## Instantiate the contract

Different from instantiating a normal TypeScript class, you must first compile the `Demo` contract before instantiating the `Demo` class.


```ts
await Demo.compile(); // compiling to get bitcoin script 
let demo = new Demo(1n, 2n);
```

## Execute the contract

We call `verify()` function to execute the contract, which is a function defined in the base class [SmartContract](../References/classes/SmartContract.md#verify). You need to call the public function of the contract you want to test in the callback function of the `verify()` function.


```ts
demo.verify(() => {
    demo.add(3n);
});
```

If the contract is successfully executed, the return result `result.success` is `true`. Otherwise it will throw an exception.


## Build and Run tests



Also apply the following command to compile the test:

```bash
npm run build
```

Use mocha to run tests:

```bash
npx mocha ./dist/tests/demo.test.js
```

Or just put it in the *package.json*:

```json
{
    "scripts": {
        "test": "mocha ./dist/tests/*.test.js"
    }
}
```

# Conclusion

Congrats! We have finished testing `Demo` contract locally.

Checkout [Tutorial 3](./stateful-contract.md) to learn stateful contract.


