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
        {/* <h3>Portfolio - Pick a project for more info</h3>  */}
        <span>
            <div id="project-info">
                <img alt="profile" className="project-face" src={Face}/>
                <ul>
                    <li style={{ 'padding-bottom': 10, 'list-style-type': 'square'}}>Mid-level Software Developer with a background in engineering, I use strong problem-solving skills, attention to detail, and a drive for continuous learning to deliver full-stack web and mobile solutions.</li>

                    <li style={{'list-style-type': 'square'}}>Typescript, Javascript, Python, Java,  Angular, React, Vue.js, Ionic, Xcode, Android Studio, GraphQl, Tailwind, HTML, CSS, SCSS/SASS, AWS Amplify, AppSync, DynamoDB, CloudWatch, Git, MongoDB, PostgreSQL, Figma, Storybook, Chromatic, VS Code, Jira, Cypress, Mocha,  Express, Spring</li>

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