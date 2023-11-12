import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import LOGO from '../images/zuly.svg'
import { HiMenu } from 'react-icons/hi'
import { FaTimes } from 'react-icons/fa'
import '../components/css/Navbar.css'
const Navbar = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)
  const fillColor = `var(--light-color)`;

  return (
    <div>
      <nav className="navbar">
        <div className="navbarContainer">
          <Link to="/" className="navLogo" onClick={closeMobileMenu}>
            <img src={LOGO} alt="zuly_logo" width="50px" />
          </Link>
          <div className="menuIcon" onClick={handleClick}>
            {
              click ? <FaTimes fill={fillColor} /> : <HiMenu fill={fillColor} />
            }
          </div>
          <ul className={click ? 'navMenu active' : 'navMenu'}>
            <li className="navItem">
              <Link to="/" className={window.location.pathname === "/" ? "navLinks current" : "navLinks"} onClick={closeMobileMenu} >Home</Link>
            </li>
            <li className="navItem" >
              <Link to="/currency" className={window.location.pathname.includes("/currency") ? "navLinks current" : "navLinks"} onClick={closeMobileMenu} >Currency</Link>
            </li>
            <li className= "navItem">
              <Link to="/about" className={window.location.pathname.includes('/about') ? "navLinks current" : "navLinks"} onClick={closeMobileMenu} >About Us</Link>
            </li>
            <li className="navItem">
              <Link to="/contact" className={window.location.pathname.includes('/contact') ? "navLinks current" : "navLinks"} onClick={closeMobileMenu} >Contact Us</Link>
            </li>
            
          </ul>
        </div>
      </nav>

    </div>
  )
}

export default Navbar
