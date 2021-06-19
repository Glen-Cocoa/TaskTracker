import express from 'express'
import makeGetQuery from '../utils/makeGetQuery.js'

export default function (Users) {
  const router = express.Router()

  router.get('/:type?/:id?', async (req, res) => {
    try {
      const { type, id } = req.params
      const result = await makeGetQuery(id, type, Users)
      res.status(200).json(result)
    } catch (e) {
      console.error(e)
      res.status(500).json(e)
    }
  })

  return router
}