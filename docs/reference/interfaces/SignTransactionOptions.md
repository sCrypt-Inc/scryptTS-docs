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

dist/bsv/abstract-signer.d.ts:41

___

### sigRequests

• `Optional` **sigRequests**: [`SignatureRequest`](SignatureRequest.md)[]

The `SignatureRequest` for the some inputs of the transaction.

#### Defined in

dist/bsv/abstract-signer.d.ts:39
