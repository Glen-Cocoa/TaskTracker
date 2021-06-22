import express  from 'express'
import cors from 'cors'

import connection from './server/config/index.js'
import seed from './server/db/seed.js'
import initModels from './server/models/index.js'
import apiRoutes from './server/routes/api/index.js'


const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const models = initModels(connection)
const router = express.Router()

await seed(models, connection)
router.use('/', apiRoutes(models, router))

app.use(router)

connection.sync().then(() => {
  app.listen(PORT, () => console.log('Now listening'))
})
