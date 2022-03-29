import React from 'react'
import styled from 'styled-components'


import NavBar from '../components/NavBar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import { Add, Remove } from '@material-ui/icons'


const Cart = () => {
  return (
    <Container>
      <NavBar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag (2)</TopText> 
            <TopText>Your Watchlist (0)</TopText> 
          </TopTexts>
          <TopButton type='filled'>CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src='/images/moletom feminino.png'/>
                <Details>
                  <ProductName><b>Product:</b> MOLETOM FEMININO</ProductName>
                  <ProductId><b>ID:</b> 97896468</ProductId>
                  <ProductColor color='black' />
                  <ProductSize><b>Size: </b> M</ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <PriceDetailAmountContainer>
                  <Add/>
                  <ProductAmount>2</ProductAmount>
                  <Remove/>
                </PriceDetailAmountContainer>
                <ProductPrice>R$ 30</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal: </SummaryItemText>
              <SummaryItemPrice>R$ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem  type='total'>
              <SummaryItemText>Total: </SummaryItemText>
              <SummaryItemPrice>R$ 80</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  )
}

export default Cart


const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
`
const SummaryItemPrice = styled.span``
const SummaryItemText = styled.span``
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${props => props.type === 'total' && '500'};
  font-size: ${props => props.type === 'total' && '24px'};
`
const SummaryTitle = styled.h2`
  font-weight: 300;
`
const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius:10px;
  padding: 20px;
  height: 50vh;
`
const ProductPrice = styled.div`
  font-size:30px;
  font-weight:200;
`
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`
const PriceDetailAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content:center;
`
const ProductSize = styled.p``
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.color};
`
const ProductId = styled.p``
const ProductName = styled.p``
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`
const Image = styled.img`
  width: 200px;
`
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`
const Product = styled.div`
  display: flex;
`
const Info = styled.div`
  flex: 3;
`
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`
const TopTexts = styled.div``
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${props => props.type === 'filled' && 'none'};
  background-color: ${props => props.type === 'filled' ? 'black' : 'transparent'};
  color: ${props => props.type === 'filled' && 'white'};
`
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`
const Title = styled.h1`
  font-weight:300;
  text-align: center;
`
const Wrapper = styled.div`
  padding: 20px;
`
const Container = styled.div``