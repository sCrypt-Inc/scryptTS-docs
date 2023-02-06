[scrypt-ts](../README.md) / [bsv](../modules/bsv.md) / Message

# Class: Message

[bsv](../modules/bsv.md).Message

## Table of contents

### Constructors

- [constructor](bsv.Message.md#constructor)

### Properties

- [messageBuffer](bsv.Message.md#messagebuffer)
- [MAGIC\_BYTES](bsv.Message.md#magic_bytes)

### Methods

- [inspect](bsv.Message.md#inspect)
- [sign](bsv.Message.md#sign)
- [toJSON](bsv.Message.md#tojson)
- [toObject](bsv.Message.md#toobject)
- [toString](bsv.Message.md#tostring)
- [verify](bsv.Message.md#verify)
- [fromJSON](bsv.Message.md#fromjson)
- [fromObject](bsv.Message.md#fromobject)
- [fromString](bsv.Message.md#fromstring)
- [magicHash](bsv.Message.md#magichash)
- [sign](bsv.Message.md#sign-1)
- [verify](bsv.Message.md#verify-1)

## Constructors

### constructor

• **new Message**(`message`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` \| `Buffer` |

#### Defined in

node_modules/bsv/index.d.ts:615

## Properties

### messageBuffer

• `Readonly` **messageBuffer**: `Buffer`

#### Defined in

node_modules/bsv/index.d.ts:617

___

### MAGIC\_BYTES

▪ `Static` **MAGIC\_BYTES**: `Buffer`

#### Defined in

node_modules/bsv/index.d.ts:632

## Methods

### inspect

▸ **inspect**(): `string`

#### Returns

`string`

#### Defined in

node_modules/bsv/index.d.ts:624

___

### sign

▸ **sign**(`privateKey`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateKey` | [`PrivateKey`](bsv.PrivateKey.md) |

#### Returns

`string`

#### Defined in

node_modules/bsv/index.d.ts:619

___

### toJSON

▸ **toJSON**(): `string`

#### Returns

`string`

#### Defined in

node_modules/bsv/index.d.ts:622

___

### toObject

▸ **toObject**(): `object`

#### Returns

`object`

#### Defined in

node_modules/bsv/index.d.ts:621

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

node_modules/bsv/index.d.ts:623

___

### verify

▸ **verify**(`address`, `signature`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` \| [`Address`](bsv.Address.md) |
| `signature` | `string` |

#### Returns

`boolean`

#### Defined in

node_modules/bsv/index.d.ts:620

___

### fromJSON

▸ `Static` **fromJSON**(`json`): [`Message`](bsv.Message.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `string` |

#### Returns

[`Message`](bsv.Message.md)

#### Defined in

node_modules/bsv/index.d.ts:635

___

### fromObject

▸ `Static` **fromObject**(`obj`): [`Message`](bsv.Message.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `object` |

#### Returns

[`Message`](bsv.Message.md)

#### Defined in

node_modules/bsv/index.d.ts:636

___

### fromString

▸ `Static` **fromString**(`str`): [`Message`](bsv.Message.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

[`Message`](bsv.Message.md)

#### Defined in

node_modules/bsv/index.d.ts:634

___

### magicHash

▸ `Static` **magicHash**(): `string`

#### Returns

`string`

#### Defined in

node_modules/bsv/index.d.ts:633

___

### sign

▸ `Static` **sign**(`message`, `privateKey`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` \| `Buffer` |
| `privateKey` | [`PrivateKey`](bsv.PrivateKey.md) |

#### Returns

`string`

#### Defined in

node_modules/bsv/index.d.ts:626

___

### verify

▸ `Static` **verify**(`message`, `address`, `signature`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` \| `Buffer` |
| `address` | `string` \| [`Address`](bsv.Address.md) |
| `signature` | `string` |

#### Returns

`boolean`

#### Defined in

node_modules/bsv/index.d.ts:627
