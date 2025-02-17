[**bitcoinjs-lib v1.0.7**](../README.md)

***

[bitcoinjs-lib](../README.md) / getEccLib

# Function: getEccLib()

> **getEccLib**(): [`TinySecp256k1Interface`](../namespaces/types/interfaces/TinySecp256k1Interface.md)

Defined in: [ts\_src/ecc\_lib.ts:31](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/ecc_lib.ts#L31)

Retrieves the ECC Library instance.
Throws an error if the ECC Library is not provided.
You must call initEccLib() with a valid TinySecp256k1Interface instance before calling this function.

## Returns

[`TinySecp256k1Interface`](../namespaces/types/interfaces/TinySecp256k1Interface.md)

The ECC Library instance.

## Throws

Error if the ECC Library is not provided.
