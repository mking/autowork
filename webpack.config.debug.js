const common = require("./webpack.config.common");

module.exports = {
  ...common,
  mode: "production",
  optimization: {
    minimize: false,
  },
};
