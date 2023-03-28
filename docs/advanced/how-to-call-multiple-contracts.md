---
sidebar_position: 3
---

# Call Multiple Contracts in a Single Tx

Up to now, we have only shown how to call one smart contract in a transaction. That is, only one input of the tx spends a smart contract UTXO, and the other inputs, if any, spend Pay-to-Public-Key-Hash ([P2PKH](https://learnmeabitcoin.com/guide/p2pkh)) UTXOs, which are generally NOT regarded as smart contracts.

There are cases where it is desirable to spend multiple smart contract UTXOs in different inputs of a tx.

The main differences from [calling a single contract](../how-to-deploy-and-call-a-contract/how-to-deploy-and-call-a-contract.md#contract-call) are:

1. Set `multiContractCall = true` in `MethodCallOptions`
2. Each call may only return a partial/incomplete transaction, instead of a complete transaction
3. A partial tx has to be passed as `ContractTransaction` in `MethodCallOptions` in subsequent calls
4. Finally invoke `SmartContract.multiContractCall(partialContractTx: ContractTransaction, signer: Signer)` to sign and broadcast the complete transaction


The following is an [example code](https://github.com/sCrypt-Inc/boilerplate/blob/master/tests/testnet/multi_contracts_call.ts) of calling two contracts at the same time:


```ts
import { Counter } from '../../src/contracts/counter'
import { getDefaultSigner } from '../utils/helper'
import { HashPuzzle } from '../../src/contracts/hashPuzzle'

async function main() {
    await Counter.compile()
    await HashPuzzle.compile()

    const signer = getDefaultSigner()
    let counter = new Counter(1n)

    // connect to a signer
    await counter.connect(signer)

    // contract deployment
    const deployTx = await counter.deploy(1)
    console.log('Counter contract deployed: ', deployTx.id)

    counter.bindTxBuilder(
        'incrementOnChain',
        (
            current: Counter,
            options: MethodCallOptions<Counter>,
            ...args: any
        ): Promise<ContractTransaction> => {
            // create the next instance from the current
            const nextInstance = current.next()
            // apply updates on the next instance locally
            nextInstance.count++

            const tx = new bsv.Transaction()
            tx.addInput(current.buildContractInput(options.fromUTXO)).addOutput(
                new bsv.Transaction.Output({
                    script: nextInstance.lockingScript,
                    satoshis: current.balance,
                })
            )

            return Promise.resolve({
                tx: tx,
                atInputIndex: 0,
                nexts: [
                    {
                        instance: nextInstance,
                        balance: current.balance,
                        atOutputIndex: 0,
                    },
                ],
            })
        }
    )

    const plainText = 'abc'
    const byteString = toByteString(plainText, true)
    const sha256Data = sha256(byteString)

    const hashPuzzle = new HashPuzzle(sha256Data)

    // connect to a signer
    await hashPuzzle.connect(signer)

    const deployTx1 = await hashPuzzle.deploy(1)
    console.log('HashPuzzle contract deployed: ', deployTx1.id)

    hashPuzzle.bindTxBuilder(
        'unlock',
        (
            current: HashPuzzle,
            options: MethodCallOptions<HashPuzzle>,
            ...args: any
        ): Promise<ContractTransaction> => {
            if (options.partialContractTx) {
                const unSignedTx = options.partialContractTx.tx
                unSignedTx.addInput(
                    current.buildContractInput(options.fromUTXO)
                )

                return Promise.resolve({
                    tx: unSignedTx,
                    atInputIndex: 1,
                    nexts: [],
                })
            }

            throw new Error('no partialContractTx found')
        }
    )

    const partialTx = await counter.methods.incrementOnChain({
        multiContractCall: true,
    } as MethodCallOptions<Counter>)

    const finalTx = await hashPuzzle.methods.unlock(
        byteString,
        {
            multiContractCall: true,
            partialContractTx: partialTx,
        } as MethodCallOptions<HashPuzzle>
    )

    const { tx: callTx, nexts } = await SmartContract.multiContractCall(
        finalTx,
        signer
    )

    console.log('Counter, HashPuzzle contract `unlock` called: ', callTx.id)

    // hashPuzzle has terminated, but counter can still be called
    counter = nexts[0].instance
}

await main()

```



:::note
- You must bind a [transition builder](../how-to-deploy-and-call-a-contract/how-to-deploy-and-call-a-contract.md#tx-builders) to each contract instance, since [the default](../how-to-deploy-and-call-a-contract/how-to-customize-a-contract-tx.md#customize-1) only spends a single contract UTXO.
- If the called contracts need signatures from different private keys to be called, the signer passed to `multiContractCall` must have all private keys.
:::

