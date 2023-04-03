import React from 'react';
import Project from './Project';
const spacetrek = require('../images/Space-Trek.png');
const asana = require('../images/Asana.png');
const jate = require('../images/jate.png');
const weather = require('../images/weather-dashboard.png');
const workday = require('../images/workday-scheduler.png');
const event = require('../images/event.png');


const Portfolio = () => {
  const projects = [
    {
      title: 'Asana',
      description: 'A seamless user experience for all your yoga needs.',
      image: asana ,
      github: 'https://github.com/Tegrty/lets-kick-asana',
      deploy: 'https://kick-asana.herokuapp.com/login'
    },
    {
      title: 'JDT Eventworks',
      description: ' Our app allows event planners to easily create and manage events',
      image: event ,
      github: 'https://github.com/ThomasCalle/UTOR-PROJECT-03.git',
      deploy: 'https://jdt-events.herokuapp.com/'
    },
    {
      title: 'Space Trek',
      description: 'The web page provides an interactive experience for users interested in space and Mars exploration.',
      image: spacetrek,
      github: 'https://github.com/ScorpionFiko/UTOR-PROJ01-TEAM12-Space-Trek',
      deploy: 'https://scorpionfiko.github.io/UTOR-PROJ01-TEAM12-Space-Trek/'
    },
    {
      title: 'Progressive Web Application',
      description: 'JATE is a web app that lets developers create and store notes or code snippets offline or online',
      image: jate,
      github: 'https://github.com/devarsh2395/Progressive-Web-Applications-PWA-Challenge-Text-Editor',
      deploy: 'https://pwa-web-app-devarsh.herokuapp.com/'
    },
    {
      title: 'Weather Dashboard Project',
      description: 'Planning ahead is easier with the 5-day forecast which gives you an insight into the weather for the next five days.',
      image: weather,
      github: 'https://github.com/devarsh2395/Weather-Dashboard-Project',
      deploy: 'https://devarsh2395.github.io/Weather-Dashboard-Project/'
    },
    {
      title: 'Workday Scheduler',
      description: 'This application is a comprehensive work day calendar that helps users to plan and organize their daily schedule effectively.',
      image: workday,
      github: 'https://github.com/devarsh2395/Work-day-Scheduler-Project',
      deploy: 'https://devarsh2395.github.io/Work-day-Scheduler-Project/'
    },
    
  ];

  return (
    <section className="container my-5">
      <h1 className="text-center">Portfolio</h1>
      <hr />
      <div className="row">
        {projects.map((project, index) => (
         <Project project = {project} key= {"project" + index}/>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;