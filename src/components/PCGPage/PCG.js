import React from 'react'
import { useEffect } from 'react'
import './PCG.css'
import convex_hull_1 from '../../images/PCG/Second Hull.PNG'
import convex_hull_2 from '../../images/PCG/Second Hull 2.PNG'
import { Link } from 'react-router-dom'

function PCG() {
    useEffect(() => {
        window.scrollTo(0, 0); // Loads the page from the top
    }, []);
    return (
    <>
    <div class="container_pcg">
        <div id="Maintext">
            <p>
                For my undergraduate dissertation project, I researched into the Procedural Content Generation &#40;PCG&#41;
                Field.
                <br></br>
                <br></br>
                The aim of my project is to enhance procedural dungeon generation by introducing looping structures into
                the dungeon. As a result, the generated dungeon will more closely resemble those designed by humans.
                <br></br>
                <br></br>
                To introduce the looping strucutres into the dungeon, I hypothesise that utilising the Graham Scan algorithm may prove
                to be beneficial. Graham Scan is an algorithm used to solve the Convex Hull problem. It is not an algorithm that
                is usually used for game development, however, I thought that using this might be an interesting approach.
                <br></br>
                <br></br>
                The results were great. The procedurally generated dungeon show interesting looping structures that may improve the
                dungeon exploration experience. This means that players may end up where they started or instantly reach to the destination.
                Consequently, this opens up a lot of interesting gameplay mechanics that could be implemented by the developers.
                Furthermore, the Graham Scan has O&#40;n log n&#41; time complexity, which is a decent algorithm for small dungeons with
                few rooms.
                <br></br>
                <br></br>
                <b>"An interesting project with interesting approach."</b>
                <br></br>   
                - Dr. Gary Ushaw, Newcastle University
            </p>
        </div>

        <div id="image_container">
            <div id="PCG_screenshot">
                <img class="PCG_img" src={convex_hull_1} alt="Dungeon 1"/>
            </div>
            <div id="PCG_screenshot">
                <img class="PCG_img" src={convex_hull_2} alt="Dungeon 2"/>
            </div>
        </div>

        <div id="button_container">
            <Link to="https://github.com/Koufuku5K/3094-dissertation" target="_blank">
                <button>
                    <span>GitHub Repo</span>
                </button>
            </Link>
            <button><Link to="/PortfolioPage">Back</Link></button>
        </div>

    </div>
    </>
  )
}

export default PCG