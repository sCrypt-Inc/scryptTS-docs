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
// NOTE: You can not use BSV20V2P2PKH.getLatestInstance for BSV-20, it only works for NFTs.
const utxo: UTXO = ...
const p2pkh = BSV20V2P2PKH.fromUTXO(utxo);
await p2pkh.connect(getDefaultSigner());

// Unlock it and transfer the FTs carried by it.
const { tx: transferTx } = await p2pkh.methods.unlock(
  (sigResps) => findSig(sigResps, `yourPubKey`),
  PubKey(`yourPubKey`.toByteString()),
  {
    transfer: recipient,
    pubKeyOrAddrToSign: `yourPubKey`,
  } as OrdiMethodCallOptions<BSV20V2P2PKH>
);

console.log("Transferred FT: ", transferTx.id);
```

Alternatively, you can unlock multiple FT UTXOs and send them to a smart contract. Using the `getBSV20` function you can simply fetch FT UTXOs for a given Ordinal wallet address.

```ts
// ... initialize recipient smart contract

// Fetch FT UTXOs for given Ordinal address.
// NOTE: You can not use BSV20V2P2PKH.getLatestInstance for BSV-20, it only works for NFTs.
const bsv20P2PKHs = await BSV20V2P2PKH.getBSV20(tokenId, `your ordinal address`);

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
  } as OrdiMethodCallOptions<BSV20V2P2PKH>
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
  } as OrdiMethodCallOptions<BSV20V2P2PKH>
)
```