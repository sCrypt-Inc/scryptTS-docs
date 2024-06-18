---
title: "Transfer Existing FT to a Smart Contract"
sidebar_position: 1
---

Suppose you'd like to unlock existing UTXOs that carry a FT to a smart contract.

If you would like to unlock a single specific UTXO, you can do the following:

```ts
HashLockFT.loadArtifact();
...
// Initialize recipient smart contract.
const message = toByteString('super secret', true);
const hash = sha256(message);
const recipient = new HashLockFT(tick, max, lim, dec, hash);
await recipient.connect(getDefaultSigner());

// Create P2PKH object from an UTXO
// NOTE: You can not use BSV21P2PKH.getLatestInstance for BSV-20, it only works for NFTs.
const utxo: UTXO = ...
const p2pkh = BSV21P2PKH.fromUTXO(utxo);
await p2pkh.connect(getDefaultSigner());

// Unlock it and transfer the FTs carried by it.
const { tx: transferTx } = await p2pkh.methods.unlock(
  (sigResps) => findSig(sigResps, `yourPubKey`),
  PubKey(`yourPubKey`.toByteString()),
  {
    transfer: recipient,
    pubKeyOrAddrToSign: `yourPubKey`,
  } as OrdiMethodCallOptions<BSV21P2PKH>
);

console.log("Transferred FT: ", transferTx.id);
```

Alternatively, you can unlock multiple FT UTXOs and send them to a smart contract. Using the `getBSV20` function you can simply fetch FT UTXOs for a given Ordinal wallet address.

```ts
// ... initialize recipient smart contract

// Fetch FT UTXOs for given Ordinal address.
// NOTE: You can not use BSV21P2PKH.getLatestInstance for BSV-21, it only works for NFTs.
const bsv20P2PKHs = await BSV21P2PKH.getBSV20(tokenId, `your ordinal address`);

await Promise.all(bsv20P2PKHs.map((p) => p.connect(signer)));

// Construct recipient smart contract(s)
const recipients: Array<FTReceiver> = [
  {
    instance: new HashLockFTV2(tokenId, amount, dec, sha256(message)),
    amt: 6n,
  },
];

// Transfer
const { tx, nexts } = await BSV20V2P2PKH.transfer(
  bsv20P2PKHs,
  signer,
  recipients
);

console.log("Transferred FT: ", transferTx.id);
```

## Handling Change

Note, how the mechanism above is very similar to a regular Bitcoin transfer. If the FT amount from the inputs exceeds the recipients amount, the leftover will be transferred back to the Ordinal address as change.

You can customize the address using the method call option `tokenChangeAddress`:

```ts
const { tx: transferTx } = await p2pkh.methods.unlock(
  (sigResps) => findSig(sigResps, `yourPubKey`),
  PubKey(`yourPubKey`.toByteString()),
  {
    transfer: recipient,
    pubKeyOrAddrToSign: `yourPubKey`,
    tokenChangeAddress: yourOrdinalAddress
  } as OrdiMethodCallOptions<BSV21P2PKH>
)
```

You can also skip change altogether by using the `skipTokenChange` option. But be careful! Any leftover tokens will be considered **burned** in this case:
```ts
const { tx: transferTx } = await p2pkh.methods.unlock(
  (sigResps) => findSig(sigResps, `yourPubKey`),
  PubKey(`yourPubKey`.toByteString()),
  {
    transfer: recipient,
    pubKeyOrAddrToSign: `yourPubKey`,
    skipTokenChange: true
  } as OrdiMethodCallOptions<BSV21P2PKH>
)
```

# `buildStateOutputFT`

Any instance of `BSV20` or `BSV21` contains the `buildStateOutputFT` method. Unlike the regular `buildStateOutput` method, this method inscribes the subsequent amount with an appropriate [BSV-20 transfer inscription](https://docs.1satordinals.com/bsv20#transfer-all-modes). The method takes the number of tokens to be transferred to the subsequent output as an argument.

Below is an example of an FT counter contract:

```ts
class CounterFTV2 extends BSV21 {

    @prop(true)
    counter: bigint

    constructor(id: ByteString, sym: ByteString, max: bigint, dec: bigint, counter: bigint) {
        super(id, sym, max, dec)
        this.init(...arguments)
        this.counter = counter
    }

    @method(SigHash.ANYONECANPAY_SINGLE)
    public inc(tokenAmt: bigint) {
        this.counter++

        const outputs = this.buildStateOutputFT(tokenAmt)

        assert(
            this.ctx.hashOutputs == hash256(outputs),
            'hashOutputs check failed'
        )
    }

}
```

Each iteration will contain the number of tokens that was passed via `tokenAmt`. Note that this amount cannot be larger than the amount in the previous iteration. If the amount is less than in the previous iteration, the remaining tokens will be returned as change.
