import BrowserSync from 'browser-sync-webpack-plugin';
import path from 'path';
import webpack from 'webpack';

const projectRoot = path.resolve(__dirname, 'app');

export const entry = path.resolve(__dirname, 'app/index.js');

export const output = {
  path: path.resolve(__dirname, 'dist/'),
  filename: 'app.js'
};

export const plugins = [
  new BrowserSync({
    host: 'localhost',
    port: 3000,
    server: { baseDir: ['dist'] },
  }),
];

export const devtool = '#inline-source-map';

export const module = {
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
};

if (process.env.NODE_ENV == 'production') {
  plugins.push(
    new webpack.optimize.OccurrenceOrderPlugin,
    new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } })
  );
}
