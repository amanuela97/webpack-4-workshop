const MiniCssExtractplugin = require("mini-css-extract-plugin");
module.exports = () => ({
  output: {
    filename: "bundle.js",
  },
  module: {
    rules: [
      { test: /\.css$/, use: [MiniCssExtractplugin.loader, "css-loader"] },
    ],
  },
  plugins: [new MiniCssExtractplugin()],
});
