[**scrypt-ts**](../README.md)

***

[scrypt-ts](../globals.md) / StatefulNext

# Interface: StatefulNext\<T\>

Defined in: scrypt-ts/dist/smart-contract/types/contract-call.d.ts:7

Contains information about the new state of a set of stateful contracts, used to construct transactions in the transaction builder.

## Type Parameters

• **T**

## Properties

### atOutputIndex

> **atOutputIndex**: `number`

Defined in: scrypt-ts/dist/smart-contract/types/contract-call.d.ts:13

The index of the subsequent contract output in the method calling tx

***

### balance

> **balance**: `number`

Defined in: scrypt-ts/dist/smart-contract/types/contract-call.d.ts:11

Satoshis of the subsequent contract output in the method calling tx

***

### instance

> **instance**: `T`

Defined in: scrypt-ts/dist/smart-contract/types/contract-call.d.ts:9

The subsequent stateful contract instance
