---
sidebar_position: 10
---

# How to Sign P2PKH Inputs Using the Signer Class

In certain scenarios, it is necessary to sign only P2PKH inputs when working with transactions in sCrypt. This documentation will guide you through the process of utilizing the **`Signer`** class to achieve this.

## Prerequisites

Before proceeding, make sure you have a basic understanding of the sCrypt. library and have set up the required dependencies.

## Implementation

### 1. Initialize a UTXO for P2PKH

Start by defining a P2PKH Unspent Transaction Output (UTXO) that you intend to use for your transaction:

```ts
const utxo = {
    txId: '5260b12348608a33c2ac90ed8a08e0b3eb90bbe862bcea6b21b1f29f1c2fdee0',
    outputIndex: 0,
    script: bsv.Script.fromASM('OP_DUP OP_HASH160 af838fed6517e595e6761c2b96849bec473b00f8 OP_EQUALVERIFY OP_CHECKSIG').toHex(),
    satoshis: 1000,
};
```

### 2. Add the P2PKH UTXO to the Transaction

Use the from() method to add the P2PKH UTXO to your transaction. This marks the input as a P2PKH input:

```ts
tx.from(utxo);
```

### 3. Verify Input Script Before Signing

Before signing the transaction, ensure that the input script is empty. This can be done with the following code:

```ts
console.log(tx.inputs[2].script.toASM()); // Empty, no signature
```

### 4. Sign the Transaction

Use the Signer class to sign the transaction:

```ts
const signer = getDefaultSigner();
await signer.signTransaction(tx);
```

### 5. Verify Input Script After Signing

After signing, confirm that the input script now contains the signature and public key:

```ts
console.log(tx.inputs[2].script.toASM()); // Should contain signature and pubkey
```

### Example Implementation

Here is a simplified example demonstrating the steps above within a transaction :

```ts
const tx = new bsv.Transaction();
// Add inputs, outputs, and other transaction details as needed

// Add P2PKH UTXO
tx.from(utxo);

// Verify input script before signing
console.log(tx.inputs[2].script.toASM()); // Empty, no signature

// Sign the transaction
const signer = getDefaultSigner();
await signer.signTransaction(tx);

// Verify input script after signing
console.log(tx.inputs[2].script.toASM()); // Should contain signature and pubkey

.................................
.................................

// Finalize the transaction
const finalizedTx = tx.build();
```

### 6. Partially Signing

when signer does not contain all private keys, it is used and multiple parties are required to perform signature authorization.

```ts
const p2pkh = new P2PKH(Addr(ownerAddress.toByteString()))

// Signer who unlocks / signs P2PKH UTXO.
const ownerSigner = getNewSigner(ownerPrivkey)

// Signer who pays fee.
// For simplicity here, we just again use the same default signer, but it
// could be any other signer.
const feeSigner = getDefaultSigner()

// Connect the signer.
await p2pkh.connect(feeSigner)

// Deploy the P2PKH contract.
await p2pkh.deploy(1)

const tx = new bsv.Transaction()

// Get UTXOs for for the signer, who will pay the fee.
const address = await feeSigner.getDefaultAddress()

const utxos = await feeSigner.listUnspent(address)

// Spend retrieved UTXOs to pay the transaction fee. Any change will
// be returned to the fee signers address.
tx.from(utxos).change(address)

// Bind custom call tx builder. It adds a single input, which will call
// our deployed smart contracts "unlock" method. Additionally, it adds an
// unspendable OP_RETURN output.
p2pkh.bindTxBuilder(
    'unlock',
    async (
        current: P2PKH,
        options: MethodCallOptions<P2PKH>
    ): Promise<ContractTransaction> => {
        const inputLen = tx.inputs.length
        tx.addInput(current.buildContractInput()).addOutput(
            new bsv.Transaction.Output({
                script: bsv.Script.fromASM('OP_FALSE OP_RETURN 0101'),
                satoshis: 0,
            })
        )

        return {
            tx: tx,
            /** The input index of previous contract UTXO to spend in the method calling tx */
            atInputIndex: inputLen,
            nexts: [],
        }
    }
)

// // Construct the call tx locally (notice the "pratiallySigned" flag).
// // Use the ANYONECANPAY_SINGLE sighash flag to sign the first input.
const sigHashType = bsv.crypto.Signature.ANYONECANPAY_SINGLE

await p2pkh.connect(ownerSigner)

const call = async () => {
    const { tx: callTx } = await p2pkh.methods.unlock(
        // pass signature, the first parameter, to `unlock`
        // after the signer signs the transaction, the signatures are returned in `SignatureResponse[]`
        // you need to find the signature or signatures you want in the return through the public key or address
        // here we use `myPublicKey` to find the signature because we signed the transaction with `myPrivateKey` before
        (sigResps) =>
            findSig(sigResps, ownerPrivkey.publicKey, sigHashType),
        // pass public key, the second parameter, to `unlock`
        PubKey(ownerPrivkey.publicKey.toByteString()),
        // method call options
        {
            // tell the signer to use the private key corresponding to `myPublicKey` to sign this transaction
            // that is using `myPrivateKey` to sign the transaction
            pubKeyOrAddrToSign: {
                pubKeyOrAddr: ownerPrivkey.publicKey,
                sigHashType: sigHashType,
            },
            partiallySigned: true,
            autoPayFee: false,
        } as MethodCallOptions<P2PKH>
    )

    // Finally, sign the newly added inputs and broadcast the modified transaction.
    // Notice, that if the main singer wouldn't use the ANYONECANPAY_SINGLE sighash flag,
    // Then the call to the "unlock" method (first input) wouldn't successfully evaluate anymore.
    await feeSigner.signAndsendTransaction(callTx, { address })
}

await expect(call()).to.be.not.rejected
```

## Conclusion

By following these steps, your transaction sign only P2PKH inputs using the **`Signer`** class in sCrypt. If you encounter any issues or have specific requirements, 
please refer to the [sCrypt slack channel](https://app.slack.com/client/TLSHKFH5Y/CLSHPUZC3) to seek further assistance.
