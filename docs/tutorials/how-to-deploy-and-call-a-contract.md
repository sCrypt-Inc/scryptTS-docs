---
sidebar_position: 3
---

# Tutorial 3: How to Deploy & Call a Contract

## Overview

In the previous tutorials we've generated a project and ran its tests locally. In this tutorial we will deploy and call our contract on the Bitcoin testnet.

## Setup

Before we deploy the contract, we need to generate a [private key](https://en.bitcoin.it/wiki/Private_key) and send some bitcoins to the address derived from it. Let's run the following command:

```sh
npm run genprivkey
```

The command will generate a private key which will be stored in the `.env` file in our project root directory. Keep this key secret as whoever has access to it can take the funds!

The command will also output the [Bitcoin address](https://wiki.bitcoinsv.io/index.php/Bitcoin_address) corresponding to our private key. This address will need to be funded with testnet bitcoins. You can get some for free of charge from [this faucet](https://scrypt.io/#faucet).

Now we will take a look at the file `tests/testnet/demo.ts`. This file contains code for deployment of our `Demo` contract on the Bitcoin testnet and a subsequent public method call on the contract.

## Deploying of the smart contract

Deploying a contract consists of the following steps:

1. Fetch the available UTXOs for the private key
2. Construct a transaction: the inputs are the fetched UTXOs and the first output contains the Demo contract
3. Sign the transaction with the private key and broadcast it.

```ts
// contract deployment
// 1. get the available utxos for the private key
const utxos = await utxoMgr.getUtxos()
// 2. construct a transaction for deployment
const unsignedDeployTx = demo.getDeployTx(utxos, 1000)
// 3. sign and broadcast the transaction
const deployTx = await signAndSend(unsignedDeployTx)
console.log('Demo contract deployed: ', deployTx.id)
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

**NOTE:** The `getDeployTx` method implements the method of deploying the contract, not the logic of the contract itself, so the `@method` decorator should not be added and the method will be only be run off chain.


## Call a smart contract

Once a smart contract is deployed, we can construct a transaction and set the correct unlocking arguments to call it.

If we take a look at our smart contracts code, we see a method that calls the `add` public method of the `Demo` contract:

```ts
getCallTx(z: bigint, prevTx: bsv.Transaction): bsv.Transaction {
    return new bsv.Transaction()
        .addInputFromPrevTx(prevTx)
        .setInputScript(0, () => {
            return this.getUnlockingScript(self => self.add(z))
        })
}
```

This code uses `prevTx` as input for the current transaction and sets the unlocking script via `setInputScript`. In the current example, `prevTx` is the transaction where the initial deployment of the `Demo` contract is. Note that you need to call the public method `add` of the contract in the callback of `getUnlockingScript(callback: (self: typeof this) => void): bsv.Script;` to get the corresponding unlocking script.

Only transactions containing the correct unlocking script can be accepted by the blockchain. The unlocking script unlocks the UTXO which contains our contracts script code, which is defined in its public methods. This is the process we have in mind when we refer to "calling the deployed smart contract".

Again, we call `signAndSend` to sign and broadcast the transaction.

```ts
// contract call
// 1. construct a transaction for call
const unsignedCallTx = demo.getCallTxForAdd(3n, deployTx)
// 2. sign and broadcast the transaction
const callTx = await signAndSend(unsignedCallTx)
console.log('Demo contract called: ', callTx.id)

// collect the new p2pkh utxo if it exists in `callTx`
utxoMgr.collectUtxoFrom(callTx)
```
# Running the code

The deployment code is wrapped into a simple NPM command:

```sh
npm run testnet
```

Make sure you funded your address before running this command.

After a successful run you should see something like tho following:
```
Demo contract deployed:  f3f372aa25f159efa93db8c51a4eabbb15935358417ffbe91bfb78f4f0b1d2a3
Demo contract called:  dc53da3e80aadcdefdedbeb6367bb8552e381e92b226ab1dc3dc9b3325d8a8ee
```

These are the TXIDs of the transaction which deployed the smart contract code and then the transaction which unlocked it.

You can see the structure of the transactions using a [block explorer](https://test.whatsonchain.com/tx/f3f372aa25f159efa93db8c51a4eabbb15935358417ffbe91bfb78f4f0b1d2a3)

# Conclusion

We have finished deploying and calling `Demo` contract on the testnet. The same approach also applies to the mainnet.

Jump over to [Tutorial 4](./stateful-contract.md) to see how we can create a project with a stateful contract.