[scrypt-ts](../README.md) / ProviderEvent

# Enumeration: ProviderEvent

The provider is an EventEmitter, and the following are all the events it can emit.
https://stackoverflow.com/a/50511773

## Table of contents

### Enumeration Members

- [Connected](ProviderEvent.md#connected)
- [NetworkChange](ProviderEvent.md#networkchange)

## Enumeration Members

### Connected

• **Connected** = ``"connected"``

The provider will send a 'Connected' event after the connection is successful.

#### Defined in

dist/bsv/abstract-provider.d.ts:24

___

### NetworkChange

• **NetworkChange** = ``"networkChange"``

After the network connected to the provider changes, it will issue the 'NetworkChange' event, such as switching from the testnet to the mainnet.

#### Defined in

dist/bsv/abstract-provider.d.ts:26
