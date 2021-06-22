import React, { useContext } from 'react'
import PanelEntry from './PanelEntry'
import ProjectsContext from '../contexts/ProjectsContext'
import CustomersContext from '../contexts/CustomersContext'
import TasksContext from '../contexts/TasksContext'

const styles = {
  panel: {
    minWidth: '100px',
    listStyleType: 'none',
    margin: '15px'
  }
}

export default function Panel({ type }) {
  const { customers } = useContext(CustomersContext)
  const { projects } = useContext(ProjectsContext)
  const { tasks } = useContext(TasksContext)

  const getItems = ( type ) => {
    switch (type) {
      case 'Customers':
        return customers;
      case 'Projects':
        return projects;
      case 'Tasks':
        return tasks;
      default:
        return [];
    }
  }

  const createNewItem = () => {}

  const activeItems = getItems(type)

  return (
    <ul style={styles.panel} className='container'>
      <h3>{ type }</h3><button onClick={()=>{createNewItem(type)}}>Add {type}</button>
      {activeItems && activeItems.length ? (
        activeItems.map((item) => 
        <li key={ item.id }>
          { PanelEntry({ ...item, type })}
        </li>)
      ) : (
        <div>No {type} In this Panel</div>
      )}
    </ul>
  )
}