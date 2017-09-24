"use strict";

exports.tslint = {
  test: /\.ts$/,
  enforce: "pre",
  loader: "tslint-loader",
  exclude: /node_modules/,
};

exports.ts = {
  test: /\.ts$/,
  loader: "awesome-typescript-loader",
  exclude: /node_modules/,
  options: {
    configFileName: "tsconfig.json",
  },
};

exports.html = {
  test: /\.html$/,
  loader: "raw-loader",
  exclude: /node_modules/,
};

exports.css = {
  test: /\.css$/,
  use: [
    "to-string-loader",
    { 
      loader: "css-loader",
      options: { 
        modules: true,
        localIdentName: "[name]__[local]--[hash:base64:5]",
        importLoaders: 1
      }
    },
    "postcss-loader"
  ],
  exclude: /node_modules/,
};

exports.svg = makeUrlRule(/\.svg$/);
exports.eot = makeUrlRule(/\.eot$/);
exports.woff = makeUrlRule(/\.woff$/);
exports.woff2 = makeUrlRule(/\.woff2$/);
exports.ttf = makeUrlRule(/\.ttf$/);

function makeUrlRule(pattern) {
  return {
    test: pattern,
    loader: "url-loader",
    exclude: /node_modules/,
  };
}
