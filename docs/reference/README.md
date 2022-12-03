# scryptTS

## Table of contents

### SmartContract Classes

- [SmartContract](classes/SmartContract.md)

### Standard Contracts Classes

- [Constants](classes/Constants.md)
- [OpCode](classes/OpCode.md)
- [SigHash](classes/SigHash.md)
- [Tx](classes/Tx.md)
- [Utils](classes/Utils.md)
- [VarIntReader](classes/VarIntReader.md)
- [VarIntWriter](classes/VarIntWriter.md)

### Types Classes

- [OpCodeType](classes/OpCodeType.md)
- [PrivKey](classes/PrivKey.md)
- [PubKey](classes/PubKey.md)
- [PubKeyHash](classes/PubKeyHash.md)
- [Ripemd160](classes/Ripemd160.md)
- [Sha1](classes/Sha1.md)
- [Sha256](classes/Sha256.md)
- [Sig](classes/Sig.md)
- [SigHashPreimage](classes/SigHashPreimage.md)
- [SigHashType](classes/SigHashType.md)

### Array Type Aliases

- [FixedArray](README.md#fixedarray)

### Other Type Aliases

- [TxOutputRef](README.md#txoutputref)

### Types Type Aliases

- [auto](README.md#auto)

### Bytes Operations Functions

- [len](README.md#len)
- [num2bin](README.md#num2bin)
- [pack](README.md#pack)
- [reverseBytes](README.md#reversebytes)
- [unpack](README.md#unpack)

### Hashing Functions

- [hash160](README.md#hash160)
- [hash256](README.md#hash256)
- [ripemd160](README.md#ripemd160)
- [sha1](README.md#sha1)
- [sha256](README.md#sha256)

### Math Functions

- [abs](README.md#abs)
- [max](README.md#max)
- [min](README.md#min)
- [within](README.md#within)

### Other Functions

- [hexToString](README.md#hextostring)
- [utf8ToString](README.md#utf8tostring)

### Signature Verification Functions

- [checkMultiSig](README.md#checkmultisig)

### assert Functions

- [assert](README.md#assert)

### decorator Functions

- [method](README.md#method)
- [prop](README.md#prop)

### exit() Functions

- [exit](README.md#exit)

## Array Type Aliases

### FixedArray

Ƭ **FixedArray**<`T`, `LEN`\>: `GrowToSize`<`T`, [], `LEN`\>

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
| `LEN` | extends `number` |

#### Defined in

[src/builtins/types.ts:80](https://github.com/sCrypt-Inc/ts-sCrypt/blob/c724703/src/builtins/types.ts#L80)

___

## Other Type Aliases

### TxOutputRef

Ƭ **TxOutputRef**: `Object`

The transaction output point bound by the smart contract

#### Type declaration

| Name | Type |
| :------ | :------ |
| `outputIndex` | `number` |
| `tx` | `bsv.Transaction` |

#### Defined in

[src/contract.ts:24](https://github.com/sCrypt-Inc/ts-sCrypt/blob/c724703/src/contract.ts#L24)

___

## Types Type Aliases

### auto

Ƭ **auto**: `any`

The auto keyword specifies that the type of the variable, of basic type, declared will be automatically deducted from its initializer.

#### Defined in

[src/builtins/types.ts:55](https://github.com/sCrypt-Inc/ts-sCrypt/blob/c724703/src/builtins/types.ts#L55)

## Bytes Operations Functions

### len

▸ **len**(`a`): `number`

Returns the length of the string bytes. Not the length of the string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `string` | a string |

#### Returns

`number`

The length of the string bytes.

#### Defined in

[src/builtins/functions.ts:43](https://github.com/sCrypt-Inc/ts-sCrypt/blob/c724703/src/builtins/functions.ts#L43)

___

### num2bin

▸ **num2bin**(`num`, `size`): `string`

Converts a number num into a string array of certain size size, including the sign bit. It fails if the number cannot be accommodated.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `num` | `bigint` | a number being converts |
| `size` | `bigint` | the size of the result string array |

#### Returns

`string`

A string .

#### Defined in

[src/builtins/functions.ts:33](https://github.com/sCrypt-Inc/ts-sCrypt/blob/c724703/src/builtins/functions.ts#L33)

___

### pack

▸ **pack**(`n`): `string`

bigint can be converted to string with pack

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `bigint` |

#### Returns

`string`

#### Defined in

[src/builtins/functions.ts:12](https://github.com/sCrypt-Inc/ts-sCrypt/blob/c724703/src/builtins/functions.ts#L12)

___

### reverseBytes

▸ **reverseBytes**(`b`, `size`): `string`

Returns reversed bytes of b, which is of size bytes. Note size must be a compile time constant. It is often useful when converting a number between little-endian and big-endian.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `b` | `string` | a string to be reversed |
| `size` | `number` | the size of the string bytes. |

#### Returns

`string`

The length of the string bytes.

#### Defined in

[src/builtins/functions.ts:53](https://github.com/sCrypt-Inc/ts-sCrypt/blob/c724703/src/builtins/functions.ts#L53)

___

### unpack

▸ **unpack**(`a`): `bigint`

string can be converted to bigint using function unpack.

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `string` |

#### Returns

`bigint`

#### Defined in

[src/builtins/functions.ts:21](https://github.com/sCrypt-Inc/ts-sCrypt/blob/c724703/src/builtins/functions.ts#L21)

___

## Hashing Functions

### hash160

▸ **hash160**(`a`): `string`

A RIPEMD160 hash of a SHA256 hash, which is always 160 bits or 20 bytes long.
This value is commonly used inside Bitcoin, particularly for Bitcoin
addresses.

See:
https://en.wikipedia.org/wiki/RIPEMD

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `string` |

#### Returns

`string`

The hash in the form of a string.

#### Defined in

[src/builtins/functions.ts:169](https://github.com/sCrypt-Inc/ts-sCrypt/blob/c724703/src/builtins/functions.ts#L169)

___

### hash256

▸ **hash256**(`a`): `string`

A double SHA256 hash, which is always 256 bits or 32 bytes bytes long. This
hash function is commonly used inside Bitcoin, particularly for the hash of a
block and the hash of a transaction.

See:
https://www.movable-type.co.uk/scripts/sha256.html

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `string` |

#### Returns

`string`

The hash in the form of a string.

#### Defined in

[src/builtins/functions.ts:184](https://github.com/sCrypt-Inc/ts-sCrypt/blob/c724703/src/builtins/functions.ts#L184)

___

### ripemd160

▸ **ripemd160**(`a`): `string`

A RIPEMD160 hash, which is always 160 bits or 20 bytes long.
See:
https://en.wikipedia.org/wiki/RIPEMD

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `string` |

#### Returns

`string`

The hash in the form of a string.

#### Defined in

[src/builtins/functions.ts:127](https://github.com/sCrypt-Inc/ts-sCrypt/blob/c724703/src/builtins/functions.ts#L127)

___

### sha1

▸ **sha1**(`a`): `string`

A SHA or SHA1 hash, which is always 160 bits or 20 bytes long.

See:
https://en.wikipedia.org/wiki/SHA-1

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `string` |

#### Returns

`string`

The hash in the form of a string.

#### Defined in

[src/builtins/functions.ts:140](https://github.com/sCrypt-Inc/ts-sCrypt/blob/c724703/src/builtins/functions.ts#L140)

___

### sha256

▸ **sha256**(`a`): `string`

A SHA256 hash, which is always 256 bits or 32 bytes long.

See:
https://www.movable-type.co.uk/scripts/sha256.html

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `string` |

#### Returns

`string`

The hash in the form of a string.

#### Defined in

[src/builtins/functions.ts:154](https://github.com/sCrypt-Inc/ts-sCrypt/blob/c724703/src/builtins/functions.ts#L154)

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

[src/builtins/functions.ts:88](https://github.com/sCrypt-Inc/ts-sCrypt/blob/c724703/src/builtins/functions.ts#L88)

___

### max

▸ **max**(`a`, `b`): `bigint`

Returns the larger of `a` and `b`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `bigint` |
| `b` | `bigint` |

#### Returns

`bigint`

#### Defined in

[src/builtins/functions.ts:107](https://github.com/sCrypt-Inc/ts-sCrypt/blob/c724703/src/builtins/functions.ts#L107)

___

### min

▸ **min**(`a`, `b`): `bigint`

Returns the smaller of `a` and `b`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `bigint` |
| `b` | `bigint` |

#### Returns

`bigint`

#### Defined in

[src/builtins/functions.ts:99](https://github.com/sCrypt-Inc/ts-sCrypt/blob/c724703/src/builtins/functions.ts#L99)

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

[src/builtins/functions.ts:115](https://github.com/sCrypt-Inc/ts-sCrypt/blob/c724703/src/builtins/functions.ts#L115)

___

## Other Functions

### hexToString

▸ **hexToString**(`hexStr`): `string`

Converts a hex literal to string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hexStr` | `string` | should be in format of hex literal, i.e. `/^([0-9a-fA-F]{2})*$/` |

#### Returns

`string`

#### Defined in

[src/builtins/types.ts:19](https://github.com/sCrypt-Inc/ts-sCrypt/blob/c724703/src/builtins/types.ts#L19)

___

### utf8ToString

▸ **utf8ToString**(`str`): `string`

Converts a utf8 literal to string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`string`

#### Defined in

[src/builtins/types.ts:46](https://github.com/sCrypt-Inc/ts-sCrypt/blob/c724703/src/builtins/types.ts#L46)

___

## Signature Verification Functions

### checkMultiSig

▸ **checkMultiSig**(`signatures`, `publickeys`): `boolean`

Compares the first signature against each public key until it finds an ECDSA match. Starting with the subsequent public key, it compares the second signature against each remaining public key until it finds an ECDSA match. The process is repeated until all signatures have been checked or not enough public keys remain to produce a successful result. All signatures need to match a public key. Because public keys are not checked again if they fail any signature comparison, signatures must be placed in the scriptSig using the same order as their corresponding public keys were placed in the scriptPubKey or redeemScript. If all signatures are valid, 1 is returned, 0 otherwise. Due to a bug, one extra unused value is removed from the stack.

**`See`**

https://wiki.bitcoinsv.io/index.php/Opcodes_used_in_Bitcoin_Script

#### Parameters

| Name | Type |
| :------ | :------ |
| `signatures` | [`Sig`](classes/Sig.md)[] |
| `publickeys` | [`PubKey`](classes/PubKey.md)[] |

#### Returns

`boolean`

#### Defined in

[src/builtins/functions.ts:70](https://github.com/sCrypt-Inc/ts-sCrypt/blob/c724703/src/builtins/functions.ts#L70)

___

## assert Functions

### assert

▸ **assert**(`cond`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cond` | `boolean` |

#### Returns

`void`

#### Defined in

[src/builtins/functions.ts:196](https://github.com/sCrypt-Inc/ts-sCrypt/blob/c724703/src/builtins/functions.ts#L196)

___

## decorator Functions

### method

▸ **method**(`target`, `methodName`, `descriptor`): `PropertyDescriptor`

Indicates whether the method is a contract method, and ordinary methods do not affect the execution of the contract

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |
| `methodName` | `string` |
| `descriptor` | `PropertyDescriptor` |

#### Returns

`PropertyDescriptor`

#### Defined in

[src/decorators.ts:7](https://github.com/sCrypt-Inc/ts-sCrypt/blob/c724703/src/decorators.ts#L7)

___

### prop

▸ **prop**(`state?`): (`target`: `any`, `propertyName`: `string`) => `void`

Indicates whether the property is an property of a contract, and ordinary class properties cannot be accessed in contract methods

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `state` | `boolean` | `false` | Whether the property is a property of a stateful contract |

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

[src/decorators.ts:51](https://github.com/sCrypt-Inc/ts-sCrypt/blob/c724703/src/decorators.ts#L51)

___

## exit() Functions

### exit

▸ **exit**(`status`): `void`

`exit(bool status)`; statement terminates contract execution.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `status` | `boolean` | If status is true, contract succeeds; otherwise, it fails. |

#### Returns

`void`

#### Defined in

[src/builtins/functions.ts:81](https://github.com/sCrypt-Inc/ts-sCrypt/blob/c724703/src/builtins/functions.ts#L81)
