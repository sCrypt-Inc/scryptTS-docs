# Website

This documentation website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
yarn
```

### Local Development

Start a local development server and open a browser window.
Most changes are reflected live without having to restart the server.

```
yarn start
```

### Build

This command generates static content in the `/build` directory and can be served using a static content hosting service like S3 or GitHub Pages.

```
yarn build
```

### Deployment

Using SSH:

```
USE_SSH=true yarn deploy
```

Not using SSH:

```
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub Pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
