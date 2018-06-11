'use strict';

const helpers = require('./helpers');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const AssetsPlugin = require('assets-webpack-plugin');
const ProvidePlugin = require('webpack/lib/ProvidePlugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');

const METADATA = {
  title: 'Sweepstake | Charity FIFA World Cup 2018',
  baseUrl: '/'
};

module.exports = function (options) {
  return {
    entry: {
      'main': './src/index.tsx',
      'polyfills': './src/polyfills.ts'
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.json'],
      modules: [helpers.root('src'), helpers.root('node_modules')]
    },
    module: {
      rules: [
        {
          test: /\.(png|woff|woff2|eot|ttf|svg)$/,
          use: 'url-loader?limit=100000'
        },
        {
          test: /\.tsx?$/,
          use: 'babel-loader'
        },
        {
          test: /\.scss$/,
          use: [{
            loader: 'style-loader'
          }, {
            loader: 'css-loader'
          }, {
            loader: 'sass-loader',
            options: {
              includePaths: ['node_modules/fil-global-design-standards/scss', 'node_modules/foundation-sites/scss', 'src/styles']
            }
          }]
        },
        {
          test: /\.tsx?$/,
          loader: ['babel-loader', 'ts-loader'],
          exclude: /node_modules/
        },
        {
          test: /\.json$/,
          use: 'json-loader'
        }
      ]
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          default: false,
          commons: {
            test: /node_modules/,
            name: 'vendor',
            chunks: 'initial',
            minSize: 1
          }
        }
      }
    },
    plugins: [
      new AssetsPlugin({
        path: helpers.root('dist'),
        filename: 'webpack-assets.json',
        prettyPrint: true
      }),
      new HtmlWebpackPlugin({
        template: 'src/index.html',
        chunksSortMode: 'dependency',
        title: METADATA.title,
        metadata: METADATA,
        inject: 'body',
        environment: process.env.NODE_ENV
      }),
      new ProvidePlugin({
        __extends: 'typescript-extends'
      }),
      new DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify(options.env)
        }
      })
    ]
  };
};
