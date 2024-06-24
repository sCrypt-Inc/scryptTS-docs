/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {

  btcSidebar: [
    {
      type: "doc",
      id: "open-api-overview",
    },
    {
      type: "category",
      label: "BTC",
      items: [
        {
          type: "category",
          label: "Blockchain API",
          link: {
            type: "generated-index",
            title: "Blockchain API",
            slug: "/btc-blockchain",
          },
          items: require("./btc-blockchain/sidebar.js"),
        },
        {
          type: "category",
          label: "Token API",
          link: {
            type: "generated-index",
            title: "Token API",
            slug: "/btc-token",
          },
          items: require("./btc-token/sidebar.js"),
        },
      ],
    },
  ]

};

module.exports = sidebars;
