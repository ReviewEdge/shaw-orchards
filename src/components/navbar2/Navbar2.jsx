import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import './navbar2.css'


function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  
  return (
    <div className="shaw-orchards__navbar">

      <RiMenu3Line className='shaw-orhcards__hamburger' size={24}  
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      />

      <div
        className={
          isNavExpanded ? "shaw-orchards__navbar-menu expanded" : "shaw-orchards__navbar-menu"
        }
      >
        <p><a href="#home">PLAN YOUR VISIT</a></p>
        <span class="shaw-orchards__nav-bullet"> · </span>
        <p><a href="#home">OUR FRUIT</a></p>
        <span class="shaw-orchards__nav-bullet"> · </span>
        <p><a href="#home">OUR FARM</a></p>
        <span class="shaw-orchards__nav-bullet"> · </span>
        <p><a href="#home">CONTACT US</a></p>
        <span class="shaw-orchards__nav-bullet"> · </span>
        <p><a href="https://shaw-orchards.square.site/" target="_blank">ONLINE STORE</a></p>
        <span class="shaw-orchards__nav-bullet"> · </span>
        <p><a href="#home">WHOLESALE</a></p>
        <span class="shaw-orchards__nav-bullet"> · </span>
        <p><a href="#home">JOBS</a></p>
      </div>
    </div>
  )
}
 
export default Navbar
