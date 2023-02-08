[scrypt-ts](../README.md) / MethodCallOptions

# Interface: MethodCallOptions<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`SharedOptions`](SharedOptions.md)

  ↳ **`MethodCallOptions`**

## Table of contents

### Properties

- [changeAddress](MethodCallOptions.md#changeaddress)
- [fromUTXO](MethodCallOptions.md#fromutxo)
- [lockTime](MethodCallOptions.md#locktime)
- [next](MethodCallOptions.md#next)
- [send](MethodCallOptions.md#send)
- [sigRequiredAddress](MethodCallOptions.md#sigrequiredaddress)

## Properties

### changeAddress

• `Optional` **changeAddress**: [`AddressOption`](../README.md#addressoption)

#### Inherited from

[SharedOptions](SharedOptions.md).[changeAddress](SharedOptions.md#changeaddress)

#### Defined in

[src/smart-contract/types/contract-call.ts:14](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/types/contract-call.ts#L14)

___

### fromUTXO

• `Optional` **fromUTXO**: [`IUnspentOutput`](bsv.Transaction.IUnspentOutput.md)

#### Inherited from

[SharedOptions](SharedOptions.md).[fromUTXO](SharedOptions.md#fromutxo)

#### Defined in

[src/smart-contract/types/contract-call.ts:13](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/types/contract-call.ts#L13)

___

### lockTime

• `Optional` **lockTime**: `number`

#### Defined in

[src/smart-contract/types/contract-call.ts:34](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/types/contract-call.ts#L34)

___

### next

• `Optional` **next**: [`StatefulNextWithIdx`](../README.md#statefulnextwithidx)<`T`\> \| [`StatefulNext`](StatefulNext.md)<`T`\>[]

#### Defined in

[src/smart-contract/types/contract-call.ts:33](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/types/contract-call.ts#L33)

___

### send

• `Optional` **send**: `boolean`

#### Defined in

[src/smart-contract/types/contract-call.ts:31](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/types/contract-call.ts#L31)

___

### sigRequiredAddress

• `Optional` **sigRequiredAddress**: [`AddressesOption`](../README.md#addressesoption)

#### Defined in

[src/smart-contract/types/contract-call.ts:32](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/types/contract-call.ts#L32)
