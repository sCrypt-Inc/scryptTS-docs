[**bitcoinjs-lib v1.0.7**](../../../README.md)

***

[bitcoinjs-lib](../../../README.md) / [address](../README.md) / fromBase58Check

# Function: fromBase58Check()

> **fromBase58Check**(`address`): [`Base58CheckResult`](../interfaces/Base58CheckResult.md)

Defined in: [ts\_src/address.ts:88](https://github.com/sCrypt-Inc/bitcoinjs-lib/blob/e3b2d1c4c35cd925f8b17063dc9eb0300cab46a2/ts_src/address.ts#L88)

Decodes a base58check encoded Bitcoin address and returns the version and hash.

## Parameters

### address

`string`

The base58check encoded Bitcoin address to decode.

## Returns

[`Base58CheckResult`](../interfaces/Base58CheckResult.md)

An object containing the version and hash of the decoded address.

## Throws

If the address is too short or too long.
