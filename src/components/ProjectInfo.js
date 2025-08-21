import React from 'react';
import Face from '.././images/face_medium.jpeg';
import Clipboard from "clipboard";
import classNames from 'classnames';
import './ProjectInfo.css'

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
            <div >
                <div className="project-info-container">
                    <img alt="profile" className="project-face" src={Face}/>
                    <ul>
                        <li style={{ 'paddingBottom': 10, 'listStyleType': 'square'}}>I use strong problem-solving skills, attention to detail, and a drive for continuous learning to deliver full-stack web and mobile solutions.</li>

                        <li style={{'listStyleType': 'square'}}>Typescript, Javascript, Python, Java,  Angular, React, Vue.js, Ionic, Xcode, Android Studio, GraphQl, Tailwind, HTML, CSS, SCSS/SASS, AWS Amplify, AppSync, DynamoDB, CloudWatch, Git, MongoDB, PostgreSQL, Figma, Storybook, Chromatic, VS Code, Jira, Cypress, Mocha,  Express, Spring</li>

                        <li id="blank-li"></li>
                        <li className={emailClass} data-clipboard-text="gavinjwill@gmail.com"><FaEnvelope /><div>Email</div></li>
                        <li className="contact-details"><a className="link" href="https://www.linkedin.com/in/gavin-j-will" target="_blank" rel="noreferrer"><FaLinkedin />LinkedIn</a></li>
                        <li className="contact-details"><a className="link" href="https://github.com/lushpurr" target="_blank" rel="noreferrer"><FaGithub />Github</a></li>
                    </ul>
                </div>              
            </div>
        </>
    )
}

export default ProjectInfo;