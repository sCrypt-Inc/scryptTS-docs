---
sidebar_position: 0
---

# Faucet

It is highly recommended to test your contract on the following testnets after passing local tests.

1. [BTC signet](https://mempool.space/signet) 
2. [Fractal testnet](https://mempool-testnet.fractalbitcoin.io/)


It ensures that a contract can be successfully deployed and invoked as expected on the blockchain.

Before you deploy and call a contract, you need to have a funded address:


1. Create a new project. Skip this step if you have already created a project:

```sh
npx @scrypt-inc/cli-btc project demo
cd demo
```

2. Generate a private key with the following command executed from the root of the project:

```sh
npm install
npm run genprivkey
```

The command generates a private key and stores it in a `.env` file in the project's root directory.
It also outputs the [Bitcoin address](https://en.bitcoin.it/wiki/Invoice_address) corresponding to the private key.

3. Fund the private key's address with some testnet coins. You can use these faucets to receive testnet coins.

   1. [BTC signet faucets](https://en.bitcoin.it/wiki/Signet#Faucets)
   2. [fractal testnet faucet](https://fractal-testnet.unisat.io/explorer/faucet)