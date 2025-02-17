[**bitcoinjs-lib v1.0.7**](../../../README.md)

***

[bitcoinjs-lib](../../../README.md) / [psbt](../README.md) / PsbtInputExtended

# Interface: PsbtInputExtended

Defined in: [ts\_src/psbt.ts:1167](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/psbt.ts#L1167)

## Extends

- `PsbtInput`.[`TransactionInput`](../../../interfaces/TransactionInput.md)

## Properties

### bip32Derivation?

> `optional` **bip32Derivation**: `Bip32Derivation`[]

Defined in: node\_modules/bip174/src/esm/lib/interfaces.d.ts:32

#### Inherited from

`PsbtInput.bip32Derivation`

***

### finalScriptSig?

> `optional` **finalScriptSig**: `Uint8Array`

Defined in: node\_modules/bip174/src/esm/lib/interfaces.d.ts:33

#### Inherited from

`PsbtInput.finalScriptSig`

***

### finalScriptWitness?

> `optional` **finalScriptWitness**: `Uint8Array`

Defined in: node\_modules/bip174/src/esm/lib/interfaces.d.ts:34

#### Inherited from

`PsbtInput.finalScriptWitness`

***

### hash

> **hash**: `string` \| `Uint8Array`

Defined in: [ts\_src/psbt.ts:52](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/psbt.ts#L52)

#### Inherited from

[`TransactionInput`](../../../interfaces/TransactionInput.md).[`hash`](../../../interfaces/TransactionInput.md#hash)

***

### index

> **index**: `number`

Defined in: [ts\_src/psbt.ts:53](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/psbt.ts#L53)

#### Inherited from

[`TransactionInput`](../../../interfaces/TransactionInput.md).[`index`](../../../interfaces/TransactionInput.md#index)

***

### nonWitnessUtxo?

> `optional` **nonWitnessUtxo**: `Uint8Array`

Defined in: node\_modules/bip174/src/esm/lib/interfaces.d.ts:27

#### Inherited from

`PsbtInput.nonWitnessUtxo`

***

### partialSig?

> `optional` **partialSig**: `PartialSig`[]

Defined in: node\_modules/bip174/src/esm/lib/interfaces.d.ts:26

#### Inherited from

`PsbtInput.partialSig`

***

### porCommitment?

> `optional` **porCommitment**: `string`

Defined in: node\_modules/bip174/src/esm/lib/interfaces.d.ts:35

#### Inherited from

`PsbtInput.porCommitment`

***

### redeemScript?

> `optional` **redeemScript**: `Uint8Array`

Defined in: node\_modules/bip174/src/esm/lib/interfaces.d.ts:30

#### Inherited from

`PsbtInput.redeemScript`

***

### sequence?

> `optional` **sequence**: `number`

Defined in: [ts\_src/psbt.ts:54](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/psbt.ts#L54)

#### Inherited from

[`TransactionInput`](../../../interfaces/TransactionInput.md).[`sequence`](../../../interfaces/TransactionInput.md#sequence)

***

### sighashType?

> `optional` **sighashType**: `number`

Defined in: node\_modules/bip174/src/esm/lib/interfaces.d.ts:29

#### Inherited from

`PsbtInput.sighashType`

***

### tapBip32Derivation?

> `optional` **tapBip32Derivation**: `TapBip32Derivation`[]

Defined in: node\_modules/bip174/src/esm/lib/interfaces.d.ts:39

#### Inherited from

`PsbtInput.tapBip32Derivation`

***

### tapInternalKey?

> `optional` **tapInternalKey**: `Uint8Array`

Defined in: node\_modules/bip174/src/esm/lib/interfaces.d.ts:40

#### Inherited from

`PsbtInput.tapInternalKey`

***

### tapKeySig?

> `optional` **tapKeySig**: `Uint8Array`

Defined in: node\_modules/bip174/src/esm/lib/interfaces.d.ts:36

#### Inherited from

`PsbtInput.tapKeySig`

***

### tapLeafScript?

> `optional` **tapLeafScript**: `TapLeafScript`[]

Defined in: node\_modules/bip174/src/esm/lib/interfaces.d.ts:38

#### Inherited from

`PsbtInput.tapLeafScript`

***

### tapMerkleRoot?

> `optional` **tapMerkleRoot**: `Uint8Array`

Defined in: node\_modules/bip174/src/esm/lib/interfaces.d.ts:41

#### Inherited from

`PsbtInput.tapMerkleRoot`

***

### tapScriptSig?

> `optional` **tapScriptSig**: `TapScriptSig`[]

Defined in: node\_modules/bip174/src/esm/lib/interfaces.d.ts:37

#### Inherited from

`PsbtInput.tapScriptSig`

***

### unknownKeyVals?

> `optional` **unknownKeyVals**: `KeyValue`[]

Defined in: node\_modules/bip174/src/esm/lib/interfaces.d.ts:23

#### Inherited from

`PsbtInput.unknownKeyVals`

***

### witnessScript?

> `optional` **witnessScript**: `Uint8Array`

Defined in: node\_modules/bip174/src/esm/lib/interfaces.d.ts:31

#### Inherited from

`PsbtInput.witnessScript`

***

### witnessUtxo?

> `optional` **witnessUtxo**: `WitnessUtxo`

Defined in: node\_modules/bip174/src/esm/lib/interfaces.d.ts:28

#### Inherited from

`PsbtInput.witnessUtxo`
