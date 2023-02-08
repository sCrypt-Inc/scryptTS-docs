[scrypt-ts](../README.md) / MethodCallResult

# Interface: MethodCallResult<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Properties

- [atInputIndex](MethodCallResult.md#atinputindex)
- [next](MethodCallResult.md#next)
- [nexts](MethodCallResult.md#nexts)
- [tx](MethodCallResult.md#tx)

## Properties

### atInputIndex

• **atInputIndex**: `number`

#### Defined in

[src/smart-contract/types/contract-call.ts:39](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/types/contract-call.ts#L39)

___

### next

• `Optional` **next**: [`StatefulNextWithIdx`](../README.md#statefulnextwithidx)<`T`\>

#### Defined in

[src/smart-contract/types/contract-call.ts:42](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/types/contract-call.ts#L42)

___

### nexts

• `Optional` **nexts**: [`StatefulNextWithIdx`](../README.md#statefulnextwithidx)<`T`\>[]

#### Defined in

[src/smart-contract/types/contract-call.ts:40](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/types/contract-call.ts#L40)

___

### tx

• **tx**: [`Transaction`](../classes/bsv.Transaction-1.md)

#### Defined in

[src/smart-contract/types/contract-call.ts:38](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/types/contract-call.ts#L38)
