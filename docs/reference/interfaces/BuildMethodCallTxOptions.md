[scrypt-ts](../README.md) / BuildMethodCallTxOptions

# Interface: BuildMethodCallTxOptions<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`SharedOptions`](SharedOptions.md)

  ↳ **`BuildMethodCallTxOptions`**

## Table of contents

### Properties

- [changeAddress](BuildMethodCallTxOptions.md#changeaddress)
- [current](BuildMethodCallTxOptions.md#current)
- [fromUTXO](BuildMethodCallTxOptions.md#fromutxo)
- [nexts](BuildMethodCallTxOptions.md#nexts)
- [utxos](BuildMethodCallTxOptions.md#utxos)

## Properties

### changeAddress

• `Optional` **changeAddress**: [`AddressOption`](../README.md#addressoption)

#### Inherited from

[SharedOptions](SharedOptions.md).[changeAddress](SharedOptions.md#changeaddress)

#### Defined in

[src/smart-contract/types/contract-call.ts:14](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/types/contract-call.ts#L14)

___

### current

• **current**: `T`

#### Defined in

[src/smart-contract/types/contract-call.ts:18](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/types/contract-call.ts#L18)

___

### fromUTXO

• `Optional` **fromUTXO**: [`IUnspentOutput`](bsv.Transaction.IUnspentOutput.md)

#### Inherited from

[SharedOptions](SharedOptions.md).[fromUTXO](SharedOptions.md#fromutxo)

#### Defined in

[src/smart-contract/types/contract-call.ts:13](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/types/contract-call.ts#L13)

___

### nexts

• `Optional` **nexts**: [`StatefulNext`](StatefulNext.md)<`T`\>[]

#### Defined in

[src/smart-contract/types/contract-call.ts:20](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/types/contract-call.ts#L20)

___

### utxos

• **utxos**: [`IUnspentOutput`](bsv.Transaction.IUnspentOutput.md)[]

#### Defined in

[src/smart-contract/types/contract-call.ts:19](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/types/contract-call.ts#L19)
