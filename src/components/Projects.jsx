import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      title: 'TaskTrek',
      date: 'Aug 2024 - Sep 2024',
      description: `A MERN stack todo application with email verification, auto login, and JWT authentication. 
        Features include email verification via OTP, auto login, secure API endpoints, and user & todo management.`,
      tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    },
    {
      title: 'DeVo',
      date: 'Feb 2024 - May 2024',
      description: `A decentralized E-Voting system using blockchain technology for secure and transparent voting. 
        Features include a React.js frontend and Solidity for smart contracts.`,
      tech: ['React.js', 'Solidity', 'Blockchain'],
    },
    {
      title: 'Sign-to-Speech Translator',
      date: 'Aug 2023 - Nov 2023',
      description: `A GUI-based sign-to-speech translator using Python, OpenCV, and TensorFlow. The application captures 
        sign language gestures and translates them into text and speech.`,
      tech: ['Python', 'OpenCV', 'TensorFlow'],
    },
  ];

  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <span>{project.date}</span>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.tech.map((tech, index) => (
                <span key={index} className="tech-item">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
