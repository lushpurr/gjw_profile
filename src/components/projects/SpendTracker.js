import React from 'react';
import SpendTrackerImage from '../../images/spend_tracker.png';
import './Projects.css';

const SpendTracker = () => {
    return (
        <>
        <h3>Spend Tracker | Solo project</h3> 
        <img className="project-image" src={SpendTrackerImage}/>
        
        <p>A web app made using Python, Flask and postgreSQL which allows users to control and track their finances. Timeframe: 7 days. Nov '20</p>

        
        <section><a href="https://tour-budget-tracker.herokuapp.com/">Hosted App</a> || 
        <a href="https://github.com/lushpurr/project1_spend_tracker">Github</a>
        </section>
        
        </>
    )
}

export default SpendTracker;