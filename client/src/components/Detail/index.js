import React, { useContext } from 'react'
import Jumbotron  from '../Jumbotron'
import { Col } from '../Grid'
import ContentContext from '../../contexts/ContentContext'
import DetailItems from '../DetailItems'

export function Detail () {

  const { activeItem } = useContext(ContentContext)

  return (
    <Col size='md-6'>
      <Jumbotron>
        <h1>{activeItem.name || activeItem.description}</h1>
      </Jumbotron>
      <DetailItems/>
    </Col>
  )
}

