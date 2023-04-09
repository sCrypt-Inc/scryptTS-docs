---
sidebar_position: 5
---

# How to Integrate sCrypt Service


## Initialize sCrypt Client

Passing your own API key to the `Scrypt.init` function to initialize the sCrypt client. 

```ts
import { Scrypt } from 'scrypt-ts'

Scrypt.init({
  apiKey: 'YOUR_API_KEY',
})
```

:::note
For now, you can use the test key `alpha_test_api_key`.
:::


## Connect `ScryptProvider` with your signer

Initializing the `ScryptProvider` with your own API key and then connect signer to `ScryptProvider`. 

```ts

const signer = new TestWallet(
    myPrivateKey
)

await signer.connect(new ScryptProvider())
```


## Contract Deployment

To deploy the contract, you can refer to this [guide](../how-to-deploy-and-call-a-contract/how-to-deploy-and-call-a-contract.md#contract-deployment).

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

After the deployment, you can use the outpoint of the deployment tx to track your contract instance.

## Contract Calling

Before calling, you need to create a contract instance with the `contractId`.

```ts
const currentInstance = await Scrypt.contractApi.getLatestInstance(
  Demo,
  contractId
)

// connect signer
await currentInstance.connect(signer)

// call the method of current instance to apply the updates on chain
const { tx } = await currentInstance.methods.add(3n)

console.log(`Demo contract called,  tx: ${tx.id}`)
```

With the contract instance, you can call the contract according to this [guide](../how-to-deploy-and-call-a-contract/how-to-deploy-and-call-a-contract.md#contract-call).
