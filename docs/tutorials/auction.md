---
sidebar_position: 3
---

# Tutorial 3: Auction

## Overview

In this tutorial, we will go over how to build an auction contract. It is open and transparent, where everyone can participate and the highest bidder wins when the bidding is over.

There are two ways to interact with the contract:

1. Bid: if a higher bid is found, the current highest bidder is updated, and the previous highest bidder is refunded.
2. Close: the auctioneer can close the auction after it expires and take the offer.

## Contract Properties

According to the interactions above, this contract needs to store three properties:

- The auctioneer, who starts the auction
- The deadline for the auction
- The highest bidder until now

```ts
// The bidder's public key.
@prop(true)
bidder: PubKey

// The auctioneer's public key.
@prop()
readonly auctioneer: PubKey

// Deadline of the auction. Can be block height or timestamp.
@prop()
readonly auctionDeadline: bigint
```

## Constructor

Initialize all the `@prop` properties in the constructor. Note that we don't need to pass a `bidder` parameter.

```ts
constructor(auctioneer: PubKey, auctionDeadline: bigint) {
    super(...arguments)
    // the initial bidder is the auctioneer himeself
    this.bidder = auctioneer
    this.auctioneer = auctioneer
    this.auctionDeadline = auctionDeadline
}
```

When deploying the contract, the auctioneer locked the minimal bid into the contract, and at this time, the highest bidder would be himself.

```ts
const auction = new Auction(publicKeyAuctioneer, auctionDeadline)
const deployTx = await auction.deploy(minBid)
```

## Public Methods

### Bid

In method `public bid(bidder: PubKeyHash, bid: bigint)`, we need to check if the bidder has a higher bid than the previous one. If so, we update the highest bidder in the contract state and refund the previous bidder.

We can read the previous highest bid from the balance of the contract UTXO.

```ts
const highestBid: bigint = this.ctx.utxo.value
```

Then it's easy to demand a higher bid.

```ts
assert(bid > highestBid, 'the auction bid is lower than the current highest bid')
```

The spending/redeeming tx has these outputs.

![](https://lucid.app/publicSegments/view/bfe65136-2acd-4a46-ba63-a6ec4b6d7d4a/image.png)

- Contract's new state output: records the new bidder and locks the new bid into contract UTXO.

```ts
// Log the previous highest bidder
const highestBidder: PubKey = this.bidder
// Change the public key of the highest bidder.
this.bidder = bidder

// Auction continues with a higher bidder.
const auctionOutput: ByteString = this.buildStateOutput(bid)
```

- A refund P2PKH output: pay back the previous bidder.

```ts
// Refund previous highest bidder.
const refundOutput: ByteString = Utils.buildPublicKeyHashOutput(highestBidder, highestBid)
```

- An optional change P2PKH output.

```ts
let outputs: ByteString = auctionOutput + refundOutput
// Add change output.
if (this.changeAmount > 0) {
    outputs += this.buildChangeOutput()
}
```

At last, we require the transaction to have these outputs using `ScriptContext`.

```ts
assert(hash256(outputs) == this.ctx.hashOutputs, 'hashOutputs check failed')
```

As `bid` is called continuously, the state of the contract is constantly updated. The highest bidder, and the highest bid as well, is recorded in the latest contract UTXO until the auctioneer closes the auction.

```ts
// Call this public method to bid with a higher offer.
@method()
public bid(bidder: PubKeyHash, bid: bigint) {
    const highestBid: bigint = this.ctx.utxo.value
    assert(bid > highestBid, 'the auction bid is lower than the current highest bid')

    // Change the public key of the highest bidder.
    const highestBidder: PubKey = this.bidder
    this.bidder = bidder

    // Auction continues with a higher bidder.
    const auctionOutput: ByteString = this.buildStateOutput(bid)

    // Refund previous highest bidder.
    const refundOutput: ByteString = Utils.buildPublicKeyHashOutput(highestBidder, highestBid)

    let outputs: ByteString = auctionOutput + refundOutput
    // Add change output.
    if (this.changeAmount > 0) {
        outputs += this.buildChangeOutput()
    }

    assert(hash256(outputs) == this.ctx.hashOutputs, 'hashOutputs check failed')
}
```

### Close

![](https://lucid.app/publicSegments/view/0f40689c-9727-423e-81ed-0d5df338dece/image.png)

Method `public close(sig: Sig)` is simple, we require:

- It can only be called by the auctioneer. That is why we need to pass in the caller's signature.

```ts
// Check signature of the auctioneer.
assert(this.checkSig(sig, this.auctioneer), 'signature check failed')
```

- Now the auction deadline has passed

```ts
assert(this.ctx.locktime >= this.auctionDeadline, 'auction is not over yet')
```

:::note
We don't place any constraint on transaction outputs here, because the auctioneer can send the highest bid to any address he controls, which is what we actually want.
:::

```ts
// Close the auction if deadline is reached.
@method()
public close(sig: Sig) {
    // Check deadline
    assert(this.ctx.locktime >= this.auctionDeadline, 'auction is not over yet')
    // Check signature of the auctioneer.
    assert(this.checkSig(sig, this.auctioneer), 'signature check failed')
}
```

## Customize tx builder for `bid`

Using [default tx builder](../how-to-deploy-and-call-a-contract/how-to-customize-a-contract-tx.md#default-1) cannot meet our demand when calling `bid`, since the second output - the refund P2PKH output - is not a new contract instance.

In Function `static bidTxBuilder(options: MethodCallOptions<Auction>, bidder: PubKeyHash, bid: bigint): Promise<ContractTransaction>`, we add all three outputs as designed.

```ts
const unsignedTx: Transaction = new Transaction()
    // add contract input
    .addInput(current.buildContractInput(options.fromUTXO))
    // build next instance output
    .addOutput(new Transaction.Output({script: nextInstance.lockingScript, satoshis: Number(bid),}))
    // build refund output
    .addOutput(
        new Transaction.Output({
            script: Script.fromHex(Utils.buildPublicKeyHashScript(current.bidder)),
            satoshis: options.fromUTXO?.satoshis ?? current.from.tx.outputs[current.from.outputIndex].satoshis,
        })
    )
    // build change output
    .change(options.changeAddress)
```

## Conclusion

Congratulations, you have completed the `Auction` contract!

The [final complete code](https://github.com/sCrypt-Inc/boilerplate/blob/master/src/contracts/auction.ts) is as follows:

```ts
export class Auction extends SmartContract {
    static readonly LOCKTIME_BLOCK_HEIGHT_MARKER = 500000000
    static readonly UINT_MAX = 0xffffffffn

    // The bidder's public key.
    @prop(true)
    bidder: PubKey

    // The auctioneer's public key.
    @prop()
    readonly auctioneer: PubKey

    // Deadline of the auction. Can be block height or timestamp.
    @prop()
    readonly auctionDeadline: bigint

    constructor(auctioneer: PubKey, auctionDeadline: bigint) {
        super(...arguments)
        this.bidder = auctioneer
        this.auctioneer = auctioneer
        this.auctionDeadline = auctionDeadline
    }

    // Call this public method to bid with a higher offer.
    @method()
    public bid(bidder: PubKey, bid: bigint) {
        const highestBid: bigint = this.ctx.utxo.value
        assert(bid > highestBid, 'the auction bid is lower than the current highest bid')

        // Change the public key of the highest bidder.
        const highestBidder: PubKey = this.bidder
        this.bidder = bidder

        // Auction continues with a higher bidder.
        const auctionOutput: ByteString = this.buildStateOutput(bid)

        // Refund previous highest bidder.
        const refundOutput: ByteString = Utils.buildPublicKeyHashOutput(hash160(highestBidder), highestBid)
        let outputs: ByteString = auctionOutput + refundOutput

        // Add change output.
        if (this.changeAmount > 0) {
            outputs += this.buildChangeOutput()
        }

        assert(hash256(outputs) == this.ctx.hashOutputs, 'hashOutputs check failed')
    }

    // Close the auction if deadline is reached.
    @method()
    public close(sig: Sig) {
        // Check deadline
        assert(this.ctx.locktime >= this.auctionDeadline, 'auction is not over yet')

        // Check signature of the auctioneer.
        assert(this.checkSig(sig, this.auctioneer), 'signature check failed')
    }

    // User defined transaction builder for calling function `bid`
    static bidTxBuilder(options: MethodCallOptions<Auction>, bidder: PubKey, bid: bigint): Promise<ContractTransaction> {
        const current = options.current

        const nextInstance = current.next()
        nextInstance.bidder = bidder

        const unsignedTx: Transaction = new Transaction()
            // add contract input
            .addInput(current.buildContractInput(options.fromUTXO))
            // build next instance output
            .addOutput(new Transaction.Output({script: nextInstance.lockingScript, satoshis: Number(bid),}))
            // build refund output
            .addOutput(
                new Transaction.Output({
                    script: Script.fromHex(Utils.buildPublicKeyHashScript(hash160(current.bidder))),
                    satoshis: options.fromUTXO?.satoshis ?? current.from.tx.outputs[current.from.outputIndex].satoshis,
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
}
```
