const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    record: './src/render/pages/record/index.jsx',
    'device-choices': './src/render/pages/device-choices/index.jsx',
  },
  output: {
    filename: '[name]/bundle.js',
    path: path.resolve(__dirname, '.webpack'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
};