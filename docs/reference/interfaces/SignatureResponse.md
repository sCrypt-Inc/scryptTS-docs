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

[src/bsv/abstract-signer.ts:28](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/bsv/abstract-signer.ts#L28)

___

### publicKey

• **publicKey**: `string`

The public key bound with the `sig`.

#### Defined in

[src/bsv/abstract-signer.ts:32](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/bsv/abstract-signer.ts#L32)

___

### sig

• **sig**: `string`

The signature.

#### Defined in

[src/bsv/abstract-signer.ts:30](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/bsv/abstract-signer.ts#L30)

___

### sigHashType

• **sigHashType**: `number`

The sighash type, default value is `SIGHASH_ALL | SIGHASH_FORKID` if omitted.

#### Defined in

[src/bsv/abstract-signer.ts:34](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/bsv/abstract-signer.ts#L34)
