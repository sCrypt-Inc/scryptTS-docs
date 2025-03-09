[**scrypt-ts**](../README.md)

***

[scrypt-ts](../globals.md) / SubscribeOptions

# Interface: SubscribeOptions\<T\>

Defined in: scrypt-ts/dist/client/apis/contract-api.d.ts:6

A options can be used to subscribe

## Type Parameters

• **T**

## Properties

### clazz()

> **clazz**: (...`args`) => `T`

Defined in: scrypt-ts/dist/client/apis/contract-api.d.ts:10

Contract typescript class

#### Parameters

##### args

...`any`

#### Returns

`T`

***

### id

> **id**: [`ContractId`](../type-aliases/ContractId.md)

Defined in: scrypt-ts/dist/client/apis/contract-api.d.ts:8

Contract id

***

### methodNames?

> `optional` **methodNames**: `string`[]

Defined in: scrypt-ts/dist/client/apis/contract-api.d.ts:12

Use `methodNames` to specify that only receive events when specific methods are called. The default is to notify when all methods are called
