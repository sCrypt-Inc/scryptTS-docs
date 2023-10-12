---
title: "Multiple Inputs with Different Contracts"
sidebar_position: 2
---

Suppose we would like to unlock FTs within a single transaction that are located in different smart contracts. We can utilize the same technique demonstrated in the [section for calling multiple contract instances](../advanced/how-to-call-multiple-contracts.md).

```ts
// One sender is regular bsv-20 P2PKH.
const sender0 = BSV20V2P2PKH.fromUTXO(utxo)
await sender0.connect(signer)

// Second sender is a hash puzzle contract.
const sender1 = HashPuzzleFTV2.fromUTXO(utxo)
await sender1.connect(signer)

// Recipient will be a single hash puzzle contract.
const recipientAmt = 6n
const recipients: Array<FTReceiver> = [
    {
        instance: new HashPuzzleFT(
            tokenId,
            amount,
            dec,
            sha256(toByteString('next super secret', true))
        ),
        amt: recipientAmt,
    },
];

const totalTokenAmt = sender0.getAmt() + sender1.getAmt()
const tokenChangeAmt = totalTokenAmt - recipientAmt

const ordPubKey = await signer.getDefaultPubKey()

sender0.bindTxBuilder(
    'unlock',
    async (
        current: BSV20V2P2PKH,
        options: MethodCallOptions<BSV20V2P2PKH>
    ): Promise<ContractTransaction> => {
        const tx = new bsv.Transaction()
        const nexts: StatefulNext<SmartContract>[] = []

        for (let i = 0; i < recipients.length; i++) {
            const receiver = recipients[i]

            if (receiver.instance instanceof BSV20V2) {
                receiver.instance.setAmt(receiver.amt)
            } else {
                throw new Error('Unsupported receiver, only BSV-20!')
            }

            tx.addOutput(
                new bsv.Transaction.Output({
                    script: receiver.instance.lockingScript,
                    satoshis: 1,
                })
            )

            nexts.push({
                instance: receiver.instance,
                balance: 1,
                atOutputIndex: i,
            })
        }

        if (tokenChangeAmt > 0n) {
            const p2pkh = new BSV20V2P2PKH(
                tokenId,
                amount,
                dec,
                Addr(ordPubKey.toAddress().toByteString())
            )

            p2pkh.setAmt(tokenChangeAmt)

            tx.addOutput(
                new bsv.Transaction.Output({
                    script: p2pkh.lockingScript,
                    satoshis: 1,
                })
            )

            nexts.push({
                instance: p2pkh,
                balance: 1,
                atOutputIndex: nexts.length,
            })
        }

        tx.change(ordPubKey.toAddress())

        tx.addInput(current.buildContractInput())

        return Promise.resolve({
            tx: tx,
            atInputIndex: 0,
            nexts,
        })
    }
)

let partialContractTx = await sender0.methods.unlock(
    (sigResps) => findSig(sigResps, ordPubKey),
    PubKey(ordPubKey.toByteString()),
    {
        pubKeyOrAddrToSign: ordPubKey,
        multiContractCall: true,
    } as MethodCallOptions<BSV20V2P2PKH>
)

sender1.bindTxBuilder(
    'unlock',
    async (
        current: HashPuzzleFTV2,
        options: MethodCallOptions<HashPuzzleFTV2>
    ): Promise<ContractTransaction> => {
        if (options.partialContractTx) {
            const tx = options.partialContractTx.tx
            tx.addInput(current.buildContractInput())

            return Promise.resolve({
                tx: tx,
                atInputIndex: 1,
                nexts: partialContractTx.nexts,
            })
        }

        throw new Error('no partialContractTx')
    }
)

partialContractTx = await sender1.methods.unlock(message1, {
    partialContractTx,
    transfer: recipients,
    pubKeyOrAddrToSign: ordPubKey,
    multiContractCall: true,
} as MethodCallOptions<BSV20V2P2PKH>)

const { tx } = await SmartContract.multiContractCall(
    partialContractTx,
    signer
)

console.log('Transfer tx:', tx.id)
```

In the above code, a partial transaction is constructed, which unlocks the first UTXO containing a `BSV20V2P2PKH` instance. The actual contract call doesn't execute yet, as we set the `multiContractCall` flag within the method call parameters.

We then feed that partially constructed transaction via the second contract call, which will unlock the `HashPuzzleFT` instance. Just like the first call, this call also has the `multiContractCall` flag set.

Once the transaction is fully built, we can sign and broadcast it using the `SmartContract.multiContractCall` function.

The above code is an example based on v2, but the same can be achieved using v1.
