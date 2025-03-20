---
sidebar_position: 2
---

# Tutorial 2: Auction

## Overview

In this tutorial, we will go over how to build an auction contract. It is open and transparent, where everyone can participate and the highest bidder wins when the bidding is over.

There are two ways to interact with the contract:

1. Bid: if a higher bid is found, the current highest bidder is updated, and the previous highest bidder is refunded.
2. Close: the auctioneer can close the auction after it expires and take the offer.

## Contract states

According to the interactions above, this contract needs to store one properties:


- The highest bidder until now

```ts

export interface AuctionState extends StructObject {
    // The bidder's public key.
    bidder: ByteString;
}
```

## Constructor

Initialize all the `@prop` properties in the constructor.

```ts
@prop()
auctioneer: PubKey;

@prop()
auctionDeadline: Int32;

constructor(auctioneer: PubKey, auctionDeadline: Int32) {
    super(...arguments);
    this.auctioneer = auctioneer;
    this.auctionDeadline = auctionDeadline;
}
```

When deploying the contract, the auctioneer locked the minimal bid into the contract, and at this time, the highest bidder would be himself.

```ts
const provider = getDefaultProvider()
const signer = getDefaultSigner()

const publicKey = await signer.getPublicKey();

const auctioneer = hash160(publicKey);
// 144n block is in a day
const auctionDeadline = 144n;

// the initial bidder is the auctioneer himself
const auction = new Auction(auctioneer, auctionDeadline);
auction.state = {
    bidder: auctioneer
}


let covenant = StatefulCovenant.createCovenant(auction)


const deployTx = await deploy(signer, provider, covenant, 546)
```

## Public Methods

### Bid

In method `public bid(bidder: Addr, bid: Int32, spentAmountVal: Int32)`, we need to check if the bidder has a higher bid than the previous one. If so, we update the highest bidder in the contract state and refund the previous bidder.

We can read the previous highest bid from the balance of the contract UTXO.

```ts
assert(this.ctx.spentAmount == TxUtils.toSatoshis(spentAmountVal), 'spentAmount check failed');

const highestBidder = this.state.bidder;
```

Then it's easy to demand a higher bid.

```ts
assert(bid > spentAmountVal, 'the auction bid is lower than the current highest bid');
```

The spending/redeeming tx has these outputs.

![](https://lucid.app/publicSegments/view/bfe65136-2acd-4a46-ba63-a6ec4b6d7d4a/image.png)

- Contract's new state output: records the new bidder and locks the new bid into contract UTXO.

```ts
// Log the previous highest bidder
const highestBidder = this.state.bidder;
// Change the public key of the highest bidder.
this.state.bidder = bidder;

// auction continues with a higher bidder
this.appendStateOutput(
    TxUtils.buildOutput(this.ctx.spentScript, TxUtils.toSatoshis(bid)),
    Auction.stateHash(this.state),
);
```

- A refund P2PKH output: pay back the previous bidder.

```ts
// Refund previous highest bidder.
const refundScript: ByteString = TxUtils.buildP2PKHScript(Addr(highestBidder));
const refundOutput: ByteString = TxUtils.buildOutput(refundScript, this.ctx.spentAmount);
```

- Build all outputs

```ts
const outputs: ByteString = this.buildStateOutputs() + refundOutput + this.buildChangeOutput();
```

At last, we require the transaction to have these outputs using `ScriptContext`.

```ts
assert(this.checkOutputs(outputs), 'mismatch outputs');
```

As `bid` is called continuously, the state of the contract is constantly updated. The highest bidder, and the highest bid as well, is recorded in the latest contract UTXO until the auctioneer closes the auction.

```ts
// bid with a higher offer
@method()
public bid(bidder: Addr, bid: Int32, spentAmountVal: Int32) {
    assert(bid > spentAmountVal, 'the auction bid is lower than the current highest bid');
    assert(this.ctx.spentAmount == TxUtils.toSatoshis(spentAmountVal), 'spentAmount check failed');

    const highestBidder = this.state.bidder;
    this.state.bidder = bidder;

    // auction continues with a higher bidder
    this.appendStateOutput(
        TxUtils.buildOutput(this.ctx.spentScript, TxUtils.toSatoshis(bid)),
        Auction.stateHash(this.state),
    );

    const refundScript: ByteString = TxUtils.buildP2PKHScript(Addr(highestBidder));
    const refundOutput: ByteString = TxUtils.buildOutput(refundScript, this.ctx.spentAmount);


    const outputs: ByteString = this.buildStateOutputs() + refundOutput + this.buildChangeOutput();

    assert(this.checkOutputs(outputs), 'mismatch outputs');
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
assert(this.csv(this.auctionDeadline), 'auction is not over yet');
```

:::note
We don't place any constraint on transaction outputs here, because the auctioneer can send the highest bid to any address he controls, which is what we actually want.
:::

```ts
// Close the auction if deadline is reached.
@method()
public close(sig: Sig) {
    ...
    // Check deadline
    assert(this.csv(this.auctionDeadline), 'auction is not over yet');
    // Check signature of the auctioneer.
    assert(this.checkSig(sig, this.auctioneer, 'auctioneer signature check failed'));
}
```

## Customize tx for `bid`

Using [default call feature](../how-to-deploy-and-call-a-contract/call-deployed#interact-with-call-feature) cannot meet our demand when calling `bid`, since the second output - the refund P2PKH output - is not a new contract instance.

In below function, we add all three outputs as designed.

```ts

export async function call(
    signer: Signer,
    provider: UtxoProvider & ChainProvider,
    covenant: StatefulCovenant<AuctionState>,
    newbidder: Addr,
): Promise<any> {
    const address = await signer.getAddress();
    const feeRate = await provider.getFeeRate();

    const utxos = await provider.getUtxos(address);

    // add contract input
    const psbt = new ExtPsbt().addCovenantInput(covenant).spendUTXO(utxos);

    const highest = BigInt(covenant.utxo!.satoshis)

    const bid = highest + 100n;
    const newCovenant = covenant.next({ bidder: newbidder });
    // build next covenant output
    psbt.addCovenantOutput(newCovenant, Number(bid));
    // build refund output
    psbt.addOutput({
        script: hexToUint8Array(TxUtils.buildP2PKHScript(newbidder)),
        value: BigInt(highest),
    });


    psbt.updateCovenantInput(0, covenant, {
        invokeMethod: (contract: Auction) => {
            contract.bid(newbidder, bid, highest)
        },
    });
    // build change output
    psbt.change(address, feeRate).seal();

    const options = psbt.psbtOptions() || {
        autoFinalized: false,
        toSignInputs: [],
    };

    utxos.forEach((_, index) => {
        options.toSignInputs.push({
            index: index + 1,
            address: address,
        });
    });

    const signedPsbtHex = await signer.signPsbt(psbt.toHex(), options);
    const signedPsbt = psbt.combine(ExtPsbt.fromHex(signedPsbtHex)).finalizeAllInputs();
    const callTx = signedPsbt.extractTransaction();
    markSpent(provider, callTx);
    await provider.broadcast(callTx.toHex());
    return callTx;
}
```

## Conclusion

Congratulations, you have completed the `Auction` contract! To use it in practice, you can refer to this example of [an NFT auction](https://xiaohuiliu.medium.com/integrate-ordinals-with-smart-contracts-on-bitcoin-part-2-d638b7ca3742).


```ts
import {
    assert,
    ByteString,
    Int32,
    method,
    PubKey,
    SmartContract,
    TxUtils,
    StructObject,
    prop,
    Addr,
    hash160,
    Sig,
} from '@scrypt-inc/scrypt-ts-btc';
  
export interface AuctionState extends StructObject {
    bidder: ByteString;
}

export class Auction extends SmartContract<AuctionState> {
    @prop()
    auctioneer: PubKey;
    @prop()
    auctionDeadline: Int32;
    constructor(auctioneer: PubKey, auctionDeadline: Int32) {
        super(...arguments);
        this.auctioneer = auctioneer;
        this.auctionDeadline = auctionDeadline;
    }
    // bid with a higher offer
    @method()
    public bid(bidder: Addr, bid: Int32, spentAmountVal: Int32) {
        assert(bid > spentAmountVal, 'the auction bid is lower than the current highest bid');
        assert(this.ctx.spentAmount == TxUtils.toSatoshis(spentAmountVal), 'spentAmount check failed');

        const highestBidder = this.state.bidder;
        this.state.bidder = bidder;

        // auction continues with a higher bidder
        this.appendStateOutput(
        TxUtils.buildOutput(this.ctx.spentScript, TxUtils.toSatoshis(bid)),
        Auction.stateHash(this.state),
        );

        const refundScript: ByteString = TxUtils.buildP2PKHScript(hash160(highestBidder));
        const refundOutput: ByteString = TxUtils.buildOutput(refundScript, this.ctx.spentAmount);
        const outputs: ByteString = this.buildStateOutputs() + refundOutput + this.buildChangeOutput();

        assert(this.checkOutputs(outputs), 'shaOutputs check failed');
    }
    @method()
    public close(sig: Sig) {
        assert(this.checkSig(sig, this.auctioneer, 'auctioneer signature check failed'));
        assert(this.csv(this.auctionDeadline), 'auction is not over yet');
    }
}
```