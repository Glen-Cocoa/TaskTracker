import React, { useContext, useState } from 'react'
import Panel from '../components/Panel'

function Home() {

  const [activeCategory, setActiveCategory] = useState('Customers')

  const styles = {
    container: {
      paddingTop: '3%'
    },
    select: {
      float:'right'
    },
    input: {
      margin: '15px',
      float: 'right'
    }
  }

  return (
    <div style={styles.container} className='container'>
      <div style={styles.input}>
        <label>Select the Category you wish to view: </label>
          <select id='category' name='category' defaultValue='Customers' onChange={(e) => {setActiveCategory(e.target.value)}}>
            <option value="Tasks" selected>Tasks</option>
            <option value="Projects">Projects</option>
            <option value="Customers">Customers</option>
          </select>
      </div>
        <Panel type={activeCategory}/>
    </div>
  )
}

export default Home