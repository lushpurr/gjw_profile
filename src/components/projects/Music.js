import React from 'react'
import LushPurrImage from '../../images/lush_purr.png'

const Music = () => {
    return (
        <>
        <h4>Html5 -  CSS - Javascript | June 2017</h4> 
        <img className="project-image" alt="Lush Purr screenshot" src={LushPurrImage}/>
        
        <p>This is one of my projects I used to teach myself basic web design skills</p>
        <p> Features include:</p>
        
        <p>* Embedded videos.<br/>
        * SongKick Tourbox to display upcoming concerts.</p>

        
        <section> 
        <a href="https://lushpurr.com/">Site</a> || <a href="https://github.com/lushpurr/lushpurr">Github</a>
        </section>
        </>

    )
}

export default Music;