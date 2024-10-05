// src/App.js
import React from 'react';
import Header from './components/Header';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Footer from './components/Footer';
import './styles.css';

function App() {
  const profileImage = 'data:image/png;base64,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'; // Path relative to public folder
  const socialLinks = [
    { url: 'https://linkedin.com/in/sukanth-r-24638a259', icon: 'fab fa-linkedin' },
    { url: 'https://github.com/Sukanth-R', icon: 'fab fa-github' }
  ];
  const skills = [
    [
      { icon: 'fab fa-python', name: 'Python' },
      { icon: 'fab fa-java', name: 'Java' },
      { icon: 'fas fa-code', name: 'Golang' },
      { icon: 'fab fa-js', name: 'Javascript' }
    ],
    [
      { icon: 'fab fa-html5', name: 'HTML' },
      { icon: 'fab fa-css3-alt', name: 'CSS' },
      { icon: 'fab fa-react', name: 'React' },
      { icon: 'fab fa-node-js', name: 'Node.js' }
    ],
    [
      { icon: 'fas fa-server', name: 'Firebase' },
      { icon: 'fas fa-database', name: 'MySQL' },
      { icon: 'fas fa-database', name: 'MongoDB' },
      { icon: 'fab fa-git-alt', name: 'Github' }
    ]
  ];
  const projects = [
    {
      image: '/assets/bus-management-system.png',
      title: 'Bus Management System',
      description: 'A web application that allows students and parents to track their respective route buses. In this project I used Leaflet API for the Map Services.',
      technologies: 'HTML, CSS, Bootstrap, JavaScript, Node.js, Express'
    },
    {
      image: '/assets/facts-app.png',
      title: 'Facts App',
      description: 'A web application that provides facts about different engineering fields. This project was done as part of a department-level hackathon.',
      technologies: 'Python, ReactJS'
    }
  ];
  const achievements = [
    'Awarded as Department Level Best Performer for my Coding Contest activities during our College\'s 39th Annual Day',
    '3rd Prize for Idea Presentation at the Department-Level Ideathon at Kongu Engineering College for the project Tour Eaze (a travel and tourism-based site).'
  ];

  return (
    <>
      <Header
        title="Sukanth R"
        subtitle="Full Stack Developer"
        tagline="Thrive to work in competitive workspace"
        profileImage={profileImage}
        socialLinks={socialLinks}
      />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Achievements achievements={achievements} />
      <Footer />
    </>
  );
}

export default App;
