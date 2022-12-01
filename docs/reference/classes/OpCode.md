[scrypt-ts](../README.md) / OpCode

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

[src/builtins/functions.ts:225](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L225)

___

### OP\_0NOTEQUAL

▪ `Static` `Readonly` **OP\_0NOTEQUAL**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:307](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L307)

___

### OP\_1

▪ `Static` `Readonly` **OP\_1**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:232](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L232)

___

### OP\_10

▪ `Static` `Readonly` **OP\_10**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:242](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L242)

___

### OP\_11

▪ `Static` `Readonly` **OP\_11**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:243](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L243)

___

### OP\_12

▪ `Static` `Readonly` **OP\_12**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:244](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L244)

___

### OP\_13

▪ `Static` `Readonly` **OP\_13**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:245](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L245)

___

### OP\_14

▪ `Static` `Readonly` **OP\_14**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:246](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L246)

___

### OP\_15

▪ `Static` `Readonly` **OP\_15**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:247](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L247)

___

### OP\_16

▪ `Static` `Readonly` **OP\_16**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:248](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L248)

___

### OP\_1ADD

▪ `Static` `Readonly` **OP\_1ADD**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:300](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L300)

___

### OP\_1NEGATE

▪ `Static` `Readonly` **OP\_1NEGATE**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:230](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L230)

___

### OP\_1SUB

▪ `Static` `Readonly` **OP\_1SUB**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:301](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L301)

___

### OP\_2

▪ `Static` `Readonly` **OP\_2**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:234](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L234)

___

### OP\_2DIV

▪ `Static` `Readonly` **OP\_2DIV**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:303](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L303)

___

### OP\_2DROP

▪ `Static` `Readonly` **OP\_2DROP**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:264](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L264)

___

### OP\_2DUP

▪ `Static` `Readonly` **OP\_2DUP**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:265](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L265)

___

### OP\_2MUL

▪ `Static` `Readonly` **OP\_2MUL**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:302](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L302)

___

### OP\_2OVER

▪ `Static` `Readonly` **OP\_2OVER**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:267](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L267)

___

### OP\_2ROT

▪ `Static` `Readonly` **OP\_2ROT**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:268](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L268)

___

### OP\_2SWAP

▪ `Static` `Readonly` **OP\_2SWAP**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:269](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L269)

___

### OP\_3

▪ `Static` `Readonly` **OP\_3**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:235](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L235)

___

### OP\_3DUP

▪ `Static` `Readonly` **OP\_3DUP**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:266](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L266)

___

### OP\_4

▪ `Static` `Readonly` **OP\_4**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:236](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L236)

___

### OP\_5

▪ `Static` `Readonly` **OP\_5**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:237](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L237)

___

### OP\_6

▪ `Static` `Readonly` **OP\_6**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:238](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L238)

___

### OP\_7

▪ `Static` `Readonly` **OP\_7**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:239](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L239)

___

### OP\_8

▪ `Static` `Readonly` **OP\_8**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:240](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L240)

___

### OP\_9

▪ `Static` `Readonly` **OP\_9**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:241](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L241)

___

### OP\_ABS

▪ `Static` `Readonly` **OP\_ABS**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:305](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L305)

___

### OP\_ADD

▪ `Static` `Readonly` **OP\_ADD**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:309](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L309)

___

### OP\_AND

▪ `Static` `Readonly` **OP\_AND**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:291](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L291)

___

### OP\_BIN2NUM

▪ `Static` `Readonly` **OP\_BIN2NUM**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:286](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L286)

___

### OP\_BOOLAND

▪ `Static` `Readonly` **OP\_BOOLAND**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:317](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L317)

___

### OP\_BOOLOR

▪ `Static` `Readonly` **OP\_BOOLOR**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:318](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L318)

___

### OP\_CAT

▪ `Static` `Readonly` **OP\_CAT**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:283](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L283)

___

### OP\_CHECKLOCKTIMEVERIFY

▪ `Static` `Readonly` **OP\_CHECKLOCKTIMEVERIFY**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:345](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L345)

___

### OP\_CHECKMULTISIG

▪ `Static` `Readonly` **OP\_CHECKMULTISIG**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:340](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L340)

___

### OP\_CHECKMULTISIGVERIFY

▪ `Static` `Readonly` **OP\_CHECKMULTISIGVERIFY**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:341](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L341)

___

### OP\_CHECKSEQUENCEVERIFY

▪ `Static` `Readonly` **OP\_CHECKSEQUENCEVERIFY**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:347](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L347)

___

### OP\_CHECKSIG

▪ `Static` `Readonly` **OP\_CHECKSIG**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:338](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L338)

___

### OP\_CHECKSIGVERIFY

▪ `Static` `Readonly` **OP\_CHECKSIGVERIFY**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:339](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L339)

___

### OP\_CODESEPARATOR

▪ `Static` `Readonly` **OP\_CODESEPARATOR**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:337](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L337)

___

### OP\_DEPTH

▪ `Static` `Readonly` **OP\_DEPTH**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:271](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L271)

___

### OP\_DIV

▪ `Static` `Readonly` **OP\_DIV**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:312](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L312)

___

### OP\_DROP

▪ `Static` `Readonly` **OP\_DROP**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:272](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L272)

___

### OP\_DUP

▪ `Static` `Readonly` **OP\_DUP**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:273](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L273)

___

### OP\_ELSE

▪ `Static` `Readonly` **OP\_ELSE**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:257](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L257)

___

### OP\_ENDIF

▪ `Static` `Readonly` **OP\_ENDIF**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:258](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L258)

___

### OP\_EQUAL

▪ `Static` `Readonly` **OP\_EQUAL**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:294](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L294)

___

### OP\_EQUALVERIFY

▪ `Static` `Readonly` **OP\_EQUALVERIFY**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:295](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L295)

___

### OP\_FALSE

▪ `Static` `Readonly` **OP\_FALSE**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:226](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L226)

___

### OP\_FROMALTSTACK

▪ `Static` `Readonly` **OP\_FROMALTSTACK**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:263](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L263)

___

### OP\_GREATERTHAN

▪ `Static` `Readonly` **OP\_GREATERTHAN**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:323](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L323)

___

### OP\_GREATERTHANOREQUAL

▪ `Static` `Readonly` **OP\_GREATERTHANOREQUAL**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:325](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L325)

___

### OP\_HASH160

▪ `Static` `Readonly` **OP\_HASH160**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:335](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L335)

___

### OP\_HASH256

▪ `Static` `Readonly` **OP\_HASH256**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:336](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L336)

___

### OP\_IF

▪ `Static` `Readonly` **OP\_IF**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:253](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L253)

___

### OP\_IFDUP

▪ `Static` `Readonly` **OP\_IFDUP**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:270](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L270)

___

### OP\_INVALIDOPCODE

▪ `Static` `Readonly` **OP\_INVALIDOPCODE**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:366](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L366)

___

### OP\_INVERT

▪ `Static` `Readonly` **OP\_INVERT**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:290](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L290)

___

### OP\_LESSTHAN

▪ `Static` `Readonly` **OP\_LESSTHAN**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:322](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L322)

___

### OP\_LESSTHANOREQUAL

▪ `Static` `Readonly` **OP\_LESSTHANOREQUAL**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:324](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L324)

___

### OP\_LSHIFT

▪ `Static` `Readonly` **OP\_LSHIFT**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:314](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L314)

___

### OP\_MAX

▪ `Static` `Readonly` **OP\_MAX**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:327](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L327)

___

### OP\_MIN

▪ `Static` `Readonly` **OP\_MIN**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:326](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L326)

___

### OP\_MOD

▪ `Static` `Readonly` **OP\_MOD**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:313](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L313)

___

### OP\_MUL

▪ `Static` `Readonly` **OP\_MUL**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:311](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L311)

___

### OP\_NEGATE

▪ `Static` `Readonly` **OP\_NEGATE**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:304](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L304)

___

### OP\_NIP

▪ `Static` `Readonly` **OP\_NIP**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:274](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L274)

___

### OP\_NOP

▪ `Static` `Readonly` **OP\_NOP**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:251](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L251)

___

### OP\_NOP1

▪ `Static` `Readonly` **OP\_NOP1**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:344](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L344)

___

### OP\_NOP10

▪ `Static` `Readonly` **OP\_NOP10**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:355](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L355)

___

### OP\_NOP2

▪ `Static` `Readonly` **OP\_NOP2**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:346](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L346)

___

### OP\_NOP3

▪ `Static` `Readonly` **OP\_NOP3**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:348](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L348)

___

### OP\_NOP4

▪ `Static` `Readonly` **OP\_NOP4**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:349](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L349)

___

### OP\_NOP5

▪ `Static` `Readonly` **OP\_NOP5**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:350](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L350)

___

### OP\_NOP6

▪ `Static` `Readonly` **OP\_NOP6**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:351](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L351)

___

### OP\_NOP7

▪ `Static` `Readonly` **OP\_NOP7**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:352](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L352)

___

### OP\_NOP8

▪ `Static` `Readonly` **OP\_NOP8**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:353](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L353)

___

### OP\_NOP9

▪ `Static` `Readonly` **OP\_NOP9**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:354](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L354)

___

### OP\_NOT

▪ `Static` `Readonly` **OP\_NOT**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:306](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L306)

___

### OP\_NOTIF

▪ `Static` `Readonly` **OP\_NOTIF**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:254](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L254)

___

### OP\_NUM2BIN

▪ `Static` `Readonly` **OP\_NUM2BIN**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:285](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L285)

___

### OP\_NUMEQUAL

▪ `Static` `Readonly` **OP\_NUMEQUAL**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:319](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L319)

___

### OP\_NUMEQUALVERIFY

▪ `Static` `Readonly` **OP\_NUMEQUALVERIFY**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:320](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L320)

___

### OP\_NUMNOTEQUAL

▪ `Static` `Readonly` **OP\_NUMNOTEQUAL**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:321](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L321)

___

### OP\_OR

▪ `Static` `Readonly` **OP\_OR**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:292](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L292)

___

### OP\_OVER

▪ `Static` `Readonly` **OP\_OVER**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:275](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L275)

___

### OP\_PICK

▪ `Static` `Readonly` **OP\_PICK**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:276](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L276)

___

### OP\_PUBKEY

▪ `Static` `Readonly` **OP\_PUBKEY**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:364](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L364)

___

### OP\_PUBKEYHASH

▪ `Static` `Readonly` **OP\_PUBKEYHASH**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:363](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L363)

___

### OP\_PUBKEYS

▪ `Static` `Readonly` **OP\_PUBKEYS**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:362](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L362)

___

### OP\_PUSHDATA1

▪ `Static` `Readonly` **OP\_PUSHDATA1**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:227](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L227)

___

### OP\_PUSHDATA2

▪ `Static` `Readonly` **OP\_PUSHDATA2**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:228](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L228)

___

### OP\_PUSHDATA4

▪ `Static` `Readonly` **OP\_PUSHDATA4**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:229](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L229)

___

### OP\_RESERVED

▪ `Static` `Readonly` **OP\_RESERVED**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:231](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L231)

___

### OP\_RESERVED1

▪ `Static` `Readonly` **OP\_RESERVED1**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:296](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L296)

___

### OP\_RESERVED2

▪ `Static` `Readonly` **OP\_RESERVED2**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:297](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L297)

___

### OP\_RETURN

▪ `Static` `Readonly` **OP\_RETURN**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:260](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L260)

___

### OP\_RIPEMD160

▪ `Static` `Readonly` **OP\_RIPEMD160**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:332](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L332)

___

### OP\_ROLL

▪ `Static` `Readonly` **OP\_ROLL**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:277](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L277)

___

### OP\_ROT

▪ `Static` `Readonly` **OP\_ROT**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:278](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L278)

___

### OP\_RSHIFT

▪ `Static` `Readonly` **OP\_RSHIFT**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:315](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L315)

___

### OP\_SHA1

▪ `Static` `Readonly` **OP\_SHA1**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:333](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L333)

___

### OP\_SHA256

▪ `Static` `Readonly` **OP\_SHA256**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:334](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L334)

___

### OP\_SIZE

▪ `Static` `Readonly` **OP\_SIZE**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:287](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L287)

___

### OP\_SMALLINTEGER

▪ `Static` `Readonly` **OP\_SMALLINTEGER**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:361](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L361)

___

### OP\_SPLIT

▪ `Static` `Readonly` **OP\_SPLIT**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:284](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L284)

___

### OP\_SUB

▪ `Static` `Readonly` **OP\_SUB**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:310](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L310)

___

### OP\_SWAP

▪ `Static` `Readonly` **OP\_SWAP**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:279](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L279)

___

### OP\_TOALTSTACK

▪ `Static` `Readonly` **OP\_TOALTSTACK**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:262](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L262)

___

### OP\_TRUE

▪ `Static` `Readonly` **OP\_TRUE**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:233](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L233)

___

### OP\_TUCK

▪ `Static` `Readonly` **OP\_TUCK**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:280](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L280)

___

### OP\_VER

▪ `Static` `Readonly` **OP\_VER**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:252](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L252)

___

### OP\_VERIF

▪ `Static` `Readonly` **OP\_VERIF**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:255](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L255)

___

### OP\_VERIFY

▪ `Static` `Readonly` **OP\_VERIFY**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:259](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L259)

___

### OP\_VERNOTIF

▪ `Static` `Readonly` **OP\_VERNOTIF**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:256](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L256)

___

### OP\_WITHIN

▪ `Static` `Readonly` **OP\_WITHIN**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:329](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L329)

___

### OP\_XOR

▪ `Static` `Readonly` **OP\_XOR**: [`OpCodeType`](OpCodeType.md)

#### Defined in

[src/builtins/functions.ts:293](https://github.com/sCrypt-Inc/ts-sCrypt/blob/bed02a6/src/builtins/functions.ts#L293)
