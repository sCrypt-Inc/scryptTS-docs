scrypt-ts

# scrypt-ts

## Table of contents

### Namespaces

- [bsv](modules/bsv.md)

### Enumerations

- [ProviderEvent](enums/ProviderEvent.md)
- [SignatureHashType](enums/SignatureHashType.md)

### Other Classes

- [ActionError](classes/ActionError.md)
- [BsvApi](classes/BsvApi.md)
- [ContractApi](classes/ContractApi.md)
- [DefaultProvider](classes/DefaultProvider.md)
- [DotwalletSigner](classes/DotwalletSigner.md)
- [DummyProvider](classes/DummyProvider.md)
- [FunctionCall](classes/FunctionCall.md)
- [GorillapoolProvider](classes/GorillapoolProvider.md)
- [Provider](classes/Provider.md)
- [ScryptProvider](classes/ScryptProvider.md)
- [SensibleProvider](classes/SensibleProvider.md)
- [SensiletSigner](classes/SensiletSigner.md)
- [Signer](classes/Signer.md)
- [TAALSigner](classes/TAALSigner.md)
- [TaalProvider](classes/TaalProvider.md)
- [TestWallet](classes/TestWallet.md)
- [WhatsonchainProvider](classes/WhatsonchainProvider.md)

### SmartContract Classes

- [SmartContract](classes/SmartContract.md)
- [SmartContractLib](classes/SmartContractLib.md)

### Standard Contracts Classes

- [Constants](classes/Constants.md)
- [HashedMap](classes/HashedMap.md)
- [HashedSet](classes/HashedSet.md)
- [OpCode](classes/OpCode.md)
- [SigHash](classes/SigHash.md)
- [Utils](classes/Utils.md)
- [VarIntReader](classes/VarIntReader.md)
- [VarIntWriter](classes/VarIntWriter.md)

### Interfaces

- [Artifact](interfaces/Artifact.md)
- [ContractCalledEvent](interfaces/ContractCalledEvent.md)
- [ContractTransaction](interfaces/ContractTransaction.md)
- [DefaultProviderOption](interfaces/DefaultProviderOption.md)
- [LogConfig](interfaces/LogConfig.md)
- [MethodCallOptions](interfaces/MethodCallOptions.md)
- [MethodCallTxBuilder](interfaces/MethodCallTxBuilder.md)
- [MultiContractCallOptions](interfaces/MultiContractCallOptions.md)
- [MultiContractTransaction](interfaces/MultiContractTransaction.md)
- [Outpoint](interfaces/Outpoint.md)
- [RequestConfig](interfaces/RequestConfig.md)
- [ScriptContext](interfaces/ScriptContext.md)
- [ScryptConfig](interfaces/ScryptConfig.md)
- [SignTransactionOptions](interfaces/SignTransactionOptions.md)
- [SignatureRequest](interfaces/SignatureRequest.md)
- [SignatureResponse](interfaces/SignatureResponse.md)
- [StatefulNext](interfaces/StatefulNext.md)
- [SubScription](interfaces/SubScription.md)
- [SubscribeOptions](interfaces/SubscribeOptions.md)
- [TransactionResponse](interfaces/TransactionResponse.md)
- [TxContext](interfaces/TxContext.md)
- [TxInputRef](interfaces/TxInputRef.md)
- [TxOutputRef](interfaces/TxOutputRef.md)
- [UtxoQueryOptions](interfaces/UtxoQueryOptions.md)
- [VerifyResult](interfaces/VerifyResult.md)

### Array Type Aliases

- [FixedArray](README.md#fixedarray)

### Other Type Aliases

- [Addr](README.md#addr)
- [AddressOption](README.md#addressoption)
- [AddressesOption](README.md#addressesoption)
- [ByteString](README.md#bytestring)
- [ContractId](README.md#contractid)
- [LogLevel](README.md#loglevel)
- [Network](README.md#network)
- [OpCodeType](README.md#opcodetype)
- [PrivKey](README.md#privkey)
- [PubKey](README.md#pubkey)
- [PubKeyHash](README.md#pubkeyhash)
- [PublicKeyOption](README.md#publickeyoption)
- [PublicKeysOption](README.md#publickeysoption)
- [PublicKeysOrAddressesOption](README.md#publickeysoraddressesoption)
- [Ripemd160](README.md#ripemd160)
- [Sha1](README.md#sha1)
- [Sha256](README.md#sha256)
- [Sig](README.md#sig)
- [SigHashPreimage](README.md#sighashpreimage)
- [SigHashType](README.md#sighashtype)
- [SignatureOption](README.md#signatureoption)
- [SignaturesOption](README.md#signaturesoption)
- [SubBytes](README.md#subbytes)
- [TxHash](README.md#txhash)
- [UTXO](README.md#utxo)

### Types Type Aliases

- [auto](README.md#auto)

### Variables

- [Scrypt](README.md#scrypt)

### Bitwise Operator Functions

- [lshift](README.md#lshift)
- [rshift](README.md#rshift)

### Bytes Operations Functions

- [byteString2Int](README.md#bytestring2int)
- [int2ByteString](README.md#int2bytestring)
- [len](README.md#len)
- [reverseByteString](README.md#reversebytestring)

### Global Function Functions

- [equals](README.md#equals)

### Hashing Functions

- [hash160](README.md#hash160)
- [hash256](README.md#hash256)
- [pubKey2Addr](README.md#pubkey2addr)
- [ripemd160](README.md#ripemd160-2)
- [sha1](README.md#sha1-2)
- [sha256](README.md#sha256-2)

### Math Functions

- [abs](README.md#abs)
- [max](README.md#max)
- [min](README.md#min)
- [within](README.md#within)

### Other Functions

- [Addr](README.md#addr-1)
- [OpCodeType](README.md#opcodetype-1)
- [PrivKey](README.md#privkey-1)
- [PubKey](README.md#pubkey-1)
- [PubKeyHash](README.md#pubkeyhash-1)
- [Ripemd160](README.md#ripemd160-1)
- [Sha1](README.md#sha1-1)
- [Sha256](README.md#sha256-1)
- [Sig](README.md#sig-1)
- [SigHashPreimage](README.md#sighashpreimage-1)
- [SigHashType](README.md#sighashtype-1)
- [alterFileExt](README.md#alterfileext)
- [and](README.md#and)
- [buildOpreturnScript](README.md#buildopreturnscript)
- [buildPublicKeyHashScript](README.md#buildpublickeyhashscript)
- [camelCaseCapitalized](README.md#camelcasecapitalized)
- [fill](README.md#fill)
- [filterUTXO](README.md#filterutxo)
- [findSig](README.md#findsig)
- [findSigs](README.md#findsigs)
- [fromByteString](README.md#frombytestring)
- [getDummyP2pkhUTXOs](README.md#getdummyp2pkhutxos)
- [getDummySig](README.md#getdummysig)
- [getRandomAddress](README.md#getrandomaddress)
- [getSortedItem](README.md#getsorteditem)
- [invert](README.md#invert)
- [isInNodeEnv](README.md#isinnodeenv)
- [mapIter](README.md#mapiter)
- [or](README.md#or)
- [parseAddresses](README.md#parseaddresses)
- [parseSignatureOption](README.md#parsesignatureoption)
- [slice](README.md#slice)
- [toByteString](README.md#tobytestring)
- [toHex](README.md#tohex)
- [toNumber](README.md#tonumber)
- [utxoFromOutput](README.md#utxofromoutput)
- [xor](README.md#xor)

### assert Functions

- [assert](README.md#assert)

### decorator Functions

- [method](README.md#method)
- [prop](README.md#prop)

## Array Type Aliases

### FixedArray

Ƭ **FixedArray**<`T`, `N`\>: `GrowToSize`<`T`, `N`, []\>

An array is a fixed-size list of values of the same basic type.
When you declare an array you have to declare it like this:

**`Example`**

```ts
let aaa: FixedArray<bigint, 3> = [1n, 3n, 3n];

let abb: FixedArray<FixedArray<bigint, 2>, 3> = [[1n, 3n], [1n, 3n], [1n, 3n]];

let bbb: FixedArray<FixedArray<FixedArray<bigint, 1>, 2>, 3> = [[[1n], [1n]], [[1n], [1n]], [[1n], [1n]]];
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `N` | extends `number` |

#### Defined in

dist/smart-contract/builtins/types.d.ts:118

___

## Other Type Aliases

### Addr

Ƭ **Addr**: `_PubKeyHash`

A domain specific subtype of `ByteString`, representing an address.

#### Defined in

dist/smart-contract/builtins/types.d.ts:75

dist/smart-contract/builtins/types.d.ts:37

___

### AddressOption

Ƭ **AddressOption**: [`Address`](classes/bsv.Address.md)

#### Defined in

dist/bsv/types.d.ts:5

___

### AddressesOption

Ƭ **AddressesOption**: [`AddressOption`](README.md#addressoption) \| [`AddressOption`](README.md#addressoption)[]

#### Defined in

dist/bsv/types.d.ts:6

___

### ByteString

Ƭ **ByteString**: `Flavor`<`string`, ``"bytes"``\>

a ByteString represents a byte array.

#### Defined in

dist/smart-contract/builtins/types.d.ts:89

___

### ContractId

Ƭ **ContractId**: `Object`

ContractId is a unique identifier for a contract.
It is the outpoint referenced by the deployment transaction id and the output index.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `outputIndex` | `number` | The output index |
| `txId` | `string` | The deployment transaction id |

#### Defined in

dist/client/core/types.d.ts:10

___

### LogLevel

Ƭ **LogLevel**: ``"verbose"`` \| ``"debug"`` \| ``"info"`` \| ``"warning"`` \| ``"error"`` \| ``"off"``

#### Defined in

dist/client/core/logger-controller.d.ts:2

___

### Network

Ƭ **Network**: [`Network`](interfaces/bsv.Networks.Network.md)

#### Defined in

dist/bsv/types.d.ts:4

___

### OpCodeType

Ƭ **OpCodeType**: `Bytes` & { `__type`: ``"OpCodeType"``  }

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:88

node_modules/scryptlib/dist/scryptTypes.d.ts:61

___

### PrivKey

Ƭ **PrivKey**: `Int` & { `__type`: ``"PrivKey"``  }

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:69

node_modules/scryptlib/dist/scryptTypes.d.ts:36

___

### PubKey

Ƭ **PubKey**: `_PubKey`

A domain specific subtype of `ByteString`, representing a public key.

#### Defined in

dist/smart-contract/builtins/types.d.ts:51

dist/smart-contract/builtins/types.d.ts:21

___

### PubKeyHash

Ƭ **PubKeyHash**: `_PubKeyHash`

A domain specific subtype of `ByteString`, representing an address.

#### Defined in

dist/smart-contract/builtins/types.d.ts:69

dist/smart-contract/builtins/types.d.ts:33

___

### PublicKeyOption

Ƭ **PublicKeyOption**: [`PublicKey`](classes/bsv.PublicKey.md)

#### Defined in

dist/bsv/types.d.ts:7

___

### PublicKeysOption

Ƭ **PublicKeysOption**: [`PublicKeyOption`](README.md#publickeyoption) \| [`PublicKeyOption`](README.md#publickeyoption)[]

#### Defined in

dist/bsv/types.d.ts:8

___

### PublicKeysOrAddressesOption

Ƭ **PublicKeysOrAddressesOption**: [`AddressesOption`](README.md#addressesoption) \| [`PublicKeysOption`](README.md#publickeysoption)

#### Defined in

dist/bsv/types.d.ts:9

___

### Ripemd160

Ƭ **Ripemd160**: `_Ripemd160`

A domain specific subtype of `ByteString`, representing a RIPEMD-160 hash.

#### Defined in

dist/smart-contract/builtins/types.d.ts:63

dist/smart-contract/builtins/types.d.ts:29

___

### Sha1

Ƭ **Sha1**: `_Sha1`

A domain specific subtype of `ByteString`, representing a SHA-1 hash.

#### Defined in

dist/smart-contract/builtins/types.d.ts:81

dist/smart-contract/builtins/types.d.ts:45

___

### Sha256

Ƭ **Sha256**: `_Sha256`

A domain specific subtype of `ByteString`, representing a SHA-256 hash.

#### Defined in

dist/smart-contract/builtins/types.d.ts:87

dist/smart-contract/builtins/types.d.ts:41

___

### Sig

Ƭ **Sig**: `_Sig`

A domain specific subtype of `ByteString`, representing a signature.

#### Defined in

dist/smart-contract/builtins/types.d.ts:57

dist/smart-contract/builtins/types.d.ts:25

___

### SigHashPreimage

Ƭ **SigHashPreimage**: `Bytes` & { `__type`: ``"SigHashPreimage"``  }

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:87

node_modules/scryptlib/dist/scryptTypes.d.ts:58

___

### SigHashType

Ƭ **SigHashType**: `Bytes` & { `__type`: ``"SigHashType"``  }

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:86

node_modules/scryptlib/dist/scryptTypes.d.ts:55

___

### SignatureOption

Ƭ **SignatureOption**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `csIdx?` | `number` | Index of the OP_CODESEPARATOR to split the previous output script at during verification. If undefined, the whole script is used. |
| `pubKeyOrAddr` | [`PublicKeysOrAddressesOption`](README.md#publickeysoraddressesoption) | - |
| `sigHashType?` | [`SignatureHashType`](enums/SignatureHashType.md) | - |

#### Defined in

dist/bsv/types.d.ts:10

___

### SignaturesOption

Ƭ **SignaturesOption**: [`SignatureOption`](README.md#signatureoption) \| [`SignatureOption`](README.md#signatureoption)[]

#### Defined in

dist/bsv/types.d.ts:19

___

### SubBytes

Ƭ **SubBytes**: `PubKey` \| `Sig` \| `Sha256` \| `Sha1` \| [`SigHashType`](README.md#sighashtype) \| `Ripemd160` \| [`OpCodeType`](README.md#opcodetype)

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:95

___

### TxHash

Ƭ **TxHash**: `string`

#### Defined in

dist/bsv/abstract-provider.d.ts:7

___

### UTXO

Ƭ **UTXO**: [`IUnspentOutput`](interfaces/bsv.Transaction.IUnspentOutput.md)

#### Defined in

dist/bsv/types.d.ts:3

___

## Types Type Aliases

### auto

Ƭ **auto**: `any`

The auto keyword specifies that the type of the variable, of basic type, declared will be automatically deducted from its initializer.

#### Defined in

dist/smart-contract/builtins/types.d.ts:102

## Variables

### Scrypt

• `Const` **Scrypt**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `bsvApi` | [`BsvApi`](classes/BsvApi.md) |
| `contractApi` | [`ContractApi`](classes/ContractApi.md) |
| `getConfig` | <T\>(`name`: `string`, `defaultValue?`: `T`) => `T` |
| `init` | (`config`: [`ScryptConfig`](interfaces/ScryptConfig.md)) => `void` |

#### Defined in

dist/client/index.d.ts:4

## Bitwise Operator Functions

### lshift

▸ **lshift**(`x`, `n`): `bigint`

Arithmetic left shift, returns `x * 2^n`.
More detail about [Bitwise Operator][https://docs.scrypt.io/how-to-write-a-contract/built-ins#bitwise-operator](https://docs.scrypt.io/how-to-write-a-contract/built-ins#bitwise-operator)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `bigint` |
| `n` | `bigint` |

#### Returns

`bigint`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:149

___

### rshift

▸ **rshift**(`x`, `n`): `bigint`

Arithmetic right shift, returns `x / 2^n`.
More detail about [Bitwise Operator][https://docs.scrypt.io/how-to-write-a-contract/built-ins#bitwise-operator](https://docs.scrypt.io/how-to-write-a-contract/built-ins#bitwise-operator)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `bigint` |
| `n` | `bigint` |

#### Returns

`bigint`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:155

___

## Bytes Operations Functions

### byteString2Int

▸ **byteString2Int**(`a`): `bigint`

ByteString can be converted to bigint using function byteString2Int.

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ByteString`](README.md#bytestring) |

#### Returns

`bigint`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:32

___

### int2ByteString

▸ **int2ByteString**(`n`, `size?`): [`ByteString`](README.md#bytestring)

bigint can be converted to string with int2ByteString.
If `size` is not passed, the number `n` is converted to a ByteString with as few bytes as possible.
Otherwise, converts the number `n` to a ByteString of the specified size, including the sign bit. Fails if the number cannot be accommodated.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `n` | `bigint` | a number being converts |
| `size?` | `bigint` | the size of the ByteString |

#### Returns

[`ByteString`](README.md#bytestring)

#### Defined in

dist/smart-contract/builtins/functions.d.ts:27

___

### len

▸ **len**(`a`): `bigint`

Returns the length of the ByteString. Not the length of the string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`ByteString`](README.md#bytestring) | a ByteString |

#### Returns

`bigint`

The length of the ByteString.

#### Defined in

dist/smart-contract/builtins/functions.d.ts:39

___

### reverseByteString

▸ **reverseByteString**(`b`, `size`): [`ByteString`](README.md#bytestring)

Returns reversed bytes of b, which is of size bytes. Note size must be a compiled-time constant.
It is often useful when converting a number between little-endian and big-endian.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `b` | [`ByteString`](README.md#bytestring) | a ByteString to be reversed |
| `size` | `bigint` | the size of the ByteString. |

#### Returns

[`ByteString`](README.md#bytestring)

reversed ByteString.

#### Defined in

dist/smart-contract/builtins/functions.d.ts:48

___

## Global Function Functions

### equals

▸ **equals**<`T`\>(`a`, `b`): `boolean`

Comparing two struct/FixedArray

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `T` |
| `b` | `T` |

#### Returns

`boolean`

returns true if equal; otherwise returns false

#### Defined in

dist/smart-contract/builtins/types.d.ts:124

___

## Hashing Functions

### hash160

▸ **hash160**(`a`): `Ripemd160`

A RIPEMD160 hash of a SHA256 hash, which is always 160 bits or 20 bytes long.
This value is commonly used inside Bitcoin, particularly for Bitcoin
addresses.

See:
https://en.wikipedia.org/wiki/RIPEMD

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`ByteString`](README.md#bytestring) | ByteString Data, a.k.a. pre-image, which can be any size. |

#### Returns

`Ripemd160`

The hash in the form of a string.

#### Defined in

dist/smart-contract/builtins/functions.d.ts:117

___

### hash256

▸ **hash256**(`a`): `Sha256`

A double SHA256 hash, which is always 256 bits or 32 bytes bytes long. This
hash function is commonly used inside Bitcoin, particularly for the hash of a
block and the hash of a transaction.

See:
https://www.movable-type.co.uk/scripts/sha256.html

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`ByteString`](README.md#bytestring) | ByteString data, a.k.a. pre-image, which can be any size. |

#### Returns

`Sha256`

The hash in the form of a string.

#### Defined in

dist/smart-contract/builtins/functions.d.ts:129

___

### pubKey2Addr

▸ **pubKey2Addr**(`a`): [`Addr`](README.md#addr)

Get Addr for PubKey.
Under the hood this just wraps the hash160 function.

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `PubKey` |

#### Returns

[`Addr`](README.md#addr)

address for the passed public key.

#### Defined in

dist/smart-contract/builtins/functions.d.ts:137

___

### ripemd160

▸ **ripemd160**(`a`): `Ripemd160`

A RIPEMD160 hash, which is always 160 bits or 20 bytes long.
See:
https://en.wikipedia.org/wiki/RIPEMD

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`ByteString`](README.md#bytestring) | ByteString Data, a.k.a. pre-image, which can be any size. |

#### Returns

`Ripemd160`

The hash in the form of a ByteString.

#### Defined in

dist/smart-contract/builtins/functions.d.ts:85

___

### sha1

▸ **sha1**(`a`): `Sha1`

A SHA or SHA1 hash, which is always 160 bits or 20 bytes long.

See:
https://en.wikipedia.org/wiki/SHA-1

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`ByteString`](README.md#bytestring) | ByteString Data, a.k.a. pre-image, which can be any size. |

#### Returns

`Sha1`

The hash in the form of a string.

#### Defined in

dist/smart-contract/builtins/functions.d.ts:95

___

### sha256

▸ **sha256**(`a`): `Sha256`

A SHA256 hash, which is always 256 bits or 32 bytes long.

See:
https://www.movable-type.co.uk/scripts/sha256.html

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`ByteString`](README.md#bytestring) | ByteString Data, a.k.a. pre-image, which can be any size. |

#### Returns

`Sha256`

The hash in the form of a string.

#### Defined in

dist/smart-contract/builtins/functions.d.ts:105

___

## Math Functions

### abs

▸ **abs**(`a`): `bigint`

The input `a` is made positive.

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `bigint` |

#### Returns

`bigint`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:61

___

### max

▸ **max**(`a`, `b`): `bigint`

Returns the largest of `a` and `b`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `bigint` |
| `b` | `bigint` |

#### Returns

`bigint`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:71

___

### min

▸ **min**(`a`, `b`): `bigint`

Returns the smallest of `a` and `b`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `bigint` |
| `b` | `bigint` |

#### Returns

`bigint`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:66

___

### within

▸ **within**(`x`, `min`, `max`): `boolean`

Returns true if `x` is within the specified range (left-inclusive), false otherwise.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `bigint` |
| `min` | `bigint` |
| `max` | `bigint` |

#### Returns

`boolean`

#### Defined in

dist/smart-contract/builtins/functions.d.ts:76

___

## Other Functions

### Addr

▸ **Addr**(`b`): [`Addr`](README.md#addr)

Creates an `Addr` instance from a `ByteString`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `b` | [`ByteString`](README.md#bytestring) | Input ByteString. |

#### Returns

[`Addr`](README.md#addr)

- A domain specific address representation.

#### Defined in

dist/smart-contract/builtins/types.d.ts:75

___

### OpCodeType

▸ **OpCodeType**(`b`): [`OpCodeType`](README.md#opcodetype)

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `Bytes` |

#### Returns

[`OpCodeType`](README.md#opcodetype)

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:88

___

### PrivKey

▸ **PrivKey**(`n`): [`PrivKey`](README.md#privkey)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `Int` |

#### Returns

[`PrivKey`](README.md#privkey)

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:69

___

### PubKey

▸ **PubKey**(`b`): [`PubKey`](README.md#pubkey)

Creates a `PubKey` instance from a `ByteString`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `b` | [`ByteString`](README.md#bytestring) | Input ByteString. |

#### Returns

[`PubKey`](README.md#pubkey)

- A domain specific public key representation.

#### Defined in

dist/smart-contract/builtins/types.d.ts:51

___

### PubKeyHash

▸ **PubKeyHash**(`b`): [`PubKeyHash`](README.md#pubkeyhash)

Creates a `PubKeyHash` instance from a `ByteString`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `b` | [`ByteString`](README.md#bytestring) | Input ByteString. |

#### Returns

[`PubKeyHash`](README.md#pubkeyhash)

- A domain specific address representation.

#### Defined in

dist/smart-contract/builtins/types.d.ts:69

___

### Ripemd160

▸ **Ripemd160**(`b`): [`Ripemd160`](README.md#ripemd160)

Creates a `Ripemd160` instance from a `ByteString`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `b` | [`ByteString`](README.md#bytestring) | Input ByteString. |

#### Returns

[`Ripemd160`](README.md#ripemd160)

- A domain specific RIPEMD-160 hash representation.

#### Defined in

dist/smart-contract/builtins/types.d.ts:63

___

### Sha1

▸ **Sha1**(`b`): [`Sha1`](README.md#sha1)

Creates a `Sha1` instance from a `ByteString`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `b` | [`ByteString`](README.md#bytestring) | Input ByteString. |

#### Returns

[`Sha1`](README.md#sha1)

- A domain specific SHA-1 hash representation.

#### Defined in

dist/smart-contract/builtins/types.d.ts:81

___

### Sha256

▸ **Sha256**(`b`): [`Sha256`](README.md#sha256)

Creates a `Sha256` instance from a `ByteString`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `b` | [`ByteString`](README.md#bytestring) | Input ByteString. |

#### Returns

[`Sha256`](README.md#sha256)

- A domain specific SHA-256 hash representation.

#### Defined in

dist/smart-contract/builtins/types.d.ts:87

___

### Sig

▸ **Sig**(`b`): [`Sig`](README.md#sig)

Creates a `Sig` instance from a `ByteString`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `b` | [`ByteString`](README.md#bytestring) | Input ByteString. |

#### Returns

[`Sig`](README.md#sig)

- A domain specific digital signature representation.

#### Defined in

dist/smart-contract/builtins/types.d.ts:57

___

### SigHashPreimage

▸ **SigHashPreimage**(`b`): [`SigHashPreimage`](README.md#sighashpreimage)

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `Bytes` |

#### Returns

[`SigHashPreimage`](README.md#sighashpreimage)

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:87

___

### SigHashType

▸ **SigHashType**(`s`): [`SigHashType`](README.md#sighashtype)

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | ``0`` \| [`SignatureHashType`](enums/SignatureHashType.md) |

#### Returns

[`SigHashType`](README.md#sighashtype)

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:86

___

### alterFileExt

▸ **alterFileExt**(`filename`, `toExt`, `fromExt?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `filename` | `string` |
| `toExt` | `string` |
| `fromExt?` | `string` |

#### Returns

`string`

#### Defined in

dist/smart-contract/utils/index.d.ts:11

___

### and

▸ **and**(`a`, `b`): `Int`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `Int` |
| `b` | `Int` |

#### Returns

`Int`

#### Defined in

node_modules/scryptlib/dist/builtins.d.ts:15

___

### buildOpreturnScript

▸ **buildOpreturnScript**(`data`): [`Script`](classes/bsv.Script-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |

#### Returns

[`Script`](classes/bsv.Script-1.md)

#### Defined in

node_modules/scryptlib/dist/builtins.d.ts:22

___

### buildPublicKeyHashScript

▸ **buildPublicKeyHashScript**(`pubKeyHash`): [`Script`](classes/bsv.Script-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pubKeyHash` | `Ripemd160` |

#### Returns

[`Script`](classes/bsv.Script-1.md)

#### Defined in

node_modules/scryptlib/dist/builtins.d.ts:23

___

### camelCaseCapitalized

▸ **camelCaseCapitalized**(`str`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`string`

#### Defined in

dist/smart-contract/utils/index.d.ts:12

___

### fill

▸ **fill**<`E`, `N`\>(`value`, `length`): [`FixedArray`](README.md#fixedarray)<`E`, `N`\>

Returns an `FixedArray` with all `size` elements set to `value`, where `value` can be any type.
Note that `length` must be a numeric literal or a compiled-time constant

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | `E` |
| `N` | extends `number` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `E` | the value of each element to set |
| `length` | `N` | the length of FixedArray |

#### Returns

[`FixedArray`](README.md#fixedarray)<`E`, `N`\>

#### Defined in

dist/smart-contract/builtins/functions.d.ts:18

___

### filterUTXO

▸ **filterUTXO**(`utxos`, `options`): [`IUnspentOutput`](interfaces/bsv.Transaction.IUnspentOutput.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `utxos` | [`IUnspentOutput`](interfaces/bsv.Transaction.IUnspentOutput.md)[] |
| `options` | [`UtxoQueryOptions`](interfaces/UtxoQueryOptions.md) |

#### Returns

[`IUnspentOutput`](interfaces/bsv.Transaction.IUnspentOutput.md)[]

#### Defined in

dist/bsv/utils.d.ts:12

___

### findSig

▸ **findSig**(`sigResponses`, `pubKeyOrAddr`, `sigHashType?`): [`Sig`](README.md#sig)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sigResponses` | [`SignatureResponse`](interfaces/SignatureResponse.md)[] |
| `pubKeyOrAddr` | [`PublicKey`](classes/bsv.PublicKey.md) \| [`Address`](classes/bsv.Address.md) |
| `sigHashType?` | [`SignatureHashType`](enums/SignatureHashType.md) |

#### Returns

[`Sig`](README.md#sig)

#### Defined in

dist/smart-contract/utils/index.d.ts:7

___

### findSigs

▸ **findSigs**(`sigResponses`, `queries`): [`Sig`](README.md#sig)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `sigResponses` | [`SignatureResponse`](interfaces/SignatureResponse.md)[] |
| `queries` | ([`PublicKey`](classes/bsv.PublicKey.md) \| [`Address`](classes/bsv.Address.md) \| [`SignatureOption`](README.md#signatureoption))[] |

#### Returns

[`Sig`](README.md#sig)[]

#### Defined in

dist/smart-contract/utils/index.d.ts:8

___

### fromByteString

▸ **fromByteString**(`bs`): `string`

convert ByteString to utf8 string

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bs` | [`ByteString`](README.md#bytestring) | ByteString |

#### Returns

`string`

utf8 string

#### Defined in

dist/smart-contract/utils/index.d.ts:18

___

### getDummyP2pkhUTXOs

▸ **getDummyP2pkhUTXOs**(`count?`): [`UTXO`](README.md#utxo)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `count?` | `number` |

#### Returns

[`UTXO`](README.md#utxo)[]

#### Defined in

dist/bsv/utils.d.ts:4

___

### getDummySig

▸ **getDummySig**(): [`Sig`](README.md#sig)

#### Returns

[`Sig`](README.md#sig)

#### Defined in

dist/smart-contract/utils/index.d.ts:5

___

### getRandomAddress

▸ **getRandomAddress**(`network?`): [`Address`](classes/bsv.Address.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `network?` | [`Network`](interfaces/bsv.Networks.Network.md) |

#### Returns

[`Address`](classes/bsv.Address.md)

#### Defined in

dist/bsv/utils.d.ts:5

___

### getSortedItem

▸ **getSortedItem**<`K`, `V`\>(`collection`, `k`): `SortedItem`<`K`\>

#### Type parameters

| Name |
| :------ |
| `K` |
| `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `collection` | `Map`<`K`, `V`\> \| `Set`<`K`\> |
| `k` | `K` |

#### Returns

`SortedItem`<`K`\>

#### Defined in

node_modules/scryptlib/dist/scryptTypes.d.ts:93

___

### invert

▸ **invert**(`a`): `Int`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `Int` |

#### Returns

`Int`

#### Defined in

node_modules/scryptlib/dist/builtins.d.ts:18

___

### isInNodeEnv

▸ **isInNodeEnv**(): `boolean`

#### Returns

`boolean`

#### Defined in

dist/smart-contract/utils/index.d.ts:10

___

### mapIter

▸ **mapIter**<`T`\>(`iterable`, `callback`): `Generator`<`any`, `void`, `unknown`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `iterable` | `IterableIterator`<`T`\> |
| `callback` | (`x`: `any`) => `any` |

#### Returns

`Generator`<`any`, `void`, `unknown`\>

#### Defined in

dist/smart-contract/utils/index.d.ts:9

___

### or

▸ **or**(`a`, `b`): `Int`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `Int` |
| `b` | `Int` |

#### Returns

`Int`

#### Defined in

node_modules/scryptlib/dist/builtins.d.ts:16

___

### parseAddresses

▸ **parseAddresses**(`publicKeysOrAddresses`, `network`): [`AddressOption`](README.md#addressoption)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKeysOrAddresses` | [`PublicKeysOrAddressesOption`](README.md#publickeysoraddressesoption) |
| `network` | [`Network`](interfaces/bsv.Networks.Network.md) |

#### Returns

[`AddressOption`](README.md#addressoption)[]

#### Defined in

dist/bsv/utils.d.ts:7

___

### parseSignatureOption

▸ **parseSignatureOption**(`signaturesOption`, `network`): { `address`: [`AddressOption`](README.md#addressoption) ; `sigHashType`: [`SignatureHashType`](enums/SignatureHashType.md)  }[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `signaturesOption` | [`PublicKeysOrAddressesOption`](README.md#publickeysoraddressesoption) \| [`SignaturesOption`](README.md#signaturesoption) |
| `network` | [`Network`](interfaces/bsv.Networks.Network.md) |

#### Returns

{ `address`: [`AddressOption`](README.md#addressoption) ; `sigHashType`: [`SignatureHashType`](enums/SignatureHashType.md)  }[]

#### Defined in

dist/bsv/utils.d.ts:8

___

### slice

▸ **slice**(`byteString`, `start`, `end?`): [`ByteString`](README.md#bytestring)

Returns a section of a ByteString.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `byteString` | [`ByteString`](README.md#bytestring) | The ByteString. |
| `start` | `BigInt` | The beginning byte index of the specified portion of ByteString, included. |
| `end?` | `BigInt` | The end byte index of the specified portion of ByteString, excluded. If this value is not specified, the sub-section continues to the end of ByteString. |

#### Returns

[`ByteString`](README.md#bytestring)

#### Defined in

dist/smart-contract/builtins/functions.d.ts:11

___

### toByteString

▸ **toByteString**(`literal`, `isUtf8?`): [`ByteString`](README.md#bytestring)

Converts a literal to ByteString.
If not passing `isUtf8` or `isUtf8` is false, then `literal` should be in the format of hex literal, i.e. `/^([0-9a-fA-F]{2})*$/`
Otherwise, `literal` should be in the format of utf8 literal, i.e. `hello world`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `literal` | `string` | literal string, can be hex literal or utf8 literal, depends on the `isUtf8` marker |
| `isUtf8?` | `boolean` | marker indicating whether `literal` is utf8 or hex |

#### Returns

[`ByteString`](README.md#bytestring)

#### Defined in

dist/smart-contract/builtins/types.d.ts:97

___

### toHex

▸ **toHex**(`x`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `Object` |
| `x.toString` | (`format`: ``"hex"``) => `string` |

#### Returns

`string`

#### Defined in

node_modules/scryptlib/dist/utils.d.ts:18

___

### toNumber

▸ **toNumber**(`sighashType`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sighashType` | [`SigHashType`](README.md#sighashtype) |

#### Returns

`number`

#### Defined in

dist/smart-contract/utils/index.d.ts:6

___

### utxoFromOutput

▸ **utxoFromOutput**(`tx`, `outputIndex`): [`UTXO`](README.md#utxo)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tx` | [`Transaction`](classes/bsv.Transaction-1.md) |
| `outputIndex` | `number` |

#### Returns

[`UTXO`](README.md#utxo)

#### Defined in

dist/bsv/utils.d.ts:6

___

### xor

▸ **xor**(`a`, `b`): `Int`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `Int` |
| `b` | `Int` |

#### Returns

`Int`

#### Defined in

node_modules/scryptlib/dist/builtins.d.ts:17

___

## assert Functions

### assert

▸ **assert**(`condition`, `msg?`): asserts condition

`assert(condition: boolean, errorMsg?: string)`
Throw an Error with the optional error message if condition is false. Otherwise, nothing happens.

#### Parameters

| Name | Type |
| :------ | :------ |
| `condition` | `boolean` |
| `msg?` | `string` |

#### Returns

asserts condition

#### Defined in

dist/smart-contract/builtins/functions.d.ts:143

___

## decorator Functions

### method

▸ **method**(`sigHashType?`): (`target`: `any`, `methodName`: `string`, `descriptor`: `PropertyDescriptor`) => `PropertyDescriptor`

Indicates whether the method is a contract method, and ordinary methods do not affect the execution of the contract

#### Parameters

| Name | Type |
| :------ | :------ |
| `sigHashType?` | [`SigHashType`](README.md#sighashtype) |

#### Returns

`fn`

▸ (`target`, `methodName`, `descriptor`): `PropertyDescriptor`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |
| `methodName` | `string` |
| `descriptor` | `PropertyDescriptor` |

##### Returns

`PropertyDescriptor`

#### Defined in

dist/smart-contract/decorators.d.ts:17

___

### prop

▸ **prop**(`state?`): (`target`: `any`, `propertyName`: `string`) => `void`

Indicates whether the property is an property of a contract, and ordinary class properties cannot be accessed in contract methods

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state?` | `boolean` | Whether the property is a property of a stateful contract |

#### Returns

`fn`

▸ (`target`, `propertyName`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |
| `propertyName` | `string` |

##### Returns

`void`

#### Defined in

dist/smart-contract/decorators.d.ts:31
