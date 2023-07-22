[scrypt-ts](../README.md) / ActionError

# Class: ActionError

## Hierarchy

- `Error`

  ↳ **`ActionError`**

## Table of contents

### Constructors

- [constructor](ActionError.md#constructor)

### Properties

- [message](ActionError.md#message)
- [name](ActionError.md#name)
- [stack](ActionError.md#stack)
- [statusCode](ActionError.md#statuscode)
- [prepareStackTrace](ActionError.md#preparestacktrace)
- [stackTraceLimit](ActionError.md#stacktracelimit)

### Methods

- [captureStackTrace](ActionError.md#capturestacktrace)

## Constructors

### constructor

• **new ActionError**(`statusCode`, `message`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `statusCode` | `number` |
| `message` | `string` |

#### Overrides

Error.constructor

#### Defined in

dist/client/core/action-resolver.d.ts:7

## Properties

### message

• **message**: `string`

#### Overrides

Error.message

#### Defined in

dist/client/core/action-resolver.d.ts:6

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1040

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1042

___

### statusCode

• **statusCode**: `number`

#### Defined in

dist/client/core/action-resolver.d.ts:5

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

#### Inherited from

Error.prepareStackTrace

#### Defined in

node_modules/@types/node/ts4.8/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Defined in

node_modules/@types/node/ts4.8/globals.d.ts:13

## Methods

### captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

Error.captureStackTrace

#### Defined in

node_modules/@types/node/ts4.8/globals.d.ts:4
