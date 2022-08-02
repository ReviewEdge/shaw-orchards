import React from 'react'
import './visitInfo.css'

import kid from '../../assets/kid eating strawberry sq.jpg';

function PlanYourVisit() {
  return (
    <div className='planYourVisit'>
      <h1>PLAN YOUR VISIT</h1>

      <div className='plan-split-container'>

        <div className='plan-split-item-left'>
          <div className='hours-box'>
            <h2>Summer Hours</h2>
            <h4>(Early June until first Saturday of November)</h4>
              <div className='hours-split-container'>
              <div className='hours-left'>
                <p>Monday - Friday</p>
                <p>Saturday</p>
                <p>Sunday</p>
              </div>
              <div className='hours-right'>
                <p>8am - 6pm</p>
                <p>8am - 5pm</p>
                <p>Closed</p>
              </div>
            </div>
            <p className='opening-note'>
              * Keep an eye on our website for the exact opening day.
            </p>
          </div>

          <div className='hours-box'>
            <h2>Winter Hours</h2>
            <h4>(First Sunday of November until Thanksgiving)</h4>
              <div className='hours-split-container'>
              <div className='hours-left'>
                <p>Monday - Saturday</p>
                <p>Sunday</p>
              </div>
              <div className='hours-right'>
                <p>9am - 5pm</p>
                <p>Closed</p>
              </div>
            </div>
          </div>

          <div>
            <h2>Weather Forecast</h2>
          </div>

        </div>

        <div className='plan-split-item-right'>
          <h2>Find Us</h2>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3068.8338910224843!2d-76.54955558543071!3d39.720915605587216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c87a2eac3409a5%3A0x8796bd22e0a46ebb!2sShaw%20Orchards!5e0!3m2!1sen!2sus!4v1659113130634!5m2!1sen!2sus" 
            allowfullscreen="" loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"
            title="map"
          >
          </iframe>

          <img src={kid} alt="kid eating strawberry"/>

        </div>

      </div>
    </div>
  )
}

export default PlanYourVisit
