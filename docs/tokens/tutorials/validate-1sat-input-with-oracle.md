---
sidebar_position: 5
---

# Tutorial 5: Validate 1SatOrdinals Input with Oracle

## Overview
Miners can decide whether a UTXO is valid but cannot directly determine whether the [1SatOrdinals](https://docs.1satordinals.com/) asset in a UTXO is valid, which requires the participation of the indexer. In many practical applications, verifying the 1SatOrdinals assets carried in certain transaction inputs, such as token swap, token stake, etc is necessary. At this time, we must introduce Oracle to provide additional verification data for the contract to ensure the authenticity and integrity of the information required when unlocking the contract.

This tutorial will introduce how to use [WitnessOnChain](https://api.witnessonchain.com) Oracle to validate the transaction input containing 1SatOrdinals inscriptions and BSV20 tokens.

## WitnessOnChain API

The WitnessOnChain provides an [API](https://api.witnessonchain.com/#/v1/V1Controller_getInscription) to get inscription details from an outpoint.

```
https://api.witnessonchain.com/v1/inscription/bsv/{network}/outpoint/{txid}/{vout}
```

The structure of the signed message in response is as follows:

| Name      | Type       | Bytes | Description                                  |
| --------- | ---------- | ----- | -------------------------------------------- |
| marker    | bigint     | 1     | api marker, always be 4n                     |
| timestamp | bigint     | 4     | timestamp, little-endian                     |
| network   | bigint     | 1     | network type, 1n for mainnet, 0n for testnet |
| txid      | ByteString | 32    | txid                                         |
| vout      | bigint     | 4     | output index, little-endian                  |
| bsv20     | bigint     | 1     | token type, 0n for NFT, 1n for BSV20         |
| amt       | bigint     | 8     | token amount, little endian                  |
| id        | ByteString | >=66  | inscription id                               |

According to this, we can define a customized type `Msg` and a parser help function in the code.

```ts
type Msg = {
    marker: bigint // 1 byte, api marker
    timestamp: bigint // 4 bytes LE
    network: bigint // 1 byte, 1 for mainnet, 0 for testnet
    txid: ByteString // 32 bytes, txid
    vout: bigint // 4 bytes LE, output index
    bsv20: bigint // 1 byte, token type, 0 for NFT, 1 for BSV20
    amt: bigint // 8 bytes LE
    id: ByteString
}

static parseMsg(msg: ByteString): Msg {
    return {
        marker: Utils.fromLEUnsigned(slice(msg, 0n, 1n)),
        timestamp: Utils.fromLEUnsigned(slice(msg, 1n, 5n)),
        network: Utils.fromLEUnsigned(slice(msg, 5n, 6n)),
        txid: slice(msg, 6n, 38n),
        vout: Utils.fromLEUnsigned(slice(msg, 38n, 42n)),
        bsv20: Utils.fromLEUnsigned(slice(msg, 42n, 43n)),
        amt: Utils.fromLEUnsigned(slice(msg, 43n, 51n)),
        id: slice(msg, 51n),
    }
}
```

## Contract

In this example, we implemented a demo contract. This contract will be successfully spent only when the second input (that is input #1) of the unlocking transaction contains a specific amount of a certain BSV20 token.

![](../../../static/img/oracle-demo-bsv20-unlocking-tx.png)

To verify the Oracle signed message, we should add Oracle's public key to the contract. To record the specific BSV20 token and required amount, we also need to add another two properties to it.

```ts
export class OracleDemoBsv20 extends OrdinalNFT {
    @prop()
    oraclePubKey: RabinPubKey

    @prop()
    inscriptionId: ByteString
    @prop()
    amt: bigint
    
    ...
}
```

### Methods

The public method `unlock` requires three parameters:

- `msg`, Oracle's signed message,
- `sig`, Oracle's signature
- `tokenInputIndex`, to mark which input is the token input

```ts
@method()
public unlock(msg: ByteString, sig: RabinSig, tokenInputIndex: bigint) {
    // retrieve token outpoint from prevouts
    const txid = reverseByteString(
        slice(this.prevouts, tokenInputIndex * 36n, tokenInputIndex * 36n + 32n),
        32n
    )
    const vout = Utils.fromLEUnsigned(
        slice(this.prevouts, tokenInputIndex * 36n + 32n, tokenInputIndex * 36n + 36n)
    )
    // verify oracle signature
    assert(
        WitnessOnChainVerifier.verifySig(msg, sig, this.oraclePubKey),
        'Oracle sig verify failed.'
    )
    // decode oracle data
    const message = OracleDemoBsv20.parseMsg(msg)
    // validate data
    assert(message.marker == 4n, 'incorrect oracle message type')
    assert(message.network == 0n, 'incorrect network')
    assert(message.txid == txid, 'incorrect token txid')
    assert(message.vout == vout, 'incorrect token vout')
    assert(message.bsv20 == 1n, 'incorrect token type')
    assert(message.amt >= this.amt, 'incorrect token amount')
    assert(message.id == this.inscriptionId, 'incorrect inscription id')

    // do other validations ...
}
```

We first retrieve the token outpoint from `this.prevouts` and verify Oracle's signature, then deserialize Oracle's signed message to do the asserts.

## Conclusion

Congratulations! You have successfully completed a tutorial about how to validate 1SatOrdinals inputs with Oracle.

The full example [contract]() and its corresponding [test]() can be found in our [boilerplate](https://github.com/sCrypt-Inc/boilerplate).

