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
import { OurFruit } from './ourFruit';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <OurFruit />
      {/* <ContactUs /> */}
      {/* <PlanYourVisit /> */}
      {/* <Home /> */}
    </div>
  )
}

export default App
