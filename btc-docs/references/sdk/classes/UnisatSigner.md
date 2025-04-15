[**bitcoinjs-lib v0.2.9-beta.16**](../README.md)

***

[bitcoinjs-lib](../README.md) / UnisatSigner

# Class: UnisatSigner

Defined in: [packages/scrypt-ts-btc/src/signers/unisatSigner.ts:29](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/signers/unisatSigner.ts#L29)

a [signer][https://docs.scrypt.io/btc-docs/how-to-deploy-and-call-a-contract/#signer](https://docs.scrypt.io/btc-docs/how-to-deploy-and-call-a-contract/#signer) which implemented the protocol with the [Unisat wallet][https://unisat.io](https://unisat.io),
and dapps can use to interact with the Unisat wallet

## Implements

- [`Signer`](../interfaces/Signer.md)

## Constructors

### new UnisatSigner()

> **new UnisatSigner**(`unisat`): [`UnisatSigner`](UnisatSigner.md)

Defined in: [packages/scrypt-ts-btc/src/signers/unisatSigner.ts:32](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/signers/unisatSigner.ts#L32)

#### Parameters

##### unisat

[`UnisatAPI`](../interfaces/UnisatAPI.md)

#### Returns

[`UnisatSigner`](UnisatSigner.md)

## Methods

### getAddress()

> **getAddress**(): `Promise`\<`string`\>

Defined in: [packages/scrypt-ts-btc/src/signers/unisatSigner.ts:45](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/signers/unisatSigner.ts#L45)

Get address of current signer.

#### Returns

`Promise`\<`string`\>

#### Implementation of

[`Signer`](../interfaces/Signer.md).[`getAddress`](../interfaces/Signer.md#getaddress)

***

### getPublicKey()

> **getPublicKey**(): `Promise`\<`string`\>

Defined in: [packages/scrypt-ts-btc/src/signers/unisatSigner.ts:50](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/signers/unisatSigner.ts#L50)

Get publicKey of current signer.

#### Returns

`Promise`\<`string`\>

#### Implementation of

[`Signer`](../interfaces/Signer.md).[`getPublicKey`](../interfaces/Signer.md#getpublickey)

***

### getUnisatAPI()

> **getUnisatAPI**(): [`UnisatAPI`](../interfaces/UnisatAPI.md)

Defined in: [packages/scrypt-ts-btc/src/signers/unisatSigner.ts:36](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/signers/unisatSigner.ts#L36)

#### Returns

[`UnisatAPI`](../interfaces/UnisatAPI.md)

***

### signPsbt()

> **signPsbt**(`psbtHex`, `options`?): `Promise`\<`string`\>

Defined in: [packages/scrypt-ts-btc/src/signers/unisatSigner.ts:54](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/signers/unisatSigner.ts#L54)

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

Defined in: [packages/scrypt-ts-btc/src/signers/unisatSigner.ts:58](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/signers/unisatSigner.ts#L58)

same as signPsbt, but sign multiple PSBTs at once.

#### Parameters

##### reqs

`object`[]

#### Returns

`Promise`\<`string`[]\>

#### Implementation of

[`Signer`](../interfaces/Signer.md).[`signPsbts`](../interfaces/Signer.md#signpsbts)
