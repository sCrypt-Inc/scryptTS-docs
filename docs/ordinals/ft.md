---
sidebar_position: 3
---

# Funglible Tokens - FTs

Just like NFTs, `scrypt-ts` also supports fungible tokens. Under the hood it utilizes the [`bsv-20` protocol](https://docs.1satordinals.com/bsv20).

Currently, the SDK supports both v1 and v2 of the `bsv-20` FT protocol.


## v1

Tokens utilizing the first version of the `bsv-20` must be initialized by a **deployment** inscription, which specifies the tokens ticker symbol, amount and mint limit. For more information refer to the [1Sat docs](https://docs.1satordinals.com/bsv20#v1-mint-first-is-first-mode).


To create a v1 token smart contract, have it extend the `BSV20V1` class:

```ts
class HashPuzzleFT extends BSV20V1 {
    @prop()
    hash: Sha256

    constructor(tick: ByteString, max: bigint, lim: bigint, hash: Sha256) {
        super(tick, max, lim)
        this.init(...arguments)
        this.hash = hash
    }

    @method()
    public unlock(message: ByteString) {
        assert(this.hash == sha256(message), 'hashes are not equal')
    }
}
```

As you can see above, the constructor of contract extending the `BSV20V1` takes as parameters all of the needed information for the token deployment, succeeded by other parameters needed you use for your contract (`hash` in this particular example).


### Deployment

Here's an example of how you would deploy the new FT:

```ts
HashPuzzleFT.loadArtifact();

const tick = toByteString("DOGE", true);
const max = 100000n;
const lim = max / 10n;

const hashPuzzle = new HashPuzzleFT(
  tick,
  max,
  lim,
  sha256(toByteString("secret0", true))
);
await hashPuzzle.connect(getDefaultSigner());
await hashPuzzle.deployToken();
```

### Mint and Transfer

Once the deployment transaction was successfully broadcast, the token is ready for minting.

Here's how you can mint some amount:

```ts
// Minting
const amt = 1000n;
const mintTx = await hashPuzzle.mint(amt);
console.log("Minted tx: ", mintTx.id);
```

Note, that if the amount exceeds the limit set above, or the token was already wholely minted, the transaction won't be considered valid by 1Sat indexers.

The minted amount can then be transferred by unlocking the mint transaction:

```ts
// Transfer
for (let i = 0; i < 3; i++) {
  // The recipient contract.
  // Because this particular contract doesn't enforce subsequent outputs,
  // it could be any other contract or just a P2PKH.
  const receiver = new HashPuzzleFT(
    tick,
    max,
    lim,
    sha256(toByteString(`secret${i + 1}`, true))
  );
  const recipients: Array<FTReceiver> = [
    {
      instance: receiver,
      amt: 10n,
    },
  ];

  // Unlock and transfer.
  const { tx } = await hashPuzzle.methods.unlock(
    toByteString(`secret:${i}`, true),
    {
      transfer: recipients,
    }
  );
  console.log("Transfer tx: ", tx.id);
  
  // Update instance for next iteration.
  hashPuzzle = recipients[0].instance as HashPuzzleFT;
}

```

#### Transfer Existing FT to a Smart Contract

Suppose you'd like to unlock existing UTXOs that carry a FT to a smart contract.

If you would like to unlock a single specific UTXO, you can do the following:

```ts
HashPuzzleFT.loadArtifact();

// Initialize recipient smart contract.
const message = toByteString('super secret', true);
const hash = sha256(message);
const recipient = new HashPuzzleFT(hash);
await recipient.connect(getDefaultSigner());

// Create P2PKH object from an UTXO
// NOTE: You can not use BSV20P2PKH.getLatestInstance for bsv20, it only works for NFT
const utxo: UTXO = ...
const p2pkh = BSV20P2PKH.fromUTXO(utxo);
await p2pkh.connect(getDefaultSigner());

// Unlock it and transfer the FTs carried by it.
const { tx: transferTx } = await p2pkh.methods.unlock(
  (sigResps) => findSig(sigResps, `yourPubKey`),
  PubKey(`yourPubKey`.toByteString()),
  {
    transfer: recipient,
    pubKeyOrAddrToSign: `yourPubKey`,
  } as MethodCallOptions<BSV20P2PKH>
);

console.log("Transferred FT: ", transferTx.id);
```

Alternatively, you can unlock multiple FT UTXOS and send them to a smart contract. Using the `getBSV20` function you can simply fetch FT UTXOs for a given Ordinal wallet address.

```ts
// ... initialize recipient smart contract

// Fetch FT UTXOs for given Ordinal address.
// NOTE: You can not use BSV20P2PKH.getLatestInstance for bsv20, it only works for NFT
const tick = "DOGE"
const bsv20P2PKHs = await BSV20P2PKH.getBSV20(tick, `your ordinal address`);

await Promise.all(bsv20P2PKHs.map((p) => p.connect(signer)));

// Construct recipient smart contract(s)
const recipients: Array<FTReceiver> = [
  {
    instance: new HashPuzzleFT(tick, max, lim, sha256(message)),
    amt: 6n,
  },
];

// Transfer
const { tx, nexts } = await BSV20P2PKH.transfer(
  bsv20P2PKHs,
  signer,
  recipients
);

console.log("Transferred FT: ", transferTx.id);
```

Note how this mechanism is very similar to a regular Bitcoin transfer. If the FT amount from the inputs exceeds the recipients amount, the leftover will be transferred back to the Ordinal address as change.


## v2

***Comming soon...***