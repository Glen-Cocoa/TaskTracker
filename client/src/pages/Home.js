import React, { Fragment, useState, useEffect } from 'react'
import Panel from '../components/Panel'
import API from '../utils/API'

export default function Home() {
  const [customerList, setCustomerList] = useState()
  const [projectList, setProjectList] = useState()
  const [taskList, setTaskList] = useState()


  useEffect(() => {
    API.customers.get()
      .then((result) => setCustomerList(result.data || []))
      .catch((err) => console.error(err))
    API.projects.get()
      .then((result) => setProjectList(result.data || []))
      .catch((err) => console.error(err))
    API.tasks.get()
      .then((result) => setTaskList(result.data || []))
      .catch((err) => console.error(err))
  }, [])


  return (
  <>
    <Panel items={customerList}/>
    <Panel items={projectList}/>
    <Panel items={taskList}/>
  </>
  )
}