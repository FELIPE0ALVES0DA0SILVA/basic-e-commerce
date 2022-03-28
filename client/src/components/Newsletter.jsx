import { Send } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get timely updates from favorites products</Description>
      <InputContainer>
        <Input placeholder='Your email' />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  )
}

export default Newsletter

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
`
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgrey;
`
const Description = styled.p`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;

`
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`
const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
