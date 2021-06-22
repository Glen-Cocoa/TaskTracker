import React from 'react'

export function SublistItem({ data }) {
  const values = Object.entries(data)
  return values.map(k => {
    return ( 
      <div key={`${k[0]}-${k[1]}`}>{`${k[0]}: ${k[1]}`}</div>
    )
  })
}
