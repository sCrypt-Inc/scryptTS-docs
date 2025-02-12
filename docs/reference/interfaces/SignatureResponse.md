[**scrypt-ts**](../README.md)

***

[scrypt-ts](../globals.md) / SignatureResponse

# Interface: SignatureResponse

Defined in: scrypt-ts/dist/bsv/abstract-signer.d.ts:32

`SignatureResponse` contains the signing result corresponding to a `SignatureRequest`.

## Properties

### csIdx?

> `optional` **csIdx**: `number`

Defined in: scrypt-ts/dist/bsv/abstract-signer.d.ts:42

The index of the OP_CODESEPARATOR to split the previous output script at.

***

### inputIndex

> **inputIndex**: `number`

Defined in: scrypt-ts/dist/bsv/abstract-signer.d.ts:34

The index of input.

***

### publicKey

> **publicKey**: `string`

Defined in: scrypt-ts/dist/bsv/abstract-signer.d.ts:38

The public key bound with the `sig`.

***

### sig

> **sig**: `string`

Defined in: scrypt-ts/dist/bsv/abstract-signer.d.ts:36

The signature.

***

### sigHashType

> **sigHashType**: `number`

Defined in: scrypt-ts/dist/bsv/abstract-signer.d.ts:40

The sighash type, default value is `SIGHASH_ALL | SIGHASH_FORKID` if omitted.
