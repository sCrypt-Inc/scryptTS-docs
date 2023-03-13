---
sidebar_position: 10
---

# How to Customize a Contract Tx


## Deployment Tx

### Default
For contract deployment, the default tx builder creates a transaction with the following structure:

* Inputs:

  * [0…]: One or more [P2PKH](https://learnmeabitcoin.com/technical/p2pkh) inputs for paying transaction fees.

* Outputs:

  * [0]: The output containing the contract.
  * [1]: A P2PKH change output if needed.

Numbers in [] represent index, starting from 0.

### Customize
You can customize a contract's deployment tx builder by overriding its [buildDeployTransaction](https://scrypt.io/scrypt-ts/how-to-write-a-contract/built-ins#builddeploytransaction) method. An example is shown below.

```ts
class DemoContract extends SmartContract {
  // ...

  // customize the deployment tx by overriding `SmartContract.buildDeployTransaction` method
  override async buildDeployTransaction(utxos: UTXO[], amount: number, changeAddress?: bsv.Address | string): Promise<bsv.Transaction> {
    const deployTx = new bsv.Transaction()
      // add p2pkh inputs for paying tx fees
      .from(utxos)
      // add contract output
      .addOutput(new bsv.Transaction.Output({
        script: this.lockingScript,
        satoshis: amount,
      }))
      // add OP_RETURN output
      .addData('Hello World');

    if (changeAddress) {
      deployTx.change(changeAddress);
      if (this._provider) {
        deployTx.feePerKb(await this.provider.getFeePerKb());
      }
    }

    return deployTx;
  }
}
```

You may visit the [full code](https://github.com/sCrypt-Inc/scryptTS-examples/blob/cf3ea45a11/src/contracts/auction.ts#L100-L127) for more details.

## Call Tx

### Default
For contract calls, the default tx builder creates a transaction with the following structure:

* Inputs

  * [0]: The input that spends the contract UTXO.
  * [1…]: Zero or more P2PKH inputs for paying transaction fees.

* Outputs

  * [0…N-1]: One or more outputs, each containing a new contract instance (UTXO) if the contract is [stateful](./how-to-write-a-contract/stateful-contract).
  * [N]: A P2PKH change output if needed.


### Customize

You can customize a tx builder for a public `@method` of your contract by calling `bindTxBuilder`. The first parameter is the public method name, and the second parameter is the customized tx builder.

```ts
// bind a customized tx builder for the public method `MyContract.unlock`
MyContract.bindTxBuilder("unlock", (options: BuildMethodCallTxOptions<T>, ...args: any) => { 

  let result: Promise<BuildMethodCallTxResult<MyContract>>;

  // the contract instance
  const current = options.current;

  // the tx is NOT signed
  const unsignedTx: bsv.Transaction = new bsv.Transaction()
    // add contract input
    .addInput(current.buildContractInput(options.fromUTXO))
    // add p2pkh inputs
    .from(options.utxos)
    // add a p2pkh output
    .addOutput(new bsv.Transaction.Output({
        script: bsv.Script.fromHex(Utils.buildPublicKeyHashScript(args[0])),
        satoshis: args[1]
    }))
    // add change output
    .change(options.changeAddress);

  result = {
    unsignedTx,
    atInputIndex: 0 // the contract input's index
  };

  return Promise.resolve(result)         
})
```

Note that the parameters of your customized tx builder consist of two parts:

- `options` is of type `BuildMethodCallTxOptions`.

```ts
interface BuildMethodCallTxOptions<T> {
  /** The previous contract UTXO to spend in the method calling tx */
  fromUTXO?: UTXO;

  /** The P2PKH change output address */
  changeAddress?: AddressOption;

  /** The current contract instance to spend in the input of method calling tx */
  current: T;

  /** The P2PKH UTXOs that can be added to the method calling tx to pay transaction fees */
  utxos: UTXO[];

  /** The subsequent contract instance(s) produced in the outputs of the method calling tx in a stateful contract */
  nexts?: StatefulNext<T>[];
}
```

- `...args: any` is an argument list the same as the bound pubic `@method`.

```ts
Auction.bindTxBuilder('bid', Auction.buildTxForBid)

class Auction extends SmartContract {
  // ...

  @method(SigHash.ALL)
  public bid(bidder: PubKeyHash, bid: bigint) {
    // ...
  }

  static buildTxForBid(
    options: BuildMethodCallTxOptions<Auction>,
    // the following arguments are the same as the bound public `@method`
    bidder: PubKeyHash,
    bid: bigint
  ): Promise<BuildMethodCallTxResult<Auction>> {
    // ...
  }
}
```

You may visit the [full code](https://github.com/sCrypt-Inc/scryptTS-examples/blob/cf3ea45a11/src/contracts/auction.ts#L129-L178) for more details.

## Notes

Please be aware that each of these tx builders should only create an **unsigned** transaction. You need to sign it later if necessary before broadcasting.

Also, your customized tx must satisfy all of the called `@method`'s assertions.
