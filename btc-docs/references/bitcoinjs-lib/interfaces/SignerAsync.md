[**bitcoinjs-lib v1.0.7**](../README.md)

***

[bitcoinjs-lib](../README.md) / SignerAsync

# Interface: SignerAsync

Defined in: [ts\_src/psbt.ts:1223](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/psbt.ts#L1223)

## Properties

### network?

> `optional` **network**: `any`

Defined in: [ts\_src/psbt.ts:1225](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/psbt.ts#L1225)

***

### publicKey

> **publicKey**: `Uint8Array`

Defined in: [ts\_src/psbt.ts:1224](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/psbt.ts#L1224)

## Methods

### getPublicKey()?

> `optional` **getPublicKey**(): `Uint8Array`

Defined in: [ts\_src/psbt.ts:1228](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/psbt.ts#L1228)

#### Returns

`Uint8Array`

***

### sign()

> **sign**(`hash`, `lowR`?): `Promise`\<`Uint8Array`\>

Defined in: [ts\_src/psbt.ts:1226](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/psbt.ts#L1226)

#### Parameters

##### hash

`Uint8Array`

##### lowR?

`boolean`

#### Returns

`Promise`\<`Uint8Array`\>

***

### signSchnorr()?

> `optional` **signSchnorr**(`hash`): `Promise`\<`Uint8Array`\>

Defined in: [ts\_src/psbt.ts:1227](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/psbt.ts#L1227)

#### Parameters

##### hash

`Uint8Array`

#### Returns

`Promise`\<`Uint8Array`\>
