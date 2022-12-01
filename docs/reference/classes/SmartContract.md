[scrypt-ts](../README.md) / SmartContract

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
- [enableUpdateEMC](SmartContract.md#enableupdateemc)
- [entryMethodCall](SmartContract.md#entrymethodcall)
- [lockTo](SmartContract.md#lockto)
- [unlockFrom](SmartContract.md#unlockfrom)
- [DelegateClazz](SmartContract.md#delegateclazz)

### Accessors

- [lockingScript](SmartContract.md#lockingscript)

### Methods

- [buildEntryMethodCall](SmartContract.md#buildentrymethodcall)
- [callDelegatedMethod](SmartContract.md#calldelegatedmethod)
- [clone](SmartContract.md#clone)
- [getStateScript](SmartContract.md#getstatescript)
- [getUnlockingScript](SmartContract.md#getunlockingscript)
- [markAsGenesis](SmartContract.md#markasgenesis)
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

[src/contract.ts:78](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/contract.ts#L78)

## Properties

### delegateInstance

• `Private` **delegateInstance**: `AbstractContract`

#### Defined in

[src/contract.ts:45](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/contract.ts#L45)

___

### enableUpdateEMC

• `Private` **enableUpdateEMC**: `boolean` = `false`

#### Defined in

[src/contract.ts:182](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/contract.ts#L182)

___

### entryMethodCall

• `Private` `Optional` **entryMethodCall**: `FunctionCall`

#### Defined in

[src/contract.ts:180](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/contract.ts#L180)

___

### lockTo

• `Optional` **lockTo**: [`TxOutputRef`](../README.md#txoutputref)

#### Defined in

[src/contract.ts:41](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/contract.ts#L41)

___

### unlockFrom

• `Optional` **unlockFrom**: `TxInputRef`

#### Defined in

[src/contract.ts:42](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/contract.ts#L42)

___

### DelegateClazz

▪ `Static` **DelegateClazz**: typeof `AbstractContract`

#### Defined in

[src/contract.ts:44](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/contract.ts#L44)

## Accessors

### lockingScript

• `get` **lockingScript**(): `Script`

#### Returns

`Script`

#### Defined in

[src/contract.ts:124](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/contract.ts#L124)

## Methods

### buildEntryMethodCall

▸ `Private` **buildEntryMethodCall**(`callPub`): `FunctionCall`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callPub` | (`self`: [`SmartContract`](SmartContract.md)) => `void` |

#### Returns

`FunctionCall`

#### Defined in

[src/contract.ts:184](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/contract.ts#L184)

___

### callDelegatedMethod

▸ `Private` **callDelegatedMethod**(`methodName`, ...`args`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `methodName` | `string` |
| `...args` | `any`[] |

#### Returns

`any`

#### Defined in

[src/contract.ts:170](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/contract.ts#L170)

___

### clone

▸ **clone**(): [`SmartContract`](SmartContract.md)

#### Returns

[`SmartContract`](SmartContract.md)

#### Defined in

[src/contract.ts:135](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/contract.ts#L135)

___

### getStateScript

▸ `Protected` **getStateScript**(): `string`

#### Returns

`string`

#### Defined in

[src/contract.ts:152](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/contract.ts#L152)

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

[src/contract.ts:120](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/contract.ts#L120)

___

### markAsGenesis

▸ **markAsGenesis**(): `void`

#### Returns

`void`

#### Defined in

[src/contract.ts:143](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/contract.ts#L143)

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

[src/contract.ts:157](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/contract.ts#L157)

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

[src/contract.ts:147](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/contract.ts#L147)

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

[src/contract.ts:94](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/contract.ts#L94)

___

### \_getScryptFile

▸ `Static` `Private` **_getScryptFile**(): `string`

#### Returns

`string`

#### Defined in

[src/contract.ts:60](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/contract.ts#L60)

___

### compile

▸ `Static` **compile**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/contract.ts:47](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/contract.ts#L47)
