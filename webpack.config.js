/* global __dirname, require, module */

const webpack = require('webpack');
const path = require('path');

const libraryName = 'youtube-audio-dl';

const config = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src')],
    extensions: ['.js', '.json']
  },
  devtool: 'source-map'
};

module.exports = config;
