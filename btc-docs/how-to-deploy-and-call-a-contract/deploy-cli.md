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

If the project was created using sCrypt CLI, it will already have a `deploy.ts` file present (except for library projects). If not, the `deploy` command will generate a sample `deploy.ts` file.

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
Demo contract deployed: 4080c16237b8d8e25af54a1d8b151fb5aa804410d70c0d1ba1fa6f7bb8d1ab25
```

You can take a look at the deployed smart contract using the [Mempool block explorer](https://mempool-testnet.fractalbitcoin.io/tx/4080c16237b8d8e25af54a1d8b151fb5aa804410d70c0d1ba1fa6f7bb8d1ab25).
In our example, the first output contains the compiled smart contract code.
