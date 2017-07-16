/* global __dirname */
const path = require('path');

const base = {
  module: {
    rules: [
      {
        enforce: 'pre',
        exclude: /node_modules/,
        test: /\.jsx?/i,
        use: 'eslint-loader',
      },
      {
        exclude: /node_modules/,
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.jsx?/i,
        use: 'babel-loader',
      },
    ],
  },
};

const development = {
  entry: {
    index: './demo/src/index.js',
  },
  output: {
    path: path.join(__dirname, 'demo'),
    filename: '[name].js',
  },
  devServer: {
    compress: true,
    contentBase: path.join(__dirname, 'demo'),
    publicPath: '/',
  },
};

const production = {
  entry: {
    index: './src/index.js',
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js',
  },
  externals: {
    'react': 'react',
    'react-dom': 'react-dom',
  },
};

module.exports = (env) => {
  if (env === 'production') {
    return Object.assign({}, production, base);
  } else {
    return Object.assign({}, development, base);
  }
};
