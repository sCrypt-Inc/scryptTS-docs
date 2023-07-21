[scrypt-ts](../README.md) / MultiContractCallOptions

# Interface: MultiContractCallOptions

## Table of contents

### Properties

- [autoPayFee](MultiContractCallOptions.md#autopayfee)
- [partiallySigned](MultiContractCallOptions.md#partiallysigned)
- [verify](MultiContractCallOptions.md#verify)

## Properties

### autoPayFee

• `Optional` `Readonly` **autoPayFee**: `boolean`

auto add utxo to pay transaction fee, default is true

#### Defined in

dist/smart-contract/types/contract-call.d.ts:56

___

### partiallySigned

• `Optional` `Readonly` **partiallySigned**: `boolean`

signer does not contain all private keys, it is used when multiple parties are required to perform signature authorization, default is false， only work in single call

#### Defined in

dist/smart-contract/types/contract-call.d.ts:54

___

### verify

• `Optional` `Readonly` **verify**: `boolean`

verify transaction before send transaction

#### Defined in

dist/smart-contract/types/contract-call.d.ts:52
