import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import { useState } from 'react'
import styled from 'styled-components'

import { sliderItems } from '../data'

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0)

  const handleClick = (direction) => {
      if(direction === 'left') {
        setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        
      } else {
        setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
      }
  }

  return (
    <Container>
      {console.log('hello')}
      <Arrow direction='left' onClick={() => handleClick('left')} >
        <ArrowLeftOutlined />
      </Arrow>
      
      <Wrap 
        slideIndex={slideIndex}     
      >
        {sliderItems.map(item => (
          <Slide bg={item.bg} key={item.id}>
          <ImgContainer>
            <Img src={`/images/${item.img}`}/>  
          </ImgContainer>
          <InfoContainer>
            <Title>{item.title}</Title>
            <Description>{item.description}</Description>
            <Button>Buy Now</Button>
          </InfoContainer>
          </Slide>
        ))}
      </Wrap>
      <Arrow direction='right' onClick={() => handleClick('right')} >
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  )
}

export default Slider

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
  position: relative;
  overflow: hidden;
`
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top:0;
  bottom:0;
  margin:auto;
  left: ${props => props.direction === 'left' && '10px'};
  right: ${props => props.direction === 'right' && '10px'};
  opacity:0.5;
  z-index: 2;
`
const Wrap = styled.div`
  height: 100%;
  display:flex;
  transition: all 2s ease;
  transform: translateX(${prop => (prop.slideIndex * -100)}vw);
`
const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100%;
  background-color: #${props => props.bg};
`
const ImgContainer = styled.div`
  height:100%;
  width:100%;
  flex:1;

`
const Img = styled.img`
  width:100%;
  height:100%;
`
const InfoContainer = styled.div`
  flex:1;
`
const Title = styled.h1`
  font-size:70px;
  font-weight: 600;
`
const Description = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: crosshair;
`