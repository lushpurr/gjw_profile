import React from 'react';
import './ProjectInfo.css'
import Face from '.././images/face.jpg';
import '../components/projects/Projects.css';



const ProjectInfo = () => {



    return (
        <>
        <h3>Portfolio - Pick a project for more info</h3> 
        <span>
        <div id="project-info">
        <img className="project-image" src={Face}/>
        <ul>
            <li>Languages: Javascript, Python, Java</li>
        
            <li>Frontend Frameworks: React, Vue.js, Flask</li>
            <li>Other Technologies: Node.js, MongoDB, Git, Github, Html5, CSS, Mocha, Express.js Spring, PostgreSQL</li>
            <li id="blank-li"></li>
            <li className="contact-details">gavinjwill@gmail.com</li>
            <li className="contact-details"><a href="https://www.linkedin.com/in/gavin-j-will">LinkedIn</a></li>
            <li className="contact-details"><a href="https://github.com/lushpurr">Github</a></li>


        </ul>
 
        </div>
        </span>

        </>
    )
}

export default ProjectInfo;