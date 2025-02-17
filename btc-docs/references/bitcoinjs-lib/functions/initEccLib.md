[**bitcoinjs-lib v1.0.7**](../README.md)

***

[bitcoinjs-lib](../README.md) / initEccLib

# Function: initEccLib()

> **initEccLib**(`eccLib`): `void`

Defined in: [ts\_src/ecc\_lib.ts:13](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/ecc_lib.ts#L13)

Initializes the ECC library with the provided instance.
If `eccLib` is `undefined`, the library will be cleared.
If `eccLib` is a new instance, it will be verified before setting it as the active library.

## Parameters

### eccLib

The instance of the ECC library to initialize.

`undefined` | [`TinySecp256k1Interface`](../namespaces/types/interfaces/TinySecp256k1Interface.md)

## Returns

`void`
