---
sidebar_position: 7
---

# Tutorial 7: Escrow

## Overview

In this tutorial, we will go over how to create and escrow smart contract with some advanced features, such as a requirement for multiple arbiters and a deadline, after which the buyer can get a refund.

### What is an escrow smart contract?

An escrow smart contract is a type of digital agreement that Bitcoin to facilitate transactions between parties in a secure, trustless manner. 

In traditional escrow services, a trusted third party holds assets—like money, property, or goods—on behalf of the transacting parties. The assets are released only when specific conditions are met.

In the case of an escrow smart contract, the "third party" is the smart contract itself, programmed on the blockchain. The contract is written with the conditions of the transaction, and if they are met, the contract can be unlocked and the recipient(s) get payed.

### Our implementation

We will implement a specific type of escrow, called a multi-sig escrow. The participants of this contract are a buyer (Alice), a seller (Bob) and one or more arbiters.

Suppose Alice want's to buy a specific item from Bob. They don't trust each other, so they decide to use an escrow smart contract. They pick one or more arbiters, which they both trust. The job of the chosen arbiters is to verify, that the item really gets delivered in the right condition. If the conditions are met, the contract will pay the seller, Bob. In the opposite case, Alice gets a refund. Additionally, Alice is also eligible for a refund after a set period of time in the case the arbiters are not responsive.

## Contract properties

Let's declare the properties of our smart contract:

```ts
// Number of arbiters chosen.
static readonly N_ARBITERS = 3

// Buyer (Alice) address.
@prop()
readonly buyerAddr: PubKeyHash

// Seller (Bob) address.
@prop()
readonly sellerAddr: PubKeyHash

// Arbiter public keys.
@prop()
readonly arbiters: FixedArray<PubKey, typeof MultiSigEscrow.N_ARBITERS>

// Contract deadline nLocktime value.
// Either timestamp or block height.
@prop()
readonly deadline: bigint
```

## Public method - `confirmPayment`

The first method of our contract will be `confirmPayment`. This public method will be called if the item was successfully delivered in the right condition.

The method takes as inputs the buyers signature, along with her public key and the signatures of the arbiters.

```ts
// Buyer and arbiters confirm, that the item was delivered.
// Seller gets paid.
@method(SigHash.ANYONECANPAY_SINGLE)
public confirmPayment(
    buyerSig: Sig,
    buyerPubKey: PubKey,
    arbiterSigs: FixedArray<Sig, typeof MultiSigEscrow.N_ARBITERS>
) {
    // Validate buyer sig.
    assert(
        hash160(buyerPubKey) == this.buyerAddr,
        'invalid public key for buyer'
    )
    assert(
        this.checkSig(buyerSig, buyerPubKey),
        'buyer signature check failed'
    )

    // Validate arbiter sigs.
    assert(
        this.checkMultiSig(arbiterSigs, this.arbiters),
        'arbiters checkMultiSig failed'
    )

    // Ensure seller gets payed.
    const amount = this.ctx.utxo.value
    const out = Utils.buildPublicKeyHashOutput(this.sellerAddr, amount)
    assert(hash256(out) == this.ctx.hashOutputs, 'hashOutputs mismatch')
}
```

The method validates all signatures are correct and ensures the **seller** receives the funds.

## Public method - `refund`

Next, we implement the public method `refund`. If the delivery wasn't successful or there is something wrong with the item and needs to be sent back, the buyer is eligible for a refund.

The method again takes as inputs the buyers signature, along with her public key and the signatures of the arbiters.

```ts
// Regular refund. Needs arbiters agreement.
@method()
public refund(
    buyerSig: Sig,
    buyerPubKey: PubKey,
    arbiterSigs: FixedArray<Sig, typeof MultiSigEscrow.N_ARBITERS>
) {
    // Validate buyer sig.
    assert(
        hash160(buyerPubKey) == this.buyerAddr,
        'invalid public key for buyer'
    )
    assert(
        this.checkSig(buyerSig, buyerPubKey),
        'buyer signature check failed'
    )

    // Validate arbiter sigs.
    assert(
        this.checkMultiSig(arbiterSigs, this.arbiters),
        'arbiters checkMultiSig failed'
    )

    // Ensure buyer gets refund.
    const amount = this.ctx.utxo.value
    const out = Utils.buildPublicKeyHashOutput(this.buyerAddr, amount)
    assert(hash256(out) == this.ctx.hashOutputs, 'hashOutputs mismatch')
}
```

The method validates all signatures are correct and ensures the **buyer** receives the refund.

## Public method - `refundDeadline`

Lastly, we implement the `refundDeadline` method. This method can be called, after the specified contract deadline has been reached. After the deadline, the buyer can receive the refund, even without the arbiters agreement.

The method takes as inputs in the buyers signature, along with her public key.

```ts
// Deadline for delivery. If reached, the  buyer gets refunded.
@method()
public refundDeadline(buyerSig: Sig, buyerPubKey: PubKey) {
    assert(
        hash160(buyerPubKey) == this.buyerAddr,
        'invalid public key for buyer'
    )
    assert(
        this.checkSig(buyerSig, buyerPubKey),
        'buyer signature check failed'
    )

    // Require nLocktime enabled https://wiki.bitcoinsv.io/index.php/NLocktime_and_nSequence
    assert(
        this.ctx.sequence < UINT_MAX,
        'require nLocktime enabled'
    )

    // Check if using block height.
    if (this.deadline < LOCKTIME_BLOCK_HEIGHT_MARKER) {
        // Enforce nLocktime field to also use block height.
        assert(
            this.ctx.locktime < LOCKTIME_BLOCK_HEIGHT_MARKER
        )
    }
    assert(this.ctx.locktime >= this.deadline, 'deadline not yet reached')

    // Ensure buyer gets refund.
    const amount = this.ctx.utxo.value
    const out = Utils.buildPublicKeyHashOutput(this.buyerAddr, amount)
    assert(hash256(out) == this.ctx.hashOutputs, 'hashOutputs mismatch')
}
```

The method checks the buyers signature validity. It also checks the transaction nLocktime value, to ensure it can be accepted by miners only after the deadline.

## Conclusion

Congratulations! You have completed the escrow tutorial!

The full code along with [tests](https://github.com/sCrypt-Inc/boilerplate/blob/master/tests/local/multisigEscrow.test.ts) can be found in sCrypt's [boilerplate repository](https://github.com/sCrypt-Inc/boilerplate/blob/master/src/contracts/multisigEscrow.ts).

