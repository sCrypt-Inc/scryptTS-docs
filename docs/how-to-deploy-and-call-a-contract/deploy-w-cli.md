---
sidebar_position: 3
---

# Deploy Using sCrypt CLI

## Introduction 

The `deploy` command allows you to deploy an instance of a smart contract to the blockchain. You can simply run the following command in the root of an sCrypt project:

```sh
scrypt deploy
```

or

```sh
scrypt d
```

By default, the CLI tool will run the deployment script named `deploy.ts` located in the root of the project. You can also specify a different deployment script using the `--file` or `--f` option.

```sh
scrypt d --f myCustomDeploy.ts
```

If the project was created using sCrypt CLI, it will already have a `deploy.ts` file present (except for library projects). If not, the `deploy` command will generate a template.

Here's an example of such a deployment file:
```ts
import { Demoproject } from './src/contracts/demoproject'
import {
    bsv,
    TestWallet,
    DefaultProvider,
    sha256,
    toByteString,
} from 'scrypt-ts'

import * as dotenv from 'dotenv'

// Load the .env file
dotenv.config()

// Read the private key from the .env file
const privateKey = bsv.PrivateKey.fromWIF(process.env.PRIVATE_KEY)

const signer = new TestWallet(privateKey, new DefaultProvider())

async function main() {
    await Demoproject.compile()

    The amount of satoshis locked in the smart contract:
    const amount = 100

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