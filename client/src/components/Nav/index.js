import React from 'react'
import './style.css'

function Nav({ setActiveCategory }) {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
      <a className='navbar-brand' href='/'>
        React Task Tracker
      </a>
      <label>Select the Category you wish to view: </label>
        <select className='selectInput' id='category' name='category' defaultValue='customers' onChange={(e) => {setActiveCategory(e.target.value)}}>
          <option value='tasks' selected>Tasks</option>
          <option value='projects'>Projects</option>
          <option value='customers'>Customers</option>
        </select>
    </nav>
  )
}

export default Nav