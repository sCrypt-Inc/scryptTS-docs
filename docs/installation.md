---
sidebar_position: 2
---

# Installation

## Prerequisite

1. Install `Node.js` and `NPM` on your machine by following the instructions over [here](https://nodejs.org/en/download).

:::note
Require `Node.js` version `>=16`.
:::


:::note
If you are using mac computers with apple silicon, make sure [Rosetta](https://support.apple.com/en-us/102527) was installed with following command.
:::


```bash
softwareupdate --install-rosetta --agree-to-license
```

2. Install [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

3. Next, install the scrypt cli

```sh
npm install -g scrypt-cli
```
This will install the scrypt cli globally to your machine, after which you can create scrypt projects.


## The sCrypt CLI Tool

The [sCrypt CLI tool](https://github.com/sCrypt-Inc/scrypt-cli) is used to easily create, compile and publish `sCrypt` projects. The CLI provides best practice project scaffolding including dependencies such as sCrypt, a test framework ([Mocha](https://mochajs.org)), code auto-formatting ([Prettier](https://prettier.io)), linting ([ES Lint](https://eslint.org)), & more.

We can run the CLI tool directly with `npx` and try it out by creating a demo project:

```sh
npx scrypt-cli project demo
```

:::tip
You can also simply fork [the demo contract Repl](https://replit.com/@msinkec/scryptTS-demo) and play with the code in your browser.
:::
