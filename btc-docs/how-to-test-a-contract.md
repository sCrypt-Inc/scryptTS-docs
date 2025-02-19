---
sidebar_position: 5
---

# How to Test a Contract

Before using a smart contract in production, one should always test it carefully, especially because any bug in it may cause **real economic losses**.


Create a sample project with [the sCrypt CLI Tool](./installation.md#the-scrypt-cli-tool):

```sh
npx @scrypt-inc/cli-btc project demo
```

This will create a complete sCrypt project, which includes a sample smart contract `Demo`:

```ts
import {
    assert,
    ByteString,
    method,
    prop,
    sha256,
    Sha256,
    SmartContract,
} from '@scrypt-inc/scrypt-ts-btc'

export class Demo extends SmartContract {
    @prop()
    hash: Sha256

    constructor(hash: Sha256) {
        super(...arguments)
        this.hash = hash
    }

    @method()
    public unlock(message: ByteString) {
        assert(sha256(message) == this.hash, 'Hash does not match')
    }
}
```

Let us now open the file `tests/demo.test.ts`. This file contains code for deployment of our `Demo` contract locally or on the Bitcoin testnet, and a subsequent  method call on the contract.


## Load Artifact

First, call function `SmartContract.loadArtifact()` to load the contract artifact file in order to initialize the contract class before testing.

```ts
const artifact = readArtifact(Demo);
Demo.loadArtifact(artifact)
```

## Instantiate the Covenant

```ts
const demo = new Demo(sha256(toByteString('hello world', true)))
const covenant = Covenant.createCovenant(demo)
```


## Covenant Deployment

To deploy a covenant, simply call `deploy()` function:

```ts
const provider = getDefaultProvider();
const signer = getDefaultSigner();
const deployTx = await deploy(signer, provider, covenant);
console.log(`Demo contract deployed: ${deployTx.getId()}`)
```

## Call a Method

### Public
You can call a contract's public `@method` as [before](./how-to-deploy-and-call-a-contract/how-to-deploy-and-call-a-contract.md#contract-call):

```ts
contract.unlock(toByteString('hello world', true));
```

### Non-Public

You can also call non-public methods.

Let's add a non-public method to our contract:

```ts
@method()
hashMessage(message: ByteString): ByteString {
    return sha256(message)
}
```

You can now call this method like the following:

```ts
const message: ByteString = toByteString('hello world', true)
const hashRes: ByteString = demo.hashMessage(message)
```

Note the absence of `.methods` after `instance`, compared to a public method.

If the method is static, it can be called like this:

```ts
@method()
static hashMessageStatic(message: ByteString): ByteString {
    return sha256(message)
}
```

```ts
const hashRes: ByteString = Demo.hashMessageStatic(message)
```

It should be noted that non-public methods are only directly callable off-chain, e.g., for testing. On chain, they can only be invoked through a public method.

## Integrate with a testing framework

You can use whatever testing framework you like to write unit tests for your contract. For example, a test using [Mocha](https://mochajs.org/) is shown below:

```js

describe('Test SmartContract `Demo`', () => {
  let covenant: Covenant

  before(async () => {
    const artifact = readArtifact(Demo);
    Demo.loadArtifact(artifact)
    const demo = new Demo(sha256(toByteString('hello world', true)))
    covenant = Covenant.createCovenant(demo)
  })

  it('should pass the public method unit test successfully.', async () => {

    const provider = getDefaultProvider();
    const signer = getDefaultSigner();

    const deployTx = await deploy(signer, provider, covenant);

    expect(deployTx.getId()).to.have.length(64);

    const callTx = await call(signer, provider, covenant, {
        invokeMethod: (contract: Demo) => {
          contract.unlock(toByteString('hello world', true));
        },
    });

    expect(callTx.getId()).to.have.length(64);
  })
})
```

## Run tests


Compared to other blockchains, smart contracts on Bitcoin are **pure**.

* Given the same input, its public method always returns the same boolean output: success or failure. It has no internal state.
* A public method call causes no side effects.


Thus, you can run tests in two different environments:


1. **Local**: Running tests locally without touching the Bitcoin blockchain. Transactions are constructed with dummy UTXOs. If it passes tests off chain, we are confident it will behave the same on chain.

Run tests in the dummy environment by `DUMMY_PROVIDER=1`: 

```
"test": "npm run test:mocha",
"test:mocha": "cross-env DUMMY_PROVIDER=1 mocha --no-timeouts",
```

Using the following command:

```sh
npm run test
```


1. **Testnet**: Running tests on the testnet of Bitcoin blockchain. Transactions are constructed with real UTXOs on the testnet.


Run tests in the `testnet` environment using the following command:

```sh
npm run test:testnet
```

:::note
When running tests in a `testnet` environment, you need to get some test coins from a [faucet](./how-to-deploy-and-call-a-contract/faucet.md).
:::


### Run tests

As before, we can just use the following command:

```sh
npm run test
```

or

```sh
npm run test:testnet
```
