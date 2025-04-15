[**bitcoinjs-lib v0.2.9-beta.16**](../README.md)

***

[bitcoinjs-lib](../README.md) / SmartContract

# Class: SmartContract\<StateT\>

Defined in: [packages/scrypt-ts-btc/src/smart-contract/smartContract.ts:128](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/smartContract.ts#L128)

The main contract class. To write a contract, extend this class as such:

## Onchain

## Example

```ts
class YourSmartContract extends SmartContract {
  // your smart contract code here
}
```

## Extends

- `AbstractContract`

## Type Parameters

• **StateT** *extends* `StructObject` = `undefined`

## Implements

- `Taprootable`

## Constructors

### new SmartContract()

> **new SmartContract**\<`StateT`\>(...`args`): [`SmartContract`](SmartContract.md)\<`StateT`\>

Defined in: [packages/scrypt-ts-btc/src/smart-contract/smartContract.ts:178](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/smartContract.ts#L178)

#### Parameters

##### args

...`SupportedParamType`[]

#### Returns

[`SmartContract`](SmartContract.md)\<`StateT`\>

#### Overrides

`AbstractContract.constructor`

## Backtrace

### backtraceToOutpoint()

> **backtraceToOutpoint**(`backtraceInfo`, `genesisOutpoint`): `boolean`

Defined in: [packages/scrypt-ts-btc/src/smart-contract/smartContract.ts:815](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/smartContract.ts#L815)

Check whether the contract can be traced back to the genesis outpoint.

#### Parameters

##### backtraceInfo

[`BacktraceInfo`](../type-aliases/BacktraceInfo.md)

the backtrace info to verify, including prevTx and prevPrevTx informations

##### genesisOutpoint

[`ByteString`](../type-aliases/ByteString.md)

expected genesis outpoint to be traced back to

#### Returns

`boolean`

true if the contract can be backtraced to the genesis outpoint. Otherwise false.

#### Onchain

#### Overrides

`AbstractContract.backtraceToOutpoint`

***

### backtraceToScript()

> **backtraceToScript**(`backtraceInfo`, `genesisScript`): `boolean`

Defined in: [packages/scrypt-ts-btc/src/smart-contract/smartContract.ts:827](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/smartContract.ts#L827)

Check whether the contract can be traced back to the genesis script.

#### Parameters

##### backtraceInfo

[`BacktraceInfo`](../type-aliases/BacktraceInfo.md)

the backtrace info to verify, including prevTx and prevPrevTx informations

##### genesisScript

[`ByteString`](../type-aliases/ByteString.md)

expected genesis script to be traced back to

#### Returns

`boolean`

true if the contract can be backtraced to the genesis script. Otherwise false.

#### Onchain

#### Overrides

`AbstractContract.backtraceToScript`

## Other

### controlBlock

> **controlBlock**: `string`

Defined in: [packages/scrypt-ts-btc/src/smart-contract/smartContract.ts:664](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/smartContract.ts#L664)

In Taproot, a control block is a data structure used during script path spends to prove that a particular script is part of the Taproot output's script tree.

#### Implementation of

`Taprootable.controlBlock`

***

### lockingScript

> `readonly` **lockingScript**: `Script`

Defined in: [packages/scrypt-ts-btc/src/smart-contract/smartContract.ts:162](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/smartContract.ts#L162)

Locking script corresponding to the SmartContract

***

### state

> **state**: `StateT`

Defined in: [packages/scrypt-ts-btc/src/smart-contract/smartContract.ts:157](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/smartContract.ts#L157)

The state of the contract UTXO, usually committed to the first OP_RETURN output, is revealed when spending.

#### Onchain

***

### tweakedPubkey

> **tweakedPubkey**: `string`

Defined in: [packages/scrypt-ts-btc/src/smart-contract/smartContract.ts:669](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/smartContract.ts#L669)

In Taproot, tweaking a public key involves modifying an existing public key to create a new one that embeds additional information, such as commitments to scripts or data.

#### Implementation of

`Taprootable.tweakedPubkey`

***

### artifact

> `static` **artifact**: [`Artifact`](../interfaces/Artifact.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/smartContract.ts:135](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/smartContract.ts#L135)

Bitcoin Contract Artifact

***

### changeInfo

#### Get Signature

> **get** **changeInfo**(): [`TxOut`](../type-aliases/TxOut.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/smartContract.ts:587](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/smartContract.ts#L587)

Get the change info of the change output for current psbt.

##### Onchain

##### Returns

[`TxOut`](../type-aliases/TxOut.md)

the change info of current psbt

***

### ctx

#### Get Signature

> **get** **ctx**(): `IContext`

Defined in: [packages/scrypt-ts-btc/src/smart-contract/smartContract.ts:384](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/smartContract.ts#L384)

Get the context details of the current PSBT input in which this contract is called or spent.

##### Onchain

##### Returns

`IContext`

#### Overrides

`AbstractContract.ctx`

***

### debug

#### Get Signature

> **get** **debug**(): `object`

Defined in: [packages/scrypt-ts-btc/src/smart-contract/smartContract.ts:596](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/smartContract.ts#L596)

A set of functions for debugging contracts, which can only be called in `@method` methods.

##### Onchain

##### Returns

`object`

###### diffOutputs()

> **diffOutputs**: (`outputsByte`) => `void`

###### Parameters

###### outputsByte

[`ByteString`](../type-aliases/ByteString.md)

###### Returns

`void`

***

### inputContext

#### Get Signature

> **get** **inputContext**(): `InputContext`

Defined in: [packages/scrypt-ts-btc/src/smart-contract/smartContract.ts:437](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/smartContract.ts#L437)

Get the context of the current PSBT input in which this contract is called or spent.

##### Returns

`InputContext`

the context of the current PSBT input

***

### spentPsbt

#### Get Signature

> **get** **spentPsbt**(): `Contextual`

Defined in: [packages/scrypt-ts-btc/src/smart-contract/smartContract.ts:424](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/smartContract.ts#L424)

##### Returns

`Contextual`

***

### tapScript

#### Get Signature

> **get** **tapScript**(): `string`

Defined in: [packages/scrypt-ts-btc/src/smart-contract/smartContract.ts:447](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/smartContract.ts#L447)

tapScript

##### Returns

`string`

#### Implementation of

`Taprootable.tapScript`

***

### appendStateOutput()

> **appendStateOutput**(`output`, `stateHash`): [`Int32`](../type-aliases/Int32.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/smartContract.ts:296](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/smartContract.ts#L296)

A built-in function to append an output with a new stateHash.

#### Parameters

##### output

[`ByteString`](../type-aliases/ByteString.md)

the output bytes

##### stateHash

[`Ripemd160`](../type-aliases/Ripemd160.md)

the hash160 of the contract state

#### Returns

[`Int32`](../type-aliases/Int32.md)

state outputs count

#### Onchain

#### Overrides

`AbstractContract.appendStateOutput`

***

### buildChangeOutput()

> **buildChangeOutput**(): [`ByteString`](../type-aliases/ByteString.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/smartContract.ts:271](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/smartContract.ts#L271)

A built-in function to create an [change output][https://en.bitcoin.it/wiki/Change](https://en.bitcoin.it/wiki/Change).

#### Returns

[`ByteString`](../type-aliases/ByteString.md)

#### Onchain

#### Overrides

`AbstractContract.buildChangeOutput`

***

### buildStateOutputs()

> **buildStateOutputs**(): [`ByteString`](../type-aliases/ByteString.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/smartContract.ts:317](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/smartContract.ts#L317)

A built-in function to create all outputs  added by `appendStateOutput()`

#### Returns

[`ByteString`](../type-aliases/ByteString.md)

an output containing the new state

#### Onchain

#### Overrides

`AbstractContract.buildStateOutputs`

***

### checkInputStateHash()

> **checkInputStateHash**(`inputIndex`, `stateHash`): `boolean`

Defined in: [packages/scrypt-ts-btc/src/smart-contract/smartContract.ts:361](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/smartContract.ts#L361)

check StateHash of the input. By default, the system checks the StateHash of all inputs.
If you use this function to specify checking only specific inputs' StateHash, you must set the `autoCheckInputStateHash`
option in the `@method()` decorator to false.

#### Parameters

##### inputIndex

[`Int32`](../type-aliases/Int32.md)

index of the input

##### stateHash

[`ByteString`](../type-aliases/ByteString.md)

stateHash of the input

#### Returns

`boolean`

success if stateHash is valid

#### Onchain

#### Overrides

`AbstractContract.checkInputStateHash`

***

### checkOutputs()

> **checkOutputs**(`outputs`): `boolean`

Defined in: [packages/scrypt-ts-btc/src/smart-contract/smartContract.ts:631](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/smartContract.ts#L631)

Check the outputs with the context of current transaction.

#### Parameters

##### outputs

[`ByteString`](../type-aliases/ByteString.md)

the expected serialized outputs of the current transaction

#### Returns

`boolean`

true if the outputs are not consistent with the transaction context, otherwise false.

#### Onchain

#### Overrides

`AbstractContract.checkOutputs`

***

### checkSHPreimage()

> **checkSHPreimage**(`shPreimage`): `boolean`

Defined in: [packages/scrypt-ts-btc/src/smart-contract/smartContract.ts:242](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/smartContract.ts#L242)

Using the [OP_PUSH_TX][https://medium.com/@xiaohuiliu/op-push-tx-3d3d279174c1](https://medium.com/@xiaohuiliu/op-push-tx-3d3d279174c1) technique, check if `shPreimage` is the preimage of the current transaction.

#### Parameters

##### shPreimage

[`SHPreimage`](../type-aliases/SHPreimage.md)

#### Returns

`boolean`

true if `shPreimage` is the preimage of the current transaction. Otherwise false.

#### Onchain

#### Overrides

`AbstractContract.checkSHPreimage`

***

### cltv()

> **cltv**(`nLockTime`): `boolean`

Defined in: [packages/scrypt-ts-btc/src/smart-contract/smartContract.ts:695](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/smartContract.ts#L695)

Checks a locktime parameter with the transaction's locktime.
There are two times of nLockTime: lock-by-blockheight and lock-by-blocktime,
distinguished by whether nLockTime < LOCKTIME_THRESHOLD = 500000000

See the corresponding code on bitcoin core:
https://github.com/bitcoin/bitcoin/blob/ffd75adce01a78b3461b3ff05bcc2b530a9ce994/src/script/interpreter.cpp#L1129

See the bip65 for specification
https://github.com/bitcoin/bips/blob/master/bip-0065.mediawiki#summary

#### Parameters

##### nLockTime

[`Int32`](../type-aliases/Int32.md)

the locktime read from the script

#### Returns

`boolean`

true if the transaction's locktime is less than or equal to
                  the transaction's locktime

#### Onchain

#### Overrides

`AbstractContract.cltv`

***

### csv()

> **csv**(`nSequence`): `boolean`

Defined in: [packages/scrypt-ts-btc/src/smart-contract/smartContract.ts:744](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/smartContract.ts#L744)

Checks a sequence parameter with the transaction's sequence.

#### Parameters

##### nSequence

[`Int32`](../type-aliases/Int32.md)

the sequence read from the script

#### Returns

`boolean`

true if the transaction's sequence is less than or equal to
                  the transaction's sequence

#### Onchain

#### Overrides

`AbstractContract.csv`

***

### methodCallToWitness()

> **methodCallToWitness**(): `Witness`

Defined in: [packages/scrypt-ts-btc/src/smart-contract/smartContract.ts:644](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/smartContract.ts#L644)

get all witness

#### Returns

`Witness`

all witness that call the contract

***

### setSighashType()

> **setSighashType**(`sigHashType`): `void`

Defined in: [packages/scrypt-ts-btc/src/smart-contract/smartContract.ts:428](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/smartContract.ts#L428)

#### Parameters

##### sigHashType

[`SigHashType`](../enumerations/SigHashType.md)

#### Returns

`void`

***

### spentFromInput()

> **spentFromInput**(`psbt`, `inputIndex`): `void`

Defined in: [packages/scrypt-ts-btc/src/smart-contract/smartContract.ts:419](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/smartContract.ts#L419)

Mark the contract instance as spent from the input of the PSBT.

#### Parameters

##### psbt

`Contextual`

##### inputIndex

`number`

#### Returns

`void`

***

### create()

> `static` **create**\<`T`\>(`this`, ...`args`): `InstanceType`\<`T`\>

Defined in: [packages/scrypt-ts-btc/src/smart-contract/smartContract.ts:225](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/smartContract.ts#L225)

Used to create an instance of a smart contract. If your smart contract has a base class, you must use this method to instantiate it.

#### Type Parameters

• **T** *extends* (...`args`) => `InstanceType`\<`T`\>

#### Parameters

##### this

`T`

##### args

...`ConstructorParameters`\<`T`\>

#### Returns

`InstanceType`\<`T`\>

***

### loadArtifact()

> `static` **loadArtifact**(`artifact`): *typeof* [`SmartContract`](SmartContract.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/smartContract.ts:169](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/smartContract.ts#L169)

This function is usually called on the frontend.
The contract class needs to call this function before instantiating.

#### Parameters

##### artifact

[`Artifact`](../interfaces/Artifact.md)

a contract artifact json object

#### Returns

*typeof* [`SmartContract`](SmartContract.md)

***

### stateHash()

> `static` **stateHash**\<`T`\>(`this`, `state`): [`Ripemd160`](../type-aliases/Ripemd160.md)

Defined in: [packages/scrypt-ts-btc/src/smart-contract/smartContract.ts:333](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/smartContract.ts#L333)

Calculate the hash of all states of the current contract

#### Type Parameters

• **T** *extends* `StructObject`

#### Parameters

##### this

(...`args`) => [`SmartContract`](SmartContract.md)\<`T`\>

##### state

`T`

state of the contract

#### Returns

[`Ripemd160`](../type-aliases/Ripemd160.md)

hash160 of the state

#### Onchain

#### Overrides

`AbstractContract.stateHash`

## Signature Verification

### checkSig()

> **checkSig**(`signature`, `publickey`, `errorMsg`): `boolean`

Defined in: [packages/scrypt-ts-btc/src/smart-contract/smartContract.ts:252](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/smartContract.ts#L252)

A built-in function verifies an Schnorr signature. It takes two inputs from the stack, a public key (on top of the stack) and an Schnorr signature in its DER_CANONISED format concatenated with sighash flags.
It outputs true or false on the stack based on whether the signature check passes or fails. [see][https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki#specification](https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki#specification)

#### Parameters

##### signature

[`Sig`](../type-aliases/Sig.md)

##### publickey

[`PubKey`](../type-aliases/PubKey.md)

##### errorMsg

`string` = `'signature check failed'`

#### Returns

`boolean`

#### Onchain

#### Overrides

`AbstractContract.checkSig`
