---
sidebar_position: 5
---

# How to Integrate sCrypt Service

Before interacting with a `sCrypt` contract, we must create a contract instance representing the latest state of the contract on chain. Such an instance can be created by calling the  [`fromTx`](../how-to-deploy-and-call-a-contract/how-to-deploy-and-call-a-contract.md#create-a-smart-contract-instance-from-a-transaction) method. However, this means your application needs to track and record all contract-related transactions, especially for a stateful contract.

An easier alternative is to leverage `sCrypt` infrastructure service, which tracks such transactions, so you can focus on your application logic.

## Get Your API Key
### Step 1: Create Your Free Account
Go to the [sCrypt homepage](https://scrypt.io) to create your free account.

### Step 2: Get API Key
Login and click on the copy icon to copy your API Key.


## Integration
Once you have an API key, you can easily integrate sCrypt service into your app by following these simple steps.

## Step 1: Initialize Client

You can pass the API key, along with `network`, to the `Scrypt.init` function to initialize an sCrypt client in your app. 

```ts
import { Scrypt } from 'scrypt-ts'

Scrypt.init({
  apiKey: 'YOUR_API_KEY',
  network: 'testnet',
})
```

:::note
For now, you can use the test key `alpha_test_api_key` on testnet.
:::

## Step 2: Connect `ScryptProvider` with your signer

Connect signer to `ScryptProvider`, the required [provider](../how-to-test-a-contract.md#provider) to use sCrypt service.

```ts
const signer = new TestWallet(myPrivateKey)
await signer.connect(new ScryptProvider())
```

## Step 3: Get Contract ID

Each contract is uniquely identified by the transaction that [deploy](../how-to-deploy-and-call-a-contract/how-to-deploy-and-call-a-contract.md#contract-deployment) it and the output it is in, which we regard as its ID.

```ts
const demo = new Demo(1n, 2n)
// connect signer
await demo.connect(signer)

const balance = 1
const deployTx = await demo.deploy(balance)
console.log('contract Voting deployed: ', deployTx.id)

const contractId = {
    /** The deployment transaction id */
    txId: deployTx.id,
    /** The output index */
    outputIndex: 0,
}
```

You can usually get the ID of a contract from its creator, who publicizes it so others can interact with it.

## Step 4: Get Contract Instance

Once you have the contract ID, you can easily create a contract instance as follows.

```ts
const currentInstance = await Scrypt.contractApi.getLatestInstance(
  Demo,
  contractId
)

// connect signer
await currentInstance.connect(signer)
```
For a stateless contract, the instance points to the deployment tx; for a stateful one, it points to the latest tip in a chain of txs, which sCrypt service tracks automatically.

Once you have the instance, you can easily read from the contract and write to it.
### Read
You read an instance's properties using the dot operator, like any other object.

```ts
// read @prop x
console.log(demo.x)
// read @prop y
console.log(demo.y)
```
:::note
Reading does NOT broadcast a transaction to the blockchain.
:::

### Write
To update a contract instance, you call its public method as [before](../how-to-deploy-and-call-a-contract/how-to-deploy-and-call-a-contract.md#contract-call), which writes to the blockchain by broadcasting a transaction.

```ts
// call the method of current instance to apply the updates on chain
const { tx } = await currentInstance.methods.add(3n)

console.log(`Demo contract called,  tx: ${tx.id}`)
```
