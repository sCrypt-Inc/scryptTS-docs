// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');
const lightTheme = themes.github;
const darkTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'sCrypt',
  tagline: 'a Typescript framework to write smart contracts on Bitcoin.',
  url: 'https://docs.scrypt.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'sCrypt-Inc', // Usually your GitHub org/user name.
  projectName: 'scrypt-ts-docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/bsv-docs',
          sidebarPath: require.resolve('./docs/sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          alt: 'scrypt Logo',
          src: 'img/scrypt.png',
        },
        items: [
          {
            position: "left",
            to: "/overview",
            label: "BTC",
          },
          {
            position: "left",
            to: "/bsv-docs/overview",
            label: "BSV",
          },
          {
            /* Only visible under docs. See src/custom/custom.css */
            href: 'https://github.com/sCrypt-Inc/scryptTS-docs',
            label: 'Help us improve this page',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            items: [
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} sCrypt, Inc.`,
      },
      prism: {
        theme: lightTheme,
        darkTheme: darkTheme,
      },

      algolia: {
        appId: 'OJKYHFWNLH',
        apiKey: 'b2fd643cac7f79de3144cda8f1215aaf',
        indexName: 'scryptTS-docs',
      },
    }),

  plugins: [
    // use multi-instance to render open-api docs, see ref: https://docusaurus.io/docs/docs-multi-instance
    // [
    //   '@docusaurus/plugin-content-docs',
    //   {
    //     id: 'open-api',
    //     path: 'open-api',
    //     routeBasePath: 'open-api',
    //     sidebarPath: './open-api/sidebars.js',
    //     docLayoutComponent: "@theme/DocPage",
    //     docItemComponent: "@theme/ApiItem" // derived from docusaurus-theme-openapi-docs
    //   },
    // ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'btc-docs',
        path: './btc-docs',
        routeBasePath: '/',
        sidebarPath: './btc-docs/sidebars.js',
        // showLastUpdateAuthor: true,
        // showLastUpdateTime: true,
        // ... other options
      },
    ],
    // [
    //   'docusaurus-plugin-openapi-docs',
    //   {
    //     id: "open-api-doc-generator", // plugin id
    //     docsPluginId: "open-api", // id of plugin-content-docs or preset for rendering docs
    //     config: {
    //       btcBlockhain: {
    //         specPath: "open-api/btc-blockchain.yaml",
    //         outputDir: "open-api/btc-blockchain",
    //         sidebarOptions: {
    //           groupPathsBy: "tag",
    //         },
    //       },
    //       btcToken: {
    //         specPath: "open-api/btc-token.yaml",
    //         outputDir: "open-api/btc-token",
    //         sidebarOptions: {
    //           groupPathsBy: "tag",
    //         },
    //       },
    //     },
    //   },
    // ]
  ],
  themes: ["docusaurus-theme-openapi-docs"], // export theme components
};

module.exports = config;
