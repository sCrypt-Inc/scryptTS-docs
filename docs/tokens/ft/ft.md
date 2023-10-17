---
sidebar_position: 3
---

# Funglible Tokens - FTs

Just like NFTs, `scrypt-ord` also supports fungible tokens. Under the hood it utilizes the [`bsv-20` protocol](https://docs.1satordinals.com/bsv20).

BSV-20 is a protocol for creating fungible tokens on the Bitcoin SV blockchain. Fungible tokens are interchangeable with each other, and can be used to represent a variety of assets, such as currencies, securities, and in-game items.

`scrypt-ord` supports both v1 and v2 of the `BSV-20` FT protocol.


## v1

Tokens utilizing the first version of the `bsv-20` must be initialized by a **deployment** inscription, which specifies the token's ticker symbol, amount and mint limit. For more information, refer to the [1Sat docs](https://docs.1satordinals.com/bsv20#v1-mint-first-is-first-mode).


To create a v1 token smart contract, have it extend the `BSV20V1` class:

```ts
class HashLockFT extends BSV20V1 {
    @prop()
    hash: Sha256

    constructor(tick: ByteString, max: bigint, lim: bigint, dec: bigint, hash: Sha256) {
        super(tick, max, lim, dec)
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
Each constructor extending the `BSV20V1` class must also call the instances `init` method and pass the constructors arguments. It is important to call this function **after** the call to `super`.


### Deployment

Here's an example of how you would deploy the new FT:

```ts
HashLockFT.loadArtifact();

const tick = toByteString("DOGE", true);
const max = 100000n;
const lim = max / 10n;
const dec = 0n

const hashLock = new HashLockFT(
  tick,
  max,
  lim,
  dec,
  sha256(toByteString("secret0", true))
);
await hashLock.connect(getDefaultSigner());
await hashLock.deployToken();
```

### Mint and Transfer

Once the deployment transaction was successfully broadcast, the token is ready for minting.

Here's how you can mint some amount:

```ts
// Minting
const amt = 1000n;
const mintTx = await hashLock.mint(amt);
console.log("Minted tx: ", mintTx.id);
```

Note, that if the amount exceeds the limit set above, or the token was already wholely minted, the transaction won't be considered valid by 1Sat indexers.

The minted amount can then be transferred by calling the contract, as in [regular sCrypt contracts](../../how-to-deploy-and-call-a-contract/how-to-deploy-and-call-a-contract.md#contract-call):

```ts
// Transfer
for (let i = 0; i < 3; i++) {
  // The recipient contract.
  // Because this particular contract doesn't enforce subsequent outputs,
  // it could be any other contract or just a P2PKH.
  const receiver = new HashLockFT(
    tick,
    max,
    lim,
    dec,
    sha256(toByteString(`secret${i + 1}`, true))
  );
  const recipients: Array<FTReceiver> = [
    {
      instance: receiver,
      amt: 10n,
    },
  ];

  // Unlock and transfer.
  const { tx } = await hashLock.methods.unlock(
    toByteString(`secret:${i}`, true),
    {
      transfer: recipients,
    }
  );
  console.log("Transfer tx: ", tx.id);
  
  // Update instance for next iteration.
  hashLock = recipients[0].instance as HashLockFT;
}
```

Note that the new recipient smart contract instance is passed as a parameter named `transfer` during the call to the deployed instance. The `transfer` parameter is an array of contract instances that extend `BSV20V1`.


## v2

Version 2 of the `BSV-20` token protocol simplifies the process of minting a new fungible token. In this version, the deployment and minting are done within a single transaction. Unlike v1, v2 lacks a token ticker field. The token is identified by an `id` field, which is the transaction id and output index where the token was minted, in the form of `<txid>_<vout>`.

Please refer to the [official 1Sat documentation](https://docs.1satordinals.com/bsv20#new-in-v2-tickerless-mode) for more info.

To create a v2 token smart contract, have it extend the `BSV20V2` class:

```ts
class HashLockFTV2 extends BSV20V2 {
    @prop()
    hash: Sha256

    constructor(id: ByteString, max: bigint, dec: bigint, hash: Sha256) {
        super(id, max, dec)
        this.init(...arguments)
        this.hash = hash
    }

    @method()
    public unlock(message: ByteString) {
        assert(this.hash == sha256(message), 'hashes are not equal')
    }
}
```

### Mint

In v1, tokens are deployed and minted in separate transactions, but in v2, all tokens are deployed and minted in one transactions. Here's an example of how you would deploy the new v2 FT:

```ts
HashLockFTV2.loadArtifact()

const max = 10000n  // Whole token amount.
const dec = 0n      // Decimal precision.

hashLock = new HashLockFTV2(
    toByteString(''),
    max,
    dec,
    sha256(toByteString('super secret', true))
)
await hashLock.connect(getDefaultSigner())

tokenId = await hashLock.deployToken()
console.log('token id: ', tokenId)
```

:::note
Since we cannot know the id of the token deployment transaction at the time of deployment, the id is empty.
:::

The whole token supply is minted within the first transaction, and whoever can unlock the deployment UTXO will gain full control of the whole supply. Additionally, the smart contract itself can enforce rules for the distribution of the tokens.

### Transfer

The minted amount can be transferred by invoking the contract, similar to [standard sCrypt contracts](../../how-to-deploy-and-call-a-contract/how-to-deploy-and-call-a-contract.md#contract-call):

```ts
// Transfer
for (let i = 0; i < 3; i++) {
  // The recipient contract.
  // Because this particular contract doesn't enforce subsequent outputs,
  // it could be any other contract or just a P2PKH.
  const receiver = new HashLockFTV2(
    toByteString(tokenId, true),
    max,
    dec,
    sha256(toByteString(`secret${i + 1}`, true))
  );
  const recipients: Array<FTReceiver> = [
    {
      instance: receiver,
      amt: 10n,
    },
  ];

  // Unlock and transfer.
  const { tx } = await hashLock.methods.unlock(
    toByteString(`secret:${i}`, true),
    {
      transfer: recipients,
    }
  );
  console.log("Transfer tx: ", tx.id);
  
  // Update instance for next iteration.
  hashLock = recipients[0].instance as HashLockFTV2;
}
```

The new recipient smart contract instance is provided as a `transfer` parameter when calling the deployed instance. The `transfer` parameter consists of an array of contract instances derived from `BSV20V2`.

---
