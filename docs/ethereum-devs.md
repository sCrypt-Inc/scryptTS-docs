---
sidebar_position: 12
---

# sCrypt for Ethereum Developers

As an Ethereum developer, you might be interested in exploring the BSV ecosystem and its smart contract language, sCrypt. This pages aims to provide a comparison of popular Ethereum development tools and their counterparts in the BSV ecosystem.

The main difference between the two is that while Ethereum is based on an account model, Bitcoin utilizes the UTXO-model. In Ethereum a smart contract is a separate entity that lives on until it's terminated. In Bitcoin, on the other hand, smart contracts are stateless by default and can be terminated once a public method gets called / unlocked. However state can be enforced by having these methods enforce a copy of itself (with a modified state) in the next output. This essentially unlocks a very similar behavior to Ethereum. See [this](how-to-write-a-contract/stateful-contract.md) page for more details.



|| Ethereum | BSV |
|---|---|---|
| Programming Language | Ethereum utilizes [**Solidity**](https://soliditylang.org/) for developing smart contracts. | BSV uses [**sCrypt**](https://docs.scrypt.io/), an embedded Domain Specific Language (eDSL) based on TypeScript. |
| Execution Environment | Ethereum uses the Ethereum Virtual Machine (EVM) to execute smart contracts. It offers unbounded loops and access to global state. | BSV uses the Bitcoin Virtual Machine (BVM) to execute smart contracts. The computation is a pure function. Unbounded looping can be achieved by iterating [stateful contracts](./how-to-write-a-contract/stateful-contract.md).|
| Model | Ethereum uses the account model. It cannot be parallelized as it uses global state. | BSV uses the [Unspent Transaction Output (UTXO) model](./overview.md#how-do-bitcoin-smart-contracts-work), which can be fully parallelized and is highly scalable. Execution has no side effects and runs the same on or off chain. |
| Transaction Cost | Ethereum's transaction costs are generally very expensive, especially for larger contracts. | Because of its scalability, BSV's transaction costs are extremely cheap, even for very large contracts, such as a full custom [zk-SNARK verifier](./tutorials/zkp.md). |
| Scaling | Ethereum primarily focuses on vertical scaling, such as sharding and layer 2 solutions. | BSV focuses on horizontal scaling, such as increasing block size to handle more transactions. Unlocking UTXO's can be executed in parallel and enables massive scaling. |
| Scaffolding / Framework | Ethereum uses scaffolding tools like [**Hardhat**](https://hardhat.org/) or [**Truffle**](https://trufflesuite.com/truffle/) to set up the development environment, compile, deploy, and test smart contracts. | The [**sCrypt CLI**](https://www.npmjs.com/package/scrypt-cli) handles all these tasks, eliminating the need for separate tools as in Ethereum. |
| Libraries | Ethereum developers use [**web3.js**](https://web3js.org/#/) or [**ethers.js**](https://docs.ethers.org) to interact with Ethereum nodes, accounts, smart contracts, and to listen for blockchain events. | In the BSV ecosystem, **sCrypt** takes care of these functionalities as [part of its framework](./how-to-deploy-and-call-a-contract/how-to-deploy-and-call-a-contract.md). |
| Developer Platform / Service | Ethereum developers often use services like [**Alchemy**](https://www.alchemy.com/) or [**Infura**](https://www.infura.io/) to access Ethereum nodes and interact with the Ethereum network without running an Ethereum node themselves. | For BSV, developers use [**sCrypt**'s web development platform](https://scrypt.io), which manages and tracks deployed contracts, provides a platform for contract interaction, and simplifies the overall development process. |
| IDE | For Ethereum the most popular IDE is [**Remix**](http://remix.ethereum.org/) which is specifically built for Solidity. It also has a Solidity debugger. An alternative is using [VS Code](https://code.visualstudio.com/) with plugins for Solidity. | **sCrypt** is compatible with any environment for developing TypeScript. The most popular being [VS Code](https://code.visualstudio.com/). No plugins needed. |
| Wallet | For Ethereum, [**Metamask**](https://metamask.io/) is a popular browser extension wallet used for managing user identities, signing transactions, and interacting with smart contracts. | On BSV, developers and users can use [**Sensilet**](https://sensilet.com/), a wallet that can be easily integrated into web3 solutions for the BSV blockchain. |
| Block Explorer | Ethereum's [**Etherscan**](https://etherscan.io/) is a widely used block explorer for viewing transaction history, contract source codes, and network status. | In the BSV world, [**WhatsOnChain**](https://whatsonchain.com/) serves a similar purpose, providing a comprehensive view of BSV transactions, blocks, and contract details. |


## Example Code

Let's compare a counter smart contract between Solidity and sCrypt.

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

## Conclusion

As a developer, you will notice that sCrypt does a lot of the heavy lifting, providing a streamlined, all-in-one framework for smart contract development on BSV. In contrast to Ethereum, where multiple tools and services need to be combined for a complete smart contract development environment, sCrypt encompasses most of these functionalities in a single platform, which can greatly simplify your development process.
