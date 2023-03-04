---
sidebar_position: 1
---

# Tutorial 1: Hello World


## Overview
In this tutorial, we will go over how to quickly create a “Hello World” smart contract, deploy and call it.

## Create a new project

Make sure [all prerequisite tools](https://scrypt.io/scrypt-ts/installation) are installed.

Run the following commands to create a new project:

```sh
scrypt project helloworld
cd helloworld
npm install
```

The resulting project will contain a sample smart contract `src/contracts/helloworld.ts`, along with all the scaffolding. Let's modify it to the following code:


```ts
import { assert, ByteString, method, prop, sha256, Sha256, SmartContract } from 'scrypt-ts'

export class Helloworld extends SmartContract {

    @prop()
    hash: Sha256;

    constructor(hash: Sha256){
        super(...arguments);
        this.hash = hash;
    }

    @method()
    public unlock(message: ByteString) {
        assert(sha256(message) == this.hash, 'Hash does not match')
    }
}
```

The `Helloworld` contract stores the sha256 hash of a message in the contract property `hash`. Only message which hash value matches `hash` will unlock the contract. 

Now let’s look at what is in the smart contract.


- `SmartContract`: all smart contracts must extend the `SmartContract` base class.

- `@prop`:  the [`@prop` decorator](../how-to-write-a-contract/how-to-write-a-contract.md#properties) marks a contract property.

- `@method`: the [`@method` decorator](../how-to-write-a-contract/how-to-write-a-contract.md#method-decorator) marks a contract method. A [public method](https://scrypt.io/scrypt-ts/how-to-write-a-contract/#public-methods) is an entry point to a contract.

- `assert`: throws an error and fails the contract if its first argument is `false`. Here it ensures the passed message hashed to the expected digest.


## Contract Deployment & Call

Before we deploy the contract, follow [the instruction](../how-to-test-a-contract.md#generate-a-private-key) to fund a Bitcoin key.

1. To [deploy a smart contract](../how-to-deploy-and-call-a-contract.md#contract-deployment), simply call its `deploy` method.

2. To [call a smart contract](../how-to-deploy-and-call-a-contract.md#contract-call), call one of its public method.

Modify `tests/local/helloworld.test.ts` to the following code, to deploy and call the `Helloworld` contract.

```ts
import { Helloworld } from '../../src/contracts/helloworld'
import { getDefaultSigner, inputSatoshis } from './utils/txHelper'
import { toByteString, sha256 } from 'scrypt-ts'

(async () => {

const message = toByteString('hello world', true)

await Helloworld.compile()
const instance = new Helloworld(sha256(message))

// connect to a signer
await instance.connect(getDefaultSigner())

// contract deployment
const deployTx = await instance.deploy(inputSatoshis)
console.log('Helloworld contract deployed: ', deployTx.id)

// contract call
const { tx: callTx } = await instance.methods.unlock(message)
console.log('Helloworld contract `unlock` called: ', callTx.id)

}()
```

Run the following command:
```
npx ts-node tests/local/helloworld.test.ts
```
You will see some output like:

![](../../static/img/hello-world-deploy-and-call-output.png)


You can view [the deployment transaction](https://test.whatsonchain.com/tx/9d6ffffef154cdb2fc93fb6384c343fdbacfa48972976e7d01281d13746e539a) using the WhatsOnChain blockchain explorer:

![](../../static/img/hello-world-contract-deploy-tx.png)


You can also view [the calling transaction](https://test.whatsonchain.com/tx/25aa4697ace65f59098a5767e483149daf82d9ae5fad87a721941c5715faac1d):

![](../../static/img/hello-world-contract-call-tx.png)

Congrats! Your have deloyed and called your first Bitcoin smart contract.










