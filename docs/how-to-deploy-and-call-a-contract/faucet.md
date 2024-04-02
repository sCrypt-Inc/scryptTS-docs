---
sidebar_position: 4
---

# Faucet

It is highly recommended to test your contract on the [testnet](https://test.whatsonchain.com/) after passing local tests. It ensures that a contract can be successfully deployed and invoked as expected on the blockchain.

Before you deploy and call a contract, you need to have a funded address:


1. Create a new project. Skip this step if you have already created a project:

```sh
npx scrypt-cli project demo
cd demo
```

2. Generate a private key with the following command executed from the root of the project:

```sh
npm install
npm run genprivkey
```

The command generates a private key and stores it in a `.env` file in the project's root directory.
It also outputs the [Bitcoin address](https://wiki.bitcoinsv.io/index.php/Bitcoin_address) corresponding to the private key.

3. Fund the private key's address with some testnet coins. You can use this [faucet](https://scrypt.io/faucet) to receive testnet coins.

![faucet](../../static/img/faucet.gif)

### Use the Yours Wallet

In March 2024, Panda Wallet was rebranded to [Yours Wallet](https://github.com/yours-org/yours-wallet/).

If you have [Yours Wallet](https://chromewebstore.google.com/detail/panda-wallet/mlbnicldlpdimbjdcncnklfempedeipj) installed, you can easily use the testnet private key as follows :
![](../../static/img/panda.gif)

### Use the Sensilet Wallet

Alternatively, if you have already installed [Sensilet](https://sensilet.com/), you can extract and use its private key on testnet as follows.

![](../../static/img/extract-sensilet-private-key.gif)
