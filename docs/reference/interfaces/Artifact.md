[**scrypt-ts**](../README.md)

***

[scrypt-ts](../globals.md) / Artifact

# Interface: Artifact

Defined in: scryptlib/dist/contract.d.ts:30

## Properties

### abi

> **abi**: `ABIEntity`[]

Defined in: scryptlib/dist/contract.d.ts:50

ABI of the contract: interfaces of its public functions and constructor

***

### alias

> **alias**: `AliasEntity`[]

Defined in: scryptlib/dist/contract.d.ts:48

all typealias defined in the contracts, including dependent contracts

***

### ~~asm?~~

> `optional` **asm**: `string`

Defined in: scryptlib/dist/contract.d.ts:52

#### Deprecated

locking script of the contract in ASM format, including placeholders for constructor parameters

***

### buildType

> **buildType**: `string`

Defined in: scryptlib/dist/contract.d.ts:36

build type, can be debug or release

***

### compilerVersion

> **compilerVersion**: `string`

Defined in: scryptlib/dist/contract.d.ts:34

version of compiler used to produce this file

***

### contract

> **contract**: `string`

Defined in: scryptlib/dist/contract.d.ts:38

name of the contract

***

### file

> **file**: `string`

Defined in: scryptlib/dist/contract.d.ts:56

relative file uri of the main contract source code file

***

### hex

> **hex**: `string`

Defined in: scryptlib/dist/contract.d.ts:54

locking script of the contract in hex format, including placeholders for constructor parameters

***

### library

> **library**: `LibraryEntity`[]

Defined in: scryptlib/dist/contract.d.ts:46

all library defined in the contracts, including dependent contracts

***

### md5

> **md5**: `string`

Defined in: scryptlib/dist/contract.d.ts:40

md5 of the contract source code

***

### ~~sourceMap?~~

> `optional` **sourceMap**: `string`[]

Defined in: scryptlib/dist/contract.d.ts:60

#### Deprecated

*

***

### sourceMapFile

> **sourceMapFile**: `string`

Defined in: scryptlib/dist/contract.d.ts:62

file uri of source map file *

***

### ~~sources?~~

> `optional` **sources**: `string`[]

Defined in: scryptlib/dist/contract.d.ts:58

#### Deprecated

*

***

### stateProps

> **stateProps**: `ParamEntity`[]

Defined in: scryptlib/dist/contract.d.ts:42

all stateful properties defined in the contracts

***

### structs

> **structs**: `StructEntity`[]

Defined in: scryptlib/dist/contract.d.ts:44

all structures defined in the contracts, including dependent contracts

***

### version

> **version**: `number`

Defined in: scryptlib/dist/contract.d.ts:32

version of artifact file
