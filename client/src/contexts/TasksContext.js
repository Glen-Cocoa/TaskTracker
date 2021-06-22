import { createContext } from 'react'

const TasksContext = createContext({
  tasks: [],
  setTasks: () => null
})

export default TasksContext
