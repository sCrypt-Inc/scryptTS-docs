---
sidebar_position: 4
---

# Tutorial 4: Auction

## Overview

In this tutorial, we will go over how to build an Auction Contract on Bitcoin.

For this contract, there are mainly two functions that need to be implemented:

- Bid: if a higher bid is found, the new bid is locked into the contract UTXO, the current highest bidder is updated, and the previous highest bidder is refunded.
- Close auction: the man who starts the auction can close it and receive the Bitcoin after its deadline.

## Contract Properties

According to the requirements above, this contract needs to record three properties in it:

- The auctioneer, who starts the auction
- The deadline for the auction
- The highest bidder until now

```ts
// The bidder's address.
@prop(true)
bidder: PubKeyHash

// The auctioneer's public key.
@prop()
readonly auctioneer: PubKey

// Deadline of the auction. Can be block height or timestamp.
@prop()
readonly auctionDeadline: bigint
```

## Constructor

Initialize all the `@prop` properties in the constructor, noting that we don't need to pass the `bidder` in parameters.

```ts
constructor(auctioneer: PubKey, auctionDeadline: bigint) {
    super(...arguments)
    // the initial bidder is the auctioneer himeself
    this.bidder = hash160(auctioneer)
    this.auctioneer = auctioneer
    this.auctionDeadline = auctionDeadline
}
```

When deploying the contract, the auctioneer locked the `initialBid` into the contract UTXO, and at this time, the highest bidder would be himself.

```ts
const auction = new Auction(publicKeyAuctioneer, auctionDeadline)
const deployTx = await auction.deploy(initialBid)
```

## Public Methods

### Bid

In method `public bid(bidder: PubKeyHash, bid: bigint)`, we need to check if the bidder has a higher bid than the previous one. If so, then we update the highest bidder in the contract state and make a refund to pay the previous bid back to the previous bidder.

How could we know the previous highest bid? Read it from the value of contract UTXO.

```ts
const highestBid: bigint = this.ctx.utxo.value
```

Then it's easy to require a higher bid.

```ts
assert(bid > highestBid, 'the auction bid is lower than the current highest bid')
```

And what about the outputs?

- Contract new state output, records the new bidder and locks the new bid into contract UTXO.

```ts
// Log the previous highest bidder
const highestBidder: PubKeyHash = this.bidder
// Change the address of the highest bidder.
this.bidder = bidder

// Auction continues with a higher bidder.
const auctionOutput: ByteString = this.buildStateOutput(bid)
```

- The refund P2PKH output, pay the previous bid back to the previous bidder.

```ts
// Refund previous highest bidder.
const refundOutput: ByteString = Utils.buildPublicKeyHashOutput(highestBidder, highestBid)
```

- The change P2PKH output, pay the transaction fee back.

```ts
let outputs: ByteString = auctionOutput + refundOutput
// Add change output.
if (this.changeAmount > 0) {
    outputs += this.buildChangeOutput()
}
```

At last, we require the transaction to have these outputs.

```ts
assert(hash256(outputs) == this.ctx.hashOutputs, 'hashOutputs check failed')
```

As `bid` is called continuously, the state of the contract is constantly updated. The highest bidder, and the highest bid as well, is recorded in the latest contract UTXO until the auctioneer closes the auction.

### Close

Method `public close(sig: Sig)` is simple, we require:

- It can only be called by the auctioneer, that's why we need to pass in the caller's signature

```ts
// Check signature of the auctioneer.
assert(this.checkSig(sig, this.auctioneer), 'signature check failed')
```

- Now the auction deadline has passed

```ts
assert(this.ctx.locktime >= this.auctionDeadline, 'auction is not over yet')
```

Pay attention to the [Locktime and Sequence](https://wiki.bitcoinsv.io/index.php/NLocktime_and_nSequence) interlock when dealing with the transaction lock time, we also need extra validations. 

```ts
// Check if `auctionDeadline` uses block height.
if (this.auctionDeadline < Auction.LOCKTIME_BLOCK_HEIGHT_MARKER) {
    // Enforce nLocktime field to also use block height.
    assert(this.ctx.locktime < Auction.LOCKTIME_BLOCK_HEIGHT_MARKER)
}
assert(this.ctx.sequence < Auction.UINT_MAX, 'input sequence should less than UINT_MAX')
```

Please be also noted that we didn't assert any transaction outputs in this method, because the auctioneer can send the highest bid anywhere as wish, this is what we actually want.

## Conclusion

Congratulations, you have completed the `Auction` contract!

The [final complete code](https://github.com/sCrypt-Inc/scryptTS-examples/blob/46aaccbf5e/src/contracts/auction.ts) is as follows:

```ts
export class Auction extends SmartContract {
    static readonly LOCKTIME_BLOCK_HEIGHT_MARKER = 500000000
    static readonly UINT_MAX = 0xffffffffn

    // The bidder's address.
    @prop(true)
    bidder: PubKeyHash

    // The auctioneer's public key.
    @prop()
    readonly auctioneer: PubKey

    // Deadline of the auction. Can be block height or timestamp.
    @prop()
    readonly auctionDeadline: bigint

    constructor(auctioneer: PubKey, auctionDeadline: bigint) {
        super(...arguments)
        this.bidder = hash160(auctioneer)
        this.auctioneer = auctioneer
        this.auctionDeadline = auctionDeadline
    }

    // Call this public method to bid with a higher offer.
    @method()
    public bid(bidder: PubKeyHash, bid: bigint) {
        const highestBid: bigint = this.ctx.utxo.value
        assert(bid > highestBid, 'the auction bid is lower than the current highest bid')

        // Change the address of the highest bidder.
        const highestBidder: PubKeyHash = this.bidder
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

    // Close the auction if deadline is reached.
    @method()
    public close(sig: Sig) {
        // Check if using block height.
        if (this.auctionDeadline < Auction.LOCKTIME_BLOCK_HEIGHT_MARKER) {
            // Enforce nLocktime field to also use block height.
            assert(this.ctx.locktime < Auction.LOCKTIME_BLOCK_HEIGHT_MARKER)
        }
        assert(this.ctx.sequence < Auction.UINT_MAX, 'input sequence should less than UINT_MAX')
        assert(this.ctx.locktime >= this.auctionDeadline, 'auction is not over yet')

        // Check signature of the auctioneer.
        assert(this.checkSig(sig, this.auctioneer), 'signature check failed')
    }

    // User defined transaction builder for calling function `bid`
    static bidTxBuilder(options: BuildMethodCallTxOptions<Auction>, bidder: PubKeyHash, bid: bigint): Promise<BuildMethodCallTxResult<Auction>> {
        const current = options.current

        const nextInstance = current.next()
        nextInstance.bidder = bidder

        const unsignedTx: Transaction = new Transaction()
            // add contract input
            .addInput(current.buildContractInput(options.fromUTXO))
            // add p2pkh inputs
            .from(options.utxos)
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

        return Promise.resolve({
            unsignedTx,
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
