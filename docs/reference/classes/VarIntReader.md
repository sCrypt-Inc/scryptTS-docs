[**scrypt-ts**](../README.md)

***

[scrypt-ts](../globals.md) / VarIntReader

# Class: VarIntReader

Defined in: scrypt-ts/dist/smart-contract/builtins/functions.d.ts:1074

A reader to parse a ByteString buffer

## Constructors

### new VarIntReader()

> **new VarIntReader**(`buf`): [`VarIntReader`](VarIntReader.md)

Defined in: scrypt-ts/dist/smart-contract/builtins/functions.d.ts:1080

#### Parameters

##### buf

[`ByteString`](../type-aliases/ByteString.md)

#### Returns

[`VarIntReader`](VarIntReader.md)

## Properties

### buf

> **buf**: [`ByteString`](../type-aliases/ByteString.md)

Defined in: scrypt-ts/dist/smart-contract/builtins/functions.d.ts:1078

***

### pos

> **pos**: `bigint`

Defined in: scrypt-ts/dist/smart-contract/builtins/functions.d.ts:1079

***

### StateLen

> `readonly` `static` **StateLen**: `bigint`

Defined in: scrypt-ts/dist/smart-contract/builtins/functions.d.ts:1075

***

### Version

> `readonly` `static` **Version**: `bigint`

Defined in: scrypt-ts/dist/smart-contract/builtins/functions.d.ts:1077

***

### VersionLen

> `readonly` `static` **VersionLen**: `bigint`

Defined in: scrypt-ts/dist/smart-contract/builtins/functions.d.ts:1076

## Methods

### eof()

> **eof**(): `boolean`

Defined in: scrypt-ts/dist/smart-contract/builtins/functions.d.ts:1085

Check if all have been read

#### Returns

`boolean`

true if all have been read

***

### readBool()

> **readBool**(): `boolean`

Defined in: scrypt-ts/dist/smart-contract/builtins/functions.d.ts:1095

read a byte as boolean

#### Returns

`boolean`

true if the read byte not equal to '00'

***

### readBytes()

> **readBytes**(): [`ByteString`](../type-aliases/ByteString.md)

Defined in: scrypt-ts/dist/smart-contract/builtins/functions.d.ts:1090

read bytes which encoded with bitcoin [value-pushing words][https://wiki.bitcoinsv.io/index.php/Opcodes\_used\_in\_Bitcoin\_Script](https://wiki.bitcoinsv.io/index.php/Opcodes_used_in_Bitcoin_Script)

#### Returns

[`ByteString`](../type-aliases/ByteString.md)

true if all have been read

***

### readInt()

> **readInt**(): `bigint`

Defined in: scrypt-ts/dist/smart-contract/builtins/functions.d.ts:1100

read bytes as `readBytes` and convert it to a number with `byteString2Int`

#### Returns

`bigint`

a number
