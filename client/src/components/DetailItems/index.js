import React, { useContext } from 'react'
import Jumbotron  from '../Jumbotron'
import { List, ListItem } from '../List'
import { SublistItem } from '../SublistItem'
import ContentContext from '../../contexts/ContentContext'

export default function DetailItems () {

  const { dataKeys, currentData, showDetail, showEdit, activeItem, activeCategory, handleEditSave } = useContext(ContentContext)

  const detailPanel = () => {
    return (
      dataKeys && Array.isArray(dataKeys) && dataKeys.map(k => {
        return (
          <>
          <Jumbotron
            key={k} 
            height={50}
            marginTop={10}
            paddingTop={10}>
              {k}
          </Jumbotron>
          <List>
          {
            currentData[k].map(d => {
              return (
                <ListItem
                  key={d.id}>
                    <strong data-id={d.id}>
                      <SublistItem data={d}/>
                    </strong>
                </ListItem>
              )
            })}
          </List>
          </>
        )
      })
    )
  }

  const editCustomer = (data, item) => {
    return (
        <div>Name: <input className='editForm' defaultValue={item.name}></input></div>
    )
  }
  const editProject = (data, item) => {
    return (
      <>
        <div>Name: <input className='editForm' defaultValue={item.name} ></input></div>
        <div>Customer ID: <input className='editForm' defaultValue={item.customer_id}></input></div>
      </>
    )
  }
  const editTask = (data, item) => {
    return (
      <>
        <div>Description: <input className='editForm' defaultValue={item.description}></input></div>
        <div>Project ID: <input className='editForm' defaultValue={item.project_id}></input></div>
        {/* <div>Logs: 
          {data.logs.map(l => {
            return (
              <><div>Log {l.id}: <br></br> Duration: <input className='editForm' defaultValue={l.duration_minutes}></input></div><br></br></>
            )
          })}
        </div> */}
      </>
    )
  }

  const getFormVals = () => {
    const inputs = document.querySelectorAll('.editForm')
    let vals = []
      for(let i=0; i<inputs.length; i++) {
        vals.push(inputs[i].value)
      }
    return vals
  }

  const panelMap = { 
    customers: editCustomer,
    projects: editProject,
    tasks: editTask
  }

  const editPanel = () => {
    return (
      <>
      <form className='edit-fields'>
        {panelMap[activeCategory](currentData, activeItem)}
      <button onClick={(e) => { handleEditSave(e, getFormVals(), activeCategory) }}> Save </button>
      </form>
      </>
    )
  }


  return (
    <>
    {showDetail && detailPanel()}
    {showEdit && editPanel()}
    </>
  )
}