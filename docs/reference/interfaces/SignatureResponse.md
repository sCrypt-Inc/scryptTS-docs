[scrypt-ts](../README.md) / SignatureResponse

# Interface: SignatureResponse

`SignatureResponse` contains the signing result corresponding to a `SignatureRequest`.

## Table of contents

### Properties

- [inputIndex](SignatureResponse.md#inputindex)
- [publicKey](SignatureResponse.md#publickey)
- [sig](SignatureResponse.md#sig)
- [sigHashType](SignatureResponse.md#sighashtype)

## Properties

### inputIndex

• **inputIndex**: `number`

The index of input.

#### Defined in

dist/bsv/abstract-signer.d.ts:26

___

### publicKey

• **publicKey**: `string`

The public key bound with the `sig`.

#### Defined in

dist/bsv/abstract-signer.d.ts:30

___

### sig

• **sig**: `string`

The signature.

#### Defined in

dist/bsv/abstract-signer.d.ts:28

___

### sigHashType

• **sigHashType**: `number`

The sighash type, default value is `SIGHASH_ALL | SIGHASH_FORKID` if omitted.

#### Defined in

dist/bsv/abstract-signer.d.ts:32
