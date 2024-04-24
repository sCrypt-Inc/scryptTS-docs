---
sidebar_position: 2
---

# Installation

## Prerequisites

1. Install `Node.js` (require version `>=16`) and `NPM` on your machine by following the instructions [here](https://nodejs.org/en/download).


2. Install [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).


:::note
On Mac computers with Apple silicon like M1/M2, make sure [Rosetta](https://support.apple.com/en-us/102527) is installed. If not, it can be installed with the following command.
:::

```bash
softwareupdate --install-rosetta --agree-to-license
```


## The sCrypt CLI Tool

The [sCrypt CLI](https://github.com/sCrypt-Inc/scrypt-cli) tool is used to easily create, compile and publish `sCrypt` projects.
The CLI provides best practice project scaffolding including dependencies such as sCrypt, a test framework ([Mocha](https://mochajs.org)), code auto-formatting ([Prettier](https://prettier.io)), linting ([ES Lint](https://eslint.org)), and more.

Run the CLI tool directly with `npx` and try it out by creating a demo project:

```sh
npx scrypt-cli project demo
```

Or install it globally on your machine.

```sh
npm install -g scrypt-cli
```

:::tip
You can also fork the [demo contract on Repl.it](https://replit.com/@msinkec/scryptTS-demo) and play with the code in your browser.
:::
