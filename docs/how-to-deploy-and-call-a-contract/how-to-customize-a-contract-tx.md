---
sidebar_position: 2
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

![](https://lucid.app/publicSegments/view/5242c7cb-d30d-4a92-826c-4d6290e2af04/image.png)

### Customize
You can customize a contract's deployment tx builder by overriding its [buildDeployTransaction](../how-to-write-a-contract/built-ins#builddeploytransaction) method. An example is shown below.

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
      .addData('Hello World')

    if (changeAddress) {
      deployTx.change(changeAddress);
      if (this._provider) {
        deployTx.feePerKb(await this.provider.getFeePerKb())
      }
    }

    return deployTx;
  }
}
```

You may visit the [full code](https://github.com/sCrypt-Inc/boilerplate/blob/f63c37038a03bc51267e816d9441969d3e1d2ece/src/contracts/auction.ts#L100-L127) for more details.

## Call Tx

### Default
For contract calls, the default tx builder creates a transaction with the following structure:

* Inputs

  * [0]: The input that spends the contract UTXO.
  * [1…]: Zero or more P2PKH inputs for paying transaction fees.

* Outputs

  * [0…N-1]: One or more outputs, each containing a new contract instance (UTXO) if the contract is [stateful](../how-to-write-a-contract/stateful-contract).
  * [N]: A P2PKH change output if needed.

![](https://lucid.app/publicSegments/view/9dfde0f0-7275-48da-9411-057e895b5fb3/image.png)


### Customize

You can customize a tx builder for a public `@method` of your contract by calling `bindTxBuilder`. The first parameter is the public method name, and the second parameter is the customized tx builder.

```ts
// bind a customized tx builder for the public method `MyContract.unlock`
instance.bindTxBuilder("unlock", (current: T, options: MethodCallOptions<T>, ...args: any) => { 
  // the tx is NOT signed
  const unsignedTx: bsv.Transaction = new bsv.Transaction()
    // add contract input
    .addInput(current.buildContractInput(options.fromUTXO))
    // add a p2pkh output
    .addOutput(new bsv.Transaction.Output({
        script: bsv.Script.fromHex(Utils.buildPublicKeyHashScript(args[0])),
        satoshis: args[1]
    }))
    // add change output
    .change(options.changeAddress)

  return Promise.resolve({
    tx: unsignedTx,
    atInputIndex: 0, // the contract input's index
    nexts: []
  })         
})
```

Note that the parameters of your customized tx builder consist of the following parts:

- `current` is the actual instance of the smart contract.
- `options` is of type [`MethodCallOptions`](../how-to-test-a-contract.md#methodcalloptions).
- `...args: any` is an argument list the same as the bound pubic `@method`.

```ts
instance.bindTxBuilder('bid', Auction.buildTxForBid)

class Auction extends SmartContract {
  // ...

  @method(SigHash.ALL)
  public bid(bidder: PubKeyHash, bid: bigint) {
    // ...
  }

  static buildTxForBid(
    current: Auction,
    options: MethodCallOptions<Auction>,
    // the following arguments are the same as the bound public `@method`
    bidder: PubKeyHash,
    bid: bigint
  ): Promise<ContractTransaction> {
    // ...
  }
}
```

You may visit the [full code](https://github.com/sCrypt-Inc/boilerplate/blob/f63c37038a03bc51267e816d9441969d3e1d2ece/src/contracts/auction.ts#L130-L172) for more details.

## Notes

Please be aware that each of these tx builders should only create an **unsigned** transaction. If required, the transaction gets signed automatically in a later step prior to broadcasting.

Also, your customized tx must satisfy all of the called `@method`'s assertions.
