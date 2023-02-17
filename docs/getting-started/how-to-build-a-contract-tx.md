---
sidebar_position: 3
---

# How to Build a Contract Tx

## Introduction

After you've finished writing a contract, you want to deploy and call it. But first, you should learn how the a smart contract interacts with the blockchain.

As explained in the [Overview section](../overview.md), a `scryptTS` contract is based on the Bitcoin UTXO model. A constract instance is a TypeScript object that represents a specific contract deployed on-chain. In this section, we will go over some fundamental concepts in details.


### Contract Deployment Transaction

A Bitcoin transaction is required when deploying a contract to the blockchain. The transaction should have an output, whose script is compiled from the contract. This output is known as a contract UTXO and we regard the contract instance comes `from` this UTXO.

An instance's `from` can be accessed.
```ts
// the tx that contains the instance
instance.from.tx
// the index of the tx output that contains the instance
instance.from.outputIndex
```

### Contract Call Transaction

When you call a public method of a contract instance in a UTXO, a call transaction is needed. The transaction has an input that references to the UTXO and contains the script consisted of the method's arguments. We regard the contract instance goes `to` this transaction input.

An instance's `to` can be accessed.
```ts
// the tx that spends the instance
instance.to.tx
// the index of the tx input that spends the UTXO the instance is in
instance.to.inputIndex
```


This section could be summarized as the diagram below:

![](../../static/img/contract_tx.svg)

## Tx Builders

To deploy or interact with contracts, we must build transactions.

We have some built-in tx builders for the most common contracts, so you don't have to implement them usually.

### Deployment Tx Builder

For contract deployment, the default tx builder creates a transaction with the following structure:

* Inputs:

  * [0…]: One or more [P2PKH](https://learnmeabitcoin.com/technical/p2pkh) inputs for paying transaction fees.

* Outputs:

  * [0]: The output containing the contract.
  * [1]: A P2PKH change output if needed.

Numbers in [] represent index, starting from 0.
Because this structure works for any contracts, you don’t have to construct your own contract deployment transactions.

### Default Call Tx Builder

For contract calls, the default tx builder creates a transaction with the following structure:

* Inputs

  * [0]: The input that spends the contract UTXO.
  * [1…]: Zero or more P2PKH inputs for paying transaction fees.

* Outputs

  * [0…N-1]: One or more outputs, each containing a new contract instance (UTXO) if the contract is [stateful](./stateful-contract.md).
  * [N]: A P2PKH change output if needed.


### Customized Call Tx builder

If the default tx builder does not meet your specific requirements, such as having extra inputs or outputs in your tx, you can customize a tx builder for a public `@method` of your contract.

You can define it like this:

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
