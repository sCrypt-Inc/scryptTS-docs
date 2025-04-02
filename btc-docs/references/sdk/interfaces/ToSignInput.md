[**bitcoinjs-lib v0.2.9-beta.16**](../README.md)

***

[bitcoinjs-lib](../README.md) / ToSignInput

# Interface: ToSignInput

Defined in: [packages/scrypt-ts-btc/src/signer.ts:16](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/signer.ts#L16)

signPsbt input options

## Properties

### address?

> `optional` **address**: `string`

Defined in: [packages/scrypt-ts-btc/src/signer.ts:20](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/signer.ts#L20)

which address corresponding private key to use for signing

***

### disableTweakSigner?

> `optional` **disableTweakSigner**: `boolean`

Defined in: [packages/scrypt-ts-btc/src/signer.ts:28](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/signer.ts#L28)

default value is false. Setting it true allows the use of the original private key when signing taproot inputs.

***

### index

> **index**: `number`

Defined in: [packages/scrypt-ts-btc/src/signer.ts:18](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/signer.ts#L18)

which input to sign

***

### publicKey?

> `optional` **publicKey**: `string`

Defined in: [packages/scrypt-ts-btc/src/signer.ts:22](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/signer.ts#L22)

which publicKey corresponding private key to use for signing

***

### sighashTypes?

> `optional` **sighashTypes**: `number`[]

Defined in: [packages/scrypt-ts-btc/src/signer.ts:26](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/signer.ts#L26)

sighashTypes

***

### tapLeafHashToSign?

> `optional` **tapLeafHashToSign**: `string`

Defined in: [packages/scrypt-ts-btc/src/signer.ts:24](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/signer.ts#L24)

tapLeafHashToSign
