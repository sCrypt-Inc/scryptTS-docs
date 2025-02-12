[**scrypt-ts**](../README.md)

***

[scrypt-ts](../globals.md) / SignatureRequest

# Interface: SignatureRequest

Defined in: scrypt-ts/dist/bsv/abstract-signer.d.ts:8

`SignatureRequest` contains required information for a signer to sign a certain input of a transaction.

## Properties

### address

> **address**: [`AddressesOption`](../type-aliases/AddressesOption.md)

Defined in: scrypt-ts/dist/bsv/abstract-signer.d.ts:16

The address(es) of corresponding private key(s) required to sign the input.

***

### csIdx?

> `optional` **csIdx**: `number`

Defined in: scrypt-ts/dist/bsv/abstract-signer.d.ts:25

Index of the OP_CODESEPARATOR to split the previous output script at during verification.
If undefined, the whole script is used.

***

### data?

> `optional` **data**: `unknown`

Defined in: scrypt-ts/dist/bsv/abstract-signer.d.ts:27

The extra information for signing.

***

### inputIndex

> **inputIndex**: `number`

Defined in: scrypt-ts/dist/bsv/abstract-signer.d.ts:12

The index of input to sign.

***

### outputIndex

> **outputIndex**: `number`

Defined in: scrypt-ts/dist/bsv/abstract-signer.d.ts:10

***

### prevTxId

> **prevTxId**: `string`

Defined in: scrypt-ts/dist/bsv/abstract-signer.d.ts:9

***

### satoshis

> **satoshis**: `number`

Defined in: scrypt-ts/dist/bsv/abstract-signer.d.ts:14

The previous output satoshis value of the input to spend.

***

### scriptHex?

> `optional` **scriptHex**: `string`

Defined in: scrypt-ts/dist/bsv/abstract-signer.d.ts:18

The previous output script of input, default value is a P2PKH locking script for the `address` if omitted.

***

### sigHashType?

> `optional` **sigHashType**: `number`

Defined in: scrypt-ts/dist/bsv/abstract-signer.d.ts:20

The sighash type, default value is `SIGHASH_ALL | SIGHASH_FORKID` if omitted.
