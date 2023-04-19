[scrypt-ts](../README.md) / ScryptConfig

# Interface: ScryptConfig

## Hierarchy

- [`RequestConfig`](RequestConfig.md)

- [`LogConfig`](LogConfig.md)

  ↳ **`ScryptConfig`**

## Table of contents

### Properties

- [apiKey](ScryptConfig.md#apikey)
- [logLevel](ScryptConfig.md#loglevel)
- [maxRetries](ScryptConfig.md#maxretries)
- [network](ScryptConfig.md#network)
- [timeout](ScryptConfig.md#timeout)

## Properties

### apiKey

• **apiKey**: `string`

#### Inherited from

[RequestConfig](RequestConfig.md).[apiKey](RequestConfig.md#apikey)

#### Defined in

dist/client/core/request-controller.d.ts:12

___

### logLevel

• `Optional` **logLevel**: [`LogLevel`](../README.md#loglevel)

#### Inherited from

[LogConfig](LogConfig.md).[logLevel](LogConfig.md#loglevel)

#### Defined in

dist/client/core/logger-controller.d.ts:4

___

### maxRetries

• `Optional` **maxRetries**: `number`

#### Inherited from

[RequestConfig](RequestConfig.md).[maxRetries](RequestConfig.md#maxretries)

#### Defined in

dist/client/core/request-controller.d.ts:15

___

### network

• `Optional` **network**: ``"testnet"`` \| ``"mainnet"``

#### Inherited from

[RequestConfig](RequestConfig.md).[network](RequestConfig.md#network)

#### Defined in

dist/client/core/request-controller.d.ts:13

___

### timeout

• `Optional` **timeout**: `number`

#### Inherited from

[RequestConfig](RequestConfig.md).[timeout](RequestConfig.md#timeout)

#### Defined in

dist/client/core/request-controller.d.ts:14
