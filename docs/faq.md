---
sidebar_position: 15
---

# FAQ

## Broadcast double-spending transactions

You would mainly get two different errors when broadcasting a double-spending transaction, depending on the status of the transaction you're trying to double-spend.

- If the transaction you're trying to double-spend is still unconfirmed and in the mempool, the error would be `txn-mempool-conflict`.

![](../static/img/txn-mempool-conflict.png)

- If the transaction you're trying to double-spend is already confirmed, the error would be `Missing inputs`.

![](../static/img/missing-inputs.png)

To fix this, just wait a while, request the latest UTXO of your address from the provider, then rebuild a transaction to broadcast.

## Input string too short

If you do not set the `PRIVATE_KEY` environment variable in `.env` file before deploying a contract, you would get an `Input string too short` error.

![](../static/img/no-private-key.png)

Please follow [this guide](./how-to-deploy-and-call-a-contract/faucet.md) to generate a new private key or export the private key from your Sensilet wallet, then fund the private key's address with our [faucet](https://scrypt.io/faucet/).

## No sufficient utxos

If you don't fund your private key's address before deploying a contract, you would get a `No sufficient utxos` error.

![](../static/img/insufficient-balance.png)

Please fund your address with our [faucet](https://scrypt.io/faucet/) first.
