---
sidebar_position: 3
---
 
# How to Test a Contract
 
Before using your contract code in production, you should always test it carefully, especially because it may cause **real economic losses** if there were bugs or safety issues.
 
There are two different kinds of test recommended for every project using `scryptTS`:
 
* **Local Testing**
* **Testnet Testing**
 
## Test a Contract locally
 
The main purpose of local testing for a contract is to make sure its public/entry `@method`s will function as designed. That should be considered from two perspectives:

1. If given the right parameters, a public/entry `@method` call should always be successful.
2. If given any wrong parameters, a public/entry `@method` call should never be successful.

### Use `SmartContact.verify` method
 
The method is dedicated to test a contract call. The function signature is like this:
 
```ts
instance.verify(entryMethodInvoking: (self: SmartContract) => void): VerifyResult
```

Notice that it’s actually a callback function named `entryMethodInvoking` being passed to the call of `instance.verify`. You should call the testing target method in this callback, like:

```ts
instance.verify(() => {
   instance.entryMethod(...args);
} )
```

What it does underground is to transform the public function call to a pair of locking script and unlocking script, then execute the joint script on the Bitcoin Virtual Machine and return the result.
 
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
 
After passing local tests, you'd better test your contract on the [testnet](https://test.whatsonchain.com/) of Bitcoin. 

The main purpose of testing a contract on testnet is to make sure a contract instance can be successfully integrated with a transaction, and it functions as expected along with the deploy and call transactions.
 
In order to do so, you should meet these requirements:
 
* Get a private key with some amount of BSV tokens on testnet. You could use our [facuet](https://scrypt.io/#faucet) to receive test coins.
 
* Get an accessible Bitcoin testnet APIs for querying and sending transactions. You could use our [tool functions](https://github.com/sCrypt-Inc/scryptTS-examples/blob/master/txHelper.ts) in the [example project](https://github.com/sCrypt-Inc/scryptTS-examples), or build your own.
 
Then you could write some tests like this:
 
```ts
async function main() {
    const utxoMgr = await getUtxoManager();
    await Demo.compile();

    let demo = new Demo(1n, 2n);

    // contract deployment
    // 1. get the available utxos for the privatekey
    const utxos = await utxoMgr.getUtxos();
    // 2. construct a transaction for deployment
    const unsignedDeployTx = demo.getDeployTx(utxos, 1000);
    // 3. sign and broadcast the transaction
    const deployTx = await signAndSend(unsignedDeployTx);
    console.log('Demo contract deployed: ', deployTx.id);

    // contract call
    // 1. construct a transaction for call
    const unsignedCallTx = demo.getCallTx(3n, deployTx);
    // 2. sign and broadcast the transaction
    const callTx = await signAndSend(unsignedCallTx);
    console.log('Demo contract called: ', callTx.id);

    // collect the new p2pkh utxo if it exists in `callTx`
    utxoMgr.collectUtxoFrom(callTx);
}

describe('Test SmartContract `Demo` on testnet', () => {
    it('should success', async () => {
        await main();
    })
})
```
 
You may visit [here](./how-to-deploy-and-call-a-contract.md) to see more details on contract deploy and call.