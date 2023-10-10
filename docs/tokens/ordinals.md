---
sidebar_position: 1
---

# The Official sCrypt 1Sat Ordinals SDK

sCrypt offers its official [1Sat Ordinals](https://docs.1satordinals.com/) SDK named [`scrypt-ord`](https://github.com/sCrypt-Inc/scrypt-ord).

The SDK offers an easy to use interface for deploying and transferring 1Sat Ordinals and augmenting them with the power of sCrypt smart contracts.

It facilitates the development of smart contracts for both non-fungible tokens (NFTs) and fungible tokens (FTs).


## Installation

It is recommended that you [create an sCrypt project](../installation.md#the-scrypt-cli-tool) using our CLI tool. Once you have the project set up, simply run the following command:

```
npm i scrypt-ord
```

## Base Classes

`scrypt-ord` provides base classes that can be extended with custom smart contract functionality. Unlike the `SmartContract` class, which you would typically extend for a regular sCrypt smart contract, here you should extend these base classes to integrate your smart contract with 1Sat ordinals functionality.

**Non-fungible tokens (NFTs):**
- `OrdinalNFT`

**Fungible tokens (FTs):**
- `BSV20V1`
- `BSV20V2`

There are also pre-made classes that represent standard 1Sat transfers using the widely employed `P2PKH` mechanism:
- `OrdNFTP2PKH`
- `BSV20V1P2PKH`
- `BSV20V2P2PKH`

Suppose you wish to lock an ordinal token using a custom hash puzzle contract, you would define the smart contract class as shown below:

```ts
class HashPuzzleNFT extends OrdinalNFT {
    @prop()
    hash: Sha256

    constructor(hash: Sha256) {
        super()
        this.init(...arguments)
        this.hash = hash
    }

    @method()
    public unlock(message: ByteString) {
        assert(this.hash == sha256(message), 'hashes are not equal')
    }
}
```

For a deeper exploration, please refer to the respective subsections:

* [Non-Fungible Tokens (NFTs)](./nft.md)
* [Fungible Tokens (FTs)](./ft.md)
