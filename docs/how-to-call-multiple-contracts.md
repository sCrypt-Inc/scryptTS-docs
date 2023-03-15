---
sidebar_position: 12
---

# Call Multiple Contracts in a Single Tx

Up to now, we have only shown how to call one smart contract in a transaction. That is, only one input of the tx spends a smart contract UTXO, and the other inputs, if any, spend Pay-to-Public-Key-Hash ([P2PKH](https://learnmeabitcoin.com/guide/p2pkh)) UTXOs, which are generally NOT regarded as smart contracts.

There are cases where it is desirable to spend multiple smart contract UTXOs in different inputs of a tx.

The main differences from [calling a single contract](./how-to-deploy-and-call-a-contract.md#contract-call) are:

1. Set `multiCall = true` in `MethodCallOptions`
2. Each call may only return a partial/incomplete transaction, instead of a complete transaction
3. A partial tx has to be passed as `CallTransation` in `MethodCallOptions` in subsequent calls
4. Finally invoke `SmartContract.finalizeMultiCall(partialCallTransation: CallTransation, signer: Signer)` to sign and broadcast the complete transaction


The following is an example of calling two [`Counter`](https://github.com/sCrypt-Inc/scrypt-ts-example/blob/94b0d7a374ec12d4415c56d6652af96fa8539753/src/contracts/counter.ts#L11) contracts at the same time:


```ts
import { MethodCallOptions, SmartContract, bsv, CallTransation } from 'scrypt-ts';
import { Counter } from '../../src/contracts/counter';
import { getDefaultSigner } from '../utils/helper';

async function main() {

    const signer = getDefaultSigner();
    await Counter.compile()
    let counter1 = new Counter(1n);

    // connect to a signer
    await counter1.connect(signer)

    const deployTx1 = await counter1.deploy(1)
    console.log('Counter 1 contract deployed: ', deployTx1.id)

    let counter2 = new Counter(2n);

    // connect to a signer
    await counter2.connect(signer)

    const deployTx2 = await counter2.deploy(1)
    console.log('Counter 2 contract deployed: ', deployTx2.id)

    counter1.bindTxBuilder("incrementOnChain", (current: Counter, options: MethodCallOptions<Counter>, ...args: any): Promise<CallTransation> => {


        // create the next instance from the current
        const nextInstance = current.next();
        // apply updates on the next instance locally
        nextInstance.count++;

        const tx = new bsv.Transaction();
        tx.addInput(current.buildContractInput(options.fromUTXO))
            .addOutput(new bsv.Transaction.Output({
                script: nextInstance.lockingScript,
                satoshis: current.balance
            }));

        return Promise.resolve({
            tx: tx,
            atInputIndex: 0,
            nexts: [
                {
                    instance: nextInstance,
                    balance: current.balance,
                    atOutputIndex: 0
                }
            ],
        })
    })

    counter2.bindTxBuilder("incrementOnChain", (current: Counter, options: MethodCallOptions<Counter>, ...args: any): Promise<CallTransation> => {

        if (options.partialCallTransation) {
            // create the next instance from the current
            const nextInstance = current.next();
            // apply updates on the next instance locally
            nextInstance.count++;

            options.partialCallTransation.tx.addInput(current.buildContractInput(options.fromUTXO))
                .addOutput(new bsv.Transaction.Output({
                    script: nextInstance.lockingScript,
                    satoshis: current.balance
                }));


            return Promise.resolve({
                tx: options.partialCallTransation.tx,
                atInputIndex: 1,
                nexts: [
                    {
                        instance: nextInstance,
                        balance: current.balance,
                        atOutputIndex: 1
                    }
                ]
            })
        }

        throw new Error('no partialCallTransation found')

    })


    for (let i = 0; i < 5; i++) {
        const partialCallTx1 = await counter1.methods.incrementOnChain(
            {
                multiCall: true,
            } as MethodCallOptions<Counter>
        )
        
        const partialCallTx2 = await counter2.methods.incrementOnChain(
            {
                multiCall: true,
                partialCallTransation: partialCallTx1
            } as MethodCallOptions<Counter>
        );

        const {tx: callTx, nexts} = await SmartContract.finalizeMultiCall(partialCallTx2, signer)
        
        
        console.log('Counter contract counter1, counter2 called: ', callTx.id)

        counter1 = nexts[0].instance;
        counter2 = nexts[1].instance;
    }
}
```



:::note
- You must bind a [transition builder](./how-to-deploy-and-call-a-contract#tx-builders) to each contract instance, since [the default](./how-to-customize-a-contract-tx.md#customize-1) only spends a single contract UTXO.
- If the called contracts need signatures from different private keys to be called, the signer passed to `finalizeMultiCall` must have all private keys.
:::

