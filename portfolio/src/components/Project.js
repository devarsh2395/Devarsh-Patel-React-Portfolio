import React from 'react';

function Project(props) {
  return (
    <div className="project">
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <div className="links">
        <a href={props.deployedLink}>Deployed App</a>
        <a href={props.githubLink}>GitHub Repo</a>
      </div>
    </div>
  );
}

export default Project;