---
sidebar_position: 8
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
You can customize a deployment tx builder by overriding its `buildDeployTransaction` method.

```ts
class DemoContract extends SmartContract {
  // ...

  // customize the deployment tx by overriding `SmartContract.buildDeployTransaction` method
  override async buildDeployTransaction(utxos: UTXO[], amount: number, changeAddress?: bsv.Address | string): Promise<bsv.Transaction> {
    const deployTx = new bsv.Transaction()
      .from(utxos) // add p2pkh inputs
      .addOutput(new bsv.Transaction.Output({
        script: this.lockingScript,
        satoshis: amount,
      })) // add contract output
      .addData('Hello World'); // add OP_RETURN output

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

You can customize a tx builder for a public `@method` of your contract by calling `bindTxBuilder`.

```ts
// bind a customized tx builder for the public method `MyContract.unlock`
MyContract.bindTxBuilder("unlock", (options, ...args) => { 

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

## Notes

Please be aware that each of these tx builders should only create an **unsigned** transaction. You need to sign it later if necessary before broadcasting.

Also, your customized tx must satisfy all of the called `@method`'s assertions.
