import React, { useContext } from 'react'
import ContentContext from '../../contexts/ContentContext'
import Jumbotron from '../Jumbotron'
import './styles.css'

export function Input(props) {
  return (
    <div className='form-group'>
      <input className='form-control' {...props} />
    </div>
  )
}

export function FormBtn(props) {
  return (
    <button {...props} className='btn btn-success'>
      {props.children}
    </button>
  )
}

export function Form({ setFormObject, formObject }) {
  const { items, type, handleFormSubmit } = useContext(ContentContext)
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormObject({...formObject, [name]: value})
  }
  
  const getFormFields = (item) => {
    return item ?
      Object.keys(item).filter(key => key !== 'id').map(key => {
        return (
          <Input name={key} placeholder={key} key={key} onChange={handleInputChange}/>
        )
      }) : <>Error Unkown Fields</>
  }

  return (
    <>
    <Jumbotron
      height={100}
      paddingTop={20}
      marginTop={40}>
      <h1>Add new {type}</h1>
    </Jumbotron>
    <form className='form'>
      { items && getFormFields(items[0])}
        <FormBtn
          onClick={(e) => { handleFormSubmit(e, formObject) }}
        >
          Submit
        </FormBtn>
      </form></>
  )
}