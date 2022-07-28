import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import './navbar2.css'


function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  const [isPlanExpanded, setIsPlanExpanded] = useState(false)
  const [isFarmExpanded, setIsFarmExpanded] = useState(false)
  
  return (
    <div className="shaw-orchards__navbar">



      <div
        className={
          isNavExpanded ? "shaw-orchards__navbar-menu expanded" : "shaw-orchards__navbar-menu"
        }
      >

        <RiMenu3Line className={
            isNavExpanded ? "shaw-orhcards__hamburger expanded" : "shaw-orhcards__hamburger"
          }
          size={24}  
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        />

        <RiCloseLine className={
            isNavExpanded ? "shaw-orhcards__x expanded" : "shaw-orhcards__x"
          } 
          size={27}  
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        />




        <div className='drop-box'
          onMouseEnter={() => {
            setIsPlanExpanded(!isPlanExpanded);
          }}
          
          onMouseLeave={() => {
            setIsPlanExpanded(!isPlanExpanded);
          }}
        >
          <p>
              <a href="#home">PLAN YOUR VISIT</a>
          </p>

          <div className={
              isPlanExpanded ? "dropdown expanded" : "dropdown"
            } 
          >
            <p><a href="#home">HOURS</a></p>
            <p><a href="#home">LOCATION</a></p>
            <p><a href="#home">WEATHER</a></p>
            <p><a href="#home">HAYRIDES</a></p>
            <p><a href="#home">FAQS</a></p>
          </div>
        </div>




        <span class="shaw-orchards__nav-bullet"> · </span>
        <p><a href="#home">OUR FRUIT</a></p>
        <span class="shaw-orchards__nav-bullet"> · </span>

        
        <div className='drop-box'
          onMouseEnter={() => {
            setIsFarmExpanded(!isFarmExpanded);
          }}
          
          onMouseLeave={() => {
            setIsFarmExpanded(!isFarmExpanded);
          }}
        >
          <p>
              <a href="#home">OUR FARM</a>
          </p>

          <div className={
              isFarmExpanded ? "dropdown expanded" : "dropdown"
            } 
          >
            <p><a href="#home">MEET OUR STAFF</a></p>
            <p><a href="#home">NEWSLETTER</a></p>
            <p><a href="#home">PHOTO GALLERY</a></p>
            <p><a href="#home">BLOG</a></p>
            <p><a href="#home">RECIPES</a></p>
            <p><a href="#home">HISTORY</a></p>
            <p><a href="#home">WEBCAMS</a></p>
            <p><a href="#home">LEARN MORE</a></p>
          </div>
        </div>






        <span class="shaw-orchards__nav-bullet"> · </span>
        <p><a href="#home">CONTACT US</a></p>
        <span class="shaw-orchards__nav-bullet"> · </span>
        <p><a href="https://shaw-orchards.square.site/" target="_blank" rel="noreferrer">ONLINE STORE</a></p>
        <span class="shaw-orchards__nav-bullet"> · </span>
        <p><a href="#home">WHOLESALE</a></p>
        <span class="shaw-orchards__nav-bullet"> · </span>
        <p><a href="#home">JOBS</a></p>
      </div>
    </div>
  )
}
 
export default Navbar
