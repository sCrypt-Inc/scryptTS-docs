[**scrypt-ts**](../README.md)

***

[scrypt-ts](../globals.md) / ProviderEvent

# Enumeration: ProviderEvent

Defined in: scrypt-ts/dist/bsv/abstract-provider.d.ts:22

The provider is an EventEmitter, and the following are all the events it can emit.
https://stackoverflow.com/a/50511773

## Enumeration Members

### Connected

> **Connected**: `"connected"`

Defined in: scrypt-ts/dist/bsv/abstract-provider.d.ts:24

The provider will send a 'Connected' event after the connection is successful.

***

### NetworkChange

> **NetworkChange**: `"networkChange"`

Defined in: scrypt-ts/dist/bsv/abstract-provider.d.ts:26

After the network connected to the provider changes, it will issue the 'NetworkChange' event, such as switching from the testnet to the mainnet.
