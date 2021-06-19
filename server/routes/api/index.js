import userRoutes from './userRoutes.js'
import customerRoutes from './customerRoutes.js'
import projectRoutes from './projectRoutes.js'
import taskRoutes from './taskRoutes.js'
import tasklogRoutes from './tasklogRoutes.js'
import { ENDPOINTS } from '../utils/constants.js'

export default (models, router) => {

  router.use(ENDPOINTS.USERS, userRoutes(models.Users))
  router.use(ENDPOINTS.CUSTOMERS, customerRoutes(models.Customers))
  router.use(ENDPOINTS.PROJECTS, projectRoutes(models.Projects))
  router.use(ENDPOINTS.TASKS, taskRoutes(models.Tasks))
  router.use(ENDPOINTS.TASKLOGS, tasklogRoutes(models.Task_logs))

  return router
}
