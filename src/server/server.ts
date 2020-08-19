import * as express from 'express'
import * as webpackMiddleware from 'webpack-dev-middleware'
import * as webpack from 'webpack'

import * as config from '../../webpack.dev.config'

const PORT = process.env.PORT || 4000

const compiler = webpack(config)
const app = express()

app.use(webpackMiddleware(compiler))

app.listen(PORT, () => {
  console.log(`Listening on port: http://localhost:${PORT}`)
})