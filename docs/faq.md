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

If you encounter these errors when interacting with the dApp, it is mainly because the state of the contract has changed, but your browser has not been updated in time, such as the contract has been called by another user. At this time, it is equivalent to that you are interacting with the contract instance that is not in the latest state, resulting in a double-spending.

To fix this issue, you generally only need to wait for a few seconds, the browser will automatically obtain the latest contract instance after receiving the contract state-change event, or manually refresh the browser yourself, and then try again.

If you encounter these errors when running the testnet cases, it is mainly because the provider failed to update your UTXO in time so they returned UTXOs that have already been spent when you request. Using these UTXOs that have been spent to build transactions will result in a double-spending. This situation is not common, it might be because there are too many transactions on the blockchain network at this time, the provider cannot update UTXO timely, or somehow the provider's server load is heavy. 

To fix this issue, you generally only need to wait a few seconds and re-run the test. If it still can't be solved, you can also increase the time gap between sending transactions, for example, add a `sleep` ahead of requesting the UTXO after sending transactions, so that the provider has enough time to update the UTXO.

## Input string too short

If you do not set the `PRIVATE_KEY` environment variable in `.env` file before deploying a contract, you would get an `Input string too short` error.

![](../static/img/no-private-key.png)

Please follow [this guide](./how-to-deploy-and-call-a-contract/faucet.md) to generate a new private key or export the private key from your Sensilet wallet, then fund the private key's address with our [faucet](https://scrypt.io/faucet/).

## No sufficient utxos

If you don't fund your private key's address before deploying a contract, you would get a `No sufficient utxos` error.

![](../static/img/insufficient-balance.png)

Please fund your address with our [faucet](https://scrypt.io/faucet/) first.
