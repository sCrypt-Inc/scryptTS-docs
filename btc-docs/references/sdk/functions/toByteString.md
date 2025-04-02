[**bitcoinjs-lib v0.2.9-beta.16**](../README.md)

***

[bitcoinjs-lib](../README.md) / toByteString

# Function: toByteString()

> **toByteString**(`literal`, `isUtf8`): [`ByteString`](../type-aliases/ByteString.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/fns/byteString.ts:16](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/fns/byteString.ts#L16)

Converts a literal to ByteString.
If not passing `isUtf8` or `isUtf8` is false, then `literal` should be in the format of hex literal, i.e. `/^([0-9a-fA-F]{2})*$/`
Otherwise, `literal` should be in the format of utf8 literal, i.e. `hello world`

## Parameters

### literal

`string`

literal string, can be hex literal or utf8 literal, depends on the `isUtf8` marker

### isUtf8

`boolean` = `false`

marker indicating whether `literal` is utf8 or hex

## Returns

[`ByteString`](../type-aliases/ByteString.md)

returns a ByteString

## Onchain
