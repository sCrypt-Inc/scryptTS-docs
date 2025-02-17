[**bitcoinjs-lib v1.0.7**](../README.md)

***

[bitcoinjs-lib](../README.md) / Signer

# Interface: Signer

Defined in: [ts\_src/psbt.ts:1215](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/psbt.ts#L1215)

## Properties

### network?

> `optional` **network**: `any`

Defined in: [ts\_src/psbt.ts:1217](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/psbt.ts#L1217)

***

### publicKey

> **publicKey**: `Uint8Array`

Defined in: [ts\_src/psbt.ts:1216](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/psbt.ts#L1216)

## Methods

### getPublicKey()?

> `optional` **getPublicKey**(): `Uint8Array`

Defined in: [ts\_src/psbt.ts:1220](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/psbt.ts#L1220)

#### Returns

`Uint8Array`

***

### sign()

> **sign**(`hash`, `lowR`?): `Uint8Array`

Defined in: [ts\_src/psbt.ts:1218](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/psbt.ts#L1218)

#### Parameters

##### hash

`Uint8Array`

##### lowR?

`boolean`

#### Returns

`Uint8Array`

***

### signSchnorr()?

> `optional` **signSchnorr**(`hash`): `Uint8Array`

Defined in: [ts\_src/psbt.ts:1219](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/psbt.ts#L1219)

#### Parameters

##### hash

`Uint8Array`

#### Returns

`Uint8Array`
