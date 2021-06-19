import express from 'express'
import makeGetQuery from '../utils/makeGetQuery.js'
import makeCreateQuery from '../utils/makeCreateQuery.js'
import makeUpdateQuery from '../utils/makeUpdateQuery.js'

export default function (Task_logs) {
  const router = express.Router()
  router.get('/:type?/:id?', async (req, res) => {
    try {
      const { type, id } = req.params
      const result = await makeGetQuery(id, type, Task_logs)
      res.status(200).json(result)
    } catch (e) {
      console.error(e)
      res.status(500).json(e)
    }
  })

  router.post('/', async (req, res) => {
    try {
      const result = await makeCreateQuery(req.body, Task_logs)
      res.status(200).json(result)
    } catch (e) {
      console.error(e)
      res.status(500).json(e)
    }
  })

  router.put('/:id', async (req, res) => {
    try {
      const changeSet = {
        duration_minutes: req.body.duration_minutes
      }
      const result = await makeUpdateQuery(req.params.id, changeSet, Task_logs)
      res.status(200).json(result)
    } catch (e) {
      console.error(e)
      res.status(500).json(e)
    }
  })
  

  return router
}