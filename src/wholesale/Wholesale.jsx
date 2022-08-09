import React from 'react'
import './wholesale.css'
import { Title, Navbar2, News, Footer } from '../features'

import wholesale_1 from '../assets/wholesale3.jpg';
import wholesale_2 from '../assets/wholesale 2.jpg';

function Wholesale() {
  return (
    <div>
      <Title />
      <Navbar2 />
      <News />
      <div className='wholesale'>
        <h1>Wholesale</h1>

        <div className='wholesale-info-container'>
          
          <div className='wholesale-info-text-box'>
            <p>
              Shaw Orchards has been in the wholesale fruit business for over 100 years. Our first decades were spent packing and shipping peaches via rail to Baltimore. These days, we have our own trucks that make daily deliveries to surrounding markets. Our biggest shippers are peaches (including yellow, white, and donut peaches), apples, and pumpkins -- though some years we also have extra strawberries and other fruits.
            </p>
          </div>

          <div className='wholesale-info-pictures-box'>
            <img src={wholesale_1} alt="peaches"/>
          </div>

        </div>

        <div className='wholesale-info-container'>

          <div className='wholesale-info-pictures-box'>
            <img src={wholesale_2} alt="peaches"/>
          </div>

          <div className='wholesale-info-text-box'>
            <p>
              Our customer base includes large grocery chains, small farm stands, CSA's, and just about everything in between. We are able to package product in reusable half bushel crates, returnable bulk bins of several sizes sold by weight or volume, corrugate bins, corrugate boxes, totes or bags.
            </p>
            <p>
              If you are interested in a one-time purchase or a weekly account, please call our market at <span className='wholesale-phone'>(717) 993-2974</span> and ask to speak to one of the Shaws about a wholesale account.
            </p>
          </div>
        </div>
        <div className='wholesale-pad' />
      </div>
      <Footer />
    </div>
  )
}

export default Wholesale