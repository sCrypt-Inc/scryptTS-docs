[**scrypt-ts**](../README.md)

***

[scrypt-ts](../globals.md) / ActionError

# Class: ActionError

Defined in: scrypt-ts/dist/client/core/action-resolver.d.ts:4

## Extends

- `Error`

## Constructors

### new ActionError()

> **new ActionError**(`statusCode`, `message`): [`ActionError`](ActionError.md)

Defined in: scrypt-ts/dist/client/core/action-resolver.d.ts:7

#### Parameters

##### statusCode

`number`

##### message

`string`

#### Returns

[`ActionError`](ActionError.md)

#### Overrides

`Error.constructor`

## Properties

### cause?

> `optional` **cause**: `unknown`

Defined in: typescript/lib/lib.es2022.error.d.ts:26

#### Inherited from

`Error.cause`

***

### message

> **message**: `string`

Defined in: scrypt-ts/dist/client/core/action-resolver.d.ts:6

#### Overrides

`Error.message`

***

### name

> **name**: `string`

Defined in: typescript/lib/lib.es5.d.ts:1076

#### Inherited from

`Error.name`

***

### stack?

> `optional` **stack**: `string`

Defined in: typescript/lib/lib.es5.d.ts:1078

#### Inherited from

`Error.stack`

***

### statusCode

> **statusCode**: `number`

Defined in: scrypt-ts/dist/client/core/action-resolver.d.ts:5

***

### prepareStackTrace()?

> `static` `optional` **prepareStackTrace**: (`err`, `stackTraces`) => `any`

Defined in: @types/node/globals.d.ts:143

Optional override for formatting stack traces

#### Parameters

##### err

`Error`

##### stackTraces

`CallSite`[]

#### Returns

`any`

#### See

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Inherited from

`Error.prepareStackTrace`

***

### stackTraceLimit

> `static` **stackTraceLimit**: `number`

Defined in: @types/node/globals.d.ts:145

#### Inherited from

`Error.stackTraceLimit`

## Methods

### captureStackTrace()

> `static` **captureStackTrace**(`targetObject`, `constructorOpt`?): `void`

Defined in: @types/node/globals.d.ts:136

Create .stack property on a target object

#### Parameters

##### targetObject

`object`

##### constructorOpt?

`Function`

#### Returns

`void`

#### Inherited from

`Error.captureStackTrace`
