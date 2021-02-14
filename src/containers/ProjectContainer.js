import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ProjectNav from '../components/ProjectNav';
import ProjectInfo from '../components/ProjectInfo';


function ProjectContainer(){
    return (
        <Router>
            <ProjectNav/>

            <Switch>
                <Route path="/project1" render={() => {
                    return <><h1>Project1</h1><ProjectInfo/></>

                   
                }}
                />

                <Route path="/project2" render={() => {
                    return <><h1>Project2</h1><ProjectInfo/></>

                   
                }}
                />

                <Route path="/project3" render={() => {
                    return <><h1>Project3</h1><ProjectInfo/></>

                   
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