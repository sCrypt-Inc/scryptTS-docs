---
sidebar_position: 8
---

# Sighash in Signature

In this section, we will go deep into the sighash type and introduce how to use it in the bitcoin signature and in sCrypt.

## Introduction

### Digital Signature

A digital signature is a mathematical scheme that consists of two parts：

- an algorithm for creating a signature, using a private key to sign a message.

```
sign(privateKey, message) --> signature
```

- an algorithm that allows anyone to verify the signature, given also the message and a public key.

```
verify(signature, publicKey, message) --> true/false
```

The private key and the public key always appear in pairs, and the public key can be calculated from the private key, but not vice versa. Thus, you will always publish the public key so anyone can verify your signature, and keep the private key safe so only you can provide the correct signature.

Digital signatures are used to represent the authenticity and integrity of a message, since any modification to the message invalidates the signature, causing signature verification to fail. It is also proof that someone owns the private key, since the signature cannot be forged and it can be successfully verified with the corresponding public key only if it is signed with the correct private key.

### Bitcoin Signature

Digital signatures are applied to messages, which in the case of bitcoin, are the transactions themselves. The signature implies a commitment by the signer to specific transaction data. In the simplest form, the signature applies to the entire transaction, thereby committing all the inputs, outputs, and other transaction fields. The P2PKH transaction is a simple example of using signatures, which is widely used in bitcoin.

Bitcoin signatures have a way of indicating which part of a transaction’s data is included signed by the private key using a sighash flag. The included transaction data, that's so call `ScriptContext`. Every signature has a sighash flag and the flag can be different from signature to signature. 

There are three sighash flags: `ALL`, `NONE`, and `SINGLE`.

| Sighash flag | Description                                                  |
| ------------ | ------------------------------------------------------------ |
| ALL          | Signature applies to all inputs and outputs                  |
| NONE         | Signature applies to all inputs, none of the outputs         |
| SINGLE       | Signature applies to all inputs but only the one output with the same index number as the signed input |

In addition, there is a modifier flag `ANYONECANPAY`, which can be combined with each of the preceding flags. When `ANYONECANPAY` is set, only one input is signed, leaving the rest inputs open for modification.

| Sighash flag         | Description                                                  |
| -------------------- | ------------------------------------------------------------ |
| ALL\|ANYONECANPAY    | Signature applies to one input and all outputs               |
| NONE\|ANYONECANPAY   | Signature applies to one input, none of the outputs          |
| SINGLE\|ANYONECANPAY | Signature applies to one input and the output with the same index number |

All the six flags can be summarized in the following diagram.

![](../../static/img/sighashtypes.png)

As described in the [doc](../how-to-write-a-contract/scriptcontext.md#sighash-type) before, different sighash type decides which part of the spending transaction is included in `ScriptContext`. More specifically, it will affect the value of four fields: `hashPrevouts`, `hashSequence`, `hashOutputs`, and `sigHashType`.

| Field        | Description                                                  |
| ------------ | ------------------------------------------------------------ |
| hashPrevouts | If the `ANYONECANPAY` modifier is not set, it's double SHA256 of the serialization of all input outpoints. Otherwise, it's a `unit256` of `0x0000......0000`. |
| hashSequence | If none of the `ANYONECANPAY`, `SINGLE`, `NONE` is set, it's double SHA256 of the serialization of sequence of all inputs. Otherwise, it's a `unit256` of `0x0000......0000`. |
| hashOutputs  | If the sighash type is neither `SINGLE` nor `NONE`, it's double SHA256 of the serialization of all outputs. If the sighash type is `SINGLE` and the input index is smaller than the number of outputs, it's the double SHA256 of the output with the same index as the input. Otherwise, it's a `unit256` of `0x0000......0000`. |
| sigHashType  | sighash type of the signature                                |

## Use Cases

For a transaction signed with the default sighash `ALL`, it cannot be modified in any way. This is because the signature commits to all inputs and outputs of the transaction, if any part changes, the signature and thus the transactio becomes invalid. This is desirable in most cases, because the sender does not want others to temper with the signed transaction.

Let’s look at some examples using non-default sighash types.

### Crowdfunding

Someone attempting to raise funds can construct a transaction with a single output. The single output pays a target amount to a fundraiser. Such a transaction is obviously invalid, as it has no inputs. Others can amend it by adding an input of their own, as a donation. They sign their own input with `ALL|ANYONECANPAY` and pass the partially signed transactions to the next donor. `ALL` ensures the output and thus the target and fundraiser cannot be modified. `ANYONECANPAY` ensures anyone can pay by adding new inputs without invalidating existing donors' signatures. Each donation is a "pledge" which cannot be collected by the fundraiser until the entire target amount is raised.

### Blank Check

Someone attempting to write a blank check can construct a transaction with several inputs and no output, and sign all the inputs with `NONE`. The signatures only commit to inputs of the transaction. This allows anyone to add their desired outputs to the transaction to spend the funds in anyway she wants.

## How to generate a signature with a specific sighash

For those contract public methods that require one or more signatures as input parameters, we can specify different sighash types for the signatures when calling it.

Take the [P2PKH contract](../how-to-deploy-and-call-a-contract/how-to-deploy-and-call-a-contract.md#method-with-signatures) as an example, it requires a signature to `unlock`.

```ts
@method()
public unlock(sig: Sig, pubkey: PubKey) {
    // Check if the passed public key belongs to the specified address.
    assert(hash160(pubkey) == this.pubKeyHash, 'public key hashes are not equal')
    // Check signature validity.
    assert(this.checkSig(sig, pubkey), 'signature check failed')
}
```

There are two changes to specify a sighash type, which defaults to `ALL` if not specified explicitly.

1. Pass a `SignatureOption` object to `pubKeyOrAddrToSign` to specify the sighash type.
2. Pass the sighash as the third parameter of `findSig()`.

The following example uses `SINGLE`.

```ts
const sighash = SigHash.SINGLE
const { tx } = await p2pkh.methods.unlock(
    (sigResps) => findSig(sigResps, publicKey, sighash), // 2) specify SINGLE as well when finding a signature
    PubKey(toHex(publicKey)),
    {
        pubKeyOrAddrToSign: {
            pubKeyOrAddr: publicKey,
            sigHashType: sighash, // 1) sign with SINGLE
        }
    } as MethodCallOptions<P2PKH>
)
```
