import React from 'react';
import './About.css'; 

const About = () => {
  return (
    <div className="about-container">
      <h2 className="about-title">About Me</h2>
      <p className="about-text">
        My name is Bhagwat Madhukar Solunke, and I am a software engineering student.
      </p>
      <p className="about-text">
        This is the About page of the iNotebook web application that I developed using the MERN stack.
      </p>
      <p className="about-text">
        You can find the project's source code on my GitHub repository: 
        <a className="github-link" href="https://github.com/bhagwatsolunke/inotebook" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
      </p>
    </div>
  );
};

export default About;
