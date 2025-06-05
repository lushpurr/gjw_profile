import React from 'react';
import AdventureGameImage from '../../images/adventure_game.png';

const AdventureGame = () => {
    return (
        <>
        <h4>Java -  IntelliJ - Spring | Pair project | December 2020</h4>
        <img className="project-image" alt="adventure game screenshot" src={AdventureGameImage}/>
        
        <p>Text adventure game with CodeClan coursemate Emily Cullen. <br/>
        Timeframe: Ongoing.</p>
        <p>Features include:</p>
        <p>
        * Implements the use of classes, enums, inheritence and composition. <br/>
        * The player can move through different rooms, pick up objects, and fight enemies. <br/>
        * Word parser that is able to process commands given by the user.</p>

        <p>The game is written entirely in Java and runs in the console.</p>

        
        <section> 
        <a href="https://github.com/emilykmcullen/adventure_game">Github</a>
        </section>
        </>
    )
}

export default AdventureGame;