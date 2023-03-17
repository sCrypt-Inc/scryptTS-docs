// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'sCrypt',
  tagline: 'a Typescript framework to write smart contracts on Bitcoin Satoshi Vision.',
  url: 'https://scrypt.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'sCrypt-Inc', // Usually your GitHub org/user name.
  projectName: 'scrypt-ts', // Usually your repo name.

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
        title: 'sCrypt',
        logo: {
          alt: 'scrypt Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'overview',
            position: 'left',
            label: 'Overview',
          },
          {
            type: 'doc',
            docId: 'tutorials/hello-world',
            position: 'left',
            label: 'Tutorials',
          },
          {
            type: 'doc',
            docId: 'reference/README',
            position: 'left',
            label: 'Reference',
          },
          {
            href: 'https://learn.scrypt.io/',
            label: 'Learn',
            position: 'right',
          },
          {
            href: 'https://by-example.scrypt.io/',
            label: 'By Example',
            position: 'right',
          },
          {
            href: 'https://github.com/sCrypt-Inc/awesome-scrypt/',
            label: 'Developers',
            position: 'right',
          },
          {
            href: '/faucet/',
            label: 'Faucet',
            position: 'right',
          },
          {
            href: 'https://github.com/sCrypt-Inc/',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://classic.scrypt.io',
            label: 'Classic',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            items: [
              {
                html: `
<div class="community-links">
  <ul>
      <li><a title="Email sCrypt" target="_blank" href="mailto:support@scrypt.io"><img src="/img/email.png"
                  alt="Email sCrypt"></a></li>
      <li><a title="sCrypt Medium" target="_blank" href="https://medium.com/@xiaohuiliu"><img src="/img/medium.png"
                  alt="sCrypt Medium"></a></li>
      <li><a title="sCrypt GitHub" target="_blank" href="https://github.com/sCrypt-Inc"><img src="/img/github.png"
                  alt="sCrypt GitHub"></a></li>
      <li><a title="sCrypt Telegram" target="_blank" href="https://t.me/joinchat/GwaRAxKT16JjXyHt5PuhHw"><img
                  src="/img/telegram.png" alt="sCrypt Telegram"></a></li>
      <li><a title="sCrypt Slack" target="_blank"
              href="https://join.slack.com/t/scryptworkspace/shared_invite/enQtNzQ1OTMyNDk1ODU3LTJmYjE5MGNmNDZhYmYxZWM4ZGY2MTczM2NiNTIxYmFhNTVjNjE5MGYwY2UwNDYxMTQyNGU2NmFkNTY5MmI1MWM"><img
                  src="/img/slack.png" alt="sCrypt Slack"></a></li>
      <li><a title="sCrypt Twitter" target="_blank" href="https://twitter.com/sinoTrinity"><img
                  src="/img/twitter.png" alt="sCrypt Twitter"></a></li>
      <li><a title="sCrypt WeChat" target="_blank" href="/img/wechat-qrcode.jpg"><img src="/img/wechat.png"
                  alt="sCrypt WeChat"></a></li>
      <li><a title="sCrypt in BSV Discord" target="_blank" href="https://discord.gg/bsv"><img src="/img/discord.png"
                  alt="sCrypt in BSV Discord"></a></li>
      <li><a title="sCrypt on Reddit" target="_blank" href="https://www.reddit.com/r/sCrypt"><img
                  src="/img/reddit.png" alt="sCrypt on Reddit"></a></li>
      <li><a title="sCrypt on Youtube" target="_blank"
              href="https://www.youtube.com/channel/UCzQsmR836zW8b1kh03Ht04w"><img src="/img/yt.png"
                  alt="sCrypt on Youtube"></a></li>
  </ul>
</div>
                `
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} sCrypt, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },

      algolia: {
        appId: 'OJKYHFWNLH',
        apiKey: '41d31d6a84f91d053d5588b2785cab7e',
        indexName: 'scrypt',
      },
    }),
};

module.exports = config;
