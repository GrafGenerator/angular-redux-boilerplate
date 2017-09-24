"use strict";

const path = require("path");
const rules = require("./webpack/rules");
const plugins = require("./webpack/plugins");

module.exports = {
  entry: { app: "./src/index.ts" },
  output: {
    publicPath: "/",
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash].js",
    chunkFilename: "[id].chunk.js",
    sourceMapFilename: "[name].[hash].js.map",
  },

  devtool: process.env.NODE_ENV === "production"
    ? "source-map"
    : "inline-source-map",

  devServer: {
    contentBase: "./dist",
    historyApiFallback: { index: "/" },
  },

  resolve: {
    extensions: [".webpack.js", ".web.js", ".ts", ".js"]
  },

  plugins: plugins,

  module: {
    rules: [
      rules.css,
      rules.eot,
      rules.html,
      rules.svg,
      rules.ts,
      rules.tslint,
      rules.ttf,
      rules.woff,
      rules.woff2,
    ],
    noParse: [ /zone\.js\/dist\/.+/, /angular2\/bundles\/.+/ ],
  },
};
