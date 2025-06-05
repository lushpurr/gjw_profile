import React, {useState, useEffect} from 'react';
import { NavLink } from "react-router-dom";
import {FaShuttleVan, FaIdCard, FaMoneyBillWave , FaMoon, FaPizzaSlice, FaHeadphones, FaDungeon} from 'react-icons/fa';
import './ProjectNav.css'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

const navItems = [
{ to: process.env.PUBLIC_URL + '/', icon: <FaIdCard />, title: 'Gavin Will | Software Developer Portfolio' },
{ to: '/uniqore', icon: <FaShuttleVan />, title: 'UniQore | Commercial Logistics Solution' },
{ to: '/spend-tracker', icon: <FaMoneyBillWave />, title: 'Spend Tracker | Solo project' },
{ to: '/solar-system', icon: <FaMoon />, title: 'Educational Solar System App | Team project' },
{ to: '/food-management', icon: <FaPizzaSlice />, title: 'Restaurant Booking System | Team project' },
{ to: '/music', icon: <FaHeadphones />, title: 'Musical Artist Site  | Solo project' },
{ to: '/adventure-game', icon: <FaDungeon />, title: 'Text Based Adventure Game | Pair project' }
];

function ProjectNav(){

    const location = useLocation()
    // const [isLocked, setIsLocked] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [hoverIndex, setHoverIndex] = useState(null)
    useEffect(() => {
        const currentIndex = navItems.findIndex(item => location.pathname === item.to);
        setSelectedIndex(currentIndex);
        // setIsLocked(true);
    }, [location.pathname]);

    return(
        <nav className='Nav'>      
            {/* <h2>Gavin Will | Software Developer Portfolio</h2> */}

            <ul className='nav'>
                {navItems.map((item, index) => (
                <li key={index}>
                <NavLink
                    to={item.to}
                    onMouseEnter={() =>  setHoverIndex(index)}
                    onMouseLeave={() =>  setHoverIndex(null)}
                    onClick={() => {
                        setSelectedIndex(index);
                        // setIsLocked(true);
                    }}
                >
                    {item.icon}
                </NavLink>
                </li>
            ))}
                
        
                <h3 className={(hoverIndex !== null &&  hoverIndex !== selectedIndex)? 'selected-title opacity' : 'selected-title'}>{(selectedIndex !== null || hoverIndex !== null) && <div className="hover-title">{hoverIndex !== null?navItems[hoverIndex].title : navItems[selectedIndex].title}</div>}</h3>

            </ul>


        </nav>
    )
}

export default ProjectNav;