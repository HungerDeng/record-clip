const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    record: './src/render/pages/record/index.jsx',
    // 可以添加更多入口点，例如：
    // anotherEntry: './src/render/anotherEntry/index.js',
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