import React from 'react'
import { Title, Navbar2, News, Footer } from '../features';
import {Landing, Story} from './';

const Home = () => {
  return (
      <div className="home">
        <Title />
        <Navbar2 />
        <News />
        <Landing />
        <Story />
        <Footer />
      </div>
  )
}

export default Home
