---
sidebar_position: 1
---
# bitcoinjs-lib

sCrypt exports a submodule named `bitcoinjs-lib` which is an interface that helps you manage low-level things for the Bitcoin blockchain, such as creating key pairs, building, signing and serializing Bitcoin transactions, and more.

In the context of sCrypt, the `bitcoinjs-lib` submodule is used primarily for managing key pairs and defining custom transaction builders, as demonstrated in the [How to Write a Contract](../how-to-deploy-and-call-a-contract/how-to-customize-a-contract-tx.md) section.

The goal of this section is to guide you through the basics of using the `bitcoinjs-lib` submodule.

## Importing

You can import the `bitcoinjs-lib` submodule like this:

```ts
import * as bitcoinjs from '@scrypt-inc/bitcoinjs-lib'
```

## Private Keys


You can generate a Bitcoin private key (for `mainnet`) from a random value like this:

```ts
import * as ecc from '@bitcoinerlab/secp256k1';
import * as bitcoinjs from '@scrypt-inc/bitcoinjs-lib'
import ECPairFactory from 'ecpair';
const ECPair = ECPairFactory(ecc);
const keyPair = ECPair.makeRandom({ network: bitcoinjs.networks.bitcoin });
const wif = keyPair.toWIF();
console.log(`Private key: ${wif}`);
const { address } = bitcoinjs.payments.p2pkh({ pubkey: keyPair.publicKey });
console.log(`Address: ${address}`);
```

To create a private key for the test network (also referred to as `testnet`), do the following instead:

```ts
const keyPair = ECPair.makeRandom({ network: bitcoinjs.networks.testnet });
const wif = keyPair.toWIF();
console.log(`Private key: ${wif}`);
```

The main difference between a mainnet and a testnet key is how they get serialized.
Check out this [Bitcoin Wiki page on WIFs](https://en.bitcoin.it/wiki/Wallet_import_format) which explains the differences in more detail.

You can also create `PrivateKey` objects from serialized keys like this:

```ts
const keyPair = ECPair.fromWIF('cVDFHtcTU1wn92AkvTyDbtVqyUJ1SFQTEEanAWJ288xvA7TEPDcZ');
const keyPair = ECPair.fromPrivateKey(Buffer.from('e3a9863f4c43576cdc316986ba0343826c1e0140b0156263ba6f464260456fe8', 'hex'));
```

:::warning
Private keys should be carefully stored and never be publicly revealed. Otherwise it may lead to loss of funds.
:::


## Public Keys

A public key is derived from a private key and can be shared publicly. Mathematically, a public key is a point on the default elliptic curve that Bitcoin uses, named [`SECP256K1`](https://en.bitcoin.it/wiki/Secp256k1). It is the curve's base point multiplied by the value of the private key.

You can get the public key corresponding to a private key the following way:

```ts
const keyPair = ECPair.makeRandom({ network: bitcoinjs.networks.bitcoin });
const pubKey = keyPair.publicKey
```


## Addresses

You can get a Bitcoin address from either the private key or the public key:

```ts
const keyPair = ECPair.makeRandom({ network: bitcoinjs.networks.bitcoin });
const { address } = bitcoinjs.payments.p2pkh({ pubkey: keyPair.publicKey });
console.log(`P2PKH Address: ${address}`);
// Address: 19oTCSHG5o8Mdnx9cZ5f7tZ4nxSPCVTgM4
const { address } = bitcoinjs.payments.p2wpkh({ pubkey: keyPair.publicKey });
console.log(`P2WPKH Address: ${address}`);
// Address: bc1qvz9qys2v0qwjhvtk8jy33p7tpffxtt797yhh5m
bitcoinjs.initEccLib(ecc);
const { address } = bitcoinjs.payments.p2tr({ pubkey: bitcoinjs.toXOnly(keyPair.publicKey)  });
console.log(`P2TR Address: ${address}`);
// Address: bc1p56rmppfnud745ml4ez654xrf6n00n0wz5jlccwjm8v6d3y6ve5tsg6zncq
```

Read this [Bitcoin wiki page](https://en.bitcoin.it/wiki/Invoice_address) for more information on how Bitcoin addresses are constructed.


## Constructing Transactions

The `bitcoinjs-lib` submodule offers a flexible system for constructing Bitcoin transactions. Users are able to define scripts, transaction inputs and outputs, and a whole transaction including its metadata. For a complete description of Bitcoin's transaction format, please read the [Bitcoin wiki page](https://en.bitcoin.it/wiki/Transaction).

As an exercise let's construct a simple [P2PKH](https://en.bitcoin.it/wiki/Transaction#Pay-to-PubkeyHash) transaction from scratch and sign it.

:::note
As you will notice further in these docs, most of these steps won't be needed in a regular smart contract development workflow as sCrypt already does a lot of heavy lifting for you. This section serves more as a deeper look on what is happening under the hood.
:::

You can create an empty psbt like this:
```ts
import {
    ExtPsbt
} from '@scrypt-inc/scrypt-ts-btc'
const psbt = new ExtPsbt();
```

Because the transaction will need an input that provides it with some funds, we can use the `from` function to add one that unlocks the specified [UTXO](https://en.bitcoin.it/wiki/UTXO):

```ts

psbt.addInput({
    // if hash is string, txid, if hash is Buffer, is reversed compared to txid
    hash: '7d067b4a697a09d2c3cff7d4d9506c9955e93bff41bf82d439da7d030382bc3e',
    index: 0,
    sequence: 0xffffffff, // These are defaults. This line is not needed.
    // non-segwit inputs now require passing the whole previous tx as Buffer
    nonWitnessUtxo: Buffer.from(rawTxHex, 'hex')
});
```

Now, the transaction needs an output that will pay to the address `mxXPxaRvFE3178Cr6KK7nrQ76gxjvBQ4UQ` in our example:

```ts
psbt.addOutput({
    address: 'mxXPxaRvFE3178Cr6KK7nrQ76gxjvBQ4UQ',
    value: 80000n,
});
```

Notice how the output value is 100 satoshis less than the value of the UTXO we're unlocking. This difference is the [transaction fee](https://wiki.bitcoinsv.io/index.php/Transaction_fees) (sometimes also called the "miner fee"). The transaction fees are collected by miners when they mine a block, so adding a transaction fee basically acts as an incentive for miners to include your transaction in a block.

The amount of transaction fee you should pay depends on the fee rate and the bytes of the transaction. By adding an additional output to the transaction, we can control how much the transaction fee is actually paid. This output is called the change output. By adjusting the amount of change output, we can pay as little transaction fees as possible while meeting the needs of miners.

You can directly call the `change` function to add a change output to the transaction without calculating the change amount by yourself. This function is smart enough that it will only add the change output when the difference between all inputs and outputs is more than the required transaction fee.

```ts
const feePerKb = 1;
psbt.change('n4fTXc2kaKXHyaxmuH5FTKiJ8Tr4fCPHFy', feePerKb)
```


### Signing

Now that we have the transaction constructed, it's time to sign it. First, we need to create a Signer, so it will be ready to sign. Then we call the `signPsbt` function of the Signer. After getting signedPsbt, combine it and finalize all inputs.

```ts
const signer = new DefaultSigner()
const signedPsbtHex = await signer.signPsbt(psbt.toHex(), psbt.psbtOptions());
const signedPsbt = psbt.combine(ExtPsbt.fromHex(signedPsbtHex)).finalizeAllInputs();
```

Viola! That's it. This will add the necessary data to the transaction's input script: the signature and the public key of our signing key. Now our transaction is ready to be posted to the blockchain.

You can serialize the transaction like this:

```ts
const tx = signedPsbt.extractTransaction();
console.log(tx.toHex())
```

To broadcast a transaction, you can use any provider you like.
For demo and test purposes you can paste the serialized transaction [here](https://mempool.space/tx/push).


## References

- Take a look at the full [`bitcoinjs-lib` submodule reference](../references/bitcoinjs-lib) for a full list of what functions it provides.
- As the `@scrypt-inc/bitcoinjs-lib` a fork based on [bitcoinjs-lib](https://github.com/bitcoinjs/bitcoinjs-lib) implementation, take a look at their [github](https://github.com/bitcoinjs/bitcoinjs-lib). 
