const path = require("path");

module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    // Just overwrite the same filename
    // We don't need to invalidate cache
    filename: "snippet.js",
  },
};
