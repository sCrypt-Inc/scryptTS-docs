[scrypt-ts](../README.md) / StatefulNext

# Interface: StatefulNext<T\>

Contains information about the new state of a set of stateful contracts, used to construct transactions in the transaction builder.

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Properties

- [atOutputIndex](StatefulNext.md#atoutputindex)
- [balance](StatefulNext.md#balance)
- [instance](StatefulNext.md#instance)

## Properties

### atOutputIndex

• **atOutputIndex**: `number`

The index of the subsequent contract output in the method calling tx

#### Defined in

dist/smart-contract/types/contract-call.d.ts:13

___

### balance

• **balance**: `number`

Satoshis of the subsequent contract output in the method calling tx

#### Defined in

dist/smart-contract/types/contract-call.d.ts:11

___

### instance

• **instance**: `T`

The subsequent stateful contract instance

#### Defined in

dist/smart-contract/types/contract-call.d.ts:9
