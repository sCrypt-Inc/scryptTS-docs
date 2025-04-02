[**bitcoinjs-lib v0.2.9-beta.16**](../README.md)

***

[bitcoinjs-lib](../README.md) / SHPreimage

# Type Alias: SHPreimage

> **SHPreimage**: `object`

Defined in: [packages/scrypt-ts-btc/src/smart-contract/types/structs.ts:52](https://github.com/sCrypt-Inc/scrypt-btc-mono/blob/7d2760b2d3565565fcb011792878d3764e0701be/packages/scrypt-ts-btc/src/smart-contract/types/structs.ts#L52)

transaction digest for signature verification,

## Type declaration

### \_eLastByte

> **\_eLastByte**: [`Int32`](Int32.md)

1 bytes
last byte of e

### \_eWithoutLastByte

> **\_eWithoutLastByte**: [`ByteString`](ByteString.md)

31 bytes
e is sha256 of the sighash, but without last byte

### codeSepPos

> **codeSepPos**: [`ByteString`](ByteString.md)

4 bytes.
the opcode position of the last executed OP_CODESEPARATOR before the currently executed signature opcode, with the value in little endian (or 0xffffffff if none executed). The first opcode in a script has a position of 0. A multi-byte push opcode is counted as one opcode, regardless of the size of data being pushed. Opcodes in parsed but unexecuted branches count towards this value as well.
codesep_pos defined in

#### See

[BIP342](https://github.com/bitcoin/bips/blob/master/bip-0342.mediawiki#common-signature-message-extension)

### inputIndex

> **inputIndex**: [`ByteString`](ByteString.md)

4 bytes
index of this input in the transaction input vector. Index of the first input is 0x00000000.
input_index defined in

#### See

[BIP341](https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki#common-signature-message)

### keyVersion

> **keyVersion**: [`ByteString`](ByteString.md)

1 byte.
a constant value 0x00 representing the current version of public keys in the tapscript signature opcode execution.
key_version defined in

#### See

[BIP342](https://github.com/bitcoin/bips/blob/master/bip-0342.mediawiki#common-signature-message-extension)

### nLockTime

> **nLockTime**: [`ByteString`](ByteString.md)

4 bytes.
locktime of the transaction
nLockTime defined in

#### See

[BIP341](https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki#common-signature-message)

### nVersion

> **nVersion**: [`ByteString`](ByteString.md)

4 bytes.
version number of the transaction
nVersion defined in

#### See

[BIP341](https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki#common-signature-message)

### shaOutputs

> **shaOutputs**: [`ByteString`](ByteString.md)

32 bytes
the SHA256 of the serialization of all outputs.
sha_outputs defined in

#### See

[BIP341](https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki#common-signature-message)

### shaPrevouts

> **shaPrevouts**: [`ByteString`](ByteString.md)

32 bytes.
the SHA256 of the serialization of all input outpoints.
If the ANYONECANPAY SIGHASH type is not set, it's double SHA256 of the serialization of all input outpoints.
Otherwise, it's a uint256 of 0x0000......0000.
sha_prevouts defined in

#### See

[BIP341](https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki#common-signature-message)

### shaSequences

> **shaSequences**: [`ByteString`](ByteString.md)

32 bytes.
the SHA256 of the serialization of all input nSequence.
sha_sequences defined in

#### See

[BIP341](https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki#common-signature-message)

### shaSpentAmounts

> **shaSpentAmounts**: [`ByteString`](ByteString.md)

32 bytes.
the SHA256 of the serialization of all input amounts.
sha_amounts defined in

#### See

[BIP341](https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki#common-signature-message)

### shaSpentScripts

> **shaSpentScripts**: [`ByteString`](ByteString.md)

32 bytes.
the SHA256 of all spent outputs' scriptPubKeys, serialized as script inside CTxOut
sha_scriptpubkeys defined in

#### See

[BIP341](https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki#common-signature-message)

### spendType

> **spendType**: [`ByteString`](ByteString.md)

1 byte.
equal to (ext_flag * 2) + annex_present, where annex_present is 0 if no annex is present, or 1 otherwise (the original witness stack has two or more witness elements, and the first byte of the last element is 0x50)
spendType defined in

#### See

[BIP341](https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki#common-signature-message)

### tapLeafHash

> **tapLeafHash**: [`ByteString`](ByteString.md)

32 bytes.
the tap leaf hash of the input
tapleaf_hash defined in

#### See

[BIP342](https://github.com/bitcoin/bips/blob/master/bip-0342.mediawiki#common-signature-message-extension)

## See

[BIP341](https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki#signature-validation-rules)

## Onchain
