import customerSeeds from './seeds/customerSeeds.js'
import projectSeeds from './seeds/projectSeeds.js'
import tasklogSeeds from './seeds/tasklogSeeds.js'
import taskSeeds from './seeds/taskSeeds.js'
import userSeeds from './seeds/userSeeds.js'

export default async (models, connection) => {
  try {
    const { Customers, Projects, Task_logs, Tasks, Users } = models

    await connection.sync({force: true})

    await Users.bulkCreate(userSeeds)
    await Customers.bulkCreate(customerSeeds)
    await Projects.bulkCreate(projectSeeds)
    await Tasks.bulkCreate(taskSeeds)
    await Task_logs.bulkCreate(tasklogSeeds)

  } catch (e) {
    console.error(e)
    console.error('Application failed to seed database')
  }
}