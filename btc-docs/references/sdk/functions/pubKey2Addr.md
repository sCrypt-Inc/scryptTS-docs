[**bitcoinjs-lib v0.2.9-beta.16**](../README.md)

***

[bitcoinjs-lib](../README.md) / pubKey2Addr

# Function: pubKey2Addr()

> **pubKey2Addr**(`pubkey`): [`Ripemd160`](../type-aliases/Ripemd160.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/fns/pubKey2Addr.ts:12](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/fns/pubKey2Addr.ts#L12)

Get Addr for PubKey.
Under the hood this just wraps the hash160 function.

## Parameters

### pubkey

[`PubKey`](../type-aliases/PubKey.md)

the public key.

## Returns

[`Ripemd160`](../type-aliases/Ripemd160.md)

address for the passed public key.

## Onchain
