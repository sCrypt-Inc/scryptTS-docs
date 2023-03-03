---
sidebar_position: 1
---

# Tutorial 1: Hello World


## Overview
In this tutorial, we will go over how to quickly create an sCrypt project and explain its components.

## Create a new project

First we need to make sure that the [sCrypt CLI tool](https://github.com/sCrypt-Inc/scrypt-cli) is installed. Check the [installation section](../installation.md) if you don't have it installed yet.

We can run the following command to create a new sCrypt project:

```sh
npx scrypt-cli project hello-world
```

The resulting project will contain a `src/helloworld.ts` contract along with all the scaffolding.


Below is the source code of the `HelloWorld` contract:


```ts
import {
    assert,
    ByteString,
    method,
    prop,
    sha256,
    Sha256,
    SmartContract,
} from 'scrypt-ts'

export class HelloWorld extends SmartContract {

    @prop()
    hash: Sha256;

    constructor(hash: Sha256){
        super(...arguments);
        this.hash = hash;
    }

    @method()
    public unlock(message: ByteString) {
        assert(this.hash === sha256(message), 'Not expected message!')
    }
}
```

The `HelloWorld` contract stores the sha256 hash of a message in the contract property `hash`. Only message which hash value matches `hash` will unlock the contract. 

The following is an explanation of some keywords in the contract:


- `ByteString`: A [`ByteString`](../how-to-write-a-contract/how-to-write-a-contract.md#bytestring) represents a byte array.

- `SmartContract`: All smart contracts should extends the `SmartContract` class.

- `@prop`:  The [`@prop` decorator](../how-to-write-a-contract/how-to-write-a-contract.md#properties) on class properties to mark them as contract properties, which means the values would be stored on chain within bitcoin transactions.

- `@method`: The [`@method` decorator](../how-to-write-a-contract/how-to-write-a-contract.md#method-decorator) on class methods to mark them as contract methods. The logic implemented in these methods would be serialized into [bitcoin transactions](https://wiki.bitcoinsv.io/index.php/Bitcoin_Transactions) and be executed on chain.


## Build

To compile the contract code into [Bitcoin Script](https://wiki.bitcoinsv.io/index.php/Opcodes_used_in_Bitcoin_Script) with following commands:

```sh
npx tsc
```
or

```sh
npx scrypt-cli compile
```

If the build process was successful, you will get a contract artifact file. A contract artifact file is the compiler output results in a JSON. It’s a representation used to build locking and unlocking scripts.


The compiling process may output diagnostic information in the console about the contract class. Update the source code if needed.

## Local Testing

Before using a smart contract in production, one should always test it carefully, especially because any bug in it may cause **real economic losses**. The code in `tests/local/helloWorld.test.ts` locally tests the `unlock` public `@method` of the `HelloWorld` contract.

Follow the steps below to run the above test code:

1. [Generate a private key](./how-to-test-a-contract.md#generate-a-private-key):

2. `npm test`

## Contract Deploy & Call

### Setup

1. [Generate a private key](./how-to-test-a-contract.md#generate-a-private-key):

2. Get a private key with some test coins on the testnet. You could use our [facuet](https://scrypt.io/#faucet) to receive test coins.

### Introduction

It is highly recommended to test your contract on the [testnet](https://test.whatsonchain.com/) after passing local tests. It ensures that a contract can be successfully deployed and invoked as expected on the blockchain.


1. To [deploy a smart contract](../how-to-deploy-and-call-a-contract.md#contract-deployment), simply call its `deploy` method.

2. To [call a smart contract](../how-to-deploy-and-call-a-contract.md#contract-call), we need to create a smart contract instance from the deploy transaction. Then call a contract's public method (`instance.methods.xxxx()`)  on the instance.

The following code implements deploying and calling the `HelloWorld` contract:


```ts
import { HelloWorld } from '../../src/contracts/helloWorld'
import { getDefaultSigner, inputSatoshis } from './utils/txHelper'
import { toByteString, sha256 } from 'scrypt-ts'

const message = 'hello world, sCrypt!'

async function main() {
    await HelloWorld.compile()
    const helloWorld = new HelloWorld(sha256(toByteString(message, true)))

    // connect to a signer
    await helloWorld.connect(getDefaultSigner())

    // contract deployment
    const deployTx = await helloWorld.deploy(inputSatoshis)
    console.log('HelloWorld contract deployed: ', deployTx.id)

    // contract call
    const { tx: callTx } = await helloWorld.methods.unlock(
        toByteString(message, true)
    )
    console.log('HelloWorld contract `unlock` called: ', callTx.id)
}

describe('Test SmartContract `HelloWorld` on testnet', () => {
    it('should succeed', async () => {
        await main()
    })
})
```

Use `npm run testnet` to execute the above code. You will see the following output:

![](../../static/img/hello-world-deploy-and-call-output.png)


View [the transaction of the deployment contract](https://test.whatsonchain.com/tx/9d6ffffef154cdb2fc93fb6384c343fdbacfa48972976e7d01281d13746e539a) on the whatsonchain blockchain browser:

![](../../static/img/hello-world-contract-deploy-tx.png)



View [the transaction of the calling contract](https://test.whatsonchain.com/tx/25aa4697ace65f59098a5767e483149daf82d9ae5fad87a721941c5715faac1d) on the whatsonchain blockchain browser:

![](../../static/img/hello-world-contract-call-tx.png)

# Conclusion

Congrats! We have finished building our first smart contract with **scryptTS**.










