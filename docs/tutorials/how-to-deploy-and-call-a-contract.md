---
sidebar_position: 4
---

# Tutorial 4: How to Deploy & Call a Contract


## Overview

In previous tutorials, we've seen how to test and run contract locally. In this tutorial, we will show how to deploy and call contract on the testnet. 

We continue to develop on our *hello-world* project.

## Setup

Before we deploy the contract, we need to generate a [private key](https://en.bitcoin.it/wiki/Private_key) and send some bitcoins to the address derived from it. You can use the following code to generate a private key and derive its address:

```ts
const newPrivKey = bsv.PrivateKey.fromRandom('testnet')
console.log(`its address is: '${newPrivKey.toAddress()}'`)
```
<center><a href="https://github.com/sCrypt-Inc/scryptTS-examples/blob/master/tests/privateKey.ts">privateKey.ts</a></center>

After the private key is generated, you can get some testnet bitcoins from [this faucet](https://scrypt.io/#faucet).


To deploy a contract and trigger its execution, we need to build transactions and send them to the Bitcoin blockchain. We provide a tool library [txHelper.ts](https://github.com/sCrypt-Inc/scryptTS-examples/blob/master/tests/txHelper.ts) for doing so.

## Instantiate the contract

This is the same as instantiating the contract in the [Tutorial 2](./how-to-test-a-contract.md#instantiate-the-contract):

```ts
Demo.compile().then(async ()=> {
    let demo = new Demo(1n, 2n);
})
```

## Deploy


Deploying a contract consists of the following steps:

1. Fetch the available UTXOs for the private key
2. Construct a transaction: the inputs are the fetched UTXOs and the first output contains the Demo contract
3. Sign the transaction with the private key and broadcast it.

```ts
// contract deployment
// 1. get the available utxos for the private key
const utxos = await utxoMgr.getUtxos();
// 2. construct a transaction for deployment
const unsignedDeployTx = demo.getDeployTx(utxos, 1000);
// 3. sign and broadcast the transaction
const deployTx = await signAndSend(unsignedDeployTx);
console.log('Demo contract deployed: ', deployTx.id);
```

The method `getDeployTx()` of `Demo` contract constructs a deployment transaction, whose first output contains the `Demo` contract:

```ts
getDeployTx(utxos: UTXO[], satoshis: number): bsv.Transaction {
    return new bsv.Transaction().from(utxos)
        .addOutput(new bsv.Transaction.Output({
            script: this.lockingScript,
            satoshis: satoshis,
        }))
}
```

**NOTE:** The `getDeployTx` function implements the function of deploying the contract, not the logic of the contract itself, so `@method` decorator should not be added and the function will be only be run off chain.

After signing and broadcasting the transaction, you should see a message like the following:

```
Demo contract deployed:  e5924840a74280d0313c7ff5964370cc203d728120c9145288a579ac6848ea28
```

Visit a [block explorer](https://test.whatsonchain.com/tx/e5924840a74280d0313c7ff5964370cc203d728120c9145288a579ac6848ea28) to see the transaction on the testnet.

## Call

Once a smart contract is deployed, we can construct a transaction and set the correct unlocking arguments to call it.

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

This code uses `prevTx` as input for the current transaction and sets the unlocking script via `setInputScript`. In the current example, `prevTx` is the transaction where we deployed the `Demo` contract. Note that you need to call the public function `add` of the contract in the callback of `getUnlockingScript(callback: (self: typeof this) => void): bsv.Script;` to get the corresponding unlocking script.

Only transactions containing the correct unlocking script can be accepted by the blockchain, and the transaction can spend the UTXO where the contract is located. That is, call the contract successfully.

Again, we call `signAndSend` to sign and broadcast the transaction.

```ts
// contract call
// 1. construct a transaction for call
const unsignedCallTx = demo.getCallTxForAdd(3n, deployTx);
// 2. sign and broadcast the transaction
const callTx = await signAndSend(unsignedCallTx);
console.log('Demo contract called: ', callTx.id);

// collect the new p2pkh utxo if it exists in `callTx`
utxoMgr.collectUtxoFrom(callTx);
```

You will see something similar to the following:

```
Demo contract called:  fd1e276ba344f51fa972366b6eed60fae99bce7c3d339b9e2389067a92bc7648
```


The full code is [here](https://github.com/sCrypt-Inc/scryptTS-examples/blob/master/tests/testnet/demo.ts).
# Conclusion

We have finished deploying and calling `Demo` contract on the testnet. The approache also applies to the mainnet.
















