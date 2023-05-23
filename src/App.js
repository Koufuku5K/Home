import React from 'react';
import Navbar from './components/Navbar/Navbar.js';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/HomePage/Home.js';
import Portfolio from './components/PortfolioPage/Portfolio.js';
import About from './components/AboutPage/About.js'
import PCG from './components/PCGPage/PCG.js'

function App() {
  return (
    <>
    {/* <HashRouter>
      <Navbar />
        <Routes>
          <Route path="/Home" element={<Home/>} />
          <Route path="/Portfolio" element={<Portfolio/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/PCG" element={<PCG/>} />
        </Routes>
    </HashRouter> */}
    <BrowserRouter basename='/reponame'>
      <Navbar />
        <Routes>
          <Route path="/Home" element={<Home/>} />
          <Route path="/Portfolio" element={<Portfolio/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/PCG" element={<PCG/>} />
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
