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
  const [showEdit, setShowEdit] = useState(false)
  const [activeItem, setActiveItem] = useState({})
  const [formObject, setFormObject] = useState({})
  const [activeCategory, setActiveCategory] = useState('customers')

  const contentMap = { tasks, projects, customers, taskLogs }

  const getCustomerData = (customer, contentMap) => {
    const projects = contentMap.projects?.filter((project) => project.customer_id === customer.id)
    const projectKeys = projects?.map(p => p.id)
    const tasks = contentMap.tasks?.filter((task) => projectKeys.includes(task.project_id))

    return { projects, tasks }
  }

  const getProjectData = (project, contentMap) => {
    const customer = contentMap?.customers.filter((customer) => customer.id === project.customer_id)
    const tasks = contentMap?.tasks.filter((task) => task.project_id === project.id)

    return { customer, tasks }
  }

  const getTaskData = (task, contentMap) => {
    const project = contentMap?.projects.filter((p) => task.project_id === p.id)
    const logs = contentMap?.taskLogs.filter((l) => l.task_id === task.id)

    return { project, logs }
  }

  const getterMap = {
    projects: getProjectData,
    customers: getCustomerData,
    tasks: getTaskData
  }

  const currentData = () => {
    try {
      getterMap[activeCategory](activeItem, contentMap)
    } catch (e) {
      console.error(e)
    }
  }
  currentData()
  const dataKeys = Object.keys(currentData)

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

  const handleEditClick = () => {
    setShowDetail(false)
    setShowEdit(true)
  }

  const handleEditSave = async (e, inputs, type) => {
    let data
    e.preventDefault()
    if(type==='customers'){
      data = {
        name: inputs[0]
      }
    }
    if(type==='projects'){
      data = {
        name: inputs[0],
        customer_id: inputs[1]
      }
    }
    if(type==='tasks'){
      data = {
        description: inputs[0],
        project_id: inputs[1],
      }
    }
    await API[type].update(activeItem.id, data)
    handleCategoryChange(activeCategory)
    return hydratePage()
  }

  const handleDelete = async (target) => {
    await API[activeCategory].delete(target)
    return hydratePage()
  }

  const handleCategoryChange = (category) => {
    setActiveCategory(category)
    setActiveItem({})
    setShowEdit(false)
    setShowDetail(false)
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
        activeItem: activeItem,
        activeCategory: activeCategory,
        showEdit: showEdit,
        setShowEdit: setShowEdit,
        handleFormSubmit: handleFormSubmit,
        handleDelete: handleDelete,
        handleItemClick: handleItemClick,
        handleEditSave: handleEditSave,
        currentData: currentData,
        dataKeys: dataKeys
      }
    }>
      <Nav setActiveCategory={handleCategoryChange} handleEditClick={handleEditClick} />
      <Content />
      <Form 
      formObject={formObject}
      setFormObject={setFormObject}/>
    </ContentContext.Provider>
  )
}

export default App
