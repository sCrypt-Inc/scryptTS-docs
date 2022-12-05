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

node_modules/bsv/index.d.ts:637

## Properties

### depth

• `Readonly` **depth**: `number`

#### Defined in

node_modules/bsv/index.d.ts:644

___

### fingerPrint

• `Readonly` **fingerPrint**: `Buffer`

#### Defined in

node_modules/bsv/index.d.ts:647

___

### hdPublicKey

• `Readonly` **hdPublicKey**: [`HDPublicKey`](bsv.HDPublicKey.md)

#### Defined in

node_modules/bsv/index.d.ts:639

___

### network

• `Readonly` **network**: [`Network`](../interfaces/bsv.Networks.Network.md)

#### Defined in

node_modules/bsv/index.d.ts:643

___

### privateKey

• `Readonly` **privateKey**: [`PrivateKey`](bsv.PrivateKey.md)

#### Defined in

node_modules/bsv/index.d.ts:645

___

### publicKey

• `Readonly` **publicKey**: [`PublicKey`](bsv.PublicKey.md)

#### Defined in

node_modules/bsv/index.d.ts:646

___

### xprivkey

• `Readonly` **xprivkey**: `Buffer`

#### Defined in

node_modules/bsv/index.d.ts:641

___

### xpubkey

• `Readonly` **xpubkey**: `Buffer`

#### Defined in

node_modules/bsv/index.d.ts:642

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

node_modules/bsv/index.d.ts:649

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

node_modules/bsv/index.d.ts:650

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

node_modules/bsv/index.d.ts:651

___

### inspect

▸ **inspect**(): `string`

#### Returns

`string`

#### Defined in

node_modules/bsv/index.d.ts:661

___

### toBuffer

▸ **toBuffer**(): `Buffer`

#### Returns

`Buffer`

#### Defined in

node_modules/bsv/index.d.ts:659

___

### toHex

▸ **toHex**(): `string`

#### Returns

`string`

#### Defined in

node_modules/bsv/index.d.ts:660

___

### toJSON

▸ **toJSON**(): `object`

#### Returns

`object`

#### Defined in

node_modules/bsv/index.d.ts:658

___

### toObject

▸ **toObject**(): `object`

#### Returns

`object`

#### Defined in

node_modules/bsv/index.d.ts:657

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

node_modules/bsv/index.d.ts:656

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

node_modules/bsv/index.d.ts:670

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

node_modules/bsv/index.d.ts:671

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

node_modules/bsv/index.d.ts:665

___

### fromRandom

▸ `Static` **fromRandom**(): [`HDPrivateKey`](bsv.HDPrivateKey.md)

#### Returns

[`HDPrivateKey`](bsv.HDPrivateKey.md)

#### Defined in

node_modules/bsv/index.d.ts:663

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

node_modules/bsv/index.d.ts:666

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

node_modules/bsv/index.d.ts:664

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

node_modules/bsv/index.d.ts:677

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

node_modules/bsv/index.d.ts:672

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

node_modules/bsv/index.d.ts:673
