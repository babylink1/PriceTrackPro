const { override, addWebpackAlias } = require("customize-cra");

module.exports = function override(config, env) {
  config.devtool = "source-map";
  return config;
};
