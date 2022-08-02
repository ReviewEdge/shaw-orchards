import React from 'react'

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from 'react-router-dom';

import { Home } from './home';
import { PlanYourVisit } from './planYourVisit';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <PlanYourVisit />
      {/* <Home /> */}
    </div>
  )
}

export default App
