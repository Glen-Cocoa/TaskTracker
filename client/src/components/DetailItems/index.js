import React from 'react'
import Jumbotron  from '../Jumbotron'
import { List, ListItem } from '../List'
import { SublistItem } from '../SublistItem'

export default function DetailItems ({ dataKeys, currentData, showDetail}) {

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

  return (
    <>
    {showDetail && detailPanel()}
    </>
  )
}