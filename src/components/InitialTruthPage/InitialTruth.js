import React from 'react'
import { useEffect } from 'react'
import './InitialTruth.css'
import initial_truth1 from '../../images/initial_truth_1.png'
import initial_truth2 from '../../images/initial_truth_2.png'
import { Link } from 'react-router-dom'

function InitialTruth() {
    useEffect(() => {
        window.scrollTo(0, 0); // Loads the page from the top
    }, []);
    return (
    <>
    <div class="container_initial_truth">
        <div id="maintext_initial_truth">
            <p>
                Initial Truth is a simple video game that I made. In this video game, I explored the genre STG/Shoot 'em up and
                a hybrid of Real-Time and Turn Based RPG.
                <br></br>
                <br></br>
                The original Final Fantasy 7 left a huge impression on me. Although it is considered a retro game, I really enjoyed
                the gameplay and turn-based mechanics. However, in recent years, real-time mechanics have been the norm in video
                games. This inspired me to explore the two mechanics and try to combine them into one. As a result, Initial Truth
                features real-time and turn based mechanics.
                <br></br>
                <br></br>
                In Initial Truth, the game starts off as a shoot 'em up game. Swarms of slimes will spawn in random positions and chase
                the player to attack the player. The player will have to use magic to attack the slimes and survive for a set period.
                After surviving the swarm, the boss will appear. Colliding with the boss will engage a battle. This is where the
                hybrid &#40;real-time and turn-based mechanics&#41; take place.
                <br></br>
                <br></br>
                During the boss fight, both player and boss have a wait bar. This wait bar increases in real-time. When the wait bar
                fills, the player or the boss can make a move. The interesting part is: if the player do not make a move after the
                wait bar fills, the boss will keep on making moves. This promotes faster paced turn-based RPG while still allowing the
                player to strategize for a short window of time.
            </p>
        </div>

        <div id="media_container">
            <div class="screenshot">
                <img class="initialtruth_img" src={initial_truth1} alt="Shoot 'em up"/>
            </div>
            <div class="screenshot">
                <img class="initialtruth_img" src={initial_truth2} alt="Hybrid Real-Time Turn Based"/>
            </div>
        </div>

        <div id="button_container">
            <Link to="https://www.youtube.com/watch?v=UaRIdTzuofU&ab_channel=Koufuku" target="_blank">
                <button>
                    <span>YouTube Video</span>
                </button>
            </Link>
            <Link to="/PortfolioPage">
                <button>
                    <span>Back</span>
                </button>
            </Link>
        </div>

    </div>
    </>
  )
}

export default InitialTruth