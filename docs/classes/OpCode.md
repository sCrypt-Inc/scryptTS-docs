[ts-scrypt](../README.md) / [Exports](../modules.md) / OpCode

# Class: OpCode

## Table of contents

### Constructors

- [constructor](OpCode.md#constructor)

### Properties

- [OP\_0](OpCode.md#op_0)
- [OP\_0NOTEQUAL](OpCode.md#op_0notequal)
- [OP\_1](OpCode.md#op_1)
- [OP\_10](OpCode.md#op_10)
- [OP\_11](OpCode.md#op_11)
- [OP\_12](OpCode.md#op_12)
- [OP\_13](OpCode.md#op_13)
- [OP\_14](OpCode.md#op_14)
- [OP\_15](OpCode.md#op_15)
- [OP\_16](OpCode.md#op_16)
- [OP\_1ADD](OpCode.md#op_1add)
- [OP\_1NEGATE](OpCode.md#op_1negate)
- [OP\_1SUB](OpCode.md#op_1sub)
- [OP\_2](OpCode.md#op_2)
- [OP\_2DIV](OpCode.md#op_2div)
- [OP\_2DROP](OpCode.md#op_2drop)
- [OP\_2DUP](OpCode.md#op_2dup)
- [OP\_2MUL](OpCode.md#op_2mul)
- [OP\_2OVER](OpCode.md#op_2over)
- [OP\_2ROT](OpCode.md#op_2rot)
- [OP\_2SWAP](OpCode.md#op_2swap)
- [OP\_3](OpCode.md#op_3)
- [OP\_3DUP](OpCode.md#op_3dup)
- [OP\_4](OpCode.md#op_4)
- [OP\_5](OpCode.md#op_5)
- [OP\_6](OpCode.md#op_6)
- [OP\_7](OpCode.md#op_7)
- [OP\_8](OpCode.md#op_8)
- [OP\_9](OpCode.md#op_9)
- [OP\_ABS](OpCode.md#op_abs)
- [OP\_ADD](OpCode.md#op_add)
- [OP\_AND](OpCode.md#op_and)
- [OP\_BIN2NUM](OpCode.md#op_bin2num)
- [OP\_BOOLAND](OpCode.md#op_booland)
- [OP\_BOOLOR](OpCode.md#op_boolor)
- [OP\_CAT](OpCode.md#op_cat)
- [OP\_CHECKLOCKTIMEVERIFY](OpCode.md#op_checklocktimeverify)
- [OP\_CHECKMULTISIG](OpCode.md#op_checkmultisig)
- [OP\_CHECKMULTISIGVERIFY](OpCode.md#op_checkmultisigverify)
- [OP\_CHECKSEQUENCEVERIFY](OpCode.md#op_checksequenceverify)
- [OP\_CHECKSIG](OpCode.md#op_checksig)
- [OP\_CHECKSIGVERIFY](OpCode.md#op_checksigverify)
- [OP\_CODESEPARATOR](OpCode.md#op_codeseparator)
- [OP\_DEPTH](OpCode.md#op_depth)
- [OP\_DIV](OpCode.md#op_div)
- [OP\_DROP](OpCode.md#op_drop)
- [OP\_DUP](OpCode.md#op_dup)
- [OP\_ELSE](OpCode.md#op_else)
- [OP\_ENDIF](OpCode.md#op_endif)
- [OP\_EQUAL](OpCode.md#op_equal)
- [OP\_EQUALVERIFY](OpCode.md#op_equalverify)
- [OP\_FALSE](OpCode.md#op_false)
- [OP\_FROMALTSTACK](OpCode.md#op_fromaltstack)
- [OP\_GREATERTHAN](OpCode.md#op_greaterthan)
- [OP\_GREATERTHANOREQUAL](OpCode.md#op_greaterthanorequal)
- [OP\_HASH160](OpCode.md#op_hash160)
- [OP\_HASH256](OpCode.md#op_hash256)
- [OP\_IF](OpCode.md#op_if)
- [OP\_IFDUP](OpCode.md#op_ifdup)
- [OP\_INVALIDOPCODE](OpCode.md#op_invalidopcode)
- [OP\_INVERT](OpCode.md#op_invert)
- [OP\_LESSTHAN](OpCode.md#op_lessthan)
- [OP\_LESSTHANOREQUAL](OpCode.md#op_lessthanorequal)
- [OP\_LSHIFT](OpCode.md#op_lshift)
- [OP\_MAX](OpCode.md#op_max)
- [OP\_MIN](OpCode.md#op_min)
- [OP\_MOD](OpCode.md#op_mod)
- [OP\_MUL](OpCode.md#op_mul)
- [OP\_NEGATE](OpCode.md#op_negate)
- [OP\_NIP](OpCode.md#op_nip)
- [OP\_NOP](OpCode.md#op_nop)
- [OP\_NOP1](OpCode.md#op_nop1)
- [OP\_NOP10](OpCode.md#op_nop10)
- [OP\_NOP2](OpCode.md#op_nop2)
- [OP\_NOP3](OpCode.md#op_nop3)
- [OP\_NOP4](OpCode.md#op_nop4)
- [OP\_NOP5](OpCode.md#op_nop5)
- [OP\_NOP6](OpCode.md#op_nop6)
- [OP\_NOP7](OpCode.md#op_nop7)
- [OP\_NOP8](OpCode.md#op_nop8)
- [OP\_NOP9](OpCode.md#op_nop9)
- [OP\_NOT](OpCode.md#op_not)
- [OP\_NOTIF](OpCode.md#op_notif)
- [OP\_NUM2BIN](OpCode.md#op_num2bin)
- [OP\_NUMEQUAL](OpCode.md#op_numequal)
- [OP\_NUMEQUALVERIFY](OpCode.md#op_numequalverify)
- [OP\_NUMNOTEQUAL](OpCode.md#op_numnotequal)
- [OP\_OR](OpCode.md#op_or)
- [OP\_OVER](OpCode.md#op_over)
- [OP\_PICK](OpCode.md#op_pick)
- [OP\_PUBKEY](OpCode.md#op_pubkey)
- [OP\_PUBKEYHASH](OpCode.md#op_pubkeyhash)
- [OP\_PUBKEYS](OpCode.md#op_pubkeys)
- [OP\_PUSHDATA1](OpCode.md#op_pushdata1)
- [OP\_PUSHDATA2](OpCode.md#op_pushdata2)
- [OP\_PUSHDATA4](OpCode.md#op_pushdata4)
- [OP\_RESERVED](OpCode.md#op_reserved)
- [OP\_RESERVED1](OpCode.md#op_reserved1)
- [OP\_RESERVED2](OpCode.md#op_reserved2)
- [OP\_RETURN](OpCode.md#op_return)
- [OP\_RIPEMD160](OpCode.md#op_ripemd160)
- [OP\_ROLL](OpCode.md#op_roll)
- [OP\_ROT](OpCode.md#op_rot)
- [OP\_RSHIFT](OpCode.md#op_rshift)
- [OP\_SHA1](OpCode.md#op_sha1)
- [OP\_SHA256](OpCode.md#op_sha256)
- [OP\_SIZE](OpCode.md#op_size)
- [OP\_SMALLINTEGER](OpCode.md#op_smallinteger)
- [OP\_SPLIT](OpCode.md#op_split)
- [OP\_SUB](OpCode.md#op_sub)
- [OP\_SWAP](OpCode.md#op_swap)
- [OP\_TOALTSTACK](OpCode.md#op_toaltstack)
- [OP\_TRUE](OpCode.md#op_true)
- [OP\_TUCK](OpCode.md#op_tuck)
- [OP\_VER](OpCode.md#op_ver)
- [OP\_VERIF](OpCode.md#op_verif)
- [OP\_VERIFY](OpCode.md#op_verify)
- [OP\_VERNOTIF](OpCode.md#op_vernotif)
- [OP\_WITHIN](OpCode.md#op_within)
- [OP\_XOR](OpCode.md#op_xor)

## Constructors

### constructor

• **new OpCode**()

## Properties

### OP\_0

▪ `Static` `Readonly` **OP\_0**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:106](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L106)

___

### OP\_0NOTEQUAL

▪ `Static` `Readonly` **OP\_0NOTEQUAL**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:188](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L188)

___

### OP\_1

▪ `Static` `Readonly` **OP\_1**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:113](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L113)

___

### OP\_10

▪ `Static` `Readonly` **OP\_10**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:123](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L123)

___

### OP\_11

▪ `Static` `Readonly` **OP\_11**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:124](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L124)

___

### OP\_12

▪ `Static` `Readonly` **OP\_12**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:125](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L125)

___

### OP\_13

▪ `Static` `Readonly` **OP\_13**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:126](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L126)

___

### OP\_14

▪ `Static` `Readonly` **OP\_14**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:127](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L127)

___

### OP\_15

▪ `Static` `Readonly` **OP\_15**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:128](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L128)

___

### OP\_16

▪ `Static` `Readonly` **OP\_16**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:129](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L129)

___

### OP\_1ADD

▪ `Static` `Readonly` **OP\_1ADD**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:181](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L181)

___

### OP\_1NEGATE

▪ `Static` `Readonly` **OP\_1NEGATE**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:111](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L111)

___

### OP\_1SUB

▪ `Static` `Readonly` **OP\_1SUB**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:182](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L182)

___

### OP\_2

▪ `Static` `Readonly` **OP\_2**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:115](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L115)

___

### OP\_2DIV

▪ `Static` `Readonly` **OP\_2DIV**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:184](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L184)

___

### OP\_2DROP

▪ `Static` `Readonly` **OP\_2DROP**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:145](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L145)

___

### OP\_2DUP

▪ `Static` `Readonly` **OP\_2DUP**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:146](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L146)

___

### OP\_2MUL

▪ `Static` `Readonly` **OP\_2MUL**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:183](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L183)

___

### OP\_2OVER

▪ `Static` `Readonly` **OP\_2OVER**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:148](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L148)

___

### OP\_2ROT

▪ `Static` `Readonly` **OP\_2ROT**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:149](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L149)

___

### OP\_2SWAP

▪ `Static` `Readonly` **OP\_2SWAP**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:150](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L150)

___

### OP\_3

▪ `Static` `Readonly` **OP\_3**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:116](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L116)

___

### OP\_3DUP

▪ `Static` `Readonly` **OP\_3DUP**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:147](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L147)

___

### OP\_4

▪ `Static` `Readonly` **OP\_4**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:117](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L117)

___

### OP\_5

▪ `Static` `Readonly` **OP\_5**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:118](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L118)

___

### OP\_6

▪ `Static` `Readonly` **OP\_6**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:119](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L119)

___

### OP\_7

▪ `Static` `Readonly` **OP\_7**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:120](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L120)

___

### OP\_8

▪ `Static` `Readonly` **OP\_8**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:121](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L121)

___

### OP\_9

▪ `Static` `Readonly` **OP\_9**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:122](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L122)

___

### OP\_ABS

▪ `Static` `Readonly` **OP\_ABS**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:186](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L186)

___

### OP\_ADD

▪ `Static` `Readonly` **OP\_ADD**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:190](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L190)

___

### OP\_AND

▪ `Static` `Readonly` **OP\_AND**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:172](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L172)

___

### OP\_BIN2NUM

▪ `Static` `Readonly` **OP\_BIN2NUM**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:167](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L167)

___

### OP\_BOOLAND

▪ `Static` `Readonly` **OP\_BOOLAND**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:198](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L198)

___

### OP\_BOOLOR

▪ `Static` `Readonly` **OP\_BOOLOR**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:199](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L199)

___

### OP\_CAT

▪ `Static` `Readonly` **OP\_CAT**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:164](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L164)

___

### OP\_CHECKLOCKTIMEVERIFY

▪ `Static` `Readonly` **OP\_CHECKLOCKTIMEVERIFY**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:226](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L226)

___

### OP\_CHECKMULTISIG

▪ `Static` `Readonly` **OP\_CHECKMULTISIG**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:221](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L221)

___

### OP\_CHECKMULTISIGVERIFY

▪ `Static` `Readonly` **OP\_CHECKMULTISIGVERIFY**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:222](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L222)

___

### OP\_CHECKSEQUENCEVERIFY

▪ `Static` `Readonly` **OP\_CHECKSEQUENCEVERIFY**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:228](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L228)

___

### OP\_CHECKSIG

▪ `Static` `Readonly` **OP\_CHECKSIG**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:219](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L219)

___

### OP\_CHECKSIGVERIFY

▪ `Static` `Readonly` **OP\_CHECKSIGVERIFY**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:220](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L220)

___

### OP\_CODESEPARATOR

▪ `Static` `Readonly` **OP\_CODESEPARATOR**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:218](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L218)

___

### OP\_DEPTH

▪ `Static` `Readonly` **OP\_DEPTH**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:152](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L152)

___

### OP\_DIV

▪ `Static` `Readonly` **OP\_DIV**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:193](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L193)

___

### OP\_DROP

▪ `Static` `Readonly` **OP\_DROP**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:153](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L153)

___

### OP\_DUP

▪ `Static` `Readonly` **OP\_DUP**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:154](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L154)

___

### OP\_ELSE

▪ `Static` `Readonly` **OP\_ELSE**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:138](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L138)

___

### OP\_ENDIF

▪ `Static` `Readonly` **OP\_ENDIF**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:139](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L139)

___

### OP\_EQUAL

▪ `Static` `Readonly` **OP\_EQUAL**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:175](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L175)

___

### OP\_EQUALVERIFY

▪ `Static` `Readonly` **OP\_EQUALVERIFY**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:176](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L176)

___

### OP\_FALSE

▪ `Static` `Readonly` **OP\_FALSE**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:107](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L107)

___

### OP\_FROMALTSTACK

▪ `Static` `Readonly` **OP\_FROMALTSTACK**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:144](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L144)

___

### OP\_GREATERTHAN

▪ `Static` `Readonly` **OP\_GREATERTHAN**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:204](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L204)

___

### OP\_GREATERTHANOREQUAL

▪ `Static` `Readonly` **OP\_GREATERTHANOREQUAL**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:206](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L206)

___

### OP\_HASH160

▪ `Static` `Readonly` **OP\_HASH160**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:216](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L216)

___

### OP\_HASH256

▪ `Static` `Readonly` **OP\_HASH256**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:217](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L217)

___

### OP\_IF

▪ `Static` `Readonly` **OP\_IF**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:134](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L134)

___

### OP\_IFDUP

▪ `Static` `Readonly` **OP\_IFDUP**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:151](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L151)

___

### OP\_INVALIDOPCODE

▪ `Static` `Readonly` **OP\_INVALIDOPCODE**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:247](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L247)

___

### OP\_INVERT

▪ `Static` `Readonly` **OP\_INVERT**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:171](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L171)

___

### OP\_LESSTHAN

▪ `Static` `Readonly` **OP\_LESSTHAN**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:203](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L203)

___

### OP\_LESSTHANOREQUAL

▪ `Static` `Readonly` **OP\_LESSTHANOREQUAL**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:205](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L205)

___

### OP\_LSHIFT

▪ `Static` `Readonly` **OP\_LSHIFT**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:195](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L195)

___

### OP\_MAX

▪ `Static` `Readonly` **OP\_MAX**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:208](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L208)

___

### OP\_MIN

▪ `Static` `Readonly` **OP\_MIN**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:207](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L207)

___

### OP\_MOD

▪ `Static` `Readonly` **OP\_MOD**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:194](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L194)

___

### OP\_MUL

▪ `Static` `Readonly` **OP\_MUL**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:192](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L192)

___

### OP\_NEGATE

▪ `Static` `Readonly` **OP\_NEGATE**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:185](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L185)

___

### OP\_NIP

▪ `Static` `Readonly` **OP\_NIP**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:155](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L155)

___

### OP\_NOP

▪ `Static` `Readonly` **OP\_NOP**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:132](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L132)

___

### OP\_NOP1

▪ `Static` `Readonly` **OP\_NOP1**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:225](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L225)

___

### OP\_NOP10

▪ `Static` `Readonly` **OP\_NOP10**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:236](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L236)

___

### OP\_NOP2

▪ `Static` `Readonly` **OP\_NOP2**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:227](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L227)

___

### OP\_NOP3

▪ `Static` `Readonly` **OP\_NOP3**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:229](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L229)

___

### OP\_NOP4

▪ `Static` `Readonly` **OP\_NOP4**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:230](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L230)

___

### OP\_NOP5

▪ `Static` `Readonly` **OP\_NOP5**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:231](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L231)

___

### OP\_NOP6

▪ `Static` `Readonly` **OP\_NOP6**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:232](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L232)

___

### OP\_NOP7

▪ `Static` `Readonly` **OP\_NOP7**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:233](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L233)

___

### OP\_NOP8

▪ `Static` `Readonly` **OP\_NOP8**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:234](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L234)

___

### OP\_NOP9

▪ `Static` `Readonly` **OP\_NOP9**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:235](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L235)

___

### OP\_NOT

▪ `Static` `Readonly` **OP\_NOT**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:187](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L187)

___

### OP\_NOTIF

▪ `Static` `Readonly` **OP\_NOTIF**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:135](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L135)

___

### OP\_NUM2BIN

▪ `Static` `Readonly` **OP\_NUM2BIN**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:166](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L166)

___

### OP\_NUMEQUAL

▪ `Static` `Readonly` **OP\_NUMEQUAL**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:200](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L200)

___

### OP\_NUMEQUALVERIFY

▪ `Static` `Readonly` **OP\_NUMEQUALVERIFY**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:201](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L201)

___

### OP\_NUMNOTEQUAL

▪ `Static` `Readonly` **OP\_NUMNOTEQUAL**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:202](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L202)

___

### OP\_OR

▪ `Static` `Readonly` **OP\_OR**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:173](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L173)

___

### OP\_OVER

▪ `Static` `Readonly` **OP\_OVER**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:156](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L156)

___

### OP\_PICK

▪ `Static` `Readonly` **OP\_PICK**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:157](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L157)

___

### OP\_PUBKEY

▪ `Static` `Readonly` **OP\_PUBKEY**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:245](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L245)

___

### OP\_PUBKEYHASH

▪ `Static` `Readonly` **OP\_PUBKEYHASH**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:244](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L244)

___

### OP\_PUBKEYS

▪ `Static` `Readonly` **OP\_PUBKEYS**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:243](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L243)

___

### OP\_PUSHDATA1

▪ `Static` `Readonly` **OP\_PUSHDATA1**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:108](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L108)

___

### OP\_PUSHDATA2

▪ `Static` `Readonly` **OP\_PUSHDATA2**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:109](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L109)

___

### OP\_PUSHDATA4

▪ `Static` `Readonly` **OP\_PUSHDATA4**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:110](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L110)

___

### OP\_RESERVED

▪ `Static` `Readonly` **OP\_RESERVED**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:112](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L112)

___

### OP\_RESERVED1

▪ `Static` `Readonly` **OP\_RESERVED1**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:177](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L177)

___

### OP\_RESERVED2

▪ `Static` `Readonly` **OP\_RESERVED2**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:178](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L178)

___

### OP\_RETURN

▪ `Static` `Readonly` **OP\_RETURN**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:141](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L141)

___

### OP\_RIPEMD160

▪ `Static` `Readonly` **OP\_RIPEMD160**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:213](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L213)

___

### OP\_ROLL

▪ `Static` `Readonly` **OP\_ROLL**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:158](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L158)

___

### OP\_ROT

▪ `Static` `Readonly` **OP\_ROT**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:159](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L159)

___

### OP\_RSHIFT

▪ `Static` `Readonly` **OP\_RSHIFT**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:196](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L196)

___

### OP\_SHA1

▪ `Static` `Readonly` **OP\_SHA1**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:214](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L214)

___

### OP\_SHA256

▪ `Static` `Readonly` **OP\_SHA256**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:215](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L215)

___

### OP\_SIZE

▪ `Static` `Readonly` **OP\_SIZE**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:168](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L168)

___

### OP\_SMALLINTEGER

▪ `Static` `Readonly` **OP\_SMALLINTEGER**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:242](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L242)

___

### OP\_SPLIT

▪ `Static` `Readonly` **OP\_SPLIT**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:165](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L165)

___

### OP\_SUB

▪ `Static` `Readonly` **OP\_SUB**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:191](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L191)

___

### OP\_SWAP

▪ `Static` `Readonly` **OP\_SWAP**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:160](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L160)

___

### OP\_TOALTSTACK

▪ `Static` `Readonly` **OP\_TOALTSTACK**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:143](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L143)

___

### OP\_TRUE

▪ `Static` `Readonly` **OP\_TRUE**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:114](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L114)

___

### OP\_TUCK

▪ `Static` `Readonly` **OP\_TUCK**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:161](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L161)

___

### OP\_VER

▪ `Static` `Readonly` **OP\_VER**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:133](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L133)

___

### OP\_VERIF

▪ `Static` `Readonly` **OP\_VERIF**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:136](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L136)

___

### OP\_VERIFY

▪ `Static` `Readonly` **OP\_VERIFY**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:140](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L140)

___

### OP\_VERNOTIF

▪ `Static` `Readonly` **OP\_VERNOTIF**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:137](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L137)

___

### OP\_WITHIN

▪ `Static` `Readonly` **OP\_WITHIN**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:210](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L210)

___

### OP\_XOR

▪ `Static` `Readonly` **OP\_XOR**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:174](https://github.com/sCrypt-Inc/ts-sCrypt/blob/8356f43/src/builtins/functions.ts#L174)
