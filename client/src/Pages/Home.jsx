import React from 'react'

import Announcement from '../components/Announcement'
import Slider from '../components/Slider'


import NavBar from '../components/NavBar'
import Category from '../components/Category'
import ProductsList from '../components/ProductsList'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Announcement />
      <NavBar />
      <Slider />
      <Category />
      <ProductsList/>
      <Newsletter />
      <Footer/>
    </div>
  )
}

export default Home
