[scrypt-ts](../README.md) / MethodCallOptions

# Interface: MethodCallOptions

A option type to call a contract public `@method` function.
Used to specify the behavior of signers and transaction builders.
For example, specifying a transaction builder to use a specific change address or specifying a signer to use a specific public key to sign.

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Properties

- [autoPayFee](MethodCallOptions.md#autopayfee)
- [changeAddress](MethodCallOptions.md#changeaddress)
- [exec](MethodCallOptions.md#exec)
- [fromUTXO](MethodCallOptions.md#fromutxo)
- [lockTime](MethodCallOptions.md#locktime)
- [multiContractCall](MethodCallOptions.md#multicontractcall)
- [next](MethodCallOptions.md#next)
- [partialContractTx](MethodCallOptions.md#partialcontracttx)
- [partiallySigned](MethodCallOptions.md#partiallysigned)
- [pubKeyOrAddrToSign](MethodCallOptions.md#pubkeyoraddrtosign)
- [sequence](MethodCallOptions.md#sequence)
- [verify](MethodCallOptions.md#verify)

## Properties

### autoPayFee

• `Optional` `Readonly` **autoPayFee**: `boolean`

auto add utxo to pay transaction fee, default is true

#### Defined in

dist/smart-contract/types/contract-call.d.ts:48

___

### changeAddress

• `Optional` `Readonly` **changeAddress**: [`Address`](../classes/bsv.Address.md)

The P2PKH change output address

#### Defined in

dist/smart-contract/types/contract-call.d.ts:36

___

### exec

• `Optional` `Readonly` **exec**: `boolean`

execute a contract's public method to to check if arguments are valid, default is true

#### Defined in

dist/smart-contract/types/contract-call.d.ts:46

___

### fromUTXO

• `Optional` `Readonly` **fromUTXO**: [`IUnspentOutput`](bsv.Transaction.IUnspentOutput.md)

The previous contract UTXO to spend in the method calling tx

#### Defined in

dist/smart-contract/types/contract-call.d.ts:34

___

### lockTime

• `Optional` `Readonly` **lockTime**: `number`

The `lockTime` of the method calling tx

#### Defined in

dist/smart-contract/types/contract-call.d.ts:30

___

### multiContractCall

• `Optional` `Readonly` **multiContractCall**: `boolean`

Whether to call multiple contracts at the same time in one transaction

#### Defined in

dist/smart-contract/types/contract-call.d.ts:40

___

### next

```ts
• `Optional` `Readonly` **next**: [`StatefulNext`](StatefulNext.md)<`T`\> \| [`StatefulNext`](StatefulNext.md)<`T`\>[]
```

The subsequent contract instance(s) produced in the outputs of the method calling tx in a stateful contract

#### Defined in

dist/smart-contract/types/contract-call.d.ts:28

___

### partialContractTx

• `Optional` `Readonly` **partialContractTx**: [`ContractTransaction`](ContractTransaction.md)

Pass the `ContractTransaction` of the previous call as an argument to the next call, only used if `multiContractCall = true`.

#### Defined in

dist/smart-contract/types/contract-call.d.ts:42

___

### partiallySigned

• `Optional` `Readonly` **partiallySigned**: `boolean`

signer does not contain all private keys, it is used when multiple parties are required to perform signature authorization, default is false， only work in single call

#### Defined in

dist/smart-contract/types/contract-call.d.ts:44

___

### pubKeyOrAddrToSign

• `Optional` `Readonly` **pubKeyOrAddrToSign**: [`PublicKeysOrAddressesOption`](../README.md#publickeysoraddressesoption) \| [`SignaturesOption`](../README.md#signaturesoption)

The private key(s) associated with these address(es) or public key(s)
must be used to sign the contract input,
and the callback function will receive the results of the signatures as an argument named `sigResponses`

#### Defined in

dist/smart-contract/types/contract-call.d.ts:26

___

### sequence

• `Optional` `Readonly` **sequence**: `number`

The `sequence` of the input spending previous contract UTXO in the method calling tx

#### Defined in

dist/smart-contract/types/contract-call.d.ts:32

___

### verify

• `Optional` `Readonly` **verify**: `boolean`

verify transaction before send transaction

#### Defined in

dist/smart-contract/types/contract-call.d.ts:38
