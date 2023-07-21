[scrypt-ts](../README.md) / SignatureRequest

# Interface: SignatureRequest

`SignatureRequest` contains required informations for a signer to sign a certain input of a transaction.

## Table of contents

### Properties

- [address](SignatureRequest.md#address)
- [csIdx](SignatureRequest.md#csidx)
- [data](SignatureRequest.md#data)
- [inputIndex](SignatureRequest.md#inputindex)
- [outputIndex](SignatureRequest.md#outputindex)
- [prevTxId](SignatureRequest.md#prevtxid)
- [satoshis](SignatureRequest.md#satoshis)
- [scriptHex](SignatureRequest.md#scripthex)
- [sigHashType](SignatureRequest.md#sighashtype)

## Properties

### address

• **address**: [`AddressesOption`](../README.md#addressesoption)

The address(es) of corresponding private key(s) required to sign the input.

#### Defined in

dist/bsv/abstract-signer.d.ts:15

___

### csIdx

• `Optional` **csIdx**: `number`

Index of the OP_CODESEPARATOR to split the previous output script at during verification.
If undefined, the whole script is used.

#### Defined in

dist/bsv/abstract-signer.d.ts:24

___

### data

• `Optional` **data**: `unknown`

The extra information for signing.

#### Defined in

dist/bsv/abstract-signer.d.ts:26

___

### inputIndex

• **inputIndex**: `number`

The index of input to sign.

#### Defined in

dist/bsv/abstract-signer.d.ts:11

___

### outputIndex

• **outputIndex**: `number`

#### Defined in

dist/bsv/abstract-signer.d.ts:9

___

### prevTxId

• **prevTxId**: `string`

#### Defined in

dist/bsv/abstract-signer.d.ts:8

___

### satoshis

• **satoshis**: `number`

The previous output satoshis value of the input to spend.

#### Defined in

dist/bsv/abstract-signer.d.ts:13

___

### scriptHex

• `Optional` **scriptHex**: `string`

The previous output script of input, default value is a P2PKH locking script for the `address` if omitted.

#### Defined in

dist/bsv/abstract-signer.d.ts:17

___

### sigHashType

• `Optional` **sigHashType**: `number`

The sighash type, default value is `SIGHASH_ALL | SIGHASH_FORKID` if omitted.

#### Defined in

dist/bsv/abstract-signer.d.ts:19
