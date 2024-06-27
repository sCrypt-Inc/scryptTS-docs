---
sidebar_position: 8
---


# How to Publish a Contract to NPM


## Create and Publish a Contract Using sCrypt CLI

The following command will create a demo `sCrypt` project along with tests and  scaffolding:

```sh
npx scrypt-cli project <your-project-name>
```


You can publish the project on [NPM](https://www.npmjs.com/) by running the following command in the project's root directory:

```sh
npm publish
```

This will build the project and publish it on NPM. After the package is published, users can simply import it in any other project just like regular NPM packages.

:::note
Named imports are not supported yet. You should only import like the following.
:::

```ts
import { MyContract } from "my_package"
```

### Advanced

For the import system working properly, you should always publish the auto-generated sCrypt contracts (including `scrypt.index.json` file) along with the javascript outputs. The structure of the package could be like this:

```
node_modules
|__ my_package
    |__ dist
        |__ myContract.js
        |__ myContract.d.ts
    |__ artifacts
        |__ myContract.json
    |__ scrypt.index.json
    …
```

The `scrypt.index.json` file will be generated at TypeScript compile time in the same directory of your `tsconfig.json` which should be placed in the root folder. It shall not be moved or modified manually. 

You should always publish the auto-generated artifacts files along with the package.

## Related Packages

### `scrypt-ts-lib`

It’s a collection of smart contract libraries provided by us. You can find some useful packages [here](https://github.com/sCrypt-Inc/scrypt-ts-lib). Also you are welcome to contribute.
