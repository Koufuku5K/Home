import React from 'react'
import { useEffect } from 'react'
import './FlashDodge.css'
import flash_dodge from '../../images/FlashDodge/FlashDodge.JPG'
import FlashDodgeGameVideo from '../../videos/FlashDodgeGame.mp4'
import { Link } from 'react-router-dom'

function FlashDodge() {
    useEffect(() => {
        window.scrollTo(0, 0); // Loads the page from the top
    }, []);
    return (
    <>
    <div class="container_flash_dodge">
        <div id="Maintext">
            <p>
                In FPS games like Valorant and Counter-Strike, there are certain game mechanics that players need to learn to
                win. One of the most crucial mechanics in FPS is "flash dodging." A flash is an in-game utility that causes
                enemies to be blinded if they were to look at the flash. This allows players to take advantage of the blinded enemy
                to kill them easily.
                <br></br>
                <br></br>
                Unfortunately, as of the creation of this portfolio website, Valorant has yet to add a practice mode to help players
                dodge these flashes. As a Valorant player myself, I had to master this game mechanics. Thus, I came up with the idea 
                to create this simple game, helping players master this mechanic.
                <br></br>
                <br></br>
                To build this game, I used Unity Engine. In this personal project, I learnt a lot about how a camera renders 
                in-game objects. For a flash to be effective, the flash needs to be rendered on the screen of the player. This means
                that it needs to be inside the frustum plane of the camera. Then, to compare if the flash is inside the frustum plane,
                I used AABB collision detection algorithm.
                <br></br>
                <br></br>
                <span id="flash_dodge_hyperlink">
                    <a href="https://github.com/Koufuku5K/valorant-flash-dodge" target="_blank" rel="noopener noreferrer">
                        Click me to go to the GitHub Repo!
                    </a>
                </span> 
                <br></br>
                <br></br>
                Things Learnt in this Project:
                <ol>
                    <li>Frustum Planes &#40;Computer Graphics&#41;</li>
                    <li>Axis-Aligned Bounding Box &#40;AABB&#41;</li>
                    <li>Parabolic Motion &#40;Movement of Flashes&#41;</li>
                </ol>
            </p>
        </div>

        <div id="image_container">
            <div class="flash_dodge_screenshot">
                <img class="flashdodge_img" src={flash_dodge} alt="Flash Dodge"/>
            </div>
            <div class="flash_dodge_video">
                <video class="flashdodge_video" width="384" height="216" controls>
                    <source src={FlashDodgeGameVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>

        <div id="button_container">
            <Link to="/FlashDodgeGame" target="_blank">
                <button>
                    <span>Play the Game</span>  
                </button>
            </Link>
            <button><Link to="/PortfolioPage">Back</Link></button>
        </div>

    </div>
    </>
  )
}

export default FlashDodge