[**scrypt-ts**](../README.md)

***

[scrypt-ts](../globals.md) / SignTransactionOptions

# Interface: SignTransactionOptions

Defined in: scrypt-ts/dist/bsv/abstract-signer.d.ts:47

`SignTransactionOptions` is the options can be provided when signing a transaction.

## Properties

### address?

> `optional` **address**: [`AddressesOption`](../type-aliases/AddressesOption.md)

Defined in: scrypt-ts/dist/bsv/abstract-signer.d.ts:51

The address(es) whose corresponding private key(s) should be used to sign the tx.

***

### sigRequests?

> `optional` **sigRequests**: [`SignatureRequest`](SignatureRequest.md)[]

Defined in: scrypt-ts/dist/bsv/abstract-signer.d.ts:49

The `SignatureRequest` for the some inputs of the transaction.
