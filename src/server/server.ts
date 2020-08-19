import * as express from 'express'
import * as webpackMiddleware from 'webpack-dev-middleware'
import * as webpack from 'webpack'

import * as config from '../../webpack.dev.config'

const compiler = webpack(config)
const app = express()

app.use(webpackMiddleware(compiler))

export default app