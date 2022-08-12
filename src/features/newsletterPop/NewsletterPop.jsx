import React, { useState } from 'react'
import './newsletterPop.css'
import { RiCloseLine } from 'react-icons/ri'


function NewsletterPop(props) {
  return (
    <div className='newsletter-pop-shell'>
      <div className={props.isOpen}>

        <h1>Stay in touch!</h1>
        <h2>We'll let you know when new fruit is in season.</h2>
        <br />
        <h3 className='newsletter-pop-input'>Enter your email...</h3>
        <h3 className='newsletter-pop-sign-up'>SIGN UP</h3>
      </div>
    </div>
  )
}

export default NewsletterPop
