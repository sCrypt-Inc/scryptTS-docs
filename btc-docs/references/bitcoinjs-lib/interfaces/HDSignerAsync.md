[**bitcoinjs-lib v1.0.7**](../README.md)

***

[bitcoinjs-lib](../README.md) / HDSignerAsync

# Interface: HDSignerAsync

Defined in: [ts\_src/psbt.ts:1210](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/psbt.ts#L1210)

Same as above but with async sign method

## Extends

- `HDSignerBase`

## Properties

### fingerprint

> **fingerprint**: `Uint8Array`

Defined in: [ts\_src/psbt.ts:1191](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/psbt.ts#L1191)

The first 4 bytes of the sha256-ripemd160 of the publicKey

#### Inherited from

`HDSignerBase.fingerprint`

***

### publicKey

> **publicKey**: `Uint8Array`

Defined in: [ts\_src/psbt.ts:1187](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/psbt.ts#L1187)

DER format compressed publicKey buffer

#### Inherited from

`HDSignerBase.publicKey`

## Methods

### derivePath()

> **derivePath**(`path`): [`HDSignerAsync`](HDSignerAsync.md)

Defined in: [ts\_src/psbt.ts:1211](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/psbt.ts#L1211)

#### Parameters

##### path

`string`

#### Returns

[`HDSignerAsync`](HDSignerAsync.md)

***

### sign()

> **sign**(`hash`): `Promise`\<`Uint8Array`\>

Defined in: [ts\_src/psbt.ts:1212](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/psbt.ts#L1212)

#### Parameters

##### hash

`Uint8Array`

#### Returns

`Promise`\<`Uint8Array`\>
