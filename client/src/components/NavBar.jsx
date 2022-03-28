import React from 'react'
import styled from 'styled-components'

import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import { Badge } from '@material-ui/core'

const NavBar = () => {
  return (
    <Container>
      <Wrap>
        <Left>
          <Language>
            EN
          </Language>
          <SearchContainer>
            <Input/>
            <SearchIcon />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>
            Chique.com
          </Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color='primary'>
              <ShoppingCartOutlined/>
            </Badge>
          </MenuItem>
        </Right>

      </Wrap>
    </Container>
  )
}

export default NavBar

const Container = styled.div`
  height: 60px;
  box-shadow: 0px 4px 8px rgba(0,0,0,0.2);
`
const Wrap = styled.div`
  padding: 0px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`
const Left = styled.div`
  color: black;
  display: flex;
  flex: 1;
`
const Center = styled(Left)`
 display: flex;
 align-items: center;
 justify-content: center;
`
const Right = styled(Left)`
  justify-content: flex-end;  
  margin-right: 30px;
`
const MenuItem = styled.div `
  font-size: 14px;
  cursor: pointer;
  margin: 0px 10px;
`

const Language = styled.p``

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
  border: 0.5px solid lightgrey;
  border-radius: 3px;
`
const Input = styled.input`
  border: none;
  background: transparent;
`
const SearchIcon = styled(Search)`
  margin-left: 4px;
  color: grey;
  font-size: 16px;
`
const Logo = styled.h1`
  font-weight: bold;
`
