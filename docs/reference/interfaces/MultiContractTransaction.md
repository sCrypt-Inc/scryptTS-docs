[**scrypt-ts**](../README.md)

***

[scrypt-ts](../globals.md) / MultiContractTransaction

# Interface: MultiContractTransaction

Defined in: scrypt-ts/dist/smart-contract/types/contract-call.d.ts:70

A structure describing a transaction that invokes multiple contracts.

## Properties

### atInputIndices

> **atInputIndices**: `number`[]

Defined in: scrypt-ts/dist/smart-contract/types/contract-call.d.ts:74

The input indices of previous contract UTXOs to spend in the method calling tx

***

### nexts

> **nexts**: [`StatefulNext`](StatefulNext.md)\<`any`\>[]

Defined in: scrypt-ts/dist/smart-contract/types/contract-call.d.ts:76

The subsequent contract instance(s) produced in the outputs of the method calling tx in a stateful contract

***

### tx

> **tx**: [`Transaction`](../@scrypt-inc/bsv/classes/Transaction.md)

Defined in: scrypt-ts/dist/smart-contract/types/contract-call.d.ts:72

The method calling tx
