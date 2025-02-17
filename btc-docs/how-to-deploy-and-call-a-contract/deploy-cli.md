---
sidebar_position: 3
---

# Deploy Using CLI

The `deploy` command allows you to deploy an instance of a smart contract to the blockchain. You can simply run the following command in the root of an `sCrypt` project:

```sh
npx @scrypt-inc/cli-btc deploy
```

or

```sh
npx @scrypt-inc/cli-btc d
```

By default, the CLI tool will run a script named `deploy.ts` located in the root of the project. You can also specify a different deployment script using the `--file` or `-f` option.

```sh
npx @scrypt-inc/cli-btc d -f myCustomDeploy.ts
```

If the project was created using sCrypt CLI, it will already have a `deploy.ts` file present (except for [library](../how-to-publish-a-contract.md) projects). If not, the `deploy` command will generate a sample `deploy.ts` file.

Here's an example of such a deployment file:
```ts
import { Demo } from './src/contracts/demo'
import * as dotenv from 'dotenv'
import { getDefaultProvider, getDefaultSigner } from './tests/utils/txHelper';
import { readArtifact } from '@scrypt-inc/scrypt-ts-transpiler-btc';
import { Covenant, deploy, sha256, toByteString } from '@scrypt-inc/scrypt-ts-btc';

import * as dotenv from 'dotenv'

// Load the .env file
dotenv.config()

async function main() {
    const artifact = readArtifact(Demo);
    Demo.loadArtifact(artifact)
    const covenant = Covenant.createCovenant(new Demo(sha256(toByteString("hello world", true))))

    const provider = getDefaultProvider();
    const signer = getDefaultSigner();

    const deployTx = await deploy(signer, provider, covenant);

    console.log(`Demo contract deployed: ${deployTx.getId()}`)
}

main()
```

Upon a successful execution you should see an output like the following:

```
Demo contract deployed: 15b8055cfaf9554035f8d3b866f038a04e40b45e28109f1becfe4d0af9f743cd
```

You can take a look at the deployed smart contract using the [WhatsOnChain block explorer](https://test.whatsonchain.com/tx/15b8055cfaf9554035f8d3b866f038a04e40b45e28109f1becfe4d0af9f743cd).
In our example, the first output contains the compiled smart contract code.
It is indexed using the hash (double SHA-256) of the script: [eb2f10b8f1bd12527f07a5d05b40f06137cbebe4e9ecfb6a4e0fd8a3437e1def](https://test.whatsonchain.com/script/eb2f10b8f1bd12527f07a5d05b40f06137cbebe4e9ecfb6a4e0fd8a3437e1def).
