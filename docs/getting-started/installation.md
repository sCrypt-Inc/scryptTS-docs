---
sidebar_position: 1
---

# Installation

## Requirements

`scryptTS` depends on the native [sCrypt](https://scrypt.io) compiler, which could be downloaded with this command:

```sh
curl -Ls https://scrypt.io/setup | sh -s --
```

## Installation

Use this command to install `scryptTS` to your project:

```sh
npm install scrypt-ts
```

## Configuration

`scryptTS` also depends on [ts-patch](https://github.com/nonara/ts-patch) to provide a custom plugin support for typescript. 

This configuration should be added to `compilerOptions` in `tsconfig.json` file:

```json
{
  "compilerOptions": {
    ...
    "experimentalDecorators": true,                  // Required
    "plugins": [
      {
        "transform": "scrypt-ts/dist/transformer",   // Required
        "transformProgram": true,                    // Required
        "outDir": "./scrypt",                        // Optional, define the auto-generated `.scrypt` files folder
        "debug": false                               // Optional, enable/disable debug log in console.
      }
    ]
  }
}
```

**Note**: Currently there is an issue with typescript version `4.9.x`, so make sure to lock typescript version to `4.8.4`.




