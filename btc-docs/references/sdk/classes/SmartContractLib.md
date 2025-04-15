[**bitcoinjs-lib v0.2.9-beta.16**](../README.md)

***

[bitcoinjs-lib](../README.md) / SmartContractLib

# Class: SmartContractLib

Defined in: [packages/scrypt-ts-btc/src/smart-contract/smartContractLib.ts:14](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/smartContractLib.ts#L14)

The contract library class. To write a contract library, extend this class as such:

## Example

```ts
class YourSmartContractLib extends SmartContractLib {
  // your library functions code here
}
```

## Extended by

- [`ContextUtils`](ContextUtils.md)
- [`TxUtils`](TxUtils.md)
- [`StateUtils`](StateUtils.md)
- [`TxProof`](TxProof.md)
- [`StdUtils`](StdUtils.md)
- [`Backtrace`](Backtrace.md)
- [`StateLib`](StateLib.md)

## Constructors

### new SmartContractLib()

> **new SmartContractLib**(...`args`): [`SmartContractLib`](SmartContractLib.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/smartContractLib.ts:29](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/smartContractLib.ts#L29)

#### Parameters

##### args

...`SupportedParamType`[]

#### Returns

[`SmartContractLib`](SmartContractLib.md)

## Properties

### args

> **args**: `any`[] = `[]`

Defined in: [packages/scrypt-ts-btc/src/smart-contract/smartContractLib.ts:28](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/smartContractLib.ts#L28)

***

### artifact

> `static` **artifact**: [`Artifact`](../interfaces/Artifact.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/smartContractLib.ts:15](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/smartContractLib.ts#L15)

***

### stateType?

> `static` `optional` **stateType**: `string`

Defined in: [packages/scrypt-ts-btc/src/smart-contract/smartContractLib.ts:16](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/smartContractLib.ts#L16)

## Methods

### loadArtifact()

> `static` **loadArtifact**(`artifact`): *typeof* [`SmartContractLib`](SmartContractLib.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/smartContractLib.ts:18](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/smartContractLib.ts#L18)

#### Parameters

##### artifact

[`Artifact`](../interfaces/Artifact.md)

#### Returns

*typeof* [`SmartContractLib`](SmartContractLib.md)
