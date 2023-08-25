import React from 'react'
import './FlashDodge.css'
import convex_hull_1 from '../../images/PCG/Second Hull.PNG'
import convex_hull_2 from '../../images/PCG/Second Hull 2.PNG'
import { Link } from 'react-router-dom'

function FlashDodge() {
  return (
    <>
    <div class="container">
        <div id="FlashDodgetext">
            <p>
                TEST
            </p>
        </div>

        <div id="image_container">
            <div class="screenshot">
                
            </div>
            <div class="screenshot">
                
            </div>
        </div>

        <div id="button_container">
            <button><a>YouTube Video</a></button>
            <button><a><Link to="/PortfolioPage">Back</Link></a></button>
        </div>

    </div>
    </>
  )
}

export default FlashDodge