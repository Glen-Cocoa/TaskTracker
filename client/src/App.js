import React, { useState, useEffect } from 'react'
import Home from './pages/Home'
import API from './utils/API'
import ProjectsContext from './contexts/ProjectsContext'
import CustomersContext from './contexts/CustomersContext'
import TasksContext from './contexts/TasksContext'

function App() {
  const [tasks, setTasks] = useState([])
  const [projects, setProjects] = useState([])
  const [customers, setCustomers] = useState([])

  const hydratePanels = () => {
    API.customers.get()
      .then((res) => {
        setCustomers(res?.data || [])
      })
    API.projects.get()
    .then((res) => {
      setProjects(res?.data || [])
    })
    API.tasks.get()
    .then((res) => {
      setTasks(res?.data || [])
    })
  }

  useEffect(hydratePanels, [])

  return (
    // <CustomersContext.Provider value={{customers, setCustomers}}>
    //   <ProjectsContext.Provider value={{projects, setProjects}}>
    //     <TasksContext.Provider value={{tasks, setTasks}} >
    //       <Home />
    //     </TasksContext.Provider>
    //   </ProjectsContext.Provider>
    // </CustomersContext.Provider>
    <></>
  )
}

export default App
