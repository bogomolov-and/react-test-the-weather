const webpack = require('webpack');
const merge = require('webpack-merge');

const paths = require('./paths');
const webpackConfigBase = require('./webpack.common');

const appPort = 8080;
const apiUrl = 'https://weather-ydn-yql.media.yahoo.com';

module.exports = merge.smart(webpackConfigBase, {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: [
    'react-hot-loader/patch',
    paths.appIndexJs,
  ],
  devServer: {
    port: appPort,
    publicPath: '/',
    historyApiFallback: true,
    proxy: {
      '/v2/*': {
        target: apiUrl,
        secure: false,
        changeOrigin: true,
      },
    },
  },
  output: {
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
});
