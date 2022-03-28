import React from 'react'
import styled from 'styled-components'

import CategoryItem from './CategoryItem'
import { categoryItems as data } from '../data'

const Category = () => {
  return (
    <Container>
      {
        data.map(item => (
          <CategoryItem 
            key={item.id} 
            img={item.img}
            title={item.title}
          />
        ))
      }
    </Container>
  )
}

export default Category

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`