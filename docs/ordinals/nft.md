---
sidebar_position: 2
---

# Non Funglible Tokens - NFTs


To create a smart contract that will carry an NFT, have your smart contract extend the `OneSatNFT` class:

```ts
import { method, prop, assert, ByteString, sha256, Sha256 } from "scrypt-ts";
import { OneSatNFT } from "scrypt-ord";

export class HashPuzzleNFT extends OneSatNFT {
  @prop()
  hash: Sha256;

  constructor(hash: Sha256) {
    super();
    // Important: Call `init` after the `super()` statement.
    this.init(...arguments);
    this.hash = hash;
  }

  @method()
  public unlock(message: ByteString) {
    assert(this.hash === sha256(message), "hashes are not equal");
  }
}
```

The contract above represents an NFT that can be unlocked / transferred by providing the secret pre-image of a hash value.
Each constructor extending the `OneSatNFT` class must also call the instances `init` method and pass the constructors arguments. It is important to call this function **after** the call to `super`.


## Inscribe

The following code demonstrates how deploy / inscribe the NFT contract:

```ts
HashPuzzleNFT.loadArtifact();

const text = "Hello sCrypt and 1Sat Ordinals";

const message = toByteString('secret string', true);
const hash = sha256(message);

const instance = new HashPuzzleNFT(hash);

const signer = getDefaultSigner();
await instance.connect(signer);

const inscriptionTx = await instance.inscribeTextNft(text);
console.log("Inscribed NFT: ", inscriptionTx.id);
```

The `inscribeTextNft` first inscribes the locking script with the specified text and then deploys the contract.

Among text the inscription can contain many other types of data. Here's how you can conveniently inscribe an image:

```ts
// ...

const bb = readFileSync(join(__dirname, "..", "..", "logo.png")).toString("base64");

const tx = await instance.inscribeImageNft(bb, ContentType.PNG);
console.log("Inscribed NFT: ", tx.id);
```

In fact the data type can be arbitrary. It only depends on the Ordinals wallet you're using to support that data type.

```ts
const tx = await instance.inscribe({
  content: `your content in hex`,
  contentType: `your contentType`,
});
console.log("Inscribed NFT: ", tx.id);
```

The value `contentType` must be a MIME-type string. The [`ContentType`](https://github.com/sCrypt-Inc/scrypt-ord/blob/master/src/contentType.ts) object contains common MIME-types.

## Transfer

You can easily transfer a deployed NFT to an Ordinals address by passing a `transfer` value via the method call parameters.

```ts
// ... deploy code from above

const { tx: transferTx } = await instance.methods.unlock(
    message, 
    {
        transfer: new OneSatNFTP2PKH(
                Addr(recipientAddress.toByteString())
            ),
    }
);

console.log("Transferred NFT: ", transferTx.id);
```

The `transfer` parameter can be any single instance of a contract that extends `OneSatNFT`.

### Transfer Existing NFT to a Smart Contract

Suppose you would like to transfer an existing NFT that was already inscribed in the past, which is typically locked using a `P2PKH` lock.
You can fetch all the needed data for the transfer by either using `fromUTXO` or `getLatestInstance`. The former takes the deployed NFT's current UTXO, while the latter takes the NFT's [origin](https://docs.1satordinals.com/readme/terms#origin).

If the deployed NFT is locked using a regular `P2PKH` you may unlock it like the following:

```ts
const outpoint = '036718e5c603169b9981a55f276adfa7b5d024616ac95e048b05a81258ea2388_0';

// Create a P2PKH object from a UTXO
const utxo: UTXO = OneSatApis.fetchUTXOByOutpoint(outpoint);
const p2pkh = OneSatNFTP2PKH.fromUTXO(utxo);
// Alternatively, create a P2PKH from an origin
const p2pkh = await OneSatNFTP2PKH.getLatestInstance(outpoint);

// Construct recipient smart contract
const message = toByteString('super secret', true);
const hash = sha256(message);
const recipient = new HashPuzzleNFT(hash);
await recipient.connect(getDefaultSigner());

// Unlock deployed NFT and send it to the recipient hash puzzle contract
await p2pkh.connect(getDefaultSigner());

const { tx: transferTx } = await p2pkh.methods.unlock(
  (sigResps) => findSig(sigResps, `yourPubKey`),
  PubKey(`yourPubKey`.toByteString()),
  {
    transfer: recipient,
    pubKeyOrAddrToSign: `yourPubKey`,
  } as MethodCallOptions<OneSatNFTP2PKH>
);

console.log("Transferred NFT: ", transferTx.id);
```

Alternatively, if the NFT is locked using a smart contract, i.e. `HashPuzzleNFT`:

```ts
HashPuzzleNFT.loadArtifact();

// Retrieve `HashPuzzleNFT` instance holding the NFT
const nft = await HashPuzzleNFT.getLatestInstance(outpoint);
await nft.connect(getDefaultSigner());

const hash = sha256(toByteString('next super secret', true));
const recipient = new HashPuzzleNFT(hash);
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




