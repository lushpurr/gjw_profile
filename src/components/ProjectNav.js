import React, {useState} from 'react';
import { NavLink } from "react-router-dom";
import {FaShuttleVan, FaIdCard, FaMoneyBillWave , FaMoon, FaPizzaSlice, FaHeadphones, FaDungeon} from 'react-icons/fa';
import './ProjectNav.css'

function ProjectNav(){

    return(
        <nav className='Nav'>      
            <h2>Gavin Will | Software Developer</h2>

            <ul className='nav'>
                <li>
                    <NavLink exact to={process.env.PUBLIC_URL + '/'}><FaIdCard className="icon" title="Profile"/></NavLink>
                </li>

                <li>
                    <NavLink to="/uniqore"><FaShuttleVan className="icon" title="UniQore"/></NavLink>

                </li>

                <li>
                    <NavLink to="/spend-tracker"><FaMoneyBillWave className="icon" title="Spend Tracker"/></NavLink>
                </li>
                <li>
                    <NavLink to="/solar-system"><FaMoon className="icon" title="Solar System App"/></NavLink>
                </li>
                <li> 
                    <NavLink to="/food-management"><FaPizzaSlice className="icon" title="Restaurant Ordering Management App"/></NavLink>
                </li>
                <li> 
                    <NavLink to="/music"><FaHeadphones className="icon" title="Music Artist Website"/></NavLink>
                </li>
                <li> 
                    <NavLink to="/adventure-game"><FaDungeon className="icon" title="Text Adventure Game" /></NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default ProjectNav;