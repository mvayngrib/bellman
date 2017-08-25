const path = require('path');
const slsw = require('serverless-webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = dir => ({
  entry: slsw.lib.entries,
  target: 'node',
  externals: [nodeExternals({modulesDir: path.join(dir, '../../node_modules')})],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel-loader'],
      include: [dir, path.join(dir, '../lib')],
      exclude: /node_modules/,
    }]
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.join(dir, '.webpack'),
    filename: '[name].js'
  }
});