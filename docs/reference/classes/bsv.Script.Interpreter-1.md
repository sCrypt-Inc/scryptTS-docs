[scrypt-ts](../README.md) / [bsv](../modules/bsv.md) / [Script](../modules/bsv.Script.md) / Interpreter

# Class: Interpreter

[bsv](../modules/bsv.md).[Script](../modules/bsv.Script.md).Interpreter

## Table of contents

### Constructors

- [constructor](bsv.Script.Interpreter-1.md#constructor)

### Properties

- [errstr](bsv.Script.Interpreter-1.md#errstr)
- [stepListener](bsv.Script.Interpreter-1.md#steplistener)
- [verify](bsv.Script.Interpreter-1.md#verify)
- [DEFAULT\_FLAGS](bsv.Script.Interpreter-1.md#default_flags)
- [MAXIMUM\_ELEMENT\_SIZE](bsv.Script.Interpreter-1.md#maximum_element_size)
- [MAX\_SCRIPT\_ELEMENT\_SIZE](bsv.Script.Interpreter-1.md#max_script_element_size)
- [SCRIPT\_ENABLE\_MAGNETIC\_OPCODES](bsv.Script.Interpreter-1.md#script_enable_magnetic_opcodes)
- [SCRIPT\_ENABLE\_MONOLITH\_OPCODES](bsv.Script.Interpreter-1.md#script_enable_monolith_opcodes)
- [SCRIPT\_ENABLE\_SIGHASH\_FORKID](bsv.Script.Interpreter-1.md#script_enable_sighash_forkid)
- [SCRIPT\_VERIFY\_CHECKLOCKTIMEVERIFY](bsv.Script.Interpreter-1.md#script_verify_checklocktimeverify)
- [SCRIPT\_VERIFY\_CHECKSEQUENCEVERIFY](bsv.Script.Interpreter-1.md#script_verify_checksequenceverify)
- [SCRIPT\_VERIFY\_CLEANSTACK](bsv.Script.Interpreter-1.md#script_verify_cleanstack)
- [SCRIPT\_VERIFY\_DERSIG](bsv.Script.Interpreter-1.md#script_verify_dersig)
- [SCRIPT\_VERIFY\_DISCOURAGE\_UPGRADABLE\_NOPS](bsv.Script.Interpreter-1.md#script_verify_discourage_upgradable_nops)
- [SCRIPT\_VERIFY\_LOW\_S](bsv.Script.Interpreter-1.md#script_verify_low_s)
- [SCRIPT\_VERIFY\_MINIMALDATA](bsv.Script.Interpreter-1.md#script_verify_minimaldata)
- [SCRIPT\_VERIFY\_NULLDUMMY](bsv.Script.Interpreter-1.md#script_verify_nulldummy)
- [SCRIPT\_VERIFY\_NULLFAIL](bsv.Script.Interpreter-1.md#script_verify_nullfail)
- [SCRIPT\_VERIFY\_STRICTENC](bsv.Script.Interpreter-1.md#script_verify_strictenc)

## Constructors

### constructor

• **new Interpreter**()

## Properties

### errstr

• `Optional` **errstr**: `string`

#### Defined in

node_modules/bsv/index.d.ts:1291

___

### stepListener

• `Optional` **stepListener**: [`StepListenerFunction`](../modules/bsv.Script.Interpreter.md#steplistenerfunction)

#### Defined in

node_modules/bsv/index.d.ts:1290

___

### verify

• **verify**: (`inputScript`: [`Script`](bsv.Script-1.md), `outputScript`: [`Script`](bsv.Script-1.md), `txn`: [`Transaction`](bsv.Transaction-1.md), `nin`: `number`, `flags`: `any`, `satoshisBN`: [`BN`](bsv.crypto.BN.md)) => `boolean`

#### Type declaration

▸ (`inputScript`, `outputScript`, `txn`, `nin`, `flags`, `satoshisBN`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `inputScript` | [`Script`](bsv.Script-1.md) |
| `outputScript` | [`Script`](bsv.Script-1.md) |
| `txn` | [`Transaction`](bsv.Transaction-1.md) |
| `nin` | `number` |
| `flags` | `any` |
| `satoshisBN` | [`BN`](bsv.crypto.BN.md) |

##### Returns

`boolean`

#### Defined in

node_modules/bsv/index.d.ts:1292

___

### DEFAULT\_FLAGS

▪ `Static` **DEFAULT\_FLAGS**: `number`

#### Defined in

node_modules/bsv/index.d.ts:1289

___

### MAXIMUM\_ELEMENT\_SIZE

▪ `Static` **MAXIMUM\_ELEMENT\_SIZE**: `number`

#### Defined in

node_modules/bsv/index.d.ts:1287

___

### MAX\_SCRIPT\_ELEMENT\_SIZE

▪ `Static` **MAX\_SCRIPT\_ELEMENT\_SIZE**: `number`

#### Defined in

node_modules/bsv/index.d.ts:1286

___

### SCRIPT\_ENABLE\_MAGNETIC\_OPCODES

▪ `Static` **SCRIPT\_ENABLE\_MAGNETIC\_OPCODES**: `number`

#### Defined in

node_modules/bsv/index.d.ts:1274

___

### SCRIPT\_ENABLE\_MONOLITH\_OPCODES

▪ `Static` **SCRIPT\_ENABLE\_MONOLITH\_OPCODES**: `number`

#### Defined in

node_modules/bsv/index.d.ts:1275

___

### SCRIPT\_ENABLE\_SIGHASH\_FORKID

▪ `Static` **SCRIPT\_ENABLE\_SIGHASH\_FORKID**: `number`

#### Defined in

node_modules/bsv/index.d.ts:1277

___

### SCRIPT\_VERIFY\_CHECKLOCKTIMEVERIFY

▪ `Static` **SCRIPT\_VERIFY\_CHECKLOCKTIMEVERIFY**: `number`

#### Defined in

node_modules/bsv/index.d.ts:1284

___

### SCRIPT\_VERIFY\_CHECKSEQUENCEVERIFY

▪ `Static` **SCRIPT\_VERIFY\_CHECKSEQUENCEVERIFY**: `number`

#### Defined in

node_modules/bsv/index.d.ts:1285

___

### SCRIPT\_VERIFY\_CLEANSTACK

▪ `Static` **SCRIPT\_VERIFY\_CLEANSTACK**: `number`

#### Defined in

node_modules/bsv/index.d.ts:1288

___

### SCRIPT\_VERIFY\_DERSIG

▪ `Static` **SCRIPT\_VERIFY\_DERSIG**: `number`

#### Defined in

node_modules/bsv/index.d.ts:1280

___

### SCRIPT\_VERIFY\_DISCOURAGE\_UPGRADABLE\_NOPS

▪ `Static` **SCRIPT\_VERIFY\_DISCOURAGE\_UPGRADABLE\_NOPS**: `number`

#### Defined in

node_modules/bsv/index.d.ts:1283

___

### SCRIPT\_VERIFY\_LOW\_S

▪ `Static` **SCRIPT\_VERIFY\_LOW\_S**: `number`

#### Defined in

node_modules/bsv/index.d.ts:1278

___

### SCRIPT\_VERIFY\_MINIMALDATA

▪ `Static` **SCRIPT\_VERIFY\_MINIMALDATA**: `number`

#### Defined in

node_modules/bsv/index.d.ts:1281

___

### SCRIPT\_VERIFY\_NULLDUMMY

▪ `Static` **SCRIPT\_VERIFY\_NULLDUMMY**: `number`

#### Defined in

node_modules/bsv/index.d.ts:1282

___

### SCRIPT\_VERIFY\_NULLFAIL

▪ `Static` **SCRIPT\_VERIFY\_NULLFAIL**: `number`

#### Defined in

node_modules/bsv/index.d.ts:1279

___

### SCRIPT\_VERIFY\_STRICTENC

▪ `Static` **SCRIPT\_VERIFY\_STRICTENC**: `number`

#### Defined in

node_modules/bsv/index.d.ts:1276
