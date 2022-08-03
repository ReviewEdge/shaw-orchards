import React from 'react'
import { Title, Navbar2, News, Footer } from '../../features'
import FruitTop from './FruitTop'
import './singleFruit.css'

function Strawberries() {
  return (
    <div className='single-fruit'>
      <Title />
      <Navbar2 />
      <News />


      <FruitTop />


      <Footer />
    </div>
  )
}

export default Strawberries
