import React, { useEffect } from 'react'
import './PortfolioPage.css';
import convex_hull_1 from '../../images/PCG/Second Hull.PNG'
import convex_hull_2 from '../../images/PCG/Second Hull 2.PNG'
import { observeIntersection } from './observer.js';

function PortfolioPage() {

  useEffect(() => {
    const hiddenDiv = document.querySelectorAll('.hidden');
    observeIntersection(hiddenDiv);
  }, []);

  return (
    <>
    {/* <div class="container">
        <div class="text">
            <h1>Portfolio</h1>
            <div>
                Throughout my Undergraduate studies, I have learned and produced many artefacts. These
                artefacts include, but are not limited to, games and digital illustrations.
                <br></br>
                <br></br>
                In this page, you will be able to see the artefacts that I have created for both my
                academics and leisure.
            </div>
            <div class="scroll">SCROLL</div>
        </div>
    
      <div class="container2">
        <img class = "hidden_img top" src={convex_hull_1} alt="Dungeon 1"/>
        <a href="/PCG">
          <h2>Introducing Looping Structures to Enhance Procedural Dungeon Generation</h2>
        </a>
        <img class = "hidden_img bottom" src={convex_hull_2} alt="Dungeon 2"/>
      </div>
    </div> */}
    <div class="portfolioContainer">
      <div id="sectionContainer">
        <div id='section1' class='section'>
          <div class='leftdiv'>
            <h1 class='sectionTitle'>Portfolio</h1>
            <p>
              Throughout my Undergraduate studies, I have learned and produced many artefacts. These
              artefacts include, but are not limited to, games and digital illustrations.
              <br></br>
              <br></br>
              In this page, you will be able to see the artefacts that I have created for both my
              academics and leisure.
            </p>
          </div>
          <div class='rightdiv'>
          <h1 class='sectionTitle'>Portfolio</h1>
            <p>
              Throughout my Undergraduate studies, I have learned and produced many artefacts. These
              artefacts include, but are not limited to, games and digital illustrations.
              <br></br>
              <br></br>
              In this page, you will be able to see the artefacts that I have created for both my
              academics and leisure.
            </p>
          </div>
        </div>
        <div id='section2' class='section'>
          <h1 class='sectionTitle'>Project 1</h1>
          <p>This is my website</p>
        </div>

        <div id='section3' class='section'>
          <h1 class='sectionTitle'>Project 2</h1>
          <p>This is my website</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default PortfolioPage