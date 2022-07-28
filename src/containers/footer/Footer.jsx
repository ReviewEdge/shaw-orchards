import React from 'react'
import './footer.css'

import logo from '../../assets/logo2.png';
import SocialLinks from '../../components/socialLinks/SocialLinks';

function Footer() {
  return (
    <div className='footer'>


      <a href="#home">
        <img className="footer-item" src={logo} alt="logo"/>
      </a>

      <div className='footer-item footer-address'>
        <p className='white'>BUSINESS ADDRESS</p>
        <p>21901 Barrens Rd South,</p>
        <p>Stewartstown, PA 17363</p>
      </div>

      <div className='footer-item footer-address'>
        <p className='white'>VISITOR ADDRESS</p>
        <p>5594 Norrisville Rd,</p>
        <p>White Hall, MD, 21161</p>
      </div>


      <div footer-item >
        <p className='phone-number'>(717) - 382 - 8879</p>
        <button className='shaw-orchards__yellow-button'>
          STAY UPDATED WITH OUR NEWSLETTER!
        </button>
      </div>

      <div className='footer-item'>
        <SocialLinks />
      </div>

    </div>
  )
}
 
export default Footer