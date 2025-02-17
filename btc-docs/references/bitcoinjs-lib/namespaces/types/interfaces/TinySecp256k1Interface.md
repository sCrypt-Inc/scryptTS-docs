[**bitcoinjs-lib v1.0.7**](../../../README.md)

***

[bitcoinjs-lib](../../../README.md) / [types](../README.md) / TinySecp256k1Interface

# Interface: TinySecp256k1Interface

Defined in: [ts\_src/types.ts:82](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/types.ts#L82)

## Methods

### isXOnlyPoint()

> **isXOnlyPoint**(`p`): `boolean`

Defined in: [ts\_src/types.ts:83](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/types.ts#L83)

#### Parameters

##### p

`Uint8Array`

#### Returns

`boolean`

***

### sign()

> **sign**(`h`, `d`, `e`?): `Uint8Array`

Defined in: [ts\_src/types.ts:88](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/types.ts#L88)

#### Parameters

##### h

`Uint8Array`

##### d

`Uint8Array`

##### e?

`Uint8Array`

#### Returns

`Uint8Array`

***

### signSchnorr()?

> `optional` **signSchnorr**(`h`, `d`, `e`?): `Uint8Array`

Defined in: [ts\_src/types.ts:89](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/types.ts#L89)

#### Parameters

##### h

`Uint8Array`

##### d

`Uint8Array`

##### e?

`Uint8Array`

#### Returns

`Uint8Array`

***

### verify()

> **verify**(`h`, `Q`, `signature`, `strict`?): `boolean`

Defined in: [ts\_src/types.ts:90](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/types.ts#L90)

#### Parameters

##### h

`Uint8Array`

##### Q

`Uint8Array`

##### signature

`Uint8Array`

##### strict?

`boolean`

#### Returns

`boolean`

***

### verifySchnorr()?

> `optional` **verifySchnorr**(`h`, `Q`, `signature`): `boolean`

Defined in: [ts\_src/types.ts:96](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/types.ts#L96)

#### Parameters

##### h

`Uint8Array`

##### Q

`Uint8Array`

##### signature

`Uint8Array`

#### Returns

`boolean`

***

### xOnlyPointAddTweak()

> **xOnlyPointAddTweak**(`p`, `tweak`): `null` \| [`XOnlyPointAddTweakResult`](XOnlyPointAddTweakResult.md)

Defined in: [ts\_src/types.ts:84](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/types.ts#L84)

#### Parameters

##### p

`Uint8Array`

##### tweak

`Uint8Array`

#### Returns

`null` \| [`XOnlyPointAddTweakResult`](XOnlyPointAddTweakResult.md)
