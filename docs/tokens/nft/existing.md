---
title: "Transfer Existing NFT to a Smart Contract"
sidebar_position: 1
---

Suppose you would like to transfer an existing NFT that was already inscribed in the past, which is typically locked using a `P2PKH` lock.
You can fetch all the needed data for the transfer by either using `fromUTXO` or `getLatestInstance`. The former takes the deployed NFT's current UTXO, while the latter takes the NFT's [origin](https://docs.1satordinals.com/readme/terms#origin).

If the deployed NFT is locked using a regular `P2PKH` you may unlock it like the following:

```ts
const outpoint = '036718e5c603169b9981a55f276adfa7b5d024616ac95e048b05a81258ea2388_0';

// Create a P2PKH object from a UTXO
const utxo: UTXO = await OneSatApis.fetchUTXOByOutpoint(outpoint);
const p2pkh = OrdiNFTP2PKH.fromUTXO(utxo);
// Alternatively, create a P2PKH from an origin
const p2pkh = await OrdiNFTP2PKH.getLatestInstance(outpoint);

// Construct recipient smart contract
const message = toByteString('super secret', true);
const hash = sha256(message);
const recipient = new HashLockNFT(hash);
await recipient.connect(getDefaultSigner());

// Unlock deployed NFT and send it to the recipient hash lock contract
await p2pkh.connect(getDefaultSigner());

const { tx: transferTx } = await p2pkh.methods.unlock(
  (sigResps) => findSig(sigResps, `yourPubKey`),
  PubKey(`yourPubKey`.toByteString()),
  {
    transfer: recipient,
    pubKeyOrAddrToSign: `yourPubKey`,
  } as OrdiMethodCallOptions<OrdiNFTP2PKH>
);

console.log("Transferred NFT: ", transferTx.id);
```

Alternatively, if the NFT is locked using a smart contract, i.e. `HashLockNFT`:

```ts
HashLockNFT.loadArtifact();

// Retrieve `HashLockNFT` instance holding the NFT
const nft = await HashLockNFT.getLatestInstance(outpoint);
await nft.connect(getDefaultSigner());

const hash = sha256(toByteString('next super secret', true));
const recipient = new HashLockNFT(hash);
await recipient.connect(getDefaultSigner());

// Send NFT to recipient
const { tx: transferTx } = await nft.methods.unlock(
  toByteString('super secret', true),
  {
    transfer: recipient,
  }
);

console.log("Transferred NFT: ", transferTx.id);
```

# `buildStateOutputFT`

Any instance of an `OrdinalNFT` contains the `buildStateOutputNFT` method. In contrast to the regular `buildStateOutput` method, this method also removes any inscription data that might be included in the smart contract's locking script. This is necessary because, within a stateful smart contract, we don't want the next iteration to re-inscribe the ordinal. Additionally, the `buildStateOutputNFT` method doesn't require a satoshi amount argument, as the amount is always 1 satoshi.

Below is an example of an ordinal counter contract:

```ts
class CounterNFT extends OrdinalNFT {

    @prop(true)
    counter: bigint

    constructor(counter: bigint) {
        super()
        this.init(counter)
        this.counter = counter
    }

    @method()
    public incOnchain() {
        this.counter++
        
        ...

        let outputs = this.buildStateOutputNFT()  // Does not include inscription in the next iteration.
        outputs += this.buildChangeOutput()
        assert(
            this.ctx.hashOutputs == hash256(outputs),
            'hashOutputs check failed'
        )
    }

}
```

See the [complete code on GitHub](https://github.com/sCrypt-Inc/scrypt-ord/blob/master/tests/contracts/counterNFT.ts).
