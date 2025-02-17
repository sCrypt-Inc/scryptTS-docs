[**bitcoinjs-lib v1.0.7**](../README.md)

***

[bitcoinjs-lib](../README.md) / Block

# Class: Block

Defined in: [ts\_src/block.ts:20](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/block.ts#L20)

## Constructors

### new Block()

> **new Block**(): [`Block`](Block.md)

#### Returns

[`Block`](Block.md)

## Properties

### bits

> **bits**: `number` = `0`

Defined in: [ts\_src/block.ts:101](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/block.ts#L101)

***

### merkleRoot?

> `optional` **merkleRoot**: `Uint8Array` = `undefined`

Defined in: [ts\_src/block.ts:98](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/block.ts#L98)

***

### nonce

> **nonce**: `number` = `0`

Defined in: [ts\_src/block.ts:102](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/block.ts#L102)

***

### prevHash?

> `optional` **prevHash**: `Uint8Array` = `undefined`

Defined in: [ts\_src/block.ts:97](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/block.ts#L97)

***

### timestamp

> **timestamp**: `number` = `0`

Defined in: [ts\_src/block.ts:99](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/block.ts#L99)

***

### transactions?

> `optional` **transactions**: [`Transaction`](Transaction.md)[] = `undefined`

Defined in: [ts\_src/block.ts:103](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/block.ts#L103)

***

### version

> **version**: `number` = `1`

Defined in: [ts\_src/block.ts:96](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/block.ts#L96)

***

### witnessCommit?

> `optional` **witnessCommit**: `Uint8Array` = `undefined`

Defined in: [ts\_src/block.ts:100](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/block.ts#L100)

## Methods

### byteLength()

> **byteLength**(`headersOnly`?, `allowWitness`?): `number`

Defined in: [ts\_src/block.ts:147](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/block.ts#L147)

#### Parameters

##### headersOnly?

`boolean`

##### allowWitness?

`boolean` = `true`

#### Returns

`number`

***

### checkProofOfWork()

> **checkProofOfWork**(): `boolean`

Defined in: [ts\_src/block.ts:218](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/block.ts#L218)

#### Returns

`boolean`

***

### checkTxRoots()

> **checkTxRoots**(): `boolean`

Defined in: [ts\_src/block.ts:207](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/block.ts#L207)

#### Returns

`boolean`

***

### getHash()

> **getHash**(): `Uint8Array`

Defined in: [ts\_src/block.ts:157](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/block.ts#L157)

#### Returns

`Uint8Array`

***

### getId()

> **getId**(): `string`

Defined in: [ts\_src/block.ts:161](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/block.ts#L161)

#### Returns

`string`

***

### getUTCDate()

> **getUTCDate**(): `Date`

Defined in: [ts\_src/block.ts:165](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/block.ts#L165)

#### Returns

`Date`

***

### getWitnessCommit()

> **getWitnessCommit**(): `null` \| `Uint8Array`

Defined in: [ts\_src/block.ts:105](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/block.ts#L105)

#### Returns

`null` \| `Uint8Array`

***

### hasWitness()

> **hasWitness**(): `boolean`

Defined in: [ts\_src/block.ts:137](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/block.ts#L137)

#### Returns

`boolean`

***

### hasWitnessCommit()

> **hasWitnessCommit**(): `boolean`

Defined in: [ts\_src/block.ts:127](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/block.ts#L127)

#### Returns

`boolean`

***

### toBuffer()

> **toBuffer**(`headersOnly`?): `Uint8Array`

Defined in: [ts\_src/block.ts:173](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/block.ts#L173)

#### Parameters

##### headersOnly?

`boolean`

#### Returns

`Uint8Array`

***

### toHex()

> **toHex**(`headersOnly`?): `string`

Defined in: [ts\_src/block.ts:203](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/block.ts#L203)

#### Parameters

##### headersOnly?

`boolean`

#### Returns

`string`

***

### weight()

> **weight**(): `number`

Defined in: [ts\_src/block.ts:141](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/block.ts#L141)

#### Returns

`number`

***

### calculateMerkleRoot()

> `static` **calculateMerkleRoot**(`transactions`, `forWitness`?): `Uint8Array`

Defined in: [ts\_src/block.ts:74](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/block.ts#L74)

#### Parameters

##### transactions

[`Transaction`](Transaction.md)[]

##### forWitness?

`boolean`

#### Returns

`Uint8Array`

***

### calculateTarget()

> `static` **calculateTarget**(`bits`): `Uint8Array`

Defined in: [ts\_src/block.ts:64](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/block.ts#L64)

#### Parameters

##### bits

`number`

#### Returns

`Uint8Array`

***

### fromBuffer()

> `static` **fromBuffer**(`buffer`): [`Block`](Block.md)

Defined in: [ts\_src/block.ts:21](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/block.ts#L21)

#### Parameters

##### buffer

`Uint8Array`

#### Returns

[`Block`](Block.md)

***

### fromHex()

> `static` **fromHex**(`hex`): [`Block`](Block.md)

Defined in: [ts\_src/block.ts:60](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/block.ts#L60)

#### Parameters

##### hex

`string`

#### Returns

[`Block`](Block.md)
