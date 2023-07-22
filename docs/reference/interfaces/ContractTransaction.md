[scrypt-ts](../README.md) / ContractTransaction

# Interface: ContractTransaction

A structure describing a transaction that invokes a single contract.

## Table of contents

### Properties

- [atInputIndex](ContractTransaction.md#atinputindex)
- [next](ContractTransaction.md#next)
- [nexts](ContractTransaction.md#nexts)
- [tx](ContractTransaction.md#tx)

## Properties

### atInputIndex

• **atInputIndex**: `number`

The input index of previous contract UTXO to spend in the method calling tx

#### Defined in

dist/smart-contract/types/contract-call.d.ts:49

___

### next

• `Optional` **next**: [`StatefulNext`](StatefulNext.md)<`any`\>

The first element of nexts, this value should be set for user convenience.

#### Defined in

dist/smart-contract/types/contract-call.d.ts:53

___

### nexts

• **nexts**: [`StatefulNext`](StatefulNext.md)<`any`\>[]

The subsequent contract instance(s) produced in the outputs of the method calling tx in a stateful contract

#### Defined in

dist/smart-contract/types/contract-call.d.ts:51

___

### tx

• **tx**: [`Transaction`](../classes/bsv.Transaction-1.md)

The method calling tx

#### Defined in

dist/smart-contract/types/contract-call.d.ts:47
