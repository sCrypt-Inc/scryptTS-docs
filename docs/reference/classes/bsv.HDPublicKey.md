[scrypt-ts](../README.md) / [bsv](../modules/bsv.md) / HDPublicKey

# Class: HDPublicKey

[bsv](../modules/bsv.md).HDPublicKey

## Table of contents

### Constructors

- [constructor](bsv.HDPublicKey.md#constructor)

### Properties

- [depth](bsv.HDPublicKey.md#depth)
- [fingerPrint](bsv.HDPublicKey.md#fingerprint)
- [network](bsv.HDPublicKey.md#network)
- [publicKey](bsv.HDPublicKey.md#publickey)
- [xpubkey](bsv.HDPublicKey.md#xpubkey)

### Methods

- [derive](bsv.HDPublicKey.md#derive)
- [deriveChild](bsv.HDPublicKey.md#derivechild)
- [inspect](bsv.HDPublicKey.md#inspect)
- [toBuffer](bsv.HDPublicKey.md#tobuffer)
- [toHex](bsv.HDPublicKey.md#tohex)
- [toJSON](bsv.HDPublicKey.md#tojson)
- [toObject](bsv.HDPublicKey.md#toobject)
- [toString](bsv.HDPublicKey.md#tostring)
- [fromBuffer](bsv.HDPublicKey.md#frombuffer)
- [fromHDPrivateKey](bsv.HDPublicKey.md#fromhdprivatekey)
- [fromHex](bsv.HDPublicKey.md#fromhex)
- [fromObject](bsv.HDPublicKey.md#fromobject)
- [fromString](bsv.HDPublicKey.md#fromstring)
- [getSerializedError](bsv.HDPublicKey.md#getserializederror)
- [isValidPath](bsv.HDPublicKey.md#isvalidpath)
- [isValidSerialized](bsv.HDPublicKey.md#isvalidserialized)

## Constructors

### constructor

• **new HDPublicKey**(`arg`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `string` \| `object` \| `Buffer` |

#### Defined in

node_modules/bsv/index.d.ts:1170

## Properties

### depth

• `Readonly` **depth**: `number`

#### Defined in

node_modules/bsv/index.d.ts:1174

___

### fingerPrint

• `Readonly` **fingerPrint**: `Buffer`

#### Defined in

node_modules/bsv/index.d.ts:1176

___

### network

• `Readonly` **network**: [`Network`](../interfaces/bsv.Networks.Network.md)

#### Defined in

node_modules/bsv/index.d.ts:1173

___

### publicKey

• `Readonly` **publicKey**: [`PublicKey`](bsv.PublicKey.md)

#### Defined in

node_modules/bsv/index.d.ts:1175

___

### xpubkey

• `Readonly` **xpubkey**: `Buffer`

#### Defined in

node_modules/bsv/index.d.ts:1172

## Methods

### derive

▸ **derive**(`arg`, `hardened?`): [`HDPublicKey`](bsv.HDPublicKey.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `string` \| `number` |
| `hardened?` | `boolean` |

#### Returns

[`HDPublicKey`](bsv.HDPublicKey.md)

#### Defined in

node_modules/bsv/index.d.ts:1178

___

### deriveChild

▸ **deriveChild**(`arg`, `hardened?`): [`HDPublicKey`](bsv.HDPublicKey.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `string` \| `number` |
| `hardened?` | `boolean` |

#### Returns

[`HDPublicKey`](bsv.HDPublicKey.md)

#### Defined in

node_modules/bsv/index.d.ts:1179

___

### inspect

▸ **inspect**(): `string`

#### Returns

`string`

#### Defined in

node_modules/bsv/index.d.ts:1186

___

### toBuffer

▸ **toBuffer**(): `Buffer`

#### Returns

`Buffer`

#### Defined in

node_modules/bsv/index.d.ts:1184

___

### toHex

▸ **toHex**(): `string`

#### Returns

`string`

#### Defined in

node_modules/bsv/index.d.ts:1185

___

### toJSON

▸ **toJSON**(): `object`

#### Returns

`object`

#### Defined in

node_modules/bsv/index.d.ts:1183

___

### toObject

▸ **toObject**(): `object`

#### Returns

`object`

#### Defined in

node_modules/bsv/index.d.ts:1182

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

node_modules/bsv/index.d.ts:1181

___

### fromBuffer

▸ `Static` **fromBuffer**(`buf`): [`HDPublicKey`](bsv.HDPublicKey.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | `Buffer` |

#### Returns

[`HDPublicKey`](bsv.HDPublicKey.md)

#### Defined in

node_modules/bsv/index.d.ts:1190

___

### fromHDPrivateKey

▸ `Static` **fromHDPrivateKey**(`hdPrivateKey`): [`HDPublicKey`](bsv.HDPublicKey.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `hdPrivateKey` | [`HDPrivateKey`](bsv.HDPrivateKey.md) |

#### Returns

[`HDPublicKey`](bsv.HDPublicKey.md)

#### Defined in

node_modules/bsv/index.d.ts:1193

___

### fromHex

▸ `Static` **fromHex**(`hex`): [`HDPublicKey`](bsv.HDPublicKey.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `hex` | `string` |

#### Returns

[`HDPublicKey`](bsv.HDPublicKey.md)

#### Defined in

node_modules/bsv/index.d.ts:1191

___

### fromObject

▸ `Static` **fromObject**(`obj`): [`HDPublicKey`](bsv.HDPublicKey.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `object` |

#### Returns

[`HDPublicKey`](bsv.HDPublicKey.md)

#### Defined in

node_modules/bsv/index.d.ts:1189

___

### fromString

▸ `Static` **fromString**(`str`): [`HDPublicKey`](bsv.HDPublicKey.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

[`HDPublicKey`](bsv.HDPublicKey.md)

#### Defined in

node_modules/bsv/index.d.ts:1188

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

node_modules/bsv/index.d.ts:1199

___

### isValidPath

▸ `Static` **isValidPath**(`arg`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `string` \| `number` |

#### Returns

`boolean`

#### Defined in

node_modules/bsv/index.d.ts:1194

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

node_modules/bsv/index.d.ts:1195
