[scrypt-ts](../README.md) / [bsv](../modules/bsv.md) / Mnemonic

# Class: Mnemonic

[bsv](../modules/bsv.md).Mnemonic

## Table of contents

### Constructors

- [constructor](bsv.Mnemonic.md#constructor)

### Properties

- [phrase](bsv.Mnemonic.md#phrase)
- [wordList](bsv.Mnemonic.md#wordlist)

### Methods

- [inspect](bsv.Mnemonic.md#inspect)
- [toHDPrivateKey](bsv.Mnemonic.md#tohdprivatekey)
- [toSeed](bsv.Mnemonic.md#toseed)
- [toString](bsv.Mnemonic.md#tostring)
- [fromRandom](bsv.Mnemonic.md#fromrandom)
- [fromSeed](bsv.Mnemonic.md#fromseed)
- [fromString](bsv.Mnemonic.md#fromstring)
- [isValid](bsv.Mnemonic.md#isvalid)

## Constructors

### constructor

• **new Mnemonic**(`data`, `wordList?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` \| `string`[] |
| `wordList?` | `string`[] |

#### Defined in

node_modules/bsv/index.d.ts:634

## Properties

### phrase

• `Readonly` **phrase**: `string`

#### Defined in

node_modules/bsv/index.d.ts:637

___

### wordList

• `Readonly` **wordList**: `string`[]

#### Defined in

node_modules/bsv/index.d.ts:636

## Methods

### inspect

▸ **inspect**(): `string`

#### Returns

`string`

#### Defined in

node_modules/bsv/index.d.ts:642

___

### toHDPrivateKey

▸ **toHDPrivateKey**(`passphrase`, `network`): [`HDPrivateKey`](bsv.HDPrivateKey.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `passphrase` | `string` |
| `network` | [`Type`](../modules/bsv.Networks.md#type) |

#### Returns

[`HDPrivateKey`](bsv.HDPrivateKey.md)

#### Defined in

node_modules/bsv/index.d.ts:640

___

### toSeed

▸ **toSeed**(`passphrase?`): `Buffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `passphrase?` | `string` |

#### Returns

`Buffer`

#### Defined in

node_modules/bsv/index.d.ts:639

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

node_modules/bsv/index.d.ts:641

___

### fromRandom

▸ `Static` **fromRandom**(`wordlist?`): [`Mnemonic`](bsv.Mnemonic.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `wordlist?` | `string`[] |

#### Returns

[`Mnemonic`](bsv.Mnemonic.md)

#### Defined in

node_modules/bsv/index.d.ts:644

___

### fromSeed

▸ `Static` **fromSeed**(`seed`, `wordlist`): [`Mnemonic`](bsv.Mnemonic.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `seed` | `Buffer` |
| `wordlist` | `string`[] |

#### Returns

[`Mnemonic`](bsv.Mnemonic.md)

#### Defined in

node_modules/bsv/index.d.ts:647

___

### fromString

▸ `Static` **fromString**(`mnemonic`, `wordList?`): [`Mnemonic`](bsv.Mnemonic.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `mnemonic` | `string` |
| `wordList?` | `string`[] |

#### Returns

[`Mnemonic`](bsv.Mnemonic.md)

#### Defined in

node_modules/bsv/index.d.ts:645

___

### isValid

▸ `Static` **isValid**(`mnemonic`, `wordList?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mnemonic` | `string` |
| `wordList?` | `string`[] |

#### Returns

`boolean`

#### Defined in

node_modules/bsv/index.d.ts:646
