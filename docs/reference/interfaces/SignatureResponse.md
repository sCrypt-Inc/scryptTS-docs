[scrypt-ts](../README.md) / SignatureResponse

# Interface: SignatureResponse

`SignatureResponse` contains the signing result corresponding to a `SignatureRequest`.

## Table of contents

### Properties

- [csIdx](SignatureResponse.md#csidx)
- [inputIndex](SignatureResponse.md#inputindex)
- [publicKey](SignatureResponse.md#publickey)
- [sig](SignatureResponse.md#sig)
- [sigHashType](SignatureResponse.md#sighashtype)

## Properties

### csIdx

• `Optional` **csIdx**: `number`

The index of the OP_CODESEPARATOR to split the previous output script at.

#### Defined in

dist/bsv/abstract-signer.d.ts:41

___

### inputIndex

• **inputIndex**: `number`

The index of input.

#### Defined in

dist/bsv/abstract-signer.d.ts:33

___

### publicKey

• **publicKey**: `string`

The public key bound with the `sig`.

#### Defined in

dist/bsv/abstract-signer.d.ts:37

___

### sig

• **sig**: `string`

The signature.

#### Defined in

dist/bsv/abstract-signer.d.ts:35

___

### sigHashType

• **sigHashType**: `number`

The sighash type, default value is `SIGHASH_ALL | SIGHASH_FORKID` if omitted.

#### Defined in

dist/bsv/abstract-signer.d.ts:39
