module.exports = () => ({
  module: {
    rules: [
      {
        test: /\.css$/, // Match .css files
        use: [
          // loaders chained right to left
          "style-loader", // Injects styles into DOM
          "css-loader", // Translates CSS into CommonJS modules
        ],
      },
    ],
  },
});
