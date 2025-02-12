[**scrypt-ts**](../README.md)

***

[scrypt-ts](../globals.md) / toByteString

# Function: toByteString()

> **toByteString**(`literal`, `isUtf8`?): [`ByteString`](../type-aliases/ByteString.md)

Defined in: scrypt-ts/dist/smart-contract/builtins/types.d.ts:97

Converts a literal to ByteString.
If not passing `isUtf8` or `isUtf8` is false, then `literal` should be in the format of hex literal, i.e. `/^([0-9a-fA-F]{2})*$/`
Otherwise, `literal` should be in the format of utf8 literal, i.e. `hello world`

## Parameters

### literal

`string`

literal string, can be hex literal or utf8 literal, depends on the `isUtf8` marker

### isUtf8?

`boolean`

marker indicating whether `literal` is utf8 or hex

## Returns

[`ByteString`](../type-aliases/ByteString.md)
