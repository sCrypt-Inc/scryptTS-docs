[**bitcoinjs-lib v1.0.7**](../../../README.md)

***

[bitcoinjs-lib](../../../README.md) / [address](../README.md) / Bech32Result

# Interface: Bech32Result

Defined in: [ts\_src/address.ts:29](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/address.ts#L29)

bech32 decode result

## Properties

### data

> **data**: `Uint8Array`

Defined in: [ts\_src/address.ts:35](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/address.ts#L35)

address data：20 bytes for P2WPKH, 32 bytes for P2WSH、P2TR

***

### prefix

> **prefix**: `string`

Defined in: [ts\_src/address.ts:33](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/address.ts#L33)

address prefix: bc for P2WPKH、P2WSH、P2TR

***

### version

> **version**: `number`

Defined in: [ts\_src/address.ts:31](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/address.ts#L31)

address version: 0x00 for P2WPKH、P2WSH, 0x01 for P2TR
