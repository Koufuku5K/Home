import './PortfolioPage.css';
import { Link } from 'react-router-dom'

function PortfolioPage() {

  return (
    <>
    <div class="portfolioContainer">

        <div id='section1' class='section'>
          <h1 class="sectionTitle">Portfolio</h1>
            <br></br>
            <p>
              Throughout my Undergraduate studies, I have learnt and produced many artefacts. These
              artefacts include, but are not limited to, games and digital illustrations.
              <br></br>
              <br></br>
              In this page, you will be able to see the artefacts that I have created for both my
              academics and leisure.
            </p>
        </div>

        <div id='section2' class='section'>
          <h1 class="sectionTitle">1. Dissertation Project</h1>
            <br></br>
            <p>
              Introducing Loop Structures to Enhance Procedural Dungeon Generation
            </p>
            <br></br>
            <br></br>
            <button><Link to="/PCG">Click Me!</Link></button>
        </div>

        <div id='section3' class='section'>
          <h1 class='sectionTitle'>2. FPS Reaction Practice</h1>
          <br></br>
          <p>
            A simple game to train your flash dodging practice. The target audience of this project are Valorant players.
          </p>
          <br></br>
          <br></br>
          <button><Link to="/FlashDodge">Click Me!</Link></button>
        </div>

    </div>
    </>
  )
}

export default PortfolioPage