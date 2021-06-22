import React, { useState, useEffect } from 'react'

import API from './utils/API'
import Content from './pages/Content'
import Nav from './components/Nav'
import { Form } from './components/Form'

import ContentContext from './contexts/ContentContext'

function App() {
  const [tasks, setTasks] = useState([])
  const [projects, setProjects] = useState([])
  const [customers, setCustomers] = useState([])
  const [taskLogs, setTaskLogs] = useState([])
  const [showDetail, setShowDetail] = useState(false)
  const [activeItem, setActiveItem] = useState({})
  const [formObject, setFormObject] = useState({})
  const [showEdit, setShowEdit] = useState(false)
  const [activeCategory, setActiveCategory] = useState('customers')

  const contentMap = { tasks, projects, customers, taskLogs }

  const handleFormSubmit = async (e, data) => {
    e.preventDefault()
    if(Object.keys(data).length){
      const payload = JSON.stringify(data)
      await API[activeCategory].create(payload)
      return hydratePage()
    }
  }

  const handleItemClick = (targetId) => {
    setShowDetail(true)
    setShowEdit(false)
    setActiveItem(contentMap[activeCategory].filter(item => item.id === parseInt(targetId))[0])
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
    API.task_logs.get()
    .then((res) => {
      setTaskLogs(res?.data || [])
    })
  }

  useEffect(hydratePage, [])

  return (
    <ContentContext.Provider value={
      {
        items: contentMap[activeCategory],
        type: activeCategory,
        contentMap: contentMap,
        showDetail: showDetail,
        setShowDetail: setShowDetail,
        showEdit: showEdit,
        setShowEdit: setShowEdit,
        activeItem: activeItem,
        activeCategory: activeCategory,
        handleFormSubmit: handleFormSubmit,
        handleDelete: handleDelete,
        handleItemClick: handleItemClick,
      }
    }>
      <Nav setActiveCategory={setActiveCategory} />
      <Content />
      <Form 
      formObject={formObject}
      setFormObject={setFormObject}/>
    </ContentContext.Provider>
  )
}

export default App
