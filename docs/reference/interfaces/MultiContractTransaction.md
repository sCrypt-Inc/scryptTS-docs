[scrypt-ts](../README.md) / MultiContractTransaction

# Interface: MultiContractTransaction

A structure describing a transaction that invokes multiple contracts.

## Table of contents

### Properties

- [atInputIndices](MultiContractTransaction.md#atinputindices)
- [nexts](MultiContractTransaction.md#nexts)
- [tx](MultiContractTransaction.md#tx)

## Properties

### atInputIndices

• **atInputIndices**: `number`[]

The input indices of previous contract UTXOs to spend in the method calling tx

#### Defined in

dist/smart-contract/types/contract-call.d.ts:60

___

### nexts

• **nexts**: [`StatefulNext`](StatefulNext.md)<`any`\>[]

The subsequent contract instance(s) produced in the outputs of the method calling tx in a stateful contract

#### Defined in

dist/smart-contract/types/contract-call.d.ts:62

___

### tx

• **tx**: [`Transaction`](../classes/bsv.Transaction-1.md)

The method calling tx

#### Defined in

dist/smart-contract/types/contract-call.d.ts:58
