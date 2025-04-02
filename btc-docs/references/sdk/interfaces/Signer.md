[**bitcoinjs-lib v0.2.9-beta.16**](../README.md)

***

[bitcoinjs-lib](../README.md) / Signer

# Interface: Signer

Defined in: [packages/scrypt-ts-btc/src/signer.ts:37](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/signer.ts#L37)

A `Signer` is a interface which in some way directly or indirectly has access to a private key, which can sign messages and transactions to authorize the network to perform operations.

## Methods

### getAddress()

> **getAddress**(): `Promise`\<`string`\>

Defined in: [packages/scrypt-ts-btc/src/signer.ts:39](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/signer.ts#L39)

Get address of current signer.

#### Returns

`Promise`\<`string`\>

***

### getPublicKey()

> **getPublicKey**(): `Promise`\<`string`\>

Defined in: [packages/scrypt-ts-btc/src/signer.ts:41](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/signer.ts#L41)

Get publicKey of current signer.

#### Returns

`Promise`\<`string`\>

***

### signPsbt()

> **signPsbt**(`psbtHex`, `options`?): `Promise`\<`string`\>

Defined in: [packages/scrypt-ts-btc/src/signer.ts:43](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/signer.ts#L43)

traverse all inputs that match the current address to sign.

#### Parameters

##### psbtHex

`string`

##### options?

[`SignOptions`](SignOptions.md)

#### Returns

`Promise`\<`string`\>

***

### signPsbts()

> **signPsbts**(`reqs`): `Promise`\<`string`[]\>

Defined in: [packages/scrypt-ts-btc/src/signer.ts:45](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/signer.ts#L45)

same as signPsbt, but sign multiple PSBTs at once.

#### Parameters

##### reqs

`object`[]

#### Returns

`Promise`\<`string`[]\>
