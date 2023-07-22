[scrypt-ts](../README.md) / ContractArtifact

# Interface: ContractArtifact

## Table of contents

### Properties

- [abi](ContractArtifact.md#abi)
- [alias](ContractArtifact.md#alias)
- [asm](ContractArtifact.md#asm)
- [buildType](ContractArtifact.md#buildtype)
- [compilerVersion](ContractArtifact.md#compilerversion)
- [contract](ContractArtifact.md#contract)
- [file](ContractArtifact.md#file)
- [hex](ContractArtifact.md#hex)
- [library](ContractArtifact.md#library)
- [md5](ContractArtifact.md#md5)
- [sourceMap](ContractArtifact.md#sourcemap)
- [sourceMapFile](ContractArtifact.md#sourcemapfile)
- [sources](ContractArtifact.md#sources)
- [stateProps](ContractArtifact.md#stateprops)
- [structs](ContractArtifact.md#structs)
- [version](ContractArtifact.md#version)

## Properties

### abi

• **abi**: `ABIEntity`[]

ABI of the contract: interfaces of its public functions and constructor

#### Defined in

node_modules/scryptlib/dist/contract.d.ts:50

___

### alias

• **alias**: `AliasEntity`[]

all typealias defined in the contracts, including dependent contracts

#### Defined in

node_modules/scryptlib/dist/contract.d.ts:48

___

### asm

• `Optional` **asm**: `string`

**`Deprecated`**

locking script of the contract in ASM format, including placeholders for constructor parameters

#### Defined in

node_modules/scryptlib/dist/contract.d.ts:52

___

### buildType

• **buildType**: `string`

build type, can be debug or release

#### Defined in

node_modules/scryptlib/dist/contract.d.ts:36

___

### compilerVersion

• **compilerVersion**: `string`

version of compiler used to produce this file

#### Defined in

node_modules/scryptlib/dist/contract.d.ts:34

___

### contract

• **contract**: `string`

name of the contract

#### Defined in

node_modules/scryptlib/dist/contract.d.ts:38

___

### file

• **file**: `string`

file uri of the main contract source code file

#### Defined in

node_modules/scryptlib/dist/contract.d.ts:56

___

### hex

• **hex**: `string`

locking script of the contract in hex format, including placeholders for constructor parameters

#### Defined in

node_modules/scryptlib/dist/contract.d.ts:54

___

### library

• **library**: `LibraryEntity`[]

all library defined in the contracts, including dependent contracts

#### Defined in

node_modules/scryptlib/dist/contract.d.ts:46

___

### md5

• **md5**: `string`

md5 of the contract source code

#### Defined in

node_modules/scryptlib/dist/contract.d.ts:40

___

### sourceMap

• `Optional` **sourceMap**: `string`[]

**`Deprecated`**

*

#### Defined in

node_modules/scryptlib/dist/contract.d.ts:60

___

### sourceMapFile

• **sourceMapFile**: `string`

file uri of source map file *

#### Defined in

node_modules/scryptlib/dist/contract.d.ts:62

___

### sources

• `Optional` **sources**: `string`[]

**`Deprecated`**

*

#### Defined in

node_modules/scryptlib/dist/contract.d.ts:58

___

### stateProps

• **stateProps**: `ParamEntity`[]

all stateful properties defined in the contracts

#### Defined in

node_modules/scryptlib/dist/contract.d.ts:42

___

### structs

• **structs**: `StructEntity`[]

all structures defined in the contracts, including dependent contracts

#### Defined in

node_modules/scryptlib/dist/contract.d.ts:44

___

### version

• **version**: `number`

version of artifact file

#### Defined in

node_modules/scryptlib/dist/contract.d.ts:32
