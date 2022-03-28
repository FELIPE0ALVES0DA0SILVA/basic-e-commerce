import React from 'react'
import styled from 'styled-components'

const Announcement = () => {
  return (
    <Container>
      Super Deal! Free Shipping on Orders over 50 Dollars
    </Container>
  )
}

export default Announcement

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`