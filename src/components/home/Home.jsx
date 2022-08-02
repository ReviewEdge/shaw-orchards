import React from 'react'
import {Footer, Header, Landing} from '../../containers';
import { Navbar2, Story, News } from '../';

const Home = () => {
  return (
      <div className="home">
        <Header />
        <Navbar2 />
        <News />
        <Landing />
        <Story />
        <Footer />
      </div>
  )
}

export default Home
