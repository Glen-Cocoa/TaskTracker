import React from 'react'

function Jumbotron({ children, height, marginTop, paddingTop }) {

  return (
    <div
      style={{ height: height || 100, clear: 'both', paddingTop: paddingTop || 20, marginTop: marginTop || 50, textAlign: 'center' }}
      className='jumbotron'
    >
      {children}
    </div>
  )
}

export default Jumbotron
