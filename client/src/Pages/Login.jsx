import React from 'react'
import styled from 'styled-components'


const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>LOGIN</Button>
          <Links>DO NOT REMEMBER THE PASSWORD?</Links>
          <Links>CREATE A NEW ACCOUNT</Links>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login

const Links = styled.p`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  max-height: 10px;
  margin: 10px 0px;
  padding: 10px;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
`
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`
const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
`
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255,255,255,0.3),rgba(255,255,255,0.5)), url('/images/background.png') center;

  display: flex;
  align-items: center;
  justify-content: center;
`