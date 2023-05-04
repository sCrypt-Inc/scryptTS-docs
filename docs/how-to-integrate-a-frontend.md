---
sidebar_position: 8
---

# How to Integrate With a Frontend

This section will show how to integrate your smart contract to a frontend, so users can interact with it.

We use [React](https://reactjs.org/) as our frontend framework as an example. We assume that you already have the basic knowledge of frontend development, so we will not spend much time introducing this part of the code, but mostly be focusing on how to interact with the smart contract in the front end project.

:::note
Currently, the only supported frontend frameworks is React. We anticipate to add supports for other frameworks over time.
:::

## Setup

### React

Run the following command to create a React project, named `helloworld`.

```bash
npx create-react-app helloworld --template typescript
```

![](../static/img/react-scaffold.png)

We will do most work under the `src` directory.

### `sCrypt`

Run the `init` command of the [CLI](./installation.md#the-scrypt-cli-tool) to turn it into an `sCrypt` project.

```bash
cd helloworld
npx scrypt-cli init
```

This installs all the dependencies and configs the contract development environment.
After this, we are ready to go!

## Load Contract

Before interacting with a smart contract at the front end, we need to load the contract class in two steps.


We'll take a look at how to generate the artifact by ourselves first.

### 1. Compile Contract

Before you start, you need to get the contract source files, as a frontend developer.

Let's use the [Helloworld contract](./tutorials/hello-world.md) as an example. Copy and paste `helloworld.ts` into the `src/contracts` directory.

![](../static/img/copy-contract-source.png)

Run the following command to compile the contract.

```bash
npx scrypt-cli compile
```

![](../static/img/scrypt-cli-compile.png)

After the compilation, you will get an JSON artifact file at `artifacts/src/contracts/helloworld.json`.

![](../static/img/contract-artifacts.png)

### 2. Load Artifact

Now with the contract artifact file, you directly load it in the `index.tsx` file.

```ts
import { Helloworld } from './contracts/helloworld';
var artifact = require('../artifacts/src/contracts/helloworld.json');
Helloworld.loadArtifact(artifact);
```

Now you can create an instance from the contract class as before.
```ts
const message = toByteString('hello world', true)
const instance = new Helloworld(sha256(message))
```

:::info
You cannot simply call `Helloworld.compile()` at the front end, since it only works in NodeJS, not in browser.
:::

## Integrate Wallet

You will integrate [Sensilet](https://sensilet.com/), a MetaMask-like wallet, into the project.

:::info
You can refer to this [guide](./advanced/how-to-add-a-signer.md) to add support for other wallets.
:::

To request access to the wallet, you can use its `requestAuth` method. 

```ts
const provider = new DefaultProvider(bsv.Networks.testnet);
const signer = new SensiletSigner(provider);

// request authentication
const { isAuthenticated, error } = await signer.requestAuth();
if (!isAuthenticated) {
    // something went wrong, throw an Error with `error` message
    throw new Error(error);
}

// authenticated
// you can show user's default address
const userAddress = await signer.getDefaultAddress();
// ...
```

Now you can connect the wallet to the contract instance as before.
```ts
await instance.connect(signer);
```

Afterwards, you can interact with the contract from the front end by [calling its method](./how-to-deploy-and-call-a-contract/how-to-deploy-and-call-a-contract.md#contract-call) as usual.

Go [here](https://learn.scrypt.io) to see a full example on how to build a Tic-Tac-Toe game on chain.
