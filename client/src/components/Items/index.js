import React, { useContext } from 'react'
import { List, ListItem } from '../List'
import DeleteBtn from '../DeleteBtn'
import ContentContext from '../../contexts/ContentContext'

export default function Items () {
    const {items, handleDelete, handleItemClick} = useContext(ContentContext)
    return (
      items && Array.isArray(items) && items.length ? (
        <List>
          {items.map(item => (
          <ListItem  
            key={item.id}>
              <strong data-id={item.id} onClick={(e)=> {
              handleItemClick(e.target.getAttribute('data-id'))
              }}>
                {item.name || item.description}
              </strong>
            <DeleteBtn 
              data-id={item.id} 
              onClick={(e) => { 
                handleDelete(e.target.getAttribute('data-id'))
              }} />
          </ListItem>
          ))}
        </List>
      ) : (
        <h3>No Results to Display</h3>
      )
    )
  }