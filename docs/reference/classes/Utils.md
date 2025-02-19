[**scrypt-ts**](../README.md)

***

[scrypt-ts](../globals.md) / Utils

# Class: Utils

Defined in: scrypt-ts/dist/smart-contract/builtins/functions.d.ts:908

The Utils library provides a set of commonly used utility functions.

## Constructors

### new Utils()

> **new Utils**(): [`Utils`](Utils.md)

#### Returns

[`Utils`](Utils.md)

## Properties

### OutputValueLen

> `readonly` `static` **OutputValueLen**: `bigint`

Defined in: scrypt-ts/dist/smart-contract/builtins/functions.d.ts:910

number of string to denote output value

***

### PubKeyHashLen

> `readonly` `static` **PubKeyHashLen**: `bigint`

Defined in: scrypt-ts/dist/smart-contract/builtins/functions.d.ts:912

number of string to denote a public key hash

## Methods

### buildAddressOutput()

> `static` **buildAddressOutput**(`addr`, `amount`): [`ByteString`](../type-aliases/ByteString.md)

Defined in: scrypt-ts/dist/smart-contract/builtins/functions.d.ts:970

constructs a standard payment (P2PKH) output from a given address and satoshi amount

#### Parameters

##### addr

`Ripemd160`

the recipient's address

##### amount

`bigint`

the satoshi amount

#### Returns

[`ByteString`](../type-aliases/ByteString.md)

a `ByteString` representing the P2PKH output

***

### buildAddressScript()

> `static` **buildAddressScript**(`addr`): [`ByteString`](../type-aliases/ByteString.md)

Defined in: scrypt-ts/dist/smart-contract/builtins/functions.d.ts:963

constructs a standard payment (P2PKH) script from a given address

#### Parameters

##### addr

`Ripemd160`

the recipient's address

#### Returns

[`ByteString`](../type-aliases/ByteString.md)

a `ByteString` representing the P2PKH script

***

### buildOpreturnScript()

> `static` **buildOpreturnScript**(`data`): [`ByteString`](../type-aliases/ByteString.md)

Defined in: scrypt-ts/dist/smart-contract/builtins/functions.d.ts:976

build `OP_FALSE OP_RETURN` script from data payload

#### Parameters

##### data

[`ByteString`](../type-aliases/ByteString.md)

the data payload

#### Returns

[`ByteString`](../type-aliases/ByteString.md)

a ByteString contains the data payload

***

### buildOutput()

> `static` **buildOutput**(`outputScript`, `outputSatoshis`): [`ByteString`](../type-aliases/ByteString.md)

Defined in: scrypt-ts/dist/smart-contract/builtins/functions.d.ts:944

build a tx output from its script and satoshi amount

#### Parameters

##### outputScript

[`ByteString`](../type-aliases/ByteString.md)

the locking script

##### outputSatoshis

`bigint`

the satoshi amount

#### Returns

[`ByteString`](../type-aliases/ByteString.md)

a `ByteString` that represents an output

***

### buildPublicKeyHashOutput()

> `static` **buildPublicKeyHashOutput**(`pubKeyHash`, `amount`): [`ByteString`](../type-aliases/ByteString.md)

Defined in: scrypt-ts/dist/smart-contract/builtins/functions.d.ts:957

constructs a P2PKH output from a given PubKeyHash and satoshi amount

#### Parameters

##### pubKeyHash

`Ripemd160`

the recipient's public key hash

##### amount

`bigint`

the satoshi amount

#### Returns

[`ByteString`](../type-aliases/ByteString.md)

a `ByteString` representing the P2PKH output

***

### buildPublicKeyHashScript()

> `static` **buildPublicKeyHashScript**(`pubKeyHash`): [`ByteString`](../type-aliases/ByteString.md)

Defined in: scrypt-ts/dist/smart-contract/builtins/functions.d.ts:950

constructs a P2PKH script from a given PubKeyHash

#### Parameters

##### pubKeyHash

`Ripemd160`

the recipient's public key hash

#### Returns

[`ByteString`](../type-aliases/ByteString.md)

a `ByteString` representing the P2PKH script

***

### fromLEUnsigned()

> `static` **fromLEUnsigned**(`bytes`): `bigint`

Defined in: scrypt-ts/dist/smart-contract/builtins/functions.d.ts:925

convert `ByteString` to unsigned integer, in sign-magnitude little endian

#### Parameters

##### bytes

[`ByteString`](../type-aliases/ByteString.md)

the `ByteString` to be converted

#### Returns

`bigint`

returns a number

***

### readVarint()

> `static` **readVarint**(`buf`): [`ByteString`](../type-aliases/ByteString.md)

Defined in: scrypt-ts/dist/smart-contract/builtins/functions.d.ts:931

read [VarInt (variable integer)][https://learnmeabitcoin.com/technical/general/compact-size/](https://learnmeabitcoin.com/technical/general/compact-size/)-encoded data from the beginning of 'buf'

#### Parameters

##### buf

[`ByteString`](../type-aliases/ByteString.md)

a buffer `ByteString` of format: [prefix FD/FE/FF +] length + data

#### Returns

[`ByteString`](../type-aliases/ByteString.md)

return data

***

### toLEUnsigned()

> `static` **toLEUnsigned**(`n`, `l`): [`ByteString`](../type-aliases/ByteString.md)

Defined in: scrypt-ts/dist/smart-contract/builtins/functions.d.ts:919

convert signed integer `n` to unsigned integer of `l` string, in little endian

#### Parameters

##### n

`bigint`

the number to be converted

##### l

`bigint`

expected length

#### Returns

[`ByteString`](../type-aliases/ByteString.md)

returns a `ByteString`

***

### writeVarint()

> `static` **writeVarint**(`buf`): [`ByteString`](../type-aliases/ByteString.md)

Defined in: scrypt-ts/dist/smart-contract/builtins/functions.d.ts:937

encode data in 'buf' to a [VarInt (variable integer)][https://learnmeabitcoin.com/technical/general/compact-size/](https://learnmeabitcoin.com/technical/general/compact-size/) format; opposite of readVarint

#### Parameters

##### buf

[`ByteString`](../type-aliases/ByteString.md)

a buffer `ByteString` containing the data

#### Returns

[`ByteString`](../type-aliases/ByteString.md)

return format: [prefix FD/FE/FF +] length + data
