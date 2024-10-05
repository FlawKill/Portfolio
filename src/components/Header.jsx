import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>Ayush Dayal</h1>
      <h2>MERN Stack Web Developer</h2>
      <p>
        <a href="https://github.com/FlawKill" target="_blank" rel="noopener noreferrer">GitHub</a> | 
        <a href="https://www.linkedin.com/in/ayushdayal" target="_blank" rel="noopener noreferrer"> LinkedIn</a> | 
        <a href="mailto:ayushdayal7300@gmail.com"> Email</a>
      </p>
    </header>
  );
}

export default Header;
