---
sidebar_position: 2
---

# Non Funglible Tokens - NFTs


To create a smart contract that will carry an NFT, have your smart contract extend the `OrdinalNFT` class:

```ts
import { method, prop, assert, ByteString, sha256, Sha256 } from "scrypt-ts";
import { OrdinalNFT } from "scrypt-ord";

export class HashLockNFT extends OrdinalNFT {
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
Each constructor extending the `OrdinalNFT` class must also call the instances `init` method and pass the constructors arguments. It is important to call this function **after** the call to `super`.


## Inscribe

The following code demonstrates how deploy / inscribe the NFT contract:

```ts
HashLockNFT.loadArtifact();

const text = "Hello sCrypt and 1Sat Ordinals";

const message = toByteString('secret string', true);
const hash = sha256(message);

const instance = new HashLockNFT(hash);

const signer = getDefaultSigner();
await instance.connect(signer);

const inscriptionTx = await instance.inscribeText(text);
console.log("Inscribed NFT: ", inscriptionTx.id);
```

The `inscribeText` first inscribes the locking script with the specified text and then deploys the contract.

Among text the inscription can contain many other types of data. Here's how you can conveniently inscribe an image:

```ts
// ...

const bb = readFileSync(join(__dirname, "..", "..", "logo.png")).toString("base64");

const tx = await instance.inscribeImage(bb, ContentType.PNG);
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

`OrdiNFTP2PKH` is a [P2PKH](https://learnmeabitcoin.com/guide/p2pkh) contract for holding ordinals NFTs. Like a normal P2PKH contract, you need an address to instantiate it.

```ts
// ... deploy code from above

const { tx: transferTx } = await instance.methods.unlock(
    message, 
    {
        transfer: new OrdiNFTP2PKH(
                Addr(recipientAddress.toByteString())
            ),
    }
);

console.log("Transferred NFT: ", transferTx.id);
```

The `transfer` parameter can be any single instance of a contract that extends `OrdinalNFT`.
