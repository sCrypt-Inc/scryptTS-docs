[scrypt-ts](../README.md) / FunctionCall

# Class: FunctionCall

## Table of contents

### Constructors

- [constructor](FunctionCall.md#constructor)

### Properties

- [\_lockingScript](FunctionCall.md#_lockingscript)
- [\_unlockingScript](FunctionCall.md#_unlockingscript)
- [args](FunctionCall.md#args)
- [contract](FunctionCall.md#contract)
- [methodName](FunctionCall.md#methodname)

### Accessors

- [lockingScript](FunctionCall.md#lockingscript)
- [unlockingScript](FunctionCall.md#unlockingscript)

### Methods

- [genLaunchConfig](FunctionCall.md#genlaunchconfig)
- [toASM](FunctionCall.md#toasm)
- [toHex](FunctionCall.md#tohex)
- [toScript](FunctionCall.md#toscript)
- [toString](FunctionCall.md#tostring)
- [verify](FunctionCall.md#verify)

## Constructors

### constructor

• **new FunctionCall**(`methodName`, `binding`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `methodName` | `string` |
| `binding` | `Object` |
| `binding.args` | `Arguments` |
| `binding.contract` | `AbstractContract` |
| `binding.lockingScript?` | [`Script`](bsv.Script-1.md) |
| `binding.unlockingScript?` | [`Script`](bsv.Script-1.md) |

#### Defined in

node_modules/scryptlib/dist/abi.d.ts:41

## Properties

### \_lockingScript

• `Private` `Optional` **\_lockingScript**: `any`

#### Defined in

node_modules/scryptlib/dist/abi.d.ts:37

___

### \_unlockingScript

• `Private` `Optional` **\_unlockingScript**: `any`

#### Defined in

node_modules/scryptlib/dist/abi.d.ts:36

___

### args

• `Readonly` **args**: `Arguments`

#### Defined in

node_modules/scryptlib/dist/abi.d.ts:35

___

### contract

• `Readonly` **contract**: `AbstractContract`

#### Defined in

node_modules/scryptlib/dist/abi.d.ts:34

___

### methodName

• **methodName**: `string`

#### Defined in

node_modules/scryptlib/dist/abi.d.ts:33

## Accessors

### lockingScript

• `get` **lockingScript**(): [`Script`](bsv.Script-1.md)

#### Returns

[`Script`](bsv.Script-1.md)

#### Defined in

node_modules/scryptlib/dist/abi.d.ts:39

• `set` **lockingScript**(`s`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | [`Script`](bsv.Script-1.md) |

#### Returns

`void`

#### Defined in

node_modules/scryptlib/dist/abi.d.ts:40

___

### unlockingScript

• `get` **unlockingScript**(): [`Script`](bsv.Script-1.md)

#### Returns

[`Script`](bsv.Script-1.md)

#### Defined in

node_modules/scryptlib/dist/abi.d.ts:38

## Methods

### genLaunchConfig

▸ **genLaunchConfig**(`txContext?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `txContext?` | [`TxContext`](../interfaces/TxContext.md) |

#### Returns

`string`

#### Defined in

node_modules/scryptlib/dist/abi.d.ts:51

___

### toASM

▸ **toASM**(): `string`

#### Returns

`string`

#### Defined in

node_modules/scryptlib/dist/abi.d.ts:47

___

### toHex

▸ **toHex**(): `string`

#### Returns

`string`

#### Defined in

node_modules/scryptlib/dist/abi.d.ts:50

___

### toScript

▸ **toScript**(): [`Script`](bsv.Script-1.md)

#### Returns

[`Script`](bsv.Script-1.md)

#### Defined in

node_modules/scryptlib/dist/abi.d.ts:49

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

node_modules/scryptlib/dist/abi.d.ts:48

___

### verify

▸ **verify**(`txContext?`): [`VerifyResult`](../interfaces/VerifyResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `txContext?` | [`TxContext`](../interfaces/TxContext.md) |

#### Returns

[`VerifyResult`](../interfaces/VerifyResult.md)

#### Defined in

node_modules/scryptlib/dist/abi.d.ts:52
