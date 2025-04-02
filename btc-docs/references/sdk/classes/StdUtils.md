[**bitcoinjs-lib v0.2.9-beta.16**](../README.md)

***

[bitcoinjs-lib](../README.md) / StdUtils

# Class: StdUtils

Defined in: [packages/scrypt-ts-btc/src/smart-contract/builtin-libs/stdUtils.ts:7](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/builtin-libs/stdUtils.ts#L7)

The contract library class. To write a contract library, extend this class as such:

## Example

```ts
class YourSmartContractLib extends SmartContractLib {
  // your library functions code here
}
```

## Extends

- [`SmartContractLib`](SmartContractLib.md)

## Constructors

### new StdUtils()

> **new StdUtils**(...`args`): [`StdUtils`](StdUtils.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/smartContractLib.ts:29](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/smartContractLib.ts#L29)

#### Parameters

##### args

...`SupportedParamType`[]

#### Returns

[`StdUtils`](StdUtils.md)

#### Inherited from

[`SmartContractLib`](SmartContractLib.md).[`constructor`](SmartContractLib.md#constructors)

## Library

### checkInt32()

> `static` **checkInt32**(`i`, `b`): `boolean`

Defined in: [packages/scrypt-ts-btc/src/smart-contract/builtin-libs/stdUtils.ts:17](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/builtin-libs/stdUtils.ts#L17)

Checks if a ByteString is equivalent to a number

#### Parameters

##### i

[`Int32`](../type-aliases/Int32.md)

a number

##### b

[`ByteString`](../type-aliases/ByteString.md)

a ByteString

#### Returns

`boolean`

true if success

#### Onchain

## Other

### args

> **args**: `any`[] = `[]`

Defined in: [packages/scrypt-ts-btc/src/smart-contract/smartContractLib.ts:28](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/smartContractLib.ts#L28)

#### Inherited from

[`SmartContractLib`](SmartContractLib.md).[`args`](SmartContractLib.md#args-1)

***

### artifact

> `static` **artifact**: [`Artifact`](../interfaces/Artifact.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/smartContractLib.ts:15](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/smartContractLib.ts#L15)

#### Inherited from

[`SmartContractLib`](SmartContractLib.md).[`artifact`](SmartContractLib.md#artifact)

***

### stateType?

> `static` `optional` **stateType**: `string`

Defined in: [packages/scrypt-ts-btc/src/smart-contract/smartContractLib.ts:16](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/smartContractLib.ts#L16)

#### Inherited from

[`SmartContractLib`](SmartContractLib.md).[`stateType`](SmartContractLib.md#statetype)

***

### loadArtifact()

> `static` **loadArtifact**(`artifact`): *typeof* [`SmartContractLib`](SmartContractLib.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/smartContractLib.ts:18](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/smartContractLib.ts#L18)

#### Parameters

##### artifact

[`Artifact`](../interfaces/Artifact.md)

#### Returns

*typeof* [`SmartContractLib`](SmartContractLib.md)

#### Inherited from

[`SmartContractLib`](SmartContractLib.md).[`loadArtifact`](SmartContractLib.md#loadartifact)
