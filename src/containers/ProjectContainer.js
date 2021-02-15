import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ProjectNav from '../components/ProjectNav';
import ProjectInfo from '../components/ProjectInfo';
import SpendTracker from '../components/projects/SpendTracker';
import SolarSystem from '../components/projects/SolarSystem';
import FoodManagement from '../components/projects/FoodManagement';
import Music from '../components/projects/Music';
import AdventureGame from '../components/projects/AdventureGame';
import './ProjectContainer.css'

function ProjectContainer(){
    return (
        <Router>
            <ProjectNav/>

            <Switch>
            <Route path="/details" render={() => {
                return (
                    <>
                        <div className="project-info">
                            <ProjectInfo/>
                        </div>
                    </>
                    )
                }}
            />
            <Route path="/spend-tracker" render={() => {
                return (
                    <>
                        <div className="project-info">
                            <SpendTracker/>
                        </div>
                    </>
                    )
                }}
            />

                <Route path="/solar-system" render={() => {
                    return <><div className="project-info"><SolarSystem/></div></>
                }}
                />

                <Route path="/food-management" render={() => {
                    return <><div className="project-info"><FoodManagement/></div></>
                }}
                />
                <Route path="/music" render={() => {
                    return <><div className="project-info"><Music/></div></>
                }}
                />
                <Route path="/adventure-game" render={() => {
                    return <><div className="project-info"><AdventureGame/></div></>
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