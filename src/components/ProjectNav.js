import React, {useState} from 'react';
import { NavLink } from "react-router-dom";
import {FaShuttleVan, FaIdCard, FaMoneyBillWave , FaMoon, FaPizzaSlice, FaHeadphones, FaDungeon} from 'react-icons/fa';
import './ProjectNav.css'

function ProjectNav(){
    const navItems = [
    { to: process.env.PUBLIC_URL + '/', icon: <FaIdCard />, title: null },
    { to: '/uniqore', icon: <FaShuttleVan />, title: 'UniQore - Commercial Logistics Solution' },
    { to: '/spend-tracker', icon: <FaMoneyBillWave />, title: 'Spend Tracker - Team Project' },
    { to: '/solar-system', icon: <FaMoon />, title: 'Solar System App - Team Project' },
    { to: '/food-management', icon: <FaPizzaSlice />, title: 'Restaurant App - Team Project' },
    { to: '/music', icon: <FaHeadphones />, title: 'Music Site - Personal Project' },
    { to: '/adventure-game', icon: <FaDungeon />, title: 'Text Adventure Game - Paired Project' }
    ];
    const [selectedTitle, setSelectedTitle] = useState('');
    const [isLocked, setIsLocked] = useState(false);


    return(
        <nav className='Nav'>      
            <h2>Gavin Will | Software Developer Portfolio</h2>

            <ul className='nav'>
                {navItems.map((item, index) => (
                <li key={index}>
                <NavLink
                    to={item.to}
                    onMouseEnter={() => !isLocked && setSelectedTitle(item.title)}
                    onMouseLeave={() => !isLocked && setSelectedTitle('')}
                    onClick={() => {
                        setSelectedTitle(item.title);
                        setIsLocked(true);
                    }}
                >
                    {item.icon}
                </NavLink>
                </li>
            ))}
                
        
                <h3 className='selected-title'>{selectedTitle && <div className="hover-title">{selectedTitle}</div>}</h3>

            </ul>


        </nav>
    )
}

export default ProjectNav;