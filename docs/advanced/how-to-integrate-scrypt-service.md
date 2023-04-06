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

## Upload Contract Artifact

Before deploying the contract, it's required to upload the contract artifact.

```ts
await DemoContract.compile()

// need to upload contract artifact before deploying it
const hexHash = await Scrypt.contractApi.uploadArtifact(DemoContract)
console.log(`Contract artifact uploaded, the hexHash is ${hexHash}`)
```

## Contract Deployment

To deploy the contract, you can refer to this [guide](../how-to-deploy-and-call-a-contract/how-to-deploy-and-call-a-contract.md#contract-deployment).

```ts
const deployTx = await instance.deploy(1)
console.log(`Contract deployed: ${deployTx.id}`)

const contractId = {
  /** The deployment transaction id */
  txId: deployTx.id,
  /** The output index */
  outputIndex: 0,
}
```

After the deployment, you can use the outpoint of the deployment tx to track your contract instance.

## Contract Calling

Before calling, you need to create a contract instance aligned with the on-chain state.

```ts
const currentInstance = await Scrypt.contractApi.getLatestInstance(
  DemoContract,
  contractId
)
```

With the contract instance, you can call the contract according to this [guide](../how-to-deploy-and-call-a-contract/how-to-deploy-and-call-a-contract.md#contract-call).
