[**bitcoinjs-lib v0.2.9-beta.16**](../README.md)

***

[bitcoinjs-lib](../README.md) / call

# Function: call()

> **call**(`signer`, `provider`, `covenant`, `subContractCall`, `newCovenant`?): `Promise`\<[`ExtPsbt`](../classes/ExtPsbt.md)\>

Defined in: [packages/scrypt-ts-btc/src/features/call.ts:17](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/features/call.ts#L17)

call a covenant

## Parameters

### signer

[`Signer`](../interfaces/Signer.md)

a signer, such as [DefaultSigner](../classes/DefaultSigner.md)  or [UnisatSigner](../classes/UnisatSigner.md)

### provider

[`UtxoProvider`](../interfaces/UtxoProvider.md) & [`ChainProvider`](../interfaces/ChainProvider.md)

a  [UtxoProvider](../interfaces/UtxoProvider.md)

### covenant

[`Covenant`](../classes/Covenant.md)

the covenant

### subContractCall

`SubContractCall`

### newCovenant?

#### covenant

[`Covenant`](../classes/Covenant.md)

#### satoshis

`number`

## Returns

`Promise`\<[`ExtPsbt`](../classes/ExtPsbt.md)\>

the called psbt
