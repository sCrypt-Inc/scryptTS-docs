[**bitcoinjs-lib v1.0.7**](../../../README.md)

***

[bitcoinjs-lib](../../../README.md) / [scriptNumber](../README.md) / decode

# Function: decode()

> **decode**(`buffer`, `maxLength`?, `minimal`?): `number`

Defined in: [ts\_src/script\_number.ts:13](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/script_number.ts#L13)

Decodes a script number from a buffer.

## Parameters

### buffer

`Uint8Array`

The buffer containing the script number.

### maxLength?

`number`

The maximum length of the script number. Defaults to 4.

### minimal?

`boolean`

Whether the script number should be minimal. Defaults to true.

## Returns

`number`

The decoded script number.

## Throws

If the script number overflows the maximum length.

## Throws

If the script number is not minimally encoded when minimal is true.
