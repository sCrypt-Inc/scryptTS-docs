[**scrypt-ts**](README.md)

***

# scrypt-ts

## Array

- [FixedArray](type-aliases/FixedArray.md)

## Bitwise Operator

- [lshift](functions/lshift.md)
- [rshift](functions/rshift.md)

## Bytes Operations

- [byteString2Int](functions/byteString2Int.md)
- [int2ByteString](functions/int2ByteString.md)
- [len](functions/len.md)
- [reverseByteString](functions/reverseByteString.md)

## Global Function

- [equals](functions/equals.md)

## Hashing

- [hash160](functions/hash160.md)
- [hash256](functions/hash256.md)
- [pubKey2Addr](functions/pubKey2Addr.md)
- [ripemd160](functions/ripemd160.md)
- [sha1](functions/sha1.md)
- [sha256](functions/sha256.md)

## Math

- [abs](functions/abs.md)
- [max](functions/max.md)
- [min](functions/min.md)
- [within](functions/within.md)

## Other

- [@scrypt-inc/bsv](@scrypt-inc/bsv/README.md)
- [ProviderEvent](enumerations/ProviderEvent.md)
- [SignatureHashType](enumerations/SignatureHashType.md)
- [ActionError](classes/ActionError.md)
- [BsvApi](classes/BsvApi.md)
- [ContractApi](classes/ContractApi.md)
- [DefaultProvider](classes/DefaultProvider.md)
- [DotwalletSigner](classes/DotwalletSigner.md)
- [DummyProvider](classes/DummyProvider.md)
- [FunctionCall](classes/FunctionCall.md)
- [GorillapoolProvider](classes/GorillapoolProvider.md)
- [PandaSigner](classes/PandaSigner.md)
- [Provider](classes/Provider.md)
- [ScryptProvider](classes/ScryptProvider.md)
- [SensibleProvider](classes/SensibleProvider.md)
- [SensiletSigner](classes/SensiletSigner.md)
- [Signer](classes/Signer.md)
- [TaalProvider](classes/TaalProvider.md)
- [TAALSigner](classes/TAALSigner.md)
- [TestWallet](classes/TestWallet.md)
- [WhatsonchainProvider](classes/WhatsonchainProvider.md)
- [Artifact](interfaces/Artifact.md)
- [ContractCalledEvent](interfaces/ContractCalledEvent.md)
- [ContractTransaction](interfaces/ContractTransaction.md)
- [DefaultProviderOption](interfaces/DefaultProviderOption.md)
- [LogConfig](interfaces/LogConfig.md)
- [MethodCallOptions](interfaces/MethodCallOptions.md)
- [MethodCallTxBuilder](interfaces/MethodCallTxBuilder.md)
- [MultiContractCallOptions](interfaces/MultiContractCallOptions.md)
- [MultiContractTransaction](interfaces/MultiContractTransaction.md)
- [Outpoint](interfaces/Outpoint.md)
- [RequestConfig](interfaces/RequestConfig.md)
- [ScriptContext](interfaces/ScriptContext.md)
- [ScryptConfig](interfaces/ScryptConfig.md)
- [SignatureRequest](interfaces/SignatureRequest.md)
- [SignatureResponse](interfaces/SignatureResponse.md)
- [SignTransactionOptions](interfaces/SignTransactionOptions.md)
- [StatefulNext](interfaces/StatefulNext.md)
- [SubscribeOptions](interfaces/SubscribeOptions.md)
- [SubScription](interfaces/SubScription.md)
- [TransactionResponse](interfaces/TransactionResponse.md)
- [TxContext](interfaces/TxContext.md)
- [TxInputRef](interfaces/TxInputRef.md)
- [TxOutputRef](interfaces/TxOutputRef.md)
- [UtxoQueryOptions](interfaces/UtxoQueryOptions.md)
- [VerifyResult](interfaces/VerifyResult.md)
- [Addr](type-aliases/Addr.md)
- [AddressesOption](type-aliases/AddressesOption.md)
- [AddressOption](type-aliases/AddressOption.md)
- [ByteString](type-aliases/ByteString.md)
- [ContractId](type-aliases/ContractId.md)
- [LogLevel](type-aliases/LogLevel.md)
- [Network](type-aliases/Network.md)
- [OffchainUpdates](type-aliases/OffchainUpdates.md)
- [OpCodeType](type-aliases/OpCodeType.md)
- [PrivKey](type-aliases/PrivKey.md)
- [PubKey](type-aliases/PubKey.md)
- [PubKeyHash](type-aliases/PubKeyHash.md)
- [PublicKeyOption](type-aliases/PublicKeyOption.md)
- [PublicKeysOption](type-aliases/PublicKeysOption.md)
- [PublicKeysOrAddressesOption](type-aliases/PublicKeysOrAddressesOption.md)
- [ResolvedSigOpt](type-aliases/ResolvedSigOpt.md)
- [Ripemd160](type-aliases/Ripemd160.md)
- [Sha1](type-aliases/Sha1.md)
- [Sha256](type-aliases/Sha256.md)
- [Sig](type-aliases/Sig.md)
- [SigHashPreimage](type-aliases/SigHashPreimage.md)
- [SigHashType](type-aliases/SigHashType.md)
- [SignatureOption](type-aliases/SignatureOption.md)
- [SignaturesOption](type-aliases/SignaturesOption.md)
- [SubBytes](type-aliases/SubBytes.md)
- [TxHash](type-aliases/TxHash.md)
- [UTXO](type-aliases/UTXO.md)
- [DEFAULT\_SIGHASH\_TYPE](variables/DEFAULT_SIGHASH_TYPE.md)
- [Scrypt](variables/Scrypt.md)
- [Addr](functions/Addr.md)
- [alterFileExt](functions/alterFileExt.md)
- [and](functions/and.md)
- [buildOpreturnScript](functions/buildOpreturnScript.md)
- [buildPublicKeyHashScript](functions/buildPublicKeyHashScript.md)
- [camelCaseCapitalized](functions/camelCaseCapitalized.md)
- [checkTxFee](functions/checkTxFee.md)
- [fill](functions/fill.md)
- [filterUTXO](functions/filterUTXO.md)
- [findSig](functions/findSig.md)
- [findSigs](functions/findSigs.md)
- [fromByteString](functions/fromByteString.md)
- [getDummyP2pkhUTXOs](functions/getDummyP2pkhUTXOs.md)
- [getDummySig](functions/getDummySig.md)
- [getRandomAddress](functions/getRandomAddress.md)
- [getSortedItem](functions/getSortedItem.md)
- [invert](functions/invert.md)
- [isInNodeEnv](functions/isInNodeEnv.md)
- [mapIter](functions/mapIter.md)
- [OpCodeType](functions/OpCodeType.md)
- [or](functions/or.md)
- [parseAddresses](functions/parseAddresses.md)
- [parseSignatureOption](functions/parseSignatureOption.md)
- [PrivKey](functions/PrivKey.md)
- [PubKey](functions/PubKey.md)
- [PubKeyHash](functions/PubKeyHash.md)
- [replayToLatest](functions/replayToLatest.md)
- [Ripemd160](functions/Ripemd160-1.md)
- [Sha1](functions/Sha1-1.md)
- [Sha256](functions/Sha256-1.md)
- [Sig](functions/Sig.md)
- [SigHashPreimage](functions/SigHashPreimage.md)
- [SigHashType](functions/SigHashType.md)
- [slice](functions/slice.md)
- [toByteString](functions/toByteString.md)
- [toHex](functions/toHex.md)
- [toNumber](functions/toNumber.md)
- [utxoFromOutput](functions/utxoFromOutput.md)
- [xor](functions/xor.md)

## SmartContract

- [P2PK](classes/P2PK.md)
- [P2PKH](classes/P2PKH.md)
- [SmartContract](classes/SmartContract.md)
- [SmartContractLib](classes/SmartContractLib.md)

## Standard Contracts

- [Constants](classes/Constants.md)
- [HashedMap](classes/HashedMap.md)
- [HashedSet](classes/HashedSet.md)
- [OpCode](classes/OpCode.md)
- [SigHash](classes/SigHash.md)
- [Utils](classes/Utils.md)
- [VarIntReader](classes/VarIntReader.md)
- [VarIntWriter](classes/VarIntWriter.md)

## Types

- [auto](type-aliases/auto.md)

## assert

- [assert](functions/assert.md)

## decorator

- [method](functions/method.md)
- [prop](functions/prop.md)
