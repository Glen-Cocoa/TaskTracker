import React, { useContext } from 'react'
import Jumbotron from '../components/Jumbotron'
import { Col, Row, Container } from '../components/Grid'
import { Detail } from '../components/Detail'
import Items from '../components/Items'
import ContentContext from '../contexts/ContentContext'

function Content() {
  const { type } = useContext(ContentContext)
  
    return (
      <Container fluid>
        <Row>
          <Col size='md-6 sm-12'>
            <Jumbotron>
              <h1>{type}</h1>
            </Jumbotron>
            <Items/>
          </Col>
          <Detail />
        </Row>
      </Container>
    )
  }


export default Content
