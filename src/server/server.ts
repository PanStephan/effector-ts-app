import * as express from 'express'
import * as webpackMiddleware from 'webpack-dev-middleware'
import * as webpack from 'webpack'

import * as config from '../../webpack.dev.config'
import { createRandomName } from './createRandomName'

const PORT = process.env.PORT || 4000
const router = express.Router()

const compiler = webpack(config)
const app = express()

app.use('/api', router)
app.use(webpackMiddleware(compiler)) 

type Gender = "MALE" | "FEMALE";

interface Misc {
  born: Date
  gender: Gender
}

interface User {
  name: string
  surname: string
  misc: Misc
}

router.get('/user', (req, res) => {
  const user: User = {
    name: createRandomName(), 
    surname: "b",
    misc: {
      born: new Date(),
      gender: "MALE"
    }
 }
  res.json(user)
});


app.listen(PORT, () => {
  console.log(`Listening on port: http://localhost:${PORT}`)
})