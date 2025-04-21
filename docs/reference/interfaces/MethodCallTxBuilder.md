[**scrypt-ts**](../README.md)

***

[scrypt-ts](../globals.md) / MethodCallTxBuilder

# Interface: MethodCallTxBuilder()\<T\>

Defined in: scrypt-ts/dist/smart-contract/types/contract-call.d.ts:83

A transaction builder.
The default transaction builder only supports fixed-format call transactions.
Some complex contracts require a custom transaction builder to successfully call the contract.

## Type Parameters

• **T** *extends* [`SmartContract`](../classes/SmartContract.md)

> **MethodCallTxBuilder**(`current`, `options`, ...`args`): `Promise`\<[`ContractTransaction`](ContractTransaction.md)\>

Defined in: scrypt-ts/dist/smart-contract/types/contract-call.d.ts:84

A transaction builder.
The default transaction builder only supports fixed-format call transactions.
Some complex contracts require a custom transaction builder to successfully call the contract.

## Parameters

### current

`T`

### options

[`MethodCallOptions`](MethodCallOptions.md)\<`T`\>

### args

...`any`

## Returns

`Promise`\<[`ContractTransaction`](ContractTransaction.md)\>
