import React from 'react'

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from 'react-router-dom';

import { Home } from './home';
import { PlanYourVisit } from './planYourVisit';
import { ContactUs } from './contactUs';
import { OurFruit, Strawberries } from './ourFruit';
import { History } from './history';
import { Blog } from './blog';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Blog />
      {/* <History /> */}
      {/* <Strawberries /> */}
      {/* <OurFruit /> */}
      {/* <ContactUs /> */}
      {/* <PlanYourVisit /> */}
      {/* <Home /> */}
    </div>
  )
}

export default App
