[scrypt-ts](../README.md) / BuildMethodCallTxResult

# Interface: BuildMethodCallTxResult<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Properties

- [atInputIndex](BuildMethodCallTxResult.md#atinputindex)
- [nexts](BuildMethodCallTxResult.md#nexts)
- [sigRequiredAddress](BuildMethodCallTxResult.md#sigrequiredaddress)
- [unsignedTx](BuildMethodCallTxResult.md#unsignedtx)

## Properties

### atInputIndex

• **atInputIndex**: `number`

#### Defined in

[src/smart-contract/types/contract-call.ts:24](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/types/contract-call.ts#L24)

___

### nexts

• `Optional` **nexts**: [`StatefulNextWithIdx`](../README.md#statefulnextwithidx)<`T`\>[]

#### Defined in

[src/smart-contract/types/contract-call.ts:27](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/types/contract-call.ts#L27)

___

### sigRequiredAddress

• `Optional` **sigRequiredAddress**: [`AddressesOption`](../README.md#addressesoption)

#### Defined in

[src/smart-contract/types/contract-call.ts:26](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/types/contract-call.ts#L26)

___

### unsignedTx

• **unsignedTx**: [`Transaction`](../classes/bsv.Transaction-1.md)

#### Defined in

[src/smart-contract/types/contract-call.ts:25](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/types/contract-call.ts#L25)
