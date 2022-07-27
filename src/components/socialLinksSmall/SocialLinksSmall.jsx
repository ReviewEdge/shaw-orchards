import React from 'react'
import { BsFacebook, BsInstagram, BsFillTelephoneFill } from 'react-icons/bs'
import {  HiOutlineMail  } from 'react-icons/hi'
import './socialLinksSmall.css'

function SocialLinksSmall() {
    return (
        <div className='small__social-links'>
            <table>
                <tr>
                    <a href="https://www.facebook.com/ShawOrchards/" target="_blank"><td><BsFacebook size={13} /></td></a>
                    <a href="https://www.instagram.com/shaw_orchards/" target="_blank"><td><BsInstagram size={13} /></td></a>
                </tr>
                <tr>
                    <a className='small__phone-icon' /*href=""*/ target="_blank"><td><BsFillTelephoneFill size={11} /></td></a>
                    <a className='small__email-icon' /*href=""*/ target="_blank"><td><HiOutlineMail size={16} /></td></a>
                </tr>
            </table>    
        </div>
    )
}

export default SocialLinksSmall