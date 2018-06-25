const path = require('path')
const webpack = require('webpack')
const htmlPlugin = require('html-webpack-plugin');
module.exports = {
  devtool: 'eval-source-map',
  mode: 'development',
  // entry: [
  //   // 'react-hot-loader/patch',
  //   // 'webpack-hot-middleware/client',
  //   path.resolve('src/index.js'),
  // ],
  entry: {
    'index': './src/index.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: 'raw-loader'
      },
      {
        test: /\.js?/,
        // Don't use .babelrc in `yarn link`-ed dependency's directory and use in current direction instead
        loader: 'babel-loader'
      },
      {
        test: /\.(less|css)$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        },{
          loader: 'less-loader'
        }]
      }
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new htmlPlugin({
      title: 'react-router-demo',
      template: path.resolve(__dirname, './src/index.html')
    }),
  ],
  resolveLoader: {
    modules: [
      'node_modules',
    ],
  },
}