import React from 'react'
import './About.css'
import initial_truth_1 from '../../images/initial_truth_1.png'
import initial_truth_2 from '../../images/initial_truth_2.png'

function About() {
  return (
    <div class="container">
        <div class="text">
            <h1>Hello!</h1>
            <div>
                My name is William Moses. I am a third year undergraduate student studying
                Computer Science, specialised in Game Engineering at Newcastle University, Newcastle
                upon Tyne, UK.
                <br></br>
                <br></br>
                Art comes in many shapes and forms: paintings, sculptures, music, films, literatures,
                and many more. However, I think that although the popularity of video games are rising,
                it is still not widely accepted as a form of art.
                <br></br>
                <br></br>
                I have always been fascinated by video games since I was a kid. One of the games that
                left a huge impression on me was Excitebike on the GameBoy Advanced. It is a simple game,
                but very memorable.
                <br></br>
                <br></br>
                Back then, video games are a form of entertainment yet it evolved in such a high pace into
                what it is now. I believe that video games are just like movies, but interactive. This allows
                us to be immersed into the narrative of the game.
                <br></br>
                <br></br>
                As an aspiring game engineer, I aim to contribute to the game industry by being involved
                in the creation of superb, interactive, and memorable video games in order to bring the values
                of video games to light!
            </div>
        </div>
        <div class="image_container">
            <div class="screenshot">
                <img src={initial_truth_1} alt="Initial Truth Screenshot 1"/>
            </div>
            <div class="screenshot">
                <img src={initial_truth_2} alt="Initial Truth Screenshot 2"/>
            </div>
        </div>
    </div>
  )
}

export default About