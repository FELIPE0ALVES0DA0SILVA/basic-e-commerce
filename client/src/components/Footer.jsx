import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'


const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Chique.com</Logo>
        <Description>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo saepe repudiandae odit amet, cumque corrupti eius! Ver
        </Description>
        <SocialContainer>
          <SocialIcon color='3B5999' >
            <Facebook/>
          </SocialIcon>
          <SocialIcon color='E4405F' >
            <Instagram/>
          </SocialIcon>
          <SocialIcon color='55ACEE' >
            <Twitter/>
          </SocialIcon>
          <SocialIcon color='E60023' >
            <Pinterest/>
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem><Room style={{marginRight:'10px'}}/>622 Dixie Land, tobinchester 1789</ContactItem>
        <ContactItem><Phone style={{marginRight:'10px'}} />1+ 1234 45467 12</ContactItem>
        <ContactItem><MailOutline style={{marginRight:'10px'}} />support@dixieland.dev</ContactItem>
      </Right>
    </Container>
  )
}

export default Footer


const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`
const Right = styled.div`
  flex:1;
  padding: 20px;
`
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`
const Title = styled.h2`
  margin-bottom: 30px;
`
const Center = styled.div`
  flex:1;
  padding: 20px;
`
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${prop => prop.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
`
const SocialContainer = styled.div`
  display: flex;
`
const Description = styled.p`
  margin: 20px 0px;
`
const Logo = styled.h1``
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`
const Container = styled.div`
  display: flex;
`