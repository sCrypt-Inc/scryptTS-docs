---
sidebar_position: 12
---

# sCrypt for Ethereum Developers

# Smart contracts on Bitcoin vs Ethereum
Bitcoin and Ethereum are both layer-1 blockchains with [fully programmable smart contracts](https://xiaohuiliu.medium.com/turing-machine-on-bitcoin-7f0ebe0d52b1).
However, their designs fundamentally differ. 

Ethereum is a global state machine, whose state consists of all smart contracts deployed on it. Each transaction is an input to the state machine, transitioning it to the next state according to the rules defined in the smart contract the transaction calls. The design imposes severe limitations on scalability, since transactions must be sequentially processed due to potential race conditions.

In Bitcoin, transaction processing is independent of each other since all information needed is localized. There is no shared global state. Bitcoin is maximally parallelizable by design.

Detailed side-by-side comparison can be found [here](ttps://xiaohuiliu.medium.com/bitcoin-vs-ethereum-smart-contracts-921e0a12b043), which is concisely summarized below.

|| Ethereum | Bitcoin |
|---|---|---|
| Execution Environment | [Ethereum Virtual Machine](https://ethereum.org/en/developers/docs/evm/) (EVM) | [Bitcoin Virtual Machine](https://xiaohuiliu.medium.com/introduction-to-bitcoin-smart-contracts-9c0ea37dc757) (BVM)|
| Model | Account | [UTXO](./overview.md#how-do-bitcoin-smart-contracts-work) |
| Transaction Fee | $1-10 | $0.00001 |
| Transactions Per Second | 15 | 3000+ |
| Transaction Processing | Sequential | Parallel |
| Scalability | Vertical | Horizontal |
| Paradigm | Impure | Pure |
| Miner Extractable Value (MEV) | Yes | No |


# Smart contract development on Bitcoin vs Ethereum

Besides unboundedly scalable fundation, Bitcoin also offers superior smart cotnract developer experience.

The table below shows a comparison of popular Ethereum development tools and their counterparts in the Bitcoin ecosystem.

There are two noticeable differences.
1. Bitcoin smart contract is written in TypeScript, one of the most popular programming languages tens of millions of Web2 developers are already familiar with. They do not have to learn a new niche programming language like Solidity, placing a high barrier to entry. They can reuse all of their favoriate tools, such as Visual Studio Code, [WebStorm](https://www.jetbrains.com/webstorm/), and NPM. 
2. Ethereum's development tools are **fragmented**. They are developed by different entities, who are often competitors. There is disincentive to make them more interoperable, thus they don't communicate with each other well. By contrast, sCrypt takes a more holistic and systematic approach. It builds a unified full-stack platform that encompasses most tools, from programming language, to framework/libraries. Developed synergistically, they are fully compatible with each other, greatly simplifing and streamlining development process.


|| Ethereum | Bitcoin |
|---|---|---|
| Programming Language | [Solidity](https://soliditylang.org/) | [sCrypt DSL](https://docs.scrypt.io/) |
| Framework | [Hardhat](https://hardhat.org/) / [Truffle](https://trufflesuite.com/truffle/) | [The sCrypt CLI](https://www.npmjs.com/package/scrypt-cli) |
| Libraries | [Web3.js](https://web3js.org/#/) / [Ethers.js](https://docs.ethers.org) | [scrypt-ts](https://docs.scrypt.io/how-to-write-a-contract/) |
| Developer Platform | [Alchemy](https://www.alchemy.com/) / [Infura](https://www.infura.io/) | [sCrypt](https://scrypt.io) |
| IDE | [Remix](https://remix.ethereum.org)[^1] | [Visual Studio Code](https://code.visualstudio.com/) |
| Wallet | [MetaMask](https://metamask.io/) | [Sensilet](https://sensilet.com/) |
| Block Explorer | [Etherscan](https://etherscan.io/) | [WhatsOnChain](https://whatsonchain.com/) |

[^1]: Visual Studio Code can also be used for Solidity with various extentions. However, its support is extremely limited compared to that of sCrypt, a TypeScript DSL, which is supported out of box without any extension. For example, [VS Code debugger](./how-to-debug-a-contract.md) has first-class comprehensive support for sCrypt, but does not suppport Solidity.

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

    @method()
    public incremenCounter() {
        this.count++

        assert(hash256(this.buildStateOutput(this.ctx.utxo.value)) == this.ctx.hashOutputs)
    }

}
```
