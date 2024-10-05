// src/components/Skills.js
import React from 'react';

function Skills({ skills }) {
  return (
    <section id="skills" className="section">
      <div className="section-content">
        <h2>Skills</h2>
        <div className="skills-container">
          {skills.map((skillColumn, colIndex) => (
            <div key={colIndex} className="skills-column">
              {skillColumn.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-item">
                  <i className={skill.icon}></i>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
