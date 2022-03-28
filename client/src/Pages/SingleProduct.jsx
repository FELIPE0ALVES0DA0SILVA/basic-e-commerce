import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'


import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import Newsletter from '../components/Newsletter'

const SingleProduct = () => {
  return (
    <Container>
      <NavBar/>
      <Announcement/>
      <Wrapper>
        <ImgContainer>
          <Image src='/images/moletom feminino.png'/>
        </ImgContainer>
        <InfoContainer>
          <Title>Oculus Quest 2</Title>
          <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut fugit id rem delectus nostrum et dicta nobis expedita, animi esse recusandae quo temporibus, perspiciatis ad. Esse et error maxime illum.</Description>
          <Price>R$ 2.700,00</Price>
          <FilterContainer>
          <Filter>
            <FilterTitle>Color</FilterTitle>
            <FilterColor color='grey'/>
            <FilterColor color='blue'/>
            <FilterColor color='red'/>
          </Filter>
          <Filter>
            <FilterTitle>Size</FilterTitle>
            <FilterSize>
              <FilterSizeOption>PP</FilterSizeOption>
              <FilterSizeOption>P</FilterSizeOption>
              <FilterSizeOption>M</FilterSizeOption>
              <FilterSizeOption>G</FilterSizeOption>
              <FilterSizeOption>GG</FilterSizeOption>
            </FilterSize>
          </Filter>
        </FilterContainer>
        <AddContainer>
          <AmountContainer>
            <Remove/>
            <Amount>1</Amount>
            <Add/>
          </AmountContainer>
          <Button>ADD TO CART</Button>
        </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default SingleProduct

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  font-weight: 500;
  cursor: pointer;

  &hover{
    background-color: #f8f4f4;
  }
`
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 2px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`
const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const FilterSizeOption = styled.option``
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  margin: 0px 3px;
  border-radius: 50%;
  background-color: ${props => props.color};
  cursor: pointer;
`
const FilterTitle = styled.span`
  margin-right: 8px;
  font-size: 20px;
  font-weight: 200;
`
const Filter = styled.div`
  display: flex;
  align-items: center;
`
const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`
const Price = styled.p`
  font-weight: 100;
  font-size: 40px;
`
const Description = styled.p`
  margin: 20px 0px;
`
const Title = styled.h2`
  font-weight: 200;
`
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`
const Image = styled.img`
  width: 100%;
  height:90vh;
  object-fit: cover;
`
const ImgContainer = styled.div`
  flex: 1;
`
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`
const Container = styled.div``