import './Navbar.css'
import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function Navbar() {
  const [, i18n] = useTranslation("global");

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <header>
        <h1 href="#" class="cta">William Moses</h1>
        <nav>
            <ul class="nav_links">
                <li><Link to="/Home" class="cta">Home</Link></li>
                <li><Link to="/PortfolioPage" class="cta">Portfolio</Link></li>
                <li><Link to="/About" class="cta">About Me</Link></li>
                <li><Link to="/Contact" class="cta">Contact</Link></li>
                <li onClick={() => handleChangeLanguage("en")} class="language-button">EN</li>
                <li onClick={() => handleChangeLanguage("jp")} class="language-button">JP</li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar