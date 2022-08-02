import React from 'react'
import './title.css'

import logo from '../../assets/logo2.png';
import SocialLinks from '../socialLinks/SocialLinks';
import SocialLinksSmall from '../socialLinksSmall/SocialLinksSmall';

function Header() {
  return (
    <div className='header'>
      <a href="#home">
        <img className="header-item" src={logo} alt="logo"/>
      </a>
        
      <a href="#home">
        <div>
          <h1>SHAW ORCHARDS</h1>
          <h3>On the Mason-Dixon Line</h3>
        </div>
      </a>

      <div className='socials'>
        <div className='normal-links'>
          <SocialLinks />
        </div>

        <div className='small-links'>  
          <SocialLinksSmall />
        </div>
      </div>
    </div>
  )
}

export default Header