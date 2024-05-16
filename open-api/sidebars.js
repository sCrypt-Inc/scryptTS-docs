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
      link: {
        type: "generated-index",
        title: "BTC API",
        slug: "/btc",
      },
      items: require("./btc/sidebar.js"),
    },
  ]

};

module.exports = sidebars;
