[**bitcoinjs-lib v1.0.7**](../README.md)

***

[bitcoinjs-lib](../README.md) / HDSigner

# Interface: HDSigner

Defined in: [ts\_src/psbt.ts:1194](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/psbt.ts#L1194)

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

> **derivePath**(`path`): [`HDSigner`](HDSigner.md)

Defined in: [ts\_src/psbt.ts:1199](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/psbt.ts#L1199)

The path string must match /^m(/\d+'?)+$/
ex. m/44'/0'/0'/1/23 levels with ' must be hard derivations

#### Parameters

##### path

`string`

#### Returns

[`HDSigner`](HDSigner.md)

***

### sign()

> **sign**(`hash`): `Uint8Array`

Defined in: [ts\_src/psbt.ts:1204](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/psbt.ts#L1204)

Input hash (the "message digest") for the signature algorithm
Return a 64 byte signature (32 byte r and 32 byte s in that order)

#### Parameters

##### hash

`Uint8Array`

#### Returns

`Uint8Array`
