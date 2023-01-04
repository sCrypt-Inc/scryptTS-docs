---
sidebar_position: 1
---

# Overview

Congratulations on choosing `scryptTS` as a tool to build Smart Contract based applications — you’re already making good decisions!


## What is `scryptTS`?

`scryptTS` is a Typescript framework to write smart contracts on Bitcoin SV.

## How do Bitcoin SV Smart Contracts work?

Smart contracts on the Bitcoin SV network are based on the Bitcoin UTXO model, which is very different from an account model like Ethereum used.

### UTXO model

Each Bitcoin [Transaction](https://wiki.bitcoinsv.io/index.php/Bitcoin_Transactions) is composed of Inputs and Outputs. Inputs provide the funds to be spent in the transaction, and Outputs define where those funds should be allocated.

#### Inputs

An input is a reference to an output from a previous transaction, or in another word it spends the referenced output. 

An important part in input is called **unlocking script**, which is a piece of  [Bitcoin Script](https://wiki.bitcoinsv.io/index.php/Script). The script provides information that can be used to **unlock** the referenced output.

#### Outputs

An output also contains a piece of Bitcoin Script called **locking script**, which can be used to **lock** some bitcoins which are represented by the `value` field of the output .

#### Transaction Validation

A transaction is valid if all of its inputs are valid. 

To verify that inputs are authorized to collect the values of referenced outputs, Bitcoin uses a Forth-like scripting system. In simple words, the scripts from an input and its referenced output are connected (in that order) to form a complete script that will be evaluated. The evaluation returns true if the input can spend the output, otherwise it can’t.

An output that has not been spent yet is called an unspent transaction output, UTXO for short.

### UTXO-based Smart Contract

An UTXO-based smart contract works on the foundation of the scripting system described before.

A smart contract can be transformed to a locking script. It can have properties or states which will be serialized into this locking script as well. 

A smart contract can be deployed through a Bitcoin transaction if any of the tx outputs contains the locking script generated from the contract. In other words, a transaction can have UTXO(s) locked by the contract(s).

A smart contract can have many public(entry) methods. Each signature of them can be transformed to an unlocking script. Developers can implement any kinds of verifications in those methods for their given parameters.

A smart contract can be called through a Bitcoin transaction if one of the tx inputs spends an UTXO locked by the contract.

## How does `scryptTS` work?

`scryptTS` provides a feature that can transpile smart contracts written in Typescript into equivalents written in a dedicated Bitcoin SV smart contract language named [`sCrypt`](https://scrypt.io) at Typescript compile time. Those sCrypt contracts can be compiled into [Bitcoin Script](https://wiki.bitcoinsv.io/index.php/Script) by the native compiler, and then the low-level scripts could be used as locking / unlocking scripts when building transactions.

Backed by these underlying techniques, developers could use their most familiar language Typescript to build Bitcoin SV smart contract applications.

## Learn scryptTS

Jump over to the [Getting Started](./getting-started/installation.md) section to learn how to create an scryptTS project from scratch one by one.

If you're already experienced, you can jump straight to the [Tutorials](./tutorials/hello-world.md) section where you will use the sCrypt CLI tool to generate all the boilerplate for you.

