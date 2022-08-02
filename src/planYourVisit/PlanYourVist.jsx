import React from 'react'
import { Title, Navbar2, News, Footer } from '../features';
import {VisitInfo} from './';

const Home = () => {
  return (
      <div className="home">
        <Title />
        <Navbar2 />
        <News />
        <VisitInfo />
        <Footer />
      </div>
  )
}

export default Home