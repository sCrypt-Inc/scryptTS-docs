---
title: "View BSV20 Token Transactions"
sidebar_position: 3
---

You can use [WhatsOnChain](https://whatsonchain.com/) to view a BSV20 token transaction, using our open source [BSV20 plugin](https://github.com/sCrypt-Inc/bsv20-plugin).


A transaction can be viewed in WhatsOnChain via the following url:

```
https://whatsonchain.com/tx/{txid}
```
If it is a [BSV20](https://docs.1satordinals.com/bsv20) transaction like [this](https://whatsonchain.com/tx/2c499c1c15924e04cc009ddc2efe2b16bb8492483b13f514f9689cd7effdd48e), you can click on the BSV20 plugin to see its details.
![](../../../static/img/bsv20-plugin_1.png)

## Transfer
In the plugin, we can see the following information:

- **id:** token id
- **op:** operation in bsv20 terms
- **amount:** bsv20 token amount held by the utxo
- **owner:** bsv20 token owner (only applies to P2PKH)
- **Non-BSV20 input:**: the input does not contain BSV20 tokens
- **Non-BSV20 output:**: the output does not contain BSV20 tokens

We can also see the status of tokens at the top:

- **validated:** valid tokens that has been verified
- **pending:** valid tokens that has yet to be verified
- **invalid:** invalid tokens.

## Deploy / Mint
If the transaction is a token deployment transaction, we will see something similar to:

![](../../../static/img/bsv20-plugin_2.png)


The transaction does not contain any BSV20 token input and it has other fields:

- **symbol:** the symbol of the token
- **decimals:** decimal precision, defaults to `0`. This is different from BRC20 which defaults to 18.


------------------------

[1] We support both BSV20  and [`BSV-20`](https://docs.1satordinals.com/bsv20#new-in-v2-tickerless-mode).









