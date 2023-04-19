[scrypt-ts](../README.md) / SubscribeOptions

# Interface: SubscribeOptions<T\>

A options can be used to subscribe

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Properties

- [clazz](SubscribeOptions.md#clazz)
- [id](SubscribeOptions.md#id)
- [methodNames](SubscribeOptions.md#methodnames)

## Properties

### clazz

• **clazz**: (...`args`: `any`) => `T`

#### Type declaration

• **new clazz**(`...args`)

Contract typescript class

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any` |

#### Defined in

dist/client/apis/contract-api.d.ts:10

___

### id

• **id**: [`ContractId`](../README.md#contractid)

Contract id

#### Defined in

dist/client/apis/contract-api.d.ts:8

___

### methodNames

• `Optional` **methodNames**: `string`[]

Use `methodNames` to specify that only receive events when specific methods are called. The default is to notify when all methods are called

#### Defined in

dist/client/apis/contract-api.d.ts:12
