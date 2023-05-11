---
sidebar_position: 1
---
# The BSV submodule

sCrypt exports a submodule named `bsv` which is an interface that helps you manage low-level things for the Bitcoin blockchain, such as creating key pairs, building, signing and serializing Bitcoin transactions and more.

In the context of sCrypt it is mainly used for managing key pairs and defining custom transaction builders, as demonstrated in [this section](../how-to-deploy-and-call-a-contract/how-to-customize-a-contract-tx.md).

The goal of this section is to guide you through the basics of using the `bsv` submodule.

## Importing

You can import the `bsv` submodule like so:

```ts
import { bsv } from 'scrypt-ts'
```

## Private Keys

A private key object is essentially just a wrapper around a 256-bit integer. 

You can generate a Bitcoin private key from a random value:

```ts
const privKey = bsv.PrivateKey.fromRandom()
```

This will generate a private key for the Bitcoin main network. To create a key for the test network (also referred to as "testnet"), pass a string `bsv.Networks.testnet` object:

```ts
const privKey = bsv.PrivateKey.fromRandom(bsv.Networks.testnet)
```

The main difference between a mainnet and a testnet key is how they get serialized. Check out [this page](https://wiki.bitcoinsv.io/index.php/Wallet_Import_Format_(WIF)) which explains this in detail.

You can also create key object from serialized keys:
```ts
const privKey = bsv.PrivateKey.fromWIF('cVDFHtcTU1wn92AkvTyDbtVqyUJ1SFQTEEanAWJ288xvA7TEPDcZ')
//const privKey = bsv.PrivateKey.fromString('e3a9863f4c43576cdc316986ba0343826c1e0140b0156263ba6f464260456fe8')
```

You can see the decimal value of the private key the following way:
```ts
console.log(privKey.bn.toString())
```

> **Warning**
> Private keys should be carefully stored and never be publicly revealed. Otherwise it may lead to loss of funds.

## Public Keys

A public key is a key that is derived from a private key and can be shared publicly. Mathematically, a public key is a point on the default elliptic curve that Bitcoin uses, named [`SECP256K1`](https://wiki.bitcoinsv.io/index.php/Secp256k1). It is the curves base point multiplied by the value of the private key.

You can get the public key corresponding to a private key the following way:

```ts
const privKey = bsv.PrivateKey.fromRandom(bsv.Networks.testnet)
const pubKey = privKey.toPublicKey()
```

Same as with private key you can serialize and deserialize public keys:

```ts
const pubKey = bsv.PublicKey.fromHex('03a687b08533e37d5a6ff5c8b54a9869d4def9bdc2a4bf8c3a5b3b34d8934ccd17')

console.log(pubKey.toHex())
// 03a687b08533e37d5a6ff5c8b54a9869d4def9bdc2a4bf8c3a5b3b34d8934ccd17
```

## Addresses

You can get a Bitcoin address from either the private key or the public key:

```ts
const privKey = bsv.PrivateKey.fromRandom(bsv.Networks.testnet)
const pubKey = privKey.toPublicKey()

console.log(privKey.toAddress())
// mxRjX2uxHHmS4rdSYcmCcp2G91eseb5PpF
console.log(pubKey.toAddress())
// mxRjX2uxHHmS4rdSYcmCcp2G91eseb5PpF
```

Read [this wiki page](https://wiki.bitcoinsv.io/index.php/Bitcoin_address) for more information on how Bitcoin addresses get constructed.

## Hash Functions

The `bsv` submodules offers various hash functions that are commonly used in Bitcoin. You can use them like so:

```ts
const hashStr = bsv.crypto.Hash.sha256(Buffer.from('this is the data I want to hash')).toString('hex')
console.log(hashStr)
// f88eec7ecabf88f9a64c4100cac1e0c0c4581100492137d1b656ea626cad63e3
```

The hash functions available in the `bsv` submodule are:

| Hash Function | Output Length | Description                                                |
|---------------|--------------|------------------------------------------------------------|
| sha256        | 32 bytes     | The SHA256 hash.                                           |
| sha256sha256  | 32 bytes     | The SHA256 hash of the SHA256 hash. Used for blocks and transactions. |
| sha512        | 64 bytes     | The SHA512 hash. Commonly used in applications.             |
| sha1          | 20 bytes     | The SHA1 hash.                                             |
| ripemd160     | 20 bytes     | The RIPEMD160 hash.                                        |
| sha256ripemd160 | 20 bytes     | The RIPEMD160 hash of the SHA256 hash. Used in Bitcoin addresses. |

Note however, that these functions should not be confused with [sCrypts native hash functions](/reference/#hashing-functions). These functions cannot be used in a smart contract method.

## Constructing Transactions

The `bsv` submodule offers a flexible system for constructing Bitcoin transactions. Users are able to define scripts, transaction inputs and outputs, and a whole transaction including its metadata. For a complete description of Bitcoins transaction format, please read [this wiki page](https://wiki.bitcoinsv.io/index.php/Bitcoin_Transactions).

As an exercise let's construct a simple [P2PKH](https://wiki.bitcoinsv.io/index.php/Bitcoin_Transactions#Pay_to_Public_Key_Hash_.28P2PKH.29) transaction from scratch and sign it.

> **Note:**
> As you will notice further in these docs, most of these steps won't be needed in a regular smart contract development workflow as sCrypt already does a lot of heavy lifting for you. This section serves more as a deeper look on what is happening under the hood.

You can create an empty transaction like this:
```ts
let tx = new bsv.Transaction()
```

Because the transaction will need an input that provides it with some funds, we can use the `from` function to add one that unlocks the specified [UTXO](https://wiki.bitcoinsv.io/index.php/UTXO):

```ts
let tx = new bsv.Transaction()
    .from({
        // TXID that contains the output you want to unlock:
        txId: 'f50b8c6dedea6a4371d17040a9e8d2ea73d369177737fb9f47177fbda7d4d387',
        // Index of the UTXO:
        outputIndex: 0,
        // Script of the UTXO. In this case it's a regular P2PKH script:
        script: bsv.Script.fromASM('OP_DUP OP_HASH160 fde69facc20be6eee5ebf5f0ae96444106a0053f OP_EQUALVERIFY OP_CHECKSIG').toHex(),
        // Value locked in the UTXO in satoshis:
        satoshis: 99904
    })
```

Now, the transaction needs an output that will pay to the address `mxXPxaRvFE3178Cr6KK7nrQ76gxjvBQ4UQ` in our example:

```ts
let tx = new bsv.Transaction()
    .from({
        // TXID that contains the output you want to unlock:
        txId: 'f50b8c6dedea6a4371d17040a9e8d2ea73d369177737fb9f47177fbda7d4d387',
        // Index of the UTXO:
        outputIndex: 0,
        // Script of the UTXO. In this case it's a regular P2PKH script:
        script: bsv.Script.fromASM('OP_DUP OP_HASH160 fde69facc20be6eee5ebf5f0ae96444106a0053f OP_EQUALVERIFY OP_CHECKSIG').toHex(),
        // Value locked in the UTXO in satoshis:
        satoshis: 99904
    }).addOutput(
        new bsv.Transaction.Output({
            script: bsv.Script.buildPublicKeyHashOut('mxXPxaRvFE3178Cr6KK7nrQ76gxjvBQ4UQ'),
            satoshis: 99804,
        })
    )
```

Notice, how the output value is 100 less than the value of the UTXO, we're unlocking. This difference is the [transaction fee](https://wiki.bitcoinsv.io/index.php/Transaction_fees) (sometimes also called the miner fee).

### Signing

OK, now that we have the transaction constructed, it's time to sign it. First we need to seal the transaction, so it will be ready to sign. Then we call the `sign` function. It takes the private key that can unlock the UTXO we passed to the `from` function. In our specific example this is the private key that corresponds the the address `n4fTXc2kaKXHyaxmuH5FTKiJ8Tr4fCPHFy`:

```ts
tx = tx.seal().sign('cNSb8V7pRt6r5HrPTETq2Li2EWYEjA7EcQ1E8V2aGdd6UzN9EuMw')
```

Viola! Thats it. This will add the necessary data to the transactions input script. That being the signature along with the public key of our signing key.

Now our transaction is ready to be posted to the blockchain. You can serialize the transaction the following way:

```ts
console.log(tx.serialize())
```

For broadcasting you can use any provider you like. For simple demo purposes you can simply paste the serialized transaction [here](https://test.whatsonchain.com/broadcast).


### OP_RETURN Scripts

In case you would like to put some arbitrary data on-chain, without any locking logic, you can use transaction outputs with an [OP_RETURN](https://wiki.bitcoinsv.io/index.php/OP_RETURN) script.

An example of an OP_RETURN script written in ASM format is this:

```
OP_FALSE OP_RETURN 734372797074
```

In effect, the opcodes `OP_FALSE OP_RETURN` will make the script unspendable. After them we can insert arbitrary chunks of data. The `734372797074` is actually the string `sCrypt` encoded as an `utf-8` hexadecimal string.

```js
console.log(Buffer.from('sCrypt').toString('hex'))
// 734372797074
```

An OP_RETURN script can also contain more than a single chunk of data:
```
OP_FALSE OP_RETURN 48656c6c6f 66726f6d 734372797074
```

The `bsv` submodule offers a convenient function to construct such scripts:

```ts
const opRetScript: bsv.Script = bsv.Script.buildSafeDataOut(['Hello', 'from', 'sCrypt'])
``` 

We can add the resulting `bsv.Script` object to an output as we showed [above](#constructing-transactions).


## References

- Take a look at the full [`bsv` submodule reference](../reference/modules/bsv) for a full list of what functions it provides.
- As the `bsv` submodule is based on MoneyButtons library implementation, take a look at their [video tutorial series](https://www.youtube.com/watch?v=bkGiCjYBpJE&list=PLwj1dNv7vWsMrjrWeiQEelbKTI3Lrmvqp&index=1). Although do keep in mind that some things might be slightly different as it's an old series.

