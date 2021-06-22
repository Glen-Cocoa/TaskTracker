import React, { useState, useEffect } from 'react'

import API from './utils/API'
import Content from './pages/Content'
import Nav from './components/Nav'

function App() {
  const [tasks, setTasks] = useState([])
  const [projects, setProjects] = useState([])
  const [customers, setCustomers] = useState([])

  const [activeCategory, setActiveCategory] = useState('customers')

  const contentMap = { tasks, projects, customers }

  const handleFormSubmit = async (e, data) => {
    e.preventDefault()
    if(Object.keys(data).length){
      const payload = JSON.stringify(data)
      await API[activeCategory].create(payload)
      return hydratePage()
    }
  }

  const handleDelete = async (target) => {
    await API[activeCategory].delete(target)
    return hydratePage()
  }

  const hydratePage = () => {
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

  useEffect(hydratePage, [])

  return (
    <>
      <Nav setActiveCategory={setActiveCategory}/>
      <Content 
        items={contentMap[activeCategory]} 
        type={activeCategory} 
        handleFormSubmit={handleFormSubmit} 
        handleDelete={handleDelete}/>
    </>
  )
}

export default App
