[**bitcoinjs-lib v1.0.7**](../../../README.md)

***

[bitcoinjs-lib](../../../README.md) / [script](../README.md) / findAndDelete

# Function: findAndDelete()

> **findAndDelete**(`script`, `subScript`): `number`

Defined in: [ts\_src/script.ts:391](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/script.ts#L391)

Analogous to bitcoind's FindAndDelete. Find and delete equivalent chunks,
typically used with push data chunks.  Note that this will find and delete
not just the same data, but the same data with the same push data op as
produced by default. i.e., if a pushdata in a tx does not use the minimal
pushdata op, then when you try to remove the data it is pushing, it will not
be removed, because they do not use the same pushdata op.

## Parameters

### script

(`number` \| `Uint8Array`)[]

### subScript

`Uint8Array`

## Returns

`number`
