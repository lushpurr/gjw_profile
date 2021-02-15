import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ProjectNav from '../components/ProjectNav';
import ProjectInfo from '../components/ProjectInfo';
import SpendTracker from '../components/projects/SpendTracker'
import SolarSystem from '../components/projects/SolarSystem'
import './ProjectContainer.css'

function ProjectContainer(){
    return (
        <Router>
            <ProjectNav/>

            <Switch>
            <Route path="/details" render={() => {
                    return <><div className="project-info"><ProjectInfo/></div></>

                   
                }}
                />
                <Route path="/spend-tracker" render={() => {
                    return <div className="project-info"><SpendTracker/></div>
                   
                }}
                />

                <Route path="/solar-system" render={() => {
                    return <><div className="project-info"><SolarSystem/></div></>

                   
                }}
                />

                <Route path="/project3" render={() => {
                    return <><div className="project-info"><h2>Food Order Management System</h2><ProjectInfo/></div></>

                   
                }}
                />
            </Switch>
        </Router>


        // <>
        // <ProjectNav/>
        // <ProjectInfo/>
        // </>
        
    )
}

export default ProjectContainer;