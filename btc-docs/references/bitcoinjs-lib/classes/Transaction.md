[**bitcoinjs-lib v1.0.7**](../README.md)

***

[bitcoinjs-lib](../README.md) / Transaction

# Class: Transaction

Defined in: [ts\_src/transaction.ts:83](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/transaction.ts#L83)

Represents a Bitcoin transaction.

## Constructors

### new Transaction()

> **new Transaction**(): [`Transaction`](Transaction.md)

#### Returns

[`Transaction`](Transaction.md)

## Properties

### ins

> **ins**: [`TxInput`](../interfaces/TxInput.md)[] = `[]`

Defined in: [ts\_src/transaction.ts:166](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/transaction.ts#L166)

***

### locktime

> **locktime**: `number` = `0`

Defined in: [ts\_src/transaction.ts:165](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/transaction.ts#L165)

***

### outs

> **outs**: [`TxOutput`](../interfaces/TxOutput.md)[] = `[]`

Defined in: [ts\_src/transaction.ts:167](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/transaction.ts#L167)

***

### version

> **version**: `number` = `1`

Defined in: [ts\_src/transaction.ts:164](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/transaction.ts#L164)

***

### ADVANCED\_TRANSACTION\_FLAG

> `readonly` `static` **ADVANCED\_TRANSACTION\_FLAG**: `1` = `0x01`

Defined in: [ts\_src/transaction.ts:93](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/transaction.ts#L93)

***

### ADVANCED\_TRANSACTION\_MARKER

> `readonly` `static` **ADVANCED\_TRANSACTION\_MARKER**: `0` = `0x00`

Defined in: [ts\_src/transaction.ts:92](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/transaction.ts#L92)

***

### DEFAULT\_SEQUENCE

> `readonly` `static` **DEFAULT\_SEQUENCE**: `4294967295` = `0xffffffff`

Defined in: [ts\_src/transaction.ts:84](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/transaction.ts#L84)

***

### SIGHASH\_ALL

> `readonly` `static` **SIGHASH\_ALL**: `1` = `0x01`

Defined in: [ts\_src/transaction.ts:86](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/transaction.ts#L86)

***

### SIGHASH\_ANYONECANPAY

> `readonly` `static` **SIGHASH\_ANYONECANPAY**: `128` = `0x80`

Defined in: [ts\_src/transaction.ts:89](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/transaction.ts#L89)

***

### SIGHASH\_DEFAULT

> `readonly` `static` **SIGHASH\_DEFAULT**: `0` = `0x00`

Defined in: [ts\_src/transaction.ts:85](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/transaction.ts#L85)

***

### SIGHASH\_INPUT\_MASK

> `readonly` `static` **SIGHASH\_INPUT\_MASK**: `128` = `0x80`

Defined in: [ts\_src/transaction.ts:91](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/transaction.ts#L91)

***

### SIGHASH\_NONE

> `readonly` `static` **SIGHASH\_NONE**: `2` = `0x02`

Defined in: [ts\_src/transaction.ts:87](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/transaction.ts#L87)

***

### SIGHASH\_OUTPUT\_MASK

> `readonly` `static` **SIGHASH\_OUTPUT\_MASK**: `3` = `0x03`

Defined in: [ts\_src/transaction.ts:90](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/transaction.ts#L90)

***

### SIGHASH\_SINGLE

> `readonly` `static` **SIGHASH\_SINGLE**: `3` = `0x03`

Defined in: [ts\_src/transaction.ts:88](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/transaction.ts#L88)

## Methods

### addInput()

> **addInput**(`hash`, `index`, `sequence`?, `scriptSig`?): `number`

Defined in: [ts\_src/transaction.ts:175](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/transaction.ts#L175)

#### Parameters

##### hash

`Uint8Array`

##### index

`number`

##### sequence?

`number`

##### scriptSig?

`Uint8Array`

#### Returns

`number`

***

### addOutput()

> **addOutput**(`scriptPubKey`, `value`): `number`

Defined in: [ts\_src/transaction.ts:207](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/transaction.ts#L207)

#### Parameters

##### scriptPubKey

`Uint8Array`

##### value

`bigint`

#### Returns

`number`

***

### byteLength()

> **byteLength**(`_ALLOW_WITNESS`): `number`

Defined in: [ts\_src/transaction.ts:238](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/transaction.ts#L238)

#### Parameters

##### \_ALLOW\_WITNESS

`boolean` = `true`

#### Returns

`number`

***

### clone()

> **clone**(): [`Transaction`](Transaction.md)

Defined in: [ts\_src/transaction.ts:259](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/transaction.ts#L259)

#### Returns

[`Transaction`](Transaction.md)

***

### getHash()

> **getHash**(`forWitness`?): `Uint8Array`

Defined in: [ts\_src/transaction.ts:647](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/transaction.ts#L647)

#### Parameters

##### forWitness?

`boolean`

#### Returns

`Uint8Array`

***

### getId()

> **getId**(): `string`

Defined in: [ts\_src/transaction.ts:653](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/transaction.ts#L653)

#### Returns

`string`

***

### hashForSignature()

> **hashForSignature**(`inIndex`, `prevOutScript`, `hashType`): `Uint8Array`

Defined in: [ts\_src/transaction.ts:292](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/transaction.ts#L292)

Hash transaction for signing a specific input.

Bitcoin uses a different hash for each signed transaction input.
This method copies the transaction, makes the necessary changes based on the
hashType, and then hashes the result.
This hash can then be used to sign the provided transaction input.

#### Parameters

##### inIndex

`number`

##### prevOutScript

`Uint8Array`

##### hashType

`number`

#### Returns

`Uint8Array`

***

### hashForWitnessV0()

> **hashForWitnessV0**(`inIndex`, `prevOutScript`, `value`, `hashType`): `Uint8Array`

Defined in: [ts\_src/transaction.ts:548](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/transaction.ts#L548)

#### Parameters

##### inIndex

`number`

##### prevOutScript

`Uint8Array`

##### value

`bigint`

##### hashType

`number`

#### Returns

`Uint8Array`

***

### hashForWitnessV1()

> **hashForWitnessV1**(`inIndex`, `prevOutScripts`, `values`, `hashType`, `leafHash`?, `annex`?, `codeseparatorPos`?): `Uint8Array`

Defined in: [ts\_src/transaction.ts:369](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/transaction.ts#L369)

#### Parameters

##### inIndex

`number`

##### prevOutScripts

`Uint8Array`[]

##### values

`bigint`[]

##### hashType

`number`

##### leafHash?

`Uint8Array`

##### annex?

`Uint8Array`

##### codeseparatorPos?

`number`

#### Returns

`Uint8Array`

***

### hasWitnesses()

> **hasWitnesses**(): `boolean`

Defined in: [ts\_src/transaction.ts:222](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/transaction.ts#L222)

#### Returns

`boolean`

***

### isCoinbase()

> **isCoinbase**(): `boolean`

Defined in: [ts\_src/transaction.ts:169](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/transaction.ts#L169)

#### Returns

`boolean`

***

### setInputScript()

> **setInputScript**(`index`, `scriptSig`): `void`

Defined in: [ts\_src/transaction.ts:666](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/transaction.ts#L666)

#### Parameters

##### index

`number`

##### scriptSig

`Uint8Array`

#### Returns

`void`

***

### setWitness()

> **setWitness**(`index`, `witness`): `void`

Defined in: [ts\_src/transaction.ts:672](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/transaction.ts#L672)

#### Parameters

##### index

`number`

##### witness

`Uint8Array`[]

#### Returns

`void`

***

### shPreimageForWitnessV1()

> **shPreimageForWitnessV1**(`inIndex`, `prevOutScripts`, `values`, `hashType`, `leafHash`?, `annex`?, `codeseparatorPos`?): `Uint8Array`

Defined in: [ts\_src/transaction.ts:390](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/transaction.ts#L390)

#### Parameters

##### inIndex

`number`

##### prevOutScripts

`Uint8Array`[]

##### values

`bigint`[]

##### hashType

`number`

##### leafHash?

`Uint8Array`

##### annex?

`Uint8Array`

##### codeseparatorPos?

`number`

#### Returns

`Uint8Array`

***

### toBuffer()

> **toBuffer**(`buffer`?, `initialOffset`?): `Uint8Array`

Defined in: [ts\_src/transaction.ts:658](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/transaction.ts#L658)

#### Parameters

##### buffer?

`Uint8Array`

##### initialOffset?

`number`

#### Returns

`Uint8Array`

***

### toHex()

> **toHex**(): `string`

Defined in: [ts\_src/transaction.ts:662](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/transaction.ts#L662)

#### Returns

`string`

***

### verify()

> **verify**(): `string` \| `true`

Defined in: [ts\_src/transaction.ts:739](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/transaction.ts#L739)

Check that a transaction passes basic sanity tests. If not, return a string
describing the error. This function contains the same logic as
CheckTransaction in bitcoin core.

#### Returns

`string` \| `true`

***

### virtualSize()

> **virtualSize**(): `number`

Defined in: [ts\_src/transaction.ts:234](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/transaction.ts#L234)

#### Returns

`number`

***

### weight()

> **weight**(): `number`

Defined in: [ts\_src/transaction.ts:228](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/transaction.ts#L228)

#### Returns

`number`

***

### fromBuffer()

> `static` **fromBuffer**(`buffer`, `_NO_STRICT`?): [`Transaction`](Transaction.md)

Defined in: [ts\_src/transaction.ts:95](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/transaction.ts#L95)

#### Parameters

##### buffer

`Uint8Array`

##### \_NO\_STRICT?

`boolean`

#### Returns

[`Transaction`](Transaction.md)

***

### fromHex()

> `static` **fromHex**(`hex`): [`Transaction`](Transaction.md)

Defined in: [ts\_src/transaction.ts:152](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/transaction.ts#L152)

#### Parameters

##### hex

`string`

#### Returns

[`Transaction`](Transaction.md)

***

### isCoinbaseHash()

> `static` **isCoinbaseHash**(`buffer`): `boolean`

Defined in: [ts\_src/transaction.ts:156](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/transaction.ts#L156)

#### Parameters

##### buffer

`Uint8Array`

#### Returns

`boolean`
