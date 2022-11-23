[scrypt-ts](README.md) / Exports

# scrypt-ts

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

- [FixedArray](modules.md#fixedarray)

### Other Type Aliases

- [TxOutputRef](modules.md#txoutputref)

### Types Type Aliases

- [auto](modules.md#auto)

### Bytes Operations Functions

- [len](modules.md#len)
- [num2bin](modules.md#num2bin)
- [pack](modules.md#pack)
- [reverseBytes](modules.md#reversebytes)
- [unpack](modules.md#unpack)

### Hashing Functions

- [hash160](modules.md#hash160)
- [hash256](modules.md#hash256)
- [ripemd160](modules.md#ripemd160)
- [sha1](modules.md#sha1)
- [sha256](modules.md#sha256)

### Math Functions

- [abs](modules.md#abs)
- [max](modules.md#max)
- [min](modules.md#min)
- [within](modules.md#within)

### Other Functions

- [b](modules.md#b)

### Signature Verification Functions

- [checkMultiSig](modules.md#checkmultisig)
- [checkSig](modules.md#checksig)

### assert Functions

- [assert](modules.md#assert)

### decorator Functions

- [method](modules.md#method)
- [prop](modules.md#prop)

### exit() Functions

- [exit](modules.md#exit)

### loop Functions

- [loop](modules.md#loop)

## Array Type Aliases

### FixedArray

Ƭ **FixedArray**<`T`, `N`\>: `GrowToSize`<`T`, [], `N`\>

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

[src/builtins/types.ts:69](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/builtins/types.ts#L69)

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

[src/contract.ts:23](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/contract.ts#L23)

___

## Types Type Aliases

### auto

Ƭ **auto**: `any`

The auto keyword specifies that the type of the variable, of basic type, declared will be automatically deducted from its initializer.

#### Defined in

[src/builtins/types.ts:44](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/builtins/types.ts#L44)

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

[src/builtins/functions.ts:43](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/builtins/functions.ts#L43)

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

[src/builtins/functions.ts:33](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/builtins/functions.ts#L33)

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

[src/builtins/functions.ts:12](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/builtins/functions.ts#L12)

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

[src/builtins/functions.ts:53](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/builtins/functions.ts#L53)

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

[src/builtins/functions.ts:21](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/builtins/functions.ts#L21)

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

[src/builtins/functions.ts:177](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/builtins/functions.ts#L177)

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

[src/builtins/functions.ts:192](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/builtins/functions.ts#L192)

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

[src/builtins/functions.ts:135](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/builtins/functions.ts#L135)

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

[src/builtins/functions.ts:148](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/builtins/functions.ts#L148)

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

[src/builtins/functions.ts:162](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/builtins/functions.ts#L162)

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

[src/builtins/functions.ts:96](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/builtins/functions.ts#L96)

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

[src/builtins/functions.ts:115](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/builtins/functions.ts#L115)

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

[src/builtins/functions.ts:107](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/builtins/functions.ts#L107)

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

[src/builtins/functions.ts:123](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/builtins/functions.ts#L123)

___

## Other Functions

### b

▸ **b**<`T`, `IsHexBytes`\>(`hexStr`): `string`

Represents a hex literal string.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` |
| `IsHexBytes` | `MatchesPattern`<``"10"`` \| ``"11"`` \| ``"12"`` \| ``"13"`` \| ``"14"`` \| ``"15"`` \| ``"16"`` \| ``"17"`` \| ``"18"`` \| ``"19"`` \| ``"20"`` \| ``"21"`` \| ``"ec"`` \| ``"BE"`` \| ``"ca"`` \| ``"be"`` \| ``"00"`` \| ``"01"`` \| ``"02"`` \| ``"03"`` \| ``"04"`` \| ``"05"`` \| ``"06"`` \| ``"07"`` \| ``"08"`` \| ``"09"`` \| ``"0d"`` \| ``"0e"`` \| ``"0A"`` \| ``"0a"`` \| ``"0b"`` \| ``"0c"`` \| ``"0f"`` \| ``"0B"`` \| ``"0C"`` \| ``"0D"`` \| ``"0E"`` \| ``"0F"`` \| ``"1d"`` \| ``"1e"`` \| ``"1A"`` \| ``"1a"`` \| ``"1b"`` \| ``"1c"`` \| ``"1f"`` \| ``"1B"`` \| ``"1C"`` \| ``"1D"`` \| ``"1E"`` \| ``"1F"`` \| ``"22"`` \| ``"23"`` \| ``"24"`` \| ``"25"`` \| ``"26"`` \| ``"27"`` \| ``"28"`` \| ``"29"`` \| ``"2d"`` \| ``"2e"`` \| ``"2A"`` \| ``"2a"`` \| ``"2b"`` \| ``"2c"`` \| ``"2f"`` \| ``"2B"`` \| ``"2C"`` \| ``"2D"`` \| ``"2E"`` \| ``"2F"`` \| ``"30"`` \| ``"31"`` \| ``"32"`` \| ``"33"`` \| ``"34"`` \| ``"35"`` \| ``"36"`` \| ``"37"`` \| ``"38"`` \| ``"39"`` \| ``"3d"`` \| ``"3e"`` \| ``"3A"`` \| ``"3a"`` \| ``"3b"`` \| ``"3c"`` \| ``"3f"`` \| ``"3B"`` \| ``"3C"`` \| ``"3D"`` \| ``"3E"`` \| ``"3F"`` \| ``"40"`` \| ``"41"`` \| ``"42"`` \| ``"43"`` \| ``"44"`` \| ``"45"`` \| ``"46"`` \| ``"47"`` \| ``"48"`` \| ``"49"`` \| ``"4d"`` \| ``"4e"`` \| ``"4A"`` \| ``"4a"`` \| ``"4b"`` \| ``"4c"`` \| ``"4f"`` \| ``"4B"`` \| ``"4C"`` \| ``"4D"`` \| ``"4E"`` \| ``"4F"`` \| ``"50"`` \| ``"51"`` \| ``"52"`` \| ``"53"`` \| ``"54"`` \| ``"55"`` \| ``"56"`` \| ``"57"`` \| ``"58"`` \| ``"59"`` \| ``"5d"`` \| ``"5e"`` \| ``"5A"`` \| ``"5a"`` \| ``"5b"`` \| ``"5c"`` \| ``"5f"`` \| ``"5B"`` \| ``"5C"`` \| ``"5D"`` \| ``"5E"`` \| ``"5F"`` \| ``"60"`` \| ``"61"`` \| ``"62"`` \| ``"63"`` \| ``"64"`` \| ``"65"`` \| ``"66"`` \| ``"67"`` \| ``"68"`` \| ``"69"`` \| ``"6d"`` \| ``"6e"`` \| ``"6A"`` \| ``"6a"`` \| ``"6b"`` \| ``"6c"`` \| ``"6f"`` \| ``"6B"`` \| ``"6C"`` \| ``"6D"`` \| ``"6E"`` \| ``"6F"`` \| ``"70"`` \| ``"71"`` \| ``"72"`` \| ``"73"`` \| ``"74"`` \| ``"75"`` \| ``"76"`` \| ``"77"`` \| ``"78"`` \| ``"79"`` \| ``"7d"`` \| ``"7e"`` \| ``"7A"`` \| ``"7a"`` \| ``"7b"`` \| ``"7c"`` \| ``"7f"`` \| ``"7B"`` \| ``"7C"`` \| ``"7D"`` \| ``"7E"`` \| ``"7F"`` \| ``"80"`` \| ``"81"`` \| ``"82"`` \| ``"83"`` \| ``"84"`` \| ``"85"`` \| ``"86"`` \| ``"87"`` \| ``"88"`` \| ``"89"`` \| ``"8d"`` \| ``"8e"`` \| ``"8A"`` \| ``"8a"`` \| ``"8b"`` \| ``"8c"`` \| ``"8f"`` \| ``"8B"`` \| ``"8C"`` \| ``"8D"`` \| ``"8E"`` \| ``"8F"`` \| ``"90"`` \| ``"91"`` \| ``"92"`` \| ``"93"`` \| ``"94"`` \| ``"95"`` \| ``"96"`` \| ``"97"`` \| ``"98"`` \| ``"99"`` \| ``"9d"`` \| ``"9e"`` \| ``"9A"`` \| ``"9a"`` \| ``"9b"`` \| ``"9c"`` \| ``"9f"`` \| ``"9B"`` \| ``"9C"`` \| ``"9D"`` \| ``"9E"`` \| ``"9F"`` \| ``"d0"`` \| ``"d1"`` \| ``"d2"`` \| ``"d3"`` \| ``"d4"`` \| ``"d5"`` \| ``"d6"`` \| ``"d7"`` \| ``"d8"`` \| ``"d9"`` \| ``"dd"`` \| ``"de"`` \| ``"dA"`` \| ``"da"`` \| ``"db"`` \| ``"dc"`` \| ``"df"`` \| ``"dB"`` \| ``"dC"`` \| ``"dD"`` \| ``"dE"`` \| ``"dF"`` \| ``"e0"`` \| ``"e1"`` \| ``"e2"`` \| ``"e3"`` \| ``"e4"`` \| ``"e5"`` \| ``"e6"`` \| ``"e7"`` \| ``"e8"`` \| ``"e9"`` \| ``"ed"`` \| ``"ee"`` \| ``"eA"`` \| ``"ea"`` \| ``"eb"`` \| ``"ef"`` \| ``"eB"`` \| ``"eC"`` \| ``"eD"`` \| ``"eE"`` \| ``"eF"`` \| ``"A0"`` \| ``"A1"`` \| ``"A2"`` \| ``"A3"`` \| ``"A4"`` \| ``"A5"`` \| ``"A6"`` \| ``"A7"`` \| ``"A8"`` \| ``"A9"`` \| ``"Ad"`` \| ``"Ae"`` \| ``"AA"`` \| ``"Aa"`` \| ``"Ab"`` \| ``"Ac"`` \| ``"Af"`` \| ``"AB"`` \| ``"AC"`` \| ``"AD"`` \| ``"AE"`` \| ``"AF"`` \| ``"a0"`` \| ``"a1"`` \| ``"a2"`` \| ``"a3"`` \| ``"a4"`` \| ``"a5"`` \| ``"a6"`` \| ``"a7"`` \| ``"a8"`` \| ``"a9"`` \| ``"ad"`` \| ``"ae"`` \| ``"aA"`` \| ``"aa"`` \| ``"ab"`` \| ``"ac"`` \| ``"af"`` \| ``"aB"`` \| ``"aC"`` \| ``"aD"`` \| ``"aE"`` \| ``"aF"`` \| ``"b0"`` \| ``"b1"`` \| ``"b2"`` \| ``"b3"`` \| ``"b4"`` \| ``"b5"`` \| ``"b6"`` \| ``"b7"`` \| ``"b8"`` \| ``"b9"`` \| ``"bd"`` \| ``"bA"`` \| ``"ba"`` \| ``"bb"`` \| ``"bc"`` \| ``"bf"`` \| ``"bB"`` \| ``"bC"`` \| ``"bD"`` \| ``"bE"`` \| ``"bF"`` \| ``"c0"`` \| ``"c1"`` \| ``"c2"`` \| ``"c3"`` \| ``"c4"`` \| ``"c5"`` \| ``"c6"`` \| ``"c7"`` \| ``"c8"`` \| ``"c9"`` \| ``"cd"`` \| ``"ce"`` \| ``"cA"`` \| ``"cb"`` \| ``"cc"`` \| ``"cf"`` \| ``"cB"`` \| ``"cC"`` \| ``"cD"`` \| ``"cE"`` \| ``"cF"`` \| ``"f0"`` \| ``"f1"`` \| ``"f2"`` \| ``"f3"`` \| ``"f4"`` \| ``"f5"`` \| ``"f6"`` \| ``"f7"`` \| ``"f8"`` \| ``"f9"`` \| ``"fd"`` \| ``"fe"`` \| ``"fA"`` \| ``"fa"`` \| ``"fb"`` \| ``"fc"`` \| ``"ff"`` \| ``"fB"`` \| ``"fC"`` \| ``"fD"`` \| ``"fE"`` \| ``"fF"`` \| ``"B0"`` \| ``"B1"`` \| ``"B2"`` \| ``"B3"`` \| ``"B4"`` \| ``"B5"`` \| ``"B6"`` \| ``"B7"`` \| ``"B8"`` \| ``"B9"`` \| ``"Bd"`` \| ``"Be"`` \| ``"BA"`` \| ``"Ba"`` \| ``"Bb"`` \| ``"Bc"`` \| ``"Bf"`` \| ``"BB"`` \| ``"BC"`` \| ``"BD"`` \| ``"BF"`` \| ``"C0"`` \| ``"C1"`` \| ``"C2"`` \| ``"C3"`` \| ``"C4"`` \| ``"C5"`` \| ``"C6"`` \| ``"C7"`` \| ``"C8"`` \| ``"C9"`` \| ``"Cd"`` \| ``"Ce"`` \| ``"CA"`` \| ``"Ca"`` \| ``"Cb"`` \| ``"Cc"`` \| ``"Cf"`` \| ``"CB"`` \| ``"CC"`` \| ``"CD"`` \| ``"CE"`` \| ``"CF"`` \| ``"D0"`` \| ``"D1"`` \| ``"D2"`` \| ``"D3"`` \| ``"D4"`` \| ``"D5"`` \| ``"D6"`` \| ``"D7"`` \| ``"D8"`` \| ``"D9"`` \| ``"Dd"`` \| ``"De"`` \| ``"DA"`` \| ``"Da"`` \| ``"Db"`` \| ``"Dc"`` \| ``"Df"`` \| ``"DB"`` \| ``"DC"`` \| ``"DD"`` \| ``"DE"`` \| ``"DF"`` \| ``"E0"`` \| ``"E1"`` \| ``"E2"`` \| ``"E3"`` \| ``"E4"`` \| ``"E5"`` \| ``"E6"`` \| ``"E7"`` \| ``"E8"`` \| ``"E9"`` \| ``"Ed"`` \| ``"Ee"`` \| ``"EA"`` \| ``"Ea"`` \| ``"Eb"`` \| ``"Ec"`` \| ``"Ef"`` \| ``"EB"`` \| ``"EC"`` \| ``"ED"`` \| ``"EE"`` \| ``"EF"`` \| ``"F0"`` \| ``"F1"`` \| ``"F2"`` \| ``"F3"`` \| ``"F4"`` \| ``"F5"`` \| ``"F6"`` \| ``"F7"`` \| ``"F8"`` \| ``"F9"`` \| ``"Fd"`` \| ``"Fe"`` \| ``"FA"`` \| ``"Fa"`` \| ``"Fb"`` \| ``"Fc"`` \| ``"Ff"`` \| ``"FB"`` \| ``"FC"`` \| ``"FD"`` \| ``"FE"`` \| ``"FF"``, `T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hexStr` | `T` | should be in format of hex bytes, i.e. `/^([0-9a-fA-F]{2})*$/` |

#### Returns

`string`

#### Defined in

[src/builtins/types.ts:35](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/builtins/types.ts#L35)

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

[src/builtins/functions.ts:78](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/builtins/functions.ts#L78)

___

### checkSig

▸ **checkSig**(`signature`, `publickey`): `boolean`

verifies an ECDSA signature. It takes two inputs from the stack, a public key (on top of the stack) and an ECDSA signature in its DER_CANONISED format concatenated with sighash flags. It outputs true or false on the stack based on whether the signature check passes or fails.

**`See`**

https://wiki.bitcoinsv.io/index.php/Opcodes_used_in_Bitcoin_Script

#### Parameters

| Name | Type |
| :------ | :------ |
| `signature` | [`Sig`](classes/Sig.md) |
| `publickey` | [`PubKey`](classes/PubKey.md) |

#### Returns

`boolean`

#### Defined in

[src/builtins/functions.ts:71](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/builtins/functions.ts#L71)

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

[src/builtins/functions.ts:204](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/builtins/functions.ts#L204)

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

[src/decorators.ts:7](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/decorators.ts#L7)

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

[src/decorators.ts:50](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/decorators.ts#L50)

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

[src/builtins/functions.ts:89](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/builtins/functions.ts#L89)

___

## loop Functions

### loop

▸ **loop**(`maxLoopCount`): (`fn`: (`i`: `number`) => `void`) => `void`

Bitcoin script does not provide looping constructs natively for security reasons. sCrypt achieves looping by repeating the loop body maxLoopCount times. For example, the loop

**`Example`**

```ts
loop (5n) (() => {
  x = x * 2;
})
```
is equivalently unrolled to

**`Example`**

```ts
x = x * 2;
x = x * 2;
x = x * 2;
x = x * 2;
x = x * 2;
x = x * 2;
x = x * 2;
x = x * 2;
x = x * 2;
x = x * 2;
```
If `maxLoopCount` is set too small, the contract may not work correctly. If `maxLoopCount` is set too large, the resulting script is bloated unnecessarily and costs more to execute. There are a number of ways to choose the right `maxLoopCount` judiciously. One way is to simulate the contract off chain and find the number of loops. Another way is to exploit the characteristics of the looping itself. For example, if a loop iterates over each bit of a sha256 hash, `maxLoopCount` is 256.
## Induction variable
Induction variable can be defined when loop index is needed.

**`Example`**

```ts
loop (5n) ((i: number) => {
    // i is the outer loop index
    loop (5n) ((k: number) => {
    // j is the inner loop index
        a += BigInt(i + k);
    })
})
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `maxLoopCount` | `bigint` |

#### Returns

`fn`

▸ (`fn`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`i`: `number`) => `void` |

##### Returns

`void`

#### Defined in

[src/builtins/functions.ts:250](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/builtins/functions.ts#L250)
