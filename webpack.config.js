var BrowserSync = require('browser-sync-webpack-plugin');
var path = require('path');
var webpack = require('webpack');

var projectRoot = path.resolve(__dirname, 'app');

var config = {
  entry: path.resolve(__dirname, 'app/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: 'app.js'
  },
  plugins: [
    new BrowserSync({
      host: 'localhost',
      port: 3000,
      server: { baseDir: ['dist'] },
    }),
  ],
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint',
        include: projectRoot,
        exclude: /node_modules/,
      },
    ],
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: projectRoot,
        exclude: /node_modules/,
      },
      {
        test: /\.(html|webmanifest|te?xt)$/,
        loader: 'file-loader?name=[name].[ext]',
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico)$/,
        loader: 'file-loader?name=[path][name].[ext]&context=./app'
      },
      {
        test: /\.svg$/,
        loaders: ['url-loader', 'svg-loader']
      },
      {
        test: /\.(?:eot|ttf|woff)$/,
        loaders: ['url-loader']
      }
    ]
  }
};

if (process.env.NODE_ENV == 'production') {
  config.plugins.push(
    new webpack.optimize.OccurenceOrderPlugin,
    new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } })
  );
}

module.exports = config;
