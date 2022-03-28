import React from 'react'
import styled from 'styled-components'

import { popularProducts as products } from "../data"
import Product from './Product'

const ProductList = () => {
  return (
    <Container>
      {products.map(item => (
        <Product 
          key={item.id} 
          img={item.img}
        />
      ))}
    </Container>
  )
}

export default ProductList

const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
`