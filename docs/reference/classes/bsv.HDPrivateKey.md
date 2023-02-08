[scrypt-ts](../README.md) / [bsv](../modules/bsv.md) / HDPrivateKey

# Class: HDPrivateKey

[bsv](../modules/bsv.md).HDPrivateKey

## Table of contents

### Constructors

- [constructor](bsv.HDPrivateKey.md#constructor)

### Properties

- [depth](bsv.HDPrivateKey.md#depth)
- [fingerPrint](bsv.HDPrivateKey.md#fingerprint)
- [hdPublicKey](bsv.HDPrivateKey.md#hdpublickey)
- [network](bsv.HDPrivateKey.md#network)
- [privateKey](bsv.HDPrivateKey.md#privatekey)
- [publicKey](bsv.HDPrivateKey.md#publickey)
- [xprivkey](bsv.HDPrivateKey.md#xprivkey)
- [xpubkey](bsv.HDPrivateKey.md#xpubkey)

### Methods

- [derive](bsv.HDPrivateKey.md#derive)
- [deriveChild](bsv.HDPrivateKey.md#derivechild)
- [deriveNonCompliantChild](bsv.HDPrivateKey.md#derivenoncompliantchild)
- [inspect](bsv.HDPrivateKey.md#inspect)
- [toBuffer](bsv.HDPrivateKey.md#tobuffer)
- [toHex](bsv.HDPrivateKey.md#tohex)
- [toJSON](bsv.HDPrivateKey.md#tojson)
- [toObject](bsv.HDPrivateKey.md#toobject)
- [toString](bsv.HDPrivateKey.md#tostring)
- [fromBuffer](bsv.HDPrivateKey.md#frombuffer)
- [fromHex](bsv.HDPrivateKey.md#fromhex)
- [fromObject](bsv.HDPrivateKey.md#fromobject)
- [fromRandom](bsv.HDPrivateKey.md#fromrandom)
- [fromSeed](bsv.HDPrivateKey.md#fromseed)
- [fromString](bsv.HDPrivateKey.md#fromstring)
- [getSerializedError](bsv.HDPrivateKey.md#getserializederror)
- [isValidPath](bsv.HDPrivateKey.md#isvalidpath)
- [isValidSerialized](bsv.HDPrivateKey.md#isvalidserialized)

## Constructors

### constructor

• **new HDPrivateKey**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `string` \| `object` \| `Buffer` |

#### Defined in

node_modules/bsv/index.d.ts:662

## Properties

### depth

• `Readonly` **depth**: `number`

#### Defined in

node_modules/bsv/index.d.ts:669

___

### fingerPrint

• `Readonly` **fingerPrint**: `Buffer`

#### Defined in

node_modules/bsv/index.d.ts:672

___

### hdPublicKey

• `Readonly` **hdPublicKey**: [`HDPublicKey`](bsv.HDPublicKey.md)

#### Defined in

node_modules/bsv/index.d.ts:664

___

### network

• `Readonly` **network**: [`Network`](../interfaces/bsv.Networks.Network.md)

#### Defined in

node_modules/bsv/index.d.ts:668

___

### privateKey

• `Readonly` **privateKey**: [`PrivateKey`](bsv.PrivateKey.md)

#### Defined in

node_modules/bsv/index.d.ts:670

___

### publicKey

• `Readonly` **publicKey**: [`PublicKey`](bsv.PublicKey.md)

#### Defined in

node_modules/bsv/index.d.ts:671

___

### xprivkey

• `Readonly` **xprivkey**: `Buffer`

#### Defined in

node_modules/bsv/index.d.ts:666

___

### xpubkey

• `Readonly` **xpubkey**: `Buffer`

#### Defined in

node_modules/bsv/index.d.ts:667

## Methods

### derive

▸ **derive**(`arg`, `hardened?`): [`HDPrivateKey`](bsv.HDPrivateKey.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `string` \| `number` |
| `hardened?` | `boolean` |

#### Returns

[`HDPrivateKey`](bsv.HDPrivateKey.md)

#### Defined in

node_modules/bsv/index.d.ts:674

___

### deriveChild

▸ **deriveChild**(`arg`, `hardened?`): [`HDPrivateKey`](bsv.HDPrivateKey.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `string` \| `number` |
| `hardened?` | `boolean` |

#### Returns

[`HDPrivateKey`](bsv.HDPrivateKey.md)

#### Defined in

node_modules/bsv/index.d.ts:675

___

### deriveNonCompliantChild

▸ **deriveNonCompliantChild**(`arg`, `hardened?`): [`HDPrivateKey`](bsv.HDPrivateKey.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `string` \| `number` |
| `hardened?` | `boolean` |

#### Returns

[`HDPrivateKey`](bsv.HDPrivateKey.md)

#### Defined in

node_modules/bsv/index.d.ts:676

___

### inspect

▸ **inspect**(): `string`

#### Returns

`string`

#### Defined in

node_modules/bsv/index.d.ts:686

___

### toBuffer

▸ **toBuffer**(): `Buffer`

#### Returns

`Buffer`

#### Defined in

node_modules/bsv/index.d.ts:684

___

### toHex

▸ **toHex**(): `string`

#### Returns

`string`

#### Defined in

node_modules/bsv/index.d.ts:685

___

### toJSON

▸ **toJSON**(): `object`

#### Returns

`object`

#### Defined in

node_modules/bsv/index.d.ts:683

___

### toObject

▸ **toObject**(): `object`

#### Returns

`object`

#### Defined in

node_modules/bsv/index.d.ts:682

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

node_modules/bsv/index.d.ts:681

___

### fromBuffer

▸ `Static` **fromBuffer**(`buf`): [`HDPrivateKey`](bsv.HDPrivateKey.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | `Buffer` |

#### Returns

[`HDPrivateKey`](bsv.HDPrivateKey.md)

#### Defined in

node_modules/bsv/index.d.ts:695

___

### fromHex

▸ `Static` **fromHex**(`hex`): [`HDPrivateKey`](bsv.HDPrivateKey.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `hex` | `string` |

#### Returns

[`HDPrivateKey`](bsv.HDPrivateKey.md)

#### Defined in

node_modules/bsv/index.d.ts:696

___

### fromObject

▸ `Static` **fromObject**(`obj`): [`HDPrivateKey`](bsv.HDPrivateKey.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `object` |

#### Returns

[`HDPrivateKey`](bsv.HDPrivateKey.md)

#### Defined in

node_modules/bsv/index.d.ts:690

___

### fromRandom

▸ `Static` **fromRandom**(): [`HDPrivateKey`](bsv.HDPrivateKey.md)

#### Returns

[`HDPrivateKey`](bsv.HDPrivateKey.md)

#### Defined in

node_modules/bsv/index.d.ts:688

___

### fromSeed

▸ `Static` **fromSeed**(`hexa`, `network`): [`HDPrivateKey`](bsv.HDPrivateKey.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `hexa` | `string` \| `Buffer` |
| `network` | `string` \| [`Network`](../interfaces/bsv.Networks.Network.md) |

#### Returns

[`HDPrivateKey`](bsv.HDPrivateKey.md)

#### Defined in

node_modules/bsv/index.d.ts:691

___

### fromString

▸ `Static` **fromString**(`str`): [`HDPrivateKey`](bsv.HDPrivateKey.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

[`HDPrivateKey`](bsv.HDPrivateKey.md)

#### Defined in

node_modules/bsv/index.d.ts:689

___

### getSerializedError

▸ `Static` **getSerializedError**(`data`, `network?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` \| `Buffer` |
| `network?` | `string` \| [`Network`](../interfaces/bsv.Networks.Network.md) |

#### Returns

`any`

#### Defined in

node_modules/bsv/index.d.ts:702

___

### isValidPath

▸ `Static` **isValidPath**(`arg`, `hardened`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `string` \| `number` |
| `hardened` | `boolean` |

#### Returns

`boolean`

#### Defined in

node_modules/bsv/index.d.ts:697

___

### isValidSerialized

▸ `Static` **isValidSerialized**(`data`, `network?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` \| `Buffer` |
| `network?` | `string` \| [`Network`](../interfaces/bsv.Networks.Network.md) |

#### Returns

`boolean`

#### Defined in

node_modules/bsv/index.d.ts:698
