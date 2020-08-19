const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const config = {
  entry: './client/index.tsx',
  watchOptions: {
    ignored: /node_modules/
  },
  context: path.resolve(__dirname, 'src'),
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

// avoid ts overload
config.mode = 'development'

module.exports = config