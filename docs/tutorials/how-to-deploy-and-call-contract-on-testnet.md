---
sidebar_position: 4
---

# Tutorial 4: How to deploy and call contract on the testnet


## Overview

In previous tutorials, we've seen how to test and run contract locally. In this tutorial, we will show how to deploy and call contract on the testnet. 

We continue to develop on our *scrypt-ts-hello-world* project.

## Setup

Before we start writing the code to deploy the contract, we need to generate a [bitcoin privatekey](https://en.bitcoin.it/wiki/Private_key) and recharge some bitcoins to the address corresponding to the privatekey. You can use the following code to generate and save the privatekey:

```ts
import { exit } from 'process';
import { bsv } from 'scryptlib';
import * as dotenv from 'dotenv';
import * as fs from 'fs';

const dotenvConfigPath = ".env";
dotenv.config({path: dotenvConfigPath});

// fill in private key on testnet in WIF here
const privKey : string = process.env.PRIVATE_KEY || '';
if (!privKey) {
  genPrivKey();
}

export function genPrivKey() {
  const newPrivKey = bsv.PrivateKey.fromRandom('testnet')
  console.log(`Missing private key, generating a new one ...
Private key generated: '${newPrivKey.toWIF()}'
You can fund its address '${newPrivKey.toAddress()}' from sCrypt faucet https://scrypt.io/#faucet`);
  // auto generate .env file with new generated key
  fs.writeFileSync(dotenvConfigPath, `# You can fund its address '${newPrivKey.toAddress()}' from sCrypt faucet https://scrypt.io/#faucet
  PRIVATE_KEY="${newPrivKey}"`);
  exit(-1)
}

export const privateKey = bsv.PrivateKey.fromWIF(privKey);
```

<center><a href="https://github.com/sCrypt-Inc/scryptTS-examples/blob/master/tests/privateKey.ts">privateKey.ts</a></center>

After the privatekey is generated, you can get some testnet bitcoins from our [faucet](https://scrypt.io/#faucet).


Deploy contracts and trigger contract execution by constructing transactions and sending them to the Bitcoin blockchain. We provide a tool library [txHelper.ts](https://github.com/sCrypt-Inc/scryptTS-examples/blob/f85dcf7a5d96979f39b5f512466bd9f4bdd22693/txHelper.ts#L32) for building transactions.

## Instantiate the contract

This is the same as instantiating the contract in the [Tutorial 2](./how-to-test-contract.md#instantiate-the-contract):

```ts
Demo.compile().then(async ()=> {
    let demo = new Demo(1n, 2n);
})
```

## Deploy


Deploying a contract usually requires the completion of the following `3` steps:

- Get the available utxos for the privatekey
- Construct a transaction: the input of which is the acquired utxos, and the first output of the transaction contains the lockingScript corresponding to the Demo contract
- Sign and broadcast transaction with the privatekey

```ts
// contract deployment
// 1. get the available utxos for the privatekey
const utxos = await utxoMgr.getUtxos();
// 2. construct a transaction for deployment
const unsignedDeployTx = demo.getDeployTx(utxos, 1000);
// 3. sign and broadcast the transaction
const deployTx = await signAndSend(unsignedDeployTx);
console.log('Demo contract deployed: ', deployTx.id);
```

The method `getDeployTx()` of `Demo` contract implemented constructing a deployment transaction, which first output contains the locking script corresponding to the `Demo` contract:

```ts
getDeployTx(utxos: UTXO[], satoshis: number): bsv.Transaction {
    return new bsv.Transaction().from(utxos)
        .addOutput(new bsv.Transaction.Output({
            script: this.lockingScript,
            satoshis: satoshis,
        }))
}
```

**NOTE:** The `getDeployTx` function implements the function of deploying the contract, not the logic of the contract itself, so `@method` decorator should not be added.

After sign and broadcast the transaction, you will see the following output:

```
Demo contract deployed:  e5924840a74280d0313c7ff5964370cc203d728120c9145288a579ac6848ea28
```

Visit `https://test.whatsonchain.com/tx/e5924840a74280d0313c7ff5964370cc203d728120c9145288a579ac6848ea28` to see the transaction in the testnet.

## Call

Once a smart contract is successfully deployed, it must be executed with the correct parameters. We construct the transaction and set the correct unlocking parameters to call the contract.

Now we implement a function that calls the `add` public function of the `Demo` contract:

```ts
getCallTx(z: bigint, prevTx: bsv.Transaction): bsv.Transaction {
    return new bsv.Transaction()
        .addInputFromPrevTx(prevTx)
        .setInputScript(0, () => {
            return this.getUnlockingScript(self => self.add(z));
        })
}
```

This code uses `prevTx` as input for the current transaction and sets the unlocking script via `setInputScript`. In the current example, `prevTx` is the transaction where we deploy the `Demo` contract. Note that you need to call the public function `add` of the contract in the callback of `getUnlockingScript(callback: (self: typeof this) => void): bsv.Script;` to get the corresponding unlocking script.

Only transactions containing the correct unlocking script can be accepted by the blockchain, and the transaction can spend the utxo where the contract is located (that is, execute the contract).

Then, also call `signAndSend` to sign and broadcast the transaction.

```ts
// contract call
// 1. construct a transaction for call
const unsignedCallTx = demo.getCallTx(3n, deployTx);
// 2. sign and broadcast the transaction
const callTx = await signAndSend(unsignedCallTx);
console.log('Demo contract called: ', callTx.id);

// collect the new p2pkh utxo if it exists in `callTx`
utxoMgr.collectUtxoFrom(callTx);
```

You will see the following output:

```
Demo contract called:  fd1e276ba344f51fa972366b6eed60fae99bce7c3d339b9e2389067a92bc7648
```


The full code is [here](https://github.com/sCrypt-Inc/scryptTS-examples/blob/master/tests/testnet/demo.ts).
# Conclusion

We have finished deploying and calling `Demo` contract on the testnet.
















