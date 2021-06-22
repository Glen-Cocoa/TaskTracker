import React from 'react'

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 150, clear: 'both', paddingTop: 50, marginTop: 100, textAlign: 'center' }}
      className='jumbotron'
    >
      {children}
    </div>
  )
}

export default Jumbotron
