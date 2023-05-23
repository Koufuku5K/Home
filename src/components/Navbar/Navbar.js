// import React, {useState} from 'react'
import './Navbar.css'
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header>
        <h1 href="#" class="cta">William Moses</h1>
        <nav>
            <ul class="nav_links">
                <li><Link to="/Home" class="cta">Home</Link></li>
                <li><Link to="/PortfolioPage" class="cta">Portfolio</Link></li>
                <li><Link to="/About" class="cta">About Me</Link></li>
                <li><Link to="/Contact" class="cta">Contact</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar