var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './main.jsx',
  output: { path: 'build', filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /.less$/,
        loader: ExtractTextPlugin.extract('style', 'css!less')
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name].css')
  ],
};
