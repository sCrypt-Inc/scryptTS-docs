[scrypt-ts](../README.md) / [Exports](../modules.md) / SmartContract

# Class: SmartContract

The main contract class. To write a contract, extend this class as such:

**`Example`**

```ts
class YourSmartContract extends SmartContract {
  // your smart contract code here
}
```

## Table of contents

### Constructors

- [constructor](SmartContract.md#constructor)

### Properties

- [delegateInstance](SmartContract.md#delegateinstance)
- [entryMethodCall](SmartContract.md#entrymethodcall)
- [lockingTo](SmartContract.md#lockingto)
- [txContext](SmartContract.md#txcontext)
- [unlockingFrom](SmartContract.md#unlockingfrom)
- [DelegateClazz](SmartContract.md#delegateclazz)

### Accessors

- [lockingScript](SmartContract.md#lockingscript)

### Methods

- [clone](SmartContract.md#clone)
- [delegateCall](SmartContract.md#delegatecall)
- [getStateScript](SmartContract.md#getstatescript)
- [getUnlockingScript](SmartContract.md#getunlockingscript)
- [markAsGenesis](SmartContract.md#markasgenesis)
- [runEntryMethodCall](SmartContract.md#runentrymethodcall)
- [updateState](SmartContract.md#updatestate)
- [updateStateSigHashType](SmartContract.md#updatestatesighashtype)
- [verify](SmartContract.md#verify)
- [\_getScryptFile](SmartContract.md#_getscryptfile)
- [compile](SmartContract.md#compile)

## Constructors

### constructor

• **new SmartContract**(...`args`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Defined in

[src/contract.ts:80](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/contract.ts#L80)

## Properties

### delegateInstance

• `Private` **delegateInstance**: `AbstractContract`

#### Defined in

[src/contract.ts:47](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/contract.ts#L47)

___

### entryMethodCall

• `Private` **entryMethodCall**: `FunctionCall`

#### Defined in

[src/contract.ts:178](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/contract.ts#L178)

___

### lockingTo

• `Optional` **lockingTo**: [`TxOutputRef`](../modules.md#txoutputref)

#### Defined in

[src/contract.ts:42](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/contract.ts#L42)

___

### txContext

• `Private` **txContext**: `TxContext`

#### Defined in

[src/contract.ts:179](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/contract.ts#L179)

___

### unlockingFrom

• `Optional` **unlockingFrom**: `TxInputRef`

#### Defined in

[src/contract.ts:44](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/contract.ts#L44)

___

### DelegateClazz

▪ `Static` **DelegateClazz**: typeof `AbstractContract`

#### Defined in

[src/contract.ts:46](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/contract.ts#L46)

## Accessors

### lockingScript

• `get` **lockingScript**(): `Script`

#### Returns

`Script`

#### Defined in

[src/contract.ts:128](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/contract.ts#L128)

## Methods

### clone

▸ **clone**(): [`SmartContract`](SmartContract.md)

#### Returns

[`SmartContract`](SmartContract.md)

#### Defined in

[src/contract.ts:139](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/contract.ts#L139)

___

### delegateCall

▸ `Private` **delegateCall**(`methodName`, ...`args`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `methodName` | `string` |
| `...args` | `any`[] |

#### Returns

`any`

#### Defined in

[src/contract.ts:174](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/contract.ts#L174)

___

### getStateScript

▸ `Protected` **getStateScript**(): `string`

#### Returns

`string`

#### Defined in

[src/contract.ts:156](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/contract.ts#L156)

___

### getUnlockingScript

▸ **getUnlockingScript**(`callPub`): `Script`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callPub` | (`self`: [`SmartContract`](SmartContract.md)) => `void` |

#### Returns

`Script`

#### Defined in

[src/contract.ts:123](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/contract.ts#L123)

___

### markAsGenesis

▸ **markAsGenesis**(): `void`

#### Returns

`void`

#### Defined in

[src/contract.ts:147](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/contract.ts#L147)

___

### runEntryMethodCall

▸ `Private` **runEntryMethodCall**(`callPub`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callPub` | (`self`: [`SmartContract`](SmartContract.md)) => `void` |

#### Returns

`void`

#### Defined in

[src/contract.ts:181](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/contract.ts#L181)

___

### updateState

▸ `Protected` **updateState**(`preimage`, `balance`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `preimage` | [`SigHashPreimage`](SigHashPreimage.md) |
| `balance` | `bigint` |

#### Returns

`boolean`

#### Defined in

[src/contract.ts:161](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/contract.ts#L161)

___

### updateStateSigHashType

▸ `Protected` **updateStateSigHashType**(`txPreimage`, `amount`, `sigHashType`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `txPreimage` | [`SigHashPreimage`](SigHashPreimage.md) |
| `amount` | `bigint` |
| `sigHashType` | [`SigHashType`](SigHashType.md) |

#### Returns

`boolean`

#### Defined in

[src/contract.ts:151](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/contract.ts#L151)

___

### verify

▸ **verify**(`entryMethodInvoking`): `VerifyResult`

#### Parameters

| Name | Type |
| :------ | :------ |
| `entryMethodInvoking` | (`self`: [`SmartContract`](SmartContract.md)) => `void` |

#### Returns

`VerifyResult`

#### Defined in

[src/contract.ts:96](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/contract.ts#L96)

___

### \_getScryptFile

▸ `Static` `Private` **_getScryptFile**(): `string`

#### Returns

`string`

#### Defined in

[src/contract.ts:62](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/contract.ts#L62)

___

### compile

▸ `Static` **compile**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/contract.ts:49](https://github.com/sCrypt-Inc/ts-sCrypt/blob/02966bf/src/contract.ts#L49)
