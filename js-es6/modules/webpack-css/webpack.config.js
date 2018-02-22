const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const paths = {
  DEST: path.resolve(__dirname, 'dest'),
  SOURCE: path.resolve(__dirname, 'source'),
};

module.exports = {
  entry: path.join(paths.SOURCE,'code.js'),
  output: {
    filename: 'code.js',
    path: paths.DEST
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({use: 'css-loader'}),
      }
    ],
  },
  devServer: {
    contentBase: paths.DEST
  },
  plugins: [
   new HtmlWebpackPlugin({
     template: path.join(paths.SOURCE, 'index.html'),
   }),
   new ExtractTextPlugin('style.bundle.css'),
 ],
};
