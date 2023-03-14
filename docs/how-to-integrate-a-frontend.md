---
sidebar_position: 8
---

# How to integrate Smart Contract With a Frontend

This section will introduce how to connect the smart contract to a frontend project and interact with it.

We use [React](https://reactjs.org/) as our frontend framework as an example. We assume that you already have the basic knowledge of frontend development, so we will not spend much time introducing this part of the code, but mostly be focusing on how to interact with the smart contract in the frontend project.

:::note
You can use any frontend framework to build the dApp.
:::

## Setup

### React

Run the following command to create a React project.

```bash
npx create-react-app [your-project-name] --template typescript
```

![](../static/img/react-scaffold.png)

We will do most work under the `src` directory.

### `scryptTS`

Run the `init` command of the [CLI](./installation.md#the-scrypt-cli-tool) to turn it into a `scryptTS` project.

```bash
cd [your-project-name]
npx scrypt-cli init
```

This installs all the dependencies and configs the contract development environment.
After this, we are ready to go!

## Load Contract

Before interacting with the contract in the front end, we need to load the contract class first. 

When a contract source file is compiled, it will deliver a JSON file, we call it the contract artifact.

Generally, as a frontend developer, you will get this contract artifact from your backend partner or contract developer, then load it in the front end, and that's all.

We'll take a look at how to generate the artifact by ourselves first.

### Compile Contract

When you have the contract source file, copy it into `src/contracts` directory.

![](../static/img/copy-contract-source.png)

Then run the following command to compile the contract.

```bash
npx scrypt-cli compile
```

![](../static/img/scrypt-cli-compile.png)

After the compilation, you will get the artifact in `artifacts/src/contract` directory.

![](../static/img/contract-artifacts.png)

### Load Artifact

Now with the contract artifact file, we directly load it in the `index.tsx` file.

```ts
import { HelloWorld } from './contracts/helloWorld';
var artifact = require('../artifacts/src/contracts/helloWorld.json');
HelloWorld.loadArtifact(artifact);
```

## Integrate Wallet

We will integrate [Sensilet](https://sensilet.com/), a MetaMask-like wallet, into our project.

:::info
You can refer to this [guide](./how-to-add-a-signer.md) to add support for other wallets.
:::

To request user's authentication, you can use the `requestAuth` method. 

```ts
const provider = new WhatsonchainProvider(bsv.Networks.testnet);
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

## Interact with Contract

We have obtained the contract class by loading the contract artifact file before. Now you can [deploy](./how-to-deploy-and-call-a-contract.md#contract-deployment) and [call](./how-to-deploy-and-call-a-contract.md#contract-call) the contract to enable your user to interact with it.

## Conclusion

Great, you made it to the end of this last part! Now you're fully equipped to apply the skills from this guide to build out your own custom dApp project!

Go [here](https://learn.scrypt.io/en/courses/Build-a-Tic-tac-toe-Game-with-sCrypt-614c387bc0974f55df5af1e5) to discover how to build a Tic-Tac-Toe game on Bitcoin.
