import React from 'react'
import './About.css'
import self_portrait from '../../images/self_portrait.jpeg'

function About() {
  return (
    <div class="container_about">
        <div class="text_about">
            <h1>Hello!</h1>
            <div>
                My name is William Moses. I am a Newcastle University graduate with a Bachelor of Science &#40;BSc&#41; Bachelor's 
                degree in Computer Science, specialised in Game Engineering. I studied at Newcastle University in Newcastle upon Tyne, UK.
                <br></br>
                <br></br>
                Art comes in many shapes and forms: paintings, sculptures, music, films, literature,
                and many more. However, although the popularity of video games are rising,
                it is still not widely accepted as a form of art.
                <br></br>
                <br></br>
                I have always been fascinated by video games since I was young. One of the games that
                left a huge impression on me was Pokémon Platinum on the Nintendo DS. It is one of the reasons why I grew
                to love video games.
                <br></br>
                <br></br>
                Back then, video games are a form of entertainment yet it evolved in such a fast pace into
                what it is now. I believe that video games are just like movies, but interactive. This allows
                us to interact and to be more immersed in the narrative of the game.
                <br></br>
                <br></br>
                As a game engineer, I aim to contribute to the game industry by being involved
                in the creation of superb, interactive, and memorable video games in order to bring the values
                of video games to light!
            </div>
        </div>
        <div class="image_container_about">
            <img class="about_img" src={self_portrait} alt="Me"/>
        </div>
    </div>
  )
}

export default About