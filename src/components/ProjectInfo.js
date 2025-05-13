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
                <img alt="profile" className="project-face" src={Face}/>
                <ul>
                    <li>Languages: Javascript, Typescript, Python, Java</li>
                    <li>Frontend Frameworks: Angular, Ionic, React, Vue.js</li>
                    <li>Other Technologies: Visual studio code, IntelliJ, Node.js, Git, Github, Html5, CSS, Mocha, Express.js, Spring, PostgreSQL, MongoDB</li>
                    <li id="blank-li"></li>
                    <li className={emailClass} data-clipboard-text="gavinjwill@gmail.com"><FaEnvelope /><div>Email</div></li>
                    <li className="contact-details"><a className="link" href="https://www.linkedin.com/in/gavin-j-will" target="_blank" rel="noreferrer"><FaLinkedin />LinkedIn</a></li>
                    <li className="contact-details"><a className="link" href="https://github.com/lushpurr" target="_blank" rel="noreferrer"><FaGithub />Github</a></li>
                    
                </ul>
            </div>
        </span>
        </>
    )
}

export default ProjectInfo;