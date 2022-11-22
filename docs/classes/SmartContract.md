[ts-scrypt](../README.md) / [Exports](../modules.md) / SmartContract

# Class: SmartContract

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

[src/contract.ts:61](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/contract.ts#L61)

## Properties

### delegateInstance

• `Private` **delegateInstance**: `AbstractContract`

#### Defined in

[src/contract.ts:28](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/contract.ts#L28)

___

### entryMethodCall

• `Private` **entryMethodCall**: `FunctionCall`

#### Defined in

[src/contract.ts:159](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/contract.ts#L159)

___

### lockingTo

• `Optional` **lockingTo**: [`TxOutputRef`](../modules.md#txoutputref)

#### Defined in

[src/contract.ts:24](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/contract.ts#L24)

___

### txContext

• `Private` **txContext**: `TxContext`

#### Defined in

[src/contract.ts:160](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/contract.ts#L160)

___

### unlockingFrom

• `Optional` **unlockingFrom**: `TxInputRef`

#### Defined in

[src/contract.ts:25](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/contract.ts#L25)

___

### DelegateClazz

▪ `Static` **DelegateClazz**: typeof `AbstractContract`

#### Defined in

[src/contract.ts:27](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/contract.ts#L27)

## Accessors

### lockingScript

• `get` **lockingScript**(): `Script`

#### Returns

`Script`

#### Defined in

[src/contract.ts:109](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/contract.ts#L109)

## Methods

### clone

▸ **clone**(): [`SmartContract`](SmartContract.md)

#### Returns

[`SmartContract`](SmartContract.md)

#### Defined in

[src/contract.ts:120](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/contract.ts#L120)

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

[src/contract.ts:155](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/contract.ts#L155)

___

### getStateScript

▸ `Protected` **getStateScript**(): `string`

#### Returns

`string`

#### Defined in

[src/contract.ts:137](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/contract.ts#L137)

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

[src/contract.ts:104](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/contract.ts#L104)

___

### markAsGenesis

▸ **markAsGenesis**(): `void`

#### Returns

`void`

#### Defined in

[src/contract.ts:128](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/contract.ts#L128)

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

[src/contract.ts:162](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/contract.ts#L162)

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

[src/contract.ts:142](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/contract.ts#L142)

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

[src/contract.ts:132](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/contract.ts#L132)

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

[src/contract.ts:77](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/contract.ts#L77)

___

### \_getScryptFile

▸ `Static` `Private` **_getScryptFile**(): `string`

#### Returns

`string`

#### Defined in

[src/contract.ts:43](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/contract.ts#L43)

___

### compile

▸ `Static` **compile**(): `Promise`<`CompileError`[]\>

#### Returns

`Promise`<`CompileError`[]\>

#### Defined in

[src/contract.ts:30](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/contract.ts#L30)
