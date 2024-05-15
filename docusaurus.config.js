// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'sCrypt',
  tagline: 'a Typescript framework to write smart contracts on Bitcoin Satoshi Vision.',
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
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
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
            type: "doc",
            docId: "overview",
            position: "left",
            label: "BSV",
          },
          {
            position: "left",
            label: "BTC",
            to: "/category/btc",
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
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },

      algolia: {
        appId: 'OJKYHFWNLH',
        apiKey: 'b2fd643cac7f79de3144cda8f1215aaf',
        indexName: 'scryptTS-docs',
      },
    }),

    plugins: [
      [
        'docusaurus-plugin-openapi-docs',
        {
          id: "api", // plugin id
          docsPluginId: "classic", // id of plugin-content-docs or preset for rendering docs
          config: {
            scrypt: {
              specPath: "btc.yaml",
              outputDir: "docs/btc",
              sidebarOptions: {
                groupPathsBy: "tag",
              },
            },
          }
        },
      ]
    ],
    themes: ["docusaurus-theme-openapi-docs"], // export theme components
};

module.exports = config;
