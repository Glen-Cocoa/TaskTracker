import React from 'react'

export default function PanelEntry ({ item }) {
  return  (
    <p>
      {item.name}
      {item.description}
    </p>  
  )
}