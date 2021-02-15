import React from 'react';
import AdventureGameImage from '../../images/adventure_game.png';

const AdventureGame = () => {
    return (
        <>
        <h3>Text Based Adventure Game | Pair project </h3> 
        <img className="project-image" src={AdventureGameImage}/>
        
        <p>Java -  IntelliJ - Spring | December 2020 <br/> Text adventure game with CodeClan coursemate Emily Cullen. <br/>
        Timeframe: Ongoing.</p>
        <p>Features include:</p>
        <p>
        * Implements the use of classes, enums, inheritence and composition. <br/>
        * The player can move through different rooms, pick up objects, and fight enemies. <br/>
        * Word parser that is able to process commands given by the user.</p>

        <p>The game is written entirely in Java and runs in the console.<br/>
        We intend to add a front-end in the future.</p>

        
        <section> 
        <a href="https://github.com/emilykmcullen/adventure_game">Github</a>
        </section>
        </>
    )
}

export default AdventureGame;