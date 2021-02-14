import React from 'react';
import { Link } from "react-router-dom";

import {FaMoneyBillWave , FaMoon, FaPizzaSlice} from 'react-icons/fa';

function ProjectNav(){
    return(
        <ul className='nav-item'>
        <li>
            <Link to="/project1"><FaMoneyBillWave className="icon"/>Spend Tracker</Link>
        </li>
        <li>
            <Link to="/project2"><FaMoon className="icon"/>Solar System Educational App</Link>
        </li>
        <li> 
          <Link to="/project3"><FaPizzaSlice className="icon"/>Food Ordering System</Link>
        </li>
    </ul>
    )
}

export default ProjectNav;