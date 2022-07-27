import React from 'react'

import {Footer, Header, Landing} from './containers';
import { Navbar2, Story } from './components';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Navbar2 />
      <Landing />
      <Story />
      <Footer />
    </div>
  )
}

export default App
