const MiniCssExtractplugin = require("mini-css-extract-plugin");
module.exports = () => ({
  output: {
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractplugin.loader, // Extracts CSS into separate files
          "css-loader",
        ],
      },
    ],
  },
  plugins: [new MiniCssExtractplugin()],
});
