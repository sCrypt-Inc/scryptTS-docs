[scrypt-ts](../README.md) / DebugFunctions

# Interface: DebugFunctions

DebugFunctions contains a set of functions for debugging contracts at runtime. 
All debugging functions will not affect the execution results of the contract.

## Table of contents

### Properties

- [diffOutputs](DebugFunctions.md#diffoutputs)

## Properties

### diffOutputs

• **diffOutputs**: (`outputs`: `Bytes`) => `void`

#### Type declaration

▸ (`outputs`): `void`

Compare the difference between the outputs argument and all the outputs of the transaction bound by `this.unlockFrom`,
which are serialized and hashed to produce `this.ctx.hashOutputs`.

##### Parameters

| Name | Type |
| :------ | :------ |
| `outputs` | `Bytes` |

##### Returns

`void`

#### Defined in

[src/contract.ts:95](https://github.com/sCrypt-Inc/scrypt-ts/blob/2062405/src/contract.ts#L95)
