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
            * External API to return menu items details.<br/>
            * Prices and cooking times added dynamically in Spring backend.<br/>
            * Filterable menu item.</p>
        
        <section>
        <a href="https://github.com/lushpurr/E44_Final_Project">Github</a>
        </section>
        </>
    )
}

export default FoodManagement;