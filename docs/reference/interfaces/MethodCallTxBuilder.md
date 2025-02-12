[scrypt-ts](../README.md) / MethodCallTxBuilder

# Interface: MethodCallTxBuilder

A transaction builder.
The default transaction builder only supports fixed-format call transactions.
Some complex contracts require a custom transaction builder to successfully call the contract.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`SmartContract`](../classes/SmartContract.md) |

## Callable

### MethodCallTxBuilder

```ts
▸ **MethodCallTxBuilder**(`current`, `options`, `...args`): `Promise`<[`ContractTransaction`](ContractTransaction.md)\>
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `current` | `T` |
| `options` | `[`MethodCallOptions`](MethodCallOptions.md)<`T`\>` |
| `...args` | `any` |

#### Returns

```ts
`Promise`<[`ContractTransaction`](ContractTransaction.md)\>
```

#### Defined in

dist/smart-contract/types/contract-call.d.ts:84
