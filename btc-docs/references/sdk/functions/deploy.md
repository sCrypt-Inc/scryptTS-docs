[**bitcoinjs-lib v0.2.9-beta.16**](../README.md)

***

[bitcoinjs-lib](../README.md) / deploy

# Function: deploy()

> **deploy**(`signer`, `provider`, `covenant`, `network`, `satoshis`): `Promise`\<[`ExtPsbt`](../classes/ExtPsbt.md)\>

Defined in: [packages/scrypt-ts-btc/src/features/deploy.ts:17](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/features/deploy.ts#L17)

Deploy a covenant

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

### network

[`SupportedNetwork`](../type-aliases/SupportedNetwork.md) = `'fractal-testnet'`

### satoshis

`number` = `330`

## Returns

`Promise`\<[`ExtPsbt`](../classes/ExtPsbt.md)\>

the deployed psbt
