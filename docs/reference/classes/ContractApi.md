[scrypt-ts](../README.md) / ContractApi

# Class: ContractApi

## Table of contents

### Constructors

- [constructor](ContractApi.md#constructor)

### Properties

- [\_core](ContractApi.md#_core)

### Methods

- [getLatestInstance](ContractApi.md#getlatestinstance)
- [subscribe](ContractApi.md#subscribe)

## Constructors

### constructor

• **new ContractApi**(`_core`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_core` | `Core` |

#### Defined in

dist/client/apis/contract-api.d.ts:34

## Properties

### \_core

• `Private` `Readonly` **\_core**: `any`

#### Defined in

dist/client/apis/contract-api.d.ts:33

## Methods

### getLatestInstance

▸ **getLatestInstance**<`T`\>(`clazz`, `contractId`): `Promise`<`T`\>

Get a contract instance containing the latest state of the contract by the contract ID.
The obtained contract instance may also be obtained by other users at the same time.
If other users call this contract instance. Then the contract instance will be invalid.
At this time, calling the contract will cause a `txn-mempool-conflict` error (that is, UTXO double spending).
If this error occurs, you need to re-acquire the contract instance

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`SmartContract`](SmartContract.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `clazz` | (...`args`: `any`) => `T` |
| `contractId` | [`ContractId`](../README.md#contractid) |

#### Returns

`Promise`<`T`\>

a contract instance contains latest state

#### Defined in

dist/client/apis/contract-api.d.ts:47

___

### subscribe

▸ **subscribe**<`T`\>(`options`, `cb`): [`SubScription`](../interfaces/SubScription.md)

Subscribe to notifications of contract status changes by contract ID,

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`SmartContract`](SmartContract.md)<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`SubscribeOptions`](../interfaces/SubscribeOptions.md)<`T`\> | SubscribeOptions |
| `cb` | (`e`: [`ContractCalledEvent`](../interfaces/ContractCalledEvent.md)<`T`\>) => `void` |  |

#### Returns

[`SubScription`](../interfaces/SubScription.md)

a SubScription, which can be used to unsubscribe

#### Defined in

dist/client/apis/contract-api.d.ts:54
