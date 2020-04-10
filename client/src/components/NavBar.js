import React from 'react';
import useDarkMode from '../hooks/useDarkMode';

const Navbar = () => {
  
  const [darkMode, setDarkMode] = useDarkMode(false);

  const darkModeToggler = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <nav className="navbar" htmlFor="navbar" data-testid="navbar">
        <h1 id="navbarHeader" data-testid="mainTitle" >Women's World Cup players ranked by search interest</h1>
        <button id="navbarButton" onClick={darkModeToggler}>Dark Mode</button>
    </nav>
  );
};

export default Navbar;