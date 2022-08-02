import React from 'react'
import { Title, Navbar2, News, Footer } from '../features';
import {VisitInfo} from './';

const PlanYourVisit = () => {
  return (
      <div>
        <Title />
        <Navbar2 />
        <News />
        <VisitInfo />
        <Footer />
      </div>
  )
}

export default PlanYourVisit