import React from 'react'
import { useEffect } from 'react'
import './FlashDodgeGame.css'
import { Link } from 'react-router-dom'

function FlashDodgeGame() {
    useEffect(() => {
        window.scrollTo(0, 0); // Loads the page from the top
    }, []);
    return (
    <>
    {/* <div class="gameTitle">
        <h1>
            Disclaimer:
        </h1>
        <p>
            WebGL is not the best platform for FPS games. Fast/rapid mouse movement will cause the camera to snap, resulting
            in difficult camera controls.
        </p>
    </div> */}

    <div id='section1' class='section'>
        <h1 class="sectionTitle">Disclaimer:</h1>
        <br></br>
        <p>
            This game makes reference to characters, names, and gameplay mechanics associated with the game "Valorant" which is owned by Riot Games, Inc. 
            The use of these names and references is purely for the purpose of fan appreciation. 
            This game is not affiliated with or endorsed by Riot Games, Inc., and I do NOT claim any ownership of their products. 
            <br></br>
            <br></br>
            All rights to these characters and names are owned by Riot Games, Inc.
            <br></br>
            <br></br>
            Furthermore, WebGL is not the best environment/platform to play FPS games. Quick and rapid mouse movement will cause the camera
            to snap, making it difficult to aim. If you would like to play in a better environment, you can download the game by clicking
            the button below. Else, scroll down to play the game in your browser.
        </p>
            <br></br>
            <br></br>
        <Link to="/Home" target="_blank">
            <button>
                <span>Download the Game</span>
            </button>
        </Link>
    </div>
        
    <div class="container">
        <iframe
            title = "Flash Dodge Game"
            src = "https://koufuku5k.github.io/Flash-Dodge-WebGL/"
            width="1920"
            height="1080"
        ></iframe>
    </div>
    </>
  )
}

export default FlashDodgeGame