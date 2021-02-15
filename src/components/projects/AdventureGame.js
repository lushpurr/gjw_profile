import React from 'react';
import AdventureGameImage from '../../images/adventure_game.png';

const AdventureGame = () => {
    return (
        <>
        <h3>Text Based Adventure Game | Pair project </h3> 
        <img className="project-image" src={AdventureGameImage}/>
        
        <p>Jave -  IntelliJ - Spring | December 2020 <br/> This is an ongoing paired project, with my CodeClan coursemate Emily Cullen , in which we are making a text adventure game. <br/>
        Timeframe: Ongoing.</p>
        <p>Features include:</p>
        <p>
        * Our game implements the use of classes, enums, inheritence and composition. <br/>
        * The player is able to move through different rooms in the game, pick up objects, and fight enemies. 
        * Word parser that is able to process commands given by the user.</p>

        <p>The game is written entirely in Java and runs in the console, we will add a front-end in the future.</p>

        
        <section> 
        <a href="https://github.com/emilykmcullen/adventure_game">Github</a>
        </section>
        </>
    )
}

export default AdventureGame;