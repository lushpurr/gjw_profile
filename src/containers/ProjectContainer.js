import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ProjectNav from '../components/ProjectNav';
import ProjectInfo from '../components/ProjectInfo';
import SpendTracker from '../components/projects/SpendTracker';
import SolarSystem from '../components/projects/SolarSystem';
import FoodManagement from '../components/projects/FoodManagement';
import Music from '../components/projects/Music';
import AdventureGame from '../components/projects/AdventureGame';
import UniQore from '../components/projects/UniQore';
import './ProjectContainer.css'

function ProjectContainer(){
    return (
        <Router>
            <ProjectNav/>

            <Switch>
            
            <Route exact path={process.env.PUBLIC_URL + '/'} render={() => {
                return (
                    <>
                        <div className="project-info">
                            <ProjectInfo/>
                        </div>
                    </>
                    )
                }}
            />
            <Route exact path="/uniqore" render={() => {
                return (
                    <>
										  <div className="project-info">
                  			<UniQore/>
                			</div>

										</>
                )
            }}/>
            <Route exact path="/spend-tracker" render={() => {
                return (
                <>
                <div className="project-info">
                    <SpendTracker/>
                </div>
                </>
                )}}
            />

            <Route exact path="/solar-system" render={() => {
                return (
                <>
                <div className="project-info">
                    <SolarSystem/>
                </div>
                </>
                )}}
            />
            <Route exact path="/food-management" render={() => {
                    return (
                    <>
                    <div className="project-info">
                        <FoodManagement/>
                    </div>
                    </>
                    )}}
            />
            <Route exact path="/music" render={() => {
                    return (
                    <>
                    <div className="project-info">
                        <Music/>
                    </div>
                    </>
                    )}}
            />
            <Route exact path="/adventure-game" render={() => {
                    return (
                    <>
                    <div className="project-info">
                        <AdventureGame/>
                    </div>
                    </>
                    )}}
            />
            </Switch>
        </Router>
    )
}

export default ProjectContainer;