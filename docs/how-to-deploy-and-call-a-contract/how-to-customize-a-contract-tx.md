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
  override async buildDeployTransaction(utxos: UTXO[], amount: number, 
    changeAddress?: bsv.Address | string): Promise<bsv.Transaction> {
    
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

You can customize a tx builder for a public `@method` of your contract by calling `bindTxBuilder`. The first parameter is the public method name, and the second parameter is the customized tx builder of type [MethodCallTxBuilder](../reference/interfaces/MethodCallTxBuilder).

`MethodCallTxBuilder` takes three parameters:

1. `current: T`: the actual instance of the smart contract T.
2. `options`: of type [`MethodCallOptions<T>`](../how-to-deploy-and-call-a-contract/how-to-deploy-and-call-a-contract.md#methodcalloptions).
3. `...args: any`: the same list of arguments as the bound pubic `@method`.

Take tx builder for our [auction smart contract](https://github.com/sCrypt-Inc/boilerplate/blob/master/src/contracts/auction.ts) as an example:

```ts
// bind a customized tx builder for the public method `Auction.bid`
auction.bindTxBuilder('bid', Auction.bidTxBuilder)

static bidTxBuilder(
    current: Auction,
    options: MethodCallOptions<Auction>,
    bidder: PubKey,
    bid: bigint
): Promise<ContractTransaction> {
    const nextInstance = current.next()
    nextInstance.bidder = bidder

    const unsignedTx: Transaction = new Transaction()
        // add contract input
        .addInput(current.buildContractInput())
        // build next instance output
        .addOutput(
            new Transaction.Output({
                script: nextInstance.lockingScript,
                satoshis: Number(bid),
            })
        )
        // build refund output
        .addOutput(
            new Transaction.Output({
                script: Script.fromHex(
                    Utils.buildPublicKeyHashScript(hash160(current.bidder))
                ),
                satoshis: current.balance,
            })
        )
        // build change output
        .change(options.changeAddress)

    return Promise.resolve({
        tx: unsignedTx,
        atInputIndex: 0,
        nexts: [
            {
                instance: nextInstance,
                atOutputIndex: 0,
                balance: Number(bid),
            },
        ],
    })
}
```

:::note
If the static function `bidTxBuilder` is renamed by convention to `buildTxForBid`, there is no need to explicitly call `auction.bindTxBuilder('bid', Auction.bidTxBuilder)`.

The agreed rule is: `buildTxFor${camelCaseCapitalized(methodName)}`. `camelCaseCapitalized()` capitalizes the first letter of `methodName`.
:::


In this example, we customize the calling transaction for the publid `@method` `bid`. `...args` resolves to its parameters: `bidder: PubKey` and `bid: bigint`. The first input is the one that will reference the UTXO, where our smart contract instance currently resides. We use the `buildContractInput` function to to build the input. Note that during the execution of the tx builder function, this input's script is empty. The script will get populated by the method arguments at a later stage of the method call.

The tx builder will return an object:

- `tx`: the unsigned transaction of our method call.
- `atInputIndex`: the index of the input which will reference the smart contract UTXO.
- `nexts`: an array of objects that represent the contract's next instance(s). 

When we are calling a [stateful smart contract](../how-to-write-a-contract/stateful-contract.md), we have to define the next instance of our contract. This instance will contain updated states. As we can see, first a new instance is created using the current instance's `next()` function. The new instance's `bidder` property is then updated. This new instance is then included in the 0-th output of the new transaction and goes into the `nexts` array of the returned object.



## Notes

Please be aware that each of these tx builders should only create an **unsigned** transaction. If required, the transaction gets signed automatically in a later step prior to broadcasting.

Also, your customized tx must satisfy all of the called `@method`'s assertions.
