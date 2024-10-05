// src/components/Achievements.js
import React from 'react';

function Achievements({ achievements }) {
  return (
    <section id="achievements" className="section">
      <div className="section-content">
        <h2>Achievements</h2>
        <ul className="achievements-list">
          {achievements.map((achievement, index) => (
            <li key={index}>
              {achievement}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Achievements;
