require('dotenv').config()
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');




module.exports = {
  entry: "./src/index",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
    clean: true,
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "src"),
    },
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader", // Use babel-loader for transpilation,
            options: {
              cacheDirectory: true,
              compact: true,
            },
          },
          {
            loader: "ts-loader", // Then use ts-loader for TypeScript compilation
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.svg$/,
        use: ["file-loader", "svg-url-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new webpack.DefinePlugin({
      'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
      'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN)
    }),
  ],
};
