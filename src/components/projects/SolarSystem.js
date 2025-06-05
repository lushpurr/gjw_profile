import React from 'react';
import CosmodexImage from '../../images/cosmodex.png';

const SolarSystem = () => {
    return( 
        <>
        <h4>Javascript -  Vue.js - API - MongoDB | December 2020</h4> 
        <img className="project-image" alt="Cosmodex screenshot" src={CosmodexImage}/>
        
        <p> 
        An interactive educational tool to learn about our local Solar System. <br/>
        Timeframe: 7 days.</p>
        <p> Features include:</p>
        
        <p>* Interactive list of planets that can be dynamically ordered by size or distance from the sun.<br/>
        * Data pulled from two external API and additional info added using MongoDB. <br/>
        * Glossary containing Astrological terms.</p>

        
        <section> 
        <a href="https://github.com/lushpurr/the-curly-boys-space-adventure">Github</a>
        </section>
        </>
    )
}

export default SolarSystem;


