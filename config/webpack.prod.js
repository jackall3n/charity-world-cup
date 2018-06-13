'use strict';

const webpackMerge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const commonConfig = require('./webpack.common');
const helpers = require('./helpers');

const ENV = process.env.ENV = process.env.NODE_ENV = 'production';
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 9000;

const common = commonConfig({env: ENV});

const METADATA = webpackMerge(common.metadata, {
  host: HOST,
  port: PORT,
  ENV: ENV
});

module.exports = function (options) {
  return webpackMerge(common, {
    mode: 'production',
    devtool: 'cheap-module-source-map',
    output: {
      path: helpers.root('dist'),
      filename: '[name].[chunkhash].js',
      sourceMapFilename: '[name].map',
      chunkFilename: '[name].[chunkhash].js',
      library: 'ac_[name]',
      libraryTarget: 'var'
    },
    devServer: {
      port: METADATA.port,
      host: METADATA.host,
      historyApiFallback: true,
      watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
      }
    },
    node: {
      global: true,
      crypto: 'empty',
      process: true,
      module: false,
      clearImmediate: false,
      setImmediate: false
    },
    optimization: {
      minimizer: [
        // we specify a custom UglifyJsPlugin here to get source maps in production
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          uglifyOptions: {
            compress: false,
            ecma: 6,
            mangle: true
          },
          sourceMap: false
        })
      ]
    }
  })
};
