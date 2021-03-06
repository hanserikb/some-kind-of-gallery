var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    './client/reduxstagram'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      alwaysWriteToDisk: true,
      template: 'start.html',
      filename: 'index.html'
    }),
    new HtmlWebpackHarddiskPlugin()
  ],
  module: {
    loaders: [
    // js
    {
      test: /\.js$/,
      loader: 'babel',
      include: path.join(__dirname, 'client'),
      exclude: path.join(__dirname, 'client', 'data', 'convert.js'),
      query: {
        presets: ['stage-2', 'es2015', 'react']
      }
    },
    // CSS
    {
      test: /\.styl$/,
      include: path.join(__dirname, 'client'),
      loader: 'style-loader!css-loader!stylus-loader'
    }
    ]
  }
};
