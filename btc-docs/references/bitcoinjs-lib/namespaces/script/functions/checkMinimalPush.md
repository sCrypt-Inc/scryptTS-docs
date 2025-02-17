[**bitcoinjs-lib v1.0.7**](../../../README.md)

***

[bitcoinjs-lib](../../../README.md) / [script](../README.md) / checkMinimalPush

# Function: checkMinimalPush()

> **checkMinimalPush**(`opcodenum`, `buf`): `boolean`

Defined in: [ts\_src/script.ts:197](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/script.ts#L197)

Comes from bitcoind's script interpreter CheckMinimalPush function

## Parameters

### opcodenum

`number`

### buf

`Uint8Array`

## Returns

`boolean`

if the chunk {i} is the smallest way to push that particular data.
