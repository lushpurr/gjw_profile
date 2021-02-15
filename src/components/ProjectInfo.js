import React from 'react';
import Face from '.././images/face.jpg';
import Clipboard from "clipboard";
import classNames from 'classnames';

import {FaEnvelope ,FaGithub, FaLinkedin} from 'react-icons/fa';

import '../components/projects/Projects.css';

const clip = new Clipboard(".btn");

clip.on("success", function(){
    alert("Email address copied to clipboard.");
});

clip.on("error", function(){
    alert("Cant' copy email address to clipboard, sorry");
});

const emailClass = classNames('btn', 'contact-details');

const ProjectInfo = () => {


    return (
        <>
        <h3>Portfolio - Pick a project for more info</h3> 
        <span>
            <div id="project-info">
                <img className="project-face" src={Face}/>
                <ul>
                    <li>Languages: Javascript, Python, Java</li>
                    <li>Frontend Frameworks: React, Vue.js, Flask</li>
                    <li>Other Technologies: IntelliJ, Node.js, MongoDB, Git, Github, Html5, CSS, Mocha, Express.js, Spring, PostgreSQL</li>
                    <li id="blank-li"></li>
                    <li className={emailClass} data-clipboard-text="gavinjwill@gmail.com"><FaEnvelope className="icon" />Email</li>
                    <li className="contact-details"><a href="https://www.linkedin.com/in/gavin-j-will"><FaLinkedin className="icon" />LinkedIn</a></li>
                    <li className="contact-details"><a href="https://github.com/lushpurr"><FaGithub className="icon" />Github</a></li>
                    
                </ul>
            </div>
        </span>
        </>
    )
}

export default ProjectInfo;