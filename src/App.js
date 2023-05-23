import React from 'react';
import Navbar from './components/Navbar/Navbar.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/HomePage/Home.js';
import Portfolio from './components/PortfolioPage/Portfolio.js';
import About from './components/AboutPage/About.js'
import PCG from './components/PCGPage/PCG.js'

function App() {
  return (
    <>
    <Router>
      <Navbar />
        <Routes>
          <Route path="/Home" element={<Home/>} />
          <Route path="/Portfolio" element={<Portfolio/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/PCG" element={<PCG/>} />
        </Routes>
    </Router>
    </>
  );
}

export default App;
