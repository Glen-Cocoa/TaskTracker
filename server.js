import express  from 'express'

import connection from './server/config/index.js'
import seed from './server/db/seed.js'
import initModels from './server/models/index.js'
import apiRoutes from './server/routes/api/index.js'
import addMiddleware from './server/middleware/index.js'


const app = express()
const PORT = process.env.PORT || 3001

const models = initModels(connection)
const router = express.Router()

addMiddleware(app, express, models.Users)

await seed(models, connection)
router.use('/', apiRoutes(models, router))

app.use(router)

connection.sync().then(() => {
  app.listen(PORT, () => console.log('Now listening'))
})
