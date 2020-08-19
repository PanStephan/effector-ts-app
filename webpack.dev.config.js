const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './client/index.tsx',
  output: {
    filename: `main.[hash].js`, 
    path: path.resolve(__dirname, './dist'),
  },
  watchOptions: {
    ignored: /node_modules/
  },
  mode: 'development',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.css$/, 
        use: [
          MiniCssExtractPlugin.loader, 'css-loader'
        ]
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `styles.css`,
    }),
    new HtmlWebpackPlugin({
      template: 'client/views/index.html',
      filename: 'index.html',
    }),
  ]
}
