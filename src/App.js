import React from 'react';
import Navbar from './components/Navbar/Navbar.js';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/HomePage/Home.js';
import PortfolioPage from './components/PortfolioPage/PortfolioPage.js'
import About from './components/AboutPage/About.js'
import PCG from './components/PCGPage/PCG.js'
import FlashDodge from './components/FlashDodgePage/FlashDodge.js'
import InitialTruth from './components/InitialTruthPage/InitialTruth.js'
import Contact from './components/ContactPage/Contact.js'
import FlashDodgeGame from './components/FlashDodgeGame/FlashDodgeGame.js'

function App() {
  return (
    <>
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Home" element={<Home/>} />
          <Route path="/PortfolioPage" element={<PortfolioPage/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/PCG" element={<PCG/>} />
          <Route path="/FlashDodge" element={<FlashDodge/>} />
          <Route path="/InitialTruth" element={<InitialTruth/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/FlashDodgeGame" element={<FlashDodgeGame/>} />
        </Routes>
    </Router>
    </>
  );
}

export default App;
