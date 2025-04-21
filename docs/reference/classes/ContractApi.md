[**scrypt-ts**](../README.md)

***

[scrypt-ts](../globals.md) / ContractApi

# Class: ContractApi

Defined in: scrypt-ts/dist/client/apis/contract-api.d.ts:34

## Constructors

### new ContractApi()

> **new ContractApi**(`_core`): [`ContractApi`](ContractApi.md)

Defined in: scrypt-ts/dist/client/apis/contract-api.d.ts:36

#### Parameters

##### \_core

`Core`

#### Returns

[`ContractApi`](ContractApi.md)

## Methods

### getLatestInstance()

> **getLatestInstance**\<`T`\>(`clazz`, `contractId`): `Promise`\<`T`\>

Defined in: scrypt-ts/dist/client/apis/contract-api.d.ts:49

Get a contract instance containing the latest state of the contract by the contract ID.
The obtained contract instance may also be obtained by other users at the same time.
If other users call this contract instance. Then the contract instance will be invalid.
At this time, calling the contract will cause a `txn-mempool-conflict` error (that is, UTXO double spending).
If this error occurs, you need to re-acquire the contract instance

#### Type Parameters

• **T** *extends* [`SmartContract`](SmartContract.md)

#### Parameters

##### clazz

(...`args`) => `T`

##### contractId

[`ContractId`](../type-aliases/ContractId.md)

#### Returns

`Promise`\<`T`\>

a contract instance contains latest state

***

### subscribe()

> **subscribe**\<`T`\>(`options`, `cb`): [`SubScription`](../interfaces/SubScription.md)

Defined in: scrypt-ts/dist/client/apis/contract-api.d.ts:56

Subscribe to notifications of contract status changes by contract ID,

#### Type Parameters

• **T** *extends* [`SmartContract`](SmartContract.md)

#### Parameters

##### options

[`SubscribeOptions`](../interfaces/SubscribeOptions.md)\<`T`\>

SubscribeOptions

##### cb

(`e`) => `void`

#### Returns

[`SubScription`](../interfaces/SubScription.md)

a SubScription, which can be used to unsubscribe
