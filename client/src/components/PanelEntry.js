import React from 'react'

let styles = {
  item: {
    margin: '5px',
    minWidth: '100px'
  },
  buttons: {
    margin: '5px'
  }
}

export default function PanelEntry (props) {
  const { id, name, description, type  } = props
  return (
    <div data-id={`${type}-${id}`} style={styles.item}>
      {name || description}
      <div>
        <button style={styles.buttons}>View</button>
        <button style={styles.buttons}>Edit</button>
        <button style={styles.buttons}>Delete</button>
      </div>
    </div>
  )
}