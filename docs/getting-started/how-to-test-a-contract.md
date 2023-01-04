---
sidebar_position: 3
---
 
# How to Test a Contract
 
Before using a smart contract in production, one should always test it carefully, especially because any bug in it may cause **real economic losses**.
 
There are two different kinds of tests recommended for every project using `scryptTS`:
 
* **Local Unit Testing**
* **Testnet Integration Testing**
 
## Test a Contract Locally

Compare to other blockchains, smart contracts on Bitcoin are **pure**.
* Given the same input, its public method always returns the same boolean output: success or failure. It has no internal state.
* A public method call causes no side effects.

Smart contracts are similar to mathematical functions. Thus, we can test a contract locally without touching the Bitcoin blockchain. If it passes tests off chain, we are confident it will behave the same on chain.

For each public `@method`, we test it in two ways:

1. If given the right arguments, it should succeed.
2. If given any wrong ones, it should fail.

### Use `SmartContact.verify` method
 
The method tests a contract call. The function signature is as follows:
 
```ts
SmartContact.verify(entryMethodInvoking: (self: SmartContract) => void): VerifyResult
```

Notice that it actually accepts a callback function named `entryMethodInvoking`. You should call the testing target method in this callback, like:

```ts
fooSmartContact.verify(self => {
   self.entryMethod(...args);
})
```

If the call succeeds, it returns a `VerifyResult`; otherwise, it throws an error.

### Use a testing framework
 
You can use whatever testing framework you like to write unit tests for your contract. For example, a local test using [Mocha](https://mochajs.org/) is shown below:
 
```js
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

  it('should pass the non-public method unit test', () => {
    let demo = new Demo(1n, 2n);
    expect(demo.sum(3n, 4n)).to.be.eq(7n);
  })


  it('should throw error', () => {

    expect(() => {
      let demo = new Demo(1n, 2n);
      demo.add(4n)
    }).to.throw(/Execution failed/)

    expect(() => {
      let demo = new Demo(-1n, -2n);
      demo.add(-4n)
    }).to.throw(/Execution failed/)
  });

})
```
 
## Test a Contract on testnet
 
After passing local tests, it is strongly recommended to test your contract on a [testnet](https://test.whatsonchain.com/). It to ensure a contract can be successfully integrated with a transaction, and it methods as expected along with the deploy and call transactions.
 
Before testing, you need to:
 
* Get a private key with some test coins on testnet. You could use our [facuet](https://scrypt.io/#faucet) to receive test coins.
 
* Get an accessible Bitcoin testnet APIs for querying and sending transactions. You could use our [tool functions](https://github.com/sCrypt-Inc/scryptTS-examples/blob/master/tests/txHelper.ts) in the [example project](https://github.com/sCrypt-Inc/scryptTS-examples), or build your own.

You may visit [here](./how-to-deploy-and-call-a-contract.md) to see more details on contract deployment and call.