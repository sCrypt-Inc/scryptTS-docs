[**scrypt-ts**](../README.md)

***

[scrypt-ts](../globals.md) / MethodCallOptions

# Interface: MethodCallOptions\<T\>

Defined in: scrypt-ts/dist/smart-contract/types/contract-call.d.ts:20

A option type to call a contract public `@method` function.
Used to specify the behavior of signers and transaction builders.
For example, specifying a transaction builder to use a specific change address or specifying a signer to use a specific public key to sign.

## Type Parameters

• **T**

## Properties

### autoPayFee?

> `readonly` `optional` **autoPayFee**: `boolean`

Defined in: scrypt-ts/dist/smart-contract/types/contract-call.d.ts:48

auto add utxo to pay transaction fee, default is true

***

### changeAddress?

> `readonly` `optional` **changeAddress**: [`Address`](../@scrypt-inc/bsv/classes/Address.md)

Defined in: scrypt-ts/dist/smart-contract/types/contract-call.d.ts:36

The P2PKH change output address

***

### exec?

> `readonly` `optional` **exec**: `boolean`

Defined in: scrypt-ts/dist/smart-contract/types/contract-call.d.ts:46

execute a contract's public method to to check if arguments are valid, default is true

***

### fromUTXO?

> `readonly` `optional` **fromUTXO**: [`IUnspentOutput`](../@scrypt-inc/bsv/namespaces/Transaction/interfaces/IUnspentOutput.md)

Defined in: scrypt-ts/dist/smart-contract/types/contract-call.d.ts:34

The previous contract UTXO to spend in the method calling tx

***

### lockTime?

> `readonly` `optional` **lockTime**: `number`

Defined in: scrypt-ts/dist/smart-contract/types/contract-call.d.ts:30

The `lockTime` of the method calling tx

***

### multiContractCall?

> `readonly` `optional` **multiContractCall**: `boolean`

Defined in: scrypt-ts/dist/smart-contract/types/contract-call.d.ts:40

Whether to call multiple contracts at the same time in one transaction

***

### next?

> `readonly` `optional` **next**: [`StatefulNext`](StatefulNext.md)\<`T`\> \| [`StatefulNext`](StatefulNext.md)\<`T`\>[]

Defined in: scrypt-ts/dist/smart-contract/types/contract-call.d.ts:28

The subsequent contract instance(s) produced in the outputs of the method calling tx in a stateful contract

***

### partialContractTx?

> `readonly` `optional` **partialContractTx**: [`ContractTransaction`](ContractTransaction.md)

Defined in: scrypt-ts/dist/smart-contract/types/contract-call.d.ts:42

Pass the `ContractTransaction` of the previous call as an argument to the next call, only used if `multiContractCall = true`.

***

### partiallySigned?

> `readonly` `optional` **partiallySigned**: `boolean`

Defined in: scrypt-ts/dist/smart-contract/types/contract-call.d.ts:44

signer does not contain all private keys, it is used when multiple parties are required to perform signature authorization, default is false， only work in single call

***

### pubKeyOrAddrToSign?

> `readonly` `optional` **pubKeyOrAddrToSign**: [`PublicKeysOrAddressesOption`](../type-aliases/PublicKeysOrAddressesOption.md) \| [`SignaturesOption`](../type-aliases/SignaturesOption.md)

Defined in: scrypt-ts/dist/smart-contract/types/contract-call.d.ts:26

The private key(s) associated with these address(es) or public key(s)
must be used to sign the contract input,
and the callback function will receive the results of the signatures as an argument named `sigResponses`

***

### sequence?

> `readonly` `optional` **sequence**: `number`

Defined in: scrypt-ts/dist/smart-contract/types/contract-call.d.ts:32

The `sequence` of the input spending previous contract UTXO in the method calling tx

***

### verify?

> `readonly` `optional` **verify**: `boolean`

Defined in: scrypt-ts/dist/smart-contract/types/contract-call.d.ts:38

verify transaction before send transaction
