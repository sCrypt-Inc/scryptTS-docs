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
Each constructor extending the `BSV20V1` class must also call the instances `init` method and pass the constructors arguments. It is important to call this function **after** the call to `super`.


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

The minted amount can then be transferred by calling the contract, as in [regular sCrypt contracts](../how-to-deploy-and-call-a-contract/how-to-deploy-and-call-a-contract.md#contract-call):

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

Note that the new recipient smart contract instance is passed as a parameter named `transfer` during the call to the deployed instance. The `transfer` parameter is an array of contract instances that extend `BSV20V1`.


## v2

Version 2 of the `BSV-20` token protocol simplifies the process of minting a new fungible token. In this version, the deployment and minting are done within a single transaction. Unlike v1, v2 lacks a token ticker field. The token is identified by an `id` field, which is the transaction id and output index where the token was minted, in the form of `<txid>_<vout>`.

Please refer to the [official 1Sat documentation](https://docs.1satordinals.com/bsv20#new-in-v2-tickerless-mode) for more info.

To create a v2 token smart contract, have it extend the `BSV20V2` class:

```ts
class HashPuzzleFTV2 extends BSV20V2 {
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
HashPuzzleFTV2.loadArtifact()

const max = 10000n  // Whole token amount.
const dec = 0n      // Decimal precision.

hashPuzzle = new HashPuzzleFTV2(
    toByteString(''),
    max,
    dec,
    sha256(toByteString('super secret', true))
)
await hashPuzzle.connect(getDefaultSigner())

tokenId = await hashPuzzle.deployToken()
console.log('token id: ', tokenId)
```

:::note
Since we cannot know the id of the token deployment transaction at the time of deployment, the id is empty.
:::

The whole token supply is minted within the first transaction, and whoever can unlock the deployment UTXO will gain full control of the whole supply. Additionally, the smart contract itself can enforce rules for the distribution of the tokens.

### Transfer

The minted amount can be transferred by invoking the contract, similar to [standard sCrypt contracts](../how-to-deploy-and-call-a-contract/how-to-deploy-and-call-a-contract.md#contract-call):

```ts
// Transfer
for (let i = 0; i < 3; i++) {
  // The recipient contract.
  // Because this particular contract doesn't enforce subsequent outputs,
  // it could be any other contract or just a P2PKH.
  const receiver = new HashPuzzleFT(
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
  const { tx } = await hashPuzzle.methods.unlock(
    toByteString(`secret:${i}`, true),
    {
      transfer: recipients,
    }
  );
  console.log("Transfer tx: ", tx.id);
  
  // Update instance for next iteration.
  hashPuzzle = recipients[0].instance as HashPuzzleFTV2;
}
```

The new recipient smart contract instance is provided as a `transfer` parameter when calling the deployed instance. The `transfer` parameter consists of an array of contract instances derived from `BSV20V2`.

---

## Transfer Existing FT to a Smart Contract

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
  } as MethodCallOptions<BSV20V2P2PKH>
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
    instance: new HashPuzzleFTV2(tokenId, amount, dec, sha256(message)),
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

Note, how this mechanism is very similar to a regular Bitcoin transfer. If the FT amount from the inputs exceeds the recipients amount, the leftover will be transferred back to the Ordinal address as change.

You can customize the address using the method call option `tokenChangeAddress`:

```ts
const { tx: transferTx } = await p2pkh.methods.unlock(
  (sigResps) => findSig(sigResps, `yourPubKey`),
  PubKey(`yourPubKey`.toByteString()),
  {
    transfer: recipient,
    pubKeyOrAddrToSign: `yourPubKey`,
    tokenChangeAddress: yourOrdinalAddress
  } as MethodCallOptions<BSV20V2P2PKH>
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
  } as MethodCallOptions<BSV20V2P2PKH>
)
```

## Multiple Inputs with Different Contracts

Suppose we would like to unlock FTs within a single transaction that are located in different smart contracts. We can utilize the same technique demonstrated in the [section for calling multiple contract instances](../advanced/how-to-call-multiple-contracts.md).

```ts
// One sender is regular bsv-20 P2PKH.
const sender0 = BSV20V2P2PKH.fromUTXO(utxo)
await sender0.connect(signer)

// Second sender is a hash puzzle contract.
const sender1 = HashPuzzleFTV2.fromUTXO(utxo)
await sender1.connect(signer)

// Recipient will be a single hash puzzle contract.
const recipientAmt = 6n
const recipients: Array<FTReceiver> = [
    {
        instance: new HashPuzzleFT(
            tokenId,
            amount,
            dec,
            sha256(toByteString('next super secret', true))
        ),
        amt: recipientAmt,
    },
];

const totalTokenAmt = sender0.getAmt() + sender1.getAmt()
const tokenChangeAmt = totalTokenAmt - recipientAmt

const ordPubKey = await signer.getDefaultPubKey()

sender0.bindTxBuilder(
    'unlock',
    async (
        current: BSV20V2P2PKH,
        options: MethodCallOptions<BSV20V2P2PKH>
    ): Promise<ContractTransaction> => {
        const tx = new bsv.Transaction()
        const nexts: StatefulNext<SmartContract>[] = []

        for (let i = 0; i < recipients.length; i++) {
            const receiver = recipients[i]

            if (receiver.instance instanceof BSV20V2) {
                receiver.instance.setAmt(receiver.amt)
            } else {
                throw new Error('Unsupported receiver, only BSV-20!')
            }

            tx.addOutput(
                new bsv.Transaction.Output({
                    script: receiver.instance.lockingScript,
                    satoshis: 1,
                })
            )

            nexts.push({
                instance: receiver.instance,
                balance: 1,
                atOutputIndex: i,
            })
        }

        if (tokenChangeAmt > 0n) {
            const p2pkh = new BSV20V2P2PKH(
                tokenId,
                amount,
                dec,
                Addr(ordPubKey.toAddress().toByteString())
            )

            p2pkh.setAmt(tokenChangeAmt)

            tx.addOutput(
                new bsv.Transaction.Output({
                    script: p2pkh.lockingScript,
                    satoshis: 1,
                })
            )

            nexts.push({
                instance: p2pkh,
                balance: 1,
                atOutputIndex: nexts.length,
            })
        }

        tx.change(ordPubKey.toAddress())

        tx.addInput(current.buildContractInput())

        return Promise.resolve({
            tx: tx,
            atInputIndex: 0,
            nexts,
        })
    }
)

let partialContractTx = await sender0.methods.unlock(
    (sigResps) => findSig(sigResps, ordPubKey),
    PubKey(ordPubKey.toByteString()),
    {
        pubKeyOrAddrToSign: ordPubKey,
        multiContractCall: true,
    } as MethodCallOptions<BSV20V2P2PKH>
)

sender1.bindTxBuilder(
    'unlock',
    async (
        current: HashPuzzleFTV2,
        options: MethodCallOptions<HashPuzzleFTV2>
    ): Promise<ContractTransaction> => {
        if (options.partialContractTx) {
            const tx = options.partialContractTx.tx
            tx.addInput(current.buildContractInput())

            return Promise.resolve({
                tx: tx,
                atInputIndex: 1,
                nexts: partialContractTx.nexts,
            })
        }

        throw new Error('no partialContractTx')
    }
)

partialContractTx = await sender1.methods.unlock(message1, {
    partialContractTx,
    transfer: recipients,
    pubKeyOrAddrToSign: ordPubKey,
    multiContractCall: true,
} as MethodCallOptions<BSV20V2P2PKH>)

const { tx } = await SmartContract.multiContractCall(
    partialContractTx,
    signer
)

console.log('Transfer tx:', tx.id)
```

In the above code, a partial transaction is constructed, which unlocks the first UTXO containing a `BSV20V2P2PKH` instance. The actual contract call doesn't execute yet, as we set the `multiContractCall` flag within the method call parameters.

We then feed that partially constructed transaction via the second contract call, which will unlock the `HashPuzzleFT` instance. Just like the first call, this call also has the `multiContractCall` flag set.

Once the transaction is fully built, we can sign and broadcast it using the `SmartContract.multiContractCall` function.

The above code is an example based on v2, but the same can be achieved using v1.

## `buildStateOutputFT`

Any instance of `BSV20V1` or `BSV20V2` contains the `buildStateOutputFT` method. Unlike the regular `buildStateOutput` method, this method inscribes the subsequent amount with an appropriate [BSV-20 transfer inscription](https://docs.1satordinals.com/bsv20#transfer-all-modes). The method takes the number of tokens to be transferred to the subsequent output as an argument.

Below is an example of an FT counter contract:

```ts
class CounterFTV2 extends BSV20V2 {

    @prop(true)
    counter: bigint

    constructor(id: ByteString, max: bigint, dec: bigint, counter: bigint) {
        super(id, max, dec)
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
