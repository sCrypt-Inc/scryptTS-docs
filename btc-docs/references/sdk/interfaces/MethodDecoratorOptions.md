[**bitcoinjs-lib v0.2.9-beta.16**](../README.md)

***

[bitcoinjs-lib](../README.md) / MethodDecoratorOptions

# Interface: MethodDecoratorOptions

Defined in: [packages/scrypt-ts-btc/src/smart-contract/decorators.ts:26](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/decorators.ts#L26)

When `autoCheckInputStateHash` is set to true, the system will automatically check the StateHash of all inputs
in the current transaction by default.  Otherwise, you can use `this.checkInputStateHash(inputIndex: Int32, stateHash: ByteString)`
to manually specify which input's StateHash to verify.

## Onchain

## Properties

### autoCheckInputStateHash

> **autoCheckInputStateHash**: `boolean`

Defined in: [packages/scrypt-ts-btc/src/smart-contract/decorators.ts:27](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/decorators.ts#L27)
