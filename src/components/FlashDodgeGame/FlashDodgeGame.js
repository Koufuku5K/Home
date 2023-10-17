import React from 'react'
import { useEffect } from 'react'
import './FlashDodgeGame.css'

function FlashDodgeGame() {
    useEffect(() => {
        window.scrollTo(0, 0); // Loads the page from the top
    }, []);
    return (
    <>
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