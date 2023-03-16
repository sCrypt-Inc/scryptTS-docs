---
sidebar_position: 9
---


# How to Publish a Contract to NPM

## What is a Smart Contract Library?

A smart contract library can provide methods which can be reused in many contracts. Developers can use existing libraries to reduce the cost of developing their own contracts.

A smart contract library is different from a smart contract in these ways:

* A smart contract library can not have any public/entry `@method`s, which means a library can not be deployed or called directly through a tx. They can only be called within a smart contract or another library.

* A smart contract library can not have any stateful properties, i.e. `@prop(true)` properties. But a property declared as `@prop()` is fine.

## Write a Smart Contract Library

Using `sCrypt` we can create a smart contract library class like this:

```ts
class MyLib extends SmartContractLib {

  @prop()
  readonly buf: ByteString;

  constructor(buf: ByteString) {
    super(...arguments);
    this.buf = buf;
  }

  @method()
  append(content: ByteString) {
    this.buf += content;
  }

  @method()
  static add(x: bigint, y: bigint): bigint {
    return x + y;
  }

}
```

A smart contract library can be declared as a  class that extends `SmartContractLib`. It may also have `@prop`s and `@method`s like smart contracts which have the same rules [introduced before](./how-to-write-a-contract). A smart contract library can be used within `@method`s like this:

```ts
class MyContract extends SmartContract {
  @method()
  public unlock(x: ByteString) {
    let myLib = new MyLib(hexToByteString('0123'));
    myLib.append(x);
    assert(MyLib.add(1n, 2n) === 3n, 'incorrect sum');
  }
}
```

## Test a Smart Contract Library

You can test your smart contract library as a normal class, for example, writing some unit tests:

```ts
describe('Test SmartContractLib `MyLib`', () => {
  it('should pass unit test successfully.', () => {
    expect(MyLib.add(1n, 2n)).to.eq(3n)
  })
})
```

Also you can write a smart contract using the library, then have some tests for the contract, like:

```ts
class TestLib extends SmartContract {
  @method
  public unlock(x: bigint) {
    assert(MyLib.add(1n, 2n) == x, 'incorrect sum')
  }
}

describe('Test SmartContractLib `Lib`', () => {
  before(async() => {
    await TestLib.compile()
  })

  it('should pass integration test successfully.', () => {
    let testLib = new TestLib()
    let result = testLib.verify(self => self.unlock(3n))
    expect(result.success, result.error).to.be.true
  }
})

```

## Create and Publish a Library Project Using sCrypt CLI

The following command will create a demo scryptTS library along with tests and  scaffolding:

```sh
scrypt project --lib <your-lib-name>
```

Note the `lib` option is turned on.

You can publish the library on [NPM](https://www.npmjs.com/) by running the following command in the project's root directory:

```sh
npm publish
```

This will build the project and publish it on NPM. After the library is published, users can simply import it in any other project just like regular NPM packages.

:::note
Named imports are not supported yet. You should only import like the following.
:::

```ts
import { MyLib } from “my_package”
```

### Advanced

For the import system working properly, you should always publish the auto-generated sCrypt contracts (including `scrypt.index.json` file) along with the javascript outputs. The structure of the package could be like this:

```
node_modules
|__ my_package
    |__ dist
        |__ myLib.js
        |__ myLib.d.ts
    |__ artifacts
        |__ myLib.scrypt
    |__ scrypt.index.json
    …
```

The `scrypt.index.json` file will be generated at TypeScript compile time in the same directory of your `tsconfig.json` which should be placed in the root folder. It shall not be moved or modified manually. The folder for auto-generated `.scrypt` files (`artifacts` in the upper file tree) can be changed by configuring the `outDir` option in `tsconfig.json`, like:

```json
"compilerOptions": {
  "plugins": [
    {
      "transform": "scrypt-ts/dist/transformation/transformer",
      "transformProgram": "true",
      "outDir": "my_scrypts_dir"
    }
  ]
}
```

You should always publish the auto-generated sCrypt files along with the package. If you are familiar with sCrypt development and want to apply some improvements to the auto-generated files, for example using an inline asm function to replace an ordinary function to reduce the final script size, you could just modify the auto-generated file as you wish before publishing it. Take a look at how [scrytp-ts-lib](https://github.com/sCrypt-Inc/scrypt-ts-lib/tree/master/optimizations) does it.

:::note
You should modify the auto-generated files with caution and make sure that the modification passes the tests.
:::

## Related Tools

### `scrypt-ts-lib`

It’s a collection of smart contract libraries provided by us. You can find some useful tools [here](https://github.com/sCrypt-Inc/scrypt-ts-lib). Also you are welcome to contribute.
