import React, {useState} from 'react';
import { NavLink } from "react-router-dom";

import {FaIdCard, FaMoneyBillWave , FaMoon, FaPizzaSlice, FaHeadphones, FaDungeon} from 'react-icons/fa';
import './ProjectNav.css'


function ProjectNav(){



    return(
        <nav className='Nav'>
                    
        <h2>Gavin Will | Software Developer</h2>
        
        <ul className='nav'>
        <li>
            <NavLink to="/details"><FaIdCard className="icon"/></NavLink>
        </li>
        <li>
            <NavLink to="/spend-tracker"><FaMoneyBillWave className="icon"/></NavLink>
        </li>
        <li>
            <NavLink to="/solar-system"><FaMoon className="icon"/></NavLink>
        </li>
        <li> 
          <NavLink to="/project3"><FaPizzaSlice className="icon"/></NavLink>
        </li>
        <li> 
          <NavLink to="/project4"><FaHeadphones className="icon"/></NavLink>
        </li>
        <li> 
          <NavLink to="/project5"><FaDungeon className="icon"/></NavLink>
        </li>

    </ul>
    
    </nav>
    )
}

export default ProjectNav;