import React from 'react'
import { Title, Navbar2, News, Footer } from '../features';
import {Fruits} from './';

const OurFruit = () => {
  return (
      <div>
        <Title />
        <Navbar2 />
        <News />

        <Fruits />
        
        <Footer />
      </div>
  )
}

export default OurFruit