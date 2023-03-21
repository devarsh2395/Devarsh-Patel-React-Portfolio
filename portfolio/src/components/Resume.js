import React from 'react';
import './style.css';

const Resume = () => {
  return (
    <section id="resume">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 section-header">
            <h2>Resume</h2>
            <h3>More about my credentials</h3>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12">
            <div className="resume-download">
              <a href="/path/to/resume.pdf" download>Download My Resume</a>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12">
            <div className="resume-skills">
              <h4>Proficiencies</h4>
              <ul className="list-inline">
                <li className="list-inline-item">HTML/CSS/Bootstrap</li>
                <li className="list-inline-item">JavaScript/jQuery</li>
                <li className="list-inline-item">Node.js</li>
                <li className="list-inline-item">React</li>
                <li className="list-inline-item">MYSQL</li>
                <li className="list-inline-item">NoSQL</li>
                <li className="list-inline-item">Model View Controller</li>
                <li className="list-inline-item">Progressive Web Applications</li>
                <li className="list-inline-item">Git</li>
                <li className="list-inline-item">Agile Methodologies/Scrum</li>
                <li className="list-inline-item">Heroku</li>
                <li className="list-inline-item">Node.js</li>
                <li className="list-inline-item">Express.js</li>
                <li className="list-inline-item">Object Oriented Programming</li>
                <li className="list-inline-item">Test Driven Development</li>
                <li className="list-inline-item">REST APIs</li>
                <li className="list-inline-item">JSON</li>


              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;