---
sidebar_position: 4
---

# Tutorial 4: Oracle

## Overview

In this tutorial, we will go over how to build a smart contract that takes in some data that was signed by an oracle and verifies it's validity.

Specifically, we will implement a smart contract, that lets two players bet on the price of BSV at some point in the future.
The contract will take signed data from the [WitnessOnChain oracle](https://witnessonchain.com/) as an input, do some assertions on it and verify the signature. Depending the fact if the price target was reached it will pay out a reward to one of the two players.

### What is an Oracle?

In the context of smart contracts, an oracle is a trusted external data source that provides real-world information to blockchain networks. Oracles bridge the gap between on-chain smart contracts and off-chain data, enabling smart contracts to access, verify, and incorporate data from outside the blockchain. This allows smart contracts to execute based on real-world events and conditions, enhancing their utility and functionality. 

The data supplied by oracles can include various types of information, such as asset prices, weather conditions, election results, or sports outcomes, among others.

Read [this article](https://medium.com/coinmonks/access-external-data-from-bitcoin-smart-contracts-2ecdc7448c43) for a more comprehensive explanation of how they can be used on Bitcoin.

## Contract Properties

There are quite a few properties which our price betting smart contract will require:

```ts
// Price target that needs to be reached.
@prop()
targetPrice: bigint

// Symbol of the pair, e.g. "BSV_USDC"
@prop()
symbol: ByteString

// Timestamp window in which the price target needs to be reached.
@prop()
timestampFrom: bigint
@prop()
timestampTo: bigint

// Oracles Rabin public key.
@prop()
oraclePubKey: RabinPubKey

// Addresses of both players.
@prop()
alicePkh: PubKeyHash
@prop()
bobPkh: PubKeyHash
```

Notice, that the type `RabinPubKey` is not a standard type. It's actually defined in the [`scrypt-ts-lib`](https://www.npmjs.com/package/scrypt-ts-lib) package. You can import it the following way:

```ts
import { RabinPubKey } from 'scrypt-ts-lib'
```

## Constructor

As we haven't defined any static properties, we need to set the value of each one within the contracts constructor:

```ts
constructor(
    targetPrice: bigint,
    symbol: ByteString,
    timestampFrom: bigint,
    timestampTo: bigint,
    oraclePubKey: RabinPubKey,
    alicePkh: PubKeyHash,
    bobPkh: PubKeyHash
) {
    super(...arguments)
    this.targetPrice = targetPrice
    this.symbol = symbol
    this.timestampFrom = timestampFrom
    this.timestampTo = timestampTo
    this.oraclePubKey = oraclePubKey
    this.alicePkh = alicePkh
    this.bobPkh = bobPkh
}
```

## Public Method - `unlock`

The contract will have only a single public method, namely `unlock`. As parameters, it will take the oracles signature and the message that was signed:

```ts
@method()
public unlock(msg: ByteString, sig: RabinSig) {
    // Verify oracle signature.
    assert(
        RabinVerifierWOC.verifySig(msg, sig, this.oraclePubKey),
        'Oracle sig verify failed.'
    )

    // Decode data.
    // 4 bytes timestamp (LE) + 8 bytes rate (LE) + 1 byte decimal + 16 bytes symbol
    const timestamp = Utils.fromLEUnsigned(msg.slice(0, 8))
    const price = Utils.fromLEUnsigned(msg.slice(8, 24))
    const symbol: ByteString = msg.slice(26, 58)

    // Validate data.
    assert(timestamp >= this.timestampFrom, 'Timestamp too early.')
    assert(timestamp <= this.timestampTo, 'Timestamp too late.')
    assert(symbol == this.symbol, 'Wrong symbol.')

    // Include output that pays the winner.
    const outAmount = this.ctx.utxo.value // Include all sats from contract instance.
    const winner = price >= this.targetPrice ? this.alicePkh : this.bobPkh
    const out = Utils.buildPublicKeyHashOutput(winner, outAmount)
    assert(this.ctx.hashOutputs == hash256(out), 'hashOutputs mismatch')
}
```

Let's walk through each part.

First, we verify that the passed signature is correct. For that we use the `RabinVerifierWOC` library from the [`scrypt-ts-lib`](https://www.npmjs.com/package/scrypt-ts-lib) package. We add it to the imports:

```ts
import { RabinPubKey, RabinSig, RabinVerifierWoc } from 'scrypt-ts-lib'
```

Now, we can call the `verifySig` method of the verification library:
```ts
// Verify oracle signature.
assert(
    RabinVerifierWOC.verifySig(msg, sig, this.oraclePubKey),
    'Oracle sig verify failed.'
)
``` 
The verification method requires the message that was signed by the oracle, the oracles signature for the message, and the oracles public key, which we already set via the constructor.

Next, we need to parse out concrete information from the chunk of data that is the signed message and do some assertions of it. For granular description of the message format check out the `"Exchange Rate"` section in the [WitnessOnChain API docs](https://witnessonchain.com).

```ts
// Decode data.
// 4 bytes timestamp (LE) + 8 bytes rate (LE) + 1 byte decimal + 16 bytes symbol
const timestamp = Utils.fromLEUnsigned(msg.slice(0, 8))
const price = Utils.fromLEUnsigned(msg.slice(8, 24))
const symbol: ByteString = msg.slice(26, 58)
```

We parse out the following data:
- `timestamp` - The time at which this exchange rate was present.
- `price` - The exchange rate encoded as an integer -> (priceFloat * (10^decimal)).
- `symbol` - The symbol of the token pair, e.g. `BSV_USDC`.

Now we can do assertions on the data. First, we check if the timestamp of the exchange rate is within our specified range that we betted on:

```ts
assert(timestamp >= this.timestampFrom, 'Timestamp too early.')
assert(timestamp <= this.timestampTo, 'Timestamp too late.')
```

Additionally, we check if the exchange rate is actually for the correct token pair:

```ts
assert(symbol == this.symbol, 'Wrong symbol.')
```

Lastly, now that we have all the necessary information, we can choose the winner and pay to his address accordingly:

```ts
// Include output that pays the winner.
const outAmount = this.ctx.utxo.value // Include all sats from contract instance.
const winner = price >= this.targetPrice ? this.alicePkh : this.bobPkh
const out = Utils.buildPublicKeyHashOutput(winner, outAmount)
assert(this.ctx.hashOutputs == hash256(out), 'hashOutputs mismatch')
```

As we can see, if the target price was reached, Alice gets paid, else Bob gets the funds. The contract ensures the winner gets paid via a standard [`P2PKH`](https://wiki.bitcoinsv.io/index.php/Bitcoin_Transactions#Pay_to_Public_Key_Hash_.28P2PKH.29) output.


## Conclusion

Congratulations! You have completed the oracle tutorial!

The full code along with [tests](https://github.com/sCrypt-Inc/boilerplate/blob/master/tests/local/priceBet.test.ts) can be found in sCrypt's [boilerplate repository](https://github.com/sCrypt-Inc/boilerplate/blob/master/src/contracts/priceBet.ts).

