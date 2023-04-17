---
sidebar_position: 5
---

# Tutorial 5: Interact with a Deployed Contract

## Overview
In this tutorial, we will interact with a deployed smart contract by calling its public method.
We need to create an instance corresponding to the deployed contract on chain.

## The Smart Contract

We will reuse [the `Counter` contract](../how-to-write-a-contract/stateful-contract.md#create-a-stateful-contract).

```ts
export class Counter extends SmartContract {

    @prop(true)
    count: bigint

    constructor(count: bigint) {
        super(...arguments)
        this.count = count
    }

    @method(SigHash.ANYONECANPAY_SINGLE)
    public incrementOnChain() {
        // Increment counter.
        this.count++

        // Ensure next output will contain this contracts code w
        // the updated count property.
        const amount: bigint = this.ctx.utxo.value
        const output: ByteString = this.buildStateOutput(amount)
        assert(this.ctx.hashOutputs == hash256(output), 'hashOutputs mismatch')
    }

}
```

## Deployment and Reconstruction

For the deployment of our smart contract, we define the following function:

```ts
async function deploy(initialCount = 100n): Promise<string> {
    const instance = new Counter(initialCount)
    await instance.connect(getDefaultSigner())

    const balance = 1
    const tx = await instance.deploy(balance)
    console.log(`Counter deployed: ${tx.id}, the count is: ${instance.count}`)
    return tx.id
}
```

As we can see, the function takes in the initial value of the counter property and constructs an instance of the contract. Then, it connects a [signer](https://scrypt.io/docs/how-to-deploy-and-call-a-contract/#prepare-a-signer-and-provider) which will fund the contract and deploy the instance on-chain with a balance of 1 satoshi. The function returns only the TXID of the deployed smart contract.

Next, we define the counter increment function which will update our deployed smart contract:

```ts
async function callIncrementOnChain(
    txId: string,
    atOutputIndex = 0
): Promise<string> {
    // Fetch TX via provider and reconstruct contract instance.
    const provider = new DefaultProvider()
    const tx = await provider.getTransaction(txId)
    const instance = Counter.fromTx(tx, atOutputIndex)
    
    //console.log(`Deployed counter value: ${instance.count}`)

    await instance.connect(getDefaultSigner())

    const nextInstance = instance.next()
    nextInstance.count++

    const { tx: callTx } = await instance.methods.incrementOnChain({
        next: {
            instance: nextInstance,
            balance: instance.balance,
        },
    } as MethodCallOptions<Counter>)
    console.log(
        `Counter incrementOnChain called: ${callTx.id}, the count now is: ${nextInstance.count}`
    )
    return callTx.id
}
```

The function takes as parameters the TXID of the deployed smart contract along with the output index (which is usually 0). It uses an instance of the [`DefaultProvider`](../reference/classes/DefaultProvider) to fetch the transaction data from the blockchain. Subsequently, it reconstructs the smart contract instance using the [`fromTx`](../how-to-write-a-contract/built-ins.md#fromtx) function for seamless integration.

At this point we have pretty much the exact instance that we had in the deploy function. Notably, the only shared data between the functions is the deployed contract's TXID.

Once the instance is reconstructed, the function increments the counters value and updates the deployed contract. This will yield a new TXID which references the most recent state of the deployed smart contract.

To conclude, let's encapsulate the entire process within a main function, designed to deploy the contract and increment its value five times:

```ts
async function main() {
    await compileContract()
    let lastTxId = await deploy()
    for (let i = 0; i < 5; ++i) {
        lastTxId = await callIncrementOnChain(lastTxId)
    }
}

(async () => {
    await main()
})()
```

If we now execute the code, we should get an output similar to the following:

```ts
Counter deployed: 1cd6eb4ff0a5bd83f06c60c5e9a5c113c6e44fd876096e4e94e04a80fee8c8ca, the count is: 100
Counter incrementOnChain called: c5b8d8f37f5d9c089a73a321d58c3ae205087ba21c1e32ed09a1b2fbd4f65330, the count now is: 101
Counter incrementOnChain called: c62bb0f187f81dfeb5b70eafe80d549d3b2c6219e16d9575639b4fbdffd1d391, the count now is: 102
Counter incrementOnChain called: 9fb217b98324b633d8a0469d6a2478f522c1f40c0b6d806430efe5ae5457ca0e, the count now is: 103
Counter incrementOnChain called: 2080ddecc7f7731fc6afd307a57c8b117227755bd7b82eb0bc7cd8b78417ad9a, the count now is: 104
Counter incrementOnChain called: de43687fd386e92cd892c18600d473bc38d5adb0cc34bbda892b94c61b5d5eb8, the count now is: 105
```

## Conclusion

Congratulations! You've now deployed AND interacted with a Bitcoin smart contract.
You can see a complete test example in our [boilerplate repository](https://github.com/sCrypt-Inc/boilerplate/blob/master/tests/testnet/counterFromTx.ts).
