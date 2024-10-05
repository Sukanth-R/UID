// src/components/Projects.js
import React from 'react';

function Projects({ projects }) {
  return (
    <section id="projects" className="section">
      <div className="section-content">
        <h2>Projects</h2>
        <div className="projects-container">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p><strong>Technologies Used:</strong> {project.technologies}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
