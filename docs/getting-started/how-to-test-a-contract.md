---
sidebar_position: 4
---

# How to Test a Contract

Before using your contract code in production, you should always test it carefully, especially because it may cause **real economic losses** if there were bugs or safety issues.

There are two different kinds of test recommended for every project using `scrypt-ts`:

* **Local Testing**
* **Testnet Testing**

## Test a Contract locally



### Use `SmartContact.verify` method

This method is dedicated to test a contract call.

```ts
instance.verify(entryMethodInvoking: (self: SmartContract) => void): VerifyResult
```

### Integrate with testing framework

You could use whatever testing framework you like to write unit tests for your contract, take `mocha` for example, the local tests may look like this:

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

## Test a Contract on testnet

After passing local tests, you'd better test your contract on the [testnet](https://test.whatsonchain.com/) of Bitcoin SV.

In order to do so, you should meet these requirements:

* Get a private key with some amount of BSV tokens on testnet. You could use our [facuet](https://scrypt.io/#faucet) to receive test coins.

* Get an accessable Bitcoin SV testnet APIs for querying and sending transactions. You could use our [tool functions](https://github.com/sCrypt-Inc/scrypt-ts-example/blob/master/txHelper.ts) in the [example project](https://github.com/sCrypt-Inc/scrypt-ts-example), or build your own. 

Then you could write some tests like this:

```ts
describe('Test SmartContract `Demo`', () => {

  before(async () => {
    await Demo.compile();
  })

  it('should be deployed and called successfully.', async () => {
    const demo = new Demo(1n, 2n);
    const balance = 1000;

    // deploy
    const unsignedDeployTx = await buildDeployTx(demo, balance, false);
    const deployTx = await signAndSend(unsignedDeployTx);
    console.log('contract deployed: ', deployTx.id)

    //call
    const { tx: unsignedCallTx } = buildCallTxAndNextInstance(
      deployTx, demo, 
      (demoInst: Demo) => {
        demoInst.add(3n);
      }
    );

    const callTx = await signAndSend(unsignedCallTx);
    console.log('contract called: ', callTx.id)
  })
})
```



