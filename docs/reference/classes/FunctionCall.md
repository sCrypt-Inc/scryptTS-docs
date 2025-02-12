[**scrypt-ts**](../README.md)

***

[scrypt-ts](../globals.md) / FunctionCall

# Class: FunctionCall

Defined in: scryptlib/dist/abi.d.ts:32

## Constructors

### new FunctionCall()

> **new FunctionCall**(`methodName`, `binding`): [`FunctionCall`](FunctionCall.md)

Defined in: scryptlib/dist/abi.d.ts:41

#### Parameters

##### methodName

`string`

##### binding

###### args

`Arguments`

###### contract

`AbstractContract`

###### lockingScript?

[`Script`](../@scrypt-inc/bsv/classes/Script.md)

###### unlockingScript?

[`Script`](../@scrypt-inc/bsv/classes/Script.md)

#### Returns

[`FunctionCall`](FunctionCall.md)

## Properties

### args

> `readonly` **args**: `Arguments`

Defined in: scryptlib/dist/abi.d.ts:35

***

### contract

> `readonly` **contract**: `AbstractContract`

Defined in: scryptlib/dist/abi.d.ts:34

***

### methodName

> **methodName**: `string`

Defined in: scryptlib/dist/abi.d.ts:33

## Accessors

### lockingScript

#### Get Signature

> **get** **lockingScript**(): [`Script`](../@scrypt-inc/bsv/classes/Script.md)

Defined in: scryptlib/dist/abi.d.ts:39

##### Returns

[`Script`](../@scrypt-inc/bsv/classes/Script.md)

#### Set Signature

> **set** **lockingScript**(`s`): `void`

Defined in: scryptlib/dist/abi.d.ts:40

##### Parameters

###### s

[`Script`](../@scrypt-inc/bsv/classes/Script.md)

##### Returns

`void`

***

### unlockingScript

#### Get Signature

> **get** **unlockingScript**(): [`Script`](../@scrypt-inc/bsv/classes/Script.md)

Defined in: scryptlib/dist/abi.d.ts:38

##### Returns

[`Script`](../@scrypt-inc/bsv/classes/Script.md)

## Methods

### genLaunchConfig()

> **genLaunchConfig**(`txContext`?): `string`

Defined in: scryptlib/dist/abi.d.ts:51

#### Parameters

##### txContext?

[`TxContext`](../interfaces/TxContext.md)

#### Returns

`string`

***

### toASM()

> **toASM**(): `string`

Defined in: scryptlib/dist/abi.d.ts:47

#### Returns

`string`

***

### toHex()

> **toHex**(): `string`

Defined in: scryptlib/dist/abi.d.ts:50

#### Returns

`string`

***

### toScript()

> **toScript**(): [`Script`](../@scrypt-inc/bsv/classes/Script.md)

Defined in: scryptlib/dist/abi.d.ts:49

#### Returns

[`Script`](../@scrypt-inc/bsv/classes/Script.md)

***

### toString()

> **toString**(): `string`

Defined in: scryptlib/dist/abi.d.ts:48

#### Returns

`string`

***

### verify()

> **verify**(`txContext`?): [`VerifyResult`](../interfaces/VerifyResult.md)

Defined in: scryptlib/dist/abi.d.ts:52

#### Parameters

##### txContext?

[`TxContext`](../interfaces/TxContext.md)

#### Returns

[`VerifyResult`](../interfaces/VerifyResult.md)
