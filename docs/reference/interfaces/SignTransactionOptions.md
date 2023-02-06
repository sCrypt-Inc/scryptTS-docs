[scrypt-ts](../README.md) / SignTransactionOptions

# Interface: SignTransactionOptions

`SignTransactionOptions` is the options can be provided when signing a transaction.

## Table of contents

### Properties

- [address](SignTransactionOptions.md#address)
- [sigRequests](SignTransactionOptions.md#sigrequests)

## Properties

### address

• `Optional` **address**: [`AddressesOption`](../README.md#addressesoption)

The address(es) whose corresponding private key(s) should be used to sign the tx.

#### Defined in

[src/bsv/abstract-signer.ts:44](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/bsv/abstract-signer.ts#L44)

___

### sigRequests

• `Optional` **sigRequests**: [`SignatureRequest`](SignatureRequest.md)[]

The `SignatureRequest` for the some inputs of the transaction.

#### Defined in

[src/bsv/abstract-signer.ts:42](https://github.com/sCrypt-Inc/scrypt-ts/blob/5acfc51/src/bsv/abstract-signer.ts#L42)
