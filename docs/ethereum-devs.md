---
sidebar_position: 12
---

# Transitioning from Ethereum to sCrypt

As an Ethereum developer, you might be interested in exploring the BSV ecosystem and its smart contract language, sCrypt. This pages aims to provide a comparison of popular Ethereum development tools and their counterparts in the BSV ecosystem.

---

## Programming Language

Ethereum utilizes a programming language known as [**Solidity**](https://soliditylang.org/) for developing smart contracts. Solidity is a statically-typed programming language designed for implementing smart contracts on the Ethereum blockchain.

On the other hand, BSV uses [**sCrypt**](https://docs.scrypt.io/), an embedded Domain Specific Language (eDSL) based on TypeScript.
Both Solidity and sCrypt use a similar basic structure for contracts. They define contracts as a collection of properties (the contract's state) and methods that define a locking condition and can also modify the contract properties themselves.

The main difference between the two is that while Solidity is designed for Ethereums account model, sCrypt is designed to be used on Bitcoin's UTXO-model. In Ethereum a smart contract is a separate entity that lives on until it's terminated. In sCrypt, on the other hand, smart contracts are stateless by default and can be terminated once a public method gets called / unlocked. However state can be enforced by having these methods enforce a copy of itself (with a modified state) in the next output. This essentially unlocks a very similar behavior to Solidity. See [this](how-to-write-a-contract/stateful-contract.md) page for more details.

Let's compare a few contract examples.

### Simple demo - unlock with sum of two values

```js
pragma solidity >=0.7.0 <0.9.0;

contract UnlockWithSum {

    int private x;

    int private y;

    constructor(int _x, int _y) payable {
        x = _x;
        y = _y;
    }

    function unlock(int sum) public {
       assert(x + y == sum);
       msg.sender.transfer(address(this).balance);
    }

}
```

```ts
class Demo extends SmartContract {

    @prop()
    readonly x: bigint

    @prop()
    readonly y: bigint

    constructor(x: bigint, y: bigint) {
        super(...arguments)
        this.x = x
        this.y = y
    }

    @method()
    public unlock(sum: bigint) {
        assert(this.x + this.y == sum)
    }

}

```

### Counter

```js
pragma solidity >=0.7.0 <0.9.0;

contract Counter {

    int private count;

    constructor(int _initialCount) {
        count = _initialCount;
    }

    function incrementCounter() public {
        count += 1;
    }

    function getCount() public view returns (int) {
        return count;
    }

}
```

```ts
class Counter extends SmartContract {

    @prop(true)
    count: bigint

    constructor(count: bigint) {
        super(...arguments)
        this.count = count
    }

    @method(SigHash.ANYONECANPAY_SINGLE)
    public incremenCounter() {
        // Increment counter value.
        this.count++

        // Enforce next output to include smart contract with updated counter value.
        const amount: bigint = this.ctx.utxo.value
        const output: ByteString = this.buildStateOutput(this.ctx.utxo.value)
        assert(this.ctx.hashOutputs == hash256(output))
    }

}
```

---

## Scaffolding / Framework

In Ethereum, you use scaffolding tools like [**Hardhat**](https://hardhat.org/) or [**Truffle**](https://trufflesuite.com/truffle/) to set up your development environment, compile, deploy and test your smart contracts.

With BSV, the [**sCrypt CLI**](https://www.npmjs.com/package/scrypt-cli) does all these tasks. This means, you don't need separate tools for each of these tasks as you do in Ethereum.

---

## Libraries

Ethereum developers often use [**web3.js**](https://web3js.org/#/) or [**ethers.js**](https://docs.ethers.org) to interact with Ethereum nodes, accounts, smart contracts, and to listen for blockchain events.

In the BSV ecosystem, **sCrypt** again takes care of these functionalities. sCrypt is a comprehensive solution that handles contract interaction, state management, and event listening as part of its framework.

## Developer Platform / Service

In Ethereum, developers often use services like [**Alchemy**](https://www.alchemy.com/) or [**Infura**](https://www.infura.io/) to access Ethereum nodes and interact with the Ethereum network without running an Ethereum node themselves.

For BSV, developers use [**sCrypt**'s web development platform](https://scrypt.io), which manages and tracks deployed contracts, provides a platform for contract interaction, and simplifies the overall development process. Take a look at [tutorial 7](tutorials/voting) to see how we can leverage this platform to build a real-time web3 application.

## Wallet

For Ethereum, [**Metamask**](https://metamask.io/) is a popular browser extension wallet used for managing user identities, signing transactions, and interacting with smart contracts.

On BSV, developers and users use [**Sensilet**](https://sensilet.com/), a wallet that can be easily integrated into web3 solutions for the BSV blockchain.


## Block Explorer

Ethereum's [**Etherscan**](https://etherscan.io/) is a widely used block explorer for viewing transaction history, contract source codes, and network status.

In the BSV world, [**WhatsOnChain**](https://whatsonchain.com/) serves a similar purpose, providing a comprehensive view of BSV transactions, blocks, and contract details.


## Conclusion

As a developer, you will notice that sCrypt does a lot of the heavy lifting, providing a streamlined, all-in-one framework for smart contract development on BSV. In contrast to Ethereum, where multiple tools and services need to be combined for a complete smart contract development environment, sCrypt encompasses most of these functionalities in a single platform, which can greatly simplify your development process.

To recap, here is a table mapping Ethereum development tools and their counterparts in the BSV/sCrypt ecosystem:

| Category | Ethereum Development Tool | BSV/sCrypt Counterpart |
| --- | --- | --- |
| **Programming Language** | Solidity | sCrypt |
| **Scaffolding / Framework** | Hardhat & Truffle | sCrypt |
| **Library** | web3.js & ethers.js | sCrypt |
| **Developer Platform / Service** | Alchemy & Infura | sCrypt |
| **Wallet** | Metamask | Sensilet |
| **Block Explorer** | Etherscan | WhatsOnChain |
