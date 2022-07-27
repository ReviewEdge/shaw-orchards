import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import './navbar.css'

const Menu = () => (
  <>
  <p><a href="#home">PLAN YOUR VISIT</a></p>
  <span class="nav-bullet">·</span>
  <p><a href="#home">OUR FRUIT</a></p>
  <span class="nav-bullet">·</span>
  <p><a href="#home">OUR FARM</a></p>
  <span class="nav-bullet">·</span>
  <p><a href="#home">CONTACT US</a></p>
  <span class="nav-bullet">·</span>
  <p><a href="https://shaw-orchards.square.site/" target="_blank">ONLINE STORE</a></p>
  <span class="nav-bullet">·</span>
  <p><a href="#home">WHOLESALE</a></p>
  <span class="nav-bullet">·</span>
  <p><a href="#home">JOBS</a></p>
  </>
)

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="shaw-orchards__navbar">
      <div className="shaw-orchards__navbar-links">
        <Menu />
      </div>
      <div className="shaw-orchards__navbar-menu">
        {toggleMenu
          ? <RiCloseLine size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className="shaw-orchards__navbar-menu_container">
            <div className='shaw-orchard__navbar-menu_container-links'>
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
 
export default Navbar
