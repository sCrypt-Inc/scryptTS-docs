[**scrypt-ts**](../README.md)

***

[scrypt-ts](../globals.md) / ContractTransaction

# Interface: ContractTransaction

Defined in: scrypt-ts/dist/smart-contract/types/contract-call.d.ts:59

A structure describing a transaction that invokes a single contract.

## Properties

### atInputIndex

> **atInputIndex**: `number`

Defined in: scrypt-ts/dist/smart-contract/types/contract-call.d.ts:63

The input index of previous contract UTXO to spend in the method calling tx

***

### next?

> `optional` **next**: [`StatefulNext`](StatefulNext.md)\<`any`\>

Defined in: scrypt-ts/dist/smart-contract/types/contract-call.d.ts:67

The first element of nexts, this value should be set for user convenience.

***

### nexts

> **nexts**: [`StatefulNext`](StatefulNext.md)\<`any`\>[]

Defined in: scrypt-ts/dist/smart-contract/types/contract-call.d.ts:65

The subsequent contract instance(s) produced in the outputs of the method calling tx in a stateful contract

***

### tx

> **tx**: [`Transaction`](../@scrypt-inc/bsv/classes/Transaction.md)

Defined in: scrypt-ts/dist/smart-contract/types/contract-call.d.ts:61

The method calling tx
