#How to Sign P2PKH Inputs Using the Signer Class
In certain scenarios, it is necessary to sign only P2PKH inputs when working with transactions in sCrypt. This documentation will guide you through the process of utilizing the **`Signer`** class to achieve this.

##Prerequisites
Before proceeding, make sure you have a basic understanding of the sCrypt. library and have set up the required dependencies.

##Implementation
###1. Initialize a UTXO for P2PKH
Start by defining a P2PKH Unspent Transaction Output (UTXO) that you intend to use for your transaction:

```ts
const utxo = {
    txId: '5260b12348608a33c2ac90ed8a08e0b3eb90bbe862bcea6b21b1f29f1c2fdee0',
    outputIndex: 0,
    script: bsv.Script.fromASM('OP_DUP OP_HASH160 af838fed6517e595e6761c2b96849bec473b00f8 OP_EQUALVERIFY OP_CHECKSIG').toHex(),
    satoshis: 1000,
};
```

###2. Add the P2PKH UTXO to the Transaction
Use the from() method to add the P2PKH UTXO to your transaction. This marks the input as a P2PKH input:

```ts
tx.from(utxo);
```

###3. Verify Input Script Before Signing
Before signing the transaction, ensure that the input script is empty. This can be done with the following code:

```ts
console.log(tx.inputs[2].script.toASM()); // Empty, no signature
```

###4. Sign the Transaction
Use the Signer class to sign the transaction:

```ts
const signer = getDefaultSigner();
await signer.signTransaction(tx);
```

###5. Verify Input Script After Signing
After signing, confirm that the input script now contains the signature and public key:

```ts
console.log(tx.inputs[2].script.toASM()); // Should contain signature and pubkey
```

###Example Implementation
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

##Conclusion
By following these steps, your transaction sign only P2PKH inputs using the **`Signer`** class in sCrypt. If you encounter any issues or have specific requirements, 
please refer to the [sCrypt slack channel](https://app.slack.com/client/TLSHKFH5Y/CLSHPUZC3) to seek further assistance.
