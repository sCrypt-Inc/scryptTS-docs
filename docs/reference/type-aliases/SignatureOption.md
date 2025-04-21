[**scrypt-ts**](../README.md)

***

[scrypt-ts](../globals.md) / SignatureOption

# Type Alias: SignatureOption

> **SignatureOption**: `object`

Defined in: scrypt-ts/dist/bsv/types.d.ts:10

## Type declaration

### csIdx?

> `optional` **csIdx**: `number`

Index of the OP_CODESEPARATOR to split the previous output script at during verification.
If undefined, the whole script is used.

### data?

> `optional` **data**: `any`

The extra data of signature request that will be passed to the signer when signing

### pubKeyOrAddr

> **pubKeyOrAddr**: [`PublicKeysOrAddressesOption`](PublicKeysOrAddressesOption.md)

### sigHashType?

> `optional` **sigHashType**: [`SignatureHashType`](../enumerations/SignatureHashType.md)
