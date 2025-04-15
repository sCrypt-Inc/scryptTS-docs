[**bitcoinjs-lib v0.2.9-beta.16**](../README.md)

***

[bitcoinjs-lib](../README.md) / bvmVerify

# Function: bvmVerify()

> **bvmVerify**(`extPsbt`, `inputIndex`): `string` \| `true`

Defined in: [packages/scrypt-ts-btc/src/utils/bvm.ts:39](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/utils/bvm.ts#L39)

Verify that an input of `ExtPsbt` can be unlocked correctly. The extPsbt should be finalized.

## Parameters

### extPsbt

[`ExtPsbt`](../classes/ExtPsbt.md)

### inputIndex

`number` = `0`

## Returns

`string` \| `true`

true if success
