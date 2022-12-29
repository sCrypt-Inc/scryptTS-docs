---
sidebar_position: 2
---

# Tutorial 2: How to Test a Contract

We have taken a look at the smart contract code of the project we created in tutorial 1. Now we will take a look at the test code and try to run the tests themselves.

## Testing smart contract code

We will use a testing framework called [Mocha](https://mochajs.org).

Let's open the `tests\local\demo.test.ts` file.

### Instantiate the smart contract

Different from instantiating a normal TypeScript class, the `Demo` contract must be compiled before instantiation.

```ts
await Demo.compile(); // compiling to get bitcoin script 
let demo = new Demo(1n, 2n);
```

This compilation gets done in the `before`hook of Mocha to get the resulting [bitcoin script](https://wiki.bitcoinsv.io/index.php/Script), which will be evaluated when we run our tests.

### Evaluate the contract

We call the `verify()` method to evaluate the contract. `verify()` is a function defined in the base class [SmartContract](../reference/classes/SmartContract.md#verify). 


```ts
let result = demo.verify(() => {
    demo.add(3n);
});
```

If the contracts method is successfully evaluated, `result.success` will be `true`. Otherwise it will throw an exception.


### Test public methods

Testing the public methods of a contract by calling its `verify(callPub: (self: this) => {})` method:

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

A contract public method must be called on the `self` parameter within the `callPub` callback. It is not recommended to test multiple public method in the `callPub` callack.


### Test non-public methods

Non-public methods have a return value, which can be tested directly. You do not need to call the verify method.

```ts
describe('Test SmartContract `Demo`', () => {

  before(async () => {
    await Demo.compile();
  })

  it('should pass the non-public method unit test', () => {
    let demo = new Demo(1n, 2n);
    expect(demo.sum(3n, 4n)).to.be.eq(7n);
  })

})
```


## Build and Run tests

Alright, now that we know what our generated tests are made of, we will try to run them. 
We just run a single command:

```sh
npm run test
```

# Conclusion

Congrats! We have finished testing our `Demo` contract locally.

Check out [Tutorial 3](./how-to-deploy-and-call-a-contract.md) to how we can deploy our contract on the Bitcoin testnet.


