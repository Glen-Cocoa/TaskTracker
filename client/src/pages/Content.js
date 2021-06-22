import React, { useState, useEffect } from 'react'
import DeleteBtn from '../components/DeleteBtn'
import Jumbotron from '../components/Jumbotron'
import { Col, Row, Container } from '../components/Grid'
import { List, ListItem } from '../components/List'
import { Input, FormBtn } from '../components/Form'

function Content({ items, type, handleFormSubmit, handleDelete }) {
  const [formObject, setFormObject] = useState({})

  const getFormFields = (item) => {
    return item ?
      Object.keys(item).filter(key => key !== 'id').map(key => {
        return (
          <Input name={key} placeholder={key} key={key} onChange={handleInputChange}/>
        )
      }) : <>Error Unkown Fields</>
  }
 
  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormObject({...formObject, [name]: value})
  }

    return (
      <Container fluid>
        <Row>
        <Col size='md-6 sm-12'>
            <Jumbotron>
              <h1>{type}</h1>
            </Jumbotron>
            {items && Array.isArray(items) && items.length ? (
              <List>
                {items.map(item => (
                <ListItem key={item.id}>
                    <strong>
                      {item.name || item.description}
                    </strong>
                  <DeleteBtn 
                    data-id={item.id} 
                    onClick={(e) => { 
                      handleDelete(e.target.getAttribute('data-id'))
                    }} />
                </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
          <Col size='md-6'>
            <Jumbotron>
              <h1>Add new {type}</h1>
            </Jumbotron>
            <form>
              { items && getFormFields(items[0])}
              <FormBtn
                onClick={(e) => { handleFormSubmit(e, formObject) }}
              >
                Submit
              </FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
    )
  }


export default Content
