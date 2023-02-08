[scrypt-ts](../README.md) / SmartContractLib

# Class: SmartContractLib

The contract library class. To write a contract library, extend this class as such:

**`Example`**

```ts
class YourSmartContractLib extends SmartContractLib {
  // your library functions code here
}
```

## Table of contents

### Constructors

- [constructor](SmartContractLib.md#constructor)

### Properties

- [args](SmartContractLib.md#args)

### Methods

- [getArgs](SmartContractLib.md#getargs)
- [getState](SmartContractLib.md#getstate)

## Constructors

### constructor

• **new SmartContractLib**(`...args`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Defined in

[src/smart-contract/library.ts:16](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/library.ts#L16)

## Properties

### args

• **args**: `any`[] = `[]`

#### Defined in

[src/smart-contract/library.ts:15](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/library.ts#L15)

## Methods

### getArgs

▸ **getArgs**(): `SupportedParamType`[]

#### Returns

`SupportedParamType`[]

#### Defined in

[src/smart-contract/library.ts:20](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/library.ts#L20)

___

### getState

▸ **getState**(): `StructObject`

#### Returns

`StructObject`

#### Defined in

[src/smart-contract/library.ts:30](https://github.com/sCrypt-Inc/scrypt-ts/blob/d43e8cc/src/smart-contract/library.ts#L30)
