var BrowserSync = require('browser-sync-webpack-plugin'),
    path = require('path'),
    webpack = require('webpack');

var projectRoot = path.resolve(__dirname, 'app');

module.exports = {
  devtool: '#inline-source-map',
  entry: path.resolve(__dirname, 'app/index.js'),
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist/')
  },
  module: {
    preLoaders: [{
      test: /\.js$/,
      loader: 'eslint',
      include: projectRoot,
      exclude: /node_modules/
    }],
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      include: projectRoot,
      exclude: /node_modules/
    },
    {
      test: /\.(html|webmanifest|te?xt)$/,
      loader: 'file-loader?name=[name].[ext]'
    },
    {
      test: /\.(s?css)$/,
      loaders: ['style', 'css', 'sass']
    },
    {
      test: /\.(png|jpe?g|gif|ico)$/,
      loader: 'file-loader?name=[path][name].[ext]&context=./app'
    },
    {
      test: /\.svg$/,
      loaders: ['url-loader', 'svg-loader']
    },
    {
      test: /\.(?:eot|ttf|woff)$/,
      loaders: ['url-loader']
    }]
  },
  plugins: [
    new BrowserSync({
      host: 'localhost',
      port: 3000,
      server: { baseDir: ['dist'] },
    })
  ]
};

if (process.env.NODE_ENV == 'production') {
  exports.plugins.push(
    new webpack.optimize.OccurrenceOrderPlugin,
    new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } })
  );
}
