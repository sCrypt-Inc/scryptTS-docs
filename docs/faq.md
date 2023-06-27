---
sidebar_position: 15
---

# FAQ

## Script evaluated failed

If you receive a `mandatory-script-verify-flag-failed` error when broadcasting a transaction, it means that one or more inputs to the transaction have incorrect unlock scripts that cannot be verified by miners when attempting to spend those UTXOs.

There are many reasons why the script evaluated failed, `Script evaluated without error but finished with a false/empty top stack element` is the most common situation, it indicates that the evaluation result of the unlocking script combined locking script is false, just as it describes.

![](../static/img/mandatory-script-verify-flag-failed.png)

Another common error is `Signature must be zero for failed CHECK(MULTI)SIG operation`, which means the signature in the unlocking script is not correct and cannot pass the verification of function `checkSig`.

![](../static/img/checksig-failed.png)

To fix this kind of error, you should re-check your contract code and the contract-calling transaction to ensure that the input unlocking script is correct.

## Broadcast double-spending transactions

You could get two different errors when broadcasting a double-spending transaction, depending on the status of the transaction you're trying to double-spend.

- If the transaction you're trying to double-spend is still unconfirmed and in the mempool, the error would be `txn-mempool-conflict`.

![](../static/img/txn-mempool-conflict.png)

- If the transaction is already mined into a block and confirmed, the error would be `Missing inputs`.

![](../static/img/missing-inputs.png)

### for developers
If you encounter these errors when running code, e.g., testing on testnet, it is likely because the [provider](./how-to-deploy-and-call-a-contract/how-to-deploy-and-call-a-contract.md#provider) you are using fails to update your UTXO in time and return UTXOs that have already been spent when you request. Using these UTXOs that have been spent to build transactions will result in a double-spending. This situation is transitory and is caused by the provider not updating UTXO set timely due to, e.g., the provider's server overloading due to heavy blockchain traffic.

To fix this issue, you generally only need to wait a few seconds and retry. If it still persists, you can also increase the time interal between sending consecutive transactions, for example, `sleep` for some time after sending transactions before requesting the UTXO again, so that the provider has enough time to update the UTXO set.

### for dApp users
If you encounter these errors when [using a dApp](./how-to-integrate-a-frontend/how-to-integrate-a-frontend.md), it is likely because the state of dApp's contract has been changed by another user, who is interacting with the dApp at the same time. You are interacting with the contract instance that is stale, resulting in a double-spending.

To fix this issue, you usually only have to wait a few seconds, your local dApp will automatically obtain the latest contract state if it has [subscribed to contract events](./advanced/how-to-integrate-scrypt-service.md#listen-to-events); otherwise you have to manually refresh the browser and try again.

## Input string too short

If you do not set the `PRIVATE_KEY` environment variable in `.env` file before deploying a contract, you would get an `Input string too short` error.

![](../static/img/no-private-key.png)

Please follow [this guide](./how-to-deploy-and-call-a-contract/faucet.md) to generate a new private key or export the private key from your Sensilet wallet, then fund the private key's address with our [faucet](https://scrypt.io/faucet/).

## No sufficient utxos

If you don't fund your private key's address before deploying a contract, you would get a `No sufficient utxos` error.

![](../static/img/insufficient-balance.png)

Please fund your address with our [faucet](https://scrypt.io/faucet/) first.
