const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: path.join(__dirname, "/src/script.js"),
  output: {
    publicPath: "/",
    filename: "[name].bundle.js",
    path: path.join(__dirname, "../public"),
    chunkFilename: "[name]-[id].js",
  },
  target: "web",
  resolve: {
    extensions: [ ".css", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(c|s[ac])ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "resolve-url-loader",
          // {
          //   loader: 'css-loader',
          //   options: {
          //     modules: {
          //       localIdentName: '[hash:base64:5]--[local]'
          //     }
          //   }
          // },
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "homepage.html"),
      title: "test-task",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],
};