---
sidebar_position: 3
---

# Deploy Using CLI

The `deploy` command allows you to deploy an instance of a smart contract to the blockchain. You can simply run the following command in the root of an `sCrypt` project:

```sh
scrypt deploy
```

or

```sh
scrypt d
```

By default, the CLI tool will run a script named `deploy.ts` located in the root of the project. You can also specify a different deployment script using the `--file` or `-f` option.

```sh
scrypt d -f myCustomDeploy.ts
```

If the project was created using sCrypt CLI, it will already have a `deploy.ts` file present (except for [library](../how-to-publish-a-contract.md) projects). If not, the `deploy` command will generate a sample `deploy.ts` file.

Here's an example of such a deployment file:
```ts
import { Demoproject } from './src/contracts/demoproject'
import { bsv, TestWallet, DefaultProvider, sha256, toByteString, } from 'scrypt-ts'

import * as dotenv from 'dotenv'

// Load the .env file
dotenv.config()

// Read the private key from the .env file.
// The default private key inside the .env file is meant to be used for the Bitcoin testnet.
// See https://scrypt.io/docs/bitcoin-basics/bsv/#private-keys
const privateKey = bsv.PrivateKey.fromWIF(process.env.PRIVATE_KEY)

// Prepare signer. 
// See https://scrypt.io/docs/how-to-deploy-and-call-a-contract/#prepare-a-signer-and-provider
const signer = new TestWallet(privateKey, new DefaultProvider())

async function main() {
    // Compile the smart contract.
    await Demoproject.compile()

    // The amount of satoshis locked in the smart contract:
    const amount = 100

    // Instantiate the smart contract and pass constructor parameters.
    const instance = new Demoproject(
        sha256(toByteString('hello world', true))
    )

    // Connect to a signer.
    await instance.connect(signer)

    // Contract deployment.
    const deployTx = await instance.deploy(amount)
    console.log('Demoproject contract deployed: ', deployTx.id)
}

main()
```

Upon a successful execution you should see an output like the following:

```
Demoproject contract deployed:  15b8055cfaf9554035f8d3b866f038a04e40b45e28109f1becfe4d0af9f743cd
```

You can take a look at the deployed smart contract using the [WhatsOnChain block explorer](https://test.whatsonchain.com/tx/15b8055cfaf9554035f8d3b866f038a04e40b45e28109f1becfe4d0af9f743cd). 
In our example, the first output contains the compiled smart contract code. 
It is indexed using the hash (double SHA-256) of the script: [eb2f10b8f1bd12527f07a5d05b40f06137cbebe4e9ecfb6a4e0fd8a3437e1def](https://test.whatsonchain.com/script/eb2f10b8f1bd12527f07a5d05b40f06137cbebe4e9ecfb6a4e0fd8a3437e1def)
