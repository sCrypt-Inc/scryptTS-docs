[**bitcoinjs-lib v1.0.7**](../../../README.md)

***

[bitcoinjs-lib](../../../README.md) / [psbt](../README.md) / PsbtOutputExtendedAddress

# Interface: PsbtOutputExtendedAddress

Defined in: [ts\_src/psbt.ts:1173](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/psbt.ts#L1173)

## Extends

- `PsbtOutput`

## Properties

### address

> **address**: `string`

Defined in: [ts\_src/psbt.ts:1174](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/psbt.ts#L1174)

***

### bip32Derivation?

> `optional` **bip32Derivation**: `Bip32Derivation`[]

Defined in: node\_modules/bip174/src/esm/lib/interfaces.d.ts:52

#### Inherited from

`PsbtOutput.bip32Derivation`

***

### redeemScript?

> `optional` **redeemScript**: `Uint8Array`

Defined in: node\_modules/bip174/src/esm/lib/interfaces.d.ts:50

#### Inherited from

`PsbtOutput.redeemScript`

***

### tapBip32Derivation?

> `optional` **tapBip32Derivation**: `TapBip32Derivation`[]

Defined in: node\_modules/bip174/src/esm/lib/interfaces.d.ts:53

#### Inherited from

`PsbtOutput.tapBip32Derivation`

***

### tapInternalKey?

> `optional` **tapInternalKey**: `Uint8Array`

Defined in: node\_modules/bip174/src/esm/lib/interfaces.d.ts:55

#### Inherited from

`PsbtOutput.tapInternalKey`

***

### tapTree?

> `optional` **tapTree**: `TapTree`

Defined in: node\_modules/bip174/src/esm/lib/interfaces.d.ts:54

#### Inherited from

`PsbtOutput.tapTree`

***

### unknownKeyVals?

> `optional` **unknownKeyVals**: `KeyValue`[]

Defined in: node\_modules/bip174/src/esm/lib/interfaces.d.ts:47

#### Inherited from

`PsbtOutput.unknownKeyVals`

***

### value

> **value**: `bigint`

Defined in: [ts\_src/psbt.ts:1175](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/psbt.ts#L1175)

***

### witnessScript?

> `optional` **witnessScript**: `Uint8Array`

Defined in: node\_modules/bip174/src/esm/lib/interfaces.d.ts:51

#### Inherited from

`PsbtOutput.witnessScript`
