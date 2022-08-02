import React from 'react'
import './contactInfo.css'

import { BsFacebook, BsInstagram } from 'react-icons/bs'
import pumpkin from '../../assets/pumpkins sq.jpg';

function ContactInfo() {
  return (
    <div className='contactInfo'>
      <h1>CONTACT US</h1>
      <div className='contact-triple-split-container'>
        <div className='contact-col-1'>
          <h3>Business Address</h3>
          <p>21901 Barrens Rd South,</p>
          <p>Stewartstown, PA 17363</p>

          <div className='contact-pad' />

          <h3>Business Address</h3>
          <p>5594 Norrisville Rd,</p>
          <p>White Hall, MD, 21161</p>
        </div>
        <div className='contact-col-2'>
          <h3>Phone Number</h3>
          <p>(717) - 382 - 8879</p>

          <div className='contact-pad' />

          <h3>Social Media</h3>
          <a className='contact-pad-right' href="https://www.facebook.com/ShawOrchards/" target="_blank" rel="noreferrer"><BsFacebook size={45} /></a>
          <a href="https://www.instagram.com/shaw_orchards/" target="_blank" rel="noreferrer"><BsInstagram size={45} /></a>
        </div>
        <div className='contact-col-3'>
          <h3>Email Address</h3>
          <p>barron@shaworchards.com</p>

          <div className='contact-pad' />

          <img src={pumpkin} alt="pumpkin"/>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo
