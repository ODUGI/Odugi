const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", "@storybook/addon-knobs", "@storybook/preset-create-react-app"],
  core: {
    builder: "webpack5"
  },
  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },
  webpackFinal: async config => ({
    ...config,
    resolve: {
      ...config.resolve,
      ...config.resolve.plugins.push(new TsconfigPathsPlugin({}))
    }
  })
};