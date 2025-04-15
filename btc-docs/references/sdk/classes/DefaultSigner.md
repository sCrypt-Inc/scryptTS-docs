[**bitcoinjs-lib v0.2.9-beta.16**](../README.md)

***

[bitcoinjs-lib](../README.md) / DefaultSigner

# Class: DefaultSigner

Defined in: [packages/scrypt-ts-btc/src/signers/defaultSigner.ts:20](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/signers/defaultSigner.ts#L20)

An implemention of a simple signer which should just be used in nodejs environments.

## Implements

- [`Signer`](../interfaces/Signer.md)

## Constructors

### new DefaultSigner()

> **new DefaultSigner**(`keyPair`, `network`, `addressType`): [`DefaultSigner`](DefaultSigner.md)

Defined in: [packages/scrypt-ts-btc/src/signers/defaultSigner.ts:21](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/signers/defaultSigner.ts#L21)

#### Parameters

##### keyPair

`ECPairInterface` = `...`

##### network

[`SupportedNetwork`](../type-aliases/SupportedNetwork.md) = `'fractal-testnet'`

##### addressType

`AddressType` = `AddressType.P2TR`

#### Returns

[`DefaultSigner`](DefaultSigner.md)

## Methods

### getAddress()

> **getAddress**(): `Promise`\<`string`\>

Defined in: [packages/scrypt-ts-btc/src/signers/defaultSigner.ts:27](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/signers/defaultSigner.ts#L27)

Get address of current signer.

#### Returns

`Promise`\<`string`\>

#### Implementation of

[`Signer`](../interfaces/Signer.md).[`getAddress`](../interfaces/Signer.md#getaddress)

***

### getPublicKey()

> **getPublicKey**(): `Promise`\<`string`\>

Defined in: [packages/scrypt-ts-btc/src/signers/defaultSigner.ts:37](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/signers/defaultSigner.ts#L37)

Get publicKey of current signer.

#### Returns

`Promise`\<`string`\>

#### Implementation of

[`Signer`](../interfaces/Signer.md).[`getPublicKey`](../interfaces/Signer.md#getpublickey)

***

### signPsbt()

> **signPsbt**(`psbtHex`, `options`?): `Promise`\<`string`\>

Defined in: [packages/scrypt-ts-btc/src/signers/defaultSigner.ts:41](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/signers/defaultSigner.ts#L41)

traverse all inputs that match the current address to sign.

#### Parameters

##### psbtHex

`string`

##### options?

[`SignOptions`](../interfaces/SignOptions.md)

#### Returns

`Promise`\<`string`\>

#### Implementation of

[`Signer`](../interfaces/Signer.md).[`signPsbt`](../interfaces/Signer.md#signpsbt)

***

### signPsbts()

> **signPsbts**(`reqs`): `Promise`\<`string`[]\>

Defined in: [packages/scrypt-ts-btc/src/signers/defaultSigner.ts:108](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/signers/defaultSigner.ts#L108)

same as signPsbt, but sign multiple PSBTs at once.

#### Parameters

##### reqs

`object`[]

#### Returns

`Promise`\<`string`[]\>

#### Implementation of

[`Signer`](../interfaces/Signer.md).[`signPsbts`](../interfaces/Signer.md#signpsbts)
