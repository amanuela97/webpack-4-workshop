module.exports = () => ({
  module: {
    rules: [
      {
        test: /\.ts$/, // Match .ts files
        use: "ts-loader", // tranform typescript files for webpack
      },
    ],
  },
});
