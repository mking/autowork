const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    background: path.resolve(__dirname, "src/chrome/background.js"),
    contentScript: path.resolve(__dirname, "src/chrome/contentScript.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    // Just overwrite the same filename
    // We don't need to invalidate cache
    filename: "chrome/[name].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  // Needed for tree shaking
                  modules: false,
                },
              ],
            ],
          },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        { from: "manifest.json", to: "manifest.json" },
        { from: "src/images", to: "images" },
      ],
    }),
  ],
};
