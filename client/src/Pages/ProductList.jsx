import React from 'react'
import styled from 'styled-components'

import NavBar from '../components/NavBar'
import Annoucement from '../components/Annoucement'

const ProductList = () => {
  return (
    <Container>
      <Annoucement />
      <NavBar />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>Filter 1</Filter>
        <Filter>Filter 2</Filter>
      </FilterContainer>
    </Container>
  )
}

export default ProductList

const Filter = styled.div``
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
const Title = styled.h1``
const Container = styled.div``