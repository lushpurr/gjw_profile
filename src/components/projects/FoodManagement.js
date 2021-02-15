import React from 'react';
import PizzaPanImage from '../../images/pizza_pan.png';

const FoodManagement = () => {
    return( 
        <>
        <h3>Restaurant Booking System |Team project</h3>
        <img className="project-image" src={PizzaPanImage}/>

        <p>React - Java - Spring | January 2021 <br/>
        Full stack restaurant booking application. Timeframe: 7days.</p>
        <p>Features include:</p>
        
        
        <p>* User profile, and order details persist throughout the site.<br/>
            * External API to return menu items details and dynamically added prices and cooking times in Spring backend.<br/>
            * Search menu items.</p>
        
        <section>
        <a href="https://github.com/lushpurr/E44_Final_Project">Github</a>
        </section>
        </>
    )
}

export default FoodManagement;