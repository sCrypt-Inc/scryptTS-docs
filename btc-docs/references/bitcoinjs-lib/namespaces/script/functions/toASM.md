[**bitcoinjs-lib v1.0.7**](../../../README.md)

***

[bitcoinjs-lib](../../../README.md) / [script](../README.md) / toASM

# Function: toASM()

> **toASM**(`chunks`): `string`

Defined in: [ts\_src/script.ts:226](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/script.ts#L226)

Converts the given chunks into an ASM (Assembly) string representation.
If the chunks parameter is a Buffer, it will be decompiled into a Stack before conversion.

## Parameters

### chunks

The chunks to convert into ASM.

`Uint8Array` | (`number` \| `Uint8Array`)[]

## Returns

`string`

The ASM string representation of the chunks.
