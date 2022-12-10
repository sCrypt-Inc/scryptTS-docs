---
sidebar_position: 2
---

# Tutorial 2: How to Test a Contract


After the contract code is written, the next step is to verify whether its function is implemented correctly.

## Setup

Install test framework, We recommend using [Mocha](https://mochajs.org).

```bash
npm install -D mocha chai @types/chai @types/mocha
```

Create `tests\local\demo.test.ts` file with the editor.

Include test file in the `tsconfig.json`:

```json
{
  "include": [
    "src/**/*.ts",
    "tests/**/*.ts"
  ]
}
```

## Write test code

### Instantiate the contract

Different from instantiating a normal TypeScript class, you must first compile the `Demo` contract before instantiating the `Demo` class.

```ts
await Demo.compile(); // compiling to get bitcoin script 
let demo = new Demo(1n, 2n);
```

Before writing the test code, we should call `await Demo.compile()` in the `before` hook of Mocha to get [bitcoin script](https://wiki.bitcoinsv.io/index.php/Script),  which will be executed when the testting run.


### Execute the contract

We call `verify()` method to execute the contract, which is a function defined in the base class [SmartContract](../reference/classes/SmartContract.md#verify). 


```ts
let result = demo.verify(() => {
    demo.add(3n);
});
```

If the contract is successfully executed, the return result `result.success` is `true`. Otherwise it will throw an exception.


### Testing the public function

Testing the public functions of a contract by calling it's `verify(callPub: (self: this) => {})` method:

```ts
describe('Test SmartContract `Demo`', () => {

  before(async () => {
    await Demo.compile();
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

A contract public function must be called on the `self` parameter within the `callPub` callback. It is not recommended to test multiple public functions in the `callPub` callack.


### Testing the non-public function

Non-public functions have a return value. You can test it directly by asserting its return value. No need to call the verify method.

```ts
describe('Test SmartContract `Demo`', () => {

  before(async () => {
    await Demo.compile();
  })

  it('should pass the non-public function unit test', () => {
    let demo = new Demo(1n, 2n);
    expect(demo.sum(3n, 4n)).to.be.eq(7n);
  })

})
```


## Build and Run tests



Also apply the following command to compile the test:

```bash
npm run build
```

Use mocha to run tests:

```bash
npx mocha ./dist/tests/**/*.test.js
```

Or just put it in the *package.json*:

```json
{
    "scripts": {
        "test": "npm run build && mocha 'dist/tests/**/*.test.js' --timeout 1200000"
    }
}
```

# Conclusion

Congrats! We have finished testing `Demo` contract locally.

Checkout [Tutorial 3](./stateful-contract.md) to learn stateful contract.


