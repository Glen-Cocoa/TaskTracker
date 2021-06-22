import React, { useContext } from 'react'
import Jumbotron  from '../Jumbotron'
import { Col } from '../Grid'
import ContentContext from '../../contexts/ContentContext'
import DetailItems from '../DetailItems'

export function Detail () {

  const { activeItem, activeCategory, contentMap, showEdit, showDetail } = useContext(ContentContext)

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

  const currentData = getterMap[activeCategory](activeItem, contentMap)
  const dataKeys = Object.keys(currentData)

  return (
    <Col size='md-6'>
      <Jumbotron>
        <h1>{activeItem.name || activeItem.description}</h1>
      </Jumbotron>
      <DetailItems 
        dataKeys={dataKeys}
        currentData={currentData}
        showDetail={showDetail}
        showEdit={showEdit}/>
    </Col>
  )
}

