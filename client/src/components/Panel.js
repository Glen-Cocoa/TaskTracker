import React from 'react'
import PanelEntry from './PanelEntry'

export default function Panel({ items }) {
  return (
  <>
  {items && items?.length ?
    items.map((item) => 
    {
    return <PanelEntry key={item.id} item={item}/>
    }
  ) : 
  <div>
    No items in panel  
  </div>}
  </>
  )
}