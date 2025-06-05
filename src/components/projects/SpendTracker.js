import React from 'react';
import SpendTrackerImage from '../../images/spend_tracker.png';
import './Projects.css';

const SpendTracker = () => {
    return (
        <>
        <h4>Python - Flask - postgreSQL | November 2020</h4> 
        <img className="project-image" alt="Spend tracker screenshot" src={SpendTrackerImage}/>
        <p>
        A web app which allows users to control and track their finances. <br/>
        Timeframe: 7 days.</p>
        <p>Features include</p>

        <p>* Add and manage transactions, retailers and tags.<br/>
            * Filter transactions by tags. <br/>
	        * See a total of all transactions.</p>

        <section>
        {/* <a href="https://tour-budget-tracker.herokuapp.com/">Hosted App</a> ||  */}
        <a href="https://github.com/lushpurr/project1_spend_tracker">Github</a>
        </section>
        
        </>
    )
}

export default SpendTracker;