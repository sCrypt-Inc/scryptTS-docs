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

- [codePart](SmartContract.md#codepart)
- [dataPart](SmartContract.md#datapart)
- [lockingScript](SmartContract.md#lockingscript)

### Other Methods

- [buildEntryMethodCall](SmartContract.md#buildentrymethodcall)
- [callDelegatedMethod](SmartContract.md#calldelegatedmethod)
- [checkPreimage](SmartContract.md#checkpreimage)
- [checkPreimageAdvanced](SmartContract.md#checkpreimageadvanced)
- [checkPreimageSigHashType](SmartContract.md#checkpreimagesighashtype)
- [checkPubkeyEncoding](SmartContract.md#checkpubkeyencoding)
- [checkSignatureEncoding](SmartContract.md#checksignatureencoding)
- [clone](SmartContract.md#clone)
- [genLaunchConfig](SmartContract.md#genlaunchconfig)
- [getDelegateClazz](SmartContract.md#getdelegateclazz)
- [getStateScript](SmartContract.md#getstatescript)
- [getUnlockingScript](SmartContract.md#getunlockingscript)
- [markAsGenesis](SmartContract.md#markasgenesis)
- [next](SmartContract.md#next)
- [setDataPartInASM](SmartContract.md#setdatapartinasm)
- [setDataPartInHex](SmartContract.md#setdatapartinhex)
- [updateState](SmartContract.md#updatestate)
- [updateStateSigHashType](SmartContract.md#updatestatesighashtype)
- [verify](SmartContract.md#verify)
- [\_getScryptFile](SmartContract.md#_getscryptfile)
- [compile](SmartContract.md#compile)
- [loadDesc](SmartContract.md#loaddesc)

### Signature Verification Methods

- [checkMultiSig](SmartContract.md#checkmultisig)
- [checkSig](SmartContract.md#checksig)

## Constructors

### constructor

• **new SmartContract**(`...args`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Defined in

[src/contract.ts:96](https://github.com/sCrypt-Inc/scrypt-ts/blob/244c0d1/src/contract.ts#L96)

## Properties

### delegateInstance

• `Private` **delegateInstance**: `AbstractContract`

#### Defined in

[src/contract.ts:46](https://github.com/sCrypt-Inc/scrypt-ts/blob/244c0d1/src/contract.ts#L46)

___

### enableUpdateEMC

• `Private` **enableUpdateEMC**: `boolean` = `false`

#### Defined in

[src/contract.ts:372](https://github.com/sCrypt-Inc/scrypt-ts/blob/244c0d1/src/contract.ts#L372)

___

### entryMethodCall

• `Private` `Optional` **entryMethodCall**: `FunctionCall`

#### Defined in

[src/contract.ts:358](https://github.com/sCrypt-Inc/scrypt-ts/blob/244c0d1/src/contract.ts#L358)

___

### lockTo

• `Optional` **lockTo**: [`TxOutputRef`](../README.md#txoutputref)

#### Defined in

[src/contract.ts:42](https://github.com/sCrypt-Inc/scrypt-ts/blob/244c0d1/src/contract.ts#L42)

___

### unlockFrom

• `Optional` **unlockFrom**: `TxInputRef`

#### Defined in

[src/contract.ts:43](https://github.com/sCrypt-Inc/scrypt-ts/blob/244c0d1/src/contract.ts#L43)

___

### DelegateClazz

▪ `Static` `Private` **DelegateClazz**: typeof `AbstractContract`

#### Defined in

[src/contract.ts:45](https://github.com/sCrypt-Inc/scrypt-ts/blob/244c0d1/src/contract.ts#L45)

## Accessors

### codePart

• `get` **codePart**(): `string`

#### Returns

`string`

#### Defined in

[src/contract.ts:158](https://github.com/sCrypt-Inc/scrypt-ts/blob/244c0d1/src/contract.ts#L158)

___

### dataPart

• `get` **dataPart**(): [`Script`](bsv.Script-1.md)

#### Returns

[`Script`](bsv.Script-1.md)

#### Defined in

[src/contract.ts:368](https://github.com/sCrypt-Inc/scrypt-ts/blob/244c0d1/src/contract.ts#L368)

___

### lockingScript

• `get` **lockingScript**(): [`Script`](bsv.Script-1.md)

#### Returns

[`Script`](bsv.Script-1.md)

#### Defined in

[src/contract.ts:147](https://github.com/sCrypt-Inc/scrypt-ts/blob/244c0d1/src/contract.ts#L147)

## Other Methods

### buildEntryMethodCall

▸ `Private` **buildEntryMethodCall**(`callPub`): `FunctionCall`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callPub` | (`self`: [`SmartContract`](SmartContract.md)) => `void` |

#### Returns

`FunctionCall`

#### Defined in

[src/contract.ts:374](https://github.com/sCrypt-Inc/scrypt-ts/blob/244c0d1/src/contract.ts#L374)

___

### callDelegatedMethod

▸ `Private` **callDelegatedMethod**(`methodName`, `...args`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `methodName` | `string` |
| `...args` | `any`[] |

#### Returns

`any`

#### Defined in

[src/contract.ts:348](https://github.com/sCrypt-Inc/scrypt-ts/blob/244c0d1/src/contract.ts#L348)

___

### checkPreimage

▸ `Protected` **checkPreimage**(`txPreimage`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `txPreimage` | [`SigHashPreimage`](SigHashPreimage.md) |

#### Returns

`boolean`

#### Defined in

[src/contract.ts:278](https://github.com/sCrypt-Inc/scrypt-ts/blob/244c0d1/src/contract.ts#L278)

___

### checkPreimageAdvanced

▸ `Protected` **checkPreimageAdvanced**(`txPreimage`, `privKey`, `pubKey`, `inverseK`, `r`, `rBigEndian`, `sigHashType`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `txPreimage` | [`SigHashPreimage`](SigHashPreimage.md) |
| `privKey` | [`PrivKey`](PrivKey.md) |
| `pubKey` | [`PubKey`](PubKey.md) |
| `inverseK` | `bigint` |
| `r` | `bigint` |
| `rBigEndian` | `string` |
| `sigHashType` | [`SigHashType`](SigHashType.md) |

#### Returns

`boolean`

#### Defined in

[src/contract.ts:266](https://github.com/sCrypt-Inc/scrypt-ts/blob/244c0d1/src/contract.ts#L266)

___

### checkPreimageSigHashType

▸ `Protected` **checkPreimageSigHashType**(`txPreimage`, `sigHashType`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `txPreimage` | [`SigHashPreimage`](SigHashPreimage.md) |
| `sigHashType` | [`SigHashType`](SigHashType.md) |

#### Returns

`boolean`

#### Defined in

[src/contract.ts:274](https://github.com/sCrypt-Inc/scrypt-ts/blob/244c0d1/src/contract.ts#L274)

___

### checkPubkeyEncoding

▸ `Private` **checkPubkeyEncoding**(`publickey`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `publickey` | [`PubKey`](PubKey.md) |

#### Returns

`boolean`

#### Defined in

[src/contract.ts:296](https://github.com/sCrypt-Inc/scrypt-ts/blob/244c0d1/src/contract.ts#L296)

___

### checkSignatureEncoding

▸ `Private` **checkSignatureEncoding**(`signature`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `signature` | [`Sig`](Sig.md) |

#### Returns

`boolean`

#### Defined in

[src/contract.ts:304](https://github.com/sCrypt-Inc/scrypt-ts/blob/244c0d1/src/contract.ts#L304)

___

### clone

▸ **clone**(): [`SmartContract`](SmartContract.md)

#### Returns

[`SmartContract`](SmartContract.md)

#### Defined in

[src/contract.ts:162](https://github.com/sCrypt-Inc/scrypt-ts/blob/244c0d1/src/contract.ts#L162)

___

### genLaunchConfig

▸ **genLaunchConfig**(`a`, `tx`, `inputIndex?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `any` |
| `tx` | [`Transaction`](bsv.Transaction-1.md) |
| `inputIndex?` | `number` |

#### Returns

`string`

#### Defined in

[src/contract.ts:143](https://github.com/sCrypt-Inc/scrypt-ts/blob/244c0d1/src/contract.ts#L143)

___

### getDelegateClazz

▸ `Private` **getDelegateClazz**(): typeof `AbstractContract`

#### Returns

typeof `AbstractContract`

#### Defined in

[src/contract.ts:92](https://github.com/sCrypt-Inc/scrypt-ts/blob/244c0d1/src/contract.ts#L92)

___

### getStateScript

▸ `Protected` **getStateScript**(): `string`

#### Returns

`string`

#### Defined in

[src/contract.ts:187](https://github.com/sCrypt-Inc/scrypt-ts/blob/244c0d1/src/contract.ts#L187)

___

### getUnlockingScript

▸ **getUnlockingScript**(`callPub`): [`Script`](bsv.Script-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `callPub` | (`self`: [`SmartContract`](SmartContract.md)) => `void` |

#### Returns

[`Script`](bsv.Script-1.md)

#### Defined in

[src/contract.ts:139](https://github.com/sCrypt-Inc/scrypt-ts/blob/244c0d1/src/contract.ts#L139)

___

### markAsGenesis

▸ **markAsGenesis**(): [`SmartContract`](SmartContract.md)

#### Returns

[`SmartContract`](SmartContract.md)

#### Defined in

[src/contract.ts:173](https://github.com/sCrypt-Inc/scrypt-ts/blob/244c0d1/src/contract.ts#L173)

___

### next

▸ **next**(): [`SmartContract`](SmartContract.md)

#### Returns

[`SmartContract`](SmartContract.md)

#### Defined in

[src/contract.ts:167](https://github.com/sCrypt-Inc/scrypt-ts/blob/244c0d1/src/contract.ts#L167)

___

### setDataPartInASM

▸ **setDataPartInASM**(`dataPart`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataPart` | `string` |

#### Returns

`void`

#### Defined in

[src/contract.ts:360](https://github.com/sCrypt-Inc/scrypt-ts/blob/244c0d1/src/contract.ts#L360)

___

### setDataPartInHex

▸ **setDataPartInHex**(`dataPart`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataPart` | `string` |

#### Returns

`void`

#### Defined in

[src/contract.ts:364](https://github.com/sCrypt-Inc/scrypt-ts/blob/244c0d1/src/contract.ts#L364)

___

### updateState

▸ `Protected` **updateState**(`preimage`, `amount`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `preimage` | [`SigHashPreimage`](SigHashPreimage.md) |
| `amount` | `bigint` |

#### Returns

`boolean`

#### Defined in

[src/contract.ts:344](https://github.com/sCrypt-Inc/scrypt-ts/blob/244c0d1/src/contract.ts#L344)

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

[src/contract.ts:179](https://github.com/sCrypt-Inc/scrypt-ts/blob/244c0d1/src/contract.ts#L179)

___

### verify

▸ **verify**(`entryMethodInvoking`): [`VerifyResult`](../interfaces/VerifyResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `entryMethodInvoking` | (`self`: [`SmartContract`](SmartContract.md)) => `void` |

#### Returns

[`VerifyResult`](../interfaces/VerifyResult.md)

#### Defined in

[src/contract.ts:113](https://github.com/sCrypt-Inc/scrypt-ts/blob/244c0d1/src/contract.ts#L113)

___

### \_getScryptFile

▸ `Static` `Private` **_getScryptFile**(): `string`

#### Returns

`string`

#### Defined in

[src/contract.ts:74](https://github.com/sCrypt-Inc/scrypt-ts/blob/244c0d1/src/contract.ts#L74)

___

### compile

▸ `Static` **compile**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/contract.ts:48](https://github.com/sCrypt-Inc/scrypt-ts/blob/244c0d1/src/contract.ts#L48)

___

### loadDesc

▸ `Static` **loadDesc**(`desc`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `desc` | [`ContractDescription`](../interfaces/ContractDescription.md) |

#### Returns

`void`

#### Defined in

[src/contract.ts:61](https://github.com/sCrypt-Inc/scrypt-ts/blob/244c0d1/src/contract.ts#L61)

___

## Signature Verification Methods

### checkMultiSig

▸ `Protected` **checkMultiSig**(`signatures`, `publickeys`): `boolean`

Compares the first signature against each public key until it finds an ECDSA match. Starting with the subsequent public key, it compares the second signature against each remaining public key until it finds an ECDSA match. The process is repeated until all signatures have been checked or not enough public keys remain to produce a successful result. All signatures need to match a public key. Because public keys are not checked again if they fail any signature comparison, signatures must be placed in the scriptSig using the same order as their corresponding public keys were placed in the scriptPubKey or redeemScript. If all signatures are valid, 1 is returned, 0 otherwise. Due to a bug, one extra unused value is removed from the stack.

**`See`**

https://wiki.bitcoinsv.io/index.php/Opcodes_used_in_Bitcoin_Script

#### Parameters

| Name | Type |
| :------ | :------ |
| `signatures` | [`Sig`](Sig.md)[] |
| `publickeys` | [`PubKey`](PubKey.md)[] |

#### Returns

`boolean`

#### Defined in

[src/contract.ts:288](https://github.com/sCrypt-Inc/scrypt-ts/blob/244c0d1/src/contract.ts#L288)

___

### checkSig

▸ `Protected` **checkSig**(`signature`, `publickey`): `boolean`

verifies an ECDSA signature. It takes two inputs from the stack, a public key (on top of the stack) and an ECDSA signature in its DER_CANONISED format concatenated with sighash flags. It outputs true or false on the stack based on whether the signature check passes or fails.

**`See`**

https://wiki.bitcoinsv.io/index.php/Opcodes_used_in_Bitcoin_Script

#### Parameters

| Name | Type |
| :------ | :------ |
| `signature` | [`Sig`](Sig.md) |
| `publickey` | [`PubKey`](PubKey.md) |

#### Returns

`boolean`

#### Defined in

[src/contract.ts:233](https://github.com/sCrypt-Inc/scrypt-ts/blob/244c0d1/src/contract.ts#L233)
