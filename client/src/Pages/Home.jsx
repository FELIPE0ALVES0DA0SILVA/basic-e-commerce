import React from 'react'

import Announcement from '../components/Announcement'
import Slider from '../components/Slider'


import NavBar from '../components/NavBar'
import Category from '../components/Category'
import { styled } from '@material-ui/styles'

const Home = () => {
  return (
    <div>
      <Announcement />
      <NavBar />
      <Slider />
      <Category />
    </div>
  )
}

export default Home
