import React from 'react'
import styled from 'styled-components'

import NavBar from '../components/NavBar'
import Announcement from '../components/Announcement'
import Products from '../components/ProductsList'
import Newsletter from '../components/Newsletter'

const ProductList = () => {
  return (
    <Container>
      <Announcement />
      <NavBar />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText> Filter Products: </FilterText>
          <Select>
            <Option disabled selected>Color</Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
          </Select>
          <Select>
            <Option disabled selected>Size</Option>
            <Option>PP</Option>
            <Option>P</Option>
            <Option>M</Option>
            <Option>G</Option>
            <Option>GG</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText> Sort Products: </FilterText>
          <Select>
            <Option disabled selected>Size</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products/>
      <Newsletter/>
    </Container>
  )
}

export default ProductList

const Option = styled.option``
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`
const Filter = styled.div`
  margin: 20px;
`
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
const Title = styled.h1``
const Container = styled.div``