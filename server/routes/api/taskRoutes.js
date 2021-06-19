import express from 'express'
import makeGetQuery from '../utils/makeGetQuery.js'
import makeCreateQuery from '../utils/makeCreateQuery.js'
import makeUpdateQuery from '../utils/makeUpdateQuery.js'
import makeDeleteQuery from '../utils/makeDeleteQuery.js'

export default function (Tasks) {
  const router = express.Router()

  router.get('/:type?/:id?', async (req, res) => {
    try {
      const { type, id } = req.params
      const result = await makeGetQuery(id, type, Tasks)
      res.status(200).json(result)
    } catch (e) {
      console.error(e)
      res.status(500).json(e)
    }
  })

  router.post('/', async (req, res) => {
    try {
      const result = await makeCreateQuery(req.body, Tasks)
      res.status(200).json(result)
    } catch (e) {
      console.error(e)
      res.status(500).json(e)
    }
  })

  router.put('/:id', async (req, res) => {
    try {
      const changeSet = {
        description: req.body.description
      }
      const result = await makeUpdateQuery(req.params.id, changeSet, Tasks)
      res.status(200).json(result)
    } catch (e) {
      console.error(e)
      res.status(500).json(e)
    }
  })

  router.delete('/:id', async (req, res) => {
    try{
      const result = await makeDeleteQuery(req.params.id, Tasks)
      res.status(200).json(result)
    } catch (e) {
      console.error(e)
      res.status(500).json(e)
    }
  })

  return router
}