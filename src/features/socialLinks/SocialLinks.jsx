import React from 'react'
import { BsFacebook, BsInstagram, BsFillTelephoneFill } from 'react-icons/bs'
import {  HiOutlineMail  } from 'react-icons/hi'
import './socialLinks.css'

function SocialLinks() {
    return (
        <div className='social-links'>
            <table>
                <tr>
                    <a href="https://www.facebook.com/ShawOrchards/" target="_blank" rel="noreferrer"><td><BsFacebook size={20} /></td></a>
                    <a href="https://www.instagram.com/shaw_orchards/" target="_blank" rel="noreferrer"><td><BsInstagram size={20} /></td></a>
                </tr>
                <tr>
                    <a className='phone-icon' /*href=""*/ target="_blank" rel="noreferrer"><td><BsFillTelephoneFill size={18} /></td></a>
                    <a className='email-icon' /*href=""*/ target="_blank" rel="noreferrer"><td><HiOutlineMail size={24} /></td></a>
                </tr>
            </table>    
        </div>
    )
}

export default SocialLinks