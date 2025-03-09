[**scrypt-ts**](../README.md)

***

[scrypt-ts](../globals.md) / pubKey2Addr

# Function: pubKey2Addr()

> **pubKey2Addr**(`a`): `Ripemd160`

Defined in: scrypt-ts/dist/smart-contract/builtins/functions.d.ts:137

Get Addr for PubKey.
Under the hood this just wraps the hash160 function.

## Parameters

### a

`PubKey`

## Returns

`Ripemd160`

address for the passed public key.
