const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    "hello-world": "./src/hello-world.js",
    "kiwi": "./src/kiwi.js"
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "./dist"),
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|jpeg)$/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Hello world",
      filename: 'hello-world.html',
      meta: {
        description: "Hello world description",
      },
      chunks: ['hello-world']
    }),
    new HtmlWebpackPlugin({
      title: "Kiwi",
      filename: "kiwi.html",
      meta: {
        description: "Kiwi description",
      },
      chunks: ['kiwi']
    }),
  ],
};
