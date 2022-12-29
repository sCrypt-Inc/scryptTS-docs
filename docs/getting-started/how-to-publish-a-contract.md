---
sidebar_position: 6
---


# How to Publish a Contract to NPM

## What is a Smart Contract Library?

A smart contract library can provide methods which can be reused in many contracts. Developers can use existing libraries to reduce the cost of developing their own contracts.

A smart contract library is different from a smart contract in these ways:

* A smart contract library can not have any public/entry `@method`s, which means a library can not be deployed or called directly through a tx. They can only be called within a smart contract or another library.

* A smart contract library can not have any stateful properties, i.e. `@prop(true)` properties. But a property declared as `@prop()` is fine.

## Write a Smart Contract Library

In `scrypt-ts` we can create a smart contract library class like this:

```ts
class MyLib extends SmartContractLib {

  @prop()
  buf: ByteString;

  constructor(buf: ByteString) {
    super(buf);
    this.buf = buf;
  }

  @method
  append(content: ByteString) {
    this.buf += content;
  }

  @method
  static add(x: bigint, y: bigint): bigint {
    return x + y;
  }

}
```

A smart contract library can be declared as a  class that extends `SmartContractLib`. It may also have `@prop`s and `@method`s like smart contracts which have the same rules [introduced before](./how-to-write-a-contract.md). A smart contract library can be used within `@method`s like this:

```ts
class MyContract extends SmartContract {
  @method
  public unlock(x: ByteString) {
    let myLib = new MyLib(hexToByteString('0123'));
    myLib.append(x);
    assert(MyLib.add(1n, 2n) === 3n);
  }
}
```

## Test a Smart Contract Library

You can test your smart contract library as a normal class, for example, writing some unit tests:

```ts
describe('Test SmartContractLib `MyLib`', () => {
  it('should pass unit test successfully.', () => {
    expect(MyLib.add(1n, 2n)).to.eq(3n);
  })
})
```

Also you can write a smart contract using the library, then have some tests for the contract, like:

```ts
class TestLib extends SmartContract {
  @method
  public unlock(x: bigint) {
    assert(MyLib.add(1n, 2n) === x);
  }
}

describe('Test SmartContractLib `Lib`', () => {
  before(async() => {
    await TestLib.compile();
  })

  it('should pass integration test successfully.', () => {
    let testLib = new TestLib();
    let result = testLib.verify(self => self.unlock(3n));
    expect(result.success, result.error).to.be.true;
  }
})

```

## Create a Library Project Using sCrypt CLI

The following command will create a demo scryptTS library along with tests and  scaffolding:

```sh
scrypt project --lib <your-lib-name>
```

## Publish a Smart Contract Library

If you have built a smart contract library, you could consider publishing it as an npm package. Please note that for the import system working properly, you should always publish the auto-generated sCrypt contracts (including `scrypt.index.json` file) along with the javascript outputs. The structure of the package could be like this:

```
node_modules
|__ my_package
    |__ dist
        |__ myLib.js
        |__ myLib.d.ts
    |__ scrypts
        |__ myLib.scrypt
    |__ scrypt.index.json
    …
```

The `scrypt.index.json` file will be generated at typescript compile time in the same directory of your `tsconfig.json` which should be placed in the root folder. It shall not be moved or modified manually. The folder for auto-generated sCrypt files can be changed by configuring the `outDir` option in `tsconfig.json`, like:

```json
"compilerOptions": {
  "plugins": [
    {
      "transform": "../dist/transformer",
      "transformProgram": "true",
      "outDir": "my_scrypts_dir"
    }
  ]
}
```

You can publish the library on [NPM](https://www.npmjs.com/) by running the following command in the projects root directory:

```sh
scrypt publish
```

This will check the projects structure, build it and publish it. After the library is published, users can just import it in any other project just like regular NPM packages.

**Please Note** that named imports are not supported yet. You should only use an import statement like this:
```ts
import { MyLib } from “my_package”;
```


## Related Tools

### `scrypt-ts-lib`

It’s a collection of smart contract libraries provided by us. You can find some useful tools [here](https://github.com/sCrypt-Inc/scrypt-ts-lib). Also you are welcome to contribute.
