import React from 'react'
import { Title, Navbar2, News, Footer } from '../features';
import {ContactInfo} from './';

const Home = () => {
  return (
      <div className="home">
        <Title />
        <Navbar2 />
        <News />
        <ContactInfo />
        <Footer />
      </div>
  )
}

export default Home