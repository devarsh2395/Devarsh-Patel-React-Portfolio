import React from 'react';
import Project from './Project';

const Portfolio = () => {
  const projects = [
    {
      title: 'Asana',
      description: 'A seamless user experience for all your yoga needs.',
      image: './assets/images/asana.png',
      github: 'https://github.com/Tegrty/lets-kick-asana',
      deploy: 'https://kick-asana.herokuapp.com/login'
    },
    {
      title: 'Space Trek',
      description: 'The web page provides an interactive experience for users interested in space and Mars exploration.',
      image: './assets/images/space-trek.png',
      github: 'https://github.com/ScorpionFiko/UTOR-PROJ01-TEAM12-Space-Trek',
      deploy: 'https://scorpionfiko.github.io/UTOR-PROJ01-TEAM12-Space-Trek/'
    },
    {
      title: 'Progressive Web Application',
      description: 'JATE is a web app that lets developers create and store notes or code snippets offline or online',
      image: './assets/images/jate.png',
      github: 'https://github.com/devarsh2395/Progressive-Web-Applications-PWA-Challenge-Text-Editor',
      deploy: 'https://pwa-web-app-devarsh.herokuapp.com/'
    },
    {
      title: 'Project 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://via.placeholder.com/300x200',
      github: 'https://github.com/yourusername/project2',
      deploy: 'https://yourdeploylink.com/project2'
    },
    {
      title: 'Project 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://via.placeholder.com/300x200',
      github: 'https://github.com/yourusername/project2',
      deploy: 'https://yourdeploylink.com/project2'
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