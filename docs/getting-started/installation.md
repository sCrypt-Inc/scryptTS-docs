---
sidebar_position: 1
---

# Installation

## Requirements

Using `scrypt-ts` requires a node version `>=16.0`.

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




