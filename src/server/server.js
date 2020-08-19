const express = require('express')
const webpackMiddleware = require('webpack-dev-middleware')
const webpack = require('webpack')

const webpackConfig = require('../../webpack.dev.config.js')

const app = express()

app.use(webpackMiddleware(webpack(webpackConfig)))

module.exports = app