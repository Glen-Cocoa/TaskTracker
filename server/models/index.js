import DataTypes  from 'sequelize'
import _customers from'./customers.js'
import _projects from'./projects.js'
import _task_logs from'./task_logs.js'
import _tasks from'./tasks.js'
import _users from'./users.js'

export default function initModels(sequelize) {
  const Customers = _customers(sequelize, DataTypes)
  const Projects = _projects(sequelize, DataTypes)
  const Task_logs = _task_logs(sequelize, DataTypes)
  const Tasks = _tasks(sequelize, DataTypes)
  const Users = _users(sequelize, DataTypes)

  const options = {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  }

  Projects.belongsTo(Customers, { as: 'customer', foreignKey: 'customer_id', ...options})
  Customers.hasMany(Projects, { as: 'projects', foreignKey: 'customer_id', ...options})
  Tasks.belongsTo(Projects, { as: 'project', foreignKey: 'project_id', ...options})
  Projects.hasMany(Tasks, { as: 'tasks', foreignKey: 'project_id', ...options})
  Task_logs.belongsTo(Tasks, { as: 'task', foreignKey: 'task_id', ...options})
  Tasks.hasMany(Task_logs, { as: 'task_logs', foreignKey: 'task_id', ...options})
  Task_logs.belongsTo(Users, { as: 'user', foreignKey: 'user_id', ...options})
  Users.hasMany(Task_logs, { as: 'task_logs', foreignKey: 'user_id', ...options})

  return {
    Customers,
    Projects,
    Task_logs,
    Tasks,
    Users,
  }
}