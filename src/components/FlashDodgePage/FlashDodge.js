import React from 'react'
import './FlashDodge.css'
import convex_hull_1 from '../../images/PCG/Second Hull.PNG'
import BreachFlashDodge from '../../videos/BreachFlashDodge.mp4'
import convex_hull_2 from '../../images/PCG/Second Hull 2.PNG'
import { Link } from 'react-router-dom'

function FlashDodge() {
  return (
    <>
    <div class="container">
        <div id="PCGtext">
            <p>
                Valorant is one of my most played video game. Playing and competing with my friends against
                other players is something I find very fun. Therefore, I invested a lot of hours into Valorant and was able to
                improve significantly in the game.
                <br></br>
                <br></br>
                There are many tools that can help with our FPS skills. These include AimLab and the training range available in Valorant.
                However, as I climb up the competitive ranks, I realise the importance of being able to make split second decisions, mainly
                to dodge flashes. 
                <br></br>
                <br></br>
                At the time of writing &#40;August 2023&#41;, both AimLab and Valorant training range do not have
                a mode that trains flash dodging. As a result, to help myself improve in the game, I created my own Flash Dodging practice.
                <br></br>
                <br></br>
                The results were spot on.
            </p>
        </div>

        <div id="media_container">
            <div class="screenshot">
                <img class="pcg_img" src={convex_hull_1} alt="Dungeon 1"/>
            </div>
            <div class="video">
                <video width="384" height="216" controls>
                    <source src={BreachFlashDodge} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>

        <div id="button_container">
            <Link to="https://www.youtube.com/watch?v=UaRIdTzuofU&ab_channel=Koufuku" target="_blank">
                <button>
                    <span>YouTube Video</span>
                </button>
            </Link>
            <button><Link to="/PortfolioPage">Back</Link></button>
        </div>

    </div>
    </>
  )
}

export default FlashDodge