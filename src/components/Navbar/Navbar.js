import React, {useState} from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <header>
        <h1 href="#" class="cta">William Moses</h1>
        <nav>
            <ul class="nav_links">
                <li><a href="/Home" class="cta">Home</a></li>
                <li><a href="/portfolio" class="cta">Portfolio</a></li>
                <li><a href="/about" class="cta">About Me</a></li>
                <li><a href="/contact" class="cta">Contact</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar